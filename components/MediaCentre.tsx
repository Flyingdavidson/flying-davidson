import Image from "next/image";

const mediaSections = [
  {
    title: "Race Reports",
    text: "The story behind each race weekend, from preparation to result.",
    href: "/media/race-reports",
  },
  {
    title: "Results",
    text: "Race results, championship standings and season summaries.",
    href: "/media/results",
  },
  {
    title: "News",
    text: "Updates from the team, sponsors, aircraft and life around flying.",
    href: "/media/news",
  },
  {
    title: "Projects",
    text: "From beginning to end. The stories behind the flying.",
    href: "/media/projects",
  },
];

export default function MediaCentre() {
  return (
    <section id="media" className="bg-black text-white">
      <div className="relative min-h-screen overflow-hidden">
        {/* Mobile */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/images/media/fans-selfie-mobile.jpg"
            alt="Patrick Davidson with fans"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center]"
          />
        </div>

        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/media/fans-selfie.jpg"
            alt="Patrick Davidson with fans"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-6 py-20 md:px-16 lg:px-24">
          <div className="max-w-7xl">
            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              Media Centre
            </p>

            <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-8xl">
              Every Race.
              <br />
              Every Result.
              <br />
              Every Story.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/70 md:max-w-2xl md:text-xl md:leading-9">
              Follow Patrick Davidson through race reports, results, upcoming
              events, media resources and the moments that happen beyond the
              flight line.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {mediaSections.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group border border-white/10 bg-black/35 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-yellow-500/70 hover:bg-black/55"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                    Media
                  </p>

                  <h3 className="mt-3 text-2xl font-black uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {item.text}
                  </p>

                  <div className="mt-6 text-xs uppercase tracking-[0.3em] text-yellow-400">
                    Explore →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}