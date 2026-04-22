import { useEffect } from "react";
import AnimatedSection from "./AnimatedSection.jsx";

export default function InstagramFeed({ feedId }) {
  useEffect(() => {
    if (!document.getElementById("behold-widget-script")) {
      const script = document.createElement("script");
      script.id = "behold-widget-script";
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <AnimatedSection>
      <behold-widget feed-id={feedId} />
    </AnimatedSection>
  );
}
