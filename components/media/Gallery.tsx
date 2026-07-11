"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type GalleryProps = {
  title: string;
  subtitle?: string;
  images: string[];
};

export default function Gallery({
  title,
  subtitle,
  images,
}: GalleryProps) {
  const [activeImage, setActiveImage] = useState<number | null>(null);

  const previous = () =>
    setActiveImage((i) =>
      i === null ? null : i === 0 ? images.length - 1 : i - 1
    );

  const next = () =>
    setActiveImage((i) =>
      i === null ? null : i === images.length - 1 ? 0 : i + 1
    );

  return (
    <>
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
              {images.length} Images
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => setActiveImage(index)}
              className="group relative aspect-[16/10] overflow-hidden rounded-2xl bg-white/5"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(max-width:768px)100vw,33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

              <div className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-white opacity-0 transition group-hover:opacity-100">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white opacity-0 transition group-hover:opacity-100">
                +
              </div>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={images}
        activeIndex={activeImage}
        onClose={() => setActiveImage(null)}
        onPrevious={previous}
        onNext={next}
      />
    </>
  );
}