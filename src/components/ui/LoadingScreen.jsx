import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center"
      >
        <p className="text-gradient-gold font-serif text-5xl font-bold tracking-wider sm:text-6xl">
          BA
        </p>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 h-px bg-accent-gold/50"
        />
      </motion.div>
    </motion.div>
  );
}
