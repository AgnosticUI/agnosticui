import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import './components/ag/Alert/core/Alert';
import './components/ag/Button/core/Button';

@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <main style="padding: 20px">
        <h1>AgnosticUI Lit Smoke Test</h1>
        <ag-button variant="primary" shape="rounded">Hello Button</ag-button>
        <ag-alert variant="success">Hello Alert</ag-alert>
      </main>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
