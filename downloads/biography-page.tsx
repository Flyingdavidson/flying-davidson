import Image from "next/image";
import Link from "next/link";

const timeline = [
  {
    year: "Age 12",
    title: "First Aerobatic Win",
    text: "Patrick wins his first aerobatic competition while flying with a safety pilot.",
  },
  {
    year: "Age 17",
    title: "First Solo Competition",
    text: "He competes solo for the first time on his seventeenth birthday.",
  },
  {
    year: "Age 25",
    title: "Youngest SA Champion",
    text: "Patrick becomes South Africa's youngest National Aerobatic Champion.",
  },
  {
    year: "2016",
    title: "SkyGP World Champion",
    text: "He wins the SkyGP World Championship.",
  },
  {
    year: "2018",
    title: "Red Bull Air Race",
    text: "Patrick joins the Challenger Class and immediately scores international podiums.",
  },
  {
    year: "2025",
    title: "AIR RACE X World Champion",
    text: "Team 77 claims the AIR RACE X World Championship.",
  },
];

const highlights = [
  "2025 AIR RACE X World Champion",
  "2016 SkyGP World Champion",
  "4× South African Unlimited Champion",
  "4× South African Advanced Champion",
  "Red Bull Air Race Challenger Class Pilot",
  "Multiple FAI World Championship Appearances",
  "Aero Club of South Africa Pilot of the Year",
  "International Aerobatic Display Pilot",
];

const currentRoles = [
  {
    title: "AIR RACE X",
    text: "Competing internationally with Team 77 in the Edge 540 V3.",
  },
  {
    title: "Red Bull Displays",
    text: "High-energy aerobatic displays in the GameBird GB1.",
  },
  {
    title: "International Airshows",
    text: "Precision displays in aerobatic aircraft, warbirds and jets.",
  },
  {
    title: "Film & Commercial Work",
    text: "Precision flying for international productions, campaigns and brand projects.",
  },
  {
    title: "Pilot Development",
    text: "Supporting training camps, mentoring pilots and growing aerobatics.",
  },
  {
    title: "Aviation Ambassador",
    text: "Representing South African aviation on the world stage.",
  },
];

const aircraft = [
  {
    name: "GameBird GB1",
    label: "Red Bull Display Aircraft",
    image: "/images/hangar/redbull-one-wing1.jpg",
    href: "/hangar/gamebird",
    text: "Built from carbon fibre and designed for unlimited aerobatics, the GameBird gives Patrick the performance, control and precision required for world-class display flying.",
  },
  {
    name: "Edge 540 V3",
    label: "AIR RACE X Machine",
    image: "/images/edge/edge01.jpg",
    href: "/hangar/edge-540",
    text: "Built for speed, precision and repeatability, the Edge 540 V3 is the machine behind Team 77's AIR RACE X campaign.",
  },
];

