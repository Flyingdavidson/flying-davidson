import Link from "next/link";

const timeline = [
  ["18 Days Out", "Red Bull One is grounded in Upington by DOT/ACSA."],
  ["12 Days Out", "Aerocamp ends. The GameBird is still grounded."],
  ["5 Days Out", "Rain starts. Lawyers are still fighting to get RB1 released."],
  ["4 Days Out", "The Eastern Cape floods. Roads, farms and airfields are hit hard."],
  ["Race Thursday", "Team 77 finally gets to Grahamstown and starts flying."],
  ["Final Day", "Over-Gs, changing weather and one last push for points."],
];

export default function RaceReport2026Race1() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-zinc-950 to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(98,214,170,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_35%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-6xl">
            <Link
              href="/media/results"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
            >
              ← Back to Race Reports
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              AIR RACE X / 2026 Race 1
            </p>

            <h1 className="text-5xl font-black uppercase italic leading-[0.82] md:text-8xl lg:text-9xl">
              Grounded.
              <br />
              Flooded.
              <br />
              Still Racing.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75 md:text-2xl md:leading-10">
              Team 77 entered 2026 as defending champions, with a new title
              sponsor, better preparation and a clear plan. Then almost
              everything that could go wrong, did.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          <Stat value="4th" label="Qualified" />
          <Stat value="12" label="Championship Points" />
          <Stat value="3" label="Over-G Runs" />
          <Stat value="3" label="Days To Race" />
        </div>
      </section>

      <section className="px-8 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
            Preparation is key in air racing.
            <span className="text-[#62d6aa]">
              {" "}
              Race 1 tested everything before the clock even started.
            </span>
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="border-l border-white/10 pl-6">
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
              Race Build-Up
            </p>

            <div className="space-y-8">
              {timeline.map(([day, text]) => (
                <div key={day} className="relative">
                  <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#62d6aa]" />
                  <p className="text-sm font-black uppercase tracking-[0.25em]">
                    {day}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </aside>

          <article className="space-y-16">
            <StoryBlock kicker="Defending Champions" title="The season started with belief.">
              Winning the 2025 Air Race X Championship changed the way Team 77
              prepared for 2026. The team worked on strategy, weather modelling
              and tools that could give them an edge in a sport where small
              margins matter.
            </StoryBlock>

            <StoryBlock kicker="New Partner" title="Emotive joined as main sponsor.">
              On the back of the 2025 championship win, Emotive became Team 77’s
              formal main sponsor for the 2026 ARX season. With the sponsor in
              place, the aircraft prepared, the smoke system working and the new
              ARX GDU camera process briefed, Race 1 looked under control.
            </StoryBlock>

            <Quote>Then Red Bull One was grounded in Upington.</Quote>

            <StoryBlock kicker="The First Problem" title="The GameBird was stuck.">
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

            <section className="border-y border-white/10 py-12">
              <p className="text-3xl font-black uppercase italic leading-tight text-white/90 md:text-5xl">
                “We had three days to compete,
                not the full seven.”
              </p>
            </section>

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

            <StoryBlock kicker="Day Two" title="Consistency started to appear, then the Gs arrived.">
              Practice 3 finally showed more consistent 65-second runs. Practice
              4 delivered a 66.4 and 65.3, followed by an over-G that forced the
              team to land. Practice 5 still lacked the consistency they needed.
            </StoryBlock>

            <StoryBlock kicker="Final Day" title="No more time. No more options.">
              The courier delay meant Patrick still did not have his normal
              parachute. The old parachute was heavy and uncomfortable. Practice
              6 produced a 64.929 and 64.995 before another over-G. Practice 7
              gave a 64.328, then another over-G.
            </StoryBlock>

            <Quote>Three over-Gs. Weather moving. Last day to fly. No choice but to race.</Quote>

            <section className="bg-white px-8 py-14 text-black md:px-12">
              <p className="text-xs uppercase tracking-[0.45em] text-black/50">
                Race 1 Result
              </p>
              <h2 className="mt-5 text-5xl font-black uppercase italic leading-none md:text-7xl">
                Qualified 4th.
              </h2>
              <p className="mt-6 text-4xl font-black italic text-[#0b7f68] md:text-6xl">
                12 points
              </p>
              <p className="mt-4 text-xl font-black uppercase tracking-[0.25em]">
                Knocked out by Sonka in the Semi-Final
              </p>
            </section>

            <StoryBlock kicker="Still Racing" title="Race 1 was tough.">
              Team 77 flew as fast as they could and came away with 12
              championship points. With three races left, there was still a lot
              that could go right. Race 2 was just around the corner, and the
              team would be prepared.
            </StoryBlock>

            <section className="border-t border-white/10 pt-12">
              <p className="max-w-4xl text-4xl font-black uppercase italic leading-tight md:text-6xl">
                Grounded. Flooded. Rushed. Uncomfortable.
                <span className="text-[#62d6aa]"> Still racing.</span>
              </p>

              <a
                href="https://youtu.be/lq-rFZ_pE84"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex items-center gap-5 border border-[#62d6aa]/70 px-7 py-4 text-xs uppercase tracking-[0.35em] text-[#62d6aa] transition hover:bg-[#62d6aa] hover:text-black"
              >
                Watch Race 1 <span>→</span>
              </a>
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
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-4xl">
      <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
        {kicker}
      </p>
      <h2 className="text-4xl font-black uppercase italic leading-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-6 text-lg leading-8 text-white/65">{children}</p>
    </section>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-y border-[#62d6aa]/30 py-12">
      <p className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
        {children}
      </p>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black italic md:text-5xl">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}
