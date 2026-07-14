"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/#top", accent: false },
  { label: "Story", href: "/#story", accent: false },
  { label: "Patrick", href: "/#patrick", accent: false },
  { label: "AIR RACE X", href: "/#airracex", accent: false },
  { label: "Aerobatics", href: "/#aerobatics", accent: false },
  { label: "Hangar", href: "/hangar", accent: false },
  { label: "Media", href: "/#media", accent: false },
  { label: "Arcade", href: "/arcade", accent: true },
  { label: "Contact", href: "/#contact", accent: false },
] as const;

export default function StickyNav() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
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
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
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
        </nav>
      </div>
    </header>
  );
}