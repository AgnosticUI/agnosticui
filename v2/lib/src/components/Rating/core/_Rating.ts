import { LitElement, html, css, svg } from 'lit';
import { property, state } from 'lit/decorators.js';

// Event detail interfaces
export interface RatingChangeEventDetail {
  oldValue: number;
  newValue: number;
}
export interface RatingHoverEventDetail {
  phase: 'start' | 'move' | 'end';
  value: number;
}

// Event type definitions
export type RatingChangeEvent = CustomEvent<RatingChangeEventDetail>;
export type RatingHoverEvent = CustomEvent<RatingHoverEventDetail>;

// Prop types
export type RatingPrecision = 'whole' | 'half';
export type RatingSize = 'sm' | 'md' | 'lg';
export type RatingVariant = '' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

export interface RatingProps {
  value?: number;
  max?: number;
  precision?: RatingPrecision;
  readonly?: boolean;
  allowClear?: boolean;
  variant?: RatingVariant;
  size?: RatingSize;
  onRatingChange?: (event: RatingChangeEvent) => void;
  onRatingHover?: (event: RatingHoverEvent) => void;
}

let uniqueIdCounter = 0;

export class AgRating extends LitElement {
  private uniqueId = ++uniqueIdCounter; // Unique ID for clip paths in half-star rendering

  // Public properties
  @property({ type: Number }) value = 0; // Current rating value (can be fractional for half precision)
  @property({ type: Number }) max = 5; // Total number of stars
  @property({ type: String }) precision: 'whole' | 'half' = 'whole'; // Precision mode: whole or half stars
  @property({ type: Boolean, reflect: true }) readonly = false; // Disables interaction if true
  @property({ type: Boolean }) allowClear = false; // Allows clearing rating by clicking the same value
  @property({ type: String, reflect: true }) variant: '' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = ''; // Visual variant
  @property({ type: String, reflect: true }) size: RatingSize = 'md'; // Size: small, medium, large

  // Event handlers
  @property({ attribute: false })
  declare onRatingChange?: (event: RatingChangeEvent) => void;

  @property({ attribute: false })
  declare onRatingHover?: (event: RatingHoverEvent) => void;

  // Internal state
  @state() private hoverValue = 0; // Value during hover or drag
  @state() private isHovering = false; // Flag for hover state
  @state() private isPointerDown = false; // Flag for pointer down state

