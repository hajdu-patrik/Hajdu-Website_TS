export const uiMotion = {
  easeStandard: [0.22, 1, 0.36, 1] as const,
  easeSoft: [0.4, 0, 0.2, 1] as const,
  duration: {
    fast: 0.2,
    normal: 0.32,
    reveal: 0.45,
    float: 12,
  },
} as const;

export const fadeSlideY = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
} as const;
