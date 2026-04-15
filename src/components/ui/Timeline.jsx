import AnimatedSection from "./AnimatedSection.jsx";

export default function Timeline({ events }) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />

      <div className="space-y-16">
        {events.map((event, i) => {
          const isLeft = i % 2 === 0;

          return (
            <AnimatedSection
              key={event.year + event.title}
              delay={i * 0.1}
              direction={isLeft ? "left" : "right"}
            >
              <div className="relative pl-12 md:pl-0">
                {/* Dot on the line */}
                <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent-gold bg-bg md:left-1/2" />

                {/* Two-column grid on desktop */}
                <div className="md:grid md:grid-cols-2">
                  {/* Left slot: text when isLeft, image when !isLeft */}
                  {isLeft ? (
                    <div className="md:pr-16 md:text-right">
                      <span className="text-gradient-gold font-serif text-2xl font-bold">
                        {event.year}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-semibold text-text-primary">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {event.description}
                      </p>
                      {event.image && (
                        <div className="mt-4 md:hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full rounded-xl object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    event.image && (
                      <div className="hidden md:flex md:items-center md:pr-16">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full rounded-xl object-cover shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    )
                  )}

                  {/* Right slot: image when isLeft, text when !isLeft */}
                  {isLeft ? (
                    event.image && (
                      <div className="hidden md:flex md:items-center md:pl-16">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full rounded-xl object-cover shadow-lg"
                          loading="lazy"
                        />
                      </div>
                    )
                  ) : (
                    <div className="md:pl-16">
                      <span className="text-gradient-gold font-serif text-2xl font-bold">
                        {event.year}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-semibold text-text-primary">
                        {event.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {event.description}
                      </p>
                      {event.image && (
                        <div className="mt-4 md:hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full rounded-xl object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </div>
  );
}
