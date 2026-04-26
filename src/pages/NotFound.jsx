import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition.jsx";
import { goldInitials } from "../utils/goldInitials";

export default function NotFound() {
  return (
    <PageTransition>
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-gradient-gold font-serif text-[10rem] font-bold leading-none sm:text-[14rem]">
          404
        </p>
        <h1 className="mt-4 font-serif text-3xl font-bold sm:text-4xl">
          {goldInitials("Siden finnes ikke")}
        </h1>
        <p className="mt-4 max-w-md text-text-secondary">
          Beklager, vi fant ikke siden du leter etter. Den kan ha blitt flyttet
          eller slettet.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-lg border border-accent-gold px-8 py-3 text-sm font-semibold uppercase tracking-wider text-accent-gold transition-all duration-normal hover:bg-accent-gold hover:text-bg"
        >
          Tilbake til forsiden
        </Link>
      </section>
    </PageTransition>
  );
}
