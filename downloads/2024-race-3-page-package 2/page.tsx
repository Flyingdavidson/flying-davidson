import Image from "next/image";
import Link from "next/link";

const timeline = [
  ["Tuesday", "Arrived late in Grahamstown."],
  ["Wednesday", "Pace looked good, but penalties started."],
  ["Thursday", "Everything was checked. Nothing made sense."],
  ["Friday", "A solar storm became the breakthrough clue."],
  ["Saturday", "More penalties. Almost done."],
  ["Sunday", "Run 36. Clean. Qualified third."],
];

export default function RaceReport2024Race3() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/race-reports/2024-race-3/hero.jpg"
          alt="Windsock during AIR RACE X Race 3"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-6xl">
            <Link
              href="/media/race-reports"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
            >
              ← Back to Race Reports
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              AIR RACE X / Race 3
            </p>

            <h1 className="text-6xl font-black uppercase italic leading-[0.82] md:text-9xl">
              36 Runs
              <br />
              Later.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75 md:text-2xl md:leading-10">
              A race week of penalties, doubt, GPS chaos and one unbelievable
              discovery: space weather was interfering with the race.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          <Stat value="36" label="Runs Before Qualifying" />
          <Stat value="65.772" label="Clean Qualifying Run" />
          <Stat value="KP 7" label="Solar Storm Level" />
          <Stat value="3rd" label="Qualified" />
        </div>
      </section>

      <section className="px-8 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
            Sometimes your toughest opponent is not another pilot.
            <span className="text-[#62d6aa]">
              {" "}
              Sometimes it is 150 million kilometres away.
            </span>
          </p>
        </div>
      </section>

      <section className="px-8 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="border-l border-white/10 pl-6">
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
              Race Week
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

          <article className="space-y-20">
            <Chapter
              kicker="The Setup"
              title="The team arrived with less time than usual."
              image="/images/race-reports/2024-race-3/briefing.jpg"
              alt="Greg Ritz and Patrick Davidson briefing"
            >
              Team 77 arrived in Grahamstown on Tuesday afternoon. Normally that
              was enough time to complete practice, qualifying and race flights.
              This time, Race 3 was about to become the hardest AIR RACE X week
              the team had ever faced.
            </Chapter>

            <Chapter
              kicker="The First Warning"
              title="The pace was there. The penalties were not."
              image="/images/race-reports/2024-race-3/track.jpg"
              alt="Aircraft flying over the AIR RACE X track"
              reverse
            >
              The first practice run produced a 65.744 with a two-second penalty.
              It looked promising. Then the clean runs disappeared. Pylon hits
              and height penalties kept appearing, even when the aircraft looked
              clean from the ground and on camera.
            </Chapter>

            <FullImage
              src="/images/race-reports/2024-race-3/team.jpg"
              alt="Team checking GPS equipment"
              caption="The team checked pylon positions, footage and GPS setup — but the penalties kept coming."
            />

            <Chapter
              kicker="Searching For Answers"
              title="Everything was questioned."
              image="/images/race-reports/2024-race-3/engine.jpg"
              alt="Aircraft engine with cowl removed"
            >
              Cameras were removed. The GPS receiver was checked. A foil base
              was added to improve reception. Mark, Greg and Patrick went through
              every possible explanation. Still the RDU kept reporting penalties.
            </Chapter>

            <section className="border-y border-[#62d6aa]/30 py-12">
              <p className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
                “What if it isn’t the flying?
                <span className="text-[#62d6aa]"> What if it’s the GPS?</span>”
              </p>
            </section>

            <Chapter
              kicker="The Breakthrough"
              title="The Sun entered the race."
              image="/images/race-reports/2024-race-3/phone.jpg"
              alt="Mark on the phone"
              reverse
            >
              Social media posts of the southern lights led Greg to investigate
              space weather. The team contacted the South African National Space
              Agency and learned that geomagnetic activity was affecting GPS
              reliability.
            </Chapter>

            <FullImage
              src="/images/race-reports/2024-race-3/kp-forecast.jpg"
              alt="KP geomagnetic forecast"
              caption="The KP forecast became the missing piece of the puzzle."
            />

            <Chapter
              kicker="The Low Point"
              title="Saturday nearly ended it."
              image="/images/race-reports/2024-race-3/hangar.jpg"
              alt="Hangar at sunset"
            >
              After more penalties and more frustration, Patrick called Greg on
              the radio and said he was done. The team had flown run after run,
              pulled heavy G again and again, and still had nothing official on
              the board.
            </Chapter>

            <section className="bg-white px-8 py-14 text-black md:px-12">
              <p className="text-xs uppercase tracking-[0.45em] text-black/50">
                Sunday Morning
              </p>
              <h2 className="mt-5 text-6xl font-black uppercase italic leading-none md:text-8xl">
                Run 36.
              </h2>
              <p className="mt-6 text-5xl font-black italic text-[#0b7f68] md:text-7xl">
                65.772
              </p>
              <p className="mt-4 text-xl font-black uppercase tracking-[0.25em]">
                Clean
              </p>
            </section>

            <p className="text-xl leading-9 text-white/70 md:text-2xl md:leading-10">
              As soon as Patrick saw the clean qualifying time on the RDU, he
              called Greg on the radio. They landed and logged it. After 36 runs,
              Team 77 had finally qualified — third.
            </p>

            <section className="border-t border-white/10 pt-12">
              <p className="max-w-4xl text-4xl font-black uppercase italic leading-tight md:text-6xl">
                36 runs. Four days. One solar storm. One clean flight.
                <span className="text-[#62d6aa]"> Qualified third.</span>
              </p>

              <Link
                href="/media/race-reports/2023-air-race-x"
                className="mt-12 inline-flex items-center gap-5 border border-[#62d6aa]/70 px-7 py-4 text-xs uppercase tracking-[0.35em] text-[#62d6aa] transition hover:bg-[#62d6aa] hover:text-black"
              >
                Previous Report <span>→</span>
              </Link>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}

function Chapter({
  kicker,
  title,
  image,
  alt,
  reverse,
  children,
}: {
  kicker: string;
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative h-[460px] overflow-hidden border border-white/10 bg-white/[0.03]">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>

      <div>
        <p className="mb-4 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
          {kicker}
        </p>
        <h2 className="text-4xl font-black uppercase italic leading-tight md:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-white/65">{children}</p>
      </div>
    </section>
  );
}

function FullImage({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="border border-white/10 bg-white/[0.03] p-3">
      <div className="relative h-[560px] overflow-hidden bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover object-center"
        />
      </div>
      <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-white/45">
        {caption}
      </figcaption>
    </figure>
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
