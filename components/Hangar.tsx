import Image from "next/image";

export default function Hangar() {
  return (
    <section id="hangar" className="relative min-h-screen overflow-hidden bg-black text-white">
      <Image
        src="/images/hangar/redbull-one-wing.jpg"
        alt="Inside Patrick Davidson's hangar"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

      <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
            Inside The Hangar
          </p>

          <h2 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            The Fleet
            <br />
            Lives Here.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
            Step inside Patrick Davidson’s hangar and explore the aircraft behind
            the performances, race wins and world-class displays.
          </p>

          <a
            href="/hangar"
            className="mt-12 inline-flex items-center gap-6 border border-yellow-500/70 px-7 py-4 text-xs uppercase tracking-[0.35em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
          >
            Enter The Hangar <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}