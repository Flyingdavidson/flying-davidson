"use client";

import Image from "next/image";
import { useCallback, useEffect } from "react";

type LightboxProps = {
  images: string[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function Lightbox({
  images,
  activeIndex,
  onClose,
  onPrevious,
  onNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (activeIndex === null) return;

      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    },
    [activeIndex, onClose, onPrevious, onNext]
  );

  useEffect(() => {
    if (activeIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, handleKeyDown]);

  if (activeIndex === null) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex bg-black/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Aircraft photo gallery"
      onClick={onClose}
    >
      <div className="relative flex h-full w-full flex-col">
        <div
          className="relative z-50 flex min-h-20 items-center justify-between border-b border-white/10 bg-black/80 px-4 backdrop-blur-md md:px-8"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
            aria-label="Close gallery"
          >
            <span aria-hidden="true">←</span>
            Back
          </button>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/60">
            {activeIndex + 1} / {images.length}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white transition hover:bg-white hover:text-black"
            aria-label="Close gallery"
          >
            ×
          </button>
        </div>

        <div
          className="relative flex min-h-0 flex-1 items-center justify-center px-3 py-4 md:px-20 md:py-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onPrevious();
            }}
            className="absolute left-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-3xl text-white transition hover:bg-white hover:text-black md:left-8 md:h-14 md:w-14"
            aria-label="Previous image"
          >
            ‹
          </button>

          <div
            className="relative h-full w-full max-w-7xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`Aircraft gallery image ${activeIndex + 1} of ${
                images.length
              }`}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/70 text-3xl text-white transition hover:bg-white hover:text-black md:right-8 md:h-14 md:w-14"
            aria-label="Next image"
          >
            ›
          </button>
        </div>

        <div
          className="relative z-50 flex min-h-14 items-center justify-center border-t border-white/10 bg-black/80 px-4"
          onClick={(event) => event.stopPropagation()}
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
            Use arrow keys to navigate · Press Escape to close
          </p>
        </div>
      </div>
    </div>
  );
}