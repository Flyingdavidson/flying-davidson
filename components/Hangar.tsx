import Image from "next/image";

export default function Hangar() {
  return (
    <section id="hangar" className="bg-black text-white">
      <div className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/hangar/redbull-one-wing.jpg"
          alt="Patrick Davidson sitting on Red Bull One"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-20 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              Inside The Hangar
            </p>

            <h2 className="text-6xl font-black uppercase leading-[0.9] tracking-tight md:text-8xl">
              Red Bull
              <br />
              One.
            </h2>

            <p className="mt-4 text-xl text-yellow-400">
              GameBird GB1
            </p>

            <p className="mt-1 text-lg text-white/75">
              Unlimited Aerobatic Aircraft
            </p>

            <div className="mt-8 border-l border-yellow-500/60 pl-6">
              <p className="text-sm uppercase tracking-[0.35em] text-white/80">
                Built for the extreme.
                <br />
                Trusted every day.
              </p>
            </div>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/70">
              The GameBird GB1 is Patrick’s unlimited aerobatic aircraft —
              purpose-built for precision, power and the kind of flying that
              turns a display into a memory.
            </p>

            <div className="mt-12 grid gap-6 border-y border-white/10 py-10 sm:grid-cols-2 md:grid-cols-5">
              <div>
                <p className="text-4xl font-black">426</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  km/h
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">315</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Horsepower
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">400°</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Roll Rate / Sec
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">+10 / -10</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  G Load Limits
                </p>
              </div>

              <div>
                <p className="text-4xl font-black">±700</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                  kg Race Ready
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-xl text-lg italic leading-8 text-white/75">
              “Every aircraft develops a personality. Red Bull One has become an
              extension of Patrick himself.”
            </p>

            <a
              href="/hangar"
              className="mt-10 inline-flex items-center gap-6 border border-yellow-500/70 px-7 py-4 text-xs uppercase tracking-[0.35em] text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
            >
              Explore The Aircraft <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}