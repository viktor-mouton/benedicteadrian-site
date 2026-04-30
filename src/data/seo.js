const BASE_URL = "https://www.benedicteadrian.no";

const personSchema = {
  "@type": "Person",
  "@id": `${BASE_URL}/#person`,
  name: "Benedicte Adrian",
  url: BASE_URL,
  image: `${BASE_URL}/images/gallery/benedicte-esten-borgos-01.webp`,
  jobTitle: "Sanger, Artist & Vokalpedagog",
  description:
    "Norsk sanger og artist kjent fra Dollie de Luxe, Which Witch, MISTRA og som vokalpedagog og forfatter.",
  nationality: { "@type": "Country", name: "Norway" },
  award:
    "Melodi Grand Prix-vinner 1984 med Dollie de Luxe, representerte Norge i Eurovision Song Contest i Luxembourg. Spellemannspris-vinner med Dollie de Luxe.",
  hasOccupation: {
    "@type": "Occupation",
    name: "Sanger, Artist og Vokalpedagog",
    occupationalCategory: "Performing Arts",
  },
  memberOf: [
    { "@type": "MusicGroup", name: "Dollie de Luxe" },
    { "@type": "MusicGroup", name: "Which Witch" },
    { "@type": "MusicGroup", name: "MISTRA" },
  ],
  knowsAbout: [
    "Sang",
    "Opera",
    "Pop",
    "Metal",
    "Vokalundervisning",
    "Melodi Grand Prix",
    "Musical",
    "Crossover-vokal",
  ],
  sameAs: [
    "https://www.facebook.com/benedicteadrian",
    "https://www.instagram.com/benedicteadrian",
    "https://open.spotify.com/artist/0XwVL3o8eZT2dNMC7iibwo",
  ],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Benedicte Adrian",
  url: BASE_URL,
  inLanguage: "nb-NO",
  description:
    "Offisiell nettside for norsk sanger, artist og vokalpedagog Benedicte Adrian.",
  publisher: { "@id": `${BASE_URL}/#person` },
};

const lessonsFAQItems = [
  {
    "@type": "Question",
    name: "Hvem kan ta sangtimer hos Benedicte Adrian?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Sangtimer er tilgjengelig for alle nivåer — fra nybegynnere til profesjonelle sangere. Benedicte tilbyr privatundervisning, workshops og masterclass tilpasset individuelle behov.",
    },
  },
  {
    "@type": "Question",
    name: "Hva tilbyr Benedicte Adrian av vokalundervisning?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Benedicte Adrian tilbyr privatundervisning en-til-en, workshops og gruppeundervisning for kor og musikklinjer, samt masterclass for sangstudenter og profesjonelle. Hun er også forfatter av sangboken «Lær å synge på 21 dager».",
    },
  },
  {
    "@type": "Question",
    name: "Hva er boken «Lær å synge på 21 dager»?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "«Lær å synge på 21 dager» er en sangbok skrevet av Benedicte Adrian og utgitt av Cappelen Damm. Boken gir strukturerte daglige øvelser på 30 minutter og passer for alle nivåer, fra nybegynnere til viderekomne sangere.",
    },
  },
  {
    "@type": "Question",
    name: "Hvordan kontakter jeg Benedicte Adrian for å booke sangtimer?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Ta kontakt via skjemaet på benedicteadrian.no/kontakt for å høre om pris, tilgjengelighet og bookingmuligheter.",
    },
  },
];

const contactFAQItems = [
  {
    "@type": "Question",
    name: "Hvem er Benedicte Adrian?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Benedicte Adrian er en norsk sanger og artist kjent fra Dollie de Luxe (MGP-vinner 1984 og Eurovision-representant), musikalen Which Witch og duoen MISTRA. Hun er også vokalpedagog og forfatter av «Lær å synge på 21 dager», utgitt av Cappelen Damm.",
    },
  },
  {
    "@type": "Question",
    name: "Hvordan kan jeg booke Benedicte Adrian til konsert eller arrangement?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Send en bookingforespørsel via kontaktskjemaet på benedicteadrian.no/kontakt. Benedicte er tilgjengelig for konserter, private arrangementer og bedriftseventer.",
    },
  },
  {
    "@type": "Question",
    name: "Hva tilbyr Benedicte Adrian?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Benedicte Adrian tilbyr konserter og opptredener, privatundervisning i sang og vokal, workshops og masterclass, og er tilgjengelig for mediesamarbeid og andre kulturprosjekter.",
    },
  },
];

const lessonsReviews = [
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
];

function breadcrumb(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: path ? `${BASE_URL}${path}` : BASE_URL,
    })),
  };
}

