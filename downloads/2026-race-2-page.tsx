import Image from "next/image";
import Link from "next/link";

const gallery = [
  {
    src: "/images/race-reports/2026-race-2/race2-jarrod-earlymorning.jpg",
    title: "Jarrod Steps Up",
    description:
      "Jarrod stepped into the engineering role for Race 2, taking care of fuel management and pre- and post-flight checks.",
  },
  {
    src: "/images/race-reports/2026-race-2/real-work-early-morning.jpg",
    title: "Early Morning Work",
    description:
      "The team preparing the aircraft before the first flights of the day.",
  },
  {
    src: "/images/race-reports/2026-race-2/another-track-change.jpg",
    title: "Another Track Change",
    description:
      "Changing the track direction meant rebuilding the course and waiting for new GPS coordinates from Japan.",
  },
  {
    src: "/images/race-reports/2026-race-2/track-change-again.jpg",
    title: "Rebuilding The Course",
    description:
      "Every marker had to be repositioned before Patrick could begin learning the new racing line.",
  },
  {
    src: "/images/race-reports/2026-race-2/race2-track-description.jpg",
    title: "Track Discussion",
    description:
      "Reviewing the revised course and discussing visual references before heading back into the air.",
  },
  {
    src: "/images/race-reports/2026-race-2/neighbours-militarybase.jpg",
    title: "Military Delays",
    description:
      "Military parade flights from the nearby base interrupted flying several times each day.",
  },
  {
    src: "/images/race-reports/2026-race-2/pylon-lowturn-obstacle.jpg",
    title: "Low Turn Obstacle",
    description:
      "One of the trickiest parts of the course, where precision and confidence were everything.",
  },
  {
    src: "/images/race-reports/2026-race-2/pat-interview1.jpg",
    title: "Between Runs",
    description:
      "Between flying sessions Patrick completed interviews while the team kept preparing the aircraft.",
  },
  {
    src: "/images/race-reports/2026-race-2/pat-interview2.jpg",
    title: "Race Weekend Media",
    description:
      "Race 2 included the usual mix of flying, analysis, waiting, interviews and more flying.",
  },
  {
    src: "/images/race-reports/2026-race-2/pat-interview3.jpg",
    title: "Explaining The Weekend",
    description:
      "Patrick explaining the pressure, the changes and the work needed to stay in the championship fight.",
  },
  {
    src: "/images/race-reports/2026-race-2/sunset-track-pylon.jpg",
    title: "Golden Hour On Track",
    description:
      "As the sun set, another day of testing came to an end — but the work never stopped.",
  },
  {
    src: "/images/race-reports/2026-race-2/sunset-vibes.jpg",
    title: "Sunset Vibes",
    description:
      "Race weekends are long, intense and exhausting, but moments like this make them memorable.",
  },
  {
    src: "/images/race-reports/2026-race-2/lets-do-anotherone.jpg",
    title: "Let's Do Another One",
    description:
      "After more than eighty runs this season, the attitude remained exactly the same: let's do another one.",
  },
  {
    src: "/images/race-reports/2026-race-2/last-flight-done.jpg",
    title: "Last Flight Done",
    description:
      "The final flight of Race 2 complete. Team 77 had secured second place and valuable championship points.",
  },
  {
    src: "/images/race-reports/2026-race-2/favourite-wine-race2.jpg",
    title: "Favourite Wine",
    description:
      "A small reward after a long race weekend and a hard-fought turnaround for Team 77.",
  },
];

