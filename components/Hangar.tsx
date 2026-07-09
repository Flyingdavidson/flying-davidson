import Image from "next/image";

export default function Hangar() {
  return (
    <section
      id="hangar"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Mobile */}
<div className="absolute inset-0 md:hidden">
  <Image
    src="/images/hangar/hangar-mobile.jpg"
    alt="Inside Patrick Davidson's hangar"
    fill
    priority
    sizes="100vw"
    className="object-cover"
  />
</div>

{/* Desktop */}
<div className="absolute inset-0 hidden md:block">
  <Image
    src="/images/hangar/redbull-one-wing.jpg"
    alt="Inside Patrick Davidson's hangar"
    fill
    priority
    sizes="100vw"
    className="object-cover object-center"
  />
</div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" />
      <div className="absolute right-0 top-0 h-80 w-80 bg-black/55 blur-3xl md:hidden" />

      <div className="relative z-10 flex min-h-screen items-end px-6 py-24 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-yellow-500/80 md:tracking-[0.55em]">
            Inside The Hangar
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
            The Fleet
            <br />
            Lives Here.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-white/70 md:max-w-2xl md:text-xl md:leading-9">
            Step inside Patrick Davidson’s hangar and explore the aircraft behind
            the performances, race wins and world-class displays.
          </p>

          <a
            href="/hangar"
            className="mt-12 inline-flex w-full items-center justify-center gap-6 border border-yellow-500/70 px-6 py-4 text-xs uppercase tracking-[0.3em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black sm:w-auto md:tracking-[0.35em]"
          >
            Enter The Hangar <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}