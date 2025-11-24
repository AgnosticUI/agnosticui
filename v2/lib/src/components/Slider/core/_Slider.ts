/**
 * AgnosticUI v2 Slider - Canonical Implementation
 * 
 * ⚠️  IMMUTABLE CANONICAL VERSION ⚠️
 * 
 * Version: 2.0.0-dev
 * Last Updated: 2025-10-06
 */

import { LitElement, html, css } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';
import { formControlStyles } from '../../../shared/form-control-styles';

// Props interface following INTERFACE_STANDARDS.md
export interface SliderProps {
  // Label properties
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  labelledBy?: string;

  // Range properties
  min?: number;
  max?: number;
  step?: number;
  value?: number | [number, number];
  
  // Dual range support
  dual?: boolean;
  
  // Orientation
  vertical?: boolean;
  
  // Size variants
  size?: 'small' | 'default' | 'large';
  
  // Styling variants
  filled?: boolean;
  monochrome?: boolean;
  
  // States
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  
  // Form association
  name?: string;
  
  // Display options
  showTooltip?: boolean;
  showTicks?: boolean;
  tickStep?: number;
  
  // Event callbacks
  onChange?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  onInput?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

/**
 * AgSlider - Foundation slider component with single/dual range support
 */
export class AgSlider extends LitElement implements SliderProps {
  static formAssociated = true;
  static styles = [
    formControlStyles,
    css`
    :host {
      display: block;
      --ag-slider-track-height: var(--ag-space-2);
      --ag-slider-thumb-size: var(--ag-space-6);
      --ag-slider-tooltip-offset: var(--ag-space-6);
      -webkit-user-select: none;
      user-select: none;
      touch-action: none;
    }

    :host([vertical]) {
      display: inline-block;
    }

    /* Container */
    .ag-slider__container {
      position: relative;
      display: flex;
      align-items: center;
      min-height: var(--ag-space-6);
    }

    :host([vertical]) .ag-slider__container {
      flex-direction: column;
      min-height: auto;
      min-width: var(--ag-space-6);
    }

    /* Track */
    .ag-slider__track {
      position: relative;
      flex: 1;
      height: var(--ag-slider-track-height);
      background: var(--ag-border-subtle);
      border-radius: var(--ag-radius-full);
      cursor: pointer;
    }

    :host([vertical]) .ag-slider__track {
      width: var(--ag-slider-track-height);
      height: 100%;
      min-height: 8rem;
    }

    /* Filled variant - solid thumb instead of bordered */
    :host([filled]) .ag-slider__thumb {
      background: var(--ag-primary);
      border-color: var(--ag-primary);
    }

    :host([filled]) .ag-slider__thumb:hover {
      background: var(--ag-primary-dark);
      border-color: var(--ag-primary-dark);
    }

    /* Monochrome variant - unfilled adapts to theme */
    :host([monochrome]) .ag-slider__progress {
      background: var(--ag-text-primary);
    }

    :host([monochrome]) .ag-slider__thumb {
      background: var(--ag-background-secondary);
      border-color: var(--ag-text-primary);
    }

    :host([monochrome]) .ag-slider__thumb:hover {
      border-color: var(--ag-text-secondary);
    }

    /* Monochrome + Filled - use adaptive text color for visibility in both modes */
    :host([monochrome][filled]) .ag-slider__progress {
      background: var(--ag-text-primary);
    }

    :host([monochrome][filled]) .ag-slider__thumb {
      background: var(--ag-text-primary);
      border-color: var(--ag-text-primary);
    }

    :host([monochrome][filled]) .ag-slider__thumb:hover {
      background: var(--ag-text-secondary);
      border-color: var(--ag-text-secondary);
    }

    /* Progress */
    .ag-slider__progress {
      position: absolute;
      height: 100%;
      background: var(--ag-primary);
      border-radius: var(--ag-radius-full);
      pointer-events: none;
      transition: background-color var(--ag-motion-fast);
    }

    .ag-slider__progress--min-gap {
      background: var(--ag-warning);
      animation: pulse-gap 2s ease-in-out infinite;
    }

    @keyframes pulse-gap {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.7; }
    }

    :host([vertical]) .ag-slider__progress {
      width: 100%;
      height: auto;
    }

    /* Thumb */
    .ag-slider__thumb {
      position: absolute;
      width: var(--ag-slider-thumb-size);
      height: var(--ag-slider-thumb-size);
      background: var(--ag-white);
      border: 3px solid var(--ag-primary);
      border-radius: var(--ag-radius-full);
      cursor: grab;
      transform: translate(-50%, -50%);
      top: 50%;
      transition: all var(--ag-motion-fast);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      touch-action: none;
      box-sizing: border-box;
    }

    .ag-slider__thumb:active {
      cursor: grabbing;
      transform: translate(-50%, -50%) scale(1.1);
    }

    :host([vertical]) .ag-slider__thumb {
      transform: translate(-50%, 50%);
      left: 50%;
      top: auto;
    }

    :host([vertical]) .ag-slider__thumb:active {
      transform: translate(-50%, 50%) scale(1.1);
    }

    .ag-slider__thumb:hover {
      border-color: var(--ag-primary-dark);
      box-shadow: var(--ag-shadow-md);
    }

    /* Visual focus state - controlled by internal state */
    .ag-slider__thumb--focused {
      outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
      outline-offset: var(--ag-focus-offset);
      border-color: var(--ag-primary-dark);
    }

    /* Active drag state */
    .ag-slider__thumb--active {
      transform: translate(-50%, -50%) scale(1.1);
      z-index: 1;
    }

    :host([vertical]) .ag-slider__thumb--active {
      transform: translate(-50%, 50%) scale(1.1);
    }

    /* Readonly state */
    :host([readonly]) .ag-slider__thumb {
      cursor: default;
      border-color: var(--ag-border-subtle);
    }

    :host([readonly]) .ag-slider__thumb:hover {
      border-color: var(--ag-border-subtle);
      box-shadow: var(--ag-shadow-sm);
    }

    :host([readonly]) .ag-slider__thumb:active {
      transform: translate(-50%, -50%);
      cursor: default;
    }

    :host([vertical][readonly]) .ag-slider__thumb:active {
      transform: translate(-50%, 50%);
    }

    /* Readonly lock indicator (simple inline SVG) */
    :host([readonly]) .ag-slider__thumb::after {
      content: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" /%3E%3Cpath d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" /%3E%3Cpath d="M8 11v-4a4 4 0 1 1 8 0v4" /%3E%3C/svg%3E');
      position: absolute;
      top: -8px;
      right: -8px;
      filter: grayscale(1);
      opacity: 0.7;
    }

    /* Input (hidden but accessible) */
    .ag-slider__input {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }

    /* Tooltip */
    .ag-slider__tooltip {
      position: absolute;
      bottom: var(--ag-slider-tooltip-offset);
      left: 50%;
      transform: translateX(-50%);
      background: var(--ag-neutral-800);
      color: var(--ag-white);
      padding: var(--ag-space-1) var(--ag-space-2);
      border-radius: var(--ag-radius-sm);
      font-size: var(--ag-font-size-sm);
      white-space: nowrap;
      pointer-events: none;
      opacity: 0;
      transition: opacity var(--ag-motion-fast);
      z-index: 2;
    }

    /* Show tooltip on hover and focus - ensure it works with both thumb and input focus */
    .ag-slider__thumb:hover .ag-slider__tooltip,
    .ag-slider__thumb--focused .ag-slider__tooltip,
    .ag-slider__thumb--active .ag-slider__tooltip,
    .ag-slider__input:focus-visible ~ .ag-slider__track .ag-slider__thumb .ag-slider__tooltip {
      opacity: 1;
    }

    :host([vertical]) .ag-slider__tooltip {
      bottom: auto;
      left: var(--ag-slider-tooltip-offset);
      top: 50%;
      transform: translateY(-50%);
    }

    /* Ticks */
    .ag-slider__ticks {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      height: var(--ag-space-2);
      pointer-events: none;
    }

    :host([vertical]) .ag-slider__ticks {
      top: 0;
      bottom: 0;
      left: 50%;
      width: var(--ag-space-2);
      height: auto;
    }

    .ag-slider__tick {
      position: absolute;
      width: 1px;
      height: var(--ag-space-2);
      background: var(--ag-border);
      transform: translateX(-50%);
    }

    :host([vertical]) .ag-slider__tick {
      width: var(--ag-space-2);
      height: 1px;
      transform: translateY(-50%);
    }

    .ag-slider__tick-label {
      position: absolute;
      top: var(--ag-space-3);
      font-size: var(--ag-font-size-xs);
      color: var(--ag-text-muted);
      transform: translateX(-50%);
      white-space: nowrap;
    }

    :host([vertical]) .ag-slider__tick-label {
      top: auto;
      left: var(--ag-space-3);
      transform: translateY(-50%);
    }

    /* Vertical tick label rotation for better space usage */
    :host([vertical]) .ag-slider__tick-label {
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: left center;
      left: var(--ag-space-4);
    }

    /* Sizes */
    :host([size="small"]) {
      --ag-slider-track-height: var(--ag-space-1);
      --ag-slider-thumb-size: var(--ag-space-5);
    }

    :host([size="large"]) {
      --ag-slider-track-height: var(--ag-space-3);
      --ag-slider-thumb-size: var(--ag-space-7);
    }

    /* States */
    :host([disabled]) {
      opacity: 0.6;
      pointer-events: none;
    }

    :host([disabled]) .ag-slider__thumb {
      cursor: not-allowed;
      border-color: var(--ag-border-subtle);
      background: var(--ag-background-disabled);
    }

    :host([disabled]) .ag-slider__progress {
      background: var(--ag-border-subtle);
    }

    :host([invalid]) .ag-slider__progress {
      background: var(--ag-danger);
    }

    :host([invalid]) .ag-slider__thumb {
      border-color: var(--ag-danger);
    }

    /* Help & Error Text */
    .ag-slider__help,
    .ag-slider__error {
      margin-top: var(--ag-space-2);
      font-size: var(--ag-font-size-sm);
    }

    .ag-slider__help {
      color: var(--ag-text-secondary);
    }

    .ag-slider__error {
      color: var(--ag-danger);
    }

    /* Live region for value announcements */
    .ag-slider__live-region {
      position: absolute;
      overflow: hidden;
      clip: rect(0 0 0 0);
      height: 1px;
      width: 1px;
      margin: -1px;
      padding: 0;
      border: 0;
    }
  `,
  ];

