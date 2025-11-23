import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export interface AgProgressRingProps {
  /** Progress value (0–100) */
  value?: number;
  /** Size preset */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  /** Accessible label */
  label?: string;
  /** Disable animation (also respects prefers-reduced-motion) */
  'no-animation'?: boolean;
}

// Fixed SVG coordinate system — the modern standard
const VIEWBOX_SIZE = 100;
const STROKE_WIDTH = 10;
const RADIUS = (VIEWBOX_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export class AgProgressRing extends LitElement implements AgProgressRingProps {
  static styles = css`
    :host {
      --ag-progress-ring-size: var(--ag-progress-ring-size-base, 6rem);
      --ag-progress-ring-track-color: var(--ag-border-subtle);
      --ag-progress-ring-indicator-color: var(--ag-primary);
      --ag-progress-ring-transition-duration: var(--ag-motion-medium);

      display: inline-flex;
      vertical-align: middle;
      width: var(--ag-progress-ring-size);
      height: var(--ag-progress-ring-size);
    }

    /* Size variants */
    :host([size="small"]) { --ag-progress-ring-size: var(--ag-progress-ring-size-small, 5rem); }
    :host([size="large"])  { --ag-progress-ring-size: var(--ag-progress-ring-size-large, 7rem); }

    /* Color variants — fully token-driven */
    :host([variant="primary"]) { --ag-progress-ring-indicator-color: var(--ag-primary); }
    :host([variant="success"]) { --ag-progress-ring-indicator-color: var(--ag-success); }
    :host([variant="warning"]) { --ag-progress-ring-indicator-color: var(--ag-warning); }
    :host([variant="danger"])  { --ag-progress-ring-indicator-color: var(--ag-danger); }
    :host([variant="info"])    { --ag-progress-ring-indicator-color: var(--ag-info); }

    .progress-ring {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    svg {
      width: 100%;
      height: 100%;
      transform: rotate(-90deg);
      overflow: visible; /* Critical for Safari & stroke-linecap */
    }

    circle {
      fill: none;
      cx: 50;
      cy: 50;
      stroke-width: 10;
    }

    .track {
      stroke: var(--ag-progress-ring-track-color);
    }

    .indicator {
      stroke: var(--ag-progress-ring-indicator-color);
      stroke-linecap: round;
      transition: stroke-dashoffset var(--ag-progress-ring-transition-duration) ease;
    }

    .label {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: var(--ag-font-size-sm);
      font-weight: 600;
      color: var(--ag-text-primary);
      user-select: none;
      pointer-events: none;
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      :host(:not([no-animation="false"])) .indicator {
        transition: none;
      }
    }
    :host([no-animation]) .indicator {
      transition: none;
    }
  `;

  @property({ type: Number, reflect: true })
  get value(): number {
    return this._value;
  }
  set value(v: number) {
    const newVal = Math.max(0, Math.min(100, Number(v) || 0));
    if (this._value !== newVal) {
      this._value = newVal;
      this.requestUpdate();
    }
  }
  private _value = 0;

  @property({ reflect: true }) size?: 'small' | 'medium' | 'large';
  @property({ reflect: true }) variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info';
  @property() label?: string;
  @property({ type: Boolean, reflect: true, attribute: 'no-animation' }) noAnimation = false;

  render() {
    const offset = CIRCUMFERENCE - (this._value / 100) * CIRCUMFERENCE;
    const circumferenceStr = CIRCUMFERENCE.toFixed(4);

    return html`
      <div
        part="ag-progress-ring"
        class="progress-ring"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this._value}
        aria-valuetext=${`${this._value}%`}
        aria-label=${this.label || 'Progress'}
      >
        <svg viewBox="0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}">
          <circle part="ag-track" class="track" r="${RADIUS}"></circle>
          <circle
            part="ag-indicator"
            class="indicator"
            r="${RADIUS}"
            style="stroke-dasharray: ${circumferenceStr}; stroke-dashoffset: ${offset}px"
          ></circle>
        </svg>

        <div part="ag-label" class="label">
          <slot>${this._value}%</slot>
        </div>
      </div>
    `;
  }
}
