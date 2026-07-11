import Script from "next/script";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://flyingdavidson.com";

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

  alternates: {
    canonical: "/",
  },

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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}

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