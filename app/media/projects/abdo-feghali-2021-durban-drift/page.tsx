import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/media/Gallery";

const basePath = "/images/projects/abdo-feghali-2021";

const officialImages = [
  `${basePath}/official/01.jpg`,
  `${basePath}/official/02.jpg`,
  `${basePath}/official/03.jpg`,
  `${basePath}/official/04.jpg`,
  `${basePath}/official/05.jpg`,
  `${basePath}/official/06.jpg`,
];

const btsImages = [
  `${basePath}/bts/01.jpg`,
  `${basePath}/bts/02.jpg`,
  `${basePath}/bts/03.jpg`,
  `${basePath}/bts/04.jpg`,
  `${basePath}/bts/05.jpg`,
];

export default function AbdoFeghali2021Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src={`${basePath}/hero.jpg`}
          alt="Patrick Davidson flying close formation with Abdo Feghali drifting in Durban"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

        <div className="relative z-10 flex min-h-[78vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/media/projects"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Projects
            </Link>

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Project / Durban / 2021
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-8xl">
              Abdo Feghali
              <br />
              Durban Drift
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              Precision flying meets drifting in Durban for a Red Bull Content
              Pool production.
            </p>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Location
            </p>

            <p className="mt-2 text-xl font-bold">
              Durban, South Africa
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Date
            </p>

            <p className="mt-2 text-xl font-bold">
              13 April 2021
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Credit
            </p>

            <p className="mt-2 text-xl font-bold">
              Craig Kolesky / Red Bull Content Pool
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
            Watch the Project
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic md:text-6xl">
            Durban Drift
          </h2>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/OsEeDjjCC-4?start=171"
              title="Abdo Feghali Durban Drift"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
            Read the Full Story
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase">
            Red Bull Content Pool
          </h3>

          <p className="mt-4 max-w-2xl text-white/70">
            Discover how the Durban production came together and see the
            complete behind-the-scenes story from Red Bull.
          </p>

          <a
            href="https://www.redbull.com/za-en/drifting-durban"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full border border-yellow-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Read Full Story →
          </a>
        </div>
      </section>

      {/* OFFICIAL PHOTOS */}
      <Gallery
        title="Official"
        subtitle="Project Gallery"
        images={officialImages}
      />

      {/* BEHIND THE SCENES */}
      <Gallery
        title="Behind The Scenes"
        subtitle="Making The Project"
        images={btsImages}
      />
    </main>
  );
}