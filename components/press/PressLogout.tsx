"use client";
export default function PressLogout() {
  return <button type="button" onClick={async () => {
    await fetch("/press/access", { method: "DELETE" });
    window.location.replace("/press");
  }}>Sign out</button>;
}
