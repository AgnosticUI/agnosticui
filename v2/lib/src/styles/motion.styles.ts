/**
 * Shared motion styles - Reusable CSS keyframes and animation utilities
 *
 * These styles can be imported and used by any component that needs animation effects.
 * Usage:
 * ```
 * import { motionStyles } from '../../styles/motion.styles.js';
 *
 * static styles = [motionStyles, css`...component-specific styles...`];
 * ```
 */

// v2/lib/src/styles/motion.styles.ts
import { css } from 'lit';

/**
 * 1. UNIFIED KEYFRAMES ENGINE (Singular Source of Truth)
 * Shared between internal Shadow DOM components and global Light DOM utilities.
 */
export const sharedKeyframes = css`
  /* Bounce - vertical pop effect */
  @keyframes ag-fx-bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-25%); }
  }

  /* Pulse - scale grow/shrink */
  @keyframes ag-fx-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* Jelly - squash/stretch */
  @keyframes ag-fx-jelly {
    0%, 100% { transform: scale(1, 1); }
    30% { transform: scale(1.12, 0.88); }
    40% { transform: scale(0.88, 1.12); }
    50% { transform: scale(1.05, 0.95); }
    65% { transform: scale(0.98, 1.02); }
    75% { transform: scale(1.02, 0.98); }
  }

  /* Shimmer - light sweep (mask animation) */
  @keyframes ag-fx-shimmer {
    0% { 
      -webkit-mask-position: 50% 0;
      mask-position: 50% 0;
    }
    100% { 
      -webkit-mask-position: -125% 0;
      mask-position: -125% 0;
    }
  }

  /* Glow - box-shadow pulse */
  @keyframes ag-fx-glow {
    0%, 100% { box-shadow: 0 0 0 0 rgba(var(--ag-primary-rgb), 0); }
    50% { box-shadow: 0 0 14px 2px rgba(var(--ag-primary-rgb), var(--ag-fx-shadow-opacity, 0.4)); }
  }

  /* Flip - 3D rotation */
  @keyframes ag-fx-flip {
    0% { transform: perspective(400px) rotateY(0); }
    100% { transform: perspective(400px) rotateY(360deg); }
  }

  /* Icon Reveal - clip path */
  @keyframes ag-fx-icon-reveal {
    0% { clip-path: circle(0% at 50% 50%); }
    100% { clip-path: circle(150% at 50% 50%); }
  }

  /* Ripple - radial expansion */
  @keyframes ag-fx-ripple {
    0% { box-shadow: 0 0 0 0 rgba(var(--ag-primary-rgb), var(--ag-fx-shadow-opacity, 0.4)); }
    100% { box-shadow: 0 0 1px 12px rgba(var(--ag-primary-rgb), 0); }
  }

  /* Highlight Sweep - background gradient sweep */
  @keyframes ag-fx-highlight-sweep {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }

  /* Press-pop - quick press down/up */
  @keyframes ag-fx-press-pop {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(0.95); }
  }

  /* Tilt Press - 3D tilt */
  @keyframes ag-fx-tilt-press {
    0%, 100% { transform: perspective(500px) rotateX(0); }
    50% { transform: perspective(500px) rotateX(10deg); }
  }

  /* Slide-in - entrance from below */
  @keyframes ag-fx-slide-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Grow - button increases in size */
  @keyframes ag-fx-grow {
    100% { transform: scale(1.09); }
  }

  /* Shrink - button decreases in size */
  @keyframes ag-fx-shrink {
    100% { transform: scale(0.9); }
  }

  /* Push - simulates physical press */
  @keyframes ag-fx-push {
    50% { transform: translateY(4px); }
  }

  /* Shake/Jitter effect */
  @keyframes ag-fx-shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-4px); }
    75% { transform: translateX(4px); }
  }

  /* Wobble effect */
  @keyframes ag-fx-wobble {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-3deg); }
    75% { transform: rotate(3deg); }
  }

  /* Pulse-Wobble Sequential */
  @keyframes ag-fx-pulse-wobble {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.09) rotate(0deg); }
    62.5% { transform: scale(1.05) rotate(-3deg); }
    87.5% { transform: scale(1.02) rotate(3deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
`;

/**
 * 2. THE PUBLIC UTILITIES LAYER
 * Collected by build-motion-utilities.mjs and written out to dist/styles/motion-utilities.css.
 */
