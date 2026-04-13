import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection.jsx";
import PlaceholderImage from "./PlaceholderImage.jsx";

export default function ImageGallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % images.length);
    }
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, goNext, goPrev]);

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <AnimatedSection key={img.id} delay={(i % 6) * 0.08}>
            <button
              onClick={() => openLightbox(i)}
              className="group mb-4 block w-full overflow-hidden rounded-lg"
              aria-label={`Åpne bilde: ${img.alt}`}
            >
              <div className="relative overflow-hidden">
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full transition-transform duration-slow group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-[3/4]">
                    <PlaceholderImage label={img.alt} />
                  </div>
                )}
                <div className="absolute inset-0 bg-bg/0 transition-colors duration-normal group-hover:bg-bg/20" />
              </div>
              {img.caption && (
                <p className="mt-2 text-left text-xs text-text-muted">
                  {img.caption}
                </p>
              )}
            </button>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-xl p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-primary hover:text-text-primary"
              aria-label="Lukk"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Nav arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-primary hover:text-text-primary md:left-8"
              aria-label="Forrige bilde"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-text-primary hover:text-text-primary md:right-8"
              aria-label="Neste bilde"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-h-[85vh] max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            >
              {images[lightboxIndex].src ? (
                <img
                  src={images[lightboxIndex].src}
                  alt={images[lightboxIndex].alt}
                  className="max-h-[85vh] max-w-full rounded-lg object-contain"
                />
              ) : (
                <div className="flex h-[50vh] w-[50vw] items-center justify-center rounded-lg bg-bg-card">
                  <PlaceholderImage label={images[lightboxIndex].alt} />
                </div>
              )}
              {images[lightboxIndex].caption && (
                <p className="mt-4 text-center text-sm text-text-secondary">
                  {images[lightboxIndex].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