export default function BiographyPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/media-kit/media-kit-hero.jpg"
          alt="Patrick Davidson with his Red Bull GameBird"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />

        <div className="relative z-10 flex min-h-screen flex-col px-6 py-10 md:px-16 md:py-14 lg:px-24">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
            <Link
              href="/media/media-kit"
              className="text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
            >
              ← Back to Media Kit
            </Link>

            <p className="text-xs uppercase tracking-[0.35em] text-white/45">
              FlyingDavidson.com
            </p>
          </div>

          <div className="mx-auto mt-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-end">
            <div />

            <div className="max-w-xl md:justify-self-end">
              <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
                Official Biography
              </p>

              <h1 className="mt-6 text-5xl font-black uppercase italic leading-[0.86] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                Patrick
                <br />
                Davidson.
              </h1>

              <p className="mt-8 text-lg uppercase tracking-[0.18em] text-white/80 md:text-xl">
                South African Aerobatic & Air Race Pilot
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Team 77
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="/images/media-kit/patrick-davidson-portrait.jpg"
              alt="Patrick Davidson portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
              The Story
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase italic leading-tight md:text-6xl">
              Flying was never just something Patrick chose.
              <br />
              It became part of who he is.
            </h2>

            <div className="mt-8 space-y-5 text-lg leading-8 text-white/65">
              <p>
                From the moment he discovered aerobatics as a young boy,
                Patrick's life has been driven by precision, discipline and the
                pursuit of excellence in the air.
              </p>

              <p>
                Today he is recognised as one of South Africa's leading
                aerobatic and air race pilots, representing his country through
                international competition, world-class air displays and global
                aviation partnerships.
              </p>

              <p>
                Patrick began competing in aerobatics at just twelve years old,
                flying with a safety pilot. He developed his skills in the
                Yak-52 before completing his licence in the legendary North
                American Harvard and competing solo for the first time on his
                seventeenth birthday.
              </p>

              <p>
                By twenty-five he had become South Africa's youngest National
                Aerobatic Champion. The years that followed brought national
                titles, world championship appearances, Red Bull Air Race
                podiums and, in 2025, the AIR RACE X World Championship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            The Journey
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">
            Built Over A Lifetime.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="bg-black p-7">
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                  {item.year}
                </p>
                <h3 className="mt-4 text-2xl font-black uppercase italic">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Career Highlights
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase italic leading-tight md:text-6xl">
            Championships.
            <br />
            Podiums.
            <br />
            World Stage.
          </h2>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="bg-black px-6 py-5 text-sm uppercase tracking-[0.18em] text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-16 md:px-16 lg:px-24">
        <div className="absolute inset-0">
          <Image
            src="/images/media-kit/action/action01.jpg"
            alt="Patrick Davidson flying"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Flying Today
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">
            Competition.
            <br />
            Display.
            <br />
            Inspiration.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {currentRoles.map((item) => (
              <article
                key={item.title}
                className="border border-white/10 bg-black/45 p-6 backdrop-blur-sm"
              >
                <h3 className="text-xl font-black uppercase">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Aircraft
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">
            Two Machines.
            <br />
            Two Missions.
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {aircraft.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden border border-white/10 bg-black"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-4xl font-black uppercase italic">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="text-base leading-8 text-white/60">
                    {item.text}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-7 inline-flex text-xs font-bold uppercase tracking-[0.3em] text-yellow-400"
                  >
                    View Aircraft →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Media & Partnerships
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase italic leading-tight md:text-6xl">
            A Career Beyond Competition.
          </h2>

          <div className="mt-8 max-w-4xl space-y-5 text-lg leading-8 text-white/65">
            <p>
              Patrick's flying has featured in international television,
              commercial productions, global brand campaigns and Red Bull
              projects where precision flying and close coordination are
              essential.
            </p>

            <p>
              He works with partners across aviation, motorsport, performance
              and lifestyle industries while continuing to represent South
              African aviation internationally.
            </p>

            <p>
              Away from the spotlight, Patrick is equally committed to growing
              the sport through pilot mentoring, aerobatic training camps and
              the development of the next generation of aviators.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "/images/media-kit/action/action02.jpg",
              "/images/media-kit/portraits/portrait01.jpg",
              "/images/media-kit/action/action03.jpg",
            ].map((src, index) => (
              <div
                key={src}
                className="relative aspect-[4/3] overflow-hidden rounded-xl"
              >
                <Image
                  src={src}
                  alt={`Patrick Davidson media image ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[75vh] overflow-hidden">
        <Image
          src="/images/media-kit/action/action03.jpg"
          alt="Patrick Davidson"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 flex min-h-[75vh] items-end px-6 py-16 md:px-16 lg:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
              Management & Media
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase italic leading-tight md:text-7xl">
              Precision.
              <br />
              Passion.
              <br />
              Performance.
            </h2>

            <div className="mt-10 max-w-xl border-l-2 border-yellow-400 pl-6">
              <p className="text-2xl font-black uppercase">Greg Ritz</p>
              <p className="mt-2 text-white/60">Management & Media Enquiries</p>

              <a
                href="mailto:greg@flyingdavidson.com"
                className="mt-5 inline-block text-lg text-yellow-400"
              >
                greg@flyingdavidson.com
              </a>

              <a
                href="https://flyingdavidson.com"
                className="mt-2 block text-lg text-white/70"
              >
                flyingdavidson.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
