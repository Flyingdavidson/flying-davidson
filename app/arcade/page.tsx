import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team 77 Arcade",
  description:
    "Play Flying Davidson's aviation games: race through pylons or identify Patrick Davidson's aircraft from their cockpits.",
  alternates: { canonical: "/arcade" },
};

const games = [
  {
    title: "Pylon Challenge",
    eyebrow: "Reaction",
    description:
      "Hold to climb, release to descend and thread the Team 77 Edge 540 through as many gates as you can.",
    href: "/arcade/pylon-challenge",
    image: "/images/hangar/edge-540.jpg",
    imageAlt: "Team 77 Edge 540 in its hangar",
    stats: ["One-touch controls", "Global leaderboard"],
    accent: "#62ff00",
    cta: "Fly the course",
  },
  {
    title: "Cockpit Challenge",
    eyebrow: "Aircraft knowledge",
    description:
      "Match seven real cockpit photographs to the correct aircraft sticker. Accuracy wins; speed breaks the tie.",
    href: "/arcade/cockpit-challenge",
    image: "/images/arcade/cockpit-challenge/cockpits/n71pd.jpg",
    imageAlt: "An unidentified aircraft cockpit",
    stats: ["7 cockpits", "3 choices each"],
    accent: "#d7b46a",
    cta: "Identify the fleet",
  },
] as const;

export default function ArcadePage() {
  return (
    <main className="min-h-screen bg-black px-4 pb-20 pt-32 text-white sm:px-6 md:px-10 md:pb-28 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-black uppercase tracking-[0.38em] text-[#d7b46a]">
            Flying Davidson
          </p>
          <h1 className="mt-5 text-5xl font-black uppercase leading-[0.88] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Team 77
            <span className="block text-white/35">Arcade</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/55 sm:text-lg">
            Test your flying reactions or your aircraft knowledge. Every game
            has its own leaderboard and a fresh chance to take the top spot.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-2">
          {games.map((game, index) => (
            <Link
              key={game.title}
              href={game.href}
              className="group relative min-h-[520px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080808] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src={game.image}
                alt={game.imageAlt}
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.035]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
              <div
                className="absolute inset-x-0 top-0 h-px opacity-80"
                style={{ backgroundColor: game.accent }}
              />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.32em]"
                    style={{ color: game.accent }}
                  >
                    {game.eyebrow}
                  </p>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-white/35">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl">
                  {game.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                  {game.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {game.stats.map((stat) => (
                    <span
                      key={stat}
                      className="rounded-full border border-white/15 bg-black/35 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 backdrop-blur-sm"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-3 text-sm font-black uppercase tracking-[0.2em]">
                  <span>{game.cta}</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-2"
                    style={{ color: game.accent }}
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
