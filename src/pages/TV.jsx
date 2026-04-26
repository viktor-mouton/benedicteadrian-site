import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import PlaceholderImage from "../components/ui/PlaceholderImage.jsx";
import { tvShows, radioShows } from "../data/tvshows.js";

export default function TV() {
  return (
    <PageTransition>
      <HeroSection
        title="TV & Media"
        subtitle="Utvalgte TV-opptredener"
        height="min-h-[60vh]"
        showScrollIndicator={false}
        backgroundImage="/images/tv/deltager-bilde-boksen.avif"
        imageAlt="Benedicte Adrian i Boksen på TV2"
      />

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-2xl leading-relaxed text-text-secondary sm:text-3xl">
              Benedicte Adrian har vært en etterspurt profil i norsk TV og media
              gjennom flere tiår, med opptredener i alt fra
              underholdningsprogrammer og matlagingsshow til barneradio på NRK.
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
                <div className="group overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-normal hover:border-border-light hover:bg-bg-card-hover">
                  <div className="relative aspect-video overflow-hidden">
                    {show.image ? (
                      <img
                        src={show.image}
                        alt={show.title}
                        className="h-full w-full object-cover object-top transition-transform duration-slow group-hover:scale-105"
                        style={show.imagePosition ? { objectPosition: show.imagePosition } : undefined}
                      />
                    ) : (
                      <PlaceholderImage label={show.title} />
                    )}
                    {show.network === "TV2" ? (
                      <img src="/assets/icons/tv2-icon.png" alt="TV2" className="absolute top-4 left-4 h-7 w-auto drop-shadow" />
                    ) : show.network?.startsWith("NRK") ? (
                      <img src="/assets/icons/nrk-icon.png" alt={show.network} className="absolute top-4 left-4 h-7 w-auto drop-shadow" />
                    ) : null}
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

      {/* Radio Section */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Radio" subtitle="Barneradio og lydproduksjoner" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {radioShows.map((show, i) => (
              <AnimatedSection key={show.id} delay={i * 0.15}>
                <a
                  href={show.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-normal hover:border-border-light hover:bg-bg-card-hover"
                >
                  <div className="relative aspect-square overflow-hidden">
                    {show.image ? (
                      <img
                        src={show.image}
                        alt={show.title}
                        className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
                      />
                    ) : (
                      <PlaceholderImage label={show.title} />
                    )}
                    {show.network === "TV2" ? (
                      <img src="/assets/icons/tv2-icon.png" alt="TV2" className="absolute top-4 left-4 h-7 w-auto drop-shadow" />
                    ) : show.network?.startsWith("NRK") ? (
                      <img src="/assets/icons/nrk-icon.png" alt={show.network} className="absolute top-4 left-4 h-7 w-auto drop-shadow" />
                    ) : null}
                    <div className="absolute inset-0 flex items-center justify-center bg-bg/0 transition-colors duration-normal group-hover:bg-bg/30">
                      <span className="rounded-full bg-bg/70 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-text-primary opacity-0 transition-opacity duration-normal group-hover:opacity-100">
                        Lytt på NRK
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold transition-colors group-hover:text-accent-gold">
                      {show.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted">
                      {[show.network, show.year].filter(Boolean).join(" · ")}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {show.description}
                    </p>
                    {show.episodes && (
                      <ul className="mt-4 space-y-1">
                        {show.episodes.map((ep) => (
                          <li key={ep} className="flex items-start gap-2 text-xs text-text-muted">
                            <span className="mt-0.5 text-accent-gold">–</span>
                            {ep}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">Vil du booke Benedicte Adrian?</h2>
            <p className="mt-4 text-lg leading-relaxed text-text-secondary">
              Ønsker du Benedicte til ditt TV-program eller show? Ta kontakt for booking og samarbeid.
            </p>
            <a
              href="/kontakt"
              className="mt-8 inline-block rounded-lg bg-gradient-to-r from-accent-gold-dark via-accent-gold to-accent-gold-light px-8 py-3 text-sm font-semibold uppercase tracking-wider text-bg transition-all duration-normal hover:shadow-lg hover:shadow-accent-gold/20"
            >
              Ta kontakt
            </a>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
