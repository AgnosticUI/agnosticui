import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import './components/ag/Alert/core/Alert';
import './components/ag/Avatar/core/Avatar';
import './components/ag/Badge/core/Badge';
import './components/ag/Button/core/Button';
import './components/ag/Card/core/Card';
import './components/ag/Divider/core/Divider';
import './components/ag/Flex/core';
import './components/ag/Image/core/Image';
import './components/ag/Tag/core/Tag';
import './components/ag/VisuallyHidden/core/VisuallyHidden';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  render() {
    return html`
      <h1>Kitchen Sink :-)</h1>
      <ag-stack gap="1rem">
        <h2>Stack</h2>
        <div>Stacked Item 1.</div>
        <div>Stacked Item 2.</div>
        <div>Stacked Item 3.</div>
      </ag-stack>
      <ag-card class="card">Card</ag-card>
      <ag-flex-row class="responsive" gap="1rem">
        <ag-button variant="primary">Primary Button</ag-button>
        <ag-button variant="warning">Warning Button</ag-button>
        <ag-button variant="secondary">Secondary Button</ag-button>
        <ag-button variant="success">Success Button</ag-button>
        <ag-button variant="danger">Danger Button</ag-button>
        <ag-button variant="danger" bordered>Bordered</ag-button>
        <ag-button variant="danger" bordered shape="rounded">Bordered Round</ag-button>
        <ag-button variant="danger" bordered shape="capsule">Capsule</ag-button>
      </ag-flex-row>
      <ag-flex-row class="responsive" gap="1rem">
        <ag-badge variant="primary">Primary</ag-badge>
        <ag-badge variant="success">Success</ag-badge>
        <ag-badge variant="warning">Warning</ag-badge>
        <ag-badge variant="danger">Danger</ag-badge>
        <ag-badge variant="neutral">Neutral</ag-badge>
        <ag-badge variant="info">Info</ag-badge>
      </ag-flex-row>
      <ag-flex-row class="responsive" gap="1rem">
        <ag-alert type="primary" rounded borderedLeft>
          This is an primary alert with a close button
        </ag-alert>
        <ag-alert type="info" rounded borderedLeft>
          This is an info alert with a close button
        </ag-alert>
        <ag-alert type="success" rounded borderedLeft>
          This is an success alert with a close button
          <ag-close-button></ag-close-button>
        </ag-alert>
        <ag-alert type="warning" rounded borderedLeft>
          This is an warning alert with a close button
        </ag-alert>
        <ag-alert type="error" rounded borderedLeft>
          This is an error alert with a close button
        </ag-alert>
        <ag-alert type="danger" rounded borderedLeft>
          This is an danger alert with a close button
        </ag-alert>
        <ag-alert type="monochrome" rounded borderedLeft>
          This is an monochrome alert with a close button
        </ag-alert>
      </ag-flex-row>
      <ag-flex-row class="responsive" gap="1rem">
        <ag-tag variant="primary" shape="pill">
          Primary Tag
        </ag-tag>
        <ag-tag variant="success" shape="pill" uppercase>
          Active
          <ag-visually-hidden>Active Task</ag-visually-hidden>
        </ag-tag>
        <ag-tag variant="error" shape="pill" uppercase>
          Error
        </ag-tag>
      </ag-flex-row>
      <ag-flex-row class="responsive" gap="1rem">
        <ag-avatar-group>
          <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="DC" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="EF" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="GH" variant="info" size="lg"></ag-avatar>
        </ag-avatar-group>
      </ag-flex-row>
      <ag-flex-row class="responsive" gap="1rem">
        <ag-image
          class="responsive-image-container"
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800"
          alt="A beautiful landscape."
          aspectRatio="16/9"
        ></ag-image>
      </ag-flex-row>
      <slot></slot>
    `
  }

  static styles = css`
    :host {
      display: grid;
      row-gap: var(--ag-space-4);
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    .card {
      margin-block: var(--ag-space-8);
    }
    .responsive {
      --flex-direction: column;
      --flex-gap: var(--ag-space-2);
      margin-block-end: var(--ag-space-4);
    }
    .responsive + .responsive {
      margin-block-start: 2rem;
    }
    @media (min-width: 768px) {
      .responsive {
        --flex-direction: row;
        --flex-gap: var(--ag-space-4);
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
