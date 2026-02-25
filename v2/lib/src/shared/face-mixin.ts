/**
 * FaceMixin — Form Associated Custom Element (FACE) shared behaviors
 *
 * Adds the common FACE API surface to any LitElement subclass so that
 * AgInput, AgCheckbox, AgSelect, AgRadio, etc. don't repeat this boilerplate.
 *
 * What every FACE component shares (lives here):
 *  - `static formAssociated = true`
 *  - `protected _internals` (ElementInternals handle)
 *  - `name` property
 *  - `get form/validity/validationMessage/willValidate`
 *  - `checkValidity()` / `reportValidity()`
 *  - `formDisabledCallback()` — syncs disabled from parent <fieldset disabled>
 *  - No-op `formResetCallback()` — subclasses override for component-specific reset
 *
 * What stays in each component (NOT here):
 *  - `formResetCallback()` implementation — each component knows its own default state
 *  - `setFormValue()` calls — component decides when/what to submit
 *  - `setValidity()` calls — component drives its own constraint validation
 *
 * Usage:
 *   import { FaceMixin } from '../../../shared/face-mixin.js';
 *   export class AgInput extends FaceMixin(LitElement) { ... }
 */

import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';

// Standard Lit mixin type helper
type Constructor<T = {}> = new (...args: any[]) => T;

/**
 * Sync the validity state of an inner <input> or <textarea> to ElementInternals.
 *
 * This is the recommended delegation strategy: let the native input run its own
 * constraint validation (required, minlength, type="email", pattern, etc.) and
 * then mirror the result into ElementInternals so the host custom element's
 * validity reflects the inner element.
 *
 * Call this on every `input` and `change` event, and once after `firstUpdated`.
 *
 * @param internals - The ElementInternals handle from attachInternals()
 * @param inputEl   - The inner native input or textarea element
 */
export function syncInnerInputValidity(
  internals: ElementInternals,
  inputEl: HTMLInputElement | HTMLTextAreaElement | null | undefined
): void {
  if (!inputEl) return;

  if (!inputEl.validity.valid) {
    internals.setValidity(inputEl.validity, inputEl.validationMessage, inputEl);
  } else {
    internals.setValidity({});
  }
}

/**
 * Type-level declaration of everything FaceMixin adds to a class.
 *
 * Using `declare class` (rather than `interface`) is the Lit-recommended approach
 * for mixins that include protected members — it avoids TS4094 "anonymous class
 * type may not be private or protected" errors in declaration emit.
 *
 * Import this type when you need to declare a FACE-capable component in type position.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export declare class FaceMixinInterface {
  /** Registers this element as form-associated with the browser */
  static readonly formAssociated: boolean;
  /** ElementInternals handle — subclasses use this to call setFormValue/setValidity */
  protected _internals: ElementInternals;
  /** The name under which this control's value is submitted with the parent form */
  name: string;
  /** The parent <form> element, or null */
  readonly form: HTMLFormElement | null;
  /** Current ValidityState, updated via _internals.setValidity() */
  readonly validity: ValidityState;
  /** Browser-generated or custom validation message */
  readonly validationMessage: string;
  /** Whether this element participates in constraint validation */
  readonly willValidate: boolean;
  /** Silent validity check; fires 'invalid' event if invalid */
  checkValidity(): boolean;
  /** Validity check with browser tooltip if invalid */
  reportValidity(): boolean;
  /** FACE lifecycle — called when a fieldset disabled ancestor changes */
  formDisabledCallback(disabled: boolean): void;
  /** FACE lifecycle — called on form reset; subclasses should override */
  formResetCallback(): void;
}

/**
 * FaceMixin
 *
 * Compose onto any LitElement subclass to get full FACE boilerplate.
 * Subclasses MUST override `formResetCallback()` to restore their own default state.
 */
export const FaceMixin = <T extends Constructor<LitElement>>(superClass: T) => {
  class FaceElement extends superClass {
    /**
     * Registers the element as form-associated with the browser.
     * This is what enables ElementInternals and the form lifecycle callbacks.
     */
    static readonly formAssociated = true;

    /**
     * ElementInternals handle.
     * Protected so subclasses can call setFormValue(), setValidity(), etc.
     * Must be initialized in constructor before any other use.
     */
    protected _internals!: ElementInternals;

    /**
     * The name under which this control's value is submitted with the parent form.
     * Mirrors the standard `name` attribute on native form controls.
     * Reflected so it works in plain HTML: <ag-input name="email">
     */
    @property({ type: String, reflect: true })
    name = '';

    constructor(...args: any[]) {
      super(...args);
      // attachInternals() must be called in the constructor, before any other lifecycle
      this._internals = this.attachInternals();
    }

    /** The parent <form> element, or null if not inside a form. */
    get form(): HTMLFormElement | null {
      return this._internals.form;
    }

    /** The current ValidityState, updated via this._internals.setValidity(). */
    get validity(): ValidityState {
      return this._internals.validity;
    }

    /** The browser-generated or custom validation message. */
    get validationMessage(): string {
      return this._internals.validationMessage;
    }

    /** Whether this element will participate in constraint validation. */
    get willValidate(): boolean {
      return this._internals.willValidate;
    }

    /** Checks validity silently; fires a cancellable 'invalid' event if invalid. */
    checkValidity(): boolean {
      return this._internals.checkValidity();
    }

    /** Checks validity and shows the browser validation tooltip if invalid. */
    reportValidity(): boolean {
      return this._internals.reportValidity();
    }

    /**
     * FACE lifecycle: called when a <fieldset disabled> ancestor is toggled.
     * Syncs the component's own `disabled` property so it renders correctly.
     *
     * Note: this only fires for inherited disabled state (via fieldset), not
     * for the element's own `disabled` attribute — both paths must be handled.
     */
    formDisabledCallback(disabled: boolean): void {
      // `disabled` is declared on each subclass via @property; cast to access it
      (this as unknown as { disabled: boolean }).disabled = disabled;
    }

    /**
     * FACE lifecycle: called when the parent form is reset.
     * Default is a no-op. Subclasses MUST override to restore their default state
     * and call this._internals.setFormValue('') / setValidity({}).
     */
    formResetCallback(): void {
      // no-op default — override in subclass
    }
  }

  // Cast to FaceMixinInterface & T to avoid TS4094 errors in declaration emit
  // caused by the anonymous class having protected members. The declare class above
  // describes the same shape TypeScript-safely.
  return FaceElement as unknown as Constructor<FaceMixinInterface> & T;
};