  // Form association
  private _internals: ElementInternals;

  // Form control IDs
  private _sliderId: string;
  private _labelId: string;
  private _helperId: string;
  private _errorId: string;

  // Drag state
  private _activeDrag: {
    thumb: 'min' | 'max' | 'single';
    startX: number;
    startY: number;
    startValue: number;
    trackRect: DOMRect;
  } | null = null;

  // Performance optimization
  private _lastRenderTime = 0;
  private _renderThrottleMs = 16; // ~60fps

  constructor() {
    super();
    this._internals = this.attachInternals();

    // Initialize form control IDs
    const ids = createFormControlIds('slider');
    this._sliderId = this.id || ids.inputId;
    this._labelId = ids.labelId;
    this._helperId = ids.helperId;
    this._errorId = ids.errorId;

    // Initialize properties
    this.label = '';
    this.labelHidden = false;
    this.noLabel = false;
    this.ariaLabel = '';
    this.labelledBy = '';
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.value = 0;
    this.dual = false;
    this.vertical = false;
    this.filled = false;
    this.monochrome = false;
    this.size = 'default';
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
    this.name = '';
    this.showTooltip = false;
    this.showTicks = false;
    this.tickStep = 25;

    // Bind event handlers for proper `this` context
    this._handlePointerMove = this._handlePointerMove.bind(this);
    this._handlePointerUp = this._handlePointerUp.bind(this);
  }

