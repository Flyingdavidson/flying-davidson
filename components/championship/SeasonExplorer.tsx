"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { PilotSeason, SeasonRound } from "@/lib/championshipTypes";

function pointsThrough(pilot: PilotSeason, round: number) {
  return pilot.racePoints.slice(0, round).reduce((total, points, index) => total + points + pilot.qualifyingPoints[index], 0);
}

export default function SeasonExplorer({ rounds, pilots }: { rounds: SeasonRound[]; pilots: PilotSeason[] }) {
  const [selected, setSelected] = useState(4);
  const round = rounds[selected - 1];
  const standings = [...pilots].sort((a, b) => {
    const difference = pointsThrough(b, selected) - pointsThrough(a, selected);
    if (difference) return difference;
    const wins = (pilot: PilotSeason) => pilot.racePoints.slice(0, selected).filter(points => points === 25).length;
    return wins(b) - wins(a);
  });
  const qualifying = [...pilots].sort((a, b) => a.qualifyingRanks[selected - 1] - b.qualifyingRanks[selected - 1]);

  return (
    <section id="season" className="px-6 py-20 md:px-16 md:py-28 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.3em] text-[#d4b16a]">The season, round by round</p>
        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-4xl font-black uppercase italic leading-[0.95] md:text-6xl">Every point.<br />Every turning point.</h2>
          <p className="max-w-sm text-base leading-7 text-white/60">Choose a round to see the story, qualifying and championship standings at that stage of the season.</p>
        </div>
        <div aria-label="Choose a race" className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
          {rounds.map(item => <button key={item.number} type="button" aria-pressed={selected === item.number} aria-controls="season-round-panel" onClick={() => setSelected(item.number)} className={`min-w-0 border p-4 text-left transition md:p-6 ${selected === item.number ? "border-[#d4b16a] bg-[#d4b16a] text-black" : "border-white/15 bg-white/[0.03] text-white hover:border-[#d4b16a]/60"}`}>
            <span className="block text-[10px] font-bold uppercase tracking-[0.15em]">Race {item.number} <span className="float-right" aria-hidden="true">{selected === item.number ? "↙" : "↗"}</span></span>
            <span className="mt-3 block text-lg font-black uppercase italic md:text-xl">{item.chapter}</span>
            <span className={`mt-3 block text-xs ${selected === item.number ? "text-black/65" : "text-white/50"}`}>{item.total} season points</span>
          </button>)}
        </div>

        <div id="season-round-panel" className="mt-6" aria-labelledby="selected-round-title">
          <div className="grid overflow-hidden border border-white/15 bg-white/[0.03] lg:grid-cols-2">
            <div className="relative min-h-64 lg:min-h-[470px]">
              <Image key={round.photo} src={round.photo} alt={round.photoAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
              <p className="absolute bottom-6 left-6 text-[10px] font-bold uppercase tracking-[0.2em] text-white">Race {round.number} / {round.date}</p>
            </div>
            <div className="min-w-0 p-6 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4b16a]">Chapter 0{round.number} / {round.chapter}</p>
              <h3 id="selected-round-title" className="mt-4 text-3xl font-black uppercase italic leading-tight md:text-4xl">{round.headline}</h3>
              <p className="mt-5 text-base leading-7 text-white/65">{round.story}</p>
              <dl className="mt-7 grid grid-cols-3 gap-3 border-y border-white/10 py-5">
                {[["Qualified", round.qualifying], ["Race result", round.result], ["Points earned", `+${round.points}`]].map(([label, value]) => <div key={label}><dt className="text-[9px] uppercase tracking-[0.1em] text-white/50">{label}</dt><dd className="mt-2 text-2xl font-black italic text-[#e5c785]">{value}</dd></div>)}
              </dl>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-4 text-xs font-bold uppercase tracking-[0.12em]">
                <Link href={round.report} className="text-[#e5c785] underline-offset-4 hover:underline">Read Patrick’s report →</Link>
                <a href={round.broadcast} target="_blank" rel="noopener noreferrer" className="text-white/80 underline-offset-4 hover:underline">{round.broadcastLabel} ↗</a>
              </div>
              <p aria-live="polite" className="mt-6 text-sm text-white/50">Team 77 after Race {round.number}: <strong className="text-white/80">{round.position} · {round.total} points</strong></p>
            </div>
          </div>

          <div id="standings" className="mt-14 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div><p className="text-[10px] uppercase tracking-[0.25em] text-[#d4b16a]">All eight pilots</p><h3 className="mt-3 text-2xl font-black uppercase italic md:text-4xl">{selected === 4 ? "Final championship standings" : `Standings after Race ${selected}`}</h3></div>
            <p className="text-xs text-white/50">Race points + qualifying bonus</p>
          </div>
          <ol aria-label={`Championship standings after Race ${selected}`} className="mt-6 space-y-3 md:hidden">
            {standings.map((pilot, index) => <li key={pilot.number} className={`border p-4 ${pilot.number === 77 ? "border-[#d4b16a]/50 bg-[#d4b16a]/10" : "border-white/10 bg-white/[0.02]"}`}>
              <div className="flex items-center gap-3">
                <span className="w-6 shrink-0 text-xl font-black italic text-white/45">{index + 1}</span>
                <div className="min-w-0 flex-1"><p className={`text-sm font-bold ${pilot.number === 77 ? "text-[#e5c785]" : "text-white/90"}`}><span role="img" aria-label={pilot.country}>{pilot.flag}</span> {pilot.name}</p><p className="mt-1 text-[9px] leading-4 text-white/45">#{pilot.number} · {pilot.team}</p></div>
                <p className={`shrink-0 text-right text-2xl font-black italic ${pilot.number === 77 ? "text-[#e5c785]" : "text-white"}`}>{pointsThrough(pilot, selected)}<span className="mt-1 block text-[8px] font-normal not-italic uppercase tracking-widest text-white/45">Points</span></p>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2 border-t border-white/10 pt-3">{rounds.map(item => <div key={item.number}><p className={`text-[8px] uppercase tracking-widest ${item.number === selected ? "text-[#d4b16a]" : "text-white/40"}`}>Race {item.number}</p><p className="mt-1 text-xs text-white/75">{item.number > selected ? "—" : <>{pilot.racePoints[item.number - 1]}{pilot.qualifyingPoints[item.number - 1] > 0 && <span className="text-[10px] text-white/45"> +{pilot.qualifyingPoints[item.number - 1]}Q</span>}</>}</p></div>)}</div>
            </li>)}
          </ol>
          <p className="mt-4 hidden text-xs text-white/50 md:block lg:hidden">Swipe the table sideways to see every round →</p>
          <div role="region" aria-label={`Championship standings after Race ${selected}, scroll for every round`} tabIndex={0} className="mt-5 hidden overflow-x-auto border-y border-white/20 md:block focus-visible:outline-2 focus-visible:outline-[#d4b16a]">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <caption className="sr-only">2026 AIR RACE X championship standings after Race {selected}. Q means qualifying bonus points.</caption>
              <thead className="bg-[#141414] text-[10px] uppercase tracking-[0.12em] text-white/50"><tr><th scope="col" className="p-4">Pos.</th><th scope="col" className="p-4">Pilot / Team</th><th scope="col" className="p-4">#</th>{rounds.map(item => <th scope="col" key={item.number} className={`p-4 text-right ${item.number === selected ? "text-[#e5c785]" : ""}`}>Race {item.number}</th>)}<th scope="col" className="p-4 text-right">Total</th></tr></thead>
              <tbody>{standings.map((pilot, index) => <tr key={pilot.number} className={`border-t border-white/10 ${pilot.number === 77 ? "bg-[#d4b16a]/10 text-[#e5c785]" : "text-white/80"}`}>
                <td className="p-4 text-2xl font-black italic">{String(index + 1).padStart(2, "0")}</td>
                <th scope="row" className="p-4 font-normal"><span className="block whitespace-nowrap text-sm font-bold"><span role="img" aria-label={pilot.country} className="mr-2">{pilot.flag}</span>{pilot.name}</span><span className="mt-2 block text-[9px] uppercase tracking-[0.08em] text-white/45">{pilot.team}</span></th>
                <td className="p-4 text-sm text-white/45">{pilot.number}</td>
                {rounds.map(item => <td key={item.number} className={`whitespace-nowrap p-4 text-right text-sm ${item.number === selected ? "bg-white/[0.025]" : ""}`}>
                  {item.number > selected ? <span aria-label="Not raced yet" className="text-white/25">—</span> : <>{pilot.racePoints[item.number - 1]}{pilot.qualifyingPoints[item.number - 1] > 0 && <span className="ml-1 text-xs text-white/50">+ {pilot.qualifyingPoints[item.number - 1]}Q</span>}</>}
                </td>)}
                <td className="p-4 text-right text-2xl font-black italic">{pointsThrough(pilot, selected)}</td>
              </tr>)}</tbody>
            </table>
          </div>
          {selected === 4 && <p className="mt-5 border-l-2 border-[#d4b16a] pl-4 text-sm leading-7 text-white/70"><strong className="text-[#e5c785]">99 points each. The title goes to Team 77.</strong> Patrick’s two race wins beat Yoshi’s one under the championship tie-break rule.</p>}
          <p className="mt-4 text-xs leading-6 text-white/45">Rounds 1–3 points follow the latest <a href="https://airracex.com/result/2026/race3/index.php" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">AIR RACE X standings</a>. Race 4 comes from the final classification supplied to Team 77. Q = qualifying bonus; totals include both.</p>

          <details key={selected} className="mt-8 border border-white/15 bg-white/[0.02]">
            <summary className="cursor-pointer px-5 py-6 text-sm font-bold uppercase tracking-[0.12em] text-[#e5c785] md:px-7">{selected === 4 ? "Race 4 · Full results & heat times" : `Race ${selected} · Full qualifying results`}</summary>
            <div className="px-5 pb-6 md:px-7">
              <p className="mb-5 text-sm leading-6 text-white/55">{selected === 4 ? "All times in seconds. Final / placing includes the classification runs for pilots outside the title-deciding final." : "Official qualifying times in seconds, including any penalties recorded in the race classification."}</p>
              <div role="region" aria-label={`Race ${selected} detailed results, scroll for all columns`} tabIndex={0} className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-[#d4b16a]">
                <table className={`w-full text-left text-sm ${selected === 4 ? "min-w-[950px]" : "min-w-[540px]"}`}>
                  <caption className="sr-only">Race {selected} qualifying{selected === 4 ? ", heat times and final classification" : ""}</caption>
                  <thead className="border-y border-white/15 text-[9px] uppercase tracking-[0.1em] text-white/50"><tr>{["Qual. rank", "Pilot", "Qualifying", "Q bonus", ...(selected === 4 ? ["Quarter-final", "Semi-final", "Final / placing", "Race rank", "Race points"] : [])].map(label => <th key={label} scope="col" className="px-3 py-4">{label}</th>)}</tr></thead>
                  <tbody>{qualifying.map(pilot => <tr key={pilot.number} className={`border-b border-white/10 ${pilot.number === 77 ? "text-[#e5c785]" : "text-white/75"}`}>
                    <td className="px-3 py-4">{pilot.qualifyingRanks[selected - 1]}</td><th scope="row" className="whitespace-nowrap px-3 py-4 text-left font-medium">{pilot.name}</th><td className="px-3 py-4 tabular-nums">{pilot.qualifyingTimes[selected - 1]}</td><td className="px-3 py-4">+{pilot.qualifyingPoints[selected - 1]}</td>
                    {selected === 4 && <><td className="px-3 py-4 tabular-nums">{pilot.quarterFinal}</td><td className="px-3 py-4 tabular-nums">{pilot.semiFinal}</td><td className="px-3 py-4 tabular-nums">{pilot.final}</td><td className="px-3 py-4">{pilot.finalRank}</td><td className="px-3 py-4">+{pilot.racePoints[3]}</td></>}
                  </tr>)}</tbody>
                </table>
              </div>
              <a href={round.official} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-xs uppercase tracking-[0.1em] text-white/65 hover:text-[#e5c785]">AIR RACE X official results ↗</a>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
