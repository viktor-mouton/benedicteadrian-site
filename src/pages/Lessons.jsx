import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import SEOHead from "../components/seo/SEOHead.jsx";
import { seoData } from "../data/seo.js";

const lessonTypes = [
  {
    title: "Privatundervisning",
    description:
      "Personlig tilpasset vokalundervisning en-til-en. Passer for alle nivåer, fra nybegynnere til profesjonelle sangere.",
    features: [
      "Individuelt tilpasset program",
      "Pusteteknikk og støtte",
      "Interpretasjon og uttrykk",
      "Sjangeruavhengig tilnærming",
    ],
  },
  {
    title: "Workshops & Kurs",
    description:
      "Gruppeundervisning og workshops for kor, musikklinjer og bedrifter. Inspirerende og lærerikt for alle.",
    features: [
      "Gruppeøvelser og samklang",
      "Scenisk tilstedeværelse",
      "Stemmehygiene",
      "Teambuilding gjennom sang",
    ],
  },
  {
    title: "Masterclass",
    description:
      "Avansert undervisning for sangstudenter og profesjonelle. Dyptgående arbeid med teknikk og kunstnerisk utvikling.",
    features: [
      "Avansert vokalteknikk",
      "Crossover-teknikker",
      "Kunstnerisk coaching",
      "Forberedelse til audition/konsert",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Benedicte har en helt spesiell evne til å finne det beste i stemmen din. Etter bare noen timer følte jeg en enorm forskjell.",
    author: "Sangelev",
  },
  {
    quote:
      "Workshopen med Benedicte var det beste vi har gjort som kor. Inspirerende, morsom og utrolig lærerik.",
    author: "Korleder",
  },
  {
    quote:
      "Boken «Lær å synge på 21 dager» ga meg motet til å begynne. Nå tar jeg privatundervisning og elsker det!",
    author: "Leser & elev",
  },
];

export default function Lessons() {
  const seo = seoData.lessons;

  return (
    <PageTransition>
      <SEOHead {...seo} />

      <HeroSection
        title="Sangtimer"
        subtitle="Vokalundervisning & kurs"
        height="min-h-[60vh]"
        showScrollIndicator={false}
        backgroundImage="/images/gallery/benedicte-esten-borgos-08.jpg"
      />

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-2xl leading-relaxed text-text-secondary sm:text-3xl">
              Med over fire tiår som utøvende artist og mangeårig erfaring som
              vokalpedagog, tilbyr Benedicte en unik og inspirerende tilnærming
              til vokalundervisning.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Book Feature */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedSection>
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-card md:flex">
              <div className="relative overflow-hidden md:w-2/5">
                <img
                  src="/images/hero/bok-laer-a-synge.jpg"
                  alt="Lær å synge på 21 dager — Benedicte Adrian. Foto: Mona Nordøy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-3/5 md:p-14">
                <span className="mb-4 inline-block w-fit rounded-full bg-accent-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-gold">
                  Bok
                </span>
                <h2 className="font-serif text-4xl font-bold">
                  Lær å synge på 21 dager
                </h2>
                <p className="mt-2 text-text-muted">
                  Utgitt av Cappelen Damm
                </p>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  En praktisk og inspirerende sangbok med daglige øvelser på 30
                  minutter. Boken gir deg verktøyene du trenger for å utvikle
                  stemmen din, uansett utgangspunkt. Basert på Benedictes mange
                  års erfaring som utøvende artist og vokalpedagog.
                </p>
                <ul className="mt-6 space-y-2">
                  {[
                    "21 dagers strukturert program",
                    "30-minutters daglige øvelser",
                    "For nybegynnere og viderekomne",
                    "Praktiske tips og teknikker",
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-text-secondary"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href="https://www.ark.no/produkt/boker/dokumentar-og-faktaboker/laer-a-synge-pa-21-dager-9788202823856"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-lg bg-gradient-to-r from-accent-gold-dark via-accent-gold to-accent-gold-light px-8 py-3 text-sm font-semibold uppercase tracking-wider text-bg transition-all duration-normal hover:shadow-lg hover:shadow-accent-gold/20"
                  >
                    Kjøp boken
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Lesson Types */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Undervisningstilbud"
            subtitle="Tilpasset undervisning for alle nivåer"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {lessonTypes.map((type, i) => (
              <AnimatedSection key={type.title} delay={i * 0.15}>
                <div className="group h-full rounded-xl border border-border bg-bg-card p-8 transition-all duration-normal hover:border-accent-gold/30 hover:bg-bg-card-hover">
                  <h3 className="font-serif text-2xl font-bold">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {type.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {type.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-text-muted"
                      >
                        <span className="h-1 w-1 rounded-full bg-accent-gold" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border bg-bg-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Tilbakemeldinger" />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <blockquote className="rounded-xl border border-border bg-bg-card p-8">
                  <svg
                    className="mb-4 h-8 w-8 text-accent-gold/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                  </svg>
                  <p className="text-sm italic leading-relaxed text-text-secondary">
                    &laquo;{t.quote}&raquo;
                  </p>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wider text-text-muted">
                    — {t.author}
                  </p>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-4xl font-bold sm:text-5xl">
              Klar for å utvikle stemmen din?
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Ta kontakt for å høre mer om sangtimer, workshops eller for å
              booke undervisning.
            </p>
            <Link
              to="/kontakt"
              className="mt-8 inline-block rounded-lg bg-gradient-to-r from-accent-gold-dark via-accent-gold to-accent-gold-light px-10 py-4 text-sm font-semibold uppercase tracking-wider text-bg transition-all duration-normal hover:shadow-lg hover:shadow-accent-gold/20"
            >
              Ta kontakt
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}
