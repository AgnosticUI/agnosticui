import { LitElement, html, css } from 'lit';
import { property, state } from 'lit/decorators.js';
import '@agnosticui/render-lit';
import { pickerFixture } from '../../../demo/src/fixtures/picker';
import type { AgNode } from '@agnosticui/schema';

export class WorkflowPicker extends LitElement {
  static styles = css`:host { display: block; }`;

  @state() private selected = 'contact-form';

  private get nodes(): AgNode[] {
    return pickerFixture.map(node =>
      node.id === 'picker-group' ? { ...node, value: this.selected } as AgNode : node
    );
  }

  private actions = {
    'workflow-select': (payload: unknown) => {
      this.selected = payload as string;
      this.dispatchEvent(new CustomEvent('workflow-select', {
        detail: payload,
        bubbles: true,
        composed: true,
      }));
    },
  };

  render() {
    return html`<ag-dynamic-renderer
      .nodes=${this.nodes}
      .actions=${this.actions}
    ></ag-dynamic-renderer>`;
  }
}

customElements.define('ag-workflow-picker', WorkflowPicker);
