import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Gallery from "@/components/media/Gallery";
import { getGalleryImages } from "@/lib/media/getGalleryImages";

export const metadata: Metadata = {
  title: "Patrick Davidson Helmet Collection",
  description:
    "Explore Patrick Davidson's three Red Bull flying helmets, including the custom LIFT Aviation AV-2.1 KOR fixed-wing helmet introduced in 2026.",
};

const facebookVideo = "https://www.facebook.com/reel/329592072821055";
const facebookEmbed =
  "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F329592072821055&show_text=false&width=900";
const liftProduct =
  "https://liftaviationusa.com/products/av-2-1-kor-fixed-wing-helmet-customizable";

export default function HelmetsPage() {
  const doodleGallery = getGalleryImages(
    "images/hangar/helmets/doodle-gallery",
  );
  const glitterGallery = getGalleryImages(
    "images/hangar/helmets/glitter-gallery",
  );
  const liftGallery = getGalleryImages(
    "images/hangar/helmets/lift-gallery",
  );

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="relative min-h-[78vh] md:min-h-screen">
        <Image
          src="/images/hangar/helmets/hero.jpg"
          alt="Patrick Davidson wearing his Red Bull glitter helmet"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

        <div className="relative z-10 flex min-h-[78vh] items-end md:min-h-screen">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/hangar#gear"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Gear
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-yellow-400">
              Patrick Davidson · Pilot Equipment
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              Helmets.
              <br />
              A Flying History.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-xl md:leading-9">
              Protection, communication and identity. Each helmet marks a
              distinct chapter in Patrick&apos;s flying story.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">
                The Collection
              </p>
              <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
                More Than
                <br />
                Safety Equipment.
              </h2>
            </div>

            <p className="text-lg leading-9 text-white/70">
              A flying helmet is one of the most personal pieces of equipment
              a pilot owns. It protects, carries vital communications and
              becomes part of the pilot&apos;s visual identity. Patrick&apos;s
              collection tells that story across three Red Bull designs, from
              the original Doodle helmet to the lightweight LIFT AV-2.1 built
              for his latest chapter of Air Race X competition.
            </p>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
            <Milestone
              number="01"
              year="2017"
              title="The Doodle Helmet"
              copy="Patrick's first Red Bull helmet introduced the hand-drawn Doodle pattern—a design language now carried by Red Bull One."
            />
            <Milestone
              number="02"
              year="2022"
              title="The Glitter Helmet"
              copy="The second Red Bull helmet arrived with a sparkling silver-and-blue finish and a sharper new identity for the next era."
            />
            <Milestone
              number="03"
              year="2026"
              title="The LIFT AV-2.1"
              copy="The third Red Bull helmet brings a custom race identity to LIFT Aviation's lightweight AV-2.1 KOR fixed-wing platform."
            />
          </div>
        </div>
      </section>

      <HelmetStory
        number="01"
        year="2017"
        title="The Doodle Helmet"
        image="/images/hangar/helmets/doodle-gallery/01.jpg"
        imageAlt="Patrick Davidson's original Red Bull Doodle helmet"
      >
        <p>
          Patrick&apos;s first Red Bull helmet arrived in 2017. Beneath the
          familiar Red Bull colours, its deep blue shell is filled with
          hand-drawn lines, figures, formulas and playful details—earning it
          the name <strong className="text-white">the Doodle helmet</strong>.
        </p>
        <p>
          The design became part of Patrick&apos;s identity in the cockpit.
          Years later, that same visual language returned at aircraft scale:
          the pattern now seen across <strong className="text-white">Red Bull One</strong>{" "}
          traces its story back to this first helmet.
        </p>
      </HelmetStory>

      <Gallery
        title="The Doodle Helmet"
        subtitle="Red Bull Helmet 01 · 2017"
        images={doodleGallery}
      />

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.6fr)] lg:items-center lg:gap-16">
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl shadow-black">
            <iframe
              src={facebookEmbed}
              title="Patrick Davidson talks about flying helmets and headsets"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">
              From The Archive
            </p>
            <h2 className="mt-5 text-4xl font-black uppercase italic leading-[0.9] md:text-6xl">
              Patrick Talks
              <br />
              Helmets &amp; Headsets.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-white/70 md:text-lg">
              Watch Patrick&apos;s original video about the equipment that
              protects a pilot and keeps communication clear in the cockpit.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
              If the player is hidden by your browser&apos;s privacy settings,
              the original public video is still available directly on
              Facebook.
            </p>

            <a
              href={facebookVideo}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-4 rounded-full bg-white px-7 py-4 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:bg-yellow-400"
            >
              Watch On Facebook
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <HelmetStory
        number="02"
        year="2022"
        title="The Glitter Helmet"
        image="/images/hangar/helmets/glitter-gallery/02.jpg"
        imageAlt="Rear view of Patrick Davidson's second Red Bull helmet"
        reverse
      >
        <p>
          The second Red Bull helmet joined the collection in 2022. Its design
          pairs deep blue with silver graphic panels, then brings the surface
          alive with a fine glitter finish that catches changing light around
          the hangar, on the apron and in the cockpit.
        </p>
        <p>
          It has accompanied Patrick through displays, jet flying and Air Race
          X competition—an unmistakable piece of equipment built into the
          imagery of this chapter of his career.
        </p>
      </HelmetStory>

      <Gallery
        title="The Glitter Helmet"
        subtitle="Red Bull Helmet 02 · 2022"
        images={glitterGallery}
      />

      <HelmetStory
        id="lift-av21"
        number="03"
        year="2026"
        title="The LIFT AV-2.1"
        image="/images/hangar/helmets/lift-gallery/01.webp"
        imageAlt="Patrick Davidson's custom Red Bull LIFT Aviation AV-2.1 helmet"
      >
        <p>
          Helmet number three is a custom{" "}
          <strong className="text-white">LIFT Aviation AV-2.1 KOR</strong>,
          built on a carbon-fibre fixed-wing platform with an EPS and Koroyd
          impact liner, active airflow and a single-pivot visor system.
        </p>
        <p>
          Its Red Bull finish carries aircraft linework across the silver and
          blue shell, while a Lightspeed H-Mod handles cockpit communications.
          The complete helmet was painted, assembled, wired and tested in just
          twelve days before helping Patrick return to the top step in Air Race
          X Race 3.
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href={liftProduct}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-black transition hover:bg-white"
          >
            Explore At LIFT
            <span aria-hidden="true">↗</span>
          </a>
          <Link
            href="/media/race-reports/2026-race-3"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Read The Race Story
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </HelmetStory>

      <section className="relative overflow-hidden border-y border-yellow-400/20 bg-yellow-400 px-6 py-24 text-black md:px-10 md:py-28">
        <div
          className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 text-[13rem] font-black italic leading-none text-black/[0.05] md:text-[24rem]"
          aria-hidden="true"
        >
          2.1
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.45em]">
                AV-2.1 KOR · Fixed Wing
              </p>
              <h2 className="mt-6 text-5xl font-black uppercase italic leading-[0.86] md:text-7xl">
                Built Lighter.
                <br />
                Made To Race.
              </h2>
            </div>
            <p className="max-w-2xl text-lg font-medium leading-9 text-black/70">
              The AV-2.1 combines a lightweight shell, adjustable fit and
              cooling-focused impact protection—giving Patrick a lower-fatigue
              helmet for repeated high-G flying.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
            <HelmetFeature value="1,350 g" label="Average with communications" />
            <HelmetFeature value="Carbon Fibre" label="Lightweight outer shell" />
            <HelmetFeature value="EPS + Koroyd" label="Ventilated impact liner" />
            <HelmetFeature value="600 KEAS" label="Rated single-pivot visor" />
          </div>

          <p className="mt-5 text-xs leading-6 text-black/55">
            Manufacturer-listed specifications; final weight varies by size
            and communications configuration.
          </p>
        </div>
      </section>

      <Gallery
        title="The LIFT AV-2.1"
        subtitle="Red Bull Helmet 03 · 2026"
        images={liftGallery}
      />

      <section className="border-t border-white/10">
        <Link
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
          <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-black transition group-hover:bg-yellow-400">
            View The Fleet
            <span aria-hidden="true">→</span>
          </span>
        </Link>
      </section>
    </main>
  );
}

