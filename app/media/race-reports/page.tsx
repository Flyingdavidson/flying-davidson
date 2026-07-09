import Link from "next/link";

const reports = [
  {
    year: "2026",
    title: "Grounded, Flooded, And Still Racing",
    series: "AIR RACE X • Race 1",
    text: "A grounded GameBird, 100-year floods, damaged roads, late gear, over-Gs and a fight to get points on the board.",
    href: "/media/race-reports/2026-race-1",
  },
  {
    year: "2024",
    title: "36 Runs Later",
    series: "AIR RACE X • Race 3",
    text: "GPS chaos, penalties, a geomagnetic storm and one clean qualifying run after 36 attempts.",
    href: "/media/race-reports/2024-race-3",
  },
  {
    year: "2023",
    title: "Baptism By Fire",
    series: "AIR RACE X",
    text: "Team 77’s first AIR RACE X event — RDU issues, weather lessons, protests, penalties and three wins from seven matchups.",
    href: "/media/race-reports/2023-air-race-x",
  },
];

export default function RaceReportsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white md:px-16 lg:px-24">
      <Link
  href="/#media"
  scroll={true}
  className="text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
>
  ← Back to Media Centre
</Link>

      <section className="mx-auto mt-20 max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
          Media Centre
        </p>

        <h1 className="text-6xl font-black uppercase italic leading-[0.9] md:text-8xl">
          Race
          <br />
          Reports.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">
          The stories behind the races — preparation, strategy, problems,
          decisions and results.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((report) => (
            <Link
              key={report.title}
              href={report.href}
              className="group border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-2 hover:border-[#62d6aa]/70"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#62d6aa]">
                {report.series} / {report.year}
              </p>

              <h2 className="mt-5 text-4xl font-black uppercase italic leading-tight">
                {report.title}
              </h2>

              <p className="mt-5 text-base leading-7 text-white/60">
                {report.text}
              </p>

              <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#62d6aa]">
                Read Report →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}