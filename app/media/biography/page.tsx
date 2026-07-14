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
  { value: "2025", label: "AIR RACE X World Champion" },
  { value: "2016", label: "SkyGP World Champion" },
  { value: "6×", label: "SA Unlimited Champion" },
  { value: "4×", label: "SA Advanced Champion" },
  { value: "2×", label: "Aero Club Pilot of the Year" },
  { value: "Global", label: "World Championship Career" },
];
const officialPartners = [
  {
    name: "Red Bull",
    role: "Athlete Partner",
  },
  {
    name: "Emotive",
    role: "Title Partner",
  },
];
const aviationPartners = [
  {
    name: "LIFT Aviation",
    role: "Helmet Systems",
  },
  {
    name: "Lightspeed Aviation",
    role: "Aviation Communications",
  },
  {
    name: "Dynamic Propellers",
    role: "Propeller Technology",
  },
  {
    name: "Alton Aero Engineering",
    role: "Aircraft Engineering",
  },
];
const gallery = [
  {
    src: "/images/media-kit/action/action01.jpg",
    alt: "Patrick Davidson in action",
    className: "md:col-span-7 md:row-span-2 aspect-[16/11]",
  },
  {
    src: "/images/media-kit/portraits/portrait01.jpg",
    alt: "Patrick Davidson portrait",
    className: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "/images/media-kit/action/action02.jpg",
    alt: "Patrick Davidson flying display",
    className: "md:col-span-5 aspect-[4/3]",
  },
  {
    src: "/images/media-kit/action/action03.jpg",
    alt: "Patrick Davidson and Team 77",
    className: "md:col-span-6 aspect-[16/10]",
  },
  {
    src: "/images/hangar/redbull-one-wing1.jpg",
    alt: "Patrick Davidson GameBird GB1",
    className: "md:col-span-6 aspect-[16/10]",
  },
];

