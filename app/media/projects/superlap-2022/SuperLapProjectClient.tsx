"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const basePath = "/images/projects/superlap-2022";

const redBullFeatureUrl =
  "https://www.redbull.com/za-en/brad-binder-superlap";

const iconicAgencyUrl = "https://iconic.agency/work/superlap";

/*
  Change these two numbers to match the files in your folders.
*/
const imageCount = 7;
const videoCount = 19;

const btsImages = Array.from({ length: imageCount }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return `bts/${number}.jpg`;
});

const videoItems = Array.from({ length: videoCount }, (_, index) => {
  const number = String(index + 1).padStart(2, "0");

  return {
    src: `${basePath}/videos/web/${number}.mp4`,
    poster: `${basePath}/videos/posters-web/${number}.jpg`,
    title: `SuperLap Behind the Scenes ${index + 1}`,
  };
});

/*
  These are zero-based image positions.

  Adjust this list after viewing the page if different photographs
  would work better as the wider gallery tiles.
*/
const wideImageIndexes = [0, 3, 7, 10, 14].filter(
  (index) => index < btsImages.length,
);

export default function SuperLapProjectClient() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const closeImageLightbox = useCallback(() => {
    setActiveImage(null);
  }, []);

  const showPreviousImage = useCallback(() => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === 0 ? btsImages.length - 1 : current - 1;
    });
  }, []);

  const showNextImage = useCallback(() => {
    setActiveImage((current) => {
      if (current === null) return null;

      return current === btsImages.length - 1 ? 0 : current + 1;
    });
  }, []);

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
    const lightboxOpen = activeImage !== null || activeVideo !== null;

    if (!lightboxOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeImageLightbox();
        closeVideoLightbox();
      }

      if (activeImage !== null) {
        if (event.key === "ArrowLeft") {
          showPreviousImage();
        }

        if (event.key === "ArrowRight") {
          showNextImage();
        }
      }

      if (activeVideo !== null) {
        if (event.key === "ArrowLeft") {
          showPreviousVideo();
        }

        if (event.key === "ArrowRight") {
          showNextVideo();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    activeImage,
    activeVideo,
    closeImageLightbox,
    closeVideoLightbox,
    showNextImage,
    showNextVideo,
    showPreviousImage,
    showPreviousVideo,
  ]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[74vh] overflow-hidden md:min-h-[90vh]">
      <Image
  src={`${basePath}/bts/03.jpg`}
  alt="Patrick Davidson during filming for Brad Binder SuperLap"
  fill
  priority
  loading="eager"
  sizes="100vw"
  className="object-cover object-center"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/15 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

        <div className="absolute right-6 top-28 hidden text-right md:right-10 md:block">
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/40">
            Kyalami Grand Prix Circuit
          </p>

          <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            South Africa
          </p>
        </div>

        <div className="relative z-10 flex min-h-[74vh] items-end md:min-h-[90vh]">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/media/projects"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Projects
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">
              Red Bull Production / 2022
            </p>

            <h1 className="max-w-5xl text-6xl font-black uppercase italic leading-[0.82] tracking-tight sm:text-7xl md:text-[9rem]">
              Super
              <br />
              Lap
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              Patrick Davidson featured in the opening sequence of Brad
              Binder&apos;s cinematic return to South Africa and his benchmark
              lap around Kyalami.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT INFORMATION */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 md:grid-cols-5 md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Featured Rider
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">Brad Binder</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Plane Pilot
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">
              Patrick Davidson
            </p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Production
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">Iconic Agency</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Location
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">Kyalami</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
              Year
            </p>

            <p className="mt-2 text-lg font-bold md:text-xl">2022</p>
          </div>
        </div>
      </section>

      {/* OFFICIAL FILM */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            Watch the Film
          </p>

          <h2 className="mt-3 max-w-4xl text-4xl font-black uppercase italic leading-[0.92] md:text-7xl">
            Brad Binder:
            <br />
            SuperLap
          </h2>
        </div>

        <a
          href={redBullFeatureUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block aspect-video overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:rounded-3xl"
        >
          <Image
            src={`${basePath}/bts/06.jpg`}
            alt="Behind the scenes of the Brad Binder SuperLap production"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-black/50 text-2xl text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black md:h-24 md:w-24">
              <span className="ml-1">▶</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
              Official Red Bull Feature
            </p>

            <div className="mt-3 flex items-end justify-between gap-5">
              <h3 className="max-w-3xl text-2xl font-black uppercase italic leading-tight md:text-5xl">
                Watch the full SuperLap story
              </h3>

              <span className="hidden text-xs font-bold uppercase tracking-[0.25em] text-white/60 md:block">
                Opens Red Bull ↗
              </span>
            </div>
          </div>
        </a>

        {/* STORY */}
        <div className="mt-8 grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:mt-10 md:grid-cols-[1fr_0.55fr] md:gap-14 md:rounded-3xl md:p-10">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
              The Production
            </p>

            <h3 className="mt-3 max-w-4xl text-3xl font-black uppercase leading-tight md:text-5xl">
              A South African MotoGP homecoming
            </h3>

            <div className="mt-6 max-w-4xl space-y-5 text-base leading-7 text-white/65 md:text-lg md:leading-8">
              <p>
                SuperLap followed South African MotoGP rider Brad Binder as he
                returned home for a high-speed journey through Johannesburg
                and an attempt to establish a new benchmark lap around the
                Kyalami Grand Prix Circuit.
              </p>

              <p>
                Patrick Davidson played a small cameo role at the beginning of
                the film, piloting the aircraft used to introduce the story
                before the action moved onto the road and racetrack.
              </p>

              <p>
                Although Patrick&apos;s appearance was brief, the shoot brought
                aviation and MotoGP together inside a large-scale Red Bull
                production created by Iconic Agency.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
              Benchmark Lap
            </p>

            <p className="mt-3 text-5xl font-black italic tracking-tight text-yellow-400 md:text-7xl">
              1:42.26
            </p>

            <p className="mt-4 text-sm leading-6 text-white/55">
              Brad Binder&apos;s benchmark lap around Kyalami, beating the
              1:45.00 target associated with the circuit&apos;s previous
              premier-class motorcycle benchmark.
            </p>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Patrick&apos;s Role
              </p>

              <p className="mt-3 text-xl font-bold uppercase">
                Plane Pilot
              </p>
            </div>

            <div className="mt-7 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Co-Pilot
              </p>

              <p className="mt-3 text-xl font-bold uppercase">Greg Ritz</p>
            </div>
          </div>
        </div>
      </section>

      {/* BTS IMAGE GALLERY */}
      {btsImages.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
          <div className="mb-7 px-2 md:px-0">
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Behind the Scenes
            </p>

            <div className="mt-3 flex items-end justify-between gap-6">
              <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
                Photo Gallery
              </h2>

              <p className="hidden text-xs uppercase tracking-[0.25em] text-white/35 md:block">
                {btsImages.length}{" "}
                {btsImages.length === 1 ? "Image" : "Images"}
              </p>
            </div>
          </div>

          <div className="grid grid-flow-dense grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {btsImages.map((image, index) => {
              const isWide = wideImageIndexes.includes(index);

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`Open SuperLap behind-the-scenes image ${
                    index + 1
                  }`}
                  className={`group relative overflow-hidden rounded-xl bg-white/5 text-left md:rounded-2xl ${
                    isWide ? "col-span-2 aspect-[16/10]" : "aspect-[4/5]"
                  }`}
                >
                  <Image
                    src={`${basePath}/${image}`}
                    alt={`SuperLap behind-the-scenes image ${index + 1}`}
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

          <p className="mt-6 px-2 text-xs leading-5 text-white/35 md:px-0">
            Personal behind-the-scenes photography from the production. No
            official production stills are displayed on this page.
          </p>
        </section>
      )}

      {/* BTS VIDEO GALLERY */}
      {videoItems.length > 0 && (
        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <div className="mb-8 px-2 md:px-0">
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
                On Location
              </p>

              <div className="mt-3 flex items-end justify-between gap-6">
                <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
                  BTS Videos
                </h2>

                <p className="hidden text-xs uppercase tracking-[0.25em] text-white/35 md:block">
                  {videoItems.length}{" "}
                  {videoItems.length === 1 ? "Video" : "Videos"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
              {videoItems.map((video, index) => (
                <button
                  key={video.src}
                  type="button"
                  onClick={() => setActiveVideo(index)}
                  aria-label={`Play SuperLap behind-the-scenes video ${
                    index + 1
                  }`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-white/5 text-left md:rounded-2xl"
                >
                  <Image
                    src={video.poster}
                    alt={`SuperLap behind-the-scenes video ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/15" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black/50 text-lg text-white backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black md:h-16 md:w-16">
                      <span className="ml-0.5">▶</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-yellow-400">
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
      )}

      {/* PRODUCTION CREDIT */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] md:rounded-3xl">
          <div className="grid md:grid-cols-[1fr_auto] md:items-center">
            <div className="p-7 md:p-10">
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
                Production Credit
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase italic md:text-5xl">
                Iconic Agency
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                SuperLap was produced by Iconic Agency for Red Bull, with
                Patrick Davidson credited as plane pilot and Greg Ritz as
                plane co-pilot.
              </p>
            </div>

            <div className="border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-10">
              <a
                href={iconicAgencyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                View Production Credits
                <span aria-hidden="true">↗</span>
              </a>
            </div>
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
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
          >
            View All Projects
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="SuperLap image gallery"
          onClick={closeImageLightbox}
        >
          <button
            type="button"
            onClick={closeImageLightbox}
            aria-label="Close image"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black md:right-8 md:top-8"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
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
              src={`${basePath}/${btsImages[activeImage]}`}
              alt={`SuperLap behind-the-scenes image ${activeImage + 1}`}
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
              showNextImage();
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white transition hover:bg-white hover:text-black md:right-8"
          >
            ›
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
            {activeImage + 1} / {btsImages.length}
          </p>
        </div>
      )}

      {/* VIDEO LIGHTBOX */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="SuperLap video gallery"
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