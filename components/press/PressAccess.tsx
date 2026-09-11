"use client";

import { useEffect, useState } from "react";
import styles from "@/app/press/press.module.css";

export default function PressAccess({ admin = false }: { admin?: boolean }) {
  const [token, setToken] = useState("");
  const [ready, setReady] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    function readInvitation() {
      const value = new URLSearchParams(window.location.hash.slice(1)).get("access") ?? "";
      if (value) {
        // Fragments are never sent to the server. Remove the credential from
        // browser history before rendering the form or loading other resources.
        history.replaceState(null, "", window.location.pathname);
      }
      queueMicrotask(() => {
        if (value) setToken(value);
        setReady(true);
      });
    }
    readInvitation();
    window.addEventListener("hashchange", readInvitation);
    return () => window.removeEventListener("hashchange", readInvitation);
  }, []);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true); setError("");
    const data = new FormData(event.currentTarget);
    try {
      const response = await fetch("/press/access", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({
        token, name: data.get("name"), email: data.get("email"), acceptEmbargo: admin || data.get("embargo") === "on",
      }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Please try again.");
      window.location.replace(result.next);
    } catch (failure) { setError(failure instanceof Error ? failure.message : "Please try again."); setPending(false); }
  }

  return <main className={styles.gate}>
    <div className={styles.gateInner}>
      <p className={styles.eyebrow}>Flying Davidson / Team 77</p>
      <h1>{admin ? "Your press dashboard." : "The official press room."}</h1>
      <p className={styles.gateIntro}>{admin ? "Open your private management link to view media activity." : "Official stories, photographs and media resources. Public access opens Sunday 13 September 2026 at 15:30 SAST."}</p>
      {!ready && <p>Preparing access…</p>}
      {ready && token && <form onSubmit={submit} className={styles.accessForm}>
        {!admin && <>
          <label>Your name<input name="name" autoComplete="name" required minLength={2} maxLength={120} /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
          <label className={styles.check}><input type="checkbox" name="embargo" required /><span>I agree not to publish or share the result or embargoed materials before <strong>Sunday 13 September 2026 at 15:30 SAST / 13:30 UTC</strong>.</span></label>
          <p className={styles.formNote}>Team 77 uses your details to record embargo acceptance and respond to media enquiries. Your access is remembered on this browser.</p>
        </>}
        <button className={styles.primary} disabled={pending}>{pending ? "Opening…" : admin ? "Open dashboard" : "Open press room"}</button>
        {error && <p role="alert" className={styles.error}>{error}</p>}
      </form>}
      {ready && !token && <p className={styles.formNote}>{admin ? "Please use the private dashboard link supplied to Greg." : "If you have a media invitation, open the link Greg sent you. For early access or an interview, contact Greg below."}</p>}
      <a className={styles.contactLink} href="mailto:greg@flyingdavidson.com">greg@flyingdavidson.com ↗</a>
    </div>
  </main>;
}
