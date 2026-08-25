export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs leading-6 text-white/45 md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 Patrick Davidson Aerobatics (Pty) Ltd. All rights reserved.
        </p>
        <p>
          Designed, developed and built by{" "}
          <a
            href="https://hola4.co.za/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline decoration-white/20 underline-offset-4 transition hover:text-yellow-400 hover:decoration-yellow-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
          >
            hola4
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
