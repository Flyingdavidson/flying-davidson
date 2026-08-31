"use client";

import Link from "next/link";
import { useRef, useState } from "react";

const links = [
  { label: "Home", href: "/#top", accent: false },
  { label: "Story", href: "/#story", accent: false },
  { label: "Patrick", href: "/#patrick", accent: false },
  { label: "AIR RACE X", href: "/#airracex", accent: false },
  { label: "Aerobatics", href: "/#aerobatics", accent: false },
  { label: "Hangar", href: "/hangar", accent: false },
  { label: "Media", href: "/#media", accent: false },
  { label: "Merch", href: "/merch", accent: false },
] as const;

const arcadeLinks = [
  { label: "All Games", href: "/arcade" },
  { label: "Pylon Challenge", href: "/arcade/pylon-challenge" },
  { label: "Cockpit Challenge", href: "/arcade/cockpit-challenge" },
] as const;

export default function StickyNav() {
  const [open, setOpen] = useState(false);
  const desktopArcadeRef = useRef<HTMLDetailsElement | null>(null);
  const mobileArcadeRef = useRef<HTMLDetailsElement | null>(null);

  function closeMenu() {
    setOpen(false);
    desktopArcadeRef.current?.removeAttribute("open");
    mobileArcadeRef.current?.removeAttribute("open");
  }

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <Link
          href="/#top"
          onClick={closeMenu}
          className="text-xs font-black uppercase tracking-[0.35em] text-white"
        >
          Patrick Davidson
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {links.map(({ label, href, accent }) => (
            <Link
              key={label}
              href={href}
              className={`text-[11px] uppercase tracking-[0.25em] transition ${
                accent
                  ? "font-black text-[#62ff00] hover:text-white"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}

          <details ref={desktopArcadeRef} className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-[11px] font-black uppercase tracking-[0.25em] text-[#62ff00] transition hover:text-white [&::-webkit-details-marker]:hidden">
              Arcade
              <span
                aria-hidden="true"
                className="text-[9px] transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>

            <div className="absolute right-0 top-full pt-5">
              <div className="w-64 overflow-hidden rounded-2xl border border-white/10 bg-black/95 p-2 shadow-2xl backdrop-blur-xl">
                {arcadeLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      desktopArcadeRef.current?.removeAttribute("open")
                    }
                    className={`block rounded-xl px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] transition hover:bg-white/10 hover:text-white ${
                      index === 0 ? "text-white/45" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>

          <Link
            href="/#contact"
            className="text-[11px] uppercase tracking-[0.25em] text-white/75 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            className={`h-0.5 w-6 bg-white transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open ? true : undefined}
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-300 md:hidden ${
          open ? "max-h-[700px]" : "max-h-0 border-transparent"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="flex flex-col px-6 py-6"
        >
          {links.map(({ label, href, accent }) => (
            <Link
              key={label}
              href={href}
              onClick={closeMenu}
              className={`border-b border-white/10 py-4 text-sm uppercase tracking-[0.3em] transition ${
                accent
                  ? "font-black text-[#62ff00] hover:text-white"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}

          <details ref={mobileArcadeRef} className="group border-b border-white/10">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-black uppercase tracking-[0.3em] text-[#62ff00] [&::-webkit-details-marker]:hidden">
              Arcade
              <span
                aria-hidden="true"
                className="text-xs transition-transform group-open:rotate-180"
              >
                ▾
              </span>
            </summary>

            <div className="mb-3 border-l border-[#62ff00]/40 pl-5">
              {arcadeLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-xs font-bold uppercase tracking-[0.24em] text-white/60 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <Link
            href="/#contact"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 text-sm uppercase tracking-[0.3em] text-white/80 transition hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