export const seoData = {
  home: {
    title: "Benedicte Adrian | Sanger, Artist & Vokalpedagog",
    description:
      "Benedicte Adrian — norsk sanger og artist. Kjent fra Dollie de Luxe, Which Witch, MISTRA og som vokalpedagog. Booking og sangtimer.",
    canonical: `${BASE_URL}/`,
    ogImage: `${BASE_URL}/images/gallery/benedicte-esten-borgos-01.webp`,
    heroImage: "/images/gallery/benedicte-esten-borgos-01.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [personSchema, websiteSchema],
    },
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
      "@graph": [
        {
          "@type": "ProfilePage",
          url: `${BASE_URL}/om`,
          mainEntity: { "@id": `${BASE_URL}/#person` },
        },
        breadcrumb([["Hjem"], ["Om Benedicte", "/om"]]),
        personSchema,
      ],
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
      "@graph": [
        {
          "@type": "MusicGroup",
          name: "Benedicte Adrian",
          url: `${BASE_URL}/musikk`,
          genre: ["Pop", "Opera", "Metal", "Schlager"],
          member: { "@id": `${BASE_URL}/#person` },
          album: [
            {
              "@type": "MusicAlbum",
              name: "Waltz of Death",
              byArtist: { "@type": "MusicGroup", name: "MISTRA" },
              datePublished: "2024",
              sameAs: "https://open.spotify.com/artist/0XwVL3o8eZT2dNMC7iibwo",
            },
            {
              "@type": "MusicAlbum",
              name: "Desember",
              byArtist: { "@id": `${BASE_URL}/#person` },
              datePublished: "2008",
              sameAs: "https://open.spotify.com/album/4aMMepPhOoMBSBJBnk0U9l",
            },
            {
              "@type": "MusicAlbum",
              name: "Which Witch",
              byArtist: { "@type": "MusicGroup", name: "Which Witch" },
              datePublished: "1987",
            },
            {
              "@type": "MusicAlbum",
              name: "Rock VS Opera",
              byArtist: { "@type": "MusicGroup", name: "Dollie de Luxe" },
              datePublished: "1985",
            },
            {
              "@type": "MusicAlbum",
              name: "Dollie's Diary",
              byArtist: { "@type": "MusicGroup", name: "Dollie de Luxe" },
              datePublished: "1983",
            },
          ],
        },
        breadcrumb([["Hjem"], ["Musikk", "/musikk"]]),
        personSchema,
      ],
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
      "@graph": [
        {
          "@type": "Service",
          name: "Sangtimer med Benedicte Adrian",
          url: `${BASE_URL}/sangtimer`,
          description:
            "Sangtimer og vokalundervisning med Benedicte Adrian. Privatundervisning, workshops og masterclass for alle nivåer.",
          provider: { "@id": `${BASE_URL}/#person` },
          serviceType: "Vokalundervisning",
          areaServed: { "@type": "Country", name: "Norway" },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5",
            bestRating: "5",
            reviewCount: "6",
          },
          review: lessonsReviews,
        },
        {
          "@type": "FAQPage",
          mainEntity: lessonsFAQItems,
        },
        breadcrumb([["Hjem"], ["Sangtimer", "/sangtimer"]]),
        personSchema,
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
      "@graph": [
        {
          "@type": "ImageGallery",
          name: "Galleri — Benedicte Adrian",
          url: `${BASE_URL}/galleri`,
          description:
            "Bilder fra konserter, forestillinger og prosjekter med Benedicte Adrian. Pressebilder og portretter.",
          author: { "@id": `${BASE_URL}/#person` },
        },
        breadcrumb([["Hjem"], ["Galleri", "/galleri"]]),
        personSchema,
      ],
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
      "@graph": [
        {
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
                description:
                  "Deltaker i TV2s populære underholdningsprogram Boksen, sesong 2.",
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
                description:
                  "Benedicte var med i det populære matlagingsprogrammet Kokkeskolen på TV2.",
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
                description:
                  "Benedicte deltok i NRKs festlige julekalender-konsept med kjente norske artister.",
                datePublished: "2024",
                productionCompany: { "@type": "Organization", name: "NRK" },
              },
            },
          ],
        },
        breadcrumb([["Hjem"], ["TV & Media", "/tv"]]),
        personSchema,
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
      "@graph": [
        {
          "@type": "ContactPage",
          name: "Kontakt & Booking — Benedicte Adrian",
          url: `${BASE_URL}/kontakt`,
          description:
            "Ta kontakt med Benedicte Adrian for booking, sangtimer eller andre henvendelser.",
          mainEntity: { "@id": `${BASE_URL}/#person` },
        },
        {
          "@type": "FAQPage",
          mainEntity: contactFAQItems,
        },
        breadcrumb([["Hjem"], ["Kontakt", "/kontakt"]]),
        personSchema,
      ],
    },
  },
  notFound: {
    title: "404 — Siden finnes ikke | Benedicte Adrian",
    description: "Siden du leter etter finnes ikke.",
    canonical: `${BASE_URL}/`,
    noindex: true,
  },
};
