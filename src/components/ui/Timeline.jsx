import AnimatedSection from "./AnimatedSection.jsx";

export default function Timeline({ events }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

      <div className="space-y-12">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;

          return (
            <AnimatedSection
              key={event.year + event.title}
              delay={i * 0.1}
              direction={isLeft ? "left" : "right"}
            >
              <div className="relative flex items-start gap-8 pl-12 md:pl-0">
                {/* Dot on the line */}
                <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-gold bg-bg md:left-1/2" />

                {/* Content - alternating sides on desktop */}
                <div
                  className={`w-full md:w-1/2 ${
                    isLeft
                      ? "md:pr-16 md:text-right"
                      : "md:ml-auto md:pl-16"
                  }`}
                >
                  <span className="text-gradient-gold font-serif text-2xl font-bold">
                    {event.year}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-text-primary">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {event.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
