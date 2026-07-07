"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MeetPatrick() {
  return (
    <section
      id="patrick"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <Image
        src="/images/patrick/meet-patrick.jpg"
        alt="Patrick Davidson"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

      <div className="relative z-10 flex min-h-screen items-end pb-24 pt-32">
        <div className="w-full max-w-7xl pl-8 pr-8 md:pl-12 md:pr-16 lg:pl-20 lg:pr-24">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              Meet Patrick
            </p>

            <h2 className="text-5xl font-black uppercase italic leading-[0.88] tracking-tight md:text-7xl xl:text-8xl">
              Flying
              <br />
              Was Never
              <br />
              Just An
              <br />
              Ambition.
            </h2>

            <p className="mt-6 text-2xl font-bold uppercase italic tracking-wide text-yellow-400 md:text-3xl">
              It Became A Way Of Life.
            </p>

            <p className="mt-8 max-w-xl text-lg leading-9 text-white/70 md:text-xl">
              Patrick Davidson is a professional display pilot, Red Bull athlete,
              aerobatic champion and 2025 AIR RACE X Champion.
            </p>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-2 md:grid-cols-4">
              <AnimatedStat end={5500} suffix="+" label="Flying Hours" />
              <AnimatedStat end={30} suffix="+" label="Years Flying" />
              <AnimatedStat end={6} suffix="×" label="SA Aerobatic Champion" />
              <Stat value="2025" label="AIR RACE X Champion" />
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
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1400;
    const startTime = performance.now();

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [started, end]);

  return (
    <div ref={ref}>
      <p className="text-4xl font-black">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-black">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}