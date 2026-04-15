import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import SEOHead from "../components/seo/SEOHead.jsx";
import { seoData } from "../data/seo.js";
import { discography } from "../data/discography.js";

export default function Music() {
  const seo = seoData.music;

  return (
    <PageTransition>
      <SEOHead {...seo} />

      <HeroSection
        title="Musikk"
        subtitle="Diskografi & utgivelser"
        height="min-h-[60vh]"
        showScrollIndicator={false}
        backgroundImage="/images/hero/mistra-konsert.jpg"
      />

      {/* Featured Release */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-card md:flex">
              <div className="relative overflow-hidden md:w-1/2">
                <img
                  src="/images/hero/mistra-konsert.jpg"
                  alt="MISTRA — Benedicte Adrian & Anders Odden. Foto: Arash Taheri"
                  className="h-full w-full object-cover aspect-square"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-14">
                <span className="mb-4 inline-block w-fit rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-gold">
                  Siste utgivelse
                </span>
                <h2 className="font-serif text-4xl font-bold">
                  Waltz of Death
                </h2>
                <p className="mt-2 text-text-muted">MISTRA — 2024</p>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  Et banebrytende samarbeid mellom Benedicte Adrian og
                  metalpioneren Anders Odden. MISTRA forener det vakre og det
                  brutale i en uventet musikalsk fusjon som utforsker grensene
                  mellom pop og metal.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#spotify"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#1DB954]/10 px-5 py-2.5 text-sm font-medium text-[#1DB954] transition-colors hover:bg-[#1DB954]/20"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    Spotify
                  </a>
                  <a
                    href="#youtube"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#FF0000]/10 px-5 py-2.5 text-sm font-medium text-[#FF0000] transition-colors hover:bg-[#FF0000]/20"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Discography */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Diskografi"
            subtitle="Album og utgivelser gjennom karrieren"
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {discography.map((album, i) => (
              <Card
                key={album.id}
                title={album.title}
                subtitle={`${album.artist}${album.year ? ` — ${album.year}` : ""}`}
                description={album.description}
                image={album.image}
                tag={album.tag}
                delay={i * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Spotify embed placeholder */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading
            title="Lytt nå"
            subtitle="Hør Benedictes musikk på Spotify"
          />
          <AnimatedSection>
            <div className="overflow-hidden rounded-xl border border-border">
              <div className="flex h-[352px] items-center justify-center bg-bg-card">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1DB954]/10">
                    <svg
                      className="h-8 w-8 fill-[#1DB954]"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </div>
                  <p className="text-sm text-text-muted">
                    Spotify-spiller vil vises her
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Legg inn Spotify embed-URL for å aktivere
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
