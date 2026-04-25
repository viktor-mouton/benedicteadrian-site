import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition.js";

function getIsTouch() {
  return typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;
}

function subscribe() {
  return () => {};
}

export default function CursorGlow() {
  const { x, y } = useMousePosition();
  const isTouch = useSyncExternalStore(subscribe, getIsTouch, () => true);

  if (isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 h-[300px] w-[300px] rounded-full opacity-[0.07]"
      animate={{ x: x - 150, y: y - 150 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      style={{
        background:
          "radial-gradient(circle, var(--color-accent-gold) 0%, transparent 70%)",
      }}
    />
  );
}
