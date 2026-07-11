"use client";

type Video = {
  title: string;
  file: string;
  poster?: string;
};

type Props = {
  title: string;
  subtitle?: string;
  videos: Video[];
};

export default function VideoGallery({
  title,
  subtitle,
  videos,
}: Props) {
  if (!videos.length) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
      <div className="mb-8">
        {subtitle && (
          <p className="text-xs uppercase tracking-[0.4em] text-yellow-400">
            {subtitle}
          </p>
        )}

        <div className="mt-3 flex items-end justify-between">
          <h2 className="text-4xl font-black uppercase italic md:text-6xl">
            {title}
          </h2>

          <p className="hidden text-xs uppercase tracking-[0.3em] text-white/40 md:block">
            {videos.length} Videos
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {videos.map((video) => (
          <article key={video.file}>
            <div className="overflow-hidden rounded-2xl bg-white/5">
              <video
                controls
                preload="metadata"
                poster={video.poster}
                className="aspect-video w-full"
              >
                <source src={video.file} type="video/mp4" />
              </video>
            </div>

            <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">
              {video.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}