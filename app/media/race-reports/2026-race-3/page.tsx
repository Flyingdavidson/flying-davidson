import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isRace3Published } from "@/lib/race3Publication";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "2026 AIR RACE X Race 3: A Change of Fortune",
  description:
    "Patrick Davidson and Team 77 change race venues, build a new helmet and return to the top with fastest qualifying and victory in AIR RACE X Race 3.",
  alternates: { canonical: "/media/race-reports/2026-race-3" },
};

const gallery = [
  {
    src: "/images/race-reports/2026-race-3/accommodation-exterior.jpg",
    title: "Home Away From Home",
    description:
      "The team’s remote accommodation at the new race venue, where racing, cooking and recovery all had to fit under one roof.",
  },
  {
    src: "/images/race-reports/2026-race-3/accommodation-lounge.jpg",
    title: "Three Rooms, Five People",
    description:
      "A little room planning meant Patrick and Greg each had a room while “the youths” shared the bunk beds.",
  },
  {
    src: "/images/race-reports/2026-race-3/self-catering-kitchen.jpg",
    title: "Self-Catering Race Team",
    description:
      "With no clubhouse facilities nearby, grocery shopping, cooking and washing dishes became part of the race programme.",
  },
  {
    src: "/images/race-reports/2026-race-3/narrow-runwaystrip.jpg",
    title: "A Narrow New Runway",
    description:
      "Good Luck Airstrip offered better weather, but its narrow asphalt runway demanded precision from the Edge 540.",
  },
  {
    src: "/images/race-reports/2026-race-3/helmet-assembly-parts.jpg",
    title: "The AV 2.1 Arrives",
    description:
      "The new Lift Aviation AV 2.1 arrived as a collection of carefully labelled parts with only days left before Race 3.",
  },
  {
    src: "/images/race-reports/2026-race-3/lift-av21-painted-shell.jpg",
    title: "Red Bull Colours",
    description:
      "Glenton at Blizzard Custom Airbrushing completed the approved Red Bull design before the final assembly began.",
  },
  {
    src: "/images/race-reports/2026-race-3/lightspeed-h-mod-installation.jpg",
    title: "Final Helmet Wiring",
    description:
      "The Lightspeed H-Mod was installed, soldered and tested with help from Marius at Seaview Aerobatics.",
  },
  {
    src: "/images/race-reports/2026-race-3/gdu-cameraunit.jpg",
    title: "Race Technology",
    description:
      "The GDU and camera systems made the remote race possible from an airstrip with no mobile service or internet.",
  },
  {
    src: "/images/race-reports/2026-race-3/juniortech-and-cameraoperator.jpg",
    title: "The Youths",
    description:
      "Jarrod and Conner returned after Race 2 to keep the aircraft and ground operation moving.",
  },
  {
    src: "/images/race-reports/2026-race-3/strapping-in-crewready.jpg",
    title: "Strapping In",
    description:
      "Patrick prepares to race with the lighter helmet while the crew completes the final checks.",
  },
  {
    src: "/images/race-reports/2026-race-3/tail-cam-view.jpg",
    title: "On The New Track",
    description:
      "A tail-camera view of the Edge 540 operating from Team 77’s new Race 3 base.",
  },
  {
    src: "/images/race-reports/2026-race-3/great-sunsets.jpg",
    title: "A Change Of Fortune",
    description:
      "The move delivered what Team 77 needed: fastest qualifying, a Race 3 win and renewed championship hope.",
  },
];

