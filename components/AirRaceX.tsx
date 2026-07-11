"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AirRaceX() {
  return (
    <section id="airracex" className="bg-black text-white">
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/air-race-x/arx-hero.jpg"
          alt="Patrick Davidson Air Race X aircraft"
          fill
          className="object-cover object-[75%_32%]"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/20" />

        <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-8">
          <div className="max-w-2xl pt-14">
            <p className="mb-5 flex items-center gap-5 text-xs uppercase tracking-[0.6em] text-[#62d6aa]">
              <span className="h-px w-14 bg-[#62d6aa]" />
              Air Race X
            </p>

            <h2 className="text-5xl font-black uppercase italic leading-[0.95] tracking-tight md:text-7xl">
              Where
              <br />
              <span className="text-[#62d6aa]">milliseconds</span>
              <br />
              decide
              <br />
              champions.
            </h2>

            <p className="mt-7 max-w-lg text-base leading-8 text-white/75">
              Air Race X is one of the purest tests of flying precision in the
              world. Every gate, every turn and every decision is measured in
              milliseconds. There are no second chances — only preparation,
              precision and commitment.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              <a
                href="/championship"
                className="inline-flex items-center gap-6 border border-[#62d6aa] px-7 py-4 text-xs uppercase tracking-[0.35em] text-[#62d6aa] transition hover:bg-[#62d6aa] hover:text-black"
              >
                Results for 2026
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div>
            <div className="grid gap-6 border-y border-white/10 bg-black/25 py-6 text-center backdrop-blur-[2px] sm:grid-cols-2 md:grid-cols-5">
              <Stat value="2025" topLabel="Champion" bottomLabel="Air Race X" />

              <Stat
                value="2026"
                topLabel="Season"
                bottomLabel="In Progress"
              />

              <AnimatedStat
                end={426}
                suffix="km/h"
                topLabel="Top Speed"
                bottomLabel="Race Aircraft"
              />

              <AnimatedStat
                end={12}
                suffix="G"
                topLabel="Maximum Load"
                bottomLabel="Race Forces"
              />

              <a
                href="https://www.airracex.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit the official AIR RACE X website"
                className="group flex min-h-[110px] flex-col items-center justify-center px-4 py-2 transition hover:bg-white/5"
              >
                <Image
                  src="/images/logos/air-race-x.svg"
                  alt="AIR RACE X"
                  width={150}
                  height={40}
                  className="h-8 w-auto opacity-85 transition duration-300 group-hover:scale-105 group-hover:opacity-100"
                />

                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#62d6aa]">
                  Official Website
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/35 transition group-hover:text-white/70">
                  Visit →
                </p>
              </a>
            </div>

            <div className="py-6 text-center">
              <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                Every champion starts with a single lap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({
  end,
  suffix,
  topLabel,
  bottomLabel,
}: {
  end: number;
  suffix: string;
  topLabel: string;
  bottomLabel: string;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const startTime = performance.now();
    let animationFrameId = 0;

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(Math.floor(eased * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    }

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [started, end]);

  return (
    <div
      ref={ref}
      className="flex min-h-[110px] flex-col items-center justify-center px-4 py-2"
    >
      <p className="text-4xl font-black italic md:text-5xl">
        {value}
        <span className="ml-2 text-xl text-[#62d6aa]">{suffix}</span>
      </p>

      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#62d6aa]">
        {topLabel}
      </p>

      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/35">
        {bottomLabel}
      </p>
    </div>
  );
}

function Stat({
  value,
  topLabel,
  bottomLabel,
}: {
  value: string;
  topLabel: string;
  bottomLabel: string;
}) {
  return (
    <div className="flex min-h-[110px] flex-col items-center justify-center px-4 py-2">
      <p className="text-4xl font-black italic md:text-5xl">{value}</p>

      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#62d6aa]">
        {topLabel}
      </p>

      <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/35">
        {bottomLabel}
      </p>
    </div>
  );
}