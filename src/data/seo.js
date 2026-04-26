const BASE_URL = "https://www.benedicteadrian.no";

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
    ogImage: `${BASE_URL}/images/gallery/benedicte-esten-borgos-01.webp`,
    heroImage: "/images/gallery/benedicte-esten-borgos-01.webp",
    structuredData: personSchema,
  },
  about: {
    title: "Om Benedicte Adrian | Biografi & Karriere",
    description:
      "Biografi og karriere for Benedicte Adrian. Fra Dollie de Luxe og MGP-seier til Den Norske Opera, soloalbumet Desember og MISTRA med Anders Odden.",
    canonical: `${BASE_URL}/om`,
    ogImage: `${BASE_URL}/images/gallery/benedicte-gisle-haaland-01.webp`,
    heroImage: "/images/gallery/benedicte-gisle-haaland-01.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      url: `${BASE_URL}/om`,
      mainEntity: personSchema,
    },
  },
  music: {
    title: "Musikk & Diskografi | Benedicte Adrian",
    description:
      "Utforsk musikken til Benedicte Adrian. Diskografi, MISTRA-samarbeidet med Anders Odden, soloalbumet Desember og Dollie de Luxe.",
    canonical: `${BASE_URL}/musikk`,
    ogImage: `${BASE_URL}/images/hero/mistra-konsert.webp`,
    heroImage: "/images/hero/mistra-konsert.webp",
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
    ogImage: `${BASE_URL}/images/hero/bok-laer-a-synge.webp`,
    heroImage: "/images/gallery/benedicte-esten-borgos-08.webp",
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
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Benedicte er kunnskapsrik, trygg og legger til rette for kreativitet kombinert med gode evner til å lære bort.",
          author: { "@type": "Person", name: "Adrian" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Undervisningen med Benedicte er så koselig at jeg glemte helt å være nervøs. Benedicte er svært dyktig og har fokus på de viktige tingene.",
          author: { "@type": "Person", name: "Berntine" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          reviewBody: "Inspirerende og motiverende sanglærer, anbefales!",
          author: { "@type": "Person", name: "Mathias" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Benedicte er virkelig en god sanglærer. Hun har gjennom flere år hjulpet Lily med å utvikle sitt musikk potensiale. Det er alltid mye latter og god stemning.",
          author: { "@type": "Person", name: "Janne" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
        {
          "@type": "Review",
          reviewBody:
            "Jeg har tatt sangtimer hos Benedicte siden 2018 og for meg var det udiskutabelt førstevalget! En av Norges vakreste stemmer!",
          author: { "@type": "Person", name: "Terje Grødem" },
          reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        },
      ],
    },
  },
  gallery: {
    title: "Galleri | Benedicte Adrian",
    description:
      "Bilder fra konserter, forestillinger og prosjekter med Benedicte Adrian. Pressebilder og portretter.",
    canonical: `${BASE_URL}/galleri`,
    ogImage: `${BASE_URL}/images/gallery/benedicte-gisle-haaland-02.webp`,
    heroImage: "/images/gallery/benedicte-esten-borgos-07.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Galleri — Benedicte Adrian",
      url: `${BASE_URL}/galleri`,
      description:
        "Bilder fra konserter, forestillinger og prosjekter med Benedicte Adrian. Pressebilder og portretter.",
      author: personSchema,
    },
  },
  tv: {
    title: "TV & Media | Benedicte Adrian",
    description:
      "Benedicte Adrians TV-opptredener. Fra Boksen på TV2 til Kokkeskolen og 24 stjerners julekalender. Bilder og oversikt.",
    canonical: `${BASE_URL}/tv`,
    ogImage: `${BASE_URL}/images/tv/boksen-benedicte-keyart-45.webp`,
    heroImage: "/images/tv/deltager-bilde-boksen.avif",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "TV & Media — Benedicte Adrian",
      url: `${BASE_URL}/tv`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "TVSeries",
            name: "Boksen",
            description: "Deltaker i TV2s populære underholdningsprogram Boksen, sesong 2.",
            datePublished: "2026",
            productionCompany: { "@type": "Organization", name: "TV2" },
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "TVSeries",
            name: "Kokkeskolen",
            description: "Benedicte var med i det populære matlagingsprogrammet Kokkeskolen på TV2.",
            datePublished: "2025",
            productionCompany: { "@type": "Organization", name: "TV2" },
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "TVSeries",
            name: "24 stjerners julekalender",
            description: "Benedicte deltok i NRKs festlige julekalender-konsept med kjente norske artister.",
            datePublished: "2024",
            productionCompany: { "@type": "Organization", name: "NRK" },
          },
        },
      ],
    },
  },
  contact: {
    title: "Kontakt & Booking | Benedicte Adrian",
    description:
      "Ta kontakt med Benedicte Adrian for booking, sangtimer eller andre henvendelser. Booking av konserter og arrangementer.",
    canonical: `${BASE_URL}/kontakt`,
    ogImage: `${BASE_URL}/images/gallery/benedicte-esten-borgos-01.webp`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Kontakt & Booking — Benedicte Adrian",
      url: `${BASE_URL}/kontakt`,
      description:
        "Ta kontakt med Benedicte Adrian for booking, sangtimer eller andre henvendelser.",
      mainEntity: personSchema,
    },
  },
  notFound: {
    title: "404 — Siden finnes ikke | Benedicte Adrian",
    description: "Siden du leter etter finnes ikke.",
    canonical: `${BASE_URL}/`,
    noindex: true,
  },
};
