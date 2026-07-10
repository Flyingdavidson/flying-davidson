import Image from "next/image";
import Link from "next/link";

const downloads = [
  {
    title: "Patrick Davidson Biography",
    description:
      "Official biography for event programmes, press articles and publications.",
    format: "PDF",
    href: "/downloads/patrick-davidson-biography.pdf",
  },
  {
    title: "Official Media Kit",
    description:
      "Patrick Davidson, Team 77, career highlights, aircraft and contact information.",
    format: "PDF",
    href: "/downloads/patrick-davidson-media-kit.pdf",
  },
  {
    title: "High-Resolution Photography",
    description:
      "Approved high-resolution photographs for editorial and promotional use.",
    format: "ZIP",
    href: "/downloads/patrick-davidson-photography.zip",
  },
  {
    title: "Patrick Davidson Logo Pack",
    description:
      "Official Flying Davidson and Patrick Davidson logos in print and digital formats.",
    format: "ZIP",
    href: "/downloads/patrick-davidson-logos.zip",
  },
  {
    title: "Sponsor Logo Pack",
    description:
      "Approved logos for Patrick Davidson and Team 77's current partners.",
    format: "ZIP",
    href: "/downloads/team-77-sponsor-logos.zip",
  },
  {
    title: "Aircraft Information",
    description:
      "Press-ready information about the GameBird GB1 and Edge 540 V3.",
    format: "PDF",
    href: "/downloads/patrick-davidson-aircraft-information.pdf",
  },
  {
    title: "Display Requirements",
    description:
      "Operational information for airshow organisers, event teams and aviation authorities.",
    format: "PDF",
    href: "/downloads/patrick-davidson-display-requirements.pdf",
  },
];

const aircraft = [
  {
    name: "GameBird GB1",
    label: "Red Bull Display Aircraft",
    image: "/images/hangar/redbull-one-wing1.jpg",
    href: "/hangar/gamebird",
    description:
      "Patrick's Red Bull GameBird is used for high-energy aerobatic displays and precision flying. Built from carbon fibre and designed for unlimited aerobatics, it delivers the performance, control and precision required for displays at airshows around the world.",
    facts: [
      ["Pilot", "Patrick Davidson"],
      ["Call Sign", "Red Bull One"],
      ["Role", "Aerobatic Display"],
      ["Construction", "Carbon Fibre"],
    ],
  },
  {
    name: "Edge 540 V3",
    label: "AIR RACE X Machine",
    image: "/images/edge/edge01.jpg",
    href: "/hangar/edge-540",
    description:
      "Built for speed, precision and repeatability, Patrick's Edge 540 V3 is the machine behind Team 77's AIR RACE X campaign. Its speed, control and extreme manoeuvrability provide the precision needed to race against the clock at low level and high G.",
    facts: [
      ["Pilot", "Patrick Davidson"],
      ["Team", "Team 77"],
      ["Competition", "AIR RACE X"],
      ["Role", "Air Racing"],
    ],
  },
];

const socialLinks = [
  {
    title: "Instagram",
    handle: "@flyingdavidson",
    href: "https://www.instagram.com/flyingdavidson",
  },
  {
    title: "Facebook",
    handle: "Patrick Davidson",
    href: "https://www.facebook.com",
  },
  {
    title: "YouTube",
    handle: "Flying Davidson",
    href: "https://www.youtube.com",
  },
];

