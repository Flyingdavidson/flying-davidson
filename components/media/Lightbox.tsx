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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 h-12 w-12 rounded-full border border-white/20 bg-black/60 text-3xl text-white hover:bg-white hover:text-black"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        className="absolute left-6 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 text-3xl text-white hover:bg-white hover:text-black"
      >
        ‹
      </button>

      <div
        className="relative h-[82vh] w-full max-w-7xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[activeIndex]}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-6 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 text-3xl text-white hover:bg-white hover:text-black"
      >
        ›
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.3em] text-white/60">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}