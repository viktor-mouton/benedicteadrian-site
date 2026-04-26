import { useState } from "react";
import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import ImageGallery from "../components/ui/ImageGallery.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import { galleryCategories, galleryImages } from "../data/gallery.js";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("Alle");

  const filtered =
    activeCategory === "Alle"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <PageTransition>
      <HeroSection
        title="Galleri"
        subtitle="Bilder fra konserter, forestillinger & prosjekter"
        height="min-h-[60vh]"
        showScrollIndicator={false}
        backgroundImage="/images/gallery/benedicte-esten-borgos-07.webp"
        imageAlt="Benedicte Adrian"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          {/* Category filters */}
          <AnimatedSection>
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-normal ${
                    activeCategory === cat
                      ? "bg-accent-gold text-bg"
                      : "border border-border text-text-secondary hover:border-accent-gold/50 hover:text-text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <ImageGallery images={filtered} />
        </div>
      </section>
    </PageTransition>
  );
}
