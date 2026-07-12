"use client";

export default function CloseArcadeButton() {
  const closeArcade = () => {
    if (window.opener) {
      window.close();
      return;
    }

    window.location.href = "/";
  };

  return (
    <button
      type="button"
      onClick={closeArcade}
      className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.28em] text-white/60 transition hover:border-[#62ff00] hover:text-[#62ff00]"
    >
      ← Exit Arcade
    </button>
  );
}