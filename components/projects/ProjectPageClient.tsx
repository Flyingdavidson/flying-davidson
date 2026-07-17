"use client";

import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/media/Gallery";
import VideoGallery from "@/components/media/VideoGallery";
import type { ProjectData } from "@/app/types/project";

export default function ProjectPageClient({ project }: { project: ProjectData }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-[72vh] overflow-hidden md:min-h-screen">
      {project.heroVideo ? (
  <video
    autoPlay
    muted
    loop
    playsInline
    controls={false}
    disablePictureInPicture
    preload="auto"
    poster={project.heroVideoPoster ?? project.hero}
    aria-label={project.heroAlt}
    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
    style={{ objectPosition: project.heroPosition ?? "center" }}
    onCanPlay={(event) => {
      event.currentTarget.muted = true;
      void event.currentTarget.play();
    }}
  >
    <source src={project.heroVideo} type="video/mp4" />
  </video>
) : (
  <Image
    src={project.hero}
    alt={project.heroAlt}
    fill
    priority
    sizes="100vw"
    className="object-cover"
    style={{ objectPosition: project.heroPosition ?? "center" }}
  />
)}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/5" />
        <div className="relative z-10 flex min-h-[72vh] items-end md:min-h-screen">
          <div className="mx-auto w-full max-w-7xl px-6 pb-14 md:px-10 md:pb-20">
            <Link href="/media/projects" className="mb-8 inline-block text-xs uppercase tracking-[0.3em] text-white/60 transition hover:text-white">← Back to Projects</Link>
            <p className="mb-4 text-xs uppercase tracking-[0.4em] text-yellow-400">{project.category} / {project.context}</p>
            <h1 className="max-w-6xl whitespace-pre-line text-5xl font-black uppercase italic leading-[0.85] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">{project.title}</h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-xl md:leading-9">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">{project.introEyebrow ?? "The Project"}</p>
              <h2 className="mt-5 whitespace-pre-line text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">{project.introTitle}</h2>
            </div>
            <p className="text-lg leading-9 text-white/70">{project.intro}</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {project.facts.map((fact) => <Fact key={fact.label} label={fact.label} value={fact.value} />)}
          </div>
        </div>
      </section>

      {project.youtube && (
        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">Watch the Project</p>
          <h2 className="mt-4 text-4xl font-black uppercase italic md:text-6xl">{project.youtube.title}</h2>
          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">
            <div className="relative aspect-video"><iframe className="absolute inset-0 h-full w-full" src={project.youtube.embedUrl} title={project.youtube.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
          </div>
        </section>
      )}
{project.tiktok && (
  <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
    <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
      Watch the Mission
    </p>

    <h2 className="mt-4 text-4xl font-black uppercase italic md:text-6xl">
      {project.tiktok.title}
    </h2>

    <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex w-full max-w-[605px] justify-center overflow-hidden rounded-2xl bg-white">
        <blockquote
          className="tiktok-embed"
          cite={project.tiktok.url}
          data-video-id={project.tiktok.videoId}
          style={{
            width: "100%",
            maxWidth: "605px",
            minWidth: "325px",
            margin: 0,
          }}
        >
          <section>
            <a
              href={`https://www.tiktok.com/@${
                project.tiktok.username ?? "redbullza"
              }?refer=embed`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @{project.tiktok.username ?? "redbullza"}
            </a>

            {project.tiktok.caption && (
              <> {project.tiktok.caption}</>
            )}
          </section>
        </blockquote>
      </div>
    </div>

    <Script
      id={`tiktok-${project.tiktok.videoId}`}
      src="https://www.tiktok.com/embed.js"
      strategy="afterInteractive"
    />
  </section>
)}
      {!!project.videos?.length && <VideoGallery title={project.videoTitle ?? "Project Videos"} subtitle={project.videoSubtitle ?? project.name} videos={project.videos} />}

      {(() => {
  const links = project.featureLinks
    ? project.featureLinks
    : project.featureLink
      ? [project.featureLink]
      : [];

  if (links.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <div className="grid gap-6">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-yellow-400/50 hover:bg-white/[0.06] md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/35">
                {link.eyebrow ?? "Official Feature"}
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase italic md:text-5xl">
                {link.label}
              </h2>
            </div>

            <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition group-hover:bg-yellow-400">
              {link.buttonLabel ?? "Open Story"} →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
})()}

      {project.galleries?.map((gallery) => <Gallery key={`${gallery.title}-${gallery.subtitle ?? ""}`} title={gallery.title} subtitle={gallery.subtitle} images={gallery.images} />)}

      <section className="border-t border-white/10">
        <Link href="/media/projects" className="group mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 transition hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between md:px-10">
          <div><p className="text-xs uppercase tracking-[0.4em] text-white/35">Continue Exploring</p><h2 className="mt-3 text-4xl font-black uppercase italic md:text-5xl">View All Projects</h2></div>
          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-black transition group-hover:bg-yellow-400">Media Projects <span aria-hidden="true">→</span></div>
        </Link>
      </section>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:border-yellow-400/40 hover:bg-white/[0.05]"><p className="text-[11px] uppercase tracking-[0.35em] text-white/40">{label}</p><p className="mt-4 text-2xl font-black md:text-3xl">{value}</p></div>;
}
