import { Link } from "react-router-dom";
import { navigationItems } from "../../data/navigation.js";
import SocialIcons from "../ui/SocialIcons.jsx";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-serif text-2xl font-bold text-text-primary"
            >
              Benedicte Adrian
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-secondary">
              Sanger, artist og vokalpedagog. Kjent fra Dollie de Luxe, Den
              Norske Opera og MISTRA.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
              Sider
            </h3>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm text-text-secondary transition-colors hover:text-accent-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
              Kontakt
            </h3>
            <a
              href="mailto:post@benedicteadrian.no"
              className="text-sm text-text-secondary transition-colors hover:text-accent-gold"
            >
              post@benedicteadrian.no
            </a>
            <div className="mt-6">
              <SocialIcons />
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} Benedicte Adrian. Alle rettigheter
            reservert.
          </p>
        </div>
      </div>
    </footer>
  );
}
