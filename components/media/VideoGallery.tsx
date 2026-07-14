"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Video = {
  title: string;
  file: string;
  poster?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  videos: Video[];
};

export default function VideoGallery({
  title,
  subtitle,
  videos,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!videos.length) return null;

  const safeActiveIndex =
    activeIndex >= videos.length ? 0 : activeIndex;

  const activeVideo = videos[safeActiveIndex];

  function selectVideo(index: number) {
    if (index === safeActiveIndex) return;

    const player = videoRef.current;

    if (player) {
      player.pause();
      player.currentTime = 0;
    }

    setActiveIndex(index);
    setHasStarted(false);
  }

  function playActiveVideo() {
    const player = videoRef.current;

    if (!player) return;

    void player.play().catch(() => {
      setHasStarted(false);
    });
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <header className="mb-10 md:mb-14">
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
              {subtitle}
            </p>
          )}

          <div className="mt-4 flex items-end justify-between gap-6">
            <h2 className="text-4xl font-black uppercase italic leading-none md:text-6xl">
              {title}
            </h2>

            <p className="hidden shrink-0 text-xs uppercase tracking-[0.3em] text-white/40 md:block">
              {videos.length} {videos.length === 1 ? "Video" : "Videos"}
            </p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.75fr)] lg:gap-10">
          <div>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
              <video
                ref={videoRef}
                key={activeVideo.file}
                controls={hasStarted}
                preload="metadata"
                poster={activeVideo.poster}
                playsInline
                onPlay={() => setHasStarted(true)}
                onPause={() => setHasStarted(false)}
                onEnded={() => setHasStarted(false)}
                className="aspect-video w-full bg-black object-contain"
              >
                <source src={activeVideo.file} type="video/mp4" />
                Your browser does not support HTML video.
              </video>

              {!hasStarted && (
                <button
                  type="button"
                  onClick={playActiveVideo}
                  aria-label={`Play ${activeVideo.title}`}
                  className="group absolute inset-0 flex items-center justify-center bg-black/10 transition hover:bg-black/25"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/60 text-white shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-110 group-hover:border-yellow-400 group-hover:bg-yellow-400 group-hover:text-black md:h-24 md:w-24">
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="ml-1 h-8 w-8 fill-current md:h-10 md:w-10"
                    >
                      <path d="M8 5.14v13.72c0 .77.83 1.25 1.5.87l10.1-5.86a1 1 0 0 0 0-1.74L9.5 4.27A1 1 0 0 0 8 5.14Z" />
                    </svg>
                  </span>
                </button>
              )}

              {!hasStarted && (
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/55 to-transparent px-5 pb-5 pt-16 md:px-8 md:pb-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-yellow-400">
                    Selected Video
                  </p>

                  <h3 className="mt-2 text-xl font-black uppercase italic md:text-3xl">
                    {activeVideo.title}
                  </h3>
                </div>
              )}
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                Video {safeActiveIndex + 1} of {videos.length}
              </p>

              {videos.length > 1 && (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      selectVideo(
                        safeActiveIndex === 0
                          ? videos.length - 1
                          : safeActiveIndex - 1,
                      )
                    }
                    aria-label="Previous video"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      selectVideo(
                        safeActiveIndex === videos.length - 1
                          ? 0
                          : safeActiveIndex + 1,
                      )
                    }
                    aria-label="Next video"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="lg:max-h-[620px] lg:overflow-y-auto lg:pr-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {videos.map((video, index) => {
                const isActive = index === safeActiveIndex;

                return (
                  <button
                    key={video.file}
                    type="button"
                    onClick={() => selectVideo(index)}
                    aria-pressed={isActive}
                    className={`group w-full overflow-hidden rounded-2xl border text-left transition duration-300 ${
                      isActive
                        ? "border-yellow-400 bg-yellow-400/10"
                        : "border-white/10 bg-white/[0.03] hover:border-white/30 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="grid grid-cols-[125px_1fr] items-stretch sm:grid-cols-1 lg:grid-cols-[145px_1fr]">
                      <div className="relative aspect-video overflow-hidden bg-black sm:w-full lg:w-auto">
                        {video.poster ? (
                          <Image
                            src={video.poster}
                            alt={`${video.title} video thumbnail`}
                            fill
                            sizes="(max-width: 640px) 125px, (max-width: 1024px) 50vw, 145px"
                            className="object-cover transition duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <video
                            muted
                            preload="metadata"
                            playsInline
                            className="h-full w-full object-cover"
                          >
                            <source src={video.file} type="video/mp4" />
                          </video>
                        )}

                        <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/5" />

                        <span
                          className={`absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full backdrop-blur-sm transition ${
                            isActive
                              ? "bg-yellow-400 text-black"
                              : "bg-black/65 text-white group-hover:bg-yellow-400 group-hover:text-black"
                          }`}
                        >
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="ml-0.5 h-5 w-5 fill-current"
                          >
                            <path d="M8 5.14v13.72c0 .77.83 1.25 1.5.87l10.1-5.86a1 1 0 0 0 0-1.74L9.5 4.27A1 1 0 0 0 8 5.14Z" />
                          </svg>
                        </span>
                      </div>

                      <div className="flex min-w-0 flex-col justify-center p-4">
                        <p
                          className={`text-[9px] font-bold uppercase tracking-[0.3em] ${
                            isActive
                              ? "text-yellow-400"
                              : "text-white/35"
                          }`}
                        >
                          {isActive
                            ? "Selected"
                            : `Video ${String(index + 1).padStart(2, "0")}`}
                        </p>

                        <h3 className="mt-2 line-clamp-2 text-sm font-black uppercase tracking-wide text-white md:text-base">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}