import Image from "next/image";

export default function MeetPatrick() {
  return (
    <section
      id="patrick"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <Image
        src="/images/patrick/meet-patrick.jpg"
        alt="Patrick Davidson"
        fill
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

      <div className="relative z-10 flex min-h-screen items-end px-8 py-24 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
            Meet Patrick
          </p>

          <h2 className="max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight md:text-7xl">
            Flying was never just an ambition, it became a way of life.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/70">
            Patrick Davidson is a professional display pilot, Red Bull athlete,
            aerobatic champion and 2025 AIR RACE X Champion.
          </p>

          <div className="mt-12 grid max-w-4xl gap-6 border-y border-white/10 py-10 sm:grid-cols-2 md:grid-cols-4">
            <Stat value="5,500+" label="Flying Hours" />
            <Stat value="30+" label="Years Flying" />
            <Stat value="6×" label="SA Aerobatic Champion" />
            <Stat value="2025" label="AIR RACE X Champion" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-black">{value}</p>
      <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}