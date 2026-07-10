"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const gallery = [
  "/images/edge/edge01.jpg",
  "/images/edge/edge02.jpg",
  "/images/edge/edge05.jpg",
  "/images/edge/edge06.jpg",
  "/images/edge/edge07.jpg",
  "/images/edge/edge08.jpg",
  "/images/edge/edge09.jpg",
  "/images/edge/edge10.jpg",
  "/images/edge/edge12.jpg",
  "/images/edge/edge13.jpg",
  "/images/edge/edge14.jpg",
  "/images/edge/edge15.jpg",
];

const wideImageIndexes = [0, 3, 6, 9, 11];

export default function Edge540Page() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === 0 ? gallery.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === gallery.length - 1 ? 0 : current + 1;
    });
  }, []);

  useEffect(() => {
    if (activeImage === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeImage, closeLightbox, showNext, showPrevious]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden md:min-h-screen">
        <Image
          src="/images/edge/edge01.jpg"
          alt="Patrick Davidson's Edge 540 V3"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
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
              AIR RACE X Machine
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              Edge
              <br />
              540 V3.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl md:leading-9">
              Built for speed, precision and repeatability. Patrick’s Edge 540
              V3 is the machine behind Team 77’s AIR RACE X campaign.
            </p>
          </div>
        </div>
      </section>

      {/* AIRCRAFT INFORMATION */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-4 md:px-10">
          <AircraftStat label="Pilot" value="Patrick Davidson" />
          <AircraftStat label="Aircraft" value="Edge 540 V3" />
          <AircraftStat label="Team" value="Team 77" />
          <AircraftStat label="Competition" value="AIR RACE X" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
          Race-Bred Performance
        </p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="text-4xl font-black uppercase italic leading-[0.95] md:text-6xl lg:text-7xl">
            Precision
            <br />
            In Detail.
          </h2>

          <p className="max-w-xl text-base leading-7 text-white/60 md:text-lg md:leading-8">
            Designed around speed, control and extreme manoeuvrability, the Edge
            540 V3 gives Patrick the precision needed to race against the clock
            at low level and high G.
          </p>
        </div>
      </section>

      {/* AIRCRAFT GALLERY */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
        <div className="mb-7 px-2 md:px-0">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Team 77 Aircraft
          </p>

          <div className="mt-3 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
              Aircraft Gallery
            </h2>

            <p className="hidden text-xs uppercase tracking-[0.25em] text-white/35 md:block">
              {gallery.length} Images
            </p>
          </div>
        </div>

        <div className="grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {gallery.map((src, index) => {
            const isWide = wideImageIndexes.includes(index);

            return (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Open Edge 540 V3 image ${index + 1}`}
                className={`group relative overflow-hidden rounded-xl bg-white/5 text-left md:rounded-2xl ${
                  isWide
                    ? "col-span-2 aspect-[16/10]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Edge 540 V3 gallery image ${index + 1}`}
                  fill
                  sizes={
                    isWide
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/65 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                <p className="absolute bottom-4 left-4 translate-y-2 text-[10px] uppercase tracking-[0.3em] text-white/65 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Edge 540 V3 / {String(index + 1).padStart(2, "0")}
                </p>

                <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  +
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs uppercase leading-6 tracking-[0.25em] text-white/35">
            Edge 540 V3 / Team 77 AIR RACE X Aircraft
          </p>
        </div>
      </section>

      {/* BACK TO FLEET */}
      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase italic md:text-5xl">
              The Fleet
            </h2>
          </div>

          <Link
            href="/hangar"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
          >
            View All Aircraft
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Edge 540 V3 image gallery"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black md:left-8"
          >
            ‹
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={gallery[activeImage]}
              alt={`Edge 540 V3 gallery image ${activeImage + 1}`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black md:right-8"
          >
            ›
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
            {activeImage + 1} / {gallery.length}
          </p>
        </div>
      )}
    </main>
  );
}

function AircraftStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>

      <p className="mt-2 text-lg font-bold md:text-xl">{value}</p>
    </div>
  );
}