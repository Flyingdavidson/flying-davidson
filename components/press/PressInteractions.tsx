"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/app/press/press.module.css";

export default function PressInteractions({ enabled }: { enabled: boolean }) {
  const viewId = useRef<string | null>(null);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!notice) return;
    const timeout = window.setTimeout(() => setNotice(""), 3000);
    return () => window.clearTimeout(timeout);
  }, [notice]);

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.slice(1)).get("access");
    if (token) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
      void fetch("/press/access", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, acceptEmbargo: true }) })
        .then((response) => response.ok ? response.json() : null)
        .then((result) => { if (result?.next) window.location.replace(result.next); })
        .catch(() => {});
      return;
    }
    const source = new URLSearchParams(window.location.search).get("source") ?? "";
    function record(event: "view" | "link", asset = "", id = crypto.randomUUID()) {
      if (!enabled) return;
      void fetch("/press/events", { method: "POST", keepalive: true, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, event, asset, source }) }).catch(() => {});
    }
    if (!viewId.current) viewId.current = crypto.randomUUID();
    record("view", "", viewId.current);
    let videoRecorded = false;
    function played(event: Event) {
      if (!videoRecorded && event.target instanceof HTMLVideoElement && event.target.dataset.pressVideo) {
        videoRecorded = true;
        record("link", "video-play");
      }
    }
    async function clicked(event: MouseEvent) {
      const button = (event.target as Element).closest<HTMLElement>("[data-press-action]");
      if (!button) return;
      const action = button.dataset.pressAction ?? "";
      record("link", action);
      if (action.startsWith("copy-")) {
        const target = button.dataset.copyTarget;
        const text = action === "copy-link" ? "https://www.flyingdavidson.com/press" : target ? document.getElementById(target)?.innerText : "";
        if (!text) return;
        try { await navigator.clipboard.writeText(text); setNotice(action === "copy-link" ? "Press room link copied." : "Copied to clipboard."); }
        catch { setNotice("Select the text to copy it, or use the text download."); }
      }
    }
    document.addEventListener("click", clicked);
    document.addEventListener("play", played, true);
    return () => {
      document.removeEventListener("click", clicked);
      document.removeEventListener("play", played, true);
    };
  }, [enabled]);

  return <p className={styles.copyNotice} role="status" aria-live="polite">{notice}</p>;
}
