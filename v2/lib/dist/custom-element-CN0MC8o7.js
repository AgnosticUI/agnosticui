/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n = (e) => (t, i) => {
  i !== void 0 ? i.addInitializer((() => {
    customElements.define(e, t);
  })) : customElements.define(e, t);
};
export {
  n as t
};
