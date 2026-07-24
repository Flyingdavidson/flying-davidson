"use client";

import type {
  AircraftData,
  AircraftVideo,
} from "@/app/types/aircraft";
import Hero from "@/components/aircraft/Hero";
import Gallery from "@/components/media/Gallery";
import VideoGallery from "@/components/media/VideoGallery";

type Props = {
  aircraft: AircraftData;
  gallery: string[];
  videos: AircraftVideo[];
};

export default function AircraftPageClient({
  aircraft,
  gallery,
  videos,
}: Props) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero aircraft={aircraft} />

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
                Ground Support
              </p>

              <h2 className="mt-5 whitespace-pre-line text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
                {aircraft.introTitle}
              </h2>
            </div>

            <p className="text-lg leading-9 text-white/70">
              {aircraft.intro}
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aircraft.specs.map((spec) => (
              <Spec
                key={spec.label}
                title={spec.label}
                value={spec.value}
              />
            ))}
          </div>
        </div>
      </section>

      <Gallery
        title="T1X2 Gallery"
        subtitle="Remote Aircraft Tug"
        images={gallery}
      />

      <VideoGallery
        title="T1X2 In Action"
        subtitle="Ground Operations"
        videos={videos}
      />

      <section className="mx-auto max-w-6xl px-6 py-28 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
          Controlled From Every Angle
        </p>

        <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
          Small Footprint.
          <br />
          Precise Control.
        </h2>

        <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-white/70">
          Remote operation makes the T1X2 especially useful around valuable
          aircraft. The operator is not tied to a steering position and can
          move around the aircraft to watch the wing tips, tail and hangar
          clearances while the tracked tug handles the nose wheel.
        </p>

        <a
          href="https://acairtechnology.com/products/ac-tracktech-t1x2-adjustable-cradle"
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-yellow-400/60 px-7 py-4 text-xs font-bold uppercase tracking-[0.28em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
        >
          Manufacturer Details
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="border-t border-white/10">
        <a
          href="/hangar"
          className="group mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 transition hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between md:px-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase italic md:text-5xl">
              Explore The Hangar
            </h2>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-black transition group-hover:bg-yellow-400">
            View The Fleet
            <span aria-hidden="true">→</span>
          </div>
        </a>
      </section>
    </main>
  );
}

function Spec({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-yellow-400/40 hover:bg-white/[0.05]">
      <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
        {title}
      </p>

      <p className="mt-4 text-3xl font-black">{value}</p>
    </div>
  );
}
