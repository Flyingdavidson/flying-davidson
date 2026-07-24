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
    name: "GameBird GB1",
    model: "RedBull One",
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
    name: "Aero L-39 Albatros",
    model: "Military Jet Trainer",
    role: "Jet Display",
    image: "/images/hangar/l39/l39-hero.jpg",
    registration: "ZU-DEW",
    speed: "750 km/h",
    power: "3,790 lbf",
    type: "Jet Aircraft",
    ability: "Jet Performance",
    gallery: "/hangar/l39",
    story:
      "Military heritage, elegant lines and unmistakable jet performance. The Aero L-39 Albatros brings a completely different energy to the Flying Davidson fleet.",
  },
  {
    name: "North American Harvard",
    model: "Historic Advanced Trainer",
    role: "Warbird Display",
    image: "/images/hangar/zu-agk/hero.jpg",
    registration: "ZU-AGK",
    speed: "335 km/h",
    power: "600 hp",
    type: "Historic Trainer",
    ability: "Radial-Engine Heritage",
    gallery: "/hangar/zu-agk",
    story:
      "A defining military trainer with an unmistakable radial-engine note. ZU-AGK carries former South African Air Force serial 7544 and generations of training heritage.",
  },
  {
    name: "Hawker Sea Fury",
    model: "Historic Warbird",
    role: "Airshow Display",
    image: "/images/hangar/seafury1.jpg",
    registration: "NX425F",
    speed: "740 km/h",
    power: "3,050 hp",
    type: "Warbird",
    ability: "Historic Display Flying",
    gallery: "/hangar/sea-fury",
    story:
      "One of the last and fastest piston-engined fighter aircraft ever built. The Hawker Sea Fury combines incredible power with graceful handling and remains one of the stars of Patrick Davidson's display fleet.",
  },
  {
    name: "Beechcraft Bonanza A36",
    model: "High-Performance Touring Aircraft",
    role: "Cross-Country Touring",
    image: "/images/hangar/bonanza/hero.jpg",
    registration: "ZS-SVJ",
    speed: "326 km/h",
    power: "300 hp",
    type: "Touring Aircraft",
    ability: "Range & Utility",
    gallery: "/hangar/bonanza",
    story:
      "Comfortable, capable and built for travel. ZS-SVJ gives the Flying Davidson fleet dependable cross-country performance and the flexibility to move people and equipment efficiently.",
  },
];

const groundSupport = [
  {
    name: "Clark CTA 50",
    model: "Aircraft Tow Tractor",
    role: "Ground Operations",
    image: "/images/hangar/clark-tug/hero.jpg",
    type: "Ground Support",
    ability: "Aircraft Towing",
    gallery: "/hangar/clark-tug",
    story:
      "The workhorse of the Flying Davidson hangar. Used every day to safely position aircraft before and after flight.",
  },
  {
    name: "AC TrackTech T1X2",
    model: "Remote Aircraft Tug",
    role: "Precision Ground Handling",
    image: "/images/hangar/ac-tracktech-t1x2/hero.jpg",
    type: "Ground Support",
    ability: "Remote Aircraft Positioning",
    gallery: "/hangar/ac-tracktech-t1x2",
    story:
      "Compact electric ground support with an adjustable wheel cradle, tracked drive and remote control for precise aircraft positioning inside the hangar.",
  },
];

export default function HangarPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-24 text-white md:px-16 lg:px-24">
      <Link
        href="/#hangar"
        className="text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
      >
        ← Back to Hangar
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

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {planes.map((plane) => (
            <Link
              key={plane.name}
              href={plane.gallery}
              className="group block overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-yellow-500/50"
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={plane.image}
                  alt={plane.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute left-4 top-4 z-10 border border-yellow-500/60 bg-black/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
                  {plane.type}
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
                    {plane.model}
                  </p>

                  <h2 className="mt-1 text-xl font-black uppercase md:text-2xl">
                    {plane.name}
                  </h2>
                </div>
              </div>

              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  {plane.role}
                </p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  {plane.story}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Stat label="Registration" value={plane.registration} />
                  <Stat label="Speed" value={plane.speed} />
                  <Stat label="Power" value={plane.power} />
                  <Stat label="Special Ability" value={plane.ability} />
                </div>

                <div className="mt-5">
                  <span className="inline-block border border-yellow-500/60 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-yellow-400 transition group-hover:bg-yellow-500 group-hover:text-black">
                    Gallery →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-28 border-t border-white/10 pt-20">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-500/80">
            Ground Support
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">
            The Equipment.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-white/65">
            The machines used behind the scenes to keep the Flying Davidson
            fleet moving safely and efficiently.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {groundSupport.map((equipment) => (
              <Link
                key={equipment.name}
                href={equipment.gallery}
                className="group block overflow-hidden border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-1 hover:border-yellow-500/50"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 z-10 border border-yellow-500/60 bg-black/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400">
                    {equipment.type}
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-[10px] uppercase tracking-[0.35em] text-yellow-400">
                      {equipment.model}
                    </p>

                    <h3 className="mt-1 text-xl font-black uppercase md:text-2xl">
                      {equipment.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                    {equipment.role}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-white/65">
                    {equipment.story}
                  </p>

                  <div className="mt-5">
                    <Stat
                      label="Special Ability"
                      value={equipment.ability}
                    />
                  </div>

                  <div className="mt-5">
                    <span className="inline-block border border-yellow-500/60 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-yellow-400 transition group-hover:bg-yellow-500 group-hover:text-black">
                      Explore →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/10 bg-black/35 p-3">
      <p className="text-[9px] uppercase tracking-[0.28em] text-white/35">
        {label}
      </p>

      <p className="mt-1 text-sm font-black">{value}</p>
    </div>
  );
}
