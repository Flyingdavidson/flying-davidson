import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import NewsArticleList from "@/components/media/NewsArticleList";
import { newsArticles } from "@/lib/news";
import { isPressPublished } from "@/lib/press/publication";
import { getPressContent } from "@/lib/press/storage";

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const visibleArticles = isPressPublished() ? [(await getPressContent()).news, ...newsArticles] : newsArticles;
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/news/news-hero.jpg"
          alt="Patrick Davidson"
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
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white transition"
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
              Race reports, sponsorship announcements, championship updates
              and behind-the-scenes stories from Patrick Davidson and Team 77.
            </p>

          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">

          <p className="mb-8 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
            Latest Stories
          </p>

          <NewsArticleList articles={visibleArticles} />
        </div>
      </section>

    </main>
  );
}
export const metadata: Metadata = {
  title: "Latest News",
  description:
    "Latest news from Patrick Davidson, Team 77, AIR RACE X, sponsors and the Flying Davidson hangar.",
  alternates: { canonical: "/media/news" },
};
