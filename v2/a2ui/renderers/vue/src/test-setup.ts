// Polyfill ElementInternals for JSDOM 26 (whose built-in stub omits setFormValue/setValidity)
// so AgnosticUI Form-Associated Custom Elements construct cleanly in Vitest.
if (typeof HTMLElement !== 'undefined') {
  HTMLElement.prototype.attachInternals = function attachInternals() {
    return {
      setFormValue() {},
      setValidity() {},
      checkValidity() {
        return true;
      },
      reportValidity() {
        return true;
      },
      validity: { valid: true } as ValidityState,
      validationMessage: '',
      willValidate: false,
      labels: [] as unknown as NodeListOf<HTMLLabelElement>,
      form: null,
      shadowRoot: this.shadowRoot,
    } as unknown as ElementInternals;
  };
}
