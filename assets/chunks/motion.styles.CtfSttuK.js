import{i as a}from"./Button.DkmThuAs.js";const r=a`
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
   * KEYFRAME ANIMATIONS
   * ============================================ */

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
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
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

  @keyframes ag-fx-pulse-wobble {
    0% {
      transform: scale(1) rotate(0deg);
    }
    50% {
      transform: scale(1.09) rotate(0deg);
    }
    62.5% {
      transform: scale(1.05) rotate(-3deg);
    }
    87.5% {
      transform: scale(1.02) rotate(3deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }
`;export{r};
