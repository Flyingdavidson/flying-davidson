import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team 77 Merchandise",
  description:
    "Team 77 merchandise by Flying Davidson. Premium hoodies, T-shirts and accessories, coming soon.",
};

const collection = [
  {
    name: "Team 77 Hoodie",
    type: "Heavyweight teamwear",
    image: "/images/merch/concepts/team-77-minimal-teamwear-v3.png",
    alt: "Black Team 77 hoodie shown from the front and back",
    details: "Black / heavyweight cotton / embroidered chest detail",
  },
  {
    name: "Aircraft Graphic Tee",
    type: "Signature graphic",
    image: "/images/merch/concepts/team-77-bold-race-v3.png",
    alt: "Black and off-white Team 77 aircraft graphic T-shirts",
    details: "Black or off-white / heavyweight cotton / back print",
  },
  {
    name: "Technical Tee",
    type: "Limited artwork",
    image: "/images/merch/concepts/team-77-technical-aircraft-v3.png",
    alt: "Team 77 technical aircraft graphic T-shirt and hoodie",
    details: "Off-white / heavyweight cotton / technical line artwork",
  },
] as const;

export default function MerchPage() {
  return (
    <main id="main-content" className="overflow-hidden bg-[#050505] text-white">
      <section className="relative flex min-h-[92svh] items-end border-b border-white/10 px-6 pb-14 pt-32 md:px-12 md:pb-20 lg:px-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/images/merch/team-77-hero.png"
            alt="Team 77 supporters wearing Flying Davidson merchandise beside the aircraft"
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover object-[54%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.42em] text-red-500">
              Flying Davidson presents
            </p>
            <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl md:text-8xl lg:text-[9rem]">
              Team
              <br />
              <span className="text-white/35">77</span>
            </h1>
          </div>

          <div className="max-w-md lg:pb-3">
            <p className="text-lg leading-8 text-white/70 md:text-xl">
              Built around the team. Premium essentials shaped by precision,
              speed and life in the hangar.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-red-500" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/55">
                Coming soon
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-5 border-b border-white/10 pb-8 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-white/40">
                First collection
              </p>
              <h2 className="text-4xl font-black uppercase tracking-[-0.04em] md:text-6xl">
                In development
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-white/50">
              Hoodies, heavyweight tees and team accessories. Final garment
              details, sizing and availability will be announced shortly.
            </p>
          </div>

          <div className="grid gap-14 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-20">
            {collection.map((item, index) => (
              <article
                key={item.name}
                className={
                  index === 0
                    ? "group lg:col-span-12"
                    : "group lg:col-span-6"
                }
              >
                <div
                  className={`relative overflow-hidden bg-[#111] ${
                    index === 0 ? "aspect-[16/10] md:aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes={index === 0 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 border border-white/20 bg-black/55 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.32em] backdrop-blur-md md:left-7 md:top-7">
                    Concept {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.32em] text-red-500">
                      {item.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-black uppercase tracking-[-0.03em]">
                      {item.name}
                    </h3>
                  </div>
                  <p className="max-w-xs text-xs uppercase leading-6 tracking-[0.16em] text-white/40 sm:text-right">
                    {item.details}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white px-6 py-20 text-black md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.4em] text-black/45">
              Be first in line
            </p>
            <h2 className="max-w-4xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] sm:text-5xl md:text-7xl">
              Get the launch announcement.
            </h2>
          </div>
          <Link
            href="mailto:merch@flyingdavidson.com?subject=Team%2077%20merchandise"
            className="inline-flex min-h-14 items-center justify-center bg-black px-8 text-xs font-black uppercase tracking-[0.28em] text-white transition hover:bg-red-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Register interest
          </Link>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-xs uppercase tracking-[0.24em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>PD / Team 77 / Emotive</p>
          <Link href="/#contact" className="text-white/65 transition hover:text-white">
            Merchandise enquiries →
          </Link>
        </div>
      </section>
    </main>
  );
}
