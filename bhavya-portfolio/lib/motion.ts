import type { Transition, Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};

export const mobileTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
};

export function getMotionProps(reducedMotion: boolean, isMobile: boolean) {
  if (reducedMotion) {
    return {
      initial: false as const,
      animate: undefined,
      whileInView: undefined,
      transition: { duration: 0 },
    };
  }

  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, margin: "-40px" as const },
    transition: isMobile ? mobileTransition : defaultTransition,
  };
}