  constructor() {
    super();
    this.handlePointerMove = this.handlePointerMove.bind(this);
    this.handlePointerUp = this.handlePointerUp.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this.handleKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this.handleKeyDown);
    this.removeGlobalPointerListeners();
  }

  static styles = css`
    :host {
      display: inline-block;
      line-height: 1;
      user-select: none;
      outline: none;
    }

    .rating {
      display: inline-flex;
      gap: var(--ag-space-1);
      align-items: center;
      cursor: pointer;
    }

    :host([readonly]) .rating {
      cursor: default;
      pointer-events: none;
    }

    .star {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--ag-motion-medium) ease, opacity var(--ag-motion-medium);
      color: var(--ag-neutral-300);
      width: var(--ag-font-size-lg); /* Default size, overridden by size attribute */
      height: var(--ag-font-size-lg);
    }

    :host([size="sm"]) .star {
      width: var(--ag-font-size-md);
      height: var(--ag-font-size-md);
    }

    :host([size="md"]) .star {
      width: var(--ag-font-size-2x);
      height: var(--ag-font-size-2x);
    }

    :host([size="lg"]) .star {
      width: var(--ag-font-size-3x);
      height: var(--ag-font-size-3x);
    }

    .star svg path {
      fill: var(--ag-neutral-300); /* Empty color */
    }

    .star.filled > svg > path:last-of-type,
    .star.hover svg path {
      fill: var(--ag-yellow-400); /* Default filled color */
    }

    :host([variant="primary"]) .star.filled > svg > path:last-of-type,
    :host([variant="primary"]) .star.hover svg path {
      fill: var(--ag-primary);
    }
    :host([variant="secondary"]) .star.filled > svg > path:last-of-type,
    :host([variant="secondary"]) .star.hover svg path {
      fill: var(--ag-secondary);
    }
    :host([variant="success"]) .star.filled > svg > path:last-of-type,
    :host([variant="success"]) .star.hover svg path {
      fill: var(--ag-success);
    }
    :host([variant="warning"]) .star.filled > svg > path:last-of-type,
    :host([variant="warning"]) .star.hover svg path {
      fill: var(--ag-warning);
    }
    :host([variant="danger"]) .star.filled > svg > path:last-of-type,
    :host([variant="danger"]) .star.hover svg path {
      fill: var(--ag-danger);
    }

    .star-button {
      display: inline-block;
      border: 0;
      background: transparent;
      padding: 0;
      margin: 0;
      line-height: 0;
      cursor: inherit;
    }

    :host(:focus-visible) .rating {
      box-shadow: 0 0 0 var(--ag-focus-offset) rgba(var(--ag-focus), 0.12);
    }

    .visually-hidden {
      position: absolute !important;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0 0 0 0);
      white-space: nowrap;
      border: 0;
    }
  `;

  render() {
    const displayValue = this.isHovering ? this.hoverValue : this.value;
    const stars = Array.from({ length: this.max }, (_, i) => i + 1);

    return html`
      <div
        class="rating"
        part="base"
        role="slider"
        aria-label="Rating"
        aria-valuemin="0"
        aria-valuemax="${this.max}"
        aria-valuenow="${Number(this.value).toFixed(this.precision === 'half' ? 1 : 0)}"
        tabindex="${this.readonly ? -1 : 0}"
        @pointerdown="${this.handlePointerDown}"
        @pointermove="${this.handlePointerMoveHost}"
        @pointerleave="${this.handlePointerLeave}"
        @pointerenter="${this.handlePointerEnter}"
      >
        ${stars.map((starIndex) => this.renderStar(starIndex, displayValue))}
      </div>
      <span class="visually-hidden" aria-live="polite">
        ${displayValue} of ${this.max}
      </span>
      <slot name="label"></slot>
    `;
  }

  private renderStar(starIndex: number, displayValue: number) {
    const full = displayValue >= starIndex;
    const half = !full && displayValue >= starIndex - 0.5 && this.precision === 'half';
    const filledClass = full || half ? 'filled' : '';
    const hoverClass = this.isHovering && this.hoverValue >= starIndex ? 'hover' : '';
    const clipId = `ag-rating-half-${this.uniqueId}-${starIndex}`;

    return html`
      <span
        class="star-button"
        part="star-button"
        @click="${(e: MouseEvent) => this.handleClickStar(e, starIndex)}"
        aria-label="${starIndex} star"
        title="${starIndex} star"
      >
        <span class="star ${filledClass} ${hoverClass}" part="star" data-star="${starIndex}">
          ${this.renderStarSvg(full, half, clipId)}
        </span>
      </span>
    `;
  }

  private renderStarSvg(full: boolean, half: boolean, clipId: string) {
    if (half) {
      return svg`
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id="${clipId}">
              <rect x="0" y="0" width="12" height="24"></rect>
            </clipPath>
          </defs>
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
          <path clip-path="url(#${clipId})" d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
        </svg>
      `;
    }

    return svg`
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.401 8.174L12 18.896l-7.335 3.86 1.401-8.174L.132 9.21l8.2-1.192z" />
      </svg>
    `;
  }

  private roundToPrecision(value: number): number {
    if (this.precision === 'half') {
      return Math.round(value * 2) / 2;
    }
    return Math.round(value);
  }

  private getValueFromClientX(clientX: number): number {
    const ratingElement = this.shadowRoot?.querySelector('.rating') as HTMLElement;
    if (!ratingElement) return 0;
    const rect = ratingElement.getBoundingClientRect();
    const relativeX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const proportion = rect.width > 0 ? relativeX / rect.width : 0;
    const rawValue = proportion * this.max;
    return this.roundToPrecision(rawValue);
  }

  private handleClickStar(e: MouseEvent, starIndex: number) {
    e.stopPropagation();
    if (this.readonly) return;
    const oldValue = this.value;
    let newValue = this.precision === 'half' ? starIndex : starIndex;
    if (this.allowClear && newValue === oldValue) {
      newValue = 0;
    }
    this.commitValue(newValue, oldValue);
  }

  private handlePointerEnter(_e: PointerEvent) {
    // Placeholder for future enhancements
  }

  private handlePointerLeave(_e: PointerEvent) {
    if (this.isPointerDown) return;
    this.isHovering = false;
    this.hoverValue = 0;
    this.emitHoverEvent('end', this.hoverValue);
  }

  private handlePointerDown(e: PointerEvent) {
    if (this.readonly) return;
    this.isPointerDown = true;
    this.setPointerCapture(e.pointerId);
    const clientX = e.clientX;
    const value = this.getValueFromClientX(clientX);
    this.hoverValue = value;
    this.isHovering = true;
    this.emitHoverEvent('start', value);
    window.addEventListener('pointermove', this.handlePointerMove);
    window.addEventListener('pointerup', this.handlePointerUp);
  }

  private handlePointerMoveHost(e: PointerEvent) {
    if (!this.isPointerDown && !this.isHovering) return;
    const clientX = e.clientX;
    const value = this.getValueFromClientX(clientX);
    this.hoverValue = value;
    if (!this.isHovering) {
      this.isHovering = true;
      this.emitHoverEvent('start', value);
    } else {
      this.emitHoverEvent('move', value);
    }
  }

  private handlePointerMove(e: PointerEvent) {
    if (this.readonly) return;
    const clientX = e.clientX;
    const value = this.getValueFromClientX(clientX);
    if (value !== this.hoverValue) {
      this.hoverValue = value;
      this.emitHoverEvent('move', value);
    }
  }

  private handlePointerUp(e: PointerEvent) {
    if (this.readonly) return;
    const clientX = e.clientX;
    const value = this.getValueFromClientX(clientX);
    const oldValue = this.value;
    let newValue = value;
    if (this.allowClear && newValue === oldValue) {
      newValue = 0;
    }
    this.commitValue(newValue, oldValue);
    this.isPointerDown = false;
    this.isHovering = false;
    this.hoverValue = 0;
    this.emitHoverEvent('end', value);
    this.removeGlobalPointerListeners();
  }

  private removeGlobalPointerListeners() {
    window.removeEventListener('pointermove', this.handlePointerMove);
    window.removeEventListener('pointerup', this.handlePointerUp);
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (this.readonly) return;
    const oldValue = this.value;
    const step = this.precision === 'half' ? 0.5 : 1;

    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      this.value = Math.min(this.max, this.value + step);
      this.commitValue(this.value, oldValue);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      this.value = Math.max(0, this.value - step);
      this.commitValue(this.value, oldValue);
    } else if (e.key === 'Home') {
      e.preventDefault();
      this.value = 0;
      this.commitValue(this.value, oldValue);
    } else if (e.key === 'End') {
      e.preventDefault();
      this.value = this.max;
      this.commitValue(this.value, oldValue);
    }
  }

  private commitValue(newValue: number, oldValue: number) {
    const normalized = this.roundToPrecision(newValue);
    this.value = normalized;
    const changeEvent = new CustomEvent<RatingChangeEventDetail>('rating-change', {
      detail: { oldValue, newValue: normalized },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(changeEvent);
    if (this.onRatingChange) {
      this.onRatingChange(changeEvent);
    }
  }

  private emitHoverEvent(phase: 'start' | 'move' | 'end', value: number) {
    const hoverEvent = new CustomEvent<RatingHoverEventDetail>('rating-hover', {
      detail: { phase, value },
      bubbles: true,
      composed: true
    });
    this.dispatchEvent(hoverEvent);
    if (this.onRatingHover) {
      this.onRatingHover(hoverEvent);
    }
  }
}
