import PageTransition from "../components/layout/PageTransition.jsx";
import HeroSection from "../components/ui/HeroSection.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Timeline from "../components/ui/Timeline.jsx";
import AnimatedSection from "../components/ui/AnimatedSection.jsx";
import { timelineEvents } from "../data/discography.js";

const expertise = [
  {
    title: "Pop & Schlager",
    description: "Fra Dollie de Luxe til moderne pop — en karriere med hits som har blitt en del av norsk kulturarv.",
    icon: "M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z",
  },
  {
    title: "Opera",
    description: "Klassisk trening og opptredener ved Den Norske Opera viser en sjelden stemmebredde og teknisk dyktighet.",
    icon: "M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z",
  },
  {
    title: "Metal & Crossover",
    description: "MISTRA-samarbeidet med Anders Odden viser mot til å utforske nye musikalske landskap.",
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
  },
  {
    title: "Vokalundervisning",
    description: "Mangeårig erfaring som vokalpedagog, forfatter av «Lær å synge på 21 dager» og kursarrangør.",
    icon: "M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
  },
  {
    title: "Forfatter",
    description: "Utgitt av Cappelen Damm med en praktisk og inspirerende tilnærming til sang og stemmebruk.",
    icon: "M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25",
  },
  {
    title: "TV & Media",
    description: "Deltakelse i TV2 «Boksen», TV2 Play og andre medieproduksjoner. En etterspurt profil i norsk underholdning.",
    icon: "M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z",
  },
];

export default function About() {
  return (
    <PageTransition>
      <HeroSection
        title="Om Benedicte"
        subtitle="En stemme som krysser alle grenser"
        height="min-h-[60vh]"
        showScrollIndicator={false}
        backgroundImage="/images/gallery/benedicte-gisle-haaland-01.jpg"
        backgroundObjectPosition="center 15%"
      />

      {/* Bio Introduction */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <p className="font-serif text-2xl leading-relaxed text-text-secondary sm:text-3xl">
              Benedicte Adrian er en av Norges mest allsidige artister.
              Med en karriere som strekker seg fra{" "}
              <span className="text-text-primary">Dollie de Luxe</span> og{" "}
              <span className="text-text-primary">
                Melodi Grand Prix-seier i 1984
              </span>
              , via solistopptredener ved{" "}
              <span className="text-text-primary">Den Norske Opera</span>, til
              det nyskapende metal-pop-samarbeidet{" "}
              <span className="text-text-primary">MISTRA</span> — har hun
              bevist at kunstnerisk nysgjerrighet ikke har noen grenser.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-lg leading-relaxed text-text-secondary">
              Som vokalpedagog og forfatter deler hun sin dype kunnskap om
              stemmen gjennom privatundervisning, workshops og sin populære bok{" "}
              «Lær å synge på 21 dager», utgitt av Cappelen Damm. Hun brenner
              for å gjøre sang tilgjengelig for alle.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="bg-bg-elevated py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            title="Karriere"
            subtitle="Over fire tiår med musikalsk utforskning"
          />
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            title="Ekspertise"
            subtitle="En unik bredde av musikalsk kompetanse"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div className="group rounded-xl border border-border bg-bg-card p-8 transition-all duration-normal hover:border-border-light hover:bg-bg-card-hover">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent-gold/10">
                    <svg
                      className="h-6 w-6 text-accent-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
