/**
 * SMOKE TEST APP — keep this minimal.
 *
 * This app exists solely to support Playwright smoke tests in CI. Rendering
 * too many Lit custom elements simultaneously causes Playwright's isolated
 * context to hang indefinitely. Only add components here if you also update
 * the smoke tests. Do NOT repurpose this app as a component showcase.
 */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/ag/Button/core/Button';
import './components/ag/Alert/core/Alert';

@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <ag-button>Button</ag-button>
      <ag-alert>Alert</ag-alert>
    `;
  }
}
