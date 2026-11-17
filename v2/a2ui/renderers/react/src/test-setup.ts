/**
 * @file test-setup.ts
 * @description JSDOM ElementInternals shim for AgnosticUI FACE components in Vitest.
 */

if (typeof HTMLElement !== 'undefined') {
  HTMLElement.prototype.attachInternals = function attachInternals(): ElementInternals {
    let validationMessage = '';
    const validityState: ValidityState = {
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false,
      valid: true,
    };

    const updateValidity = (
      flags: Partial<Record<keyof ValidityState, boolean>> = {},
      message = '',
    ) => {
      let isValid = true;
      for (const key of Object.keys(validityState) as Array<keyof ValidityState>) {
        if (key === 'valid') continue;
        const flagVal = Boolean(flags[key]);
        (validityState as unknown as Record<string, boolean>)[key] = flagVal;
        if (flagVal) isValid = false;
      }
      (validityState as unknown as Record<string, boolean>).valid = isValid;
      validationMessage = isValid ? '' : message;
    };

    return {
      form: null,
      labels: [] as unknown as NodeListOf<HTMLLabelElement>,
      shadowRoot: this.shadowRoot,
      states: new Set<string>() as unknown as CustomStateSet,
      validationMessage,
      validity: validityState,
      willValidate: true,
      checkValidity: () => validityState.valid,
      reportValidity: () => validityState.valid,
      setFormValue: () => {},
      setValidity: (flags?: ValidityStateFlags, message?: string) => {
        updateValidity(flags as Partial<Record<keyof ValidityState, boolean>>, message ?? '');
      },
    } as unknown as ElementInternals;
  };
}
