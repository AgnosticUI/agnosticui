import { Card } from './_Card';

if (!customElements.get('ag-card')) {
  customElements.define('ag-card', Card);
}
