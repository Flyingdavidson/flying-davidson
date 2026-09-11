import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PressAccess from "@/components/press/PressAccess";
import PressInteractions from "@/components/press/PressInteractions";
import { getPressAccess } from "@/lib/press/access";
import { getPressContent } from "@/lib/press/storage";
import { isPressPublished, PRESS_PUBLICATION_LABEL } from "@/lib/press/publication";
import { photos } from "@/lib/press/assets";
import { cockpitVideo } from "@/lib/press/video";
import styles from "./press.module.css";

export const dynamic = "force-dynamic";

export async function generateMetadata(): Promise<Metadata> {
  const published = isPressPublished();
  const content = published ? await getPressContent() : null;
  const title = content?.headline ?? "Official Press Room";
  const description = content?.deck ?? "Official media resources and enquiries for Patrick Davidson and Team 77.";
  return {
    title, description,
    alternates: { canonical: "/press" },
    robots: { index: published, follow: published, noarchive: !published },
    openGraph: { title, description, url: "/press", type: "article", images: published ? [{ url: "/press/image/smoke-turn", width: 1800, height: 1200, alt: "Patrick Davidson’s Emotive race aircraft in flight" }] : [] },
    twitter: { card: published ? "summary_large_image" : "summary", title, description, images: published ? ["/press/image/smoke-turn"] : [] },
  };
}