  /**
   * Label Architecture
   */
  @property({ type: String })
  declare label: string;

  @property({ type: String, attribute: 'label-position' })
  labelPosition: LabelPosition = 'top';

  @property({ type: Boolean, attribute: 'label-hidden' })
  declare labelHidden: boolean;

  @property({ type: Boolean, attribute: 'no-label' })
  declare noLabel: boolean;

  @property({ type: String, reflect: true, attribute: 'aria-label' })
  declare ariaLabel: string;

  @property({ type: String, attribute: 'labelled-by' })
  declare labelledBy: string;

  /**
   * Range properties
   */
  @property({ type: Number })
  declare min: number;

  @property({ type: Number })
  declare max: number;

  @property({ type: Number })
  declare step: number;

  @property({ type: Object })
  declare value: number | [number, number];

  /**
   * Dual range support
   */
  @property({ type: Boolean, reflect: true })
  declare dual: boolean;

  /**
   * Orientation
   */
  @property({ type: Boolean, reflect: true })
  declare vertical: boolean;

  /**
   * Styling variants
   */
  @property({ type: Boolean, reflect: true })
  declare filled: boolean;

  @property({ type: Boolean, reflect: true })
  declare monochrome: boolean;

  /**
   * Size variants
   */
  @property({ type: String, reflect: true })
  declare size: 'small' | 'default' | 'large';

  /**
   * States
   */
  @property({ type: Boolean, reflect: true })
  declare disabled: boolean;

  @property({ type: Boolean, reflect: true })
  declare readonly: boolean;

  @property({ type: Boolean, reflect: true })
  declare required: boolean;

  @property({ type: Boolean, reflect: true })
  declare invalid: boolean;

