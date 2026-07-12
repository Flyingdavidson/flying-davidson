import Image from "next/image";
import Link from "next/link";

export default function AirRaceXRace2PreviewNewsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/news/arx-race2-hero.webp"
          alt="AIR RACE X Race 2 Preview"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl">

            <Link
              href="/media/news"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
            >
              ← Back to News
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              Team 77 News / AIR RACE X
            </p>

            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
              AIR RACE X
              <br />
              Previews Race 2
              <br />
              Championship Battle.
            </h1>

            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/40">
              July 2026
            </p>

          </div>
        </div>
      </section>

      {/* Article starts here */}

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <article className="mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-9 text-white/70">

            <p>
              AIR RACE X has released its official preview ahead of Race 2 of
              the 2026 Championship, with the world&apos;s best race pilots preparing
              for another crucial round in one of the closest title fights the
              series has seen.
            </p>

            <p>
              Patrick Davidson and Team 77 head into the second event of the
              season sitting fourth in the championship standings after an
              eventful opening round. Valuable points from Race 1 keep the
              reigning World Champion firmly in contention as the battle for the
              2026 title continues.
            </p>

            <h2 className="pt-8 text-3xl font-black uppercase italic text-white">
              Championship Battle Intensifies.
            </h2>

            <p>
              With only four races making up the 2026 championship, every point
              is critical. AIR RACE X&apos;s official preview highlights the depth of
              this year&apos;s field and the incredibly small margins separating the
              world&apos;s leading race pilots.
            </p>

            <p>
              As the championship moves into its second round, consistency and
              precision will once again be just as important as outright speed.
            </p>

            <h2 className="pt-8 text-3xl font-black uppercase italic text-white">
              Race 2 Broadcast.
            </h2>

            <p>
              Fans around the world will be able to follow Race 2 through AIR
              RACE X&apos;s official global broadcast on Sunday, 19 July 2026, as
              Patrick Davidson continues his defence of the World Championship
              carrying race number 77.
            </p>

            <p>
              Team 77 looks forward to another exciting weekend of racing as the
              championship battle continues.
            </p>

          </div>

          <div className="mt-16 border-t border-white/10 pt-8">

            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Source: AIR RACE X Press Release.
            </p>

            <a
              href="https://airracex.com/news/news-05/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border border-[#62d6aa]/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#62d6aa] transition hover:bg-[#62d6aa] hover:text-black"
            >
              Read Official AIR RACE X Press Release →
            </a>

          </div>
        </article>
      </section>
    </main>
  );
}