function Milestone({
  number,
  year,
  title,
  copy,
}: {
  number: string;
  year: string;
  title: string;
  copy: string;
}) {
  return (
    <article className="bg-black p-8 md:p-10">
      <div className="flex items-center justify-between">
        <span className="text-4xl font-black italic text-yellow-400">
          {number}
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/40">
          {year}
        </span>
      </div>
      <h3 className="mt-12 text-3xl font-black uppercase italic">{title}</h3>
      <p className="mt-5 text-sm leading-7 text-white/60">{copy}</p>
    </article>
  );
}

function HelmetStory({
  id,
  number,
  year,
  title,
  image,
  imageAlt,
  reverse = false,
  children,
}: {
  id?: string;
  number: string;
  year: string;
  title: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl scroll-mt-8 px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div
          className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 ${
            reverse ? "lg:order-2" : ""
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className={reverse ? "lg:order-1" : ""}>
          <div className="flex items-center gap-5">
            <span className="text-6xl font-black italic text-yellow-400">
              {number}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-white/40">
              Introduced {year}
            </span>
          </div>
          <h2 className="mt-8 text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
            {title}
          </h2>
          <div className="mt-9 space-y-6 text-lg leading-9 text-white/70">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function HelmetFeature({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-yellow-400 p-7 md:p-8">
      <p className="text-2xl font-black uppercase italic md:text-3xl">
        {value}
      </p>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.25em] text-black/55">
        {label}
      </p>
    </div>
  );
}
