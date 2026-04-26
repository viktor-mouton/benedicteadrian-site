const BASE_URL = "https://benedicteadrian.no";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Benedicte Adrian",
  url: BASE_URL,
  jobTitle: "Sanger, Artist & Vokalpedagog",
  description:
    "Norsk sanger og artist kjent fra Dollie de Luxe, Which Witch, MISTRA og som vokalpedagog og forfatter.",
  sameAs: [
    "https://www.facebook.com/benedicteadrian",
    "https://www.instagram.com/benedicteadrian",
  ],
  knowsAbout: ["Sang", "Opera", "Pop", "Metal", "Vokalundervisning"],
};

export const seoData = {
  home: {
    title: "Benedicte Adrian | Sanger, Artist & Vokalpedagog",
    description:
      "Benedicte Adrian — norsk sanger og artist. Kjent fra Dollie de Luxe, Which Witch, MISTRA og som vokalpedagog. Booking og sangtimer.",
    canonical: `${BASE_URL}/`,
    structuredData: personSchema,
  },
  about: {
    title: "Om Benedicte Adrian | Biografi & Karriere",
    description:
      "Biografi og karriere for Benedicte Adrian. Fra Dollie de Luxe og MGP-seier til Den Norske Opera, soloalbumet Desember og MISTRA med Anders Odden.",
    canonical: `${BASE_URL}/om`,
  },
  music: {
    title: "Musikk & Diskografi | Benedicte Adrian",
    description:
      "Utforsk musikken til Benedicte Adrian. Diskografi, MISTRA-samarbeidet med Anders Odden, soloalbumet Desember og Dollie de Luxe.",
    canonical: `${BASE_URL}/musikk`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "MusicGroup",
      name: "Benedicte Adrian",
      url: `${BASE_URL}/musikk`,
      genre: ["Pop", "Opera", "Metal"],
      member: {
        "@type": "Person",
        name: "Benedicte Adrian",
      },
    },
  },
  lessons: {
    title: "Sangtimer & Vokalundervisning | Benedicte Adrian",
    description:
      "Sangtimer og vokalundervisning med Benedicte Adrian. Forfatter av «Lær å synge på 21 dager». Privatundervisning, workshops og kurs.",
    canonical: `${BASE_URL}/sangtimer`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "Sangtimer med Benedicte Adrian",
      url: `${BASE_URL}/sangtimer`,
      description:
        "Sangtimer og vokalundervisning med Benedicte Adrian. Privatundervisning, workshops og masterclass.",
      review: [
        {
          "@type": "Review",
          reviewBody:
            "Sangtimene med Benedicte er så mye mer enn å synge — det er ren terapi. Hun har lært meg at fysisk og mentalt velvære er en forutsetning for å kunne synge.",
          author: { "@type": "Person", name: "Runar Kvamme" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Benedicte er kunnskapsrik, trygg og legger til rette for kreativitet kombinert med gode evner til å lære bort.",
          author: { "@type": "Person", name: "Adrian" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Undervisningen med Benedicte er så koselig at jeg glemte helt å være nervøs. Benedicte er svært dyktig og har fokus på de viktige tingene.",
          author: { "@type": "Person", name: "Berntine" },
        },
        {
          "@type": "Review",
          reviewBody: "Inspirerende og motiverende sanglærer, anbefales!",
          author: { "@type": "Person", name: "Mathias" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Benedicte er virkelig en god sanglærer. Hun har gjennom flere år hjulpet Lily med å utvikle sitt musikk potensiale. Det er alltid mye latter og god stemning.",
          author: { "@type": "Person", name: "Janne" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Jeg har tatt sangtimer hos Benedicte siden 2018 og for meg var det udiskutabelt førstevalget! En av Norges vakreste stemmer!",
          author: { "@type": "Person", name: "Terje Grødem" },
        },
      ],
    },
  },
  gallery: {
    title: "Galleri | Benedicte Adrian",
    description:
      "Bilder fra konserter, forestillinger og prosjekter med Benedicte Adrian. Pressebilder og portretter.",
    canonical: `${BASE_URL}/galleri`,
  },
  tv: {
    title: "TV & Media | Benedicte Adrian",
    description:
      "Benedicte Adrians TV-opptredener. Fra Boksen på TV2 til Kokkeskolen og 24 stjerners julekalender. Bilder og oversikt.",
    canonical: `${BASE_URL}/tv`,
  },
  contact: {
    title: "Kontakt & Booking | Benedicte Adrian",
    description:
      "Ta kontakt med Benedicte Adrian for booking, sangtimer eller andre henvendelser. Booking av konserter og arrangementer.",
    canonical: `${BASE_URL}/kontakt`,
  },
  notFound: {
    title: "404 — Siden finnes ikke | Benedicte Adrian",
    description: "Siden du leter etter finnes ikke.",
    canonical: `${BASE_URL}/`,
    noindex: true,
  },
};