  @property({ type: String, attribute: 'error-message' })
  declare errorMessage: string;

  @property({ type: String, attribute: 'help-text' })
  declare helpText: string;

  /**
   * Form association
   */
  @property({ type: String, reflect: true })
  declare name: string;

  /**
   * Display options
   */
  @property({ type: Boolean, attribute: 'show-tooltip' })
  declare showTooltip: boolean;

  @property({ type: Boolean, attribute: 'show-ticks' })
  declare showTicks: boolean;

  @property({ type: Number, attribute: 'tick-step' })
  declare tickStep: number;

  /**
   * Event callbacks
   */
  @property({ attribute: false })
  declare onChange?: (event: CustomEvent<{ value: number | [number, number] }>) => void;

  @property({ attribute: false })
  declare onInput?: (event: CustomEvent<{ value: number | [number, number] }>) => void;

  @property({ attribute: false })
  declare onFocus?: (event: FocusEvent) => void;

  @property({ attribute: false })
  declare onBlur?: (event: FocusEvent) => void;

  /**
   * Internal state
   */
  @state()
  private _activeThumb: 'min' | 'max' | null = null;

  @state()
  private _focusedThumb: 'min' | 'max' | null = null;

  @state()
  private _draggingThumb: 'min' | 'max' | 'single' | null = null;

  @query('#minInput')
  private _minInput?: HTMLInputElement;

  @query('#maxInput')
  private _maxInput?: HTMLInputElement;

  @query('.ag-slider__track')
  private _track?: HTMLElement;

  @query('.ag-slider__live-region')
  private _liveRegion?: HTMLElement;

  /**
   * Form value handling
   */
  get form() { return this._internals.form; }
  
  get validity() { return this._internals.validity; }
  
  get validationMessage() { return this._internals.validationMessage; }
  
  get willValidate() { return this._internals.willValidate; }

  checkValidity() { return this._internals.checkValidity(); }
  
  reportValidity() { return this._internals.reportValidity(); }

  /**
   * Property validation
   */
  protected willUpdate(changedProperties: Map<string, unknown>) {
    // Validate min/max constraints
    if (changedProperties.has('min') || changedProperties.has('max')) {
      if (this.min >= this.max) {
        /* eslint-disable-next-line no-console */
        console.warn(`ag-slider: min (${this.min}) must be less than max (${this.max}). Adjusting values.`);
        if (changedProperties.has('min')) {
          this.max = this.min + 1;
        } else {
          this.min = this.max - 1;
        }
      }
    }

    // Validate step
    if (changedProperties.has('step') && this.step !== undefined) {
      if (this.step <= 0) {
        /* eslint-disable-next-line no-console */
        console.warn(`ag-slider: step (${this.step}) must be greater than 0. Using default step of 1.`);
        this.step = 1;
      }
    }

    // Validate value constraints
    if (changedProperties.has('value') || changedProperties.has('min') || changedProperties.has('max')) {
      this._clampAndValidateValue();
    }
  }

  /**
   * Clamp current value to min/max and validate
   */
  private _clampAndValidateValue() {
    if (this.dual && Array.isArray(this.value)) {
      const clampedMin = this._clampValue(this.value[0]);
      const clampedMax = this._clampValue(this.value[1]);
      if (clampedMin !== this.value[0] || clampedMax !== this.value[1]) {
        this.value = [clampedMin, clampedMax];
      }
    } else if (!this.dual && typeof this.value === 'number') {
      const clamped = this._clampValue(this.value);
      if (clamped !== this.value) {
        this.value = clamped;
      }
    }
  }

  /**
   * Update form value when component value changes
   */
  private _updateFormValue() {
    const formValue = new FormData();
    
    if (this.name) {
      if (this.dual && Array.isArray(this.value)) {
        formValue.append(this.name, this.value[0].toString());
        formValue.append(this.name, this.value[1].toString());
      } else {
        formValue.append(this.name, this.value.toString());
      }
      this._internals.setFormValue(formValue);
    } else {
      this._internals.setFormValue(null);
    }

    // Set validity to valid (range inputs always have a value)
    this._internals.setValidity({});
  }

  /**
   * Get current values as array for consistent handling
   */
  private get _values(): [number, number] {
    if (Array.isArray(this.value)) {
      return this.value;
    }
    return [this.min, this.value];
  }

  /**
   * Get percentage position for a value
   */
  private _getPercentage(value: number): number {
    return ((value - this.min) / (this.max - this.min)) * 100;
  }

  /**
   * Get value from percentage
   */
  private _getValueFromPercentage(percentage: number): number {
    const rawValue = this.min + (percentage / 100) * (this.max - this.min);
    return this.step ? Math.round(rawValue / this.step) * this.step : rawValue;
  }

