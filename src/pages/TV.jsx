import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import Lightbox from "../components/ui/Lightbox.jsx";
import PlaceholderImage from "../components/ui/PlaceholderImage.jsx";
import SEOHead from "../components/seo/SEOHead.jsx";
import { seoData } from "../data/seo.js";
import { tvShows } from "../data/tvshows.js";

export default function TV() {
  const seo = seoData.tv;
  const [lightboxShow, setLightboxShow] = useState(null);

  return (
    <PageTransition>
      <SEOHead {...seo} />

      <HeroSection
        title="TV & Media"
        subtitle="Utvalgte TV-opptredener"
        height="min-h-[60vh]"
        showScrollIndicator={false}
        backgroundImage="/images/gallery/benedicte-esten-borgos-01.jpg"
      />

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-2xl leading-relaxed text-text-secondary sm:text-3xl">
              Benedicte Adrian har vært en etterspurt profil i norsk TV og media
              gjennom flere tiår, med opptredener i alt fra
              underholdningsprogrammer til matlagingsshow.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* TV Shows Grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="TV-opptredener"
            subtitle="Programmer og show"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {tvShows.map((show, i) => (
              <AnimatedSection key={show.id} delay={i * 0.15}>
                <div
                  onClick={() =>
                    show.images.length > 0 && setLightboxShow(show)
                  }
                  className={`group overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-normal hover:border-border-light hover:bg-bg-card-hover ${show.images.length > 0 ? "cursor-pointer" : ""}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    {show.image ? (
                      <img
                        src={show.image}
                        alt={show.title}
                        className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
                      />
                    ) : (
                      <PlaceholderImage label={show.title} />
                    )}
                    <span className="absolute top-4 left-4 rounded-full bg-accent-gold/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bg">
                      {show.network || "TV"}
                    </span>
                    {show.images.length > 0 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-bg/0 transition-colors duration-normal group-hover:bg-bg/30">
                        <span className="rounded-full bg-bg/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-primary opacity-0 transition-opacity duration-normal group-hover:opacity-100">
                          Se bilder
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold transition-colors group-hover:text-accent-gold">
                      {show.title}
                    </h3>
                    {(show.network || show.year) && (
                      <p className="mt-1 text-sm text-text-muted">
                        {[show.network, show.year].filter(Boolean).join(" · ")}
                      </p>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {show.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox for show images */}
      <AnimatePresence>
        {lightboxShow && (
          <Lightbox
            images={lightboxShow.images}
            initialIndex={0}
            onClose={() => setLightboxShow(null)}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
