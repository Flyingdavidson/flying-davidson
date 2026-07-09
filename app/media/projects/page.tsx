import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Abdo Feghali",
    subtitle: "2021 Durban Drift",
    year: "2021",
    category: "Film Production",
    location: "Durban, South Africa",
    description:
      "A cinematic aviation and motorsport project featuring precision flying, drifting and behind-the-scenes production moments.",
    image: "/images/projects/abdo-feghali-2021/hero.jpg",
    href: "/media/projects/abdo-feghali-2021-durban-drift",
  },
];

const comingSoon = [
  "AIR RACE X 2025 World Championship",
  "AIR RACE X 2026 Season",
  "Emotive Campaign",
  "Sea Fury Display Tour",
  "Weekend Flying",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Link
          href="/#media"
          className="absolute left-8 top-10 z-20 w-fit text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-white md:left-16 lg:left-24"
        >
          ← Back to Media Centre
        </Link>

        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            className="group relative block min-h-screen"
          >
            <Image
              src={project.image}
              alt={`${project.title} ${project.subtitle}`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[38%_50%] transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-l from-black/95 via-black/65 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

            <div className="relative z-10 flex min-h-screen flex-col px-8 py-10 md:px-16 lg:px-24">
              <div className="ml-auto mt-24 max-w-4xl text-right md:mt-28 lg:mt-32">
                <p className="mb-8 text-xs uppercase tracking-[0.55em] text-yellow-400">
                  {project.category} / {project.year}
                </p>

                <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
                  {project.title}
                  <br />
                  {project.subtitle}
                </h1>

                <div className="mt-7 ml-auto h-px w-52 bg-yellow-400" />

                <p className="mt-7 text-sm uppercase tracking-[0.35em] text-white/65">
                  {project.location}
                </p>

                <p className="ml-auto mt-10 max-w-xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">
                  {project.description}
                </p>

                <div className="mt-12 inline-flex items-center gap-5 rounded-full border border-yellow-400 px-8 py-4 text-xs uppercase tracking-[0.35em] text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-black">
                  Explore Project
                  <span>→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-12">
          <p className="mb-8 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
            Coming Soon
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {comingSoon.map((item) => (
              <div
                key={item}
                className="border border-white/10 bg-white/[0.03] p-6 text-sm uppercase tracking-[0.25em] text-white/50"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}