import { LitElement, html, css, unsafeCSS } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';
import { formControlStyles } from '../../../shared/form-control-styles';
import { FaceMixin } from '../../../shared/face-mixin';

import styles from './slider-structure.module.css';
import structuralStylesText from './slider-structure.module.css?inline';

export interface SliderProps {
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  ariaLabel?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number | [number, number];
  dual?: boolean;
  vertical?: boolean;
  size?: 'small' | 'default' | 'large';
  filled?: boolean;
  monochrome?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  name?: string;
  showTooltip?: boolean;
  showTicks?: boolean;
  tickStep?: number;
  onChange?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  onInput?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  onFocus?: (event: FocusEvent) => void;
  onBlur?: (event: FocusEvent) => void;
}

export class AgSlider extends FaceMixin(LitElement) implements SliderProps {
  static override styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
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
      :host([filled]) .ag-slider__thumb {
        background: var(--ag-primary);
        border-color: var(--ag-primary);
      }
      :host([monochrome]) .ag-slider__progress {
        background: var(--ag-text-primary);
      }
      :host([monochrome]) .ag-slider__thumb {
        background: var(--ag-background-secondary);
        border-color: var(--ag-text-primary);
      }
      :host([disabled]) {
        opacity: 0.6;
        pointer-events: none;
      }
      :host([invalid]) .ag-slider__progress {
        background: var(--ag-danger);
      }
    `,
  ];

  private _defaultValue: number | [number, number] = 0;
  private _sliderId: string;
  private _minInputId: string;
  private _maxInputId: string;
  private _labelId: string;
  private _helperId: string;
  private _errorId: string;

  private _activeDrag: {
    thumb: 'min' | 'max' | 'single';
    startX: number;
    startY: number;
    startValue: number;
    trackRect: DOMRect;
  } | null = null;

  private _lastRenderTime = 0;
  private _renderThrottleMs = 16;

  constructor() {
    super();
    const ids = createFormControlIds('slider');
    this._sliderId = this.id || ids.inputId;
    this._minInputId = `${ids.inputId}-min`;
    this._maxInputId = `${ids.inputId}-max`;
    this._labelId = ids.labelId;
    this._helperId = ids.helperId;
    this._errorId = ids.errorId;

    this.label = '';
    this.labelHidden = false;
    this.noLabel = false;
    this.ariaLabel = '';
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
    this.showTooltip = false;
    this.showTicks = false;
    this.tickStep = 25;

    this._handlePointerMove = this._handlePointerMove.bind(this);
    this._handlePointerUp = this._handlePointerUp.bind(this);
  }
  @property({ type: String }) declare label: string;
  @property({ type: String, attribute: 'label-position' }) labelPosition: LabelPosition = 'top';
  @property({ type: Boolean, attribute: 'label-hidden' }) declare labelHidden: boolean;
  @property({ type: Boolean, attribute: 'no-label' }) declare noLabel: boolean;
  @property({ type: String, reflect: true, attribute: 'aria-label' }) declare ariaLabel: string;
  @property({ type: Number }) declare min: number;
  @property({ type: Number }) declare max: number;
  @property({ type: Number }) declare step: number;
  @property({ type: Object }) declare value: number | [number, number];
  @property({ type: Boolean, reflect: true }) declare dual: boolean;
  @property({ type: Boolean, reflect: true }) declare vertical: boolean;
  @property({ type: Boolean, reflect: true }) declare filled: boolean;
  @property({ type: Boolean, reflect: true }) declare monochrome: boolean;
  @property({ type: String, reflect: true }) declare size: 'small' | 'default' | 'large';
  @property({ type: Boolean, reflect: true }) declare disabled: boolean;
  @property({ type: Boolean, reflect: true }) declare readonly: boolean;
  @property({ type: Boolean, reflect: true }) declare required: boolean;
  @property({ type: Boolean, reflect: true }) declare invalid: boolean;
  @property({ type: String, attribute: 'error-message' }) declare errorMessage: string;
  @property({ type: String, attribute: 'help-text' }) declare helpText: string;
  @property({ type: Boolean, attribute: 'show-tooltip' }) declare showTooltip: boolean;
  @property({ type: Boolean, attribute: 'show-ticks' }) declare showTicks: boolean;
  @property({ type: Number, attribute: 'tick-step' }) declare tickStep: number;

  @property({ attribute: false }) declare onChange?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  @property({ attribute: false }) declare onInput?: (event: CustomEvent<{ value: number | [number, number] }>) => void;
  @property({ attribute: false }) declare onFocus?: (event: FocusEvent) => void;
  @property({ attribute: false }) declare onBlur?: (event: FocusEvent) => void;

  @state() private _activeThumb: 'min' | 'max' | null = null;
  @state() private _focusedThumb: 'min' | 'max' | null = null;
  @state() private _draggingThumb: 'min' | 'max' | 'single' | null = null;

  @query('.ag-slider__track') private _track?: HTMLElement;
  @query('.ag-slider__live-region') private _liveRegion?: HTMLElement;

  protected willUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('min') || changedProperties.has('max')) {
      if (this.min >= this.max) {
        if (changedProperties.has('min')) {
          this.max = this.min + 1;
        } else {
          this.min = this.max - 1;
        }
      }
    }
    if (changedProperties.has('step') && this.step !== undefined && this.step <= 0) {
      this.step = 1;
    }
    if (changedProperties.has('value') || changedProperties.has('min') || changedProperties.has('max')) {
      this._clampAndValidateValue();
    }
  }

  private _clampAndValidateValue() {
    if (this.dual && Array.isArray(this.value)) {
      const clampedMin = this._clampValue(this.value[0]);
      const clampedMax = this._clampValue(this.value[1]);
      if (clampedMin !== this.value[0] || clampedMax !== this.value[1]) {
        this.value = [clampedMin, clampedMax];
      }
    } else if (!this.dual) {
      // Force scalar arrays or un-initialized objects back to smooth type numbers safely
      const targetValue = Array.isArray(this.value) ? this.value[0] : this.value;
      const clamped = this._clampValue(Number(targetValue || 0));
      if (clamped !== this.value) {
        this.value = clamped;
      }
    }
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    if (
      changedProperties.has('disabled') ||
      changedProperties.has('readonly') ||
      changedProperties.has('required') ||
      changedProperties.has('invalid')
    ) {
      this._syncStates();
    }
  }

  override firstUpdated() {
    this._defaultValue = Array.isArray(this.value) ? ([...this.value] as [number, number]) : this.value;
    this._updateFormValue();
    this._syncStates();
  }

  override formResetCallback(): void {
    this.value = Array.isArray(this._defaultValue) ? ([...this._defaultValue] as [number, number]) : this._defaultValue;
    this._updateFormValue();
    this._syncStates();
  }

  override formStateRestoreCallback(state: File | string | FormData | null, _mode: 'restore' | 'autocomplete'): void {
    if (!(state instanceof FormData) || !this.name) return;
    const entries = Array.from(state.getAll(this.name)) as string[];
    if (this.dual && entries.length === 2) {
      this.value = [parseFloat(entries[0]), parseFloat(entries[1])];
    } else if (entries.length === 1) {
      this.value = parseFloat(entries[0]);
    }
    this._updateFormValue();
    this._syncStates();
  }

  private _syncStates(): void {
    this._setState('disabled', this.disabled);
    this._setState('readonly', this.readonly);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  private _updateFormValue() {
    const formValue = new FormData();
    if (this.name) {
      if (this.dual && Array.isArray(this.value)) {
        formValue.append(this.name, this.value[0].toString());
        formValue.append(this.name, this.value[1].toString());
      } else {
        const fallbackValue = Array.isArray(this.value) ? this.value[0] : this.value;
        formValue.append(this.name, (fallbackValue || 0).toString());
      }
      this._internals.setFormValue(formValue);
    } else {
      this._internals.setFormValue(null);
    }
    this._internals.setValidity({});
  }

  private get _values(): [number, number] {
    if (Array.isArray(this.value)) return this.value;
    return [this.min, Number(this.value || 0)];
  }

  private _getPercentage(value: number): number {
    return ((value - this.min) / (this.max - this.min)) * 100;
  }

  private _getValueFromPercentage(percentage: number): number {
    const rawValue = this.min + (percentage / 100) * (this.max - this.min);
    return this.step ? Math.round(rawValue / this.step) * this.step : rawValue;
  }

  private _getValueFromPointer(clientX: number, clientY: number, trackRect: DOMRect): number {
    let percentage: number;
    if (this.vertical) {
      const relativeY = trackRect.bottom - clientY;
      percentage = (relativeY / trackRect.height) * 100;
    } else {
      const relativeX = clientX - trackRect.left;
      percentage = (relativeX / trackRect.width) * 100;
    }
    percentage = Math.max(0, Math.min(100, percentage));
    return this._getValueFromPercentage(percentage);
  }

  private _clampValue(value: number): number {
    let clamped = Math.max(this.min, Math.min(this.max, value));
    if (this.step) {
      clamped = Math.round(clamped / this.step) * this.step;
    }
    return Number(clamped.toFixed(10));
  }

  private _announceValue(value: number | [number, number]) {
    if (!this._liveRegion) return;
    const isArr = Array.isArray(value);
    const announcement = this.dual && isArr
      ? `Range selected from ${value[0]} to ${value[1]}`
      : `Value set to ${isArr ? value[0] : value}`;
    setTimeout(() => {
      if (this._liveRegion) {
        this._liveRegion.textContent = announcement;
        setTimeout(() => { if (this._liveRegion) this._liveRegion.textContent = ''; }, 100);
      }
    }, 50);
  }

  private _handleThumbPointerDown(e: PointerEvent, thumbType: 'min' | 'max' | 'single') {
    if (this.disabled || this.readonly) return;
    const track = this._track;
    if (!track) return;
    e.preventDefault();
    e.stopPropagation();
    const thumb = e.currentTarget as HTMLElement;
    thumb.setPointerCapture(e.pointerId);
    const trackRect = track.getBoundingClientRect();
    const currentValues = this._values;

    this._activeDrag = {
      thumb: thumbType,
      startX: e.clientX,
      startY: e.clientY,
      startValue: thumbType === 'min' ? currentValues[0] : currentValues[1],
      trackRect
    };
    this._draggingThumb = thumbType;
    document.addEventListener('pointermove', this._handlePointerMove);
    document.addEventListener('pointerup', this._handlePointerUp);
    document.addEventListener('pointercancel', this._handlePointerUp);
  }

  private _handlePointerMove(e: PointerEvent) {
    if (!this._activeDrag || this.disabled || this.readonly) return;
    const now = Date.now();
    if (now - this._lastRenderTime < this._renderThrottleMs) return;
    this._lastRenderTime = now;
    e.preventDefault();
    const { thumb, trackRect } = this._activeDrag;
    const newValue = this._getValueFromPointer(e.clientX, e.clientY, trackRect);

    if (this.dual) {
      const currentValues = this._values;
      if (thumb === 'min') {
        const minAllowed = currentValues[1] - this.step;
        this._updateValue([Math.min(newValue, minAllowed), currentValues[1]], 'input');
      } else if (thumb === 'max') {
        const maxAllowed = currentValues[0] + this.step;
        this._updateValue([currentValues[0], Math.max(newValue, maxAllowed)], 'input');
      }
    } else {
      this._updateValue(newValue, 'input');
    }
  }

  private _handlePointerUp(e: PointerEvent) {
    if (!this._activeDrag) return;
    e.preventDefault();
    const thumb = this.shadowRoot?.querySelector(`.ag-slider__thumb`) as HTMLElement;
    thumb?.releasePointerCapture(e.pointerId);
    this._updateValue(this.value, 'change');
    this._activeDrag = null;
    this._draggingThumb = null;
    document.removeEventListener('pointermove', this._handlePointerMove);
    document.removeEventListener('pointerup', this._handlePointerUp);
    document.removeEventListener('pointercancel', this._handlePointerUp);
  }

  private _updateValue(newValue: number | [number, number], type: 'input' | 'change' = 'change') {
    if (this.readonly || this.disabled) return;
    if (this.dual && Array.isArray(newValue)) {
      newValue = [this._clampValue(newValue[0]), this._clampValue(newValue[1])] as [number, number];
      if (newValue[1] - newValue[0] < this.step) {
        if (newValue[0] === this._values[0]) {
          newValue[0] = newValue[1] - this.step;
        } else {
          newValue[1] = newValue[0] + this.step;
        }
      }
      if (newValue[0] > newValue[1]) newValue = [newValue[1], newValue[0]] as [number, number];
    } else if (!this.dual) {
      const singleValue = Array.isArray(newValue) ? newValue[0] : newValue;
      newValue = this._clampValue(Number(singleValue || 0));
    }
    this.value = newValue;
    this._updateFormValue();
    if (type === 'input' && this._draggingThumb) this._announceValue(newValue);
    const event = new CustomEvent(type, { bubbles: true, composed: true, detail: { value: newValue } });
    this.dispatchEvent(event);
    if (type === 'change' && this.onChange) this.onChange(event);
    else if (type === 'input' && this.onInput) this.onInput(event);
  }

  private _handleInput(e: Event, thumb: 'min' | 'max') {
    if (this._activeDrag || this.readonly) return;
    const value = parseFloat((e.target as HTMLInputElement).value);
    if (this.dual) {
      const currentValues = this._values;
      this._updateValue(thumb === 'min' ? [value, currentValues[1]] : [currentValues[0], value], 'input');
    } else {
      this._updateValue(value, 'input');
    }
  }

  private _handleChange(e: Event, thumb: 'min' | 'max') {
    if (this._activeDrag || this.readonly) return;
    const value = parseFloat((e.target as HTMLInputElement).value);
    if (this.dual) {
      const currentValues = this._values;
      this._updateValue(thumb === 'min' ? [value, currentValues[1]] : [currentValues[0], value], 'change');
    } else {
      this._updateValue(value, 'change');
    }
  }

  private _handleFocus(e: FocusEvent, thumb: 'min' | 'max') {
    this._focusedThumb = thumb;
    this.dispatchEvent(new FocusEvent('focus', { bubbles: true, composed: true }));
    if (this.onFocus) this.onFocus(e);
  }

  private _handleBlur(e: FocusEvent, _thumb: 'min' | 'max') {
    this._focusedThumb = null;
    this.dispatchEvent(new FocusEvent('blur', { bubbles: true, composed: true }));
    if (this.onBlur) this.onBlur(e);
  }

  private _handleTrackClick(e: MouseEvent) {
    if (this.disabled || this.readonly) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const newValue = this._getValueFromPointer(e.clientX, e.clientY, rect);
    if (this.dual) {
      const currentValues = this._values;
      const updatedValues = Math.abs(newValue - currentValues[0]) < Math.abs(newValue - currentValues[1])
        ? [newValue, currentValues[1]] as [number, number]
        : [currentValues[0], newValue] as [number, number];
      this._updateValue(updatedValues);
    } else {
      this._updateValue(newValue);
    }
  }

  private _renderTicks() {
    if (!this.showTicks || !this.tickStep || this.tickStep <= 0) return null;
    const ticks = [];
    const tickCount = Math.floor((this.max - this.min) / this.tickStep);
    if (tickCount > 1000) return null;

    for (let i = 0; i <= tickCount; i++) {
      const value = this.min + (i * this.tickStep);
      const percentage = this._getPercentage(value);
      const style = this.vertical ? `bottom: ${percentage}%` : `inset-inline-start: ${percentage}%`;
      ticks.push(html`
        <div class="${styles.sliderTick || ''} ag-slider__tick" style="${style}">
          <div class="${styles.sliderTickLabel || ''} ag-slider__tick-label">${value}</div>
        </div>
      `);
    }
    return html`<div class="${styles.sliderTicks || ''} ag-slider__ticks">${ticks}</div>`;
  }

  private _renderThumb(value: number, thumbType: 'min' | 'max' | 'single') {
    const percentage = this._getPercentage(value);
    const style = this.vertical ? `bottom: ${percentage}%` : `inset-inline-start: ${percentage}%`;
    return html`
      <div
        class="${styles.sliderThumb || ''} ag-slider__thumb"
        style="${style}"
        part="ag-slider-thumb ${thumbType === 'single' ? 'ag-slider-thumb-single' : `ag-slider-thumb-${thumbType}`}"
        aria-hidden="true"
        @pointerdown=${(e: PointerEvent) => this._handleThumbPointerDown(e, thumbType)}
      >
        ${this.showTooltip ? html`<div class="${styles.sliderTooltip || ''} ag-slider__tooltip">${value}</div>` : ''}
      </div>
    `;
  }

  private _renderProgress() {
    const values = this._values;
    if (this.dual) {
      const start = this._getPercentage(values[0]);
      const end = this._getPercentage(values[1]);
      const style = this.vertical ? `bottom: ${start}%; height: ${end - start}%` : `left: ${start}%; width: ${end - start}%`;
      return html`<div class="${styles.sliderProgress || ''} ag-slider__progress" style="${style}" part="ag-slider-progress"></div>`;
    } else {
      const end = this._getPercentage(values[1]);
      const style = this.vertical ? `bottom: 0; height: ${end}%` : `left: 0; width: ${end}%`;
      return html`<div class="${styles.sliderProgress || ''} ag-slider__progress" style="${style}" part="ag-slider-progress"></div>`;
    }
  }

  private renderLabel() {
    if (!this.label || this.noLabel || this.dual) return '';
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
        class="ag-form-control__label ${this.labelHidden ? 'ag-form-control__label--hidden' : ''} ${this.required ? 'ag-form-control__label--required' : ''} ${positionClasses.join(' ')}"
        part="ag-slider-label"
      >
        ${this.label}
      </label>
    `;
  }

  render() {
    const values = this._values;
    const describedBy = buildAriaDescribedBy({
      helperId: this._helperId,
      errorId: this._errorId,
      hasHelper: !!this.helpText && !this.invalid,
      hasError: !!this.invalid && !!this.errorMessage,
    });

    const minLabel = this.label ? `${this.label} - Minimum value` : 'Minimum value';
    const maxLabel = this.label ? `${this.label} - Maximum value` : 'Maximum value';
    const helperText = this.helpText && !this.invalid ? html`<div class="ag-form-control__helper" id="${this._helperId}">${this.helpText}</div>` : '';
    const errorText = this.invalid && this.errorMessage ? html`<div class="ag-form-control__error" id="${this._errorId}">${this.errorMessage}</div>` : '';

    let sizeClass = styles.sizeDefault;
    if (this.size === 'small') sizeClass = styles.sizeSmall;
    if (this.size === 'large') sizeClass = styles.sizeLarge;

    const sliderControl = html`
      <div
        class="ag-slider__container ${styles.sliderContainer || ''} ${this.vertical ? styles.vertical : ''}"
        part="ag-slider-container"
        role=${ifDefined(this.dual ? 'group' : undefined)}
        aria-label=${ifDefined(this.dual ? this.label || this.ariaLabel : undefined)}
      >
        ${this.dual ? html`
          <input id="${this._minInputId}" class="${styles.sliderInput || ''} ag-slider__input" type="range" min="${this.min}" max="${this.max}" step="${ifDefined(this.step)}" .value="${values[0].toString()}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-valuemin="${this.min}" aria-valuemax="${values[1]}" aria-valuenow="${values[0]}" aria-label="${minLabel}" aria-describedby="${ifDefined(describedBy)}" @input=${(e: Event) => this._handleInput(e, 'min')} @change=${(e: Event) => this._handleChange(e, 'min')} @focus=${(e: FocusEvent) => this._handleFocus(e, 'min')} @blur=${(e: FocusEvent) => this._handleBlur(e, 'min')} />
          <input id="${this._maxInputId}" class="${styles.sliderInput || ''} ag-slider__input" type="range" min="${this.min}" max="${this.max}" step="${ifDefined(this.step)}" .value="${values[1].toString()}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-valuemin="${values[0]}" aria-valuemax="${this.max}" aria-valuenow="${values[1]}" aria-label="${maxLabel}" aria-describedby="${ifDefined(describedBy)}" @input=${(e: Event) => this._handleInput(e, 'max')} @change=${(e: Event) => this._handleChange(e, 'max')} @focus=${(e: FocusEvent) => this._handleFocus(e, 'max')} @blur=${(e: FocusEvent) => this._handleBlur(e, 'max')} />
        ` : html`
          <input id="${this._sliderId}" class="${styles.sliderInput || ''} ag-slider__input" type="range" min="${this.min}" max="${this.max}" step="${ifDefined(this.step)}" .value="${values[1].toString()}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" aria-valuemin="${this.min}" aria-valuemax="${this.max}" aria-valuenow="${values[1]}" aria-label="${ifDefined(this.ariaLabel || undefined)}" aria-describedby="${ifDefined(describedBy)}" @input=${(e: Event) => this._handleInput(e, 'max')} @change=${(e: Event) => this._handleChange(e, 'max')} @focus=${(e: FocusEvent) => this._handleFocus(e, 'max')} @blur=${(e: FocusEvent) => this._handleBlur(e, 'max')} />
        `}
        <div class="${styles.sliderTrack || ''} ag-slider__track" part="ag-slider-track" @click=${this._handleTrackClick}>
          ${this._renderProgress()}
          ${this._renderTicks()}
          ${this.dual ? html`${this._renderThumb(values[0], 'min')}${this._renderThumb(values[1], 'max')}` : this._renderThumb(values[1], 'single')}
        </div>
      </div>
    `;
    const isHorizontal = isHorizontalLabel(this.labelPosition);
    const bodyContainer = isHorizontal ? html`<div class="ag-form-control--horizontal">${this.renderLabel()}${sliderControl}</div>` : this.labelPosition === 'bottom' ? html`${sliderControl}${helperText}${errorText}${this.renderLabel()}` : html`${this.renderLabel()}${sliderControl}`;

    return html`
      <div class="ag-slider ${styles.sliderWrapper || ''} ${sizeClass || ''}" part="ag-slider-wrapper">
        <div class="${styles.sliderLiveRegion || ''} ag-slider__live-region" aria-live="polite" aria-atomic="true" part="ag-slider-live-region"></div>
        ${bodyContainer}
        ${!isHorizontal ? '' : html`${helperText}${errorText}`}
        ${isHorizontal ? '' : html`${helperText}${errorText}`}
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('pointermove', this._handlePointerMove);
    document.removeEventListener('pointerup', this._handlePointerUp);
    document.removeEventListener('pointercancel', this._handlePointerUp);
  }
}
