"use client";

import { getImageProps } from "next/image";
import { useEffect, useState, type CSSProperties } from "react";

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

  const {
    props: { srcSet: mobileSrcSet, ...mobileImageProps },
  } = getImageProps({
    src: "/images/hero/hero-mobile.jpg",
    alt: "Patrick Davidson",
    fill: true,
    fetchPriority: "high",
    loading: "eager",
    quality: 90,
    sizes: "100vw",
  });

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    src: "/images/hero/hero-main.webp",
    alt: "Patrick Davidson",
    fill: true,
    fetchPriority: "high",
    loading: "eager",
    quality: 90,
    sizes: "100vw",
  });

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div
        className="hero-media absolute inset-0"
        style={{
          "--hero-image-offset": `${imageMove + 40}px`,
        } as CSSProperties}
      >
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={desktopSrcSet}
            sizes="100vw"
          />
          <img
            {...mobileImageProps}
            srcSet={mobileSrcSet}
            alt="Patrick Davidson"
            className="object-cover object-[center_top] md:object-[center_18%]"
          />
        </picture>
      </div>

      {/* Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
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
              <div className="flex items-start gap-3 text-[#e5c785]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 h-5 w-5 shrink-0"
                >
                  <path d="M7 3h10v7a5 5 0 0 1-10 0V3Z" />
                  <path d="M7 5H4v2a4 4 0 0 0 3 3.87M17 5h3v2a4 4 0 0 1-3 3.87M12 15v4m-4 2h8m-7-2h6" />
                </svg>
                <div>
                  <p>2025 + 2026 Air Race X World Champion</p>
                  <p className="text-[10px] font-bold tracking-[0.3em] text-[#d4b16a]">
                    Back-to-back titles
                  </p>
                </div>
              </div>
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
