"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function SiteAnalytics() {
  const pathname = usePathname();
  // Press-room activity stays in the site's own database. Invitation
  // credentials and registration details never go to third-party analytics.
  if (pathname === "/press" || pathname.startsWith("/press/")) return null;
  return <>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-6X0VWEDYWG" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6X0VWEDYWG');
    `}</Script>
    <Analytics beforeSend={(event) => new URL(event.url).pathname.startsWith("/press") ? null : event} />
    <SpeedInsights />
  </>;
}
