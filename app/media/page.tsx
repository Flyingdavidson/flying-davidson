import Image from "next/image";
import Link from "next/link";

const mediaSections = [
  {
    title: "Results",
    tag: "Race Data",
    text: "Championship standings, race results and season summaries.",
    href: "/media/results",
  },

  {
    title: "Race Reports",
    tag: "Stories",
    text: "Full race weekend reports, team updates and behind-the-scenes insight.",
    href: "/media/race-reports",
  },
  {
    title: "News",
    tag: "Updates",
    text: "Sponsor news, aircraft updates, team announcements and general stories.",
    href: "/media/news",
  },
  {
    title: "Gallery",
    tag: "Photos",
    text: "Air Race X, aerobatics, fans, aircraft and behind-the-scenes images.",
    href: "/media/gallery",
  },
  {
    title: "Downloads",
    tag: "Press Kit",
    text: "Biography, high-resolution images, logos and media resources.",
    href: "/media/downloads",
  },
];

export default function MediaPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[75vh] overflow-hidden">
        <Image
          src="/images/media/fans-selfie.jpg"
          alt="Patrick Davidson with fans"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-[75vh] items-end px-8 py-20 md:px-16 lg:px-24">
          <div>
            <Link
              href="/#media"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
            >
              ← Back to Media
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              Patrick Davidson
            </p>

            <h1 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              Media
              <br />
              Centre.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/65">
              The home of race results, event dates, reports, stories, media
              resources and moments from Patrick Davidson’s world of flight.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {mediaSections.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group border border-white/10 bg-white/[0.03] p-8 transition duration-500 hover:-translate-y-2 hover:border-yellow-500/50 hover:bg-white/[0.06]"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-500/75">
                  {item.tag}
                </p>

                <h2 className="mt-6 text-3xl font-black uppercase tracking-tight">
                  {item.title}
                </h2>

                <p className="mt-5 text-base leading-7 text-white/60">
                  {item.text}
                </p>

                <p className="mt-10 text-xs uppercase tracking-[0.3em] text-white/40 transition group-hover:text-yellow-400">
                  Explore →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}