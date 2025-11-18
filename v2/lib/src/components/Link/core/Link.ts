
import { AgLink } from './_Link.js';

export const Link = AgLink;

if (!customElements.get('ag-link')) {
  customElements.define('ag-link', AgLink);
}

export * from './_Link.js';
