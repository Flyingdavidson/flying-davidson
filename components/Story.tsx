import Image from "next/image";

export default function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#090604] text-white"
    >
      {/* Workbench-style background */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_40%),radial-gradient(circle_at_20%_20%,rgba(255,190,60,0.08),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_32%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto max-w-7xl px-8 py-20 md:px-16 lg:px-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left column */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.55em] text-yellow-500/80">
              The Story
            </p>

            <h2 className="text-5xl font-black uppercase italic leading-[0.88] md:text-7xl">
              Built Around
              <br />
              Aviation.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-white/65">
              Patrick Davidson didn&apos;t discover aviation. He grew up
              surrounded by it. Long before Red Bull, international racing and
              championship titles, flying was already part of the family story.
            </p>

            <div className="mt-10">
              <PhotoCard
                src="/images/story/pat-newspaper.jpg"
                alt="Patrick Davidson newspaper clipping"
                rotate="-rotate-2"
                height="h-[290px] md:h-[360px]"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            <StoryText
              year="Early Years"
              title="The Headlines Started Early."
              text="At just 11 years old Patrick was already competing in junior aerobatic competitions. Local newspapers were already telling the story of a young pilot with extraordinary potential."
            />

            <div className="grid gap-8 md:grid-cols-2">
              <PhotoCard
                src="/images/story/stearman-family.jpg"
                alt="Patrick Davidson and Stuart Davidson"
                rotate="rotate-2"
                height="h-[230px] md:h-[280px]"
              />

              <PhotoCard
                src="/images/story/harvard-young-pat.jpg"
                alt="Young Patrick on the Harvard"
                rotate="-rotate-1"
                height="h-[230px] md:h-[280px]"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <StoryText
                year="Family"
                title="Flying Was Home."
                text="Growing up alongside his father, Stuart Davidson, every weekend around aircraft became another lesson in precision, discipline and respect for aviation."
              />

              <StoryText
                year="The Dream"
                title="Ready For Take-off."
                text="By the time most teenagers were dreaming of their first car, Patrick was already laying the foundations for a life shaped by flying."
              />
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-yellow-500/30 pt-8">
          <p className="max-w-5xl text-2xl font-black uppercase italic leading-tight text-white md:text-4xl">
            From family hangars to international air racing,
            <span className="text-yellow-400">
              {" "}
              the pursuit has always been precision.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function PhotoCard({
  src,
  alt,
  rotate,
  height,
}: {
  src: string;
  alt: string;
  rotate: string;
  height: string;
}) {
  return (
    <div
      className={`group bg-white p-3 shadow-2xl transition duration-500 hover:rotate-0 hover:scale-[1.02] ${rotate}`}
    >
      <div className={`relative overflow-hidden bg-black ${height}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
    </div>
  );
}

function StoryText({
  year,
  title,
  text,
}: {
  year: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="mb-2 text-xs uppercase tracking-[0.4em] text-yellow-500/80">
        {year}
      </p>

      <h3 className="text-3xl font-black uppercase italic md:text-4xl">
        {title}
      </h3>

      <p className="mt-4 text-base leading-7 text-white/65">{text}</p>
    </div>
  );
}