import Image from "next/image";
import Link from "next/link";

const planes = [
  {
    name: "Edge 540 V3",
    model: "Air Race X Machine",
    role: "Championship Racing",
    image: "/images/hangar/edge-540.jpg",
    registration: "N540HA",
    speed: "426 km/h",
    power: "400+ hp",
    type: "Race Aircraft",
    ability: "Precision Speed",
    gallery: "/hangar/edge-540",
    story:
      "Patrick’s AIR RACE X machine, built around speed, precision and repeatability. Every setup decision, every line and every fraction of a second matters.",
  },
  {
    name: "Red Bull One",
    model: "GameBird GB1",
    role: "Unlimited Aerobatics",
    image: "/images/hangar/redbull-one-wing1.jpg",
    registration: "N71PD",
    speed: "426 km/h",
    power: "315 hp",
    type: "Display Aircraft",
    ability: "Unlimited Aerobatics",
    gallery: "/hangar/gamebird",
    story:
      "Patrick’s Red Bull GameBird, used for high-energy aerobatic displays and precision flying that turns every performance into a memory.",
  },
  {
    name: "Hawker Sea Fury",
    model: "Historic Warbird",
    role: "Airshow Display",
    image: "/images/hangar/seafury1.jpg",
    registration: "ZS-TFR",
    speed: "740 km/h",
    power: "2,480 hp",
    type: "Warbird",
    ability: "Historic Display Flying",
    gallery: "/hangar/sea-fury",
    story:
      "One of the last and fastest piston-engined fighter aircraft ever built. The Hawker Sea Fury combines incredible power with graceful handling and remains one of the stars of Patrick Davidson's display fleet.",
  },
];

export default function HangarPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white md:px-16 lg:px-24">
      <Link
        href="/"
        className="text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
      >
        ← Back Home
      </Link>

      <section className="mx-auto mt-20 max-w-7xl">
        <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
          Patrick Davidson
        </p>

        <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
          The
          <br />
          Fleet.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">
          A collection of aircraft with different personalities, different
          purposes and one thing in common — they all demand precision.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {planes.map((plane) => (
            <article
              key={plane.name}
              className="group overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={plane.image}
                  alt={plane.name}
                  fill
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-6 top-6 border border-yellow-500/60 bg-black/70 px-4 py-2 text-xs font-black uppercase tracking-[0.3em] text-yellow-400">
                  {plane.type}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                    {plane.model}
                  </p>
                  <h2 className="mt-2 text-4xl font-black uppercase md:text-5xl">
                    {plane.name}
                  </h2>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                  {plane.role}
                </p>

                <p className="mt-5 text-base leading-7 text-white/65">
                  {plane.story}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Stat label="Registration" value={plane.registration} />
                  <Stat label="Speed" value={plane.speed} />
                  <Stat label="Power" value={plane.power} />
                  <Stat label="Special Ability" value={plane.ability} />
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href={plane.gallery}
                    className="border border-yellow-500/60 px-5 py-3 text-xs uppercase tracking-[0.25em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
                  >
                    Gallery →
                  </Link>

                  <button className="border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.25em] text-white/60 transition hover:border-white/50 hover:text-white">
                    Videos →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-black/35 p-4">
      <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
        {label}
      </p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}