const paragraphs = [
  "Race 1 and Race 2 were by no means easy for the team. The number of flights we completed compared with 2025 was proof of that—we did almost three times more than last year.",
  "We felt more positive after Race 2, but knew that if we wanted to remain a contender in this year’s championship, we needed to make a few changes.",
  "A New Race Venue",
  "Weather was our biggest challenge, and the only way we could change the weather was to change the venue. After some serious consideration, we made the choice to move our racing location for Race 3.",
  "Grahamstown, also known as Makhanda, had been our home away from home for three years. In that time we made good friends, and the hospitality from the Grahamstown Flying Club was always amazing. The support we received from Peter and the flying club was fantastic.",
  "The Edge 540 makes a huge noise when it goes into race mode, which acted like an invitation for the townspeople to come to the airfield and see what was happening. It was great to share our sport and introduce people to aviation. We even had tannies bringing us lunch and snacks.",
  "Greg also became some kind of celebrity. He was added to the horse-riding club’s WhatsApp group so he could tell them when we were flying, while our military neighbours soon had him on speed dial.",
  "Moving racing locations came with challenges. Grahamstown Flying Club had really spoiled us: there was fuel, Brian helped set up and secure the track, there was a hangar for the aircraft, and we had bathrooms in the clubhouse.",
  "Finding Good Luck",
  "Greg spent the next few days on Google Earth looking for airstrips where the weather might be more forgiving. Stuart, who flew to Grahamstown to watch some of our races in 2025, heard that we were considering options and sent Greg the location of a field that might work.",
  "Greg contacted Louis, the owner, and arranged a site visit. We planned to fly there together, but my work commitments and the weather would not allow it.",
  "Finally, three weeks before the Race 3 window opened, we got a day to go and look. I had received the long-awaited call that my GameBird was ready to be collected, so I went to Upington while Greg drove to Good Luck Airstrip to meet Louis and assess whether we could race there.",
  "The new location was roughly the same distance from our home base as Grahamstown, but the drive was an hour and a half longer. The crew faced a two-and-a-half-hour journey. That was fine—I could fly there in 17 minutes.",
  "The Challenges",
  "Following Greg’s visit, we had a clear list of challenges.",
  "The asphalt runway is only eight metres wide, which is narrow for the Edge. There is no AVGAS, so we would have to tow a bowser to the new location. The strip is in the middle of nowhere, with no mobile service or internet—and we need internet to race.",
  "The accommodation was self-catering, so Greg would need to go grocery shopping and we would take turns cooking and doing the dishes.",
  "Then there was the weather. Greg mounted our weather station and left it at the farm to gather enough data to decide whether the move was actually worthwhile. Weather was, after all, the main reason we were searching for another strip.",
  "With just under two weeks to go, Greg was satisfied that he had enough weather data and we made the call to change locations. Now we needed to move. Pun intended.",
  "We collected our pylon markers from Grahamstown—thanks for the help, Peter. We arranged AVGAS and managed to borrow my dad’s bowser while he was on holiday. Then we had to solve the internet problem. Starlink would have been the obvious answer, but we all know Elon and South Africa cannot come to an agreement.",
  "Room For The Team",
  "Accommodation brought another challenge. We had three rooms, but needed space for me, Mark, Greg, Jarrod and a camera operator. I have shared with Greg before. It is not pretty.",
  "With one week to go, Mark had airshow commitments and Conner, Greg’s son, was on holiday. That left four beds—perfect. I would get a room, Greg would get a room and we would put “the youths” in the room with the bunk beds. It was the same team as Race 2. What could go wrong?",
  "A New Helmet In Twelve Days",
  "While all of this was happening, our new helmet arrived. This was going to be a game changer for me. The Lift Aviation AV 2.1 is much lighter than my previous helmet, which means less fatigue and strain on my neck and back.",
  "Greg had been speaking to Lift Aviation for almost a year about an upgrade. We had been waiting for the AV 2.1, a military-grade fixed-wing helmet. When it finally arrived, it still needed a Red Bull paint job, complete assembly and the installation of a Lightspeed H-Mod.",
  "Our previous Red Bull helmet had taken three months to complete. Greg was confident that he could have this one ready for Race 3.",
  "We worked on a design and sent it to Red Bull for approval. After a few changes, everyone was happy and Greg arranged for Glenton from Blizzard Custom Airbrushing to paint the helmet. Twelve days to go.",
  "While Glenton was spraying it, Greg received assembly instructions from Lift Aviation. With three days remaining, we got the helmet back and assembled it. With help from Marius at Seaview Aerobatics, we soldered, tested and finished everything.",
  "Yes—Race 3. New, lighter, faster helmet.",
  "Fastest Qualifier. Race Winner.",
  "With everything ready, the crew left for the new venue carrying the new helmet, Greg’s prototype LED G-meter strip, a bakkie full of groceries and ground-pylon markers, while towing a bowser full of AVGAS.",
  "In the end, it all went well. Greg’s prototype LED strip did not function as planned, but at least we left some room for improvement.",
  "More importantly, we qualified fastest and won Race 3.",
  "That puts us right back into the championship fight for 2026.",
  "Thank you to Louis from Good Luck Airstrip and to Lift Aviation. You made a difference.",
];

const headings = new Set([
  "A New Race Venue",
  "Finding Good Luck",
  "The Challenges",
  "Room For The Team",
  "A New Helmet In Twelve Days",
  "Fastest Qualifier. Race Winner.",
]);

export default function RaceReport2026Race3() {
  if (!isRace3Published()) {
    notFound();
  }

  return (
    <main className="bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/race-reports/2026-race-3/race3-hero.jpg"
          alt="Team 77 and the Edge 540 at the new Race 3 venue"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-6 py-20 sm:px-8 md:px-16 md:py-24 lg:px-24">
          <div className="max-w-5xl">
            <Link
              href="/media/race-reports"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 hover:text-white"
            >
              ← Back to Race Reports
            </Link>
            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
              AIR RACE X / 2026 Race 3
            </p>
            <h1 className="text-5xl font-black uppercase italic leading-[0.85] sm:text-6xl md:text-8xl">
              A Change
              <br />
              Of Fortune.
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-white/75 md:text-2xl md:leading-10">
              A new venue, a new helmet and a huge logistical gamble put Team
              77 back on top.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 border-y border-white/10 py-8 md:grid-cols-4">
          <Stat value="62.108s" label="P1 Qualifying" />
          <Stat value="62.218s" label="Winning Final" />
          <Stat value="33" label="Race 3 Points" />
          <Stat value="P2" label="Championship" />
        </div>
      </section>

      <article className="px-6 pb-24 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-7 text-lg leading-8 text-white/70 md:text-xl md:leading-9">
            {paragraphs.map((paragraph) =>
              headings.has(paragraph) ? (
                <h2
                  key={paragraph}
                  className="pt-10 text-4xl font-black uppercase italic leading-tight text-white md:text-5xl"
                >
                  {paragraph}
                </h2>
              ) : (
                <p key={paragraph}>{paragraph}</p>
              ),
            )}
          </div>

          <div className="mt-16 border-l-2 border-[#62d6aa] pl-6">
            <p className="text-xl font-black uppercase italic text-white">
              Patrick Davidson
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/45">
              Pilot / Team 77
            </p>
          </div>

          <a
            href="https://www.youtube.com/@AIRRACEX/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-flex items-center justify-center border border-[#62d6aa]/50 px-7 py-4 text-xs uppercase tracking-[0.3em] text-[#62d6aa] transition hover:border-[#62d6aa] hover:bg-[#62d6aa] hover:text-black"
          >
            Watch AIR RACE X on YouTube →
          </a>
        </div>
      </article>

      <section className="border-t border-white/10 px-6 py-24 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-[#62d6aa]">
            Race 3 Gallery
          </p>
          <h2 className="max-w-4xl text-5xl font-black uppercase italic leading-tight md:text-7xl">
            The move
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

      <section className="px-6 pb-24 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-12">
          <Link
            href="/media/race-reports/2026-race-2"
            className="inline-flex items-center justify-center border border-white/15 px-7 py-4 text-xs uppercase tracking-[0.35em] text-white/60 transition hover:border-white/50 hover:text-white"
          >
            ← Previous Report
          </Link>
        </div>
      </section>
    </main>
  );
}

function GalleryCard({
  item,
}: {
  item: { src: string; title: string; description: string };
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
