import { LitElement, html } from 'lit';
import 'agnosticui-core/tooltip';
import 'agnosticui-core/button';

export class TooltipLitExamples extends LitElement {
  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Tooltip</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip content="This is a tooltip">
            <ag-button>Hover me</ag-button>
          </ag-tooltip>
          <ag-tooltip content="Tooltips provide helpful context">
            <ag-button variant="primary">Primary button</ag-button>
          </ag-tooltip>
          <ag-tooltip content="Additional information here">
            <ag-button variant="success">Success button</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Placement Options</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            content="Tooltip on top"
            placement="top"
          >
            <ag-button>Top</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on bottom"
            placement="bottom"
          >
            <ag-button>Bottom</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on left"
            placement="left"
          >
            <ag-button>Left</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Tooltip on right"
            placement="right"
          >
            <ag-button>Right</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Trigger Options</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            content="Hover over me"
            trigger="hover"
          >
            <ag-button>Hover trigger</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Click to toggle"
            trigger="click"
          >
            <ag-button>Click trigger</ag-button>
          </ag-tooltip>
          <ag-tooltip
            content="Hover or focus works"
            trigger="hover focus"
          >
            <ag-button>Hover + Focus</ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>Icon-Only Buttons</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip content="Edit item">
            <ag-button aria-label="Edit">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Delete item">
            <ag-button
              variant="danger"
              aria-label="Delete"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Download file">
            <ag-button
              variant="success"
              aria-label="Download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-white)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </ag-button>
          </ag-tooltip>
          <ag-tooltip content="Share content">
            <ag-button
              variant="secondary"
              aria-label="Share"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ag-neutral-700)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
            </ag-button>
          </ag-tooltip>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the tooltip's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in this example.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-tooltip
            class="custom-tooltip-gradient"
            content="Customized with CSS Shadow Parts!"
            placement="top"
          >
            <ag-button variant="primary">Gradient Tooltip</ag-button>
          </ag-tooltip>
        </div>
      </section>
    `;
  }
}

customElements.define('tooltip-lit-examples', TooltipLitExamples);
