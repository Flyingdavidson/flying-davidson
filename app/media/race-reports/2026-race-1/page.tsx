import Link from "next/link";
import type { ReactNode } from "react";

const timeline = [
  ["18 Days Out", "Red Bull One is grounded in Upington by DOT/ACSA."],
  ["12 Days Out", "Aerocamp ends. The GameBird is still grounded."],
  [
    "5 Days Out",
    "Rain starts. Lawyers are still fighting to get RB1 released.",
  ],
  [
    "4 Days Out",
    "The Eastern Cape floods. Roads, farms and airfields are hit hard.",
  ],
  [
    "Race Thursday",
    "Team 77 finally gets to Grahamstown and starts flying.",
  ],
  [
    "Final Day",
    "Over-Gs, changing weather and one last push for points.",
  ],
];

export default function RaceReport2026Race1() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(98,214,170,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_35%)]" />

        <div className="absolute left-[8%] top-[18%] h-px w-[45%] rotate-[-8deg] bg-gradient-to-r from-transparent via-[#62d6aa]/30 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 flex min-h-screen items-end px-6 py-20 md:px-16 md:py-24 lg:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <Link
              href="/media/race-reports"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
            >
              ← Back to Race Reports
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              AIR RACE X / 2026 Race 1
            </p>

            <h1 className="max-w-6xl text-5xl font-black uppercase italic leading-[0.82] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-9xl">
              Grounded.
              <br />
              Flooded.
              <br />
              Still Racing.
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 md:text-2xl md:leading-10">
              Team 77 entered 2026 as defending champions, with a new title
              sponsor, better preparation and a clear plan. Then almost
              everything that could go wrong, did.
            </p>
          </div>
        </div>
      </section>

      {/* TOP RACE STATISTICS */}
      <section className="px-6 py-10 md:px-16 md:py-14 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 border border-white/10 bg-white/[0.025] md:grid-cols-4">
          <Stat value="4th" label="Qualified" />
          <Stat value="12" label="Championship Points" />
          <Stat value="3" label="Over-G Runs" />
          <Stat value="3" label="Days Available" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-4xl font-black uppercase italic leading-[1.02] md:text-6xl">
            Preparation is key in air racing.
            <span className="text-[#62d6aa]">
              {" "}
              Race 1 tested everything before the clock even started.
            </span>
          </p>
        </div>
      </section>

      {/* MAIN STORY */}
      <section className="px-6 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          {/* TIMELINE */}
          <aside className="h-fit lg:sticky lg:top-24">
            <div className="border-l border-white/15 pl-7">
              <p className="mb-10 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
                Race Build-Up
              </p>

              <div className="space-y-10">
                {timeline.map(([day, text]) => (
                  <div key={day} className="relative">
                    <div className="absolute -left-[34px] top-1 h-3 w-3 rounded-full border-2 border-black bg-[#62d6aa] ring-1 ring-[#62d6aa]/40" />

                    <p className="text-sm font-black uppercase tracking-[0.22em]">
                      {day}
                    </p>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ARTICLE */}
          <article className="space-y-16 md:space-y-20">
            <StoryBlock
              kicker="Defending Champions"
              title="The season started with belief."
            >
              Winning the 2025 Air Race X Championship changed the way Team 77
              prepared for 2026. The team worked on strategy, weather modelling
              and tools that could give them an edge in a sport where small
              margins matter.
            </StoryBlock>

            <StoryBlock
              kicker="New Partner"
              title="Emotive joined as main sponsor."
            >
              On the back of the 2025 championship win, Emotive became Team 77’s
              formal main sponsor for the 2026 ARX season. With the sponsor in
              place, the aircraft prepared, the smoke system working and the new
              ARX GDU camera process briefed, Race 1 looked under control.
            </StoryBlock>

            <Quote>Then Red Bull One was grounded in Upington.</Quote>

            <StoryBlock
              kicker="The First Problem"
              title="The GameBird was stuck."
            >
              Eighteen days before Race 1, Red Bull One was grounded in Upington
              by DOT/ACSA. What started as an inconvenience quickly became a
              legal fight. Patrick left the aircraft behind and returned home
              while the lawyers worked to get it released.
            </StoryBlock>

            <StoryBlock kicker="Flood Week" title="Then the weather turned.">
              Five days before the race, the rain started. Four days out, it was
              flooding. News reports called it a 100-year flood. Roads washed
              away, schools closed, farms were damaged and aircraft were seen
              floating away after rivers broke their banks.
            </StoryBlock>

            <Statement>
              We had three days to compete,
              <br className="hidden sm:block" /> not the full seven.
            </Statement>

            <StoryBlock kicker="Race Thursday" title="A muddy start line.">
              Greg left for Grahamstown to prepare the track, set up the weather
              station and assess the field. The land was waterlogged and muddy.
              Getting stuck could cost valuable flying time. Patrick still had
              to get the Edge out of a wet grass runway without damaging the low
              wheel spats.
            </StoryBlock>

            <StoryBlock kicker="Practice" title="The numbers were everywhere.">
              Practice 1 produced inconsistent runs. The weather after the storm
              made reliable prediction difficult. Greg reviewed the conditions
              and Team 77 requested a track swing to a 320-degree heading.
              Practice 2 was so inconsistent the data was not even uploaded.
            </StoryBlock>

            <StoryBlock
              kicker="Day Two"
              title="Consistency appeared. Then the Gs arrived."
            >
              Practice 3 finally showed more consistent 65-second runs. Practice
              4 delivered a 66.4 and 65.3, followed by an over-G that forced the
              team to land. Practice 5 still lacked the consistency they needed.
            </StoryBlock>

            <StoryBlock
              kicker="Final Day"
              title="No more time. No more options."
            >
              The courier delay meant Patrick still did not have his normal
              parachute. The old parachute was heavy and uncomfortable. Practice
              6 produced a 64.929 and 64.995 before another over-G. Practice 7
              gave a 64.328, then another over-G.
            </StoryBlock>

            <Quote>
              Three over-Gs. Weather moving. Last day to fly. No choice but to
              race.
            </Quote>

            {/* RACE RESULT */}
            <section className="relative overflow-hidden border border-[#62d6aa]/30 bg-gradient-to-br from-[#62d6aa]/[0.12] via-white/[0.035] to-transparent">
              <div className="absolute right-0 top-0 h-48 w-48 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#62d6aa]/10 blur-3xl" />

              <div className="relative p-7 md:p-10 lg:p-12">
                <div className="flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
                      Official Race 1 Result
                    </p>

                    <h2 className="mt-4 text-4xl font-black uppercase italic leading-none md:text-6xl">
                      Points Secured.
                    </h2>
                  </div>

                  <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                    AIR RACE X 2026
                  </p>
                </div>

                <div className="grid md:grid-cols-3">
                  <ResultStat label="Qualifying" value="4th" />

                  <ResultStat
                    label="Race Result"
                    value="Semi-Final"
                    description="Knocked out by Martin Šonka"
                  />

                  <ResultStat
                    label="Championship"
                    value="12 Points"
                    highlight
                  />
                </div>

                <div className="border-t border-white/10 pt-7">
                  <p className="max-w-3xl text-base leading-7 text-white/55">
                    A difficult opening round, but Team 77 left Race 1 with
                    championship points on the board and three races still to
                    come.
                  </p>
                </div>
              </div>
            </section>

            <StoryBlock kicker="Still Racing" title="Race 1 was tough.">
              Team 77 flew as fast as they could and came away with 12
              championship points. With three races left, there was still a lot
              that could go right. Race 2 was just around the corner, and the
              team would be prepared.
            </StoryBlock>

            {/* CLOSING */}
            <section className="border-t border-white/10 pt-12">
              <p className="max-w-5xl text-4xl font-black uppercase italic leading-[1.02] md:text-6xl">
                Grounded. Flooded. Rushed. Uncomfortable.
                <span className="text-[#62d6aa]"> Still racing.</span>
              </p>

              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://youtu.be/lq-rFZ_pE84"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-5 border border-[#62d6aa]/70 px-7 py-4 text-xs uppercase tracking-[0.35em] text-[#62d6aa] transition hover:bg-[#62d6aa] hover:text-black"
                >
                  Watch Race 1 <span aria-hidden="true">→</span>
                </a>

                <Link
                  href="/championship"
                  className="inline-flex w-fit items-center gap-5 border border-white/15 px-7 py-4 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:border-white/50 hover:text-white"
                >
                  View Championship <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

function StoryBlock({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="max-w-3xl">
      <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
        {kicker}
      </p>

      <h2 className="text-3xl font-black uppercase italic leading-tight md:text-4xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-white/65">{children}</p>
    </section>
  );
}

function Quote({ children }: { children: ReactNode }) {
  return (
    <section className="relative border-y border-[#62d6aa]/25 py-12 md:py-16">
      <div className="absolute left-0 top-0 h-full w-px bg-[#62d6aa]" />

      <p className="pl-7 text-4xl font-black uppercase italic leading-tight md:pl-10 md:text-6xl">
        {children}
      </p>
    </section>
  );
}

function Statement({ children }: { children: ReactNode }) {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] px-7 py-12 md:px-10">
      <p className="text-3xl font-black uppercase italic leading-tight text-white/90 md:text-5xl">
        “{children}”
      </p>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-b border-r border-white/10 p-6 last:border-r-0 md:p-8">
      <p className="text-3xl font-black italic md:text-5xl">{value}</p>

      <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function ResultStat({
  label,
  value,
  description,
  highlight = false,
}: {
  label: string;
  value: string;
  description?: string;
  highlight?: boolean;
}) {
  return (
    <div className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
      <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
        {label}
      </p>

      <p
        className={`mt-4 font-black uppercase italic leading-none ${
          highlight
            ? "text-4xl text-[#62d6aa] md:text-5xl"
            : "text-3xl text-white md:text-4xl"
        }`}
      >
        {value}
      </p>

      {description && (
        <p className="mt-4 text-sm leading-6 text-white/45">{description}</p>
      )}
    </div>
  );
}