"use client";

import Image from "next/image";
import Link from "next/link";
import { AircraftData } from "@/app/types/aircraft";

type HeroProps = {
  aircraft: AircraftData;
};

export default function Hero({ aircraft }: HeroProps) {
  return (
    <section className="relative min-h-[72vh] overflow-hidden md:min-h-screen">
      <Image
  src={aircraft.hero}
  alt={aircraft.name}
  fill
  priority
  sizes="100vw"
  className="object-cover"
  style={{
    objectPosition: aircraft.heroPosition ?? "center",
  }}
/>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/5" />

      <div className="relative z-10 flex min-h-[72vh] items-end md:min-h-screen">
        <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">

          <Link
            href="/hangar"
            className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
          >
            ← Back to The Fleet
          </Link>

          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
            {aircraft.category}
          </p>

          <h1 className="max-w-5xl whitespace-pre-line text-5xl font-black uppercase italic leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            {aircraft.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl md:leading-9">
            {aircraft.description}
          </p>

        </div>
      </div>
    </section>
  );
}