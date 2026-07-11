import Image from "next/image";

import Link from "next/link";

const projects = [

  {

    title: "Can Grab",

    subtitle: "Red Bull Precision Stunt",

    year: "2025",

    category: "Precision Stunt",

    location: "South Africa",

    description:

      "Patrick Davidson and motorcycle stunt rider Brian Capper attempt a high-speed Red Bull can grab with only centimetres separating aircraft and rider.",

    image: "/images/projects/can-grab-2025/official/hero.jpg",

    href: "/media/projects/can-grab-2025",

  },

  {

    title: "Mamelodi Sundowns",

    subtitle: "Red Bull Taking Flight",

    year: "2023",

    category: "Brand Campaign",

    location: "South Africa",

    description:

      "A high-energy Red Bull partnership launch combining elite football, aviation and Patrick Davidson’s precision flying.",

    image: "/images/projects/sundowns-red-bull-2023/hero.jpg",

    href: "/media/projects/sundowns-red-bull-2023",

  },

  {

    title: "Giving It Gears",

    subtitle: "Taking to the Skies",

    year: "2021",

    category: "Red Bull TV",

    location: "Eastern Cape, South Africa",

    description:

      "Jason Goliath and Nick visit Patrick Davidson to explore his aircraft collection, discover the world of aerobatic flying and challenge him to a race.",

    image: "/images/projects/giving-it-gears-2021/hero.jpg",

    href: "/media/projects/giving-it-gears-2021",

  },

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

const comingSoon = ["Rugby 7's", "VW Polo"];

export default function ProjectsPage() {

  return (

    <main className="min-h-screen bg-black text-white">

      {/* PAGE HEADER */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">

          <Link

            href="/#media"

            className="text-xs uppercase tracking-[0.35em] text-white/60 transition hover:text-white"

          >

            ← Back to Media Centre

          </Link>

          <div className="mt-10 max-w-4xl">

            <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">

              Flying Davidson

            </p>

            <h1 className="mt-4 text-5xl font-black uppercase italic leading-[0.9] tracking-tight md:text-7xl">

              Projects

            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/65 md:text-lg">

              Selected aviation, film, brand and motorsport projects featuring

              Patrick Davidson.

            </p>

          </div>

        </div>

      </section>

      {/* PROJECT CARDS */}

      <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">

        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (

            <Link

              key={project.href}

              href={project.href}

              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/[0.05]"

            >

              <div className="relative aspect-[16/10] overflow-hidden">

                <Image

                  src={project.image}

                  alt={`${project.title} ${project.subtitle}`}

                  fill

                  sizes="(max-width: 768px) 100vw, 50vw"

                  className="object-cover transition duration-700 group-hover:scale-105"

                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/80 backdrop-blur-sm">

                  {project.category}

                </div>

                <div className="absolute bottom-5 left-5 right-5">

                  <p className="text-xs uppercase tracking-[0.3em] text-yellow-400">

                    {project.year}

                  </p>

                  <h2 className="mt-2 text-3xl font-black uppercase italic leading-[0.95] md:text-4xl">

                    {project.title}

                    <br />

                    {project.subtitle}

                  </h2>

                </div>

              </div>

              <div className="p-6 md:p-7">

                <p className="text-xs uppercase tracking-[0.3em] text-white/40">

                  {project.location}

                </p>

                <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/65 md:text-base">

                  {project.description}

                </p>

                <div className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-yellow-400">

                  View Project

                  <span className="transition duration-300 group-hover:translate-x-1">

                    →

                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* COMING SOON */}

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">

        <div className="border-t border-white/10 pt-12">

          <p className="mb-8 text-xs uppercase tracking-[0.45em] text-yellow-500/80">

            Coming Soon

          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {comingSoon.map((item) => (

              <div

                key={item}

                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm uppercase tracking-[0.2em] text-white/45"

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