export const sharedUtilityRules = css`
  /* Inject the shared keyframes engine so light-DOM targets can resolve animation names */
  ${sharedKeyframes}

  /* ==========================================================================
     1. BASE INHERIT UTILITY DECLARATIONS
     ========================================================================== */
  .ag-fx-inherit-bounce,
  .ag-fx-inherit-pulse,
  .ag-fx-inherit-jelly,
  .ag-fx-inherit-shimmer,
  .ag-fx-inherit-glow,
  .ag-fx-inherit-flip,
  .ag-fx-inherit-icon-reveal,
  .ag-fx-inherit-ripple,
  .ag-fx-inherit-highlight-sweep,
  .ag-fx-inherit-press-pop,
  .ag-fx-inherit-tilt-press,
  .ag-fx-inherit-slide-in {
    animation-duration: var(--ag-fx-duration, 200ms);
    animation-timing-function: var(--ag-fx-ease, ease);
    animation-fill-mode: forwards;
  }

  /* ==========================================================================
     2. CONTEXT-AWARE HOVER & ACTIVE TRIGGERS
     ========================================================================== */

  /* Bounce Triggers */
  .ag-fx-inherit-bounce:hover,
  [fx="bounce"]:hover .ag-fx-inherit-bounce,
  .ag-fx-trigger:hover .ag-fx-inherit-bounce {
    animation-name: ag-fx-bounce;
  }

  /* Pulse Triggers */
  .ag-fx-inherit-pulse:hover,
  [fx="pulse"]:hover .ag-fx-inherit-pulse,
  .ag-fx-trigger:hover .ag-fx-inherit-pulse {
    animation-name: ag-fx-pulse;
  }

  /* Jelly Triggers */
  .ag-fx-inherit-jelly:hover,
  [fx="jelly"]:hover .ag-fx-inherit-jelly,
  .ag-fx-trigger:hover .ag-fx-inherit-jelly {
    animation-name: ag-fx-jelly;
  }

  /* Shimmer */
  .ag-fx-inherit-shimmer:hover,
  [fx="shimmer"]:hover .ag-fx-inherit-shimmer,
  .ag-fx-trigger:hover .ag-fx-inherit-shimmer {
    animation-name: ag-fx-shimmer;
  }

  /* Glow */
  .ag-fx-inherit-glow:hover,
  [fx="glow"]:hover .ag-fx-inherit-glow,    
  .ag-fx-trigger:hover .ag-fx-inherit-glow {
    animation-name: ag-fx-glow;
  }

  /* Flip */
  .ag-fx-inherit-flip:hover,
  [fx="flip"]:hover .ag-fx-inherit-flip,    
  .ag-fx-trigger:hover .ag-fx-inherit-flip {
    animation-name: ag-fx-flip;
  }

  /* Icon Reveal */
  .ag-fx-inherit-icon-reveal:hover,
  [fx="icon-reveal"]:hover .ag-fx-inherit-icon-reveal,
  .ag-fx-trigger:hover .ag-fx-inherit-icon-reveal {
    animation-name: ag-fx-icon-reveal;
  }

  /* Ripple */
  .ag-fx-inherit-ripple:hover,
  [fx="ripple"]:hover .ag-fx-inherit-ripple,
  .ag-fx-trigger:hover .ag-fx-inherit-ripple {
    animation-name: ag-fx-ripple;
  }

  /* Highlight Sweep */
  .ag-fx-inherit-highlight-sweep:hover,
  [fx="highlight-sweep"]:hover .ag-fx-inherit-highlight-sweep,
  .ag-fx-trigger:hover .ag-fx-inherit-highlight-sweep {   
    animation-name: ag-fx-highlight-sweep;
  }

  /* Press Pop (Active State Trigger) */
  .ag-fx-inherit-press-pop:active,
  [fx="press-pop"]:active .ag-fx-inherit-press-pop,
  .ag-fx-trigger:active .ag-fx-inherit-press-pop {
    animation-name: ag-fx-press-pop;
  }

  /* Tilt Press (Active State Trigger) */
  .ag-fx-inherit-tilt-press:active,
  [fx="tilt-press"]:active .ag-fx-inherit-tilt-press,
  .ag-fx-trigger:active .ag-fx-inherit-tilt-press {
    animation-name: ag-fx-tilt-press;
  }

  /* Slide In */
  .ag-fx-inherit-slide-in {
    animation-name: ag-fx-slide-in;
  }

  /* ==========================================================================
     3. ACCESSIBILITY OVERRIDES
     ========================================================================= */
  @media (prefers-reduced-motion: reduce) {
    .ag-fx-inherit-bounce,
    .ag-fx-inherit-pulse,
    .ag-fx-inherit-jelly,
    .ag-fx-inherit-shimmer,
    .ag-fx-inherit-glow,
    .ag-fx-inherit-flip,
    .ag-fx-inherit-icon-reveal,
    .ag-fx-inherit-ripple,
    .ag-fx-inherit-highlight-sweep,
    .ag-fx-inherit-press-pop,
    .ag-fx-inherit-tilt-press,
    .ag-fx-inherit-slide-in {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/**
 * 3. CORE COMPONENT STYLES LAYER
 * Core internal components continue importing this exactly as they do today.
 * Private shadow DOM elements are unpolluted by any global utility selectors.
 */
export const motionStyles = css`
  /* ============================================
   * VARIABLES
   * ============================================ */
  :host {
    /* Speed presets */
    --ag-fx-duration-xs: 100ms;
    --ag-fx-duration-sm: 150ms;
    --ag-fx-duration-md: 200ms;
    --ag-fx-duration-lg: 300ms;
    --ag-fx-duration-xl: 500ms;

    /* Easing presets */
    --ag-fx-ease-ease: ease;
    --ag-fx-ease-ease-in: ease-in;
    --ag-fx-ease-ease-out: ease-out;
    --ag-fx-ease-ease-in-out: ease-in-out;
    --ag-fx-ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --ag-fx-ease-spring-sm: cubic-bezier(0.5, 1.5, 0.5, 1);
    --ag-fx-ease-spring-md: cubic-bezier(0.5, 2, 0.5, 1);
    --ag-fx-ease-spring-lg: cubic-bezier(0.5, 2.5, 0.5, 1);
  }

  /* ============================================
   * PRIVATE SHADOW DOM KEYFRAME ENGINE
   * ============================================ */
  ${sharedKeyframes}
`;
