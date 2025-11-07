
import { AgLink } from './_Link';

export const Link = AgLink;

if (!customElements.get('ag-link')) {
  customElements.define('ag-link', AgLink);
}
