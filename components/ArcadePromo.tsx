import Link from "next/link";

export default function ArcadePromo() {
  return (
    <section className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-6 md:px-12 md:py-28 lg:px-20">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#070707]">
        <div className="grid min-h-[560px] lg:grid-cols-[1fr_1.15fr]">
          <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-14 lg:px-16">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-lime-400">
              Team 77 Arcade
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Think you can fly the course?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/55 md:text-lg">
              Take control of the Team 77 Edge 540 and fly through the
              pylons. Avoid a strike, clear as many gates as possible and
              earn your place on the world leaderboard.
            </p>

            <div className="mt-9">
              <Link
                href="/arcade"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-lime-400 px-8 text-sm font-black uppercase tracking-[0.22em] text-black transition hover:scale-[1.02] hover:bg-lime-300"
              >
                Play Pylon Challenge
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/35">
              <span>Mobile friendly</span>
              <span>Global leaderboard</span>
              <span>Free to play</span>
            </div>
          </div>

          <div className="relative min-h-[390px] overflow-hidden border-t border-white/10 bg-[#07111f] lg:min-h-full lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#112942] via-[#07111f] to-black" />

            <div className="absolute inset-0 opacity-30">
              {Array.from({ length: 12 }).map((_, index) => (
                <div
                  key={index}
                  className="absolute h-px w-24 bg-white/30"
                  style={{
                    left: `${(index * 19) % 90}%`,
                    top: `${12 + ((index * 31) % 76)}%`,
                  }}
                />
              ))}
            </div>

            <div className="absolute left-6 top-6 rounded-xl bg-black/45 px-5 py-4 backdrop-blur-sm sm:left-8 sm:top-8">
              <p className="text-xl font-black uppercase">
                Gates 11
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                370 KM/H
              </p>
            </div>

            <div className="absolute left-[18%] top-0 h-[38%] w-10 overflow-hidden border-x border-black/30 sm:w-12">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-8 ${
                    index % 2 === 0 ? "bg-red-600" : "bg-white"
                  }`}
                />
              ))}
            </div>

            <div className="absolute bottom-0 right-[15%] h-[40%] w-10 overflow-hidden border-x border-black/30 sm:w-12">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className={`h-8 ${
                    index % 2 === 0 ? "bg-red-600" : "bg-white"
                  }`}
                />
              ))}
            </div>

            <div className="absolute left-[48%] top-[50%] h-20 w-36 -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] drop-shadow-2xl sm:h-24 sm:w-44">
              <div className="absolute left-[12%] top-1/2 h-5 w-[75%] -translate-y-1/2 rounded-full bg-white" />

              <div className="absolute right-0 top-1/2 h-7 w-10 -translate-y-1/2 rounded-r-full bg-red-600" />

              <div className="absolute left-[45%] top-1/2 h-full w-10 -translate-x-1/2 -translate-y-1/2 bg-white [clip-path:polygon(35%_0,65%_0,100%_50%,65%_100%,35%_100%,0_50%)]" />

              <div className="absolute left-[4%] top-1/2 h-12 w-7 -translate-y-1/2 bg-lime-400 [clip-path:polygon(30%_0,70%_0,100%_50%,70%_100%,30%_100%,0_50%)]" />

              <div className="absolute left-[19%] top-1/2 h-2 w-[56%] -translate-y-1/2 bg-lime-400" />

              <div className="absolute left-[46%] top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-[10px] font-black text-black">
                77
              </div>
            </div>

            <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.22em] text-white/40 sm:bottom-9 sm:left-9 sm:right-9">
              <span>Pylon Challenge</span>
              <span>Team 77</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
