import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "../../data/navigation.js";
import { goldInitials } from "../../utils/goldInitials";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
        scrolled && !mobileOpen
          ? "glass border-b border-border/50 py-3"
          : scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6"
        aria-label="Hovednavigasjon"
      >
        <Link
          to="/"
          className="font-serif text-2xl font-bold tracking-wide text-text-primary transition-colors hover:text-accent-gold"
        >
          {goldInitials("Benedicte Adrian")}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium tracking-wide uppercase transition-colors duration-normal ${
                    isActive
                      ? "text-accent-gold"
                      : "text-text-secondary hover:text-text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-gold"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger — z-50 keeps it above the overlay (z-40) within this stacking context */}
        <button
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Lukk meny" : "Åpne meny"}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text-primary"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-text-primary"
            transition={{ duration: 0.2 }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-text-primary"
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Mobile overlay — no backdrop-filter on header when open, so fixed inset-0 covers viewport correctly */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg/95 backdrop-blur-xl"
            >
              <nav>
                <ul className="flex flex-col items-center gap-8">
                  {navigationItems.map((item, i) => (
                    <motion.li
                      key={item.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                    >
                      <NavLink
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `font-serif text-3xl font-semibold transition-colors ${
                            isActive
                              ? "text-accent-gold"
                              : "text-text-primary hover:text-accent-gold"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
