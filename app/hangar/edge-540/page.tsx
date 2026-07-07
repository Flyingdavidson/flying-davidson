import Image from "next/image";
import Link from "next/link";

const gallery = Array.from({ length: 15 }, (_, i) => {
  const number = String(i + 1).padStart(2, "0");
  return `/images/edge/edge${number}.jpg`;
});

export default function Edge540Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative min-h-screen overflow-hidden">
        <Image
          src="/images/edge/edge01.jpg"
          alt="Edge 540 V3"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

        <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
          <div className="max-w-5xl">
            <Link
              href="/hangar"
              className="mb-10 inline-block text-xs uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
            >
              ← Back to The Fleet
            </Link>

            <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              Air Race X Machine
            </p>

            <h1 className="text-6xl font-black uppercase italic leading-[0.85] tracking-tight md:text-8xl">
              Edge
              <br />
              540 V3.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
              Built for speed, precision and repeatability. Patrick’s Edge 540
              V3 is the machine behind Team 77’s AIR RACE X campaign.
            </p>
          </div>
        </div>
      </section>

      <section className="px-8 py-24 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
            Aircraft Gallery
          </p>

          <h2 className="text-5xl font-black uppercase leading-[0.9] md:text-7xl">
            Precision
            <br />
            In Detail.
          </h2>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, index) => (
              <div
                key={src}
                className={`group relative overflow-hidden border border-white/10 bg-white/[0.03] ${
                  index === 0 || index === 7 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="relative h-[320px]">
                  <Image
                    src={src}
                    alt={`Edge 540 V3 gallery image ${index + 1}`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

                <p className="absolute bottom-5 left-5 text-xs uppercase tracking-[0.3em] text-white/60 opacity-0 transition group-hover:opacity-100">
                  Edge 540 V3 / {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}