import Image from "next/image";

export default function Story() {
  return (
    <section
      id="story"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <Image
        src="/images/story/before-the-sky2.jpg"
        alt="Patrick Davidson planning a flight sequence"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      <div className="relative z-10 flex min-h-screen items-center px-8 py-20 md:px-16 lg:px-24">
        <div className="max-w-2xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
            Before The Sky
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
            Every perfect
            <br />
            manoeuvre starts
            <br />
            with a single
            <br />
            line on paper.
          </h2>

          <div className="mt-10 h-px w-24 bg-yellow-500/70" />

          <div className="mt-10 max-w-xl space-y-6 text-lg leading-8 text-white/75">
            <p>
              Long before spectators look up, Patrick is already flying the
              sequence in his mind.
            </p>

            <p>
              Every figure is drawn, refined and rehearsed until every input
              becomes instinct.
            </p>

            <p className="text-white/90">
              The performance lasts minutes. The preparation lasts a lifetime.
            </p>
          </div>

          <p className="mt-12 text-xs uppercase tracking-[0.35em] text-white/55">
            Scroll to discover ↓
          </p>
        </div>
      </div>
    </section>
  );
}