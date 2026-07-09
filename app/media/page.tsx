import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "Sponsor",
    date: "April 2026",
    title: "Emotive Backs World Champion Patrick Davidson",
    text: "Emotive becomes Team 77's principal partner as Patrick Davidson begins his defence of the 2026 AIR RACE X Championship.",
    href: "/media/news/emotive-backs-patrick-davidson",
  },
  {
    category: "AIR RACE X",
    date: "17 June 2026",
    title: "AIR RACE X Announces 2026 Championship Schedule",
    text: "AIR RACE X officially unveils the 2026 season, confirming four championship races and a new broadcast schedule.",
    href: "/media/news/air-race-x-2026-schedule",
  },
];

export default function NewsPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/news/news-hero.jpg"
          alt="Patrick Davidson Team 77 News"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-4xl">
            <Link
              href="/#media"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
            >
              ← Back to Media
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              Team 77 News
            </p>

            <h1 className="text-6xl font-black uppercase italic leading-[0.85] tracking-tight md:text-8xl">
              News.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
              Race reports, sponsorship announcements, championship updates and
              behind-the-scenes stories from Patrick Davidson and Team 77.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
            Latest Stories
          </p>

          <div className="grid gap-6">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group border border-white/10 bg-white/[0.04] p-8 transition hover:border-[#62d6aa]/60"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-[#62d6aa]">
                  {article.category}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/35">
                  {article.date}
                </p>

                <h2 className="mt-6 text-4xl font-black uppercase italic leading-tight md:text-5xl">
                  {article.title}
                </h2>

                <p className="mt-6 max-w-3xl text-base leading-7 text-white/60">
                  {article.text}
                </p>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#62d6aa]">
                  Read Story →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}