import Link from "next/link";

const races = [
  {
    title: "Race 1",
    date: "Completed",
    headline: "Grounded. Flooded. Still Racing.",
    qualifying: "4th",
    result: "Semi-Final",
    points: "12 Points",
    report: "/media/race-reports/2026-race-1",
    video: "https://youtu.be/lq-rFZ_pE84",
  },
  {
    title: "Race 2",
    date: "19 July 2026",
    headline: "Coming Next",
  },
  {
    title: "Race 3",
    date: "16 August 2026",
    headline: "The Story Continues",
  },
  {
    title: "Race 4",
    date: "13 September 2026",
    headline: "Season Finale",
  },
];

export default function ChampionshipPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#airracex"
            className="text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
          >
            ← Back to AIR RACE X
          </Link>

          <p className="mt-12 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
            AIR RACE X 2026
          </p>

          <h1 className="mt-6 text-6xl font-black uppercase italic leading-[0.9] md:text-8xl">
            Championship.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-white/65">
            Follow Patrick Davidson and Team 77 throughout the 2026 AIR RACE X
            Championship. Every race, every report and every broadcast in one
            place.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <Stat value="4th" label="Current Position" />
            <Stat value="12" label="Championship Points" />
            <Stat value="1 / 4" label="Races Completed" />
          </div>

          <div className="mt-10">
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                2026 Season Progress
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#62d6aa]">
                1 of 4 races completed
              </p>
            </div>

            <div
              className="h-3 overflow-hidden rounded-full border border-white/10 bg-white/10"
              role="progressbar"
              aria-label="2026 AIR RACE X season progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={25}
            >
              <div className="h-full w-1/4 rounded-full bg-[#62d6aa]" />
            </div>

            <p className="mt-3 text-right text-[10px] uppercase tracking-[0.25em] text-white/40">
              75% of the season remaining
            </p>
          </div>

          <section className="mt-20">
            <p className="mb-8 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              2026 Season
            </p>

            <div className="grid gap-6">
              {races.map((race) => (
                <RaceCard key={race.title} race={race} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function RaceCard({
  race,
}: {
  race: {
    title: string;
    date: string;
    headline: string;
    qualifying?: string;
    result?: string;
    points?: string;
    report?: string;
    video?: string;
  };
}) {
  const completed = race.date === "Completed";

  return (
    <article className="border border-white/10 bg-white/[0.04] p-8 transition hover:border-[#62d6aa]/60">
      <div className="grid gap-8 md:grid-cols-[0.8fr_1.6fr_1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#62d6aa]">
            {race.title}
          </p>

          <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/40">
            {race.date}
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-black uppercase italic leading-tight md:text-5xl">
            {race.headline}
          </h2>

          {completed && (
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <SmallStat label="Qualifying" value={race.qualifying || ""} />
              <SmallStat label="Result" value={race.result || ""} />
              <SmallStat
                label="Points"
                value={race.points || ""}
                highlight
              />
            </div>
          )}
        </div>

        <div className="flex flex-col justify-end gap-3">
          {race.report && (
            <Link
              href={race.report}
              className="border border-[#62d6aa]/70 px-5 py-3 text-center text-xs uppercase tracking-[0.25em] text-[#62d6aa] transition hover:bg-[#62d6aa] hover:text-black"
            >
              Read Report →
            </Link>
          )}

          {race.video && (
            <a
              href={race.video}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/15 px-5 py-3 text-center text-xs uppercase tracking-[0.25em] text-white/60 transition hover:border-white/50 hover:text-white"
            >
              Watch Race →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border border-white/10 bg-white/[0.04] p-6">
      <p className="text-4xl font-black italic">{value}</p>

      <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function SmallStat({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
        {label}
      </p>

      <p
        className={`mt-2 font-black ${
          highlight ? "text-2xl text-[#62d6aa]" : "text-xl text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}