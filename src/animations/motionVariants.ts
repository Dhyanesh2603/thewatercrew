import type { Variants } from 'framer-motion'

// Engineering-grade subtle cubic-bezier easing curve
export const easeEngineering = [0.16, 1, 0.3, 1] as const

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeEngineering,
      delay: customDelay,
    },
  }),
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeEngineering,
      delay: customDelay,
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const technicalReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
    y: 16,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: easeEngineering,
    },
  },
}

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeEngineering,
    },
  },
}

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: easeEngineering,
    },
  },
}
