import Image from "next/image";
import Link from "next/link";

const timeline = [
  ["Tuesday", "Arrived in Grahamstown with limited time and a full race window still to complete."],
  ["Wednesday", "First practice showed promise, but penalties started appearing even when the runs looked clean."],
  ["Thursday", "Cameras came off, GPS checks started, and confidence dropped as the errors continued."],
  ["Friday", "The team discovered a geomagnetic storm could be making the GPS tracking unreliable."],
  ["Saturday", "More penalties, more doubt, and a call to the ARX Race Director to explain the situation."],
  ["Sunday", "Run 36 finally delivered a clean qualifying flight: 65.772 seconds."],
];

export default function RaceReport2024Race3() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/race-reports/2024-race-3/hero.jpg"
          alt="AIR RACE X Race 3 windsock"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <Link
              href="/media/race-reports"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
            >
              ← Back to Race Reports
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              AIR RACE X / Race 3
            </p>

            <h1 className="text-5xl font-black uppercase italic leading-[0.85] md:text-8xl">
              The Race
              <br />
              Against
              <br />
              The Sun.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/75">
              A week of penalties, doubt, GPS chaos and one unlikely discovery:
              the Sun itself was interfering with the race.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          <Stat value="36" label="Runs Before Qualifying" />
          <Stat value="65.772" label="Clean Qualifying Run" />
          <Stat value="KP 7" label="Geomagnetic Storm" />
          <Stat value="3rd" label="Qualified" />
        </div>
      </section>

      <section className="px-8 pb-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="border-l border-white/10 pl-6">
            <p className="mb-8 text-xs uppercase tracking-[0.45em] text-[#62d6aa]">
              Timeline
            </p>

            <div className="space-y-8">
              {timeline.map(([day, text]) => (
                <div key={day} className="relative">
                  <div className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-[#62d6aa]" />
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-white">
                    {day}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
                </div>
              ))}
            </div>
          </aside>

          <article className="space-y-16">
            <Chapter
              kicker="The Team"
              title="Three people. One aircraft. Everything to do."
              image="/images/race-reports/2024-race-3/briefing.jpg"
              alt="Greg Ritz and Patrick Davidson at the laptop"
            >
              Team 77 was small: Mark Hensman, Greg Ritz and Patrick Davidson.
              Between them they fuelled, cleaned, placed markers, made plans,
              managed video, analysed data and kept the aircraft ready.
            </Chapter>

            <Chapter
              kicker="The Problem"
              title="The runs looked clean. The RDU disagreed."
              image="/images/race-reports/2024-race-3/team.jpg"
              alt="Mark working on the GPS receiver"
              reverse
            >
              Pylon hits and height penalties kept appearing even when the track
              looked clean from the ground and on camera. Cameras came off, GPS
              checks started, and a foil base was added to the receiver. Still,
              nothing solved it.
            </Chapter>

            <div className="grid gap-8 md:grid-cols-2">
              <ImageCard
                src="/images/race-reports/2024-race-3/engine.jpg"
                alt="Aircraft engine with cowl removed"
                caption="Every possibility was checked."
              />
              <ImageCard
                src="/images/race-reports/2024-race-3/phone.jpg"
                alt="Mark on the phone"
                caption="The team kept searching for answers."
              />
            </div>

            <section className="border-y border-[#62d6aa]/30 py-12">
              <p className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
                “What if it isn’t the flying?
                <span className="text-[#62d6aa]"> What if it’s the GPS?</span>”
              </p>
            </section>

            <Chapter
              kicker="The Discovery"
              title="A solar storm had hit."
              image="/images/race-reports/2024-race-3/kp-forecast.jpg"
              alt="NOAA KP index forecast"
            >
              Greg started investigating reports of southern lights and the
              effects of space weather on GPS. A call to the South African
              National Space Agency confirmed the team was dealing with severe
              geomagnetic conditions that could make GPS tracking unreliable.
            </Chapter>

            <Chapter
              kicker="Sunday Morning"
              title="Run 36 finally gave them the answer."
              image="/images/race-reports/2024-race-3/track.jpg"
              alt="Aircraft flying over AIR RACE X markers"
              reverse
            >
              After 35 runs, Team 77 made one more attempt. Run 36 was clean:
              65.772 seconds. Patrick saw it on the RDU, called Greg on the
              radio, and they landed to log the flight.
            </Chapter>

            <section className="relative h-[520px] overflow-hidden border border-white/10">
              <Image
                src="/images/race-reports/2024-race-3/hangar.jpg"
                alt="Team 77 hangar at sunset"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="max-w-3xl text-3xl font-black uppercase italic leading-tight md:text-5xl">
                  36 runs. Four days. One solar storm. One clean flight.
                  <span className="text-[#62d6aa]"> Qualified third.</span>
                </p>
              </div>
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
      <div className="relative h-[420px] overflow-hidden border border-white/10 bg-white/[0.03]">
        <Image src={image} alt={alt} fill className="object-cover object-center" />
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

function ImageCard({
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
      <div className="relative h-[330px] overflow-hidden bg-black">
        <Image src={src} alt={alt} fill className="object-cover object-center" />
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
      <p className="text-3xl font-black italic text-white md:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}