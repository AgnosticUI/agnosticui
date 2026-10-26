import { LitElement, html, css, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  createFormControlIds,
  buildAriaDescribedBy,
  isHorizontalLabel,
  type LabelPosition,
} from '../../../shared/form-control-utils';
import { formControlStyles } from '../../../shared/form-control-styles';
import { FaceMixin, type ValidationMessages } from '../../../shared/face-mixin';
import styles from './toggle-structure.module.css';
import structuralStylesText from './toggle-structure.module.css?inline';

export interface ToggleChangeEventDetail {
  checked: boolean;
  name: string;
  value: string;
}

export type ToggleChangeEvent = CustomEvent<ToggleChangeEventDetail>;

export interface ToggleProps {
  label?: string;
  labelPosition?: LabelPosition;
  labelHidden?: boolean;
  noLabel?: boolean;
  checked?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  invalid?: boolean;
  errorMessage?: string;
  helpText?: string;
  name?: string;
  value?: string;
  validationMessages?: ValidationMessages;
  onClick?: (event: MouseEvent) => void;
  onToggleChange?: (event: ToggleChangeEvent) => void;
}

export class AgToggle extends FaceMixin(LitElement) implements ToggleProps {
  static styles = [
    formControlStyles,
    css`${unsafeCSS(structuralStylesText)}`,
    css`
      :host {
        display: block;
      }

      button,
      button.ag-toggle-wrapper {
        margin: 0;
        border: none;
        background: transparent;
        cursor: pointer;
        font-family: inherit;
        color: inherit;
        padding: 0;
        display: inline-flex;
        align-items: center;
        position: relative;
        min-inline-size: 44px;
        min-block-size: 44px;
        border-radius: var(--ag-focus-border-radius);
        transition: all var(--ag-transition-duration) ease;
      }

      button:focus-visible,
      button.ag-toggle-wrapper:focus-visible {
        outline: var(--ag-focus-width) solid rgba(var(--ag-focus), 0.5);
        outline-offset: var(--ag-focus-offset);
      }

      button:disabled,
      button[disabled],
      button.ag-toggle-wrapper[disabled] {
        cursor: not-allowed;
        opacity: 0.6;
      }

      :host([readonly]) button,
      button[readonly],
      button.ag-toggle-wrapper[readonly] {
        cursor: default;
      }

      .visually-hidden {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }
    `,
  ];

  private _toggleId: string = '';
  private _labelId: string = '';
  private _helperId: string = '';
  private _errorId: string = '';

  @property({ type: String })
  declare label: string;

  @property({ type: String, attribute: 'label-position' })
  labelPosition: LabelPosition = 'top';

  @property({ type: Boolean, attribute: 'label-hidden' })
  declare labelHidden: boolean;

  @property({ type: Boolean, attribute: 'no-label' })
  declare noLabel: boolean;

  @property({ type: Boolean, reflect: true })
  declare checked: boolean;

  @property({ type: String, reflect: true })
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  @property({ type: String, reflect: true })
  declare variant: 'default' | 'success' | 'warning' | 'danger' | 'monochrome';

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

  @property({ type: String, reflect: true })
  declare name: string;

  @property({ type: String })
  declare value: string;

  @property({ attribute: false })
  declare onClick?: (event: MouseEvent) => void;

  @property({ attribute: false })
  declare validationMessages: ValidationMessages | undefined;

  @property({ attribute: false })
  declare onToggleChange?: (event: ToggleChangeEvent) => void;

  constructor() {
    super();
    const ids = createFormControlIds('toggle');
    this._toggleId = ids.inputId;
    this._labelId = ids.labelId;
    this._helperId = ids.helperId;
    this._errorId = ids.errorId;

    this.label = '';
    this.labelHidden = false;
    this.noLabel = false;
    this.checked = false;
    this.size = 'md';
    this.variant = 'default';
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.invalid = false;
    this.errorMessage = '';
    this.helpText = '';
    this.name = '';
    this.value = '';
    this.validationMessages = undefined;
  }

    override formResetCallback(): void {
    this.checked = false;
    this._internals.setFormValue(null);
    this._internals.setValidity({});
    this._syncStates();
  }

  override formStateRestoreCallback(
    state: File | string | FormData | null,
    _mode: 'restore' | 'autocomplete'
  ): void {
    this.checked = state !== null;
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();
  }

  private _syncValidity(): void {
    if (this.required && !this.checked) {
      this._internals.setValidity(
        { valueMissing: true },
        this.validationMessages?.valueMissing ?? 'Please check this field.'
      );
    } else {
      this._internals.setValidity({});
    }
  }

  private _syncStates(): void {
    this._setState('checked', this.checked);
    this._setState('disabled', this.disabled);
    this._setState('readonly', this.readonly);
    this._setState('required', this.required);
    this._setState('invalid', !this._internals.validity.valid);
  }

