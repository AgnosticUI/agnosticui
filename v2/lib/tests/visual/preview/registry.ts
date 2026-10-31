// v2/lib/tests/visual/preview/registry.ts
import { html } from 'lit';

/**
 * Pure JavaScript component layout mapping matching the verified baseline setup.
 * Includes comprehensive test templates for Button and Alert components covering variants, sizes, shapes, and styles.
 */
export const COMPONENT_REGISTRY = {
  Button: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
      <!-- Row 1: Color Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button data-testid="btn-primary" variant="primary">Primary Action</ag-button>
        <ag-button data-testid="btn-secondary" variant="secondary">Secondary Action</ag-button>
        <ag-button data-testid="btn-success" variant="success">Success Action</ag-button>
        <ag-button data-testid="btn-warning" variant="warning">Warning Action</ag-button>
        <ag-button data-testid="btn-danger" variant="danger">Danger Action</ag-button>
        <ag-button data-testid="btn-disabled" ?disabled=${true}>Disabled Action</ag-button>
      </div>

      <!-- Row 2: Size Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button variant="primary" size="x-sm">Extra Small</ag-button>
        <ag-button variant="primary" size="sm">Small</ag-button>
        <ag-button variant="primary" size="md">Medium</ag-button>
        <ag-button variant="primary" size="lg">Large</ag-button>
        <ag-button variant="primary" size="xl">Extra Large</ag-button>
      </div>

      <!-- Row 3: Shape Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button variant="primary" shape="rounded">Rounded Shape</ag-button>
        <ag-button variant="primary" shape="capsule">Capsule Shape</ag-button>
        <ag-button variant="primary" shape="circle">C</ag-button>
        <ag-button variant="primary" shape="square">S</ag-button>
        <ag-button variant="primary" shape="rounded-square">RS</ag-button>
      </div>

      <!-- Row 4: Bordered (Outline) Styles -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button variant="primary" ?bordered=${true}>Bordered Primary</ag-button>
        <ag-button variant="secondary" ?bordered=${true}>Bordered Secondary</ag-button>
        <ag-button variant="success" ?bordered=${true}>Bordered Success</ag-button>
        <ag-button variant="warning" ?bordered=${true}>Bordered Warning</ag-button>
        <ag-button variant="danger" ?bordered=${true}>Bordered Danger</ag-button>
      </div>
    </div>
  `,
  Alert: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Section 1: Standard Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Standard Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <ag-alert>Default alert</ag-alert>
          <ag-alert variant="success">Success alert</ag-alert>
          <ag-alert variant="info">Info alert</ag-alert>
          <ag-alert variant="primary">Primary alert</ag-alert>
          <ag-alert variant="warning">Warning alert</ag-alert>
          <ag-alert variant="error">Error alert</ag-alert>
          <ag-alert variant="danger">Danger alert</ag-alert>
          <ag-alert variant="monochrome">Monochrome alert</ag-alert>
        </div>
      </div>

      <!-- Section 2: Bordered Style Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Bordered Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <ag-alert ?bordered=${true}>Default alert</ag-alert>
          <ag-alert variant="success" ?bordered=${true}>Success alert</ag-alert>
          <ag-alert variant="error" ?bordered=${true}>Error alert</ag-alert>
          <ag-alert variant="monochrome" ?bordered=${true}>Monochrome alert</ag-alert>
        </div>
      </div>

      <!-- Section 3: Rounded Corners -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Rounded Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <ag-alert ?rounded=${true}>Default alert</ag-alert>
          <ag-alert variant="success" ?rounded=${true}>Success alert</ag-alert>
          <ag-alert variant="warning" ?rounded=${true}>Warning alert</ag-alert>
        </div>
      </div>

      <!-- Section 4: Bordered Left Accents -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Bordered Left Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <ag-alert ?borderedLeft=${true}>Default alert</ag-alert>
          <ag-alert variant="success" ?borderedLeft=${true}>Success alert</ag-alert>
          <ag-alert variant="danger" ?borderedLeft=${true}>Danger alert</ag-alert>
        </div>
      </div>
    </div>
  `,
  Tag: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Section 1: Standard Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Standard Tags</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <ag-tag>Default Tag</ag-tag>
          <ag-tag variant="primary">Primary Tag</ag-tag>
          <ag-tag variant="info">Info Tag</ag-tag>
          <ag-tag variant="success">Success Tag</ag-tag>
          <ag-tag variant="warning">Warning Tag</ag-tag>
          <ag-tag variant="error">Error Tag</ag-tag>
          <ag-tag variant="monochrome">Monochrome Tag</ag-tag>
        </div>
      </div>

      <!-- Section 2: Shapes Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Shapes Matrix</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <ag-tag shape="pill" variant="info">Pill Tag</ag-tag>
          <ag-tag shape="round" variant="success">Round Tag</ag-tag>
          <ag-tag shape="circle" variant="error">!</ag-tag>
        </div>
      </div>

      <!-- Section 3: Uppercase Modifiers -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Uppercase Modifiers</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <ag-tag .isUppercase=${true} variant="warning">Uppercase Tag</ag-tag>
          <ag-tag .isUppercase=${true} shape="pill">Pill Label</ag-tag>
        </div>
      </div>

      <!-- Section 4: Removable Close Slots -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Removable & Close Slots</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <ag-tag variant="error">Deletable <button slot="close" aria-label="close">✕</button></ag-tag>
          <ag-tag variant="success" shape="pill">Active <button slot="close" aria-label="close">✕</button></ag-tag>
          <ag-tag variant="warning" .isUppercase=${true}>Pending <button slot="close" aria-label="close">✕</button></ag-tag>
          <ag-tag .removable=${true} variant="primary">Removable Prop</ag-tag>
        </div>
      </div>
    </div>
  `

};
