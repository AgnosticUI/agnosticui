import '@testing-library/jest-dom';

// Global test setup for React Testing Library and jest-dom matchers

// Stub ElementInternals / attachInternals for FACE components.
// happy-dom does not yet implement the Form Associated Custom Elements API,
// so we provide a minimal no-op shim so tests can instantiate FACE components.
if (typeof HTMLElement !== 'undefined' && !HTMLElement.prototype.attachInternals) {
  HTMLElement.prototype.attachInternals = function () {
    const validityFlags: Array<keyof ValidityStateFlags> = [
      'valueMissing', 'typeMismatch', 'patternMismatch', 'tooLong', 'tooShort',
      'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput', 'customError',
    ];
    const validity: ValidityState = {
      valid: true,
      valueMissing: false,
      typeMismatch: false,
      patternMismatch: false,
      tooLong: false,
      tooShort: false,
      rangeUnderflow: false,
      rangeOverflow: false,
      stepMismatch: false,
      badInput: false,
      customError: false,
    };
    let validationMsg = '';
    return {
      setFormValue: () => {},
      setValidity: (flags: ValidityStateFlags, message?: string) => {
        for (const key of validityFlags) {
          (validity as Record<string, boolean>)[key] = !!(flags as Record<string, boolean>)[key];
        }
        (validity as Record<string, boolean>).valid = validityFlags.every(k => !(validity as Record<string, boolean>)[k]);
        validationMsg = message ?? '';
      },
      checkValidity: () => validity.valid,
      reportValidity: () => validity.valid,
      form: null,
      validity,
      get validationMessage() { return validationMsg; },
      willValidate: false,
      labels: null as unknown as NodeList,
      states: new Set() as unknown as CustomStateSet,
      shadowRoot: null,
      role: '',
      ariaAtomic: null,
      ariaAutoComplete: null,
      ariaBusy: null,
      ariaChecked: null,
      ariaColCount: null,
      ariaColIndex: null,
      ariaColSpan: null,
      ariaCurrent: null,
      ariaDisabled: null,
      ariaExpanded: null,
      ariaHasPopup: null,
      ariaHidden: null,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLevel: null,
      ariaLive: null,
      ariaModal: null,
      ariaMultiLine: null,
      ariaMultiSelectable: null,
      ariaOrientation: null,
      ariaPlaceholder: null,
      ariaPosInSet: null,
      ariaPressed: null,
      ariaReadOnly: null,
      ariaRequired: null,
      ariaRoleDescription: null,
      ariaRowCount: null,
      ariaRowIndex: null,
      ariaRowSpan: null,
      ariaSelected: null,
      ariaSetSize: null,
      ariaSort: null,
      ariaValueMax: null,
      ariaValueMin: null,
      ariaValueNow: null,
      ariaValueText: null,
    } as unknown as ElementInternals;
  };
}