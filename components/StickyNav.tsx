export default function StickyNav() {
    const links = [
      ["Home", "#top"],
      ["Story", "#story"],
      ["Patrick", "#patrick"],
      ["Air Race X", "#airracex"],
      ["Aerobatics", "#aerobatics"],
      ["Hangar", "#hangar"],
      ["Media", "#media"],
      ["Contact", "#contact"],
    ];
  
    return (
      <header className="fixed left-0 top-0 z-[9999] w-full bg-black/35 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 text-white">
          <a
            href="#top"
            className="text-xs font-black uppercase tracking-[0.35em] text-white"
          >
            Patrick Davidson
          </a>
  
          <nav className="hidden items-center gap-7 md:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-[11px] uppercase tracking-[0.25em] text-white/75 transition hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    );
  }