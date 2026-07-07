import Image from "next/image";

const mediaSections = [
  {
    title: "Results",
    text: "Race results, championship standings and season summaries.",
    href: "/media/results",
  },
  {
    title: "Calendar",
    text: "Upcoming races, displays, appearances and events.",
    href: "/media/calendar",
  },
  {
    title: "Race Reports",
    text: "The story behind each race weekend, from preparation to result.",
    href: "/media/race-reports",
  },
  {
    title: "News & Blog",
    text: "Updates from the team, sponsors, aircraft and life around flying.",
    href: "/media/news",
  },
  {
    title: "Gallery",
    text: "Photos from airshows, racing, fans, aircraft and behind the scenes.",
    href: "/media/gallery",
  },
  {
    title: "Downloads",
    text: "Press images, biography, logos and useful media resources.",
    href: "/media/downloads",
  },
];

export default function MediaCentre() {
  return (
    <section id="media" className="bg-black text-white">
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/media/fans-selfie.jpg"
          alt="Patrick Davidson with fans"
          fill
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              Media Centre
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              Every Race.
              <br />
              Every Result.
              <br />
              Every Story.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
              Follow Patrick Davidson through race reports, results, upcoming
              events, media resources and the moments that happen beyond the
              flight line.
            </p>

            <a
              href="/media"
              className="mt-12 inline-flex items-center gap-6 border border-yellow-500/70 px-7 py-4 text-xs uppercase tracking-[0.35em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Open Media Centre <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}