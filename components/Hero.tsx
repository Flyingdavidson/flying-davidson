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
      {/* Mobile Hero Image */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/images/hero/hero-mobile.jpg"
          alt="Patrick Davidson"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_top]"
        />
      </div>

      {/* Desktop Hero Image */}
      <div
        className="absolute inset-0 hidden scale-105 md:block"
        style={{
          transform: `translateY(${imageMove + 40}px) scale(1.05)`,
        }}
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Patrick Davidson"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_18%]"
        />
      </div>

      {/* Overlays */}
      <div className="pointer-event-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/20" />
      <div className="pointer-events-none absolute inset-0 bg-black/20" />

      <div
        className="pointer-events-none relative z-10 flex min-h-screen flex-col"
        style={{ opacity: fade }}
      >
        {/* Name */}
        <div
          className="px-6 pt-28 md:flex md:justify-end md:px-12 md:pt-24 lg:px-20"
          style={{ transform: `translateY(${nameMove}px)` }}
        >
          <h1 className="text-left text-4xl font-black uppercase leading-[0.88] tracking-[-0.04em] text-white sm:text-5xl md:text-right md:text-7xl xl:text-8xl">
            Patrick
            <br />
            Davidson
          </h1>
        </div>

        {/* Bottom Left */}
        <div className="mt-auto flex justify-start px-6 pb-20 md:px-16 md:pb-24 lg:px-24">
          <div className="max-w-xs sm:max-w-md md:max-w-xl">
            <div className="mb-6 h-px w-24 bg-white/40" />

            <div className="space-y-3 text-xs uppercase leading-7 tracking-[0.28em] text-white/85 sm:text-sm sm:tracking-[0.32em]">
              <p>Professional Pilot</p>
              <p>Red Bull Athlete</p>
              <p>2025 Air Race X World Champion</p>
              <p>6× South African Aerobatic Champion</p>
            </div>

            <a
              href="#story"
              className="pointer-events-auto group mt-8 inline-flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-white/85 transition hover:text-white"
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