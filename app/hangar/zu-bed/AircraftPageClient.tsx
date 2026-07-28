"use client";

import type { AircraftData } from "@/app/types/aircraft";
import Hero from "@/components/aircraft/Hero";
import Gallery from "@/components/media/Gallery";

type Props = {
  aircraft: AircraftData;
  gallery: string[];
};

export default function AircraftPageClient({ aircraft, gallery }: Props) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero aircraft={aircraft} />

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
                From America To South Africa
              </p>

              <h2 className="mt-5 whitespace-pre-line text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
                {aircraft.introTitle}
              </h2>
            </div>

            <p className="text-lg leading-9 text-white/70">
              {aircraft.intro}
            </p>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aircraft.specs.map((spec) => (
              <Spec key={spec.label} title={spec.label} value={spec.value} />
            ))}
          </div>
        </div>
      </section>

      <Gallery title="Super Stearman Gallery" subtitle="ZU-BED" images={gallery} />

      <section className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
              Two Lives. One Aircraft.
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
              Built To Teach.
              <br />
              Rebuilt To Perform.
            </h2>
          </div>

          <div className="space-y-8 text-lg leading-9 text-white/70">
            <p>
              The Boeing-Stearman Model 75 was created to introduce young
              military pilots to the fundamentals of flight. Its open cockpit,
              conventional landing gear, fabric-covered wooden wings and
              welded-steel fuselage made it simple, strong and honest — an
              aircraft that rewarded precision and exposed every mistake.
            </p>

            <p>
              After the Second World War, many Stearmans found an entirely new
              purpose. Surplus airframes moved into agricultural work, where
              larger engines gave them the strength to carry heavier loads.
              A select few evolved again into Super Stearmans: powerful
              aerobatic machines built for smoke, sound and spectacle.
            </p>

            <p>
              With a 450 hp Pratt &amp; Whitney R-985 Wasp Junior in place of
              the original trainer powerplant, ZU-BED has roughly twice the
              power associated with a standard wartime Stearman. That
              transformation gave The Magic One the performance required for
              its American display career and the wing-walking act that made it
              memorable.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center md:px-10">
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            The Davidson Chapter
          </p>

          <h2 className="mt-5 text-5xl font-black uppercase italic leading-[0.9] md:text-7xl">
            The Story
            <br />
            Crossed An Ocean.
          </h2>

          <div className="mx-auto mt-10 max-w-4xl space-y-7 text-lg leading-9 text-white/70">
            <p>
              When its American chapter closed, the aircraft crossed the
              Atlantic and began another life in South Africa as ZU-BED. The
              wing-walking structure remained part of the airframe — a physical
              reminder of Gene and Cheryl Rae Littlefield and the performances
              that had defined its earlier career.
            </p>

            <p>
              By the 2010 Port Elizabeth Airshow, ZU-BED was back in front of a
              crowd with Stu Davidson at the controls. It had travelled from
              the American airshow circuit to the Davidson family hangar,
              carrying its power, theatre and history with it.
            </p>

            <p>
              Today, ZU-BED connects two eras of aviation: the disciplined
              world of the wartime trainer and the fearless creativity of the
              classic American airshow. It was built to teach, rebuilt to
              perform and preserved so both stories can still be heard every
              time the R-985 comes to life.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10">
        <a
          href="/hangar"
          className="group mx-auto flex max-w-7xl flex-col gap-6 px-6 py-16 transition hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between md:px-10"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/35">
              Continue Exploring
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase italic md:text-5xl">
              Explore The Fleet
            </h2>
          </div>

          <div className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.3em] text-black transition group-hover:bg-yellow-400">
            View All Aircraft
            <span aria-hidden="true">→</span>
          </div>
        </a>
      </section>
    </main>
  );
}

function Spec({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-yellow-400/40 hover:bg-white/[0.05]">
      <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
        {title}
      </p>

      <p className="mt-4 text-3xl font-black">{value}</p>
    </div>
  );
}
