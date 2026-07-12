"use client";

import { useState } from "react";

export default function StickyNav() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#top"],
    ["Story", "#story"],
    ["Patrick", "#patrick"],
    ["AIR RACE X", "#airracex"],
    ["Aerobatics", "#aerobatics"],
    ["Hangar", "#hangar"],
    ["Media", "#media"],
    ["Arcade", "/arcade", true],
    ["Contact", "#contact"],
  ] as const;

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">

        <a
          href="#top"
          className="text-xs font-black uppercase tracking-[0.35em] text-white"
        >
          Patrick Davidson
        </a>

      {/* Desktop */}
<nav className="hidden items-center gap-7 md:flex">
  {links.map(([label, href, external]) => (
    <a
      key={label}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`text-[11px] uppercase tracking-[0.25em] transition ${
        label === "Arcade"
          ? "font-black text-[#62ff00] hover:text-white"
          : "text-white/75 hover:text-white"
      }`}
    >
      {label}
    </a>
  ))}
</nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle Menu"
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

      {/* Mobile Menu */}
<div
  className={`overflow-hidden bg-black/95 transition-all duration-300 md:hidden ${
    open ? "max-h-[600px]" : "max-h-0"
  }`}
>
  <nav className="flex flex-col px-6 py-6">
    {links.map(([label, href, external]) => (
      <a
        key={label}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={() => setOpen(false)}
        className={`border-b border-white/10 py-4 text-sm uppercase tracking-[0.3em] transition ${
          label === "Arcade"
            ? "font-black text-[#62ff00]"
            : "text-white/80 hover:text-[#62d6aa]"
        }`}
      >
        {label}
      </a>
    ))}
  </nav>
</div>
    </header>
  );
}