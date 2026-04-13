import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection.jsx";
import PlaceholderImage from "./PlaceholderImage.jsx";

export default function Card({
  image,
  title,
  subtitle,
  description,
  href,
  tag,
  delay = 0,
}) {
  const Wrapper = href ? "a" : "div";
  const wrapperProps = href
    ? {
        href,
        target: href.startsWith("http") ? "_blank" : undefined,
        rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
      }
    : {};

  return (
    <AnimatedSection delay={delay}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Wrapper
          {...wrapperProps}
          className="group block overflow-hidden rounded-xl border border-border bg-bg-card transition-all duration-normal hover:border-border-light hover:bg-bg-card-hover"
        >
          {/* Image area */}
          <div className="relative aspect-[4/3] overflow-hidden">
            {image ? (
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-slow group-hover:scale-105"
              />
            ) : (
              <PlaceholderImage label={title} />
            )}
            {tag && (
              <span className="absolute top-4 left-4 rounded-full bg-accent-gold/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bg">
                {tag}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="font-serif text-xl font-bold transition-colors group-hover:text-accent-gold">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-1 text-sm text-text-muted">{subtitle}</p>
            )}
            {description && (
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {description}
              </p>
            )}
          </div>
        </Wrapper>
      </motion.div>
    </AnimatedSection>
  );
}