  /**
   * Get value from pointer position
   */
  private _getValueFromPointer(clientX: number, clientY: number, trackRect: DOMRect): number {
    let percentage: number;
    
    if (this.vertical) {
      const relativeY = trackRect.bottom - clientY;
      percentage = (relativeY / trackRect.height) * 100;
    } else {
      const relativeX = clientX - trackRect.left;
      percentage = (relativeX / trackRect.width) * 100;
    }

    // Clamp percentage to 0-100
    percentage = Math.max(0, Math.min(100, percentage));
    
    return this._getValueFromPercentage(percentage);
  }

  /**
   * Clamp value to min/max and step
   */
  private _clampValue(value: number): number {
    let clamped = Math.max(this.min, Math.min(this.max, value));
    if (this.step) {
      clamped = Math.round(clamped / this.step) * this.step;
    }
    return Number(clamped.toFixed(10));
  }

  /**
   * Announce value to screen readers with enhanced context
   */
  private _announceValue(value: number | [number, number]) {
    if (!this._liveRegion) return;

    let announcement = '';
    
    if (this.dual && Array.isArray(value)) {
      announcement = `Range selected from ${value[0]} to ${value[1]}`;
    } else if (!this.dual && typeof value === 'number') {
      announcement = `Value set to ${value}`;
    }

    // Use a timeout to ensure the live region is updated in the next tick
    setTimeout(() => {
      if (this._liveRegion) {
        this._liveRegion.textContent = announcement;
        // Clear after announcement is read
        setTimeout(() => {
          if (this._liveRegion) {
            this._liveRegion.textContent = '';
          }
        }, 100);
      }
    }, 50);
  }

  /**
   * Handle thumb pointer down (start of drag)
   */
private _handleThumbPointerDown(e: PointerEvent, thumbType: 'min' | 'max' | 'single') {
    if (this.disabled || this.readonly) return;
    
    const track = this._track;
    if (!track) return; // Explicit type guard
    
    e.preventDefault();
    e.stopPropagation();

    const thumb = e.currentTarget as HTMLElement;
    thumb.setPointerCapture(e.pointerId);
    
    const trackRect = track.getBoundingClientRect(); // TypeScript knows track exists
    const currentValues = this._values;
    
    this._activeDrag = {
      thumb: thumbType,
      startX: e.clientX,
      startY: e.clientY,
      startValue: thumbType === 'min' ? currentValues[0] : 
                 thumbType === 'max' ? currentValues[1] : 
                 currentValues[1],
      trackRect
    };

    this._draggingThumb = thumbType;

    // Add global event listeners
    document.addEventListener('pointermove', this._handlePointerMove);
    document.addEventListener('pointerup', this._handlePointerUp);
    document.addEventListener('pointercancel', this._handlePointerUp);
  }

  /**
   * Handle pointer move during drag (with throttling)
   */
  private _handlePointerMove(e: PointerEvent) {
    if (!this._activeDrag || this.disabled || this.readonly) return;

    // Throttle updates for performance
    const now = Date.now();
    if (now - this._lastRenderTime < this._renderThrottleMs) {
      return;
    }
    this._lastRenderTime = now;

    e.preventDefault();

    const { thumb, trackRect } = this._activeDrag;
    const newValue = this._getValueFromPointer(e.clientX, e.clientY, trackRect);

    if (this.dual) {
      const currentValues = this._values;
      
      if (thumb === 'min') {
        // Enforce minimum gap of at least one step
        const minGap = this.step;
        const maxAllowed = currentValues[1] - minGap;
        const clampedValue = Math.min(newValue, maxAllowed);
        
        const updatedValues: [number, number] = [clampedValue, currentValues[1]];
        this._updateValue(updatedValues, 'input');
      } else if (thumb === 'max') {
        // Enforce minimum gap of at least one step
        const minGap = this.step;
        const minAllowed = currentValues[0] + minGap;
        const clampedValue = Math.max(newValue, minAllowed);
        
        const updatedValues: [number, number] = [currentValues[0], clampedValue];
        this._updateValue(updatedValues, 'input');
      }
    } else {
      this._updateValue(newValue, 'input');
    }
  }

