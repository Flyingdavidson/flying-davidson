import Link from "next/link";

export default function AirRaceXScheduleNewsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white md:px-16 lg:px-24">
      <Link
        href="/media"
        className="text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
      >
        ← Back to Media Centre
      </Link>

      <article className="mx-auto mt-20 max-w-4xl">
        <p className="text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
          Team 77 News / AIR RACE X
        </p>

        <h1 className="mt-6 text-5xl font-black uppercase italic leading-tight md:text-7xl">
          AIR RACE X Announces 2026 Championship Schedule.
        </h1>

        <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/40">
          17 June 2026
        </p>

        <div className="mt-12 space-y-8 text-lg leading-9 text-white/70">
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
    </main>
  );
}