import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/media/Gallery";

const basePath = "/images/projects/sundowns-red-bull-2023";

const btsImages = [
  `${basePath}/bts/01.jpg`,
  `${basePath}/bts/02.jpg`,
  `${basePath}/bts/03.jpg`,
  `${basePath}/bts/04.jpg`,
  `${basePath}/bts/05.jpg`,
  `${basePath}/bts/06.jpg`,
  `${basePath}/bts/07.jpg`,
  `${basePath}/bts/08.jpg`,
  `${basePath}/bts/09.jpg`,
  `${basePath}/bts/10.jpg`,
  `${basePath}/bts/11.jpg`,
  `${basePath}/bts/12.jpg`,
  `${basePath}/bts/13.jpg`,
  `${basePath}/bts/14.jpg`,
];

export default function SundownsRedBull2023Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[75vh] overflow-hidden md:min-h-[88vh]">
        <Image
          src={`${basePath}/hero.jpg`}
          alt="Mamelodi Sundowns and Red Bull project with Patrick Davidson"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />

        <div className="relative z-10 flex min-h-[75vh] items-end md:min-h-[88vh]">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/media/projects"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Projects
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Project / Red Bull / 2023
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-8xl">
              Sundowns
              <br />
              x Red Bull
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              Mamelodi Sundowns and Red Bull take flight in a high-energy
              partnership launch featuring Patrick Davidson.
            </p>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-4 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Client
            </p>
            <p className="mt-2 text-xl font-bold">Red Bull</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Partner
            </p>
            <p className="mt-2 text-xl font-bold">Mamelodi Sundowns</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Year
            </p>
            <p className="mt-2 text-xl font-bold">2023</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Category
            </p>
            <p className="mt-2 text-xl font-bold">Brand Campaign</p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
            Watch the Film
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic md:text-6xl">
            Taking Flight
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/W-XEz_F9X80?start=24"
              title="Mamelodi Sundowns and Red Bull Take Flight"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
            Official Story
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase">
            Mamelodi Sundowns and Red Bull Take Flight
          </h3>

          <p className="mt-4 max-w-2xl text-white/70">
            Read the official announcement about the partnership between
            Mamelodi Sundowns and Red Bull, featuring Patrick Davidson in the
            campaign launch.
          </p>

          <a
            href="https://sundownsfc.co.za/mamelodi-sundowns-and-red-bull-take-flight-with-new-partnership/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-yellow-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Read Story →
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <Gallery
        title="Behind The Scenes"
        subtitle="Project Gallery"
        images={btsImages}
      />
    </main>
  );
}