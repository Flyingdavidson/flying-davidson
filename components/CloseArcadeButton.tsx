"use client";

import { useRouter } from "next/navigation";

type CloseArcadeButtonProps = {
  href?: string;
  label?: string;
};

export default function CloseArcadeButton({
  href,
  label = "Exit Arcade",
}: CloseArcadeButtonProps) {
  const router = useRouter();

  const closeArcade = () => {
    if (href) {
      router.push(href);
      return;
    }

    if (window.opener) {
      window.close();
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={closeArcade}
      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] text-white/60 transition hover:border-[#62ff00] hover:text-[#62ff00]"
    >
      ← {label}
    </button>
  );
}
