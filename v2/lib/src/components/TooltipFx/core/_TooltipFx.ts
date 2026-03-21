import { css, type CSSResultGroup } from 'lit';
import { property } from 'lit/decorators.js';
import { Tooltip, type TooltipProps } from '../../Tooltip/core/_Tooltip.js';
import { motionStyles } from '../../../styles/motion.styles.js';
import type { FxProps } from '../../../types/fx.js';

// Combined props interface
export interface TooltipFxProps extends TooltipProps, FxProps { }

/**
 * TooltipFx - Tooltip with CSS animation effects
 *
 * Extends Tooltip to add optional CSS-only animation effects.
 * Inherits all Tooltip functionality and styling.
 *
 * Features:
 * - CSS-only FX effects applied to the tooltip popup element
 * - Entrance effects (e.g., slide-in) complement the tooltip show/hide behavior
 * - Automatic reduced-motion support
 */
export class TooltipFx extends Tooltip implements TooltipFxProps {
  static override styles: CSSResultGroup = [
    motionStyles,
    Tooltip.styles,
    css`
      /* ========================================
         FX EFFECT SETUP
         Add necessary CSS properties for effects that need them
         ======================================== */

      /* Shimmer needs a gradient mask */
      .tooltip.ag-fx-shimmer {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.9) 40%,
          rgba(0, 0, 0, 0.9) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        mask-image: linear-gradient(
          to right,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 40%,
          rgba(0, 0, 0, 1) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        -webkit-mask-size: 250% 100%;
        mask-size: 250% 100%;
        -webkit-mask-position: 215% 0;
        mask-position: 215% 0;
      }

      /* Ripple needs overflow visible to show expanding ring */
      .tooltip.ag-fx-ripple {
        overflow: visible;
      }

      /* Highlight Sweep needs a gradient background overlay */
      .tooltip.ag-fx-highlight-sweep {
        position: relative;
        overflow: hidden;
      }

      .tooltip.ag-fx-highlight-sweep::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          transparent 30%,
          var(--ag-fx-sweep-color, rgba(255, 255, 255, 0.3)) 50%,
          transparent 70%,
          transparent 100%
        );
        transform: translateX(-100%);
        pointer-events: none;
      }

      /* ========================================
         FX EFFECT CLASSES
         Applied to target element (.tooltip)
         ======================================== */

      :host([fx="bounce"]) .tooltip,
      :host([fx="flip"]) .tooltip,
      :host([fx="jelly"]) .tooltip {
        animation-iteration-count: 1;
      }

      /* Hover-triggered effects (triggered when hovering the tooltip host container) */
      :host([fx="bounce"]:hover) .tooltip {
        animation: ag-fx-bounce var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="pulse"]:hover) .tooltip {
        animation: ag-fx-pulse var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="jelly"]:hover) .tooltip {
        animation: ag-fx-jelly var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="shimmer"]:hover) .tooltip {
        animation: ag-fx-shimmer var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="glow"]:hover) .tooltip {
        animation: ag-fx-glow var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="flip"]:hover) .tooltip {
        animation: ag-fx-flip var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="ripple"]:hover) .tooltip {
        animation: ag-fx-ripple var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      :host([fx="highlight-sweep"]:hover) .tooltip::before {
        animation: ag-fx-highlight-sweep var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Active/press effects */
      .tooltip.ag-fx-press-pop:active {
        animation: ag-fx-press-pop var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Entrance effects */
      .tooltip.ag-fx-slide-in {
        animation: ag-fx-slide-in var(--ag-fx-duration, 200ms) var(--ag-fx-ease, ease);
      }

      /* Disabled state */
      .tooltip.ag-fx-disabled {
        animation: none !important;
      }

      .tooltip.ag-fx-disabled::before {
        animation: none !important;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        .tooltip.ag-fx-bounce,
        .tooltip.ag-fx-pulse,
        .tooltip.ag-fx-jelly,
        .tooltip.ag-fx-shimmer,
        .tooltip.ag-fx-glow,
        .tooltip.ag-fx-flip,
        .tooltip.ag-fx-ripple,
        .tooltip.ag-fx-highlight-sweep,
        .tooltip.ag-fx-press-pop,
        .tooltip.ag-fx-slide-in {
          animation-duration: 0.01ms !important;
          transition-duration: 0.01ms !important;
        }
      }
    `
  ];

  // FX props
  @property({ type: String, reflect: true })
  fx?: string;

  @property({ type: String, attribute: 'fx-speed', reflect: true })
  fxSpeed!: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, attribute: 'fx-ease', reflect: true })
  fxEase!: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';

  @property({ type: Boolean, attribute: 'fx-disabled', reflect: true })
  fxDisabled!: boolean;

  private _fxObserver: MutationObserver | null = null;

  constructor() {
    super();
    this.fxSpeed = 'md';
    this.fxEase = 'ease';
    this.fxDisabled = false;
  }

  override connectedCallback() {
    super.connectedCallback();
    this._updateTheme();

    this._fxObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          this._updateTheme();
        }
      });
    });

    this._fxObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._fxObserver) {
      this._fxObserver.disconnect();
      this._fxObserver = null;
    }
  }

  private _updateTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const targetEl = this.shadowRoot?.querySelector('.tooltip');
    if (targetEl instanceof HTMLElement) {
      targetEl.style.setProperty('--ag-fx-shadow-opacity', isDark ? '0.8' : '0.4');
      // Tooltip background is dark (ag-neutral-900), use lighter sweep in light mode
      targetEl.style.setProperty('--ag-fx-sweep-color', 'rgba(255, 255, 255, 0.3)');
    }
  }

  override firstUpdated() {
    super.firstUpdated();
    this._applyFxClasses();
    this._applyFxCustomProperties();
    this._updateTheme();
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);

    if (changedProperties.has('fx') || changedProperties.has('fxDisabled')) {
      this._applyFxClasses();
    }

    if (changedProperties.has('fxSpeed') || changedProperties.has('fxEase')) {
      this._applyFxCustomProperties();
    }
  }

  private _applyFxClasses() {
    const targetEl = this.shadowRoot?.querySelector('.tooltip');
    if (targetEl) {
      const classesToRemove: string[] = [];
      targetEl.classList.forEach((className: string) => {
        if (className.startsWith('ag-fx-')) {
          classesToRemove.push(className);
        }
      });
      classesToRemove.forEach(className => targetEl.classList.remove(className));

      if (this.fx && !this.fxDisabled) {
        targetEl.classList.add(`ag-fx-${this.fx}`);
      }

      if (this.fxDisabled) {
        targetEl.classList.add('ag-fx-disabled');
      } else {
        targetEl.classList.remove('ag-fx-disabled');
      }
    }
  }

  private _applyFxCustomProperties() {
    const targetEl = this.shadowRoot?.querySelector('.tooltip');
    if (targetEl instanceof HTMLElement) {
      targetEl.style.setProperty('--ag-fx-duration', `var(--ag-fx-duration-${this.fxSpeed})`);
      targetEl.style.setProperty('--ag-fx-ease', `var(--ag-fx-ease-${this.fxEase})`);
    }
  }
}