  override updated(changedProperties: Map<string, unknown>) {
    super.updated(changedProperties);
    
    // Completely solves programmatic synchronization shifts via external property mutations
    if (
      changedProperties.has('checked') ||
      changedProperties.has('value') ||
      changedProperties.has('disabled') ||
      changedProperties.has('readonly') ||
      changedProperties.has('required')
    ) {
      this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
      this._syncValidity();
      this._syncStates();
    }
  }

  protected firstUpdated() {
    this._internals.setFormValue(this.checked ? (this.value || 'on') : null);
    this._syncValidity();
    this._syncStates();
    if (!this.label && !this.noLabel) {
      // eslint-disable-next-line no-console
      console.warn('AgToggle: label property is required for accessibility.');
    }
  }

  private renderLabel() {
    if (!this.label || this.noLabel) return '';
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
        for=${this._toggleId}
        class="ag-form-control__label ${this.labelHidden ? 'ag-form-control__label--hidden' : ''} ${this.required ? 'ag-form-control__label--required' : ''} ${positionClasses.join(' ')}"
        part="ag-toggle-label"
      >
        ${this.label}
      </label>
    `;
  }

  private _handleClick = (event: MouseEvent) => {
    if (this.onClick) {
      this.onClick(event);
    }
    this._performToggle(event);
  };

  private _handleKeydown = (event: KeyboardEvent) => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      this._performToggle(event);
    }
  };

  private _performToggle = (event: Event) => {
    if (this.disabled || this.readonly) {
      event.preventDefault();
      return;
    }

    this.checked = !this.checked;
    
    const toggleChangeEvent = new CustomEvent<ToggleChangeEventDetail>('toggle-change', {
      detail: {
        checked: this.checked,
        name: this.name,
        value: this.value
      },
      bubbles: true,
      composed: true
    });

    this.dispatchEvent(toggleChangeEvent);
    if (this.onToggleChange) {
      this.onToggleChange(toggleChangeEvent);
    }
  };

  render() {
    const describedBy = buildAriaDescribedBy({
      helperId: this._helperId,
      errorId: this._errorId,
      hasHelper: !!this.helpText && !this.invalid,
      hasError: !!this.invalid && !!this.errorMessage,
    });

    const helperTextNode = this.helpText && !this.invalid
      ? html`<div class="ag-form-control__helper" id="${this._helperId}">${this.helpText}</div>`
      : '';

    const errorTextNode = this.invalid && this.errorMessage
      ? html`<div class="ag-form-control__error" id="${this._errorId}">${this.errorMessage}</div>`
      : '';

    let sizeClass = styles.sizeMd;
    if (this.size === 'xs') sizeClass = styles.sizeXs;
    if (this.size === 'sm') sizeClass = styles.sizeSm;
    if (this.size === 'lg') sizeClass = styles.sizeLg;
    if (this.size === 'xl') sizeClass = styles.sizeXl;

    let variantClass = '';
    if (this.variant === 'success') variantClass = styles.variantSuccess;
    if (this.variant === 'warning') variantClass = styles.variantWarning;
    if (this.variant === 'danger') variantClass = styles.variantDanger;
    if (this.variant === 'monochrome') variantClass = styles.variantMonochrome;

    const toggleButton = html`
      <button
        id="${this._toggleId}"
        role="switch"
        aria-checked="${this.checked}"
        aria-labelledby="${ifDefined(this.label && !this.noLabel ? this._labelId : undefined)}"
        aria-describedby="${ifDefined(describedBy)}"
        ?disabled="${this.disabled}"
        class="ag-toggle ag-toggle--${this.size} ag-toggle--${this.variant} ${styles.toggleWrapper || ''} ${sizeClass || ''} ${variantClass || ''}"
        part="ag-toggle-button"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <span class="${styles.toggleTrack || ''} ag-toggle__track" part="ag-toggle-track">
          <span class="${styles.toggleHandle || ''} ag-toggle__handle" part="ag-toggle-handle"></span>
        </span>
        <span class="visually-hidden">
          ${this.checked ? 'On' : 'Off'}
        </span>
      </button>
    `;

    const isHorizontal = isHorizontalLabel(this.labelPosition);
    
    return html`
      <div class="${styles.toggleContainer || ''} ag-toggle-container">
        ${isHorizontal ? html`
          <div class="ag-form-control--horizontal">
            ${this.renderLabel()}
            ${toggleButton}
          </div>
          ${helperTextNode}
          ${errorTextNode}
        ` : this.labelPosition === 'bottom' ? html`
          ${toggleButton}
          ${helperTextNode}
          ${errorTextNode}
          ${this.renderLabel()}
        ` : html`
          ${this.renderLabel()}
          ${toggleButton}
          ${helperTextNode}
          ${errorTextNode}
        `}
      </div>
    `;
  }
}
