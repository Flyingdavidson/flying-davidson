import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import StickyNav from "@/components/StickyNav";
import ScrollProgress from "@/components/ScrollProgress";
import Footer from "@/components/Footer";

import "./globals.css";

const siteUrl = "https://www.flyingdavidson.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Flying Davidson | Patrick Davidson",
    template: "%s | Flying Davidson",
  },

  description:
    "The official website of Patrick Davidson — Red Bull athlete, aerobatic pilot, AIR RACE X champion and international airshow performer.",

  applicationName: "Flying Davidson",

  authors: [
    {
      name: "Patrick Davidson",
      url: siteUrl,
    },
  ],

  creator: "Flying Davidson",
  publisher: "Flying Davidson",

  keywords: [
    "Patrick Davidson",
    "Flying Davidson",
    "Red Bull athlete",
    "aerobatic pilot",
    "air race pilot",
    "AIR RACE X",
    "Team 77",
    "airshow pilot",
    "South African aerobatic pilot",
    "Edge 540 V3",
    "GameBird GB1",
    "Red Bull One",
    "Hawker Sea Fury",
    "aerobatics",
    "aviation",
  ],

  category: "Aviation",

  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "Flying Davidson",
    title: "Flying Davidson | Patrick Davidson",
    description:
      "The official website of Patrick Davidson — Red Bull athlete, aerobatic pilot, AIR RACE X champion and international airshow performer.",
    images: [
      {
        url: "/images/hangar/redbull-one-wing1.jpg",
        width: 1200,
        height: 630,
        alt: "Patrick Davidson flying Red Bull One",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Flying Davidson | Patrick Davidson",
    description:
      "The official website of Patrick Davidson — Red Bull athlete, aerobatic pilot, AIR RACE X champion and international airshow performer.",
    images: ["/images/hangar/redbull-one-wing1.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-ZA"
      data-scroll-behavior="smooth"
      className="h-full antialiased"
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[10000] -translate-y-24 bg-white px-4 py-3 text-sm font-bold text-black transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <StickyNav />
        <ScrollProgress />

        <div id="main-content" className="contents">
          {children}
        </div>

        <Footer />

        <script
          id="flying-davidson-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                url: siteUrl,
                name: "Flying Davidson",
                description:
                  "The official website of Patrick Davidson, Red Bull athlete, aerobatic pilot and AIR RACE X champion.",
                inLanguage: "en-ZA",
              },
              {
                "@type": "Person",
                "@id": `${siteUrl}/#patrick-davidson`,
                name: "Patrick Davidson",
                url: siteUrl,
                image: `${siteUrl}/images/media-kit/patrick-davidson-portrait.jpg`,
                jobTitle: "Professional aerobatic and air race pilot",
                nationality: {
                  "@type": "Country",
                  name: "South Africa",
                },
                sameAs: [
                  "https://www.instagram.com/flying_davidson",
                  "https://youtube.com/@flyingdavidson",
                ],
              },
            ],
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6X0VWEDYWG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6X0VWEDYWG');
          `}
        </Script>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
