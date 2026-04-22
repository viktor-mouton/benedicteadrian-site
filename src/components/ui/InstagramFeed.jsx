import BeholdWidget from "@behold/react";
import AnimatedSection from "./AnimatedSection.jsx";

export default function InstagramFeed({ feedId }) {
  return (
    <AnimatedSection>
      <div className="behold-dark-theme">
        <BeholdWidget feedId={feedId} />
      </div>
    </AnimatedSection>
  );
}
