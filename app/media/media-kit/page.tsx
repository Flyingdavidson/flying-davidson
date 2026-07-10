import Image from "next/image";
import Link from "next/link";

const downloads = [
  
  {
    title: "Official Biography",
    description:
      "Read Patrick Davidson's official biography, career story and achievements online. A downloadable PDF version is also available.",
    format: "ONLINE",
    href: "/media/biography",
    download: false,
  },
  
  {
    title: "High Resolution Photography",
    description:
      "Editorial photography featuring AIR RACE X, aerobatics, portraits and Team 77 for approved media use.",
    format: "ZIP",
    href: "/downloads/patrick-davidson-photography.zip",
    download: true,
  },
];

const socialLinks = [
  {
    title: "Instagram",
    handle: "@flyingdavidson",
    href: "https://www.instagram.com/flying_davidson",
  },
  {
    title: "Facebook",
    handle: "Patrick Davidson",
    href: "https://www.facebook.com/flyingdavidson/",
  },
  {
    title: "YouTube",
    handle: "Flying Davidson",
    href: "https://www.youtube.com/@flyingdavidson",
  },
];

export default function MediaKitPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[70vh] overflow-hidden">
  <Image
    src="/images/media-kit/media-kit-hero.jpg"
    alt="Patrick Davidson with his Red Bull GameBird"
    fill
    priority
    sizes="100vw"
    className="object-cover object-[54%_center] md:object-center"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/5 to-black/70" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

  <div className="relative z-10 min-h-[70vh] px-6 py-10 md:px-16 md:py-12 lg:px-24">
  <div className="mx-auto flex min-h-[calc(70vh-5rem)] max-w-7xl flex-col">
      <div>
        <Link
          href="/#media"
          className="inline-block text-xs uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
        >
          ← Back to Media
        </Link>
      </div>

      <div className="mt-auto grid gap-10 md:grid-cols-2 md:items-end">
        <div />

        <div className="max-w-xl md:justify-self-end">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-400">
            Official Resources
          </p>

          <h1 className="text-5xl font-black uppercase italic leading-[0.86] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
            Media
            <br />
            Kit.
          </h1>

          <p className="mt-8 text-lg leading-8 text-white/85 md:text-xl md:leading-9">
          Official biography, approved photography and media contact information
          for journalists, sponsors and event organisers.
          </p>

         
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
              Downloads
            </p>

            <h2 className="mt-6 text-4xl font-black uppercase italic leading-tight md:text-6xl">
              Official Media Resources
            </h2>

            <p className="mt-6 text-lg leading-8 text-white/60">
              Download approved material for editorial, promotional and event
              use. Please contact the team before using assets for commercial
              campaigns or paid advertising.
            </p>
          </div>

          <div className="mt-12 grid gap-7 lg:grid-cols-2">
  {downloads.map((item) =>
    item.download ? (
      <a
        key={item.title}
        href={item.href}
        download
        className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/[0.05]"
      >
        <div className="absolute right-8 top-8 text-7xl font-black text-white/5 transition duration-500 group-hover:text-yellow-400/10">
          {item.format}
        </div>

        <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">
          Official Download
        </p>

        <h3 className="mt-8 max-w-md text-4xl font-black uppercase italic leading-tight">
          {item.title}
        </h3>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/60">
          {item.description}
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Format
            </p>

            <p className="mt-2 text-lg font-bold">{item.format}</p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400 text-2xl text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-black">
            ↓
          </div>
        </div>
      </a>
    ) : (
      <Link
        key={item.title}
        href={item.href}
        className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-10 transition duration-500 hover:-translate-y-2 hover:border-yellow-400 hover:bg-white/[0.05]"
      >
        <div className="absolute right-8 top-8 text-7xl font-black text-white/5 transition duration-500 group-hover:text-yellow-400/10">
          {item.format}
        </div>

        <p className="text-xs uppercase tracking-[0.45em] text-yellow-400">
          Read Online
        </p>

        <h3 className="mt-8 max-w-md text-4xl font-black uppercase italic leading-tight">
          {item.title}
        </h3>

        <p className="mt-8 max-w-xl text-base leading-8 text-white/60">
          {item.description}
        </p>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/35">
              Official Resource
            </p>

            <p className="mt-2 text-lg font-bold">{item.format}</p>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400 text-2xl text-yellow-400 transition duration-300 group-hover:bg-yellow-400 group-hover:text-black">
            →
          </div>
        </div>
      </Link>
    )
  )}
</div>
                 
        </div>
      </section>


      <section className="px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Official Channels
          </p>

          <h2 className="mt-6 text-4xl font-black uppercase italic md:text-6xl">
            Follow the Story
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
  {socialLinks.map((social) => (
    <a
      key={social.title}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative overflow-hidden border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-2 hover:border-yellow-400/70 hover:bg-white/[0.05]"
    >
      <div className="absolute right-6 top-6 text-5xl font-black text-white/5 transition group-hover:text-yellow-400/10">
        ↗
      </div>

      <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
        {social.title}
      </p>

      <h3 className="mt-5 text-3xl font-black uppercase">
        {social.handle}
      </h3>

      <p className="mt-5 text-sm leading-7 text-white/55">
        Follow Patrick Davidson for race reports, behind-the-scenes content,
        airshows and the latest updates from Team 77.
      </p>

      <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-xs uppercase tracking-[0.3em] text-white/35">
          Official Channel
        </span>

        <span className="text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 transition group-hover:translate-x-1">
          Visit →
        </span>
      </div>
    </a>
  ))}
</div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:p-16">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Media Enquiries
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
                Contact the Team
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
              For interviews, media requests, sponsorship opportunities, airshow bookings, commercial productions or additional press material, contact Patrick Davidson's management team.
              </p>

              <div className="mt-9 space-y-2 text-white/70">
                <p className="text-xl font-bold uppercase">Greg Ritz</p>
                <p>Management and Media Enquiries</p>

                <a
                  href="mailto:greg@flyingdavidson.com"
                  className="inline-block text-yellow-400 transition hover:text-yellow-300"
                >
                  greg@flyingdavidson.com
                </a>
              </div>
            </div>

            <a
              href="mailto:greg@flyingdavidson.com"
              className="inline-flex justify-center border border-yellow-400 bg-yellow-400 px-8 py-5 text-xs font-black uppercase tracking-[0.3em] text-black transition hover:bg-transparent hover:text-yellow-400"
            >
              Contact Greg
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}