const paragraphs = [
  "Going into Race 2 of the 2026 Air Race X Championship felt very different to Race 1.",
  "We arrived at the opening round as the defending champions, full of confidence and excitement. Four days later, after finishing fourth, we travelled to Race 2 with a very different feeling—we could already feel the championship starting to slip away.",
  "There was another challenge waiting for us before we even arrived.",
  "Our engineer, Mark Hensman—better known as “Bugs”—was unavailable for the event. Anyone who knows Team 77 knows just how important Bugs is to our operation. Losing someone with his experience could easily have unsettled the team.",
  "Instead, after Race 1, Greg and I sat down and put together a new plan.",
  "Jarrod, who had shadowed Bugs during Race 1, stepped into the engineering role under my guidance, taking responsibility for fuel management and all pre- and post-flight checks. Greg managed the overall operation, while his son Conner joined us for the weekend to assist Jarrod with refuelling, cleaning the aircraft and positioning it before and after every flight.",
  "Bugs affectionately calls them “the youths”, and they certainly lived up to the nickname. Watching them work together was something special. Jarrod, who already holds his Private Pilot Licence and is working towards his Commercial Licence, embraced every opportunity to learn, while Conner became an invaluable part of the team.",
  "Race 2 preparation itself couldn’t have gone much better.",
  "My new race helmet, lightweight parachute and race suit had all arrived, reducing weight and making me far more comfortable in the cockpit. Greg’s wind-direction prediction model was proving incredibly accurate once again, giving us confidence that we’d selected the correct track heading.",
  "Greg, Jarrod and Conner travelled ahead to prepare the course before I arrived the following day.",
  "Then the hard work began.",
  "Day One",
  "Ten practice runs later, our best lap was a 68.038 seconds.",
  "Unfortunately, Yoshi had already posted a 64.3-second qualifying benchmark.",
  "The track simply wasn’t working with the existing wind, although the forecast suggested conditions might improve overnight.",
  "We remained hopeful.",
  "Day Two",
  "After another nine practice runs, we improved to a 65.915.",
  "Better—but nowhere near good enough if we wanted to defend our championship.",
  "Off the track, Greg was dealing with problems most race teams never have to think about. Calls from a nearby retirement home complaining about the aircraft noise, combined with military parade flights twice a day from the nearby base, grounded us for almost an hour and a half every day.",
  "Every minute lost meant fewer opportunities to test changes.",
  "Eventually we faced the question we’d been avoiding.",
  "Do we change the track direction?",
  "It sounds simple.",
  "It isn’t.",
  "Changing the course requires new GPS coordinates from the Air Race X technical team in Japan before the entire track has to be rebuilt—a process that takes our crew roughly two hours.",
  "It was a huge gamble.",
  "Day Three",
  "We woke up knowing we were running out of time.",
  "Changing the track meant I had to completely relearn the course. Every turn, every visual reference and every picture in my head had changed.",
  "By the middle of the day we had already completed fifteen runs before deciding it was finally time to use one of our qualifying tokens.",
  "Yoshi’s target remained 64.3 seconds.",
  "We managed only a 66.249.",
  "We weren’t even close.",
  "After lunch we went back to basics.",
  "Lines.",
  "Angles.",
  "Wind.",
  "Every tiny detail was analysed.",
  "There had to be more speed hiding somewhere.",
  "Day Four – Last Chance",
  "This was it.",
  "Our final opportunity.",
  "After six more practice runs we committed our final qualifying attempt.",
  "65.193 seconds.",
  "Not where we wanted to be, but enough for third place in qualifying behind Yoshi and Aaron, who had both dipped into the 64-second bracket.",
  "Those three qualifying points suddenly became very valuable.",
  "Now all we could do was race.",
  "The quarter-final went to plan. Qualifying higher meant facing one of the slower pilots, allowing us to progress comfortably.",
  "The semi-final was where the pressure really started.",
  "Aaron was our opponent.",
  "We stopped the clock at 65.251 and waited.",
  "Aaron hadn’t posted a time yet.",
  "Then came the final.",
  "We flew what we believed was one of our cleanest runs of the weekend.",
  "64.998 seconds.",
  "Was it enough?",
  "We stood around the live timing screens waiting for Aaron’s result.",
  "Nothing appeared.",
  "Eventually we learned he had exceeded the aircraft G-limit and received an over-G penalty, knocking him out of contention.",
  "Yoshi, meanwhile, had produced an incredible 63.869-second lap.",
  "Second place.",
  "Considering where we’d been just a few days earlier, it felt like a huge turnaround.",
  "Then came one final twist.",
  "After the racing had finished we learned Yoshi had received a one-second penalty for flying without smoke during the final.",
  "For a brief moment we thought victory might be ours.",
  "Instead, we missed out by just 0.129 seconds.",
  "That one stung.",
  "Congratulations to Yoshi on another outstanding performance and to Martin for securing third place.",
  "More importantly, congratulations to our own team.",
  "Jarrod and Conner stepped into enormous shoes and never looked out of place. Bugs would have been incredibly proud of “the youths”.",
  "Race 2 reminded us that championships aren’t won because everything goes according to plan.",
  "They’re won by adapting when things don’t.",
  "So far this season we’ve already completed 84 race runs.",
  "For comparison, we completed just 32 flights across the first two races of our 2025 championship-winning season.",
  "We’re working harder than ever.",
  "We’re learning more than ever.",
  "And we’re definitely not giving up.",
  "The fight for the 2026 championship is far from over.",
];

