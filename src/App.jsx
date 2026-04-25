import { useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CursorGlow from "./components/ui/CursorGlow.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";
import useScrollToTop from "./hooks/useScrollToTop.js";

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

  return (
    <>
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
