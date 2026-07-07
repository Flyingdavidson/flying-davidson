import Image from "next/image";

export default function MeetPatrick() {
  return (
    <section
      id="patrick"
      className="bg-[#f4f1eb] px-8 py-20 text-black md:min-h-screen"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:min-h-[calc(100vh-10rem)] md:grid-cols-2">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-black/35">
            Meet Patrick
          </p>

          <h2 className="max-w-2xl text-5xl font-extralight leading-[1.08] tracking-tight md:text-7xl">
            Flying was never just an ambition.
            <br />
            <span className="font-light">It became a way of life.</span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-black/65">
            For more than three decades, Patrick Davidson has dedicated his life
            to precision flying. With over 5,500 flying hours, every flight is
            built on preparation, discipline and trust.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-8 border-y border-black/10 py-10 md:grid-cols-4">
            <div>
              <p className="text-4xl font-black">2025</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                ARX Champion
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">2026</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                ARX Champion
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">5,500+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                Flying Hours
              </p>
            </div>

            <div>
              <p className="text-4xl font-black">30+</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-black/45">
                Years Flying
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[620px] overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/patrick/meet-patrick.jpg"
            alt="Patrick Davidson walking between aircraft"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}