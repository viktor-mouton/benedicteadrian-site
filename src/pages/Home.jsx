import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Card from "../components/ui/Card.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import SEOHead from "../components/seo/SEOHead.jsx";
import InstagramFeed from "../components/ui/InstagramFeed.jsx";
import { seoData } from "../data/seo.js";

const featuredProjects = [
  {
    title: "MISTRA",
    subtitle: "Med Anders Odden",
    description:
      "En unik musikalsk duo som forener pop og metal. Benedicte Adrian og metalpioneren Anders Odden skaper noe helt nytt sammen.",
    image: "/images/hero/mistra-konsert.jpg",
    tag: "Nytt prosjekt",
    href: "/musikk",
    mobileOrder: "order-2 md:order-1",
  },
  {
    title: "Desember",
    subtitle: "Soloalbum",
    description:
      "Benedictes personlige soloalbum med stemningsfulle sanger som viser hele bredden av hennes unike stemme.",
    image: "/images/discography/album-desember.jpg",
    href: "/musikk",
    mobileOrder: "order-3 md:order-2",
  },
  {
    title: "Lær å synge på 21 dager",
    subtitle: "Bok — Cappelen Damm",
    description:
      "En populær sangbok med 30-minutters daglige øvelser. Gjør sang tilgjengelig for alle, fra nybegynnere til viderekomne.",
    image: "/images/hero/bok-laer-a-synge.jpg",
    tag: "Bok",
    actions: [
      {
        label: "Kjøp boken",
        href: "https://www.ark.no/produkt/boker/dokumentar-og-faktaboker/laer-a-synge-pa-21-dager-9788202823856",
        primary: true,
        external: true,
      },
      {
        label: "Les mer",
        href: "/sangtimer",
      },
    ],
    mobileOrder: "order-1 md:order-3",
  },
];

const highlights = [
  { label: "Dollie de Luxe", detail: "MGP-vinner 1984" },
  { label: "Den Norske Opera", detail: "Operasolist" },
  { label: "MISTRA", detail: "Pop møter metal" },
  { label: "Vokalpedagog", detail: "Sangtimer & kurs" },
  { label: "Forfatter", detail: "Cappelen Damm" },
  { label: "TV2 Boksen", detail: "Sesong 2" },
];

export default function Home() {
  const seo = seoData.home;

  return (
    <PageTransition>
      <SEOHead {...seo} />

      {/* Hero */}
      <HeroSection
        title="Benedicte Adrian"
        subtitle="Sanger &bull; Artist &bull; Vokalpedagog"
        backgroundImage="/images/gallery/benedicte-esten-borgos-01.jpg"
        showScrollIndicator={false}
      />

      {/* Introduction */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <p className="font-serif text-2xl leading-relaxed text-text-secondary sm:text-3xl lg:text-4xl">
              Med en karriere som spenner fra{" "}
              <span className="text-text-primary">pop</span> og{" "}
              <span className="text-text-primary">opera</span> til{" "}
              <span className="text-text-primary">metal</span>, har Benedicte
              Adrian bevist at den menneskelige stemmen ikke kjenner grenser.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Prosjekter"
            subtitle="Utvalgte prosjekter og utgivelser"
          />
          <div className="grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <div key={project.title} className={project.mobileOrder}>
                <Card {...project} delay={i * 0.15} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram / Siste nytt */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Siste nytt"
            subtitle="Følg Benedicte på Instagram"
          />
          <InstagramFeed feedId="cJk1jyPvLSgO7UHepF6O" />
          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex justify-center">
              <a
                href="https://www.instagram.com/benedicteadrian"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-gold transition-colors hover:text-accent-gold-light"
              >
                Følg på Instagram
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  &rarr;
                </motion.span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-y border-border bg-bg-elevated py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {highlights.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <div className="text-center">
                  <p className="font-serif text-lg font-bold text-accent-gold">
                    {item.label}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-text-muted">
                    {item.detail}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <AnimatedSection direction="left">
              <div className="rounded-2xl border border-border bg-bg-card p-10 transition-colors hover:border-accent-gold/30 md:p-14">
                <h3 className="font-serif text-3xl font-bold">Booking</h3>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  Benedicte Adrian er tilgjengelig for konserter, private
                  arrangementer og bedriftseventer. Ta kontakt for å diskutere
                  ditt arrangement.
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-gold transition-colors hover:text-accent-gold-light"
                >
                  Kontakt for booking
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    &rarr;
                  </motion.span>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="rounded-2xl border border-border bg-bg-card p-10 transition-colors hover:border-accent-rose/30 md:p-14">
                <h3 className="font-serif text-3xl font-bold">Sangtimer</h3>
                <p className="mt-4 leading-relaxed text-text-secondary">
                  Utvikle stemmen din med en av Norges mest erfarne
                  vokalpedagoger. Privatundervisning og workshops for alle
                  nivåer.
                </p>
                <Link
                  to="/sangtimer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-gold transition-colors hover:text-accent-gold-light"
                >
                  Les mer om sangtimer
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    &rarr;
                  </motion.span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
