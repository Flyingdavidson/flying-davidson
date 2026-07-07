import Link from "next/link";

export default function RaceReport2023ARX() {
  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white md:px-16 lg:px-24">
      <Link
        href="/media"
        className="text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
      >
        ← Back to Media Centre
      </Link>

      <article className="mx-auto mt-20 max-w-4xl">
        <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
          Race Report / 2023
        </p>

        <h1 className="text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
          Baptism
          <br />
          By Fire.
        </h1>

        <p className="mt-8 text-xl leading-9 text-white/70">
          AIR RACE X was a completely new concept: eight pilots, eight countries,
          one GPS-marked track, real aircraft, real data and a virtual race
          broadcast from the streets of Shibuya, Tokyo.
        </p>

        <div className="mt-12 grid gap-4 border-y border-white/10 py-8 md:grid-cols-4">
          <Stat value="8" label="Pilots" />
          <Stat value="3" label="Wins" />
          <Stat value="67.941" label="Best Clean Run" />
          <Stat value="2023" label="ARX Debut" />
        </div>

        <section className="prose prose-invert mt-14 max-w-none prose-p:text-white/70 prose-p:leading-8 prose-headings:font-black prose-headings:uppercase prose-headings:italic prose-headings:text-white">
          <h2>A New Kind Of Race</h2>
          <p>
            AIR RACE X was presented to us by Yoshi, Matt and Pete, and we loved
            it for two reasons: we finally got to fly the race plane we had
            bought with the hope of air racing returning, and we are always up
            for a challenge.
          </p>

          <p>
            The concept was unique. Pilots around the world would fly the same
            GPS-marked track in their own countries. Each aircraft carried an RDU
            unit that tracked the aircraft, monitored penalties, pylon hits,
            height, entry speed and over-G events.
          </p>

          <h2>No Track Time</h2>
          <p>
            Preparation was far from ideal. Patrick had an airshow in China
            before the event, then rain prevented meaningful practice. By the
            time racing started, other teams had already logged times while Team
            77 was still trying to understand the system.
          </p>

          <h2>Day One: Problems Everywhere</h2>
          <p>
            The first day was chaos. The RDU kept showing pylon hits and low
            penalties. After sending data to Japan, the team discovered that one
            gate marker was six metres off position and another set of gate
            coordinates was wrong.
          </p>

          <p>
            With no physical pylons like Red Bull Air Race, judging height and
            position from ground markers was difficult. Team 77 was initially
            seven to eight seconds off the leading pace.
          </p>

          <h2>The Winglet Call</h2>
          <p>
            On day two, the team swapped to larger winglets after discussions
            with Pablo Castello Branco and Mark Hensman. The aircraft improved,
            and with an easterly wind through the start gate, Patrick managed
            laps in the 65 to 67 second range.
          </p>

          <h2>The Weather Lesson</h2>
          <p>
            Calm conditions on day three did not bring the expected improvement.
            Clean runs were slower, and the team realised the track favoured a
            slight headwind angle through the start gate. It was a painful but
            important lesson.
          </p>

          <h2>The Protest</h2>
          <p>
            Against Juan Velarde, penalties appeared despite Patrick feeling he
            had flown clean, repeatable lines. Greg lodged a protest. The review
            showed the RDU had only locked onto 11 of 16 satellites, causing
            incorrect tracking. The protest was accepted.
          </p>

          <h2>Three Wins And A Huge Learning Curve</h2>
          <p>
            Team 77 went on to beat Juan Velarde and Matt Hall, and beat Pete
            McLeod by default. They narrowly lost to Mika Brageot by just over
            half a second.
          </p>

          <p>
            The final result was three wins from seven matchups — but more
            importantly, it was a massive learning curve in a completely new
            form of air racing.
          </p>

          <h2>Why It Mattered</h2>
          <p>
            AIR RACE X was not Red Bull Air Race, and it was never meant to be.
            It was augmented reality, real aircraft, real race data and a new
            way of presenting air racing to a different audience.
          </p>

          <p>
            It was bold, different and sometimes frustrating, but it put real air
            racing back in motion — and Team 77 was part of it from the start.
          </p>
        </section>
      </article>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black italic text-white">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}