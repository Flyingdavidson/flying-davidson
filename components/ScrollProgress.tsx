"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function updateScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setProgress(scrollPercent);
      setVisible(scrollTop > 400);
    }

    window.addEventListener("scroll", updateScroll);
    updateScroll();

    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={backToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition duration-300 hover:bg-white hover:text-black ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Back to top"
    >
      <svg className="absolute inset-0 h-14 w-14 -rotate-90">
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="28"
          cy="28"
          r="24"
          stroke="white"
          strokeWidth="2"
          fill="none"
          strokeDasharray="150.8"
          strokeDashoffset={150.8 - (150.8 * progress) / 100}
          strokeLinecap="round"
        />
      </svg>

      <span className="relative text-xl">↑</span>
    </button>
  );
}