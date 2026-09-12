import Link from "next/link";
import type { NewsArticle } from "@/lib/news";

export default function NewsArticleList({ articles }: { articles: NewsArticle[] }) {
  return (
    <div className="grid gap-6">
      {articles.map((article) => {
        const external = article.href.startsWith("https://");

        return (
          <Link
            key={article.href}
            href={article.href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className="group min-w-0 border border-white/10 bg-white/[0.04] p-6 transition hover:border-[#62d6aa]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#62d6aa] md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#62d6aa]">
              {article.category}
            </p>

            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-white/35">
              {article.date}
            </p>

            <h2 className="mt-6 break-words text-3xl font-black uppercase italic leading-tight md:text-5xl">
              {article.title}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/60">
              {article.text}
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-[#62d6aa]">
              {external ? "Read on AIR RACE X ↗" : "Read Story →"}
              {external && <span className="sr-only"> (opens in a new tab)</span>}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
