"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const imageMove = Math.min(scrollY * 0.15, 80);
  const nameMove = Math.min(scrollY * 0.08, 45);
  const fade = Math.max(1 - scrollY / 600, 0);

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div
        className="absolute inset-0 scale-105"
        style={{ transform: `translateY(${imageMove}px) scale(1.05)` }}
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Patrick Davidson"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/5 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

      <div
        className="relative z-10 flex min-h-screen flex-col"
        style={{ opacity: fade }}
      >
        {/* Name - upper right */}
        <div
          className="flex justify-end px-8 pt-20 md:px-16 lg:px-24"
          style={{ transform: `translateY(${nameMove}px)` }}
        >
          <h1 className="text-right text-6xl font-black uppercase leading-[0.82] tracking-[-0.05em] text-white md:text-8xl">
            Patrick
            <br />
            Davidson
          </h1>
        </div>

        {/* Lower third text */}
        <div className="mt-auto flex justify-start px-8 pb-24 md:px-16 lg:px-24">
          <div className="max-w-xl text-left">
            <div className="mb-7 h-px w-24 bg-white/40" />

            <div className="space-y-3 text-sm uppercase tracking-[0.32em] text-white/85">
              <p>Professional Pilot</p>
              <p>2025 • 2026 Air Race X Champion</p>
              <p>6× South African Aerobatic Champion</p>
            </div>

            <a
              href="#story"
              className="group mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/85 transition hover:text-white"
            >
              Explore
              <span className="transition duration-300 group-hover:translate-y-1">
                ↓
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}