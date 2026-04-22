import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection.jsx";
import PlaceholderImage from "./PlaceholderImage.jsx";
import Lightbox from "./Lightbox.jsx";

export default function ImageGallery({ images }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <AnimatedSection key={img.id} delay={(i % 6) * 0.08}>
            <button
              onClick={() => setLightboxIndex(i)}
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
          <Lightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
