"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const basePath = "/images/projects/diwali-lights-2018";

const galleryImages = Array.from(
  { length: 31 },
  (_, index) => `${basePath}/bts/${String(index + 1).padStart(2, "0")}.jpg`
);

const projectDetails = [
  {
    label: "Event",
    value: "Durban Diwali Festival of Lights",
  },
  {
    label: "Pilot",
    value: "Patrick Davidson",
  },
  {
    label: "Location",
    value: "Durban Beachfront, South Africa",
  },
  {
    label: "Year",
    value: "2018",
  },
  {
    label: "Display",
    value: "Night Aerobatics",
  },
  {
    label: "Featuring",
    value: "Smoke, lighting and pyrotechnics",
  },
];

const mediaLinks = [
  {
    publication: "Aviation SA",
    title: "Patrick Davidson lights up Durban’s skyline",
    href: "https://www.facebook.com/AviationSA/posts/10156771496788637/",
  },
  {
    publication: "Aviation SA",
    title: "Evening display on Durban’s beachfront",
    href: "https://www.facebook.com/AviationSA/posts/10156769320918637/",
  },
  {
    publication: "Flying Davidson",
    title: "Behind the Durban Diwali Festival of Lights display",
    href: "https://www.facebook.com/flyingdavidson/posts/2199553343401824/",
  },
];

export default function DiwaliLightsClient() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImage((current) =>
          current === null ? null : (current + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedImage((current) =>
          current === null
            ? null
            : (current - 1 + galleryImages.length) % galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const showPreviousImage = () => {
    setSelectedImage((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const showNextImage = () => {
    setSelectedImage((current) =>
      current === null ? null : (current + 1) % galleryImages.length
    );
  };

  return (
    <main className="min-h-screen bg-[#060606] text-white">
      <section className="relative min-h-[92vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${basePath}/official/hero.jpg`}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={`${basePath}/video/web/diwali-lights-display-web.mp4`}
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-[#060606]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(249,115,22,0.2),transparent_35%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-32 sm:px-8 md:pb-24 lg:px-12">
          <Link
            href="/media/projects"
            className="mb-8 inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-white/65 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Projects
          </Link>

          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.38em] text-orange-300">
            Night Aerobatic Display · Durban · 2018
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            Diwali Lights
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
            Patrick Davidson lights up Durban&apos;s beachfront with a precision
            night aerobatic display combining smoke, lights and pyrotechnics.
          </p>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-white/10 px-6 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-12">
          {[
            ["Night Display", "Precision aerobatics"],
            ["Durban", "Beachfront skyline"],
            ["Festival", "Diwali celebration"],
            ["Red Bull", "Athlete performance"],
          ].map(([title, subtitle]) => (
            <div key={title} className="px-5 py-8 sm:px-8">
              <p className="text-lg font-medium">{title}</p>
              <p className="mt-1 text-sm text-white/45">{subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.35fr_0.65fr] lg:px-12 lg:py-32">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
            The story
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            Turning Durban&apos;s night sky into an aerial stage.
          </h2>

          <div className="mt-10 max-w-3xl space-y-6 text-base leading-8 text-white/65 sm:text-lg">
            <p>
              During Durban&apos;s Diwali Festival of Lights, Patrick Davidson
              delivered a distinctive evening display over the city&apos;s
              beachfront, combining precision aerobatics with smoke, onboard
              lighting and pyrotechnics.
            </p>

            <p>
              Night flying changes every part of an aerobatic display. Visual
              references are reduced, depth perception becomes more demanding,
              and every manoeuvre must remain precisely positioned for the
              crowd below.
            </p>

            <p>
              The result was an unforgettable performance framed by the Durban
              skyline, with the aircraft tracing illuminated lines through the
              darkness above the beachfront.
            </p>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/40">
            Project details
          </p>

          <dl className="mt-7 divide-y divide-white/10">
            {projectDetails.map((detail) => (
              <div
                key={detail.label}
                className="grid grid-cols-[105px_1fr] gap-5 py-5 first:pt-0 last:pb-0"
              >
                <dt className="text-sm text-white/40">{detail.label}</dt>
                <dd className="text-sm leading-6 text-white/85">
                  {detail.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12 lg:pb-32">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
              The display
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Watch the full performance
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-white/50 sm:text-right">
            Filmed during the evening display over Durban&apos;s beachfront.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-orange-950/20">
          <video
            controls
            playsInline
            preload="metadata"
            poster={`${basePath}/official/hero.jpg`}
            className="aspect-square w-full bg-black object-contain sm:aspect-video"
          >
            <source
              src={`${basePath}/video/web/diwali-lights-display-web.mp4`}
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
              Behind the scenes
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Preparing for the night display
            </h2>

            <p className="mt-6 text-base leading-8 text-white/60 sm:text-lg">
              Aircraft preparation, safety coordination, positioning and final
              checks all had to come together before Patrick could take the
              display into the night sky.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
            <video
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black object-contain"
            >
              <source
                src={`${basePath}/video/web/diwali-lights-bts-web.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
              Gallery
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              From preparation to performance
            </h2>
          </div>

          <p className="text-sm text-white/45">
            {galleryImages.length} photographs
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl bg-white/5 text-left"
              aria-label={`Open gallery image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`Diwali Lights behind-the-scenes photograph ${index + 1}`}
                width={1600}
                height={1200}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.025]"
              />

              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <span className="pointer-events-none absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-black/45 text-lg opacity-0 backdrop-blur transition group-hover:opacity-100">
                +
              </span>
            </button>
          ))}
        </div>
      </section>

     
      <section className="relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(249,115,22,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:px-8 lg:px-12 lg:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-300">
            Flying Davidson
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Explore more precision flying projects.
          </h2>

          <Link
            href="/media/projects"
            className="mt-10 inline-flex items-center justify-center rounded-full border border-white/15 bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:scale-[1.02]"
          >
            View all projects
          </Link>
        </div>
      </section>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-5 top-5 z-20 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-black/60 text-2xl text-white backdrop-blur transition hover:bg-white hover:text-black"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-2xl backdrop-blur transition hover:bg-white hover:text-black sm:left-8"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="relative h-[82vh] w-[92vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage]}
              alt={`Diwali Lights gallery image ${selectedImage + 1}`}
              fill
              priority
              sizes="92vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-4 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/60 text-2xl backdrop-blur transition hover:bg-white hover:text-black sm:right-8"
            aria-label="Next image"
          >
            ›
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-white/55">
            {String(selectedImage + 1).padStart(2, "0")} /{" "}
            {String(galleryImages.length).padStart(2, "0")}
          </p>
        </div>
      )}
    </main>
  );
}