export default async function PressPage() {
  const published = isPressPublished();
  const access = await getPressAccess();
  if (!published && !access) return <PressAccess />;
  const content = await getPressContent();
  const heroPhoto = photos.find((photo) => photo.id === "smoke-turn")!;
  const mobilePhoto = photos.find((photo) => photo.id === "vertical-turn")!;
  return <main className={styles.page}>
    <PressInteractions enabled={access?.role !== "admin"} />
    <div className={styles.roomHeader}>
      <Link href="/media/news">← Media / News</Link>
      <span>{published ? "Official press room" : "Private media access"}</span>
      {access?.role === "admin" && <Link href="/press/manage">Your dashboard ↗</Link>}
    </div>
    {!published && <div className={styles.embargo}><strong>Under embargo</strong><span>{PRESS_PUBLICATION_LABEL}</span></div>}
    <section className={styles.hero}>
      <div className={styles.heroDesktop}>
        <Image src="/press/image/smoke-turn" alt={heroPhoto.caption} fill unoptimized priority sizes="75vw" className={styles.heroPhoto} />
      </div>
      <div className={styles.heroMobile}>
        <Image src="/press/image/vertical-turn" alt={mobilePhoto.caption} fill unoptimized priority sizes="100vw" className={styles.mobilePhoto} />
      </div>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>AIR RACE X 2026 / Gqeberha, South Africa</p>
        <h1>{content.hero.line1}<span>{content.hero.line2}</span></h1>
        <p className={styles.lead}>{content.hero.intro}</p>
        <div className={styles.actions}>
          <a href="#release" className={styles.primary} data-press-action="release">Read the release <span aria-hidden="true">↓</span></a>
          <a download href="/press/download/complete-pack" className={styles.secondary}>Download media pack <span aria-hidden="true">↓</span></a>
        </div>
      </div>
    </section>
    <nav className={styles.sectionNav} aria-label="Press room sections">
      <a href="#downloads" data-press-action="downloads">Downloads</a>
      <a href="#photographs" data-press-action="photos">Photographs</a>
      <a href="#cockpit-video" data-press-action="video">Cockpit video</a>
      <a href="#release" data-press-action="release">The story</a>
      <a href="#contact" data-press-action="contact-section">Media enquiries</a>
    </nav>
    <section id="downloads" className={styles.downloads}>
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Official editorial resources</p><h2>Your story starts here.</h2></div><p>Ready for your newsroom.</p></div>
      <div className={styles.downloadGrid}>
        <article className={styles.downloadCard}><span className={styles.number}>01 / The story</span><h3>Press release</h3><p>The result, the background and the details your newsroom needs.</p><div className={styles.fileLinks}><a download href="/press/download/release-pdf">PDF ↓</a><a download href="/press/download/release-word">Word ↓</a><a download href="/press/download/release-text">Text ↓</a></div></article>
        <article className={styles.downloadCard}><span className={styles.number}>02 / The background</span><h3>Media pack</h3><p>Patrick’s profile, Emotive, the AIR RACE X format and interview angles.</p><div className={styles.fileLinks}><a download href="/press/download/media-pack-pdf">Six-page PDF ↓</a></div></article>
        <article className={styles.downloadCard}><span className={styles.number}>03 / Media files</span><h3>Photos &amp; footage</h3><p>The release, media pack, nine supplied photographs and captions in one ZIP. Download the cockpit video separately below.</p><div className={styles.fileLinks}><a download href="/press/download/complete-pack">Media ZIP · 23.2 MB ↓</a><a download href="/press/download/cockpit-video">Cockpit video · MP4 ↓</a></div></article>
      </div>
    </section>
    <section id="photographs" className={styles.photographs}>
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>The aircraft. The pilot. The detail.</p><h2>Pictures that tell the story.</h2></div><a download className={styles.textLink} href="/press/download/captions">Download all captions ↓</a></div>
      <p className={styles.sectionIntro}>Nine photographs supplied by Team 77 for editorial use. Download the original files individually, or get all nine in the media pack.</p>
      <div className={styles.photoGrid}>{photos.map((photo, index) => <figure key={photo.id} className={styles.photoCard}>
        <div className={styles.photoFrame}><Image src={`/press/image/${photo.id}`} alt={photo.caption} fill unoptimized sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" className={styles.galleryPhoto} /></div>
        <figcaption><div className={styles.photoTitle}><h3>{photo.title}</h3><span>{String(index + 1).padStart(2, "0")}</span></div><p id={`caption-${photo.id}`}>{photo.caption} {photo.credit}.</p><span className={styles.dimensions}>{photo.width.toLocaleString("en-ZA")} × {photo.height.toLocaleString("en-ZA")} px · JPG</span><div className={styles.photoActions}><a download href={`/press/download/${photo.id}`}>Download original ↓</a><button type="button" data-press-action="copy-caption" data-copy-target={`caption-${photo.id}`}>Copy caption</button></div></figcaption>
      </figure>)}</div>
      <p className={styles.usageNote}>Background photographs supplied by Team 77; these are not photographs of the finale result or celebrations. For photographer credit or further usage enquiries, contact Greg Ritz.</p>
    </section>
    <section id="cockpit-video" className={styles.cockpitVideo}>
      <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>Inside the cockpit / Team 77</p><h2>Watch the final cockpit run.</h2></div><a download className={styles.primary} href="/press/download/cockpit-video">Download HD video <span aria-hidden="true">↓</span></a></div>
      <p id="cockpit-video-description" className={styles.sectionIntro}>Ride on board with Patrick Davidson for the final AIR RACE X run. Watch the supplied footage here or download the full-HD MP4 for your coverage.</p>
      <video className={styles.videoPlayer} controls playsInline preload="none" poster="/press/image/final-run" width={1920} height={1080} aria-label="Patrick Davidson’s final AIR RACE X cockpit run" aria-describedby="cockpit-video-description" data-press-video="final-run">
        <source src="/press/video/final-run" type="video/mp4" />
        Your browser cannot play this video. Use the Download HD video link above.
      </video>
      <div className={styles.videoDetails}><span>{cockpitVideo.duration} · 1920 × 1080 · MP4 · {cockpitVideo.size}</span><span>Footage supplied by Team 77.</span></div>
      {!published && <p className={styles.usageNote}>Video is under the same embargo: {PRESS_PUBLICATION_LABEL}.</p>}
    </section>
    <section id="release" className={styles.story}>
      <aside className={styles.storyAside}><p className={styles.eyebrow}>Official press release</p><p>13 September 2026<br />Gqeberha, South Africa</p><button className={styles.secondary} type="button" data-press-action="copy-release" data-copy-target="press-release-copy">Copy release</button><a download className={styles.textLink} href="/press/download/release-pdf">Download PDF ↓</a></aside>
      <article id="press-release-copy" className={styles.storyBody}>
        {!published && <p className={styles.storyEmbargo}>Embargoed until {PRESS_PUBLICATION_LABEL}</p>}
        <h2>{content.headline}</h2><p className={styles.deck}>{content.deck}</p>
        {content.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        <p className={styles.ends}>ENDS</p>
        <p>Media enquiries: Greg Ritz · greg@flyingdavidson.com · +27 83 400 5858</p>
      </article>
    </section>
    <section className={styles.background}>
      <div><p className={styles.eyebrow}>Patrick Davidson</p><h2>From Gqeberha.<br />On the world stage.</h2><p>Red Bull pilot, six-time South African national aerobatic champion and Team 77’s number 77. Davidson’s career spans aerobatic competition, international display flying and the Red Bull Air Race Challenger Class.</p><a href="/media/biography" data-press-action="biography">Read Patrick’s biography ↗</a></div>
      <div><p className={styles.eyebrow}>Emotive / AIR RACE X sponsor</p><h2>Parts That Fly High.</h2><p>Emotive is a European automotive aftermarket group based in Zug, Switzerland. Its specialist brands serve independent workshops and distributors. Emotive renewed its support for Davidson’s 2026 AIR RACE X campaign.</p><a href="https://emotive.group/news/emotive-backs-world-champion-patrick-davidson-2026-air-race-x-championship" target="_blank" rel="noopener noreferrer" data-press-action="emotive">Meet Emotive ↗</a></div>
    </section>
    <section className={styles.broadcast}>
      <div><p className={styles.eyebrow}>Watch AIR RACE X</p><h2>The official finale.</h2><p>Real aircraft. Recorded flight data. An international competition brought together for the broadcast.</p></div>
      <a href="https://youtu.be/7y9WSJeDzEw" target="_blank" rel="noopener noreferrer" className={styles.primary} data-press-action="broadcast">Watch on YouTube ↗</a>
    </section>
    <section id="contact" className={styles.contact}>
      <div><p className={styles.eyebrow}>Interviews / Radio / Television / Editorial</p><h2>Put Patrick on air.</h2><p>Contact Greg Ritz for interviews with Patrick and Team 77, photographs and footage enquiries.</p><div className={styles.actions}><a href="mailto:greg@flyingdavidson.com?subject=Patrick%20Davidson%20media%20enquiry" className={styles.primary} data-press-action="email">Email Greg ↗</a><a href="tel:+27834005858" className={styles.secondary} data-press-action="phone">+27 83 400 5858</a></div></div>
      <div className={styles.contactDetails}><strong>Greg Ritz</strong><a href="mailto:greg@flyingdavidson.com" data-press-action="email">greg@flyingdavidson.com</a><div className={styles.socials}><a href="https://www.instagram.com/flying_davidson/" target="_blank" rel="noopener noreferrer" data-press-action="instagram">Instagram ↗</a><a href="https://www.facebook.com/flyingdavidson/" target="_blank" rel="noopener noreferrer" data-press-action="facebook">Facebook ↗</a><a href="https://www.youtube.com/@flyingdavidson" target="_blank" rel="noopener noreferrer" data-press-action="youtube">YouTube ↗</a></div><button type="button" data-press-action="copy-link">Copy press room link</button></div>
    </section>
    <p className={styles.measurementNote}>We record press-room visits, link clicks and file requests to understand which resources are useful. Early-access details are kept privately by Team 77.</p>
  </main>;
}
