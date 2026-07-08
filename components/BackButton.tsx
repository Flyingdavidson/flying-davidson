"use client";

import { useRouter } from "next/navigation";

export default function BackButton({
  fallback = "/",
}: {
  fallback?: string;
}) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  };

  return (
    <button
      onClick={handleBack}
      className="mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
    >
      ← Return
    </button>
  );
}