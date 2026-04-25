import { useSyncExternalStore, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function getIsTouch() {
  return typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
}

function subscribe() {
  return () => {};
}

export default function CursorGlow() {
  const mouseX = useMotionValue(-150);
  const mouseY = useMotionValue(-150);
  const x = useSpring(mouseX, { damping: 30, stiffness: 200, mass: 0.5 });
  const y = useSpring(mouseY, { damping: 30, stiffness: 200, mass: 0.5 });
  const isTouch = useSyncExternalStore(subscribe, getIsTouch, () => true);

  useEffect(() => {
    if (isTouch) return;
    const onMouseMove = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [isTouch, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 h-[300px] w-[300px] rounded-full opacity-[0.07]"
      style={{
        x,
        y,
        background:
          "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)",
      }}
    />
  );
}
