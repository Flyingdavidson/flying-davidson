import Image from "next/image";
import Link from "next/link";
import { seasonPilots, seasonRounds } from "@/lib/championship2026";
import { isRace4Preview } from "@/lib/race4Publication";
import SeasonExplorer from "./SeasonExplorer";

export default function SeasonHub() {
  return (
    <main id="championship-top" className="bg-black text-white">
      <section className="relative isolate flex min-h-[90svh] items-end overflow-hidden md:min-h-screen">
        <Image src="/images/air-race-x/arx-hero.jpg" alt="Patrick Davidson racing the Team 77 Edge 540" fill preload quality={90} sizes="100vw" className="object-cover object-[68%_center] md:object-[75%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-14 pt-32 md:px-16 md:pb-20 lg:px-24">
          <Link href="/#airracex" className="text-[10px] uppercase tracking-[0.25em] text-white/65 hover:text-[#e5c785]">← Back to AIR RACE X</Link>
          {isRace4Preview() && <p className="mt-6 w-fit border border-[#d4b16a]/40 bg-black/65 px-3 py-2 text-xs text-[#e5c785]">Private preview · 13 September, 15:30 SAST</p>}
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.25em] text-[#e5c785]">2026 AIR RACE X / Championship season</p>
          <h1 className="mt-6 text-[clamp(3.6rem,11vw,9.5rem)] font-black uppercase italic leading-[0.86] tracking-[-0.055em]">The road<br />to <span className="text-[#d4b16a]">99.</span></h1>
          <p className="mt-7 text-sm font-bold uppercase tracking-[0.2em] text-[#e5c785]">Patrick Davidson. Team 77. Champions again.</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/70 md:text-xl">It started with floods, setbacks and 12 points. It ended with a second consecutive title. This is how the 2026 season unfolded.</p>
          <nav aria-label="Championship sections" className="mt-8 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.14em]">
            <a href="#season" className="bg-[#d4b16a] px-5 py-4 text-black transition hover:bg-[#e5c785]">Explore the races ↓</a>
            <a href="#standings" className="border border-white/35 px-5 py-4 transition hover:bg-white/10">Full standings ↓</a>
            <a href="#film" className="border border-white/35 px-5 py-4 transition hover:bg-white/10">Inside the final ↗</a>
          </nav>
        </div>
      </section>

      <section aria-label="Team 77 championship highlights" className="border-y border-[#d4b16a]/30 px-6 md:px-16 lg:px-24">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-12">
          {[["1st", "2026 Champion"], ["99", "Championship points"], ["2", "Race wins"], ["4 / 4", "Races completed"]].map(([value, label]) => <div key={label} className="flex flex-col"><dt className="order-2 mt-3 text-[10px] uppercase tracking-[0.14em] text-[#d4b16a]">{label}</dt><dd className="text-4xl font-black italic md:text-5xl">{value}</dd></div>)}
        </dl>
      </section>

      <section className="px-6 pt-20 md:px-16 md:pt-28 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">A title earned the hard way</p><h2 className="mt-5 text-4xl font-black uppercase italic leading-tight md:text-5xl">The comeback<br />in four numbers.</h2></div>
          <div><p className="max-w-2xl text-lg leading-8 text-white/65">Fourth in the opener. Second in Race 2. A win in Race 3. Then pole position and victory in the finale. Every round moved Team 77 closer to defending the crown.</p><div className="mt-8 grid grid-cols-4 border-y border-white/15 py-6">{seasonRounds.map(round => <div key={round.number} className="border-l border-white/15 pl-3 first:border-0 first:pl-0 md:pl-5"><p className="text-[9px] uppercase tracking-[0.12em] text-white/45">Race {round.number}</p><p className={`mt-3 text-3xl font-black italic md:text-5xl ${round.number === 4 ? "text-[#d4b16a]" : "text-white"}`}>{round.total}</p><p className="mt-2 text-[9px] uppercase text-white/45">Points</p></div>)}</div><p className="mt-5 text-sm leading-7 text-white/55">The final tie-break: Patrick and Yoshi both finished on 99 points. Two wins for Team 77, one for Yoshi. The title stayed with Patrick.</p></div>
        </div>
      </section>

      <SeasonExplorer rounds={seasonRounds} pilots={seasonPilots} />

      <section id="film" className="border-y border-white/15 bg-white/[0.02] px-6 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-end"><div><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">Inside the championship-winning team</p><h2 className="mt-5 text-4xl font-black uppercase italic leading-tight md:text-6xl">Hear the moment.<br />Feel the release.</h2></div><p className="max-w-xl text-lg leading-8 text-white/65">Greg’s film takes you behind the scenes and into the cockpit for the final. Patrick in the air. Greg, Jarrod and Conner on the ground. The original team radio, the tension and the moment it all came together.</p></div>
          <div className="mt-10 border border-white/15"><video controls playsInline preload="none" poster="/images/race-reports/2026-race-4/final-poster.webp" width={1280} height={720} aria-label="The Final: Team 77 championship film with cockpit and team audio" className="aspect-video w-full"><source src="/videos/race-reports/2026-race-4/the-final.mp4" type="video/mp4" /><a href="/videos/race-reports/2026-race-4/the-final.mp4">Watch The Final</a></video><div className="flex flex-wrap justify-between gap-3 px-5 py-4 text-[10px] uppercase tracking-[0.15em] text-white/55"><span>The Final / 6 min 42 sec</span><span>Cockpit + team audio / Sound on</span></div></div>
          <Link href="/media/race-reports/2026-race-4" className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.14em] text-[#e5c785] hover:underline">The full Race 4 story, BTS clip & photo diary →</Link>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">The season archive</p><h2 className="mt-5 text-4xl font-black uppercase italic md:text-6xl">Four races.<br />Four stories.</h2><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{seasonRounds.map(round => <Link key={round.number} href={round.report} className="group overflow-hidden border border-white/15 bg-white/[0.03] transition hover:border-[#d4b16a]/70"><div className="relative aspect-[4/3] overflow-hidden"><Image src={round.photo} alt={round.photoAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="text-[9px] uppercase tracking-[0.18em] text-[#d4b16a]">Race {round.number} / {round.date}</p><h3 className="mt-4 text-2xl font-black uppercase italic leading-tight">{round.headline}</h3><p className="mt-5 text-[10px] uppercase tracking-[0.12em] text-white/60">Read race report →</p></div></Link>)}</div><div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.15em] text-white/55"><Link href="/media/results" className="hover:text-[#e5c785]">Patrick’s career results →</Link><a href="https://2025.airracex.com/results/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e5c785]">The 2025 championship ↗</a><a href="https://airracex.com/result/2026/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e5c785]">AIR RACE X official results ↗</a></div></div>
      </section>
    </main>
  );
}
