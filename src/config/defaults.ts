/**
 * Central configuration file for all default values across the application.
 * 
 * This file prevents hardcoded values in components and ensures consistency.
 * All values here should be referenced throughout the codebase.
 */

/**
 * Section IDs used for navigation and scroll tracking.
 * These must match the `id` attributes in section components.
 */
export const SECTION_IDS = [
  'hero',
  'origin',
  'learning',
  'projects',
  'work',
  'now',
] as const;

export type SectionId = typeof SECTION_IDS[number];

/**
 * Custom cursor states that can be triggered via `data-cursor` attributes.
 */
export const CURSOR_STATES = [
  'default',
  'hover',
  'link',
  'project',
  'assistant',
  'text',
] as const;

export type CursorState = typeof CURSOR_STATES[number];

/**
 * Responsive breakpoints (in pixels).
 * Use these instead of hardcoded values.
 */
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
  wide: 1536,
} as const;

/**
 * GSAP animation timings and easings.
 * Centralized to maintain consistent animation feel.
 */
export const ANIMATION = {
  durations: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.0,
    hero: {
      name: 1.0,
      title: 0.8,
      tagline: 0.8,
      scroll: 0.6,
    },
  },
  easings: {
    default: 'power3.out',
    smooth: 'power2.inOut',
    bounce: 'back.out(1.7)',
  },
  stagger: {
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
  overlap: {
    small: '-=0.2',
    medium: '-=0.4',
    large: '-=0.5',
  },
} as const;

/**
 * Scroll-related configuration.
 */
export const SCROLL = {
  smoothness: 0.15, // For smooth cursor follow
  velocityThreshold: 2, // Threshold for detecting fast scrolling
  intersectionThreshold: 0.5, // For section observer
  intersectionRootMargin: '-20% 0px -20% 0px', // For section observer
} as const;

/**
 * Layout spacing constants.
 */
export const LAYOUT = {
  sectionPadding: '6rem',
  containerMaxWidth: '1280px',
  navHeight: '4rem',
} as const;

/**
 * Glass effect opacity values.
 */
export const GLASS = {
  background: 0.05,
  border: 0.1,
  blur: '12px',
} as const;

/**
 * Z-index layers for consistent stacking.
 */
export const Z_INDEX = {
  base: 0,
  content: 10,
  nav: 50,
  cursor: 9999,
  modal: 10000,
} as const;

/**
 * Theme transition duration (in ms).
 */
export const THEME_TRANSITION_DURATION = 300;

/**
 * Performance optimization settings.
 */
export const PERFORMANCE = {
  rafThrottle: true, // Use RAF for animations
  willChange: ['transform', 'opacity'], // CSS will-change properties
  lazyLoadThreshold: 0.1, // Intersection observer threshold for lazy loading
} as const;

/**
 * Development mode flag.
 */
export const IS_DEV = process.env.NODE_ENV === 'development';

/**
 * Query configuration for TanStack Query.
 */
export const QUERY_CONFIG = {
  defaultStaleTime: 5 * 60 * 1000, // 5 minutes
  defaultCacheTime: 10 * 60 * 1000, // 10 minutes
  defaultRetry: 3,
} as const;