export default function RaceReport2026Race2() {
  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/race-reports/2026-race-2/lets-do-anotherone.jpg"
          alt="Team 77 preparing for another Race 2 run"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <Link
              href="/media/race-reports"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
            >
              ← Back to Race Reports
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              AIR RACE X / 2026 Race 2
            </p>

            <h1 className="text-5xl font-black uppercase italic leading-[0.85] md:text-8xl">
              Never Count
              <br />
              Out Team 77.
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75 md:text-2xl md:leading-10">
              A difficult start, a missing engineer, a rebuilt track and a
              final decided by just 0.129 seconds.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          <Stat value="P3" label="Qualified" />
          <Stat value="P2" label="Race Result" />
          <Stat value="64.998" label="Final Run" />
          <Stat value="0.129s" label="Gap To Win" />
        </div>
      </section>

      <article className="px-8 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-7 text-lg leading-8 text-white/70 md:text-xl md:leading-9">
            {paragraphs.map((paragraph, index) => {
              const isHeading = [
                "Day One",
                "Day Two",
                "Day Three",
                "Day Four – Last Chance",
              ].includes(paragraph);

              if (isHeading) {
                return (
                  <h2
                    key={`${paragraph}-${index}`}
                    className="pt-10 text-4xl font-black uppercase italic leading-tight text-white md:text-5xl"
                  >
                    {paragraph}
                  </h2>
                );
              }

              return <p key={`${paragraph}-${index}`}>{paragraph}</p>;
            })}
          </div>
        </div>
      </article>

      <section className="border-t border-white/10 px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
            Race 2 Gallery
          </p>

          <h2 className="max-w-4xl text-5xl font-black uppercase italic leading-tight md:text-7xl">
            The weekend
            <br />
            in pictures.
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <GalleryCard key={item.src} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 pb-24 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-12 md:flex-row md:items-center md:justify-between">
          <Link
            href="/media/race-reports/2026-race-1"
            className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:border-white/50 hover:text-white"
          >
            ← Previous Report
          </Link>

          <span className="text-center text-xs uppercase tracking-[0.35em] text-white/35">
            Race 3 Coming Soon
          </span>
        </div>
      </section>
    </main>
  );
}

function GalleryCard({
  item,
}: {
  item: {
    src: string;
    title: string;
    description: string;
  };
}) {
  return (
    <figure className="border border-white/10 bg-white/[0.03] p-3 transition duration-500 hover:-translate-y-1 hover:border-[#62d6aa]/50">
      <a href={item.src} target="_blank" rel="noopener noreferrer">
        <div className="relative h-[300px] overflow-hidden bg-black md:h-[340px]">
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center transition duration-700 hover:scale-105"
          />
        </div>
      </a>

      <figcaption className="p-4">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#62d6aa]">
          {item.title}
        </p>
        <p className="mt-3 text-sm leading-6 text-white/55">
          {item.description}
        </p>
      </figcaption>
    </figure>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-black italic md:text-5xl">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}
