import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import CursorGlow from "./components/ui/CursorGlow.jsx";
import LoadingScreen from "./components/ui/LoadingScreen.jsx";
import useScrollToTop from "./hooks/useScrollToTop.js";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Music from "./pages/Music.jsx";
import Lessons from "./pages/Lessons.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import TV from "./pages/TV.jsx";
import NotFound from "./pages/NotFound.jsx";

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
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  );
}
