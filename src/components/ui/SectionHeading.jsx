import AnimatedSection from "./AnimatedSection.jsx";

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}) {
  const alignClasses = {
    center: "text-center",
    left: "text-left",
  };

  return (
    <AnimatedSection className={`mb-12 ${alignClasses[align]}`}>
      <h2 className="font-serif text-4xl font-bold sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      <div
        className={`mt-4 h-px w-16 bg-accent-gold ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  );
}
