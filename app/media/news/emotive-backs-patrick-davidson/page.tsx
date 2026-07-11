/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function EmotiveNewsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/news/emotive/emotive-hero.jpg"
          alt="Emotive backs Patrick Davidson for the 2026 AIR RACE X Championship"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <Link
              href="/media/news"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
            >
              ← Back to News
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              Team 77 News / Sponsor
            </p>

            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              Emotive
              <br />
              Backs World Champion
              <br />
              Patrick Davidson.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/70">
              Emotive becomes Team 77's principal partner as Patrick Davidson
              begins his defence of the 2026 AIR RACE X Championship.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/40">
              April 2026
            </p>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <article className="mx-auto max-w-4xl space-y-10 text-lg leading-9 text-white/70">

          <p>
            Emotive has officially announced its partnership with Patrick
            Davidson and Team 77 ahead of the 2026 AIR RACE X Championship,
            strengthening its commitment to high performance, innovation and
            motorsport excellence.
          </p>

          <p>
            Following Patrick's championship-winning 2025 season, Emotive has
            stepped forward as Team 77's principal partner, supporting the team
            as it prepares to defend the AIR RACE X World Championship against
            the world's best air racing pilots.
          </p>

          <h2 className="text-3xl font-black uppercase italic text-white">
            A Partnership Built On Performance
          </h2>

          <p>
            The collaboration brings together one of Europe's leading automotive
            aftermarket groups with one of the sport's most successful pilots.
            Throughout the 2026 season, Emotive branding will feature prominently
            on Patrick's race aircraft, race suit and team equipment.
          </p>

          <p>
            Both organisations share a common philosophy centred on precision,
            reliability and continuous improvement—qualities that are essential
            whether competing at over 400 km/h through an AIR RACE X course or
            delivering world-class automotive solutions.
          </p>

          <h2 className="text-3xl font-black uppercase italic text-white">
            Looking Ahead
          </h2>

          <p>
            Entering the 2026 season as the reigning AIR RACE X Champion,
            Patrick Davidson and Team 77 face one of the strongest international
            fields assembled to date.
          </p>

          <p>
            With Emotive joining the journey, Team 77 looks forward to building
            a successful long-term partnership while continuing to push the
            limits of performance both in the air and away from the racetrack.
          </p>

          <div className="border-t border-white/10 pt-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Source
            </p>

            <p className="mt-3 text-base text-white/60">
              Adapted from the official Emotive Group announcement:
              <br />
              "Emotive Backs World Champion Patrick Davidson for the 2026 AIR
              RACE X Championship."
            </p>
          </div>

        </article>
      </section>
    </main>
  );
}