  /**
   * Handle pointer up (end of drag)
   */
  private _handlePointerUp(e: PointerEvent) {
    if (!this._activeDrag) return;

    e.preventDefault();

    const thumb = this.shadowRoot?.querySelector(`.ag-slider__thumb[part*="${this._activeDrag.thumb}"]`) as HTMLElement;
    thumb?.releasePointerCapture(e.pointerId);

    // Dispatch final change event
    if (this._activeDrag) {
      this._updateValue(this.value, 'change');
    }

    this._activeDrag = null;
    this._draggingThumb = null;

    // Remove global event listeners
    document.removeEventListener('pointermove', this._handlePointerMove);
    document.removeEventListener('pointerup', this._handlePointerUp);
    document.removeEventListener('pointercancel', this._handlePointerUp);
  }

  /**
   * Update value and dispatch events
   */
  private _updateValue(newValue: number | [number, number], type: 'input' | 'change' = 'change') {
    if (this.readonly || this.disabled) {
      return; // Prevent value changes in readonly/disabled state
    }

    // Ensure values are properly ordered for dual range
    if (this.dual && Array.isArray(newValue)) {
      newValue = [this._clampValue(newValue[0]), this._clampValue(newValue[1])] as [number, number];
      
      // Enforce minimum gap of at least one step
      const minGap = this.step;
      if (newValue[1] - newValue[0] < minGap) {
        if (newValue[0] === this._values[0]) {
          // Max thumb was moved - adjust min
          newValue[0] = newValue[1] - minGap;
        } else {
          // Min thumb was moved - adjust max
          newValue[1] = newValue[0] + minGap;
        }
      }
      
      if (newValue[0] > newValue[1]) {
        newValue = [newValue[1], newValue[0]] as [number, number];
      }
    } else if (!this.dual && typeof newValue === 'number') {
      newValue = this._clampValue(newValue);
    }

    this.value = newValue;

    // Update form value
    this._updateFormValue();

    // Announce value to screen readers for drag operations
    if (type === 'input' && this._draggingThumb) {
      this._announceValue(newValue);
    }

    // Dispatch custom event (dual-dispatch pattern)
    const event = new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail: { value: newValue }
    });

    this.dispatchEvent(event);

    // Invoke callback if provided
    if (type === 'change' && this.onChange) {
      this.onChange(event);
    } else if (type === 'input' && this.onInput) {
      this.onInput(event);
    }
  }

  /**
   * Handle input events from native range inputs
   */
  private _handleInput(e: Event, thumb: 'min' | 'max') {
    if (this.readonly) {
      e.preventDefault();
      return;
    }

    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);

    if (this.dual) {
      const currentValues = this._values;
      const newValues = thumb === 'min' 
        ? [value, currentValues[1]] as [number, number]
        : [currentValues[0], value] as [number, number];
      this._updateValue(newValues, 'input');
    } else {
      this._updateValue(value, 'input');
    }
  }

  /**
   * Handle change events from native range inputs
   */
  private _handleChange(e: Event, thumb: 'min' | 'max') {
    if (this.readonly) {
      e.preventDefault();
      return;
    }

    const target = e.target as HTMLInputElement;
    const value = parseFloat(target.value);

    if (this.dual) {
      const currentValues = this._values;
      const newValues = thumb === 'min' 
        ? [value, currentValues[1]] as [number, number]
        : [currentValues[0], value] as [number, number];
      this._updateValue(newValues, 'change');
    } else {
      this._updateValue(value, 'change');
    }
  }

  /**
   * Handle focus events
   */
  private _handleFocus(e: FocusEvent, thumb: 'min' | 'max') {
    this._focusedThumb = thumb;
    
    // Re-dispatch focus event
    this.dispatchEvent(new FocusEvent('focus', {
      bubbles: true,
      composed: true,
    }));

    if (this.onFocus) {
      this.onFocus(e);
    }
  }

  /**
   * Handle blur events
   */
  private _handleBlur(e: FocusEvent, _thumb: 'min' | 'max') {
    this._focusedThumb = null;
    
    // Re-dispatch blur event
    this.dispatchEvent(new FocusEvent('blur', {
      bubbles: true,
      composed: true,
    }));

    if (this.onBlur) {
      this.onBlur(e);
    }
  }

  /**
   * Handle track click to set value
   */
  private _handleTrackClick(e: MouseEvent) {
    if (this.disabled || this.readonly) return;

    const track = e.currentTarget as HTMLElement;
    const rect = track.getBoundingClientRect();
    
    const newValue = this._getValueFromPointer(e.clientX, e.clientY, rect);

    if (this.dual) {
      const currentValues = this._values;
      const distanceToMin = Math.abs(newValue - currentValues[0]);
      const distanceToMax = Math.abs(newValue - currentValues[1]);
      
      const updatedValues = distanceToMin < distanceToMax
        ? [newValue, currentValues[1]] as [number, number]
        : [currentValues[0], newValue] as [number, number];
      
      this._updateValue(updatedValues);
    } else {
      this._updateValue(newValue);
    }
  }

  /**
   * Generate tick marks
   */
  private _renderTicks() {
    if (!this.showTicks) return null;

    // Validate tickStep to prevent infinite loops
    if (!this.tickStep || this.tickStep <= 0 || !isFinite(this.tickStep)) {
      return null;
    }

    const ticks = [];
    const tickCount = Math.floor((this.max - this.min) / this.tickStep);

    // Additional safety: cap the number of ticks to prevent memory issues
    const maxTicks = 1000;
    if (tickCount > maxTicks) {
      return null;
    }

    for (let i = 0; i <= tickCount; i++) {
      const value = this.min + (i * this.tickStep);
      const percentage = this._getPercentage(value);

      const style = this.vertical
        ? `bottom: ${percentage}%`
        : `left: ${percentage}%`;

      ticks.push(html`
        <div class="ag-slider__tick" style="${style}">
          <div class="ag-slider__tick-label">${value}</div>
        </div>
      `);
    }

    return html`<div class="ag-slider__ticks">${ticks}</div>`;
  }

  /**
   * Render thumb with tooltip
   */
  private _renderThumb(value: number, thumbType: 'min' | 'max' | 'single', _index?: number) {
    const percentage = this._getPercentage(value);
    const isFocused = this._focusedThumb === thumbType;
    const isDragging = this._draggingThumb === thumbType;

    const style = this.vertical
      ? `bottom: ${percentage}%`
      : `left: ${percentage}%`;

    const thumbClass = `ag-slider__thumb 
      ${isFocused ? 'ag-slider__thumb--focused' : ''} 
      ${isDragging ? 'ag-slider__thumb--active' : ''}
      ${this.readonly ? 'ag-slider__thumb--readonly' : ''}`;

    return html`
      <div
        class="${thumbClass}"
        style="${style}"
        part="ag-slider-thumb ${thumbType === 'single' ? 'ag-slider-thumb-single' : `ag-slider-thumb-${thumbType}`} ${this.readonly ? 'ag-slider-thumb-readonly' : ''}"
        aria-hidden="true"
        @pointerdown=${(e: PointerEvent) => this._handleThumbPointerDown(e, thumbType)}
      >
        ${this.showTooltip ? html`
          <div class="ag-slider__tooltip">
            ${value}
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render progress bar with enhanced visual feedback
   */
  private _renderProgress() {
    const values = this._values;
    
    if (this.dual) {
      const start = this._getPercentage(values[0]);
      const end = this._getPercentage(values[1]);
      
      // Add visual indicator when at minimum gap
      const atMinGap = (values[1] - values[0]) <= this.step;
      const progressClass = `ag-slider__progress ${atMinGap ? 'ag-slider__progress--min-gap' : ''}`;
      
      const style = this.vertical
        ? `bottom: ${start}%; height: ${end - start}%`
        : `left: ${start}%; width: ${end - start}%`;

      return html`<div class="${progressClass}" style="${style}" part="ag-slider-progress"></div>`;
    } else {
      const end = this._getPercentage(values[1]);
      
      const style = this.vertical
        ? `bottom: 0; height: ${end}%`
        : `left: 0; width: ${end}%`;

      return html`<div class="ag-slider__progress" style="${style}" part="ag-slider-progress"></div>`;
    }
  }

  private renderLabel() {
    if (!this.label || this.noLabel || this.dual) return '';

    // Build position classes
    const positionClasses: string[] = [];
    if (isHorizontalLabel(this.labelPosition)) {
      positionClasses.push('ag-form-control__label--horizontal');
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
    } else if (this.labelPosition === 'bottom') {
      positionClasses.push(`ag-form-control__label--${this.labelPosition}`);
    }

    return html`
      <label
        id=${this._labelId}
        for=${this._sliderId}
        class="ag-form-control__label ${this.labelHidden
          ? 'ag-form-control__label--hidden'
          : ''} ${this.required ? 'ag-form-control__label--required' : ''} ${positionClasses.join(' ')}"
        part="ag-slider-label"
      >
        ${this.label}
      </label>
    `;
  }

  render() {
    const values = this._values;

    // Use shared form control utilities for aria-describedby
    const describedBy = buildAriaDescribedBy({
      helperId: this._helperId,
      errorId: this._errorId,
      hasHelper: !!this.helpText && !this.invalid,
      hasError: !!this.invalid && !!this.errorMessage,
    });

    // Generate contextual labels for dual slider
    const minLabel = this.label ? `${this.label} - Minimum value` : 'Minimum value';
    const maxLabel = this.label ? `${this.label} - Maximum value` : 'Maximum value';

    return html`
      <div class="ag-slider" part="ag-slider-wrapper">
        <!-- Live region for screen reader announcements -->
        <div 
          class="ag-slider__live-region" 
          aria-live="polite" 
          aria-atomic="true"
          part="ag-slider-live-region"
        ></div>

        ${!this.noLabel && !this.dual ? html`
          <label
            for="${this._sliderId}"
            part="ag-slider-label"
            class="ag-slider__label ${this.labelHidden ? 'ag-slider__label--hidden' : ''}"
          >
            ${this.label}
          </label>
        ` : ''}

        ${this.helpText ? html`
          <div class="ag-form-control-help-text" id="${this._helperId}">
            ${this.helpText}
          </div>
        ` : ''}

        ${this.errorMessage ? html`
          <div class="ag-form-control-error-message" id="${this._errorId}">
            ${this.errorMessage}
          </div>
        ` : ''}

        <div 
          class="ag-slider__container" 
          part="ag-slider-container"
          role=${ifDefined(this.dual ? 'group' : undefined)}
          aria-label=${ifDefined(this.dual ? this.label || this.ariaLabel : undefined)}
        >
          <!-- Hidden accessible inputs -->
          ${this.dual ? html`
            <input
              id="minInput"
              class="ag-slider__input"
              type="range"
              min="${this.min}"
              max="${this.max}"
              step="${ifDefined(this.step || undefined)}"
              .value="${values[0].toString()}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              aria-valuemin="${this.min}"
              aria-valuemax="${values[1]}"
              aria-valuenow="${values[0]}"
              aria-label="${ifDefined(this.dual ? minLabel : this.ariaLabel || undefined)}"
              aria-describedby="${ifDefined(describedBy)}"
              @input=${(e: Event) => this._handleInput(e, 'min')}
              @change=${(e: Event) => this._handleChange(e, 'min')}
              @focus=${(e: FocusEvent) => this._handleFocus(e, 'min')}
              @blur=${(e: FocusEvent) => this._handleBlur(e, 'min')}
            />
            <input
              id="maxInput"
              class="ag-slider__input"
              type="range"
              min="${this.min}"
              max="${this.max}"
              step="${ifDefined(this.step || undefined)}"
              .value="${values[1].toString()}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              aria-valuemin="${values[0]}"
              aria-valuemax="${this.max}"
              aria-valuenow="${values[1]}"
              aria-label="${ifDefined(this.dual ? maxLabel : undefined)}"
              aria-describedby="${ifDefined(describedBy)}"
              @input=${(e: Event) => this._handleInput(e, 'max')}
              @change=${(e: Event) => this._handleChange(e, 'max')}
              @focus=${(e: FocusEvent) => this._handleFocus(e, 'max')}
              @blur=${(e: FocusEvent) => this._handleBlur(e, 'max')}
            />
          ` : html`
            <input
              id="${this._sliderId}"
              class="ag-slider__input"
              type="range"
              min="${this.min}"
              max="${this.max}"
              step="${ifDefined(this.step || undefined)}"
              .value="${values[1].toString()}"
              ?disabled="${this.disabled}"
              ?readonly="${this.readonly}"
              aria-valuemin="${this.min}"
              aria-valuemax="${this.max}"
              aria-valuenow="${values[1]}"
              aria-label="${ifDefined(this.ariaLabel || undefined)}"
              aria-describedby="${ifDefined(describedBy)}"
              @input=${(e: Event) => this._handleInput(e, 'max')}
              @change=${(e: Event) => this._handleChange(e, 'max')}
              @focus=${(e: FocusEvent) => this._handleFocus(e, 'max')}
              @blur=${(e: FocusEvent) => this._handleBlur(e, 'max')}
            />
          `}

          <!-- Visual track -->
          <div 
            class="ag-slider__track" 
            part="ag-slider-track"
            @click=${this._handleTrackClick}
          >
            ${this._renderProgress()}
            ${this._renderTicks()}
            
            <!-- Thumbs -->
            ${this.dual 
              ? html`
                  ${this._renderThumb(values[0], 'min')}
                  ${this._renderThumb(values[1], 'max')}
                `
              : this._renderThumb(values[1], 'single')
            }
          </div>
        </div>
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Clean up global event listeners
    document.removeEventListener('pointermove', this._handlePointerMove);
    document.removeEventListener('pointerup', this._handlePointerUp);
    document.removeEventListener('pointercancel', this._handlePointerUp);
  }
}
