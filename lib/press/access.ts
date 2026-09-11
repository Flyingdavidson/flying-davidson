import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import accessList from "./access-list.json";
import { pressSessionKey } from "./storage";

export const ACCESS_COOKIE = "fd_press_access";
export const VISITOR_COOKIE = "fd_press_visitor";
export const SOURCE_COOKIE = "fd_press_source";
export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/press",
};

export function verifyPressToken(token: unknown, now = new Date()) {
  if (typeof token !== "string" || !/^[A-Za-z0-9_-]{43}$/.test(token)) return null;
  const hash = createHash("sha256").update(token).digest();
  const entry = accessList.find((item) =>
    timingSafeEqual(Buffer.from(item.hash, "hex"), hash)
  );
  if (!entry || now.getTime() >= new Date(entry.expires).getTime()) return null;
  return { id: entry.id, label: entry.label, role: entry.role };
}

export async function createPressSession(token: string) {
  const payload = `${token}.${Math.floor(Date.now() / 1000) + 7 * 86400}`;
  const signature = createHmac("sha256", await pressSessionKey()).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

export async function getPressAccess() {
  const value = (await cookies()).get(ACCESS_COOKIE)?.value ?? "";
  const [token, expires, signature, extra] = value.split(".");
  if (extra || !/^\d{10}$/.test(expires ?? "") || !/^[A-Za-z0-9_-]{43}$/.test(signature ?? "")) return null;
  const access = verifyPressToken(token);
  if (!access || Number(expires) <= Date.now() / 1000) return null;
  const expected = createHmac("sha256", await pressSessionKey()).update(`${token}.${expires}`).digest();
  return timingSafeEqual(expected, Buffer.from(signature, "base64url")) ? access : null;
}

export function normalizePressSource(value: unknown) {
  return typeof value === "string" && accessList.some((entry) => entry.role === "press" && entry.id === value)
    ? value : "direct";
}

export function pressSourceLabel(id: string) {
  return accessList.find((entry) => entry.id === id)?.label ?? "Website / shared link";
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const url = new URL(request.url);
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host") || url.host;
  const protocol = request.headers.get("x-forwarded-proto") || url.protocol.replace(":", "");
  return origin === `${protocol}://${host}`;
}
