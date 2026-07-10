"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const basePath = "/images/projects/can-grab-2025";

const officialImages = Array.from(
  { length: 19 },
  (_, index) => `official/${String(index + 1).padStart(2, "0")}.jpg`,
);

const wideImageIndexes = [0, 4, 9, 14, 18];

export default function CanGrab2025Page() {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === 0 ? officialImages.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === officialImages.length - 1 ? 0 : current + 1;
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
      <section className="relative min-h-[72vh] overflow-hidden md:min-h-[88vh]">
        <Image
          src={`${basePath}/official/hero.jpg`}
          alt="Patrick Davidson and Brian Capper performing the Red Bull Can Grab stunt"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/35 to-transparent" />

        <div className="relative z-10 flex min-h-[72vh] items-end md:min-h-[88vh]">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/media/projects"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Projects
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
              Red Bull Project / 2025
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
              Can
              <br />
              Grab
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              An aircraft. A motorcycle. A Red Bull can. Approximately 15
              centimetres of separation.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-5 md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Pilot
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">
              Patrick Davidson
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Rider
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">Brian Capper</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Aircraft
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">GameBird GB1</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Location
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">South Africa</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Year
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">2025</p>
          </div>
        </div>
      </section>

      {/* VIDEO AND STORY */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="mb-7">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            Watch the Stunt
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic leading-none md:text-6xl">
            Precision at Speed
          </h2>
        </div>

        <a
          href="https://www.instagram.com/reel/DKfCrjDNWVq/?igsh=OTF4YWVzeGx3MA=="
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:aspect-video md:rounded-3xl"
        >
          <Image
            src={`${basePath}/official/hero.jpg`}
            alt="Watch the Red Bull Can Grab stunt"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/35 transition duration-300 group-hover:bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-black/50 text-3xl text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black md:h-24 md:w-24">
              <span className="ml-1">▶</span>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
            <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">
              Instagram Reel
            </p>

            <p className="mt-2 text-xl font-bold uppercase md:text-3xl">
              Watch Can Grab
            </p>
          </div>
        </a>

        {/* STORY BOX */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:mt-10 md:rounded-3xl md:p-10">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
                Red Bull Story
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-black uppercase leading-tight md:text-5xl">
                From World Champion to Aerial Stuntman
              </h3>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
                Read how Patrick Davidson and Brian Capper turned a wild idea
                into a high-speed precision stunt.
              </p>
            </div>

            <a
              href="https://www.redbull.com/za-en/stunt-plane-motorbike-can-grab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-yellow-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Read Full Story
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* OFFICIAL GALLERY */}
      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
        <div className="mb-7 px-2 md:px-0">
          <p className="text-xs uppercase tracking-[0.4em] text-white/40">
            Red Bull Content Pool
          </p>

          <div className="mt-3 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
              Official Gallery
            </h2>

            <p className="hidden text-xs uppercase tracking-[0.25em] text-white/35 md:block">
              19 Images
            </p>
          </div>
        </div>

        <div className="grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {officialImages.map((image, index) => {
            const isWide = wideImageIndexes.includes(index);

            return (
              <button
                key={image}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`Open official Can Grab image ${index + 1}`}
                className={`group relative overflow-hidden rounded-xl bg-white/5 text-left md:rounded-2xl ${
                  isWide
                    ? "col-span-2 aspect-[16/10]"
                    : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={`${basePath}/${image}`}
                  alt={`Red Bull Can Grab official image ${index + 1}`}
                  fill
                  sizes={
                    isWide
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-lg text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  +
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs uppercase leading-6 tracking-[0.25em] text-white/35">
            Photography: Tyrone Bradley / Red Bull Content Pool
          </p>
        </div>
      </section>

      {/* BACK TO PROJECTS */}
      <section className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 md:py-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-3xl font-black uppercase italic md:text-5xl">
              More Projects
            </h2>
          </div>

          <Link
            href="/media/projects"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
          >
            View All Projects
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
          aria-label="Can Grab image gallery"
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
              src={`${basePath}/${officialImages[activeImage]}`}
              alt={`Red Bull Can Grab official image ${activeImage + 1}`}
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
            {activeImage + 1} / {officialImages.length}
          </p>
        </div>
      )}
    </main>
  );
}