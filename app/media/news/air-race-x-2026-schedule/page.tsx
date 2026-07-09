import Image from "next/image";
import Link from "next/link";

export default function AirRaceXScheduleNewsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/news/arx-hero.jpg"
          alt="AIR RACE X 2026 Championship Schedule"
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
              Announces 2026
              <br />
              Championship Schedule.
            </h1>

            <p className="mt-8 text-sm uppercase tracking-[0.35em] text-white/40">
              17 June 2026
            </p>

          </div>
        </div>
      </section>

      {/* Article starts here */}

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <article className="mx-auto max-w-4xl">
          <div className="space-y-8 text-lg leading-9 text-white/70">
            <p>
              AIR RACE X has officially unveiled its 2026 championship schedule,
              confirming four races, three official broadcast programmes and a
              world-class grid featuring eight elite pilots from seven countries.
            </p>

            <p>
              As the reigning 2025 AIR RACE X Champion, Patrick Davidson returns
              with Team 77 to defend the title against some of the best air racing
              pilots in the world.
            </p>

            <h2 className="pt-8 text-3xl font-black uppercase italic text-white">
              Four Races. One Championship.
            </h2>

            <p>
              The 2026 season will be broadcast worldwide, with Race 1 opening the
              championship on 28 June, followed by Race 2 on 19 July, Race 3 on 16
              August and the season finale on 13 September.
            </p>

            <h2 className="pt-8 text-3xl font-black uppercase italic text-white">
              New for 2026.
            </h2>

            <p>
              Alongside the race broadcasts, AIR RACE X will introduce UNLOCK, a
              behind-the-scenes series designed to bring fans closer to the rules,
              rivalries and stories behind the sport.
            </p>

            <p>
              The season will also include IGNITION, a mid-season documentary
              focused on the human stories, pressure and obsession behind air
              racing.
            </p>

            <h2 className="pt-8 text-3xl font-black uppercase italic text-white">
              Patrick Returns as Champion.
            </h2>

            <p>
              Patrick Davidson enters the 2026 season carrying race number 77 and
              the title of 2025 AIR RACE X Champion. For Team 77, the announcement
              marks the start of a new campaign and the challenge of defending a
              world championship.
            </p>

            <p>
              With champions, newcomers and record-breakers on the grid, the 2026
              season promises to be one of the most competitive in AIR RACE X
              history.
            </p>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Source: AIR RACE X Press Release — 17 June 2026.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}