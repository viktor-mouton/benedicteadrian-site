import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ContactForm from "../components/ui/ContactForm.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import SocialIcons from "../components/ui/SocialIcons.jsx";

export default function Contact() {
  return (
    <PageTransition>
      <HeroSection
        title="Kontakt"
        subtitle="Booking & henvendelser"
        height="min-h-[30vh]"
        showScrollIndicator={false}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Form */}
            <AnimatedSection direction="left" className="lg:col-span-3">
              <h2 className="mb-8 font-serif text-3xl font-bold">
                Send en melding
              </h2>
              <ContactForm />
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="rounded-2xl border border-border bg-bg-card p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-bold">
                  Kontaktinformasjon
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                  For booking, sangtimer eller andre henvendelser — ta gjerne
                  kontakt via skjemaet.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-gold/10">
                      <svg
                        className="h-5 w-5 text-accent-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Basert i
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        Oslo, Norge
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 border-t border-border pt-8">
                  <p className="mb-4 text-sm font-medium text-text-muted">
                    Følg Benedicte
                  </p>
                  <SocialIcons />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading title="Spørsmål og svar" />
          <dl className="mt-12 space-y-6">
            {[
              {
                q: "Hvem er Benedicte Adrian?",
                a: "Benedicte Adrian er en norsk sanger og artist kjent fra Dollie de Luxe (MGP-vinner 1984 og Eurovision-representant), musikalen Which Witch og duoen MISTRA. Hun er også vokalpedagog og forfatter av «Lær å synge på 21 dager», utgitt av Cappelen Damm.",
              },
              {
                q: "Hvordan kan jeg booke Benedicte Adrian til konsert eller arrangement?",
                a: "Send en bookingforespørsel via kontaktskjemaet ovenfor. Benedicte er tilgjengelig for konserter, private arrangementer og bedriftseventer.",
              },
              {
                q: "Hva tilbyr Benedicte Adrian?",
                a: "Benedicte Adrian tilbyr konserter og opptredener, privatundervisning i sang og vokal, workshops og masterclass, og er tilgjengelig for mediesamarbeid og andre kulturprosjekter.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.q} delay={i * 0.1}>
                <div className="rounded-xl border border-border bg-bg-card p-8">
                  <dt className="font-serif text-lg font-bold text-text-primary">
                    {item.q}
                  </dt>
                  <dd className="mt-3 text-sm leading-relaxed text-text-secondary">
                    {item.a}
                  </dd>
                </div>
              </AnimatedSection>
            ))}
          </dl>
        </div>
      </section>
    </PageTransition>
  );
}
