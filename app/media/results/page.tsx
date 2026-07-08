import Link from "next/link";
import BackButton from "@/components/BackButton";

const liveSeason = {
  year: "2026",
  series: "AIR RACE X",
  title: "Live Season",
  position: "Season in Progress",
  note: "Only Race 1 has been officially broadcast. Championship result is not yet official.",
  races: [
    ["Race 1", "4th"],
    ["Race 2", "Pending"],
    ["Race 3", "Pending"],
    ["Race 4", "Pending"],
  ],
};

const aerobaticHighlights = [
  "6× South African National Aerobatic Champion",
  "2014 FAI World Advanced Aerobatic Championship Bronze Medal",
  "2014 South African Unlimited Aerobatic Champion",
  "2018 South African Unlimited Aerobatic Champion",
  "2021 South African Unlimited Aerobatic Champion",
  "Multiple FAI World Championship campaigns",
];

const arxSeasons = [
  {
    year: "2025",
    title: "AIR RACE X Champion",
    position: "P1 Overall",
    points: "79 pts",
    note: "Patrick Davidson and Team 77 claimed the AIR RACE X Championship.",
    races: ["Race 1: Win", "Final: Win", "Champion", "Team 77"],
  },
  {
    year: "2024",
    title: "Championship Podium",
    position: "P3 Overall",
    points: "53 pts",
    note: "A strong podium season in AIR RACE X.",
    races: ["Race 1: P4", "Race 2: P2", "Race 3: P3", "Overall: P3"],
  },
  {
    year: "2023",
    title: "AIR RACE X Debut",
    position: "P6",
    points: "9 pts",
    note: "Patrick’s first AIR RACE X season with Team 77.",
    races: ["Remote Round", "3W / 0D / 4L", "67.941 sec", "9 pts"],
  },
];

const redBullSeasons = [
  {
    year: "2019",
    title: "Challenger Class",
    position: "14 pts",
    note: "Patrick raced in the Red Bull Air Race Challenger Class.",
    races: ["Kazan: P2", "Lake Balaton: P3", "Race #77", "Challenger Class"],
  },
  {
    year: "2018",
    title: "Rookie Season",
    position: "P5 Overall",
    note: "Patrick became South Africa’s first Red Bull Air Race Challenger Class pilot.",
    races: ["Abu Dhabi: P6", "Cannes: P5", "Kazan: P2", "Indianapolis: P3"],
  },
];

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white md:px-16 lg:px-24">
      <BackButton fallback="/media" />

      <section className="mx-auto mt-20 max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
          Patrick Davidson
        </p>

        <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
          Results
          <br />
          
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">
          From aerobatic competition to Red Bull Air Race Challenger Class and
          AIR RACE X Champion — Patrick Davidson’s competitive flying journey.
        </p>

        <LiveSeasonCard />

        <ResultsSection title="AIR RACE X" seasons={arxSeasons} />

        <AerobaticHighlights />

        <ResultsSection title="Red Bull Air Race" seasons={redBullSeasons} />
      </section>
    </main>
  );
}

function LiveSeasonCard() {
  return (
    <section className="mt-20 border border-yellow-500/40 bg-yellow-500/[0.06] p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">
        {liveSeason.series}
      </p>

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-5xl font-black uppercase md:text-7xl">
            {liveSeason.year}
          </h2>

          <p className="mt-4 text-3xl font-black uppercase">
            {liveSeason.title}
          </p>

          <p className="mt-4 text-yellow-400">{liveSeason.position}</p>
        </div>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-white/70">
            {liveSeason.note}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {liveSeason.races.map(([race, status]) => (
              <div key={race} className="border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-black uppercase">{race}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/40">
                  {status}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
            Championship result will be updated once officially confirmed.
          </p>
        </div>
      </div>
    </section>
  );
}

function AerobaticHighlights() {
  return (
    <section className="mt-20">
      <h2 className="mb-8 border-b border-white/10 pb-6 text-3xl font-black uppercase tracking-tight text-yellow-400">
        Aerobatic Competition Highlights
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aerobaticHighlights.map((item) => (
          <div
            key={item}
            className="border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50"
          >
            <p className="text-base font-bold uppercase leading-7 tracking-[0.12em] text-white/80">
              {item}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 max-w-3xl text-sm leading-7 text-white/45">
        Note: Exact title years will be expanded as official records are
        verified.
      </p>
    </section>
  );
}

function ResultsSection({
  title,
  seasons,
}: {
  title: string;
  seasons: {
    year: string;
    title: string;
    position: string;
    points?: string;
    note: string;
    races: string[];
  }[];
}) {
  return (
    <section className="mt-20">
      <h2 className="mb-8 border-b border-white/10 pb-6 text-3xl font-black uppercase tracking-tight text-yellow-400">
        {title}
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {seasons.map((season) => (
          <article
            key={`${title}-${season.year}`}
            className="border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50"
          >
            <div className="flex items-start justify-between gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-500/75">
                  Season
                </p>
                <h3 className="mt-3 text-5xl font-black">{season.year}</h3>
              </div>

              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.25em] text-white/35">
                  Result
                </p>
                <p className="mt-3 text-2xl font-black text-yellow-400">
                  {season.position}
                </p>
              </div>
            </div>

            <h4 className="mt-10 text-3xl font-black uppercase">
              {season.title}
            </h4>

            <p className="mt-5 text-base leading-7 text-white/60">
              {season.note}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {season.races.map((race) => (
                <div key={race} className="border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-bold uppercase tracking-[0.15em]">
                    {race}
                  </p>
                </div>
              ))}
            </div>

            {season.points && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                  Championship Points
                </p>
                <p className="mt-2 text-3xl font-black">{season.points}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}