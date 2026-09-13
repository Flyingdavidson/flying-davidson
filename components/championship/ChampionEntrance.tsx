import Image from "next/image";
import Link from "next/link";

export default function ChampionEntrance() {
  return (
    <section id="airracex" aria-labelledby="champion-entrance-title" className="relative isolate overflow-hidden bg-black text-white">
      <div className="relative flex min-h-[90svh] items-end md:min-h-screen">
        <Image src="/images/air-race-x/arx-hero.jpg" alt="Patrick Davidson’s Edge 540 banking through the sky" fill sizes="100vw" className="object-cover object-[68%_center] md:object-[75%_center]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
        <div className="relative mx-auto w-full max-w-[1600px] px-6 pb-16 pt-24 md:px-16 md:py-24 lg:px-24">
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e5c785] md:text-xs">
            <span className="h-px w-8 bg-[#d4b16a]" />2026 AIR RACE X Champions
          </div>
          <h2 id="champion-entrance-title" className="mt-8 text-[clamp(2.8rem,9.7vw,8.75rem)] font-black uppercase italic leading-[0.88] tracking-[-0.055em]">Champions.<br /><span className="text-[#d4b16a]">Again.</span></h2>
          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-white/85 md:text-sm">Patrick Davidson / Team 77 / South Africa</p>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 md:text-xl">From a flooded season opener to a title decided on race wins. Four rounds. Ninety-nine points. Back-to-back AIR RACE X championships.</p>
          <Link href="/championship#championship-top" className="mt-9 inline-flex items-center justify-between gap-6 bg-[#d4b16a] px-6 py-5 text-xs font-bold uppercase tracking-[0.13em] text-black transition hover:bg-[#e5c785] md:px-8">
            Explore the 2026 season <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-white/55">The results. The reports. The moments inside the cockpit.</p>
        </div>
      </div>
      <div className="relative border-y border-[#d4b16a]/30 px-6 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 py-9 md:grid-cols-4">
          {[["2025 + 2026", "Back-to-back titles"], ["99", "Championship points"], ["2", "Race wins this season"], ["1st", "Overall in 2026"]].map(([value, label]) => <div key={label} className="px-2"><p className="text-2xl font-black italic md:text-4xl">{value}</p><p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-[#d4b16a] md:text-[10px]">{label}</p></div>)}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-6 px-6 py-8 md:flex-row md:items-center md:px-16 lg:px-24">
        <p className="text-[10px] uppercase leading-6 tracking-[0.18em] text-white/50">426 km/h top speed <span className="mx-3 text-[#d4b16a]">/</span> 12G maximum load</p>
        <a href="https://airracex.com" target="_blank" rel="noopener noreferrer" className="flex w-fit items-center gap-5 text-[10px] uppercase tracking-[0.15em] text-white/65 hover:text-[#d4b16a]"><Image src="/images/logos/air-race-x.svg" alt="AIR RACE X" width={120} height={32} className="h-6 w-auto" />Official website ↗</a>
      </div>
    </section>
  );
}
