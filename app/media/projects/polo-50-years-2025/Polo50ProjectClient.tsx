"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const basePath = "/images/projects/polo-50-years-2025";

const officialFilmEmbedUrl =
  "https://www.youtube.com/embed/X2LEgSHl_N4?start=250&rel=0";

const officialFilmUrl =
  "https://www.youtube.com/watch?v=X2LEgSHl_N4&t=250s";

const volkswagenArticleUrl =
  "https://www.vw.co.za/en/volkswagen-experience/newsroom/plant-kariega-shines-in-spectacular-video-celebrating-50-years-of-polo.html";

const videoItems = Array.from({ length: 4 }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `${basePath}/videos/web/${number}.mp4`,
    poster: `${basePath}/videos/posters-web/${number}.jpg`,
    title: `Behind the Scenes ${index + 1}`,
  };
});

export default function Polo50ProjectClient() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const closeVideoLightbox = useCallback(() => {
    setActiveVideo(null);
  }, []);

  const showPreviousVideo = useCallback(() => {
    setActiveVideo((current) => {
      if (current === null) return null;

      return current === 0 ? videoItems.length - 1 : current - 1;
    });
  }, []);

  const showNextVideo = useCallback(() => {
    setActiveVideo((current) => {
      if (current === null) return null;

      return current === videoItems.length - 1 ? 0 : current + 1;
    });
  }, []);

  useEffect(() => {
    if (activeVideo === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeVideoLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPreviousVideo();
      }

      if (event.key === "ArrowRight") {
        showNextVideo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeVideo,
    closeVideoLightbox,
    showNextVideo,
    showPreviousVideo,
  ]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden md:min-h-[88vh]">
        <Image
          src={`${basePath}/hero.jpg`}
          alt="Volkswagen 50 Years of Polo Project Drift production"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 flex min-h-[72vh] items-end md:min-h-[88vh]">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/media/projects"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Projects
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-blue-400">
              Volkswagen Project / 2025
            </p>

            <h1 className="max-w-6xl text-5xl font-black uppercase italic leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
              50 Years
              <br />
              of Polo
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-xl">
              A spectacular celebration of five decades of the Volkswagen
              Polo, filmed at Plant Kariega and across Nelson Mandela Bay.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-5 md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Client
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">Volkswagen</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Campaign
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">
              Project Drift
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Driver
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">
              Johan Kristoffersson
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Location
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">
              Nelson Mandela Bay
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Year
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">2025</p>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="mb-7">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
            Watch the Film
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic leading-none md:text-6xl">
            Project Drift
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:rounded-3xl">
        <div className="relative aspect-video w-full bg-black">
  <iframe
    src={officialFilmEmbedUrl}
    title="Volkswagen 50 Years of Polo: Project Drift"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
    loading="lazy"
    className="absolute inset-0 h-full w-full"
  />
</div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
        <a
  href={officialFilmUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-blue-400"
>
  Watch on YouTube
  <span aria-hidden="true">↗</span>
</a>

          <a
            href={volkswagenArticleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white hover:text-black"
          >
            Read Volkswagen Story
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* STORY */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:mt-10 md:rounded-3xl md:p-10">
          <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
            The Production
          </p>

          <h3 className="mt-3 max-w-5xl text-3xl font-black uppercase leading-tight md:text-5xl">
            Five decades of Polo brought together in the Home of Polo
          </h3>

          <div className="mt-6 max-w-4xl space-y-5 text-base leading-7 text-white/65 md:text-lg md:leading-8">
            <p>
              To celebrate 50 years of the Volkswagen Polo, Volkswagen
              created Project Drift — a fast-paced film bringing together
              some of the most memorable performance models from the
              Polo&apos;s history.
            </p>

            <p>
              The production was filmed in and around Nelson Mandela Bay,
              opening at the Port of Gqeberha before moving through Plant
              Kariega, the South African home of Polo production.
            </p>

            <p>
              Seven-time FIA World Rallycross Champion Johan Kristoffersson
              drove a collection of performance Polos through a sequence of
              precision drifts, high-speed transitions and tightly
              choreographed production scenes.
            </p>

            <p>
              The film featured the Polo R WRC, the Polo R Supercar, the
              electric Polo RX1e and the South African-built Polo GTI,
              celebrating the past, present and future of one of
              Volkswagen&apos;s most recognisable models.
            </p>
          </div>
        </div>
      </section>

      {/* PRODUCTION HIGHLIGHTS */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Production Highlights
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase italic leading-none md:text-6xl">
              Built for the Film
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Location
              </p>

              <p className="mt-4 text-2xl font-black uppercase">
                Plant Kariega
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Filmed inside Volkswagen&apos;s South African manufacturing
                facility, the global home of Polo production.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Opening Sequence
              </p>

              <p className="mt-4 text-2xl font-black uppercase">
                Port of Gqeberha
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                The production opened with precision-driving scenes filmed
                among the port&apos;s vehicle-handling facilities.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Performance
              </p>

              <p className="mt-4 text-2xl font-black uppercase">
                Precision Driving
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Carefully choreographed sequences brought multiple
                generations of high-performance Polo models together.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Release
              </p>

              <p className="mt-4 text-2xl font-black uppercase">
                Global Campaign
              </p>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Created as an international Volkswagen campaign celebrating
                the Polo&apos;s 50-year history.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BTS VIDEO GALLERY */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="mb-8 px-2 md:px-0">
            <p className="text-xs uppercase tracking-[0.4em] text-blue-400">
              Behind the Scenes
            </p>

            <div className="mt-3 flex items-end justify-between gap-6">
              <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
                Video Gallery
              </h2>

              <p className="hidden text-xs uppercase tracking-[0.25em] text-white/35 md:block">
                4 Videos
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {videoItems.map((video, index) => (
              <button
                key={video.src}
                type="button"
                onClick={() => setActiveVideo(index)}
                aria-label={`Play Polo 50 Years behind-the-scenes video ${
                  index + 1
                }`}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left md:rounded-2xl"
              >
                <Image
                  src={video.poster}
                  alt={`Polo 50 Years behind-the-scenes video ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black/50 text-lg text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-blue-400 group-hover:text-black md:h-16 md:w-16">
                    <span className="ml-0.5">▶</span>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-blue-400">
                    BTS Video
                  </p>

                  <p className="mt-1 text-sm font-bold uppercase text-white">
                    Clip {index + 1}
                  </p>
                </div>
              </button>
            ))}
          </div>
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
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-blue-400"
          >
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* VIDEO LIGHTBOX */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Polo 50 Years video gallery"
          onClick={closeVideoLightbox}
        >
          <button
            type="button"
            onClick={closeVideoLightbox}
            aria-label="Close video"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousVideo();
            }}
            aria-label="Previous video"
            className="absolute left-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black sm:flex md:left-8"
          >
            ‹
          </button>

          <div
            className="flex max-h-[88vh] w-full max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <video
              key={videoItems[activeVideo].src}
              src={videoItems[activeVideo].src}
              poster={videoItems[activeVideo].poster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="max-h-[80vh] max-w-full rounded-xl bg-black"
            >
              Your browser does not support HTML video.
            </video>

            <div className="mt-4 flex w-full max-w-3xl items-center justify-between">
              <div>
                <p className="text-sm font-bold uppercase text-white">
                  Behind the Scenes {activeVideo + 1}
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/40">
                  {activeVideo + 1} / {videoItems.length}
                </p>
              </div>

              <div className="flex gap-2 sm:hidden">
                <button
                  type="button"
                  onClick={showPreviousVideo}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wider"
                >
                  Previous
                </button>

                <button
                  type="button"
                  onClick={showNextVideo}
                  className="rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-wider"
                >
                  Next
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextVideo();
            }}
            aria-label="Next video"
            className="absolute right-3 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black sm:flex md:right-8"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}