import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isRace4Published, isRace4Preview, RACE_4_BROADCAST_URL } from "@/lib/race4Publication";

export const dynamic = "force-dynamic";
const photos = "/images/race-reports/2026-race-4";
const videos = "/videos/race-reports/2026-race-4";
const reportPath = "/media/race-reports/2026-race-4";

export function generateMetadata(): Metadata {
  if (!isRace4Published()) notFound();
  return {
    title: "2026 AIR RACE X Race 4: Back to Back",
    description: "Fastest qualifying. Victory in the final. Patrick Davidson and Team 77 win the 2026 AIR RACE X championship on 99 points. The story, cockpit audio and behind-the-scenes film.",
    alternates: { canonical: reportPath },
    robots: isRace4Preview() ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title: "Back to Back. Team 77 are 2026 AIR RACE X Champions.",
      description: "99 points. Two race wins. One unforgettable final in the Karoo.",
      url: reportPath,
      publishedTime: "2026-09-13T15:30:00+02:00",
      authors: ["Patrick Davidson"],
      images: [{ url: `${photos}/scruffy-and-pat.webp`, width: 1800, height: 1200, alt: "Patrick Davidson beside his Edge 540 at Good Luck Airstrip" }],
    },
  };
}

const gallery = [
  { file: "scruffy-and-pat", title: "Patrick & Scruffy", caption: "Ready for another run at Good Luck Airstrip.", alt: "Patrick in his helmet beside the green and white Edge 540, Scruffy" },
  { file: "karoo", title: "The Karoo office", caption: "A helmet, a windmill and a very different kind of office.", alt: "Patrick seen from behind wearing his Red Bull helmet with a Karoo windmill in the distance" },
  { file: "lets-go", title: "Let’s go", caption: "The Edge waiting in the hangar before heading out.", alt: "Rear view of the Edge 540 in the hangar looking out over the Karoo" },
  { file: "sky-is-the-limit", title: "The sky is the limit", caption: "Scruffy under a wide Karoo sky.", alt: "The Edge 540 on the apron beneath textured clouds" },
  { file: "lift-off", title: "Lift off", caption: "A small aircraft. A very big sky.", alt: "The race aircraft high in a blue sky above the visible moon" },
  { file: "moon-landing", title: "Moon landing", caption: "Sharing the frame with the moon.", alt: "The Edge 540 flying against blue sky with the moon below" },
  { file: "team-braai", title: "The team table", caption: "An early braai, then Gran Turismo. Race-eve preparation, Team 77 style.", alt: "Four Team 77 members sharing a braai around the kitchen table" },
  { file: "black-ear-fox", title: "Local company", caption: "One of the Karoo locals spotted between flights.", alt: "A fox with large dark ears among the Karoo scrub" },
];

const story = [
  {
    heading: "Back to Good Luck",
    paragraphs: [
      "Heading back to Good Luck Airstrip in the Karoo for the final race of the season was less stressful than Race 3, but just as intense. Knowing Greg, he knew exactly what we needed to do and probably had a plan A, B and C. I have to be honest: I didn’t really know how many points we needed or how the bones had to fall for us to win. That’s Greg’s job, and he usually briefs me when it matters. My job is “simple”: fly as fast and safely as I can.",
      "I arrived on Friday with the team already set up and ready. Jarrod and Conner parked the plane and got it ready for practice while Greg and I had a quick briefing and course overview. That usually means Greg calling out the gate sequence while I walk and visualise it. For the first three practice runs, he calls the gates over the radio. After that, it’s about getting used to the course and the sequence.",
      "Between runs we looked at the data and tried different things. It’s always an eye-opener for the team to compare the tailcam footage with what they see from the ground. I’m pretty good at choosing the right lines. That, combined with Greg overthinking and overanalysing, works surprisingly well for us.",
    ],
  },
  {
    heading: "The work before the win",
    paragraphs: [
      "Practice was good and the weather was as predicted. Our runs got faster and faster, and super consistent, but we couldn’t match Yoshi’s qualifying run in any of our practice flights. We tried a few turn variations, then went back to our original track because it worked better for us.",
      "We practised on Friday and Saturday and felt really good in the track. Race 4 was more taxing on the body than Race 3. We made the call: Sunday would be our race day.",
      "On Saturday night we had an early braai, and Conner and Jarrod suggested a movie. Gran Turismo it was. Computer gamers racing real drivers. What a fitting movie before Race 4. Thanks to the youths.",
    ],
  },
  {
    heading: "Coffee. Then everything.",
    paragraphs: [
      "Sunday morning. Race day. I was standing in the kitchen having coffee. Greg walked in, made himself one, and we stood staring out of the window. That’s when he told me: we needed fastest qualifying and a win in the final to tie with Yoshi on 99 points. The rules would then give the championship to the pilot or team with the most race wins.",
      "He also explained that winning the race without fastest qualifying wouldn’t be enough for the championship. My exact words were: “Let’s win the whole whole f77ing thing.” And we carried on drinking coffee.",
      "We got to the hangar at 8am. It was −1°C. The plane was already prepped. We did one practice flight, landed and got ready again. Then we saw a change in the wind. Greg and I just looked at each other. “Let’s go.”",
      "We flew a blistering qualifying run: 60.678 seconds. Super fast. We felt we had it in the bag, but nobody said a word.",
    ],
  },
  {
    heading: "One clean run",
    paragraphs: [
      "The quarter-final was easy. The semi-final was supposed to be easy. Teams get two runs per heat, and we always bank the first one and then push on the second. This time we got a penalty on our first semi-final run. Luckily, our second was clean and fast enough to put us in the final. Yes, against the GOAT. Yoshi.",
      "This was it. We had made it. A chance to win the championship again in 2026, something we thought might never be possible after a very, very hard Race 1 and Race 2.",
      "Our semi-final time of 61.9 seconds told us the wind wasn’t ideal. That doesn’t help when you’re racing Yoshi for the championship. We looked at the weather and what it had done over the previous four weeks. Was there a pattern? Was it worth waiting? Would it get better or worse?",
      "We were all outside, standing around the plane, when the windsock started turning a little. I remember us all turning to look at it without saying a word. Let’s do this.",
    ],
  },
  {
    heading: "One more for the road",
    paragraphs: [
      "I strapped in with Greg humming the Top Gun theme, closed the canopy and knew: this was it.",
      "61.414 seconds. Greg shouted over the radio: “Patrick Davidson, you are the 2026 champion!” I was happy. I was relieved. But I had one more run left.",
      "We had banked a good one. We had banked a winner. But hey, I could still do one more run in the final. I jokingly said over the radio: “OK, let’s do a faster one! I’ll close the air vents for this one!” Greg just laughed.",
      "61.207 seconds. We did it. We flipped did it. Back-to-back AIR RACE X champions!",
    ],
  },
];

export default function RaceReport2026Race4() {
  if (!isRace4Published()) notFound();
  return (
    <main className="bg-black text-white">
      <section className="relative isolate flex min-h-[90svh] items-end overflow-hidden md:min-h-screen">
        <Image src={`${photos}/scruffy-and-pat.webp`} alt="Patrick Davidson and Scruffy at Good Luck Airstrip in the Karoo" fill preload quality={90} sizes="100vw" className="object-cover object-[55%_center]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-14 pt-36 md:px-16 md:pb-20 lg:px-24">
          <Link href="/media/race-reports" className="text-[10px] uppercase tracking-[0.3em] text-white/75 hover:text-[#d4b16a]">← Race reports</Link>
          {isRace4Preview() && <p className="mt-5 w-fit border border-[#d4b16a]/50 bg-black/70 px-4 py-2 text-xs text-[#d4b16a]">Private preview · Publishes 13 September, 15:30 SAST</p>}
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.35em] text-[#e5c785]">AIR RACE X / Race 4 / 2026</p>
          <h1 className="mt-5 text-[clamp(4.3rem,12vw,10rem)] font-black uppercase italic leading-[0.83] tracking-[-0.055em]">Back<br />to back<span className="text-[#d4b16a]">.</span></h1>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#e5c785] md:text-lg">2026 AIR RACE X Champions</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/80 md:text-xl">Fastest qualifying. Victory in the final. A season that came down to 99 points, two wins and one team that never stopped believing.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#the-final" className="bg-[#d4b16a] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition hover:bg-[#e5c785]">Watch our final ↗</a>
            <a href="#the-story" className="border border-white/40 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-white/10">Patrick’s story ↓</a>
          </div>
        </div>
      </section>

      <section aria-label="Race 4 results" className="border-y border-white/15 px-6 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-8 py-10 md:grid-cols-4 md:py-12">
          {[['60.678s', 'Fastest qualifying'], ['61.207s', 'Winning final'], ['99', 'Season points'], ['01', 'Championship position']].map(([value, label]) => <div key={label}><p className="text-3xl font-black italic md:text-5xl">{value}</p><p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#d4b16a]">{label}</p></div>)}
        </div>
      </section>

      <section id="the-final" className="px-6 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">Inside Team 77 / Film by Greg</p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-end">
            <h2 className="text-5xl font-black uppercase italic leading-[0.95] md:text-7xl">The final.<br />From our side.</h2>
            <p className="max-w-lg text-base leading-7 text-white/65">Behind the scenes, inside the cockpit and on the team radio. Turn the sound up for Patrick and the crew as the championship comes down to the final runs.</p>
          </div>
          <div className="mt-10 overflow-hidden border border-white/15 bg-white/[0.03]">
            <video controls playsInline preload="none" poster={`${photos}/final-poster.webp`} width={1280} height={720} aria-label="The Final: Team 77 behind the scenes and cockpit audio" className="aspect-video w-full">
              <source src={`${videos}/the-final.mp4`} type="video/mp4" />
              <a href={`${videos}/the-final.mp4`}>Watch The Final</a>
            </video>
            <div className="flex flex-wrap justify-between gap-3 px-5 py-4 text-[10px] uppercase tracking-[0.18em] text-white/60"><span>The Final · 6 min 42 sec</span><span>Original cockpit & team audio</span></div>
          </div>
        </div>
      </section>

      <section aria-labelledby="title-decider" className="border-y border-[#d4b16a]/25 bg-[#d4b16a]/[0.06] px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <div><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">The championship decider</p><h2 id="title-decider" className="mt-5 text-4xl font-black uppercase italic leading-tight md:text-5xl">Level on points.<br />Ahead on wins.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Patrick and Yoshi finished on 99 points each. Under the championship tie-break rule, the pilot or team with the most race wins takes the title. Team 77 won twice this season. Yoshi won once.</p></div>
          <div className="self-center"><table className="w-full text-left"><caption className="sr-only">2026 championship tie-break between Patrick Davidson and Yoshi</caption><thead><tr className="border-b border-white/20 text-[10px] uppercase tracking-[0.12em] text-white/55"><th scope="col" className="py-4 font-normal">Pilot</th><th scope="col" className="py-4 text-right font-normal">Points</th><th scope="col" className="py-4 text-right font-normal">Race wins</th></tr></thead><tbody><tr className="border-b border-white/15 text-[#e5c785]"><th scope="row" className="py-5 text-base md:text-xl">Patrick Davidson</th><td className="py-5 text-right text-3xl font-black">99</td><td className="py-5 text-right text-3xl font-black">2</td></tr><tr className="text-white/65"><th scope="row" className="py-5 font-normal">Yoshi</th><td className="py-5 text-right text-2xl font-bold">99</td><td className="py-5 text-right text-2xl font-bold">1</td></tr></tbody></table><p className="mt-4 text-xs uppercase tracking-[0.2em] text-[#d4b16a]">Team 77 · Back-to-back champions</p></div>
        </div>
      </section>

      <article id="the-story" className="px-6 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#d4b16a]">In Patrick’s words</p>
          <p className="mt-4 text-sm text-white/50">Patrick Davidson · Good Luck Airstrip, Karoo<br /><time dateTime="2026-09-13">Published 13 September 2026</time></p>
          {story.map((section, index) => <section key={section.heading} className="mt-12">
            <h2 className="mb-7 text-3xl font-black uppercase italic leading-tight md:text-4xl">{section.heading}</h2>
            <div className="space-y-6 text-lg leading-[1.85] text-white/70">{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
            {index === 1 && <figure className="my-12"><Image src={`${photos}/team-braai.webp`} alt="Team 77 sharing their Saturday evening braai" width={1800} height={1350} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full" /><figcaption className="mt-4 text-sm leading-6 text-white/50">An early braai and a racing movie with “the youths”. The evening before it all came together.</figcaption></figure>}
          </section>)}
          <div className="mt-12 border-l-2 border-[#d4b16a] pl-6"><p className="text-xl font-black uppercase italic">Patrick Davidson</p><p className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">Pilot / Team 77</p></div>
        </div>
      </article>

      <section className="border-y border-white/15 px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">One from behind the scenes</p><h2 className="mt-5 text-4xl font-black uppercase italic md:text-5xl">Top Gun, baby.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-white/65">A little Team 77 atmosphere before the serious business. A short clip from the race weekend, with the original sound.</p></div>
          <video controls playsInline preload="none" poster={`${photos}/top-gun-poster.webp`} width={1280} height={720} aria-label="Top Gun baby: behind the scenes with Team 77" className="aspect-video w-full border border-white/15 bg-black"><source src={`${videos}/top-gun-baby.mp4`} type="video/mp4" /><a href={`${videos}/top-gun-baby.mp4`}>Watch Top Gun baby</a></video>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">Race 4 / Photo diary</p><h2 className="mt-5 text-5xl font-black uppercase italic md:text-7xl">Life between<br />the runs.</h2><p className="mt-6 text-base text-white/55">Eight moments from Good Luck. Tap a photograph to view it in full.</p>
          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">{gallery.map(photo => <figure key={photo.file}><a href={`${photos}/${photo.file}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${photo.title}`} className="group relative block aspect-[4/3] overflow-hidden border border-white/10 bg-white/5"><Image src={`${photos}/${photo.file}.webp`} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" /><span className="absolute bottom-3 right-3 bg-black/65 px-3 py-1 text-xl" aria-hidden="true">↗</span></a><figcaption className="pt-5"><p className="text-sm font-bold uppercase tracking-[0.12em] text-[#d4b16a]">{photo.title}</p><p className="mt-2 text-sm leading-6 text-white/55">{photo.caption}</p></figcaption></figure>)}</div>
        </div>
      </section>

      <section className="border-t border-white/15 px-6 py-16 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">The official broadcast</p><h2 className="mt-4 text-3xl font-black uppercase italic md:text-4xl">Every heat. The whole race.</h2><p className="mt-4 max-w-xl leading-7 text-white/60">Race 4 broadcast: Sunday 13 September 2026 at 14:00 SAST. Watch qualifying through to the final on AIR RACE X’s YouTube channel.</p></div><a href={RACE_4_BROADCAST_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 border border-[#d4b16a] px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-[#d4b16a] transition hover:bg-[#d4b16a] hover:text-black">Watch Race 4 on YouTube ↗</a></div>
          <nav aria-label="Race report navigation" className="mx-auto mt-14 flex max-w-7xl flex-wrap justify-between gap-6 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.15em] text-white/65"><Link href="/media/race-reports/2026-race-3" className="hover:text-[#d4b16a]">← Race 3 report</Link><Link href="/championship" className="hover:text-[#d4b16a]">2026 Championship →</Link></nav>
      </section>
    </main>
  );
}