const aircraft = [
  {
    name: "GameBird GB1",
    label: "Red Bull Display Aircraft",
    image: "/images/hangar/redbull-one-wing1.jpg",
    href: "/hangar/gamebird",
    text: "Built from carbon fibre and designed for unlimited aerobatics, the GameBird delivers the precision, control and performance required for world-class display flying.",
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
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/media-kit/media-kit-hero.jpg"
          alt="Patrick Davidson with his Red Bull GameBird"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[54%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-black/5 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/15" />

        <div className="relative z-10 flex min-h-screen flex-col px-6 py-10 md:px-16 md:py-14 lg:px-24">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
            <Link
              href="/media/media-kit"
              className="text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
            >
              ← Back to Media Kit
            </Link>

            <p className="hidden text-xs uppercase tracking-[0.35em] text-white/45 sm:block">
              FlyingDavidson.com
            </p>
          </div>

          <div className="mx-auto mt-auto grid w-full max-w-7xl gap-10 md:grid-cols-2 md:items-end">
            <div />

            <div className="max-w-xl md:justify-self-end">
              <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
                Patrick Davidson
              </p>

              <h1 className="mt-6 text-5xl font-black uppercase italic leading-[0.84] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
                Official
                <br />
                Biography.
              </h1>

              <p className="mt-8 text-lg uppercase tracking-[0.18em] text-white/80 md:text-xl">
                South African Aerobatic & Air Race Pilot
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Team 77
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/downloads/patrick-davidson-biography.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-8 py-4 text-xs font-black uppercase tracking-[0.3em] text-black transition hover:bg-yellow-300"
                >
                  Download PDF
                </a>

                <a
                  href="#story"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-xs font-black uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  Read Online
                </a>
              </div>

              <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/35">
                Official version for media, event organisers and partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPENING QUOTE */}
      <section
        id="story"
        className="scroll-mt-20 border-y border-white/10 px-6 py-24 md:px-16 lg:px-24"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            The Story
          </p>

          <h2 className="mt-8 text-4xl font-black uppercase italic leading-tight sm:text-5xl md:text-7xl">
            Flying was never just something Patrick chose.
            <br />
            <span className="text-white/45">It became part of who he is.</span>
          </h2>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-white/[0.025] px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
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

          <div className="space-y-6 text-lg leading-8 text-white/65">
            <p>
              From the moment he discovered aerobatics as a young boy,
              Patrick&apos;s life has been driven by precision, discipline and
              the pursuit of excellence in the air.
            </p>

            <p>
              Today he is recognised as one of South Africa&apos;s leading
              aerobatic and air race pilots, representing his country through
              international competition, world-class air displays and global
              aviation partnerships.
            </p>

            <p>
              Patrick began competing in aerobatics at just twelve years old,
              flying with a safety pilot. He developed his skills in the Yak-52
              before completing his licence in the legendary North American
              Harvard and competing solo for the first time on his seventeenth
              birthday.
            </p>

            <p>
              By twenty-five he had become South Africa&apos;s youngest National
              Aerobatic Champion. The years that followed brought national
              titles, world championship appearances, Red Bull Air Race podiums
              and, in 2025, the AIR RACE X World Championship.
            </p>
          </div>
        </div>
      </section>

      {/* CINEMATIC IMAGE BREAK */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <Image
          src="/images/media-kit/action/action01.jpg"
          alt="Patrick Davidson flying"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent" />

        <div className="relative z-10 flex min-h-[72vh] items-end px-6 py-16 md:px-16 lg:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="max-w-4xl text-4xl font-black uppercase italic leading-tight md:text-7xl">
              Precision is not a moment.
              <br />
              It is a lifetime of preparation.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            The Journey
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">
            Built Over A Lifetime.
          </h2>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {timeline.map((item) => (
              <article key={item.year} className="bg-black p-8">
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

      {/* HIGHLIGHTS */}
      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Career Highlights
          </p>

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.label} className="bg-black p-8">
                <p className="text-5xl font-black italic text-yellow-400 md:text-6xl">
                  {item.value}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/65">
                  {item.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            In The Air
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">
            Every Flight Tells A Story.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
            {gallery.map((image) => (
              <div
                key={image.src}
                className={`group relative overflow-hidden rounded-2xl ${image.className}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/15" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AIRCRAFT */}
      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Aircraft
          </p>

          <h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">
            Two Machines.
            <br />
            Two Missions.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
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
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-4xl font-black uppercase italic md:text-5xl">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-base leading-8 text-white/60">
                    {item.text}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.3em] text-yellow-400"
                  >
                    View Aircraft →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO / MEDIA */}
      <section className="relative min-h-[70vh] overflow-hidden">
        <Image
          src="/images/media-kit/action/action02.jpg"
          alt="Patrick Davidson media and film work"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 flex min-h-[70vh] items-center px-6 py-20 md:px-16 lg:px-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
              Film, Media & Commercial Work
            </p>

            <h2 className="mt-5 max-w-5xl text-4xl font-black uppercase italic leading-tight md:text-7xl">
              A Career Beyond Competition.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-white/65">
              Patrick&apos;s flying has featured in international television,
              commercial productions, global campaigns and Red Bull projects
              where precision flying and close coordination are essential.
            </p>

            <a
              href="https://www.youtube.com/@flyingdavidson"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex rounded-full border border-yellow-400 bg-yellow-400 px-8 py-4 text-xs font-black uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-yellow-400"
            >
              Watch Flying Davidson
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Flying Philosophy
          </p>

          <blockquote className="mt-8 text-4xl font-black uppercase italic leading-tight md:text-7xl">
            “To demonstrate what is possible when precision, preparation and
            passion come together.”
          </blockquote>
        </div>
      </section>


{/* PARTNERS */}
<section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 md:px-16 lg:px-24">
  <div className="mx-auto max-w-7xl">
    <p className="text-center text-xs uppercase tracking-[0.55em] text-yellow-400">
      Official Partners
    </p>

    <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
      {officialPartners.map((partner) => (
        <div
          key={partner.name}
          className="flex min-h-40 flex-col items-center justify-center bg-black p-8 text-center"
        >
          <h3 className="text-3xl font-black uppercase">
            {partner.name}
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/55">
            {partner.role}
          </p>
        </div>
      ))}
    </div>

    <p className="mt-20 text-center text-xs uppercase tracking-[0.55em] text-yellow-400">
      Aviation Partners
    </p>

    <div className="mt-8 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
      {aviationPartners.map((partner) => (
        <div
          key={partner.name}
          className="flex min-h-40 flex-col items-center justify-center bg-black p-8 text-center"
        >
          <h3 className="text-2xl font-black uppercase">
            {partner.name}
          </h3>

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-white/55">
            {partner.role}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <Image
          src="/images/media-kit/action/action03.jpg"
          alt="Patrick Davidson"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

        <div className="relative z-10 flex min-h-[78vh] items-end px-6 py-16 md:px-16 lg:px-24">
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
