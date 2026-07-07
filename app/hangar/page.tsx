import Image from "next/image";
import Link from "next/link";

const planes = [
  {
    name: "Red Bull One",
    model: "GameBird GB1",
    role: "Unlimited Aerobatics",
    image: "/images/hangar/redbull-one-wing.jpg",
    speed: "426 km/h",
    power: "315 hp",
    ability: "Precision Display",
    registration: "N71PD",
  },
  {
    name: "Edge 540 V3",
    model: "Air Race X Machine",
    role: "Championship Racing",
    image: "/images/hangar/edge-540.jpg",
    speed: "220+ mph",
    power: "400+ hp",
    ability: "Pure Speed",
    registration: "N540HA",
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
          Inside
          <br />
          The Hangar.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">
          A collection of aircraft with different personalities, different
          purposes and one thing in common — they all demand precision.
        </p>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          {planes.map((plane) => (
            <article
              key={plane.name}
              className="group overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50"
            >
              <div className="relative h-[360px] overflow-hidden">
                <Image
                  src={plane.image}
                  alt={plane.name}
                  fill
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                    {plane.model}
                  </p>
                  <h2 className="mt-2 text-4xl font-black uppercase">
                    {plane.name}
                  </h2>
                </div>
              </div>

              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.3em] text-white/45">
                  {plane.role}
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <Stat label="Speed" value={plane.speed} />
                  <Stat label="Power" value={plane.power} />
                  <Stat label="Special Ability" value={plane.ability} />
                  <Stat label="Registration" value={plane.registration} />
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
    <div className="border border-white/10 bg-black/30 p-4">
      <p className="text-[10px] uppercase tracking-[0.28em] text-white/35">
        {label}
      </p>
      <p className="mt-2 text-xl font-black">{value}</p>
    </div>
  );
}