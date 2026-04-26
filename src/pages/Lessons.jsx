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
      "Sangtimene med Benedicte er så mye mer enn å synge — det er ren terapi. Hun har lært meg at fysisk og mentalt velvære er en forutsetning for å kunne synge. Kroppen må fungere og hodet må være til stede. Benedicte får holdning og pust på plass og jeg føler meg rett og slett bedre etterpå.",
    author: "Runar Kvamme",
    role: "Hobbysanger og bedriftsleder",
  },
  {
    quote:
      "Benedicte er kunnskapsrik, trygg og legger til rette for kreativitet kombinert med gode evner til å lære bort.",
    author: "Adrian",
    role: "Psykolog og hobbysanger",
  },
  {
    quote:
      "Undervisningen med Benedicte er så koselig at jeg glemte helt å være nervøs. Benedicte er svært dyktig og har fokus på de viktige tingene, ho forstår på en god måte hva jeg må jobbe med. Benedicte gjør undervisningen gøy og motiverende.",
    author: "Berntine",
    role: "Sangelev",
  },
  {
    quote: "Inspirerende og motiverende sanglærer, anbefales!",
    author: "Mathias",
    role: "Sangelev",
  },
  {
    quote:
      "Benedicte er virkelig en god sanglærer. Hun har gjennom flere år hjulpet Lily med å utvikle sitt musikk potensiale. Måten Benedicte veileder og underviser Lily på, gjør at det de sammen utøver = magi. Det er alltid mye latter og god stemning når Benedicte tar Lily med inn i musikkens verden. Tusen takk Benedicte — du er virkelig en sjelden vare som vi setter umåtelig stor pris på.",
    author: "Janne",
    role: "Mor til Lily",
  },
  {
    quote:
      "Jeg har tatt sangtimer hos Benedicte siden 2018 og for meg var det udiskutabelt førstevalget! En av Norges vakreste stemmer!",
    author: "Terje Grødem",
    role: "Sangelev siden 2018",
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
                  src="/images/hero/bok-laer-a-synge.webp"
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

      {/* Testimonials — infinite scroll carousel */}
      <section className="border-y border-border bg-bg-elevated py-24 md:py-32">
        <style>{`
          @keyframes testimonial-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .testimonial-track {
            animation: testimonial-scroll 40s linear infinite;
          }
          .testimonial-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading title="Tilbakemeldinger" />
        </div>
        <div className="relative mt-12 overflow-hidden">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-elevated to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-elevated to-transparent" />
          <div className="testimonial-track flex w-max gap-6 px-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <blockquote
                key={i}
                className="w-80 flex-none rounded-xl border border-border bg-bg-card p-8"
              >
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
                <footer className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-text-muted">
                    — {t.author}
                  </p>
                  {t.role && (
                    <p className="mt-0.5 text-xs text-text-muted/60">
                      {t.role}
                    </p>
                  )}
                </footer>
              </blockquote>
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
