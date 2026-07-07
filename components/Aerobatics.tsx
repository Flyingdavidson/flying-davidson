"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const portraitSlides = [
  "/images/aerobatics/aero-smoke-ring.jpg",
  "/images/aerobatics/aero-smoke-cloud.jpg",
  "/images/aerobatics/aero-close.jpg",
];

export default function Aerobatics() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % portraitSlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="aerobatics" className="bg-black text-white">
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/aerobatics/aero-flag.jpg"
          alt="Patrick Davidson aerobatic display with South African flag"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

        <div className="relative z-10 grid min-h-screen items-center gap-10 px-8 py-24 md:grid-cols-[1fr_0.8fr] md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-red-400/90">
              Aerobatics
            </p>

            <h2 className="text-6xl font-black uppercase italic leading-[0.85] tracking-tight md:text-8xl">
              The Sky
              <br />
              Is The
              <br />
              Canvas.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/75">
              Aerobatics is where precision becomes performance. Every display
              is carefully planned, flown with intent and drawn across the sky
              in smoke.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Tag>Precision</Tag>
              <Tag>Smoke</Tag>
              <Tag>Performance</Tag>
            </div>
          </div>

          <div className="relative hidden justify-end md:flex">
            <div className="relative h-[520px] w-[360px] overflow-hidden border border-white/15 bg-black/40 p-3 shadow-2xl backdrop-blur-sm">
              {portraitSlides.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt="Patrick Davidson aerobatic display"
                  fill
                  className={`object-contain p-3 transition-all duration-700 ${
                    active === index
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
              ))}
            </div>

            <div className="absolute -bottom-8 right-0 flex gap-3">
              {portraitSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1.5 w-10 transition ${
                    active === index ? "bg-red-400" : "bg-white/30"
                  }`}
                  aria-label={`Show aerobatics image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-white/15 bg-black/25 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
      {children}
    </span>
  );
}