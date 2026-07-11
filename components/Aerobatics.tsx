"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const portraitSlides = [
  "/images/aerobatics/aero-smoke-ring.jpg",
  "/images/aerobatics/aero-smoke-cloud.jpg",
  "/images/aerobatics/aero-close.jpg",
];

export default function Aerobatics() {
  const [active, setActive] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % portraitSlides.length);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  const openVideo = () => {
    setIsVideoOpen(true);

    window.setTimeout(() => {
      videoRef.current?.play().catch(() => {
        // Browser may require the visitor to press play manually.
      });
    }, 100);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }

    setIsVideoOpen(false);
  };

  return (
    <>
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

              <button
                type="button"
                onClick={openVideo}
                className="group mt-10 inline-flex items-center gap-4 border border-white/30 bg-black/35 px-6 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm transition duration-300 hover:border-red-400 hover:bg-red-500 hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 transition duration-300 group-hover:border-white">
                  <span className="ml-1 block h-0 w-0 border-y-[6px] border-y-transparent border-l-[9px] border-l-white" />
                </span>

                Watch Aerobatics Showreel
              </button>
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
                    type="button"
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

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-xl md:px-10"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeVideo();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Patrick Davidson aerobatics showreel"
        >
          <div className="relative w-full max-w-6xl">
            <button
              type="button"
              onClick={closeVideo}
              className="absolute -top-14 right-0 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-black/60 text-2xl text-white transition hover:border-red-400 hover:bg-red-500"
              aria-label="Close aerobatics video"
            >
              ×
            </button>

            <div className="overflow-hidden border border-white/15 bg-black shadow-2xl">
              <video
                ref={videoRef}
                className="aspect-video w-full bg-black object-contain"
                controls
                playsInline
                preload="metadata"
                poster="/images/aerobatics/aero-flag.jpg"
              >
                <source
  src="/videos/aerobatics/aerobatics-showreel-web.mp4"
  type="video/mp4"
/>

                Your browser does not support the video element.
              </video>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-white/45">
              <span>Patrick Davidson Aerobatics</span>
              <span>Press Esc to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-white/15 bg-black/25 px-5 py-3 text-xs uppercase tracking-[0.3em] text-white/70 backdrop-blur-sm">
      {children}
    </span>
  );
}