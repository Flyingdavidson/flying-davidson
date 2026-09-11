import "server-only";
import { createDecipheriv, createHmac } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { neon } from "@neondatabase/serverless";

let storedKey: Promise<string> | undefined;
async function contentKey() {
  if (process.env.PRESS_CONTENT_KEY) return process.env.PRESS_CONTENT_KEY;
  if (!storedKey) {
    storedKey = (async () => {
      if (!process.env.DATABASE_URL) throw new Error("Press storage is not configured.");
      const sql = neon(process.env.DATABASE_URL);
      const rows = await sql`SELECT value FROM press_settings WHERE key = 'content_key_2026'`;
      if (typeof rows[0]?.value !== "string") throw new Error("Press storage is not configured.");
      return rows[0].value;
    })().catch((error) => { storedKey = undefined; throw error; });
  }
  return storedKey;
}

export async function pressSessionKey() {
  return createHmac("sha256", Buffer.from(await contentKey(), "base64url"))
    .update("flyingdavidson/press/session/v1").digest();
}

// The repository is public. Only authenticated ciphertext is committed;
// the key stays in the existing private database (or a server environment
// variable) and is never included in browser code or public source.
export async function readPressFile(relativePath: string) {
  const encoded = await contentKey();
  const key = Buffer.from(encoded, "base64url");
  if (key.length !== 32) throw new Error("Press storage key is invalid.");
  const encrypted = await readFile(path.join(process.cwd(), "assets/press/2026", relativePath + ".enc"));
  const decipher = createDecipheriv("aes-256-gcm", key, encrypted.subarray(0, 12));
  decipher.setAuthTag(encrypted.subarray(12, 28));
  return Buffer.concat([decipher.update(encrypted.subarray(28)), decipher.final()]);
}

export type PressContent = {
  headline: string;
  deck: string;
  hero: { line1: string; line2: string; intro: string };
  paragraphs: string[];
  news: { category: string; date: string; title: string; text: string; href: string };
};

export async function getPressContent(): Promise<PressContent> {
  return JSON.parse((await readPressFile("content.json")).toString("utf8"));
}
