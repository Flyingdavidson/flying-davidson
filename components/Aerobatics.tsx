import Image from "next/image";

export default function Aerobatics() {
  return (
    <section id="aerobatics" className="bg-[#f4f1eb] text-black">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-8 py-20 md:grid-cols-2">
        <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/aerobatics/aerobatics-planning.jpg"
            alt="Aerobatic display planning sketches"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-red-600/70">
            Aerobatics
          </p>

          <h2 className="max-w-2xl text-5xl font-extralight leading-[1.08] tracking-tight md:text-7xl">
            Every display
            <br />
            begins with
            <br />
            a sketch.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
            Before the smoke, the speed and the applause, every manoeuvre starts
            on paper. Each climb, roll and recovery is imagined, planned and
            refined before the wheels leave the ground.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-y border-black/10 py-8">
            <div>
              <p className="text-4xl font-black">6×</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                South African Champion
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">12</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                First Competition Win
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">Youngest</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                SA Aerobatic Champion
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">FAI</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                World Championship Competitor
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
            Six South African titles. A champion before most pilots had earned
            their licence. Still inspiring crowds decades later.
          </p>

          <a
            href="/aerobatics"
            className="mt-10 inline-flex items-center gap-6 border border-red-600 px-7 py-4 text-xs uppercase tracking-[0.35em] text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            Explore Aerobatics <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}