import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const basePath = "/images/projects/giving-it-gears-2021";

const redBullEpisodeUrl =
  "https://www.redbull.com/za-en/episodes/giving-it-gears-with-jason-goliath-s1-e1";

  const btsImages = Array.from(
    { length: 20 },
    (_, index) => `bts/${String(index + 1).padStart(2, "0")}.jpg`
  );

  const btsVideos = Array.from(
    { length: 6 },
    (_, i) => ({
      src: `${basePath}/videos/${String(i + 1).padStart(2, "0")}.mp4`,
      title: `Behind the Scenes ${i + 1}`,
    })
  );

const projectDetails = [
  {
    label: "Client",
    value: "Red Bull",
  },
  {
    label: "Series",
    value: "Giving It Gears",
  },
  {
    label: "Episode",
    value: "Season 1, Episode 1",
  },
  {
    label: "Episode Title",
    value: "Taking to the Skies",
  },
  {
    label: "Featuring",
    value: "Patrick Davidson & Jason Goliath",
  },
  {
    label: "Location",
    value: "Eastern Cape, South Africa",
  },
  {
    label: "Release Year",
    value: "2021",
  },
  {
    label: "Duration",
    value: "23 Minutes",
  },
];

export const metadata: Metadata = {
  title: "Giving It Gears with Patrick Davidson",
  description:
    "Jason Goliath and Nick visit Patrick Davidson in the Eastern Cape to explore his aircraft collection, discover aerobatic flying and challenge him to a race.",
  alternates: {
    canonical: "/media/projects/giving-it-gears-2021",
  },
  openGraph: {
    title: "Giving It Gears with Patrick Davidson",
    description:
      "Taking to the Skies — Patrick Davidson featured in Season 1, Episode 1 of Red Bull's Giving It Gears.",
    url: "/media/projects/giving-it-gears-2021",
    type: "article",
    images: [
      {
        url: `${basePath}/hero.jpg`,
        width: 1600,
        height: 1000,
        alt: "Patrick Davidson featured in Giving It Gears",
      },
    ],
  },
};

export default function GivingItGears2021Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <Image
          src={`${basePath}/hero.jpg`}
          alt="Patrick Davidson featured in Giving It Gears with Jason Goliath"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />

        <div className="relative z-10 flex min-h-[82vh] items-end">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link
              href="/media/projects"
              className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
            >
              ← Back to Projects
            </Link>

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600/10 px-4 py-2 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/85">
                Featured on Red Bull TV
              </span>
            </div>

            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-yellow-400">
              Red Bull TV / Eastern Cape / 2021
            </p>

            <h1 className="max-w-5xl text-5xl font-black uppercase italic leading-[0.88] tracking-tight sm:text-6xl md:text-8xl">
              Giving It Gears
              <br />
              Taking to the Skies
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-xl">
              Jason Goliath and Nick visit Patrick Davidson to explore his
              aircraft collection, experience the world of aerobatic flying and
              challenge him to a race.
            </p>

            <a
              href={redBullEpisodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-600 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-red-500"
            >
              <span className="text-base leading-none">▶</span>
              Watch on Red Bull TV
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4 md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Series
            </p>
            <p className="mt-2 text-xl font-bold">Giving It Gears</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Episode
            </p>
            <p className="mt-2 text-xl font-bold">Season 1, Episode 1</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Location
            </p>
            <p className="mt-2 text-xl font-bold">Eastern Cape</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Release
            </p>
            <p className="mt-2 text-xl font-bold">2021</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
              The Story
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] md:text-6xl">
              A Day in Patrick&apos;s World
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/70 md:text-lg">
            <p>
              In the opening episode of Red Bull&apos;s Giving It Gears, Jason
              Goliath and Nick travel to the Eastern Cape to meet Patrick
              Davidson and step inside the world of high-performance aviation.
            </p>

            <p>
              Patrick introduces them to his collection of aircraft and shares
              the skill, preparation and precision behind aerobatic flying.
              What begins as an introduction to aviation soon develops into a
              challenge involving speed, timing and a race against one of South
              Africa&apos;s leading aerobatic pilots.
            </p>

            <p>
              The episode combines humour, personality and aviation while
              giving viewers a closer look at Patrick, his aircraft and the
              environment in which he trains and performs.
            </p>
          </div>
        </div>
      </section>

      {/* WATCH THE EPISODE */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-[540px]">
              <Image
                src={`${basePath}/hero.jpg`}
                alt="Taking to the Skies on Red Bull TV"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/40" />

              <a
                href={redBullEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Watch Taking to the Skies on Red Bull TV"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-black/55 text-2xl text-white backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-red-600">
                  ▶
                </span>
              </a>
            </div>

            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
              <p className="text-xs uppercase tracking-[0.35em] text-red-400">
                Red Bull TV
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] md:text-6xl">
                Watch the
                <br />
                Full Episode
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-white/65">
                Watch Patrick, Jason and Nick in Taking to the Skies, the
                23-minute opening episode of Giving It Gears.
              </p>

              <a
                href={redBullEpisodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-red-500 px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-red-400 transition hover:bg-red-600 hover:text-white"
              >
                Watch on Red Bull TV
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BTS PHOTOS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="mb-7 px-2 md:px-0">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Gallery
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic md:text-6xl">
            Behind the Scenes
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {btsImages.map((image, index) => (
            <div
              key={image}
              className={`group relative overflow-hidden rounded-2xl bg-white/5 ${
                index === 1 || index === 4
                  ? "aspect-[16/10] md:col-span-2"
                  : "aspect-[4/5]"
              }`}
            >
              <Image
  src={`${basePath}/${image}`}
  alt={`Giving It Gears behind-the-scenes image ${index + 1}`}
  fill
  quality={75}
  sizes={
    index === 1 || index === 4
      ? "(max-width: 768px) 100vw, 50vw"
      : "(max-width: 768px) 100vw, 25vw"
  }
  className="object-cover transition duration-700 group-hover:scale-105"
/>

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
            </div>
          ))}
        </div>
      </section>

      {/* BTS VIDEOS */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-24">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Production
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic md:text-6xl">
            BTS Videos
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {btsVideos.map((video) => (
            <article
              key={video.src}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <div className="aspect-[9/16] bg-black">
              <video
  className="h-full w-full object-cover"
  controls
  playsInline
  preload="none"
  aria-label={video.title}
>
  <source src={video.src} type="video/mp4" />
  Your browser does not support the video element.
</video>
              </div>

              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                  {video.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROJECT DETAILS */}
      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                Production
              </p>

              <h2 className="mt-4 text-4xl font-black uppercase italic leading-[0.95] md:text-6xl">
                Project
                <br />
                Details
              </h2>
            </div>

            <dl className="grid gap-x-8 sm:grid-cols-2">
              {projectDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="border-b border-white/10 py-6 first:pt-0 sm:first:pt-0 sm:nth-[2]:pt-0"
                >
                  <dt className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                    {detail.label}
                  </dt>

                  <dd className="mt-2 text-lg font-bold text-white">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-6xl font-black leading-none text-yellow-400">
            “
          </p>

          <blockquote className="mt-4 text-3xl font-black uppercase italic leading-tight text-white md:text-5xl">
            Aviation is about far more than speed. It takes precision,
            preparation and complete commitment.
          </blockquote>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-white/45">
            Patrick Davidson
          </p>
        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="border-t border-white/10 pt-12">
          <p className="text-xs uppercase tracking-[0.35em] text-white/40">
            Explore More
          </p>

          <h2 className="mt-3 text-4xl font-black uppercase italic md:text-6xl">
            Related Projects
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Link
              href="/media/projects/abdo-feghali-2021-durban-drift"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                2021
              </p>

              <h3 className="mt-3 text-xl font-black uppercase italic">
                Abdo Feghali
                <br />
                Durban Drift
              </h3>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/45 transition group-hover:text-yellow-400">
                View Project →
              </p>
            </Link>

            <Link
              href="/media/projects/sundowns-red-bull-2023"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                2023
              </p>

              <h3 className="mt-3 text-xl font-black uppercase italic">
                Mamelodi Sundowns
                <br />
                Red Bull Taking Flight
              </h3>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/45 transition group-hover:text-yellow-400">
                View Project →
              </p>
            </Link>

            <Link
              href="/media/projects/can-grab-2025"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-yellow-400/50"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-yellow-400">
                2025
              </p>

              <h3 className="mt-3 text-xl font-black uppercase italic">
                Can Grab
                <br />
                Precision Stunt
              </h3>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.25em] text-white/45 transition group-hover:text-yellow-400">
                View Project →
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}