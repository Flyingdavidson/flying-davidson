import type { Metadata } from "next";
import Link from "next/link";
import PressAccess from "@/components/press/PressAccess";
import PressLogout from "@/components/press/PressLogout";
import { getPressAccess, pressSourceLabel } from "@/lib/press/access";
import { getPressStats } from "@/lib/press/analytics";
import { findPressAsset } from "@/lib/press/assets";
import { isPressPublished, PRESS_PUBLICATION_LABEL } from "@/lib/press/publication";
import styles from "../press.module.css";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Private Press Dashboard",
  description: "Private media activity for Team 77.",
  robots: { index: false, follow: false, noarchive: true },
  openGraph: { title: "Private Press Dashboard", description: "Team 77 media management", images: [] },
};

function localTime(value: unknown) {
  return new Intl.DateTimeFormat("en-ZA", { dateStyle: "medium", timeStyle: "short", timeZone: "Africa/Johannesburg" }).format(new Date(String(value)));
}

export default async function PressDashboard() {
  if ((await getPressAccess())?.role !== "admin") return <PressAccess admin />;
  let stats;
  try { stats = await getPressStats(); }
  catch { return <main className={styles.dashboard}><div><h1>Press activity</h1><p>Reporting is temporarily unavailable. The media page and downloads remain available.</p><Link href="/press">Open press room ↗</Link></div></main>; }
  return <main className={styles.dashboard}><div>
    <p className={styles.eyebrow}>Private / Greg Ritz</p>
    <h1>Your press room, at a glance.</h1>
    <p>{isPressPublished() ? "The press room is public." : `Private access now. Public launch: ${PRESS_PUBLICATION_LABEL}.`}</p>
    <div className={styles.actions}><Link href="/press" className={styles.primary}>Preview press room ↗</Link><a href="/press/manage" className={styles.secondary}>Refresh activity</a><PressLogout /></div>
    <div className={styles.statsGrid}>{[
      ["Page views",stats.totals.views],["Browsers seen",stats.totals.visitors],["Files served",stats.totals.downloads],["Contact clicks",stats.totals.contact_clicks],
    ].map(([label,value]) => <div className={styles.stat} key={String(label)}><strong>{Number(value).toLocaleString("en-ZA")}</strong><span>{String(label)}</span></div>)}</div>
    <p>Activity is attributed to an invitation or a shared source link. A forwarded link keeps its original source. Browser counts are estimates; file requests do not prove that a file was saved or a story was published. Your admin visits are excluded.</p>
    <h2>Newsroom activity</h2>
    <div className={styles.tableWrap}><table><thead><tr><th>Source</th><th>Views</th><th>Browsers</th><th>Files served</th><th>Contact clicks</th><th>Last activity · SAST</th></tr></thead><tbody>
      {stats.sources.map((row) => <tr key={String(row.source)}><td>{pressSourceLabel(String(row.source))}</td><td>{Number(row.views)}</td><td>{Number(row.visitors)}</td><td>{Number(row.downloads)}</td><td>{Number(row.contact_clicks)}</td><td>{localTime(row.last_activity)}</td></tr>)}
      {!stats.sources.length && <tr><td colSpan={6}>No newsroom activity has been recorded yet.</td></tr>}
    </tbody></table></div>
    <h2>Resources requested</h2>
    <p>Cockpit video plays: {Number(stats.totals.video_plays).toLocaleString("en-ZA")}. Counted once per page visit when playback starts; video downloads appear in the table below.</p>
    <div className={styles.tableWrap}><table><thead><tr><th>Resource</th><th>Files served</th></tr></thead><tbody>{stats.assets.map((row) => <tr key={String(row.asset)}><td>{findPressAsset(String(row.asset))?.title ?? String(row.asset)}</td><td>{Number(row.downloads)}</td></tr>)}{!stats.assets.length && <tr><td colSpan={2}>No files have been requested yet.</td></tr>}</tbody></table></div>
    <h2>Early-access registrations</h2>
    <p>Names and email addresses are self-reported. The time records acknowledgement of the embargo. Keep this information within Team 77.</p>
    <div className={styles.tableWrap}><table><thead><tr><th>Name</th><th>Email</th><th>Invitation</th><th>Views</th><th>Files served</th><th>Accepted · SAST</th></tr></thead><tbody>{stats.registrations.map((row,index) => <tr key={index}><td>{String(row.name)}</td><td>{String(row.email)}</td><td>{pressSourceLabel(String(row.source))}</td><td>{Number(row.views)}</td><td>{Number(row.downloads)}</td><td>{localTime(row.accepted_at)}</td></tr>)}{!stats.registrations.length && <tr><td colSpan={6}>No early-access registrations yet.</td></tr>}</tbody></table></div>
  </div></main>;
}
