import { css } from 'lit';

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
export const motionStyles = css`
  /* ============================================
   * KEYFRAME ANIMATIONS
   * ============================================ */

  /* Bounce - vertical pop effect */
  @keyframes ag-fx-bounce {
    50% {
      transform: translateY(-4%);
    }
  }

  /* Pulse - scale grow/shrink */
  @keyframes ag-fx-pulse {
    50% {
      transform: scale(1.06);
    }
  }

  /* Jelly - squash/stretch */
  @keyframes ag-fx-jelly {
    30% {
      transform: scale(1.08, 0.92);
    }
    60% {
      transform: scale(0.95, 1.05);
    }
  }

  /* Press-pop - quick press down/up */
  @keyframes ag-fx-press-pop {
    50% {
      transform: scale(0.92);
    }
  }

  /* Slide-in - entrance from below */
  @keyframes ag-fx-slide-in {
    from {
      opacity: 0;
      transform: translateY(20%);
    }
  }

  /* Grow - button increases in size */
  @keyframes ag-fx-grow {
    100% {
      transform: scale(1.09);
    }
  }

  /* Shrink - button decreases in size */
  @keyframes ag-fx-shrink {
    100% {
      transform: scale(0.9);
    }
  }

  /* Push - simulates physical press */
  @keyframes ag-fx-push {
    50% {
      transform: translateY(4px);
    }
  }

  /* Shake/Jitter effect */
  @keyframes ag-fx-shake {
    0%, 100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-4px);
    }
    75% {
      transform: translateX(4px);
    }
  }

  /* Wobble effect */
  @keyframes ag-fx-wobble {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-3deg);
    }
    75% {
      transform: rotate(3deg);
    }
  }
`;
