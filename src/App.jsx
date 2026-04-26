import { useState, lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CursorGlow from "./components/ui/CursorGlow.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";
import useScrollToTop from "./hooks/useScrollToTop.js";
import { seoData } from "./data/seo.js";

const PATH_SEO_MAP = {
  "/": "home",
  "/om": "about",
  "/musikk": "music",
  "/sangtimer": "lessons",
  "/galleri": "gallery",
  "/tv": "tv",
  "/kontakt": "contact",
};
const DEFAULT_OG_IMAGE =
  "https://benedicteadrian.no/images/hero/mistra-konsert.webp";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Music = lazy(() => import("./pages/Music.jsx"));
const Lessons = lazy(() => import("./pages/Lessons.jsx"));
const GalleryPage = lazy(() => import("./pages/Gallery.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const TV = lazy(() => import("./pages/TV.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useScrollToTop();

  const seoKey = PATH_SEO_MAP[location.pathname];
  const pageSeo = seoKey ? seoData[seoKey] : seoData.notFound;
  const ogImage = pageSeo.ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        import("./pages/About.jsx");
        import("./pages/Music.jsx");
        import("./pages/Lessons.jsx");
        import("./pages/Gallery.jsx");
        import("./pages/Contact.jsx");
        import("./pages/TV.jsx");
        import("./pages/NotFound.jsx");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <>
      <Helmet>
        <title>{pageSeo.title}</title>
        <meta name="description" content={pageSeo.description} />
        <link rel="canonical" href={pageSeo.canonical} />
        {pageSeo.noindex && <meta name="robots" content="noindex" />}
        <meta property="og:title" content={pageSeo.title} />
        <meta property="og:description" content={pageSeo.description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={pageSeo.canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="nb_NO" />
        <meta property="og:site_name" content="Benedicte Adrian" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageSeo.title} />
        <meta name="twitter:description" content={pageSeo.description} />
        <meta name="twitter:image" content={ogImage} />
        {pageSeo.structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(pageSeo.structuredData)}
          </script>
        )}
      </Helmet>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Analytics />
      <CursorGlow />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Suspense fallback={null}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/om" element={<About />} />
                <Route path="/musikk" element={<Music />} />
                <Route path="/sangtimer" element={<Lessons />} />
                <Route path="/galleri" element={<GalleryPage />} />
                <Route path="/kontakt" element={<Contact />} />
                <Route path="/tv" element={<TV />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