export default function MediaKitPage() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="/images/media-kit/media-kit-hero.jpg"
          alt="Patrick Davidson with his Red Bull GameBird"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] md:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-[85vh] items-end px-6 py-20 md:px-16 md:py-24 lg:px-24">
          <div className="max-w-5xl">
            <Link
              href="/#media"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
            >
              ← Back to Media
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-400">
              Official Resources
            </p>

            <h1 className="text-5xl font-black uppercase italic leading-[0.86] tracking-tight sm:text-6xl md:text-8xl lg:text-9xl">
              Media
              <br />
              Kit.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 md:text-xl md:leading-9">
              Approved biographies, photography, logos, aircraft information
              and media resources for journalists, sponsors and event
              organisers.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 lg:px-24">
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

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {downloads.map((item) => (
              <a
                key={item.title}
                href={item.href}
                download
                className="group flex min-h-[230px] flex-col justify-between border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/70 hover:bg-white/[0.06] md:p-8"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                      Download
                    </p>

                    <span className="border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                      {item.format}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-black uppercase leading-tight md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">
                    {item.description}
                  </p>
                </div>

                <p className="mt-8 text-xs uppercase tracking-[0.3em] text-yellow-400">
                  Download file ↓
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/media-kit/patrick-davidson-portrait.jpg"
              alt="Patrick Davidson portrait"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
              Biography
            </p>

            <h2 className="mt-6 text-4xl font-black uppercase italic leading-tight md:text-6xl">
              Patrick Davidson
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/70">
              Patrick Davidson is a South African aerobatic and air race pilot
              known for precision, speed and high-performance aviation. His
              flying career spans competitive aerobatics, air racing, airshow
              displays, formation flying and historic aircraft.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/60">
              As the pilot of Team 77, Patrick competes internationally in AIR
              RACE X and represents partners across aviation, motorsport and
              performance industries.
            </p>

            <a
              href="/downloads/patrick-davidson-biography.pdf"
              download
              className="mt-10 inline-flex border border-yellow-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
            >
              Download Biography
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Aircraft
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-black uppercase italic leading-tight md:text-6xl">
            Display Precision.
            <br />
            Race-Bred Performance.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">
            Patrick's two principal aircraft each serve a distinct purpose:
            the GameBird GB1 for aerobatic displays and the Edge 540 V3 for
            Team 77's AIR RACE X campaign.
          </p>

          <div className="mt-14 grid gap-7 lg:grid-cols-2">
            {aircraft.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden border border-white/10 bg-white/[0.03]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                      {item.label}
                    </p>
                    <h3 className="mt-3 text-4xl font-black uppercase italic md:text-5xl">
                      {item.name}
                    </h3>
                  </div>
                </div>

                <div className="p-7 md:p-8">
                  <p className="text-base leading-8 text-white/60">
                    {item.description}
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10">
                    {item.facts.map(([label, value]) => (
                      <div key={label} className="bg-black p-5">
                        <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                          {label}
                        </p>
                        <p className="mt-2 text-base font-bold">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.href}
                    className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 transition hover:text-yellow-300"
                  >
                    View Full Aircraft Page →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
                Event Organisers
              </p>

              <h2 className="mt-6 text-4xl font-black uppercase italic leading-tight md:text-6xl">
                Display Information
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/60">
                Information for airshows, aviation events, private displays,
                corporate activations and media productions.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
              {[
                "Display sequence",
                "Display duration",
                "Smoke availability",
                "Fuel requirements",
                "Ground crew requirements",
                "Aircraft parking",
                "Pilot briefing",
                "Insurance documents",
                "Risk assessments",
                "Media coordination",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black p-5 text-sm uppercase tracking-[0.2em] text-white/55"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <a
            href="/downloads/patrick-davidson-display-requirements.pdf"
            download
            className="mt-12 inline-flex border border-yellow-400 px-7 py-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            Download Display Requirements
          </a>
        </div>
      </section>

      <section className="px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Official Channels
          </p>

          <h2 className="mt-6 text-4xl font-black uppercase italic md:text-6xl">
            Follow the Story
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {socialLinks.map((social) => (
              <a
                key={social.title}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="group border border-white/10 bg-white/[0.03] p-7 transition hover:border-yellow-400/70"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400">
                  {social.title}
                </p>

                <p className="mt-4 text-xl font-black uppercase">
                  {social.handle}
                </p>

                <p className="mt-7 text-xs uppercase tracking-[0.3em] text-white/35 transition group-hover:text-yellow-400">
                  Visit Channel →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl border border-white/10 bg-white/[0.03] p-8 md:p-12 lg:p-16">
          <p className="text-xs uppercase tracking-[0.55em] text-yellow-400">
            Media, Sponsorship & Events
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-4xl font-black uppercase italic leading-tight md:text-6xl">
                Contact the Team
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                For interviews, appearances, sponsorships, airshow bookings,
                commercial projects or additional media assets, contact Patrick
                Davidson's management team.
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
