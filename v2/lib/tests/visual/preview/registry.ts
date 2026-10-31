// v2/lib/tests/visual/preview/registry.ts
import { html } from 'lit';

/**
 * Pure JavaScript component layout mapping matching the verified baseline setup.
 * Includes comprehensive test templates for Button and Alert components covering variants, sizes, shapes, and styles.
 */
export const COMPONENT_REGISTRY = {
  
  Accordion: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <ag-accordion>
        <ag-accordion-item use-chevron><span slot="header">Use Chevron</span><div slot="content"><p>Content</p></div></ag-accordion-item>
        <ag-accordion-item use-minus><span slot="header">Use Minus</span><div slot="content"><p>Content</p></div></ag-accordion-item>
        <ag-accordion-item use-x><span slot="header">Use X</span><div slot="content"><p>Content</p></div></ag-accordion-item>
        <ag-accordion-item bordered><span slot="header">Bordered</span><div slot="content"><p>Content</p></div></ag-accordion-item>
        <ag-accordion-item background><span slot="header">Background</span><div slot="content"><p>Content</p></div></ag-accordion-item>
      </ag-accordion>
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
          <ag-alert bordered>Default alert</ag-alert>
          <ag-alert variant="success" bordered>Success alert</ag-alert>
          <ag-alert variant="error" bordered>Error alert</ag-alert>
          <ag-alert variant="monochrome" bordered>Monochrome alert</ag-alert>
        </div>
      </div>

      <!-- Section 3: Rounded Corners -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Rounded Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <ag-alert rounded>Default alert</ag-alert>
          <ag-alert variant="success" rounded>Success alert</ag-alert>
          <ag-alert variant="warning" rounded>Warning alert</ag-alert>
        </div>
      </div>

      <!-- Section 4: Bordered Left Accents -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Bordered Left Alerts</h3>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <ag-alert borderedLeft>Default alert</ag-alert>
          <ag-alert variant="success" borderedLeft>Success alert</ag-alert>
          <ag-alert variant="danger" borderedLeft>Danger alert</ag-alert>
        </div>
      </div>
    </div>
  `,
  Avatar: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Text Initials & Shapes -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Initials & Shapes Matrix</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-avatar text="AB" shape="circle"></ag-avatar>
          <ag-avatar text="CD" shape="square"></ag-avatar>
        </div>
      </div>

      <!-- Section 2: Size Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Size Spectrum</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-avatar text="SM" size="sm"></ag-avatar>
          <ag-avatar text="MD" size="md"></ag-avatar>
          <ag-avatar text="LG" size="lg"></ag-avatar>
        </div>
      </div>

      <!-- Section 3: Theme Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Theme Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-avatar text="DF" variant="default"></ag-avatar>
          <ag-avatar text="IN" variant="info"></ag-avatar>
          <ag-avatar text="SC" variant="success"></ag-avatar>
        </div>
      </div>

      <!-- Section 4: Avatar Grouping Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Avatar Grouping Matrix</h3>
        <ag-avatar-group>
          <ag-avatar text="TM" variant="info" size="lg"></ag-avatar>
          <ag-avatar text="PL" variant="success" size="lg"></ag-avatar>
        </ag-avatar-group>
      </div>
    </div>
  `,
  AvatarFx: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-avatar-fx fx="bounce" variant="info" text="AB"></ag-avatar-fx>
        <ag-avatar-fx fx="pulse" variant="success" text="CD"></ag-avatar-fx>
        <ag-avatar-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="warning" text="EF"></ag-avatar-fx>
        <ag-avatar-fx fx="shimmer" fx-speed="xl" variant="error" text="GH"></ag-avatar-fx>
        <ag-avatar-fx fx="glow" variant="monochrome" text="IJ"></ag-avatar-fx>
      </div>
    </div>
  `,
  Badge: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; font-family: system-ui, sans-serif;">
      <!-- Section 1: Color Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Color Variants</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <ag-badge variant="default">Default</ag-badge>
          <ag-badge variant="success">Success</ag-badge>
          <ag-badge variant="warning">Warning</ag-badge>
          <ag-badge variant="danger">Danger</ag-badge>
        </div>
      </div>

      <!-- Section 2: Size & Dot Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Sizes & Status Indicators</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: baseline;">
          <ag-badge variant="default" size="xs">Extra Small</ag-badge>
          <ag-badge variant="default" size="md">Medium</ag-badge>
          <ag-badge dot variant="success" statusLabel="Online"></ag-badge>
        </div>
      </div>

      <!-- Section 3: Value Truncation & Interactive States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Value, Max & Interactive</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <ag-badge variant="danger" .value=${105} .max=${99}></ag-badge>
          <ag-badge variant="primary" interactive>Interactive</ag-badge>
        </div>
      </div>
    </div>
  `,
  BadgeFx: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-badge-fx fx="bounce" variant="success">Bounce</ag-badge-fx>
        <ag-badge-fx fx="pulse" variant="info">Pulse</ag-badge-fx>
        <ag-badge-fx fx="jelly" fx-speed="lg" fx-ease="spring-sm" variant="monochrome">Jelly</ag-badge-fx>
        <ag-badge-fx fx="shimmer" fx-speed="xl" variant="danger">Shimmer</ag-badge-fx>
        <ag-badge-fx fx="glow" variant="primary">Glow</ag-badge-fx>
      </div>
    </div>
  `,
  Breadcrumb: () => {
    const data = [
      { label: 'Home', href: '#' },
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#products' }
    ];
    return html`
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <ag-breadcrumb .items=${data}></ag-breadcrumb>
        <ag-breadcrumb .items=${data} type="slash"></ag-breadcrumb>
        <ag-breadcrumb .items=${data} type="bullet"></ag-breadcrumb>
        <ag-breadcrumb .items=${data} type="arrow"></ag-breadcrumb>
        <ag-breadcrumb .items=${data} primary type="arrow"></ag-breadcrumb>
      </div>
    `;
  },

  Button: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
      <!-- Row 1: Color Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button data-testid="btn-primary" variant="primary">Primary Action</ag-button>
        <ag-button data-testid="btn-secondary" variant="secondary">Secondary Action</ag-button>
        <ag-button data-testid="btn-success" variant="success">Success Action</ag-button>
        <ag-button data-testid="btn-warning" variant="warning">Warning Action</ag-button>
        <ag-button data-testid="btn-danger" variant="danger">Danger Action</ag-button>
        <ag-button data-testid="btn-disabled" disabled>Disabled Action</ag-button>
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
        <ag-button variant="primary" bordered>Bordered Primary</ag-button>
        <ag-button variant="secondary" bordered>Bordered Secondary</ag-button>
        <ag-button variant="success" bordered>Bordered Success</ag-button>
        <ag-button variant="warning" bordered>Bordered Warning</ag-button>
        <ag-button variant="danger" bordered>Bordered Danger</ag-button>
      </div>
    </div>
  `,
  ButtonFx: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-button-fx fx="bounce" variant="primary" shape="rounded">Bounce</ag-button-fx>
        <ag-button-fx fx="pulse" variant="success" shape="rounded">Pulse</ag-button-fx>
        <ag-button-fx fx="jelly" variant="warning" shape="rounded">Jelly</ag-button-fx>
        <ag-button-fx fx="grow" variant="primary" shape="rounded">Grow</ag-button-fx>
        <ag-button-fx fx="shrink" variant="secondary" shape="rounded">Shrink</ag-button-fx>
        <ag-button-fx fx="bg-slide" variant="primary" shape="rounded">BG Slide</ag-button-fx>
        <ag-button-fx fx="jelly" variant="primary" bordered shape="rounded">Bordered</ag-button-fx>
        <ag-button-fx fx="bounce" fx-disabled variant="primary">FX Disabled</ag-button-fx>
      </div>
    </div>
  `,
  Card: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Default Card -->
      <div class="mbe4">
        <h2>Default Card</h2>
      </div>
      <div class="stacked-mobile">
        <ag-card>
          <p>This is a basic card with default styling.</p>
        </ag-card>
      </div>

      <!-- Card with Header -->
      <div class="mbe4">
        <h2>Card with Header</h2>
      </div>
      <div class="stacked-mobile">
        <ag-card shadow>
          <h3 slot="header" class="m0">Product Details</h3>
          <p>This card demonstrates using the header slot to add a title section with visual separation.</p>
        </ag-card>
      </div>

      <!-- Rounded Card Variants -->
      <div class="mbe4">
        <h2>Rounded Card Variants</h2>
        <p class="mbs2 mbe3">Cards can have different border radius sizes: small, medium, or large.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
        <ag-card rounded="sm">
          <h3 class="m0">Small Rounded (sm)</h3>
          <p>Subtle rounded corners using --ag-radius-sm (0.25rem).</p>
        </ag-card>
        <ag-card rounded="md">
          <h3 class="m0">Medium Rounded (md)</h3>
          <p>Moderate rounded corners using --ag-radius-md (0.375rem).</p>
        </ag-card>
        <ag-card rounded="lg">
          <h3 class="m0">Large Rounded (lg)</h3>
          <p>Prominent rounded corners using --ag-radius-lg (1rem).</p>
        </ag-card>
      </div>

      <!-- Variant Cards -->
      <div class="mbe4">
        <h2>Variant Cards</h2>
      </div>
      <div class="stacked">
        <ag-card variant="success" class="mbe2">
          <h3 class="m0">Success</h3>
          <p>Operation completed successfully!</p>
        </ag-card>
        <ag-card variant="info" class="mbe2">
          <h3 class="m0">Information</h3>
          <p>Here's some helpful information for you.</p>
        </ag-card>
        <ag-card variant="error" class="mbe2">
          <h3 class="m0">Error</h3>
          <p>Something went wrong. Please try again.</p>
        </ag-card>
        <ag-card variant="warning" class="mbe2">
          <h3 class="m0">Warning</h3>
          <p>Please review this information carefully.</p>
        </ag-card>
        <ag-card variant="monochrome" class="mbe2">
          <h3 class="m0">Monochrome</h3>
          <p>Clean and modern monochrome design.</p>
        </ag-card>
      </div>

      <!-- Card with Slots (Header and Footer) -->
      <div class="mbe4">
        <h2>Card with Slots (Header and Footer)</h2>
      </div>
      <div class="stacked-mobile">
        <ag-card shadow>
          <h3 slot="header" class="m0">Card Header</h3>
          <div>
            <h4>Main Content</h4>
            <p>This card demonstrates the header, default, and footer slots.</p>
          </div>
          <div slot="footer">
            <ag-button variant="secondary">Cancel</ag-button>
            <ag-button variant="primary" style="margin-left: 0.5rem;">Confirm</ag-button>
          </div>
        </ag-card>
      </div>
    </div>
  `,
  Checkbox: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Section 1: Standard States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Standard States</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="example" value="1" label-text="Default Unchecked"></ag-checkbox>
          <ag-checkbox name="example" value="2" label-text="Default Checked" checked></ag-checkbox>
        </div>
      </div>

      <!-- Section 2: Indeterminate Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Indeterminate State</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="select-all" value="all" indeterminate label-text="Select All (Mixed Mode)"></ag-checkbox>
        </div>
      </div>

      <!-- Section 3: Size Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Size Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="size" value="small" size="small" label-text="Small" checked></ag-checkbox>
          <ag-checkbox name="size" value="medium" size="medium" label-text="Medium (Default)" checked></ag-checkbox>
          <ag-checkbox name="size" value="large" size="large" label-text="Large" checked></ag-checkbox>
        </div>
      </div>

      <!-- Section 4: Theme Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Theme Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="theme-primary" value="1" theme="primary" label-text="Primary (Blue)" checked></ag-checkbox>
          <ag-checkbox name="theme-success" value="2" theme="success" label-text="Success (Green)" checked></ag-checkbox>
          <ag-checkbox name="theme-mono" value="3" theme="monochrome" label-text="Monochrome" checked></ag-checkbox>
        </div>
      </div>

      <!-- Section 5: Disabled States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Disabled State</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="disabled" value="1" label-text="Disabled Unchecked" disabled></ag-checkbox>
          <ag-checkbox name="disabled" value="2" label-text="Disabled Checked" checked disabled></ag-checkbox>
          <ag-checkbox name="disabled" value="3" label-text="Disabled Indeterminate" indeterminate disabled></ag-checkbox>
        </div>
      </div>

      <!-- Section 6: Label Positions -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Label Position</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="position" value="1" label-text="Label on End (Default)" label-position="end" checked></ag-checkbox>
          <ag-checkbox name="position" value="2" label-text="Label on Start" label-position="start" checked></ag-checkbox>
        </div>
      </div>
    </div>
  `,
  Collapsible: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <ag-collapsible use-chevron><span slot="summary">Use Chevron</span><p>Content</p></ag-collapsible>
      <ag-collapsible use-minus><span slot="summary">Use Minus</span><p>Content</p></ag-collapsible>
      <ag-collapsible use-x><span slot="summary">Use X</span><p>Content</p></ag-collapsible>
      <ag-collapsible no-indicator><span slot="summary">No Indicator</span><p>Content</p></ag-collapsible>
      <ag-collapsible bordered><span slot="summary">Bordered</span><p>Content</p></ag-collapsible>
      <ag-collapsible shadow><span slot="summary">Shadow</span><p>Content</p></ag-collapsible>
      <ag-collapsible bordered open><span slot="summary">Open by Default</span><p>Content</p></ag-collapsible>
    </div>
  `,
  Combobox: () => {
    const states = [
      { value: 'ca', label: 'California' },
      { value: 'co', label: 'Colorado' },
      { value: 'fl', label: 'Florida' },
      { value: 'ny', label: 'New York' }
    ];
    return html`
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <!-- Standard Variations Matrix -->
        <ag-combobox label="Standard Combobox" placeholder="Choose a state..." .options=${states}></ag-combobox>
        <ag-combobox label="Small Size" size="small" placeholder="Small size..." .options=${states}></ag-combobox>
        <ag-combobox label="Large Size" size="large" placeholder="Large size..." .options=${states}></ag-combobox>
        
        <!-- Field State & Validation Mappings -->
        <ag-combobox label="Disabled Field" disabled placeholder="This is disabled" value="ca" .options=${states}></ag-combobox>
        <ag-combobox label="Invalid Entry" invalid error-message="Please select a valid state" placeholder="This has an error" .options=${states}></ag-combobox>
        
        <!-- Multi-Select and Variant Overrides -->
        <ag-combobox label="Multiple Select" multiple placeholder="Choose one or more states..." .options=${states}></ag-combobox>
        <ag-combobox label="Monochrome Variant" variant="monochrome" placeholder="Choose a state..." .options=${states}></ag-combobox>
        <ag-combobox label="Label Position Start" label-position="start" placeholder="Choose a state..." .options=${states}></ag-combobox>
      </div>
    `;
  },
  CopyButton: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <!-- Row 1: Sizes Spectrum -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-copy-button text="XS Text" size="xs"></ag-copy-button>
        <ag-copy-button text="SM Text" size="sm"></ag-copy-button>
        <ag-copy-button text="MD Text" size="md"></ag-copy-button>
        <ag-copy-button text="LG Text" size="lg"></ag-copy-button>
        <ag-copy-button text="XL Text" size="xl"></ag-copy-button>
      </div>

      <!-- Row 2: Theme Variants -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-copy-button text="Primary Text" variant="primary"></ag-copy-button>
        <ag-copy-button text="Success Text" variant="success"></ag-copy-button>
        <ag-copy-button text="Warning Text" variant="warning"></ag-copy-button>
        <ag-copy-button text="Danger Text" variant="danger"></ag-copy-button>
        <ag-copy-button text="Ghost Text" variant="ghost"></ag-copy-button>
      </div>
    </div>
  `,
  Dialog: () => html`
    <!-- Position relative wrapper allows fixed/absolute dialog child layers to render cleanly inside the preview bounding box viewport context -->
    <div style="position: relative; width: 100%; min-height: 500px; padding: 24px;">
      <ag-dialog
        open
        id="preview-dialog"
        heading="Visual Regression Baseline"
        description="Statically opened dialog layer to capture layout specs, close triggers, and typography tokens."
        show-close-button
      >
        <p>This layout configures the standard container dimensions, font spacing, and background overlay colors.</p>
        <ag-dialog-footer>
          <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <ag-button size="small">Cancel</ag-button>
            <ag-button size="small" variant="primary">Confirm Action</ag-button>
          </div>
        </ag-dialog-footer>
      </ag-dialog>
    </div>
  `,
  Divider: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 600px; font-family: system-ui, -apple-system, sans-serif;">
      
      <!-- Section 1: Standard Horizontal Dividers -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">Horizontal (Default)</h3>
        <p style="margin: 0 0 8px 0; font-size: 14px;">Top Content Area</p>
        <ag-divider></ag-divider>
        <p style="margin: 8px 0 0 0; font-size: 14px;">Bottom Content Area</p>
      </div>

      <!-- Section 2: Horizontal with Centered or Custom Text Separators -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 13px; color: #888; text-transform: uppercase; letter-spacing: 0.5px;">With Text / Content</h3>
        <p style="margin: 0 0 8px 0; font-size: 14px;">Social Sign In Section</p>
        <ag-divider>or</ag-divider>
        <p style="margin: 8px 0 0 0; font-size: 14px;">Standard Form Section</p>
      </div>

      <!-- Section 3: Vertical Orientation Constraints -->
        <div class="mbe4">
          <h2>Vertical Dividers</h2>
        </div>
        <div class="mbe4" style="display: flex; min-height: 200px;">
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <ag-divider is-vertical>Yes</ag-divider>
          <p style="flex: 1;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
          <ag-divider is-vertical>Sir!</ag-divider>
          <p style="flex: 1;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

    </div>
  `,
  Drawer: () => html`
    <!-- Isolate fixed/absolute drawer sub-containers within a relative preview grid -->
    <div style="position: relative; width: 100%; min-height: 600px; padding: 24px; display: flex; flex-direction: column; gap: 40px; overflow: hidden;">

      <!-- Right Configuration Drawer (position="end") -->
      <div style="position: relative; width: 100%; height: 250px; border: 1px dashed var(--ag-border); overflow: hidden;">
        <ag-drawer open position="end" heading="Context Configurations" show-close-button>
          <div style="display: flex; flex-direction: column; gap: 12px; padding: 4px 0;">
            <label><input type="checkbox" checked /> Dark mode default</label>
            <label><input type="checkbox" /> Sync automated saves</label>
          </div>
          <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
            <ag-button size="small">Cancel</ag-button>
            <ag-button size="small" variant="primary">Apply</ag-button>
          </div>
        </ag-drawer>
      </div>

    </div>
  `,
  EmptyState: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <!-- Standard Layout with Action Button -->
      <ag-empty-state
        title="No items found"
        subtitle="Get started by creating your first template item."
        buttonText="Create Item"
      ></ag-empty-state>

      <!-- Structural Modifiers: Bordered, Rounded, and Custom Icon Slot -->
      <ag-empty-state
        title="Empty Workspace Folder"
        subtitle="Drag and drop configuration parameters here to unpack."
        isBordered
        isRounded
      >
        <ag-icon slot="icon" size="32" no-fill>
          <svg xmlns="http://w3.org" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/>
          </svg>
        </ag-icon>
      </ag-empty-state>

      <!-- Dense Blueprint Sizing Stack -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <ag-empty-state title="Sidebar Stack" subtitle="Dense view." size="sm" isBordered isRounded></ag-empty-state>
        <ag-empty-state title="Main Panel" subtitle="Standard view." size="md" isBordered isRounded></ag-empty-state>
      </div>
    </div>
  `,
  Fieldset: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <!-- Standard Stack Fieldset -->
      <ag-fieldset legend="Standard Group Layout">
        <div style="display: flex; flex-direction: column; gap: 12px; padding: 4px 0;">
          <input type="text" placeholder="Entry Parameter A" style="padding: 8px; border: 1px solid var(--ag-border); border-radius: 4px;" />
          <input type="text" placeholder="Entry Parameter B" style="padding: 8px; border: 1px solid var(--ag-border); border-radius: 4px;" />
        </div>
      </ag-fieldset>

      <!-- Bordered Layout with Hidden Legend -->
      <ag-fieldset legend="Hidden Accessibility Context" bordered legend-hidden>
        <div style="padding: 4px 0; color: var(--ag-text-secondary);">
          This block contains a bordered frame with a visually hidden legend layout.
        </div>
      </ag-fieldset>

      <!-- Horizontal Orientations Matrix -->
      <ag-fieldset legend="Horizontal Inline Stack" bordered layout="horizontal">
        <label style="display: inline-flex; align-items: center; gap: 8px;"><input type="radio" checked /> Option X</label>
        <label style="display: inline-flex; align-items: center; gap: 8px;"><input type="radio" /> Option Y</label>
        <label style="display: inline-flex; align-items: center; gap: 8px;"><input type="radio" /> Option Z</label>
      </ag-fieldset>
    </div>
  `,
  Flex: () => html`
    <style>
      .flex-preview-box {
        padding: 12px;
        border: 1px solid var(--ag-primary);
        border-radius: 4px;
        text-align: center;
        min-width: 600px;
      }
    </style>
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 700px;">
      <!-- Row distribution variants -->
      <ag-flex-row style="--flex-gap: 12px;" justify="space-between" align="center">
        <div class="flex-preview-box" style="min-width: 80px;">Row Item A</div>
        <div class="flex-preview-box" style="min-width: 80px;">Row Item B</div>
        <div class="flex-preview-box" style="min-width: 80px;">Row Item C</div>
      </ag-flex-row>

      <!-- Structural sizing modifiers with equal width distribution -->
      <ag-flex-row style="--flex-gap: 16px;" stretch-children>
        <div class="flex-preview-box">Short</div>
        <div class="flex-preview-box">Equal Column Height/Width Frame</div>
      </ag-flex-row>

      <!-- Block column stacking structure -->
      <ag-flex-col style="--flex-gap: 12px;">
        <div class="flex-preview-box">Stacked Row Node 1</div>
        <div class="flex-preview-box">Stacked Row Node 2</div>
      </ag-flex-col>

      <!-- Layout Aliases: Stack and Inline Flex groups -->
      <div style="display: flex; gap: 24px;">
        <ag-stack style="--flex-gap: 8px; flex: 1;">
          <div class="flex-preview-box" style="min-width: unset;">Alias Stack 1</div>
          <div class="flex-preview-box" style="min-width: unset;">Alias Stack 2</div>
        </ag-stack>
        <ag-flex-inline style="--flex-gap: 8px; background: var(--ag-background-secondary, #f4f4f5); padding: 8px; border-radius: 4px;">
          <span style="padding: 4px 8px; background: var(--ag-background-primary, #ffffff); border: 1px solid var(--ag-border, #e4e4e7);">Tag X</span>
          <span style="padding: 4px 8px; background: var(--ag-background-primary, #ffffff); border: 1px solid var(--ag-border, #e4e4e7);">Tag Y</span>
        </ag-flex-inline>
      </div>
    </div>
  `,
  Icon: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Sizing Spectrum Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Sizes Spectrum</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-icon no-fill size="16">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon>
          <ag-icon no-fill size="24">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon>
          <ag-icon no-fill size="32">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon>
        </div>
      </div>

      <!-- Section 2: Semantic Themes -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Semantic Color Themes</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-icon no-fill type="info" size="24">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon>
          <ag-icon no-fill type="success" size="24">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon>
          <ag-icon no-fill type="error" size="24">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon>
        </div>
      </div>
    </div>
  `,
  Header: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px; width: 100%;">
      <!-- Standard Header with Logo Slot and Navigation -->
      <ag-header>
        <span slot="logo" style="font-weight: 700; font-size: 1.25rem; color: var(--ag-primary, #09090b);">AgnosticUI</span>
        <nav>
          <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
            <li><a href="#services" style="text-decoration: none; color: inherit;">Services</a></li>
          </ul>
        </nav>
      </ag-header>

      <!-- Justification Variant Overrides (content-justify mapped from kebab rule) -->
      <ag-header content-justify="start">
        <span slot="logo" style="font-weight: 600;">Justify Start</span>
        <nav style="margin-left: 24px;"><a href="#link" style="text-decoration: none; color: inherit;">Navigation</a></nav>
      </ag-header>

      <ag-header content-justify="end">
        <span slot="logo" style="font-weight: 600;">Justify End</span>
        <nav style="margin-left: 24px;"><a href="#link" style="text-decoration: none; color: inherit;">Navigation</a></nav>
      </ag-header>

      <!-- Sticky Structure Frame Layout -->
      <ag-header sticky>
        <span slot="logo" style="font-weight: 700; font-size: 1.25rem;">Sticky Viewport Baseline</span>
        <nav><span style="color: var(--ag-text-secondary, #71717a);">Fixed Node</span></nav>
      </ag-header>
    </div>
  `,
  IconButton: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px; font-family: system-ui, -apple-system, sans-serif;">
      
      <!-- Color Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-icon-button label="Ghost (default)" variant="ghost">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Primary" variant="primary">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Secondary" variant="secondary">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Success" variant="success">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Warning" variant="warning">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Danger" variant="danger">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </ag-icon-button>
          <ag-icon-button label="Monochrome" variant="monochrome">
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
          </ag-icon-button>
        </div>
      </div>
      <!-- Modifiers & States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Modifiers & States</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-icon-button label="Bordered" variant="primary" bordered>
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </ag-icon-button>
          <ag-icon-button label="Disabled" variant="primary" disabled>
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </ag-icon-button>
        </div>
      </div>

    </div>
  `,
  IconButtonFx: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
      <!-- Row 1: Effect Typology Grid Matrix -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-icon-button-fx fx="pulse" variant="primary" label="Pulse Item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;"><circle cx="12" cy="12" r="10"></circle></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="bounce" variant="success" label="Bounce Item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;"><path d="M12 5v14M5 12h14"></path></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="wobble" variant="warning" label="Wobble Item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="shake" variant="danger" label="Shake Item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="jelly" variant="ghost" label="Jelly Item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;"><path d="M12 2L2 22h20L12 2z"></path></svg>
        </ag-icon-button-fx>
      </div>

      <!-- Row 2: Sizing Scale Constraints -->
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ag-icon-button-fx fx="pulse" size="xs" variant="primary" label="XS Frame">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:100%;height:100%;"><circle cx="12" cy="12" r="10"></circle></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" size="md" variant="primary" label="MD Frame">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:100%;height:100%;"><circle cx="12" cy="12" r="10"></circle></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" size="xl" variant="primary" label="XL Frame">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:100%;height:100%;"><circle cx="12" cy="12" r="10"></circle></svg>
        </ag-icon-button-fx>
        <ag-icon-button-fx fx="pulse" fx-disabled variant="primary" label="Disabled Effect Layer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:24px;height:24px;"><circle cx="12" cy="12" r="10"></circle></svg>
        </ag-icon-button-fx>
      </div>
    </div>
  `,
  Image: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <!-- Standard Image View Layout Configuration -->
      <ag-image
        src="data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='200' height='150' viewBox='0 0 200 150'><rect width='100%' height='100%' fill='%2309090b'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23ffffff' font-family='sans-serif' font-size='14'>Static Baseline</text></svg>"
        alt="Visual testing baseline target matrix element"
        .width=${200}
        .height=${150}
      ></ag-image>

      <!-- Aspect Ratio Mapping & Contain Box Rules -->
      <div style="width: 300px; height: 150px; background: var(--ag-background-secondary, #f4f4f5); border: 1px solid var(--ag-border, #e4e4e7); border-radius: 4px; overflow: hidden;">
        <ag-image
          src="data:image/svg+xml;utf8,<svg xmlns='http://w3.org' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%237c3aed'/></svg>"
          alt="Object fit constraint test"
          aspect-ratio="16/9"
          fit="contain"
        ></ag-image>
      </div>
    </div>
  `,
  Input: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 600px; font-family: system-ui, -apple-system, sans-serif;">
      
      <!-- Section 1: Size Constraints -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Sizes</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <ag-input label="Small Input" size="small" placeholder="Small size"></ag-input>
          <ag-input label="Default Input" size="default" placeholder="Default size"></ag-input>
          <ag-input label="Large Input" size="large" placeholder="Large size"></ag-input>
        </div>
      </div>

      <!-- Section 2: Shape Variations -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Shape Variants</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <ag-input label="Default (rectangular)" placeholder="Default rectangular"></ag-input>
          <ag-input label="Rounded" rounded placeholder="Rounded corners"></ag-input>
          <ag-input label="Capsule" capsule placeholder="Capsule shape"></ag-input>
          <ag-input label="Underlined" underlined placeholder="Underlined only"></ag-input>
          <ag-input label="Underlined with Background" underlinedWithBackground placeholder="Underlined with background"></ag-input>
        </div>
      </div>

      <!-- Section 3: Validation, Addons & Field States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Validation & States</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <ag-input label="Disabled Field" disabled placeholder="Cannot type here"></ag-input>
          <ag-input label="Invalid Entry" invalid error-message="This field entry layout is invalid" placeholder="Error state border"></ag-input>
          <ag-input label="Helper Description" help-text="Please ensure your layout input values match criteria" placeholder="With helper text"></ag-input>
        </div>
      </div>

    </div>
  `,
  IntlFormatter: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Section 1: Date Formatting & Localization -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Date Formatting</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div><strong>Default (US):</strong> <ag-intl-formatter type="date" date="2024-01-15T14:30:00" lang="en-US"></ag-intl-formatter></div>
          <div><strong>Full Date & Time (FR):</strong> <ag-intl-formatter type="date" date="2024-01-15T14:30:00" date-style="full" time-style="short" lang="fr-FR"></ag-intl-formatter></div>
          <div><strong>Custom 24-Hour (JA):</strong> <ag-intl-formatter type="date" date="2024-01-15T14:30:00" date-style="full" time-style="short" lang="ja-JP"></ag-intl-formatter></div>
        </div>
      </div>

      <!-- Section 2: Number Formatting & Localization -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Number Formatting</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div><strong>Standard (US):</strong> <ag-intl-formatter type="number" .value=${1234567.89} lang="en-US"></ag-intl-formatter></div>
          <div><strong>No Grouping (US):</strong> <ag-intl-formatter type="number" .value=${1234567.89} no-grouping lang="en-US"></ag-intl-formatter></div>
          <div><strong>German Format (DE):</strong> <ag-intl-formatter type="number" .value=${1234567.89} lang="de-DE"></ag-intl-formatter></div>
          <div><strong>Indian Lakhs (IN):</strong> <ag-intl-formatter type="number" .value=${1234567.89} lang="hi-IN"></ag-intl-formatter></div>
        </div>
      </div>

      <!-- Section 3: Currency & Percentages -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Currency & Percent</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div><strong>USD Symbol:</strong> <ag-intl-formatter type="currency" .value=${1234.56} currency="USD" lang="en-US"></ag-intl-formatter></div>
          <div><strong>EUR Display Code:</strong> <ag-intl-formatter type="currency" .value=${1234.56} currency="EUR" currency-display="code" lang="en-US"></ag-intl-formatter></div>
          <div><strong>Percentage:</strong> <ag-intl-formatter type="percent" .value=${0.8532} .minimumFractionDigits=${2} .maximumFractionDigits=${2} lang="en-US"></ag-intl-formatter></div>
        </div>
      </div>

      <!-- Section 4: CSS Shadow Parts Customs -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">CSS Shadow Parts Customization</h3>
        <style>
          .custom-currency::part(currency) { color: #16a34a; font-weight: bold; font-size: 1.25rem; }
          .custom-number::part(number) { font-family: monospace; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; }
        </style>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div><strong>Styled Currency:</strong> <ag-intl-formatter type="currency" .value=${1234.56} currency="USD" lang="en-US" class="custom-currency"></ag-intl-formatter></div>
          <div><strong>Styled Number:</strong> <ag-intl-formatter type="number" .value=${1234567.89} lang="en-US" class="custom-number"></ag-intl-formatter></div>
        </div>
      </div>
    </div>
  `,
Kbd: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Section 1: Standard Key Layout & Sizing Scales -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Sizes Scale</h3>
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <ag-kbd size="sm">⌘ + c</ag-kbd>
          <ag-kbd size="md">⌥ + Tab</ag-kbd>
          <ag-kbd size="lg">ctrl + shift + del</ag-kbd>
        </div>
      </div>

      <!-- Section 2: Semantic Color Themes Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Theme Variants</h3>
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <ag-kbd variant="default">Default</ag-kbd>
          <ag-kbd variant="primary">Primary</ag-kbd>
          <ag-kbd variant="info">Info</ag-kbd>
          <ag-kbd variant="success">Success</ag-kbd>
          <ag-kbd variant="danger">Danger</ag-kbd>
          <ag-kbd variant="monochrome">Monochrome</ag-kbd>
        </div>
      </div>

      <!-- Section 3: Background & Border Configuration Tokens -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Background & Border Enhancements</h3>
        <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
          <ag-kbd background variant="primary">⌘</ag-kbd>
          <ag-kbd background variant="success">⌥</ag-kbd>
          <ag-kbd bordered>⇧</ag-kbd>
          <ag-kbd .bordered=${false}>⌃</ag-kbd>
        </div>
      </div>
    </div>
  `,
  Link: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Basic Inline Links & Color Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Standard Link Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-link href="#link">Standard Link</ag-link>
          <ag-link href="#link" variant="primary">Primary Link</ag-link>
          <ag-link href="#link" variant="success">Success Link</ag-link>
          <ag-link href="#link" variant="danger">Danger Link</ag-link>
          <ag-link href="#link" disabled>Disabled Link</ag-link>
        </div>
      </div>

      <!-- Section 2: Button-Style Transformation Links -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Button-Style Links</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <ag-link href="#link" isButton>Default Button</ag-link>
          <ag-link href="#link" isButton variant="primary">Primary Button</ag-link>
          <ag-link href="#link" isButton variant="success">Success Button</ag-link>
          <ag-link href="#link" isButton variant="danger">Danger Button</ag-link>
        </div>
      </div>

      <!-- Section 3: Button Size & Shape Modifiers -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Button Shape & Size Spectrum</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <ag-link href="#link" isButton buttonSize="sm" variant="primary">Small Link</ag-link>
          <ag-link href="#link" isButton buttonSize="lg" variant="primary">Large Link</ag-link>
          <ag-link href="#link" isButton buttonShape="capsule" variant="primary">Capsule Link</ag-link>
          <ag-link href="#link" isButton buttonBordered variant="primary">Outlined Link</ag-link>
        </div>
      </div>
    </div>
  `,
  Mark: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Mark Theme Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Theme Variants</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <ag-mark variant="warning">warning</ag-mark>
          <ag-mark variant="info">info</ag-mark>
          <ag-mark variant="success">success</ag-mark>
          <ag-mark variant="error">error</ag-mark>
          <ag-mark variant="primary">primary</ag-mark>
          <ag-mark variant="monochrome">monochrome</ag-mark>
        </div>
      </div>

      <!-- Section 2: Search Query String Highlighting -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Search Term Matcher</h3>
        <p>
          <ag-mark search="fox" variant="warning">
            The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.
          </ag-mark>
        </p>
      </div>
    </div>
  `,
  Menu: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;">
      <!-- Section 1: Basic Menu Layout -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Basic Layout</h3>
        <ag-menu-button menu-aria-label="Menu options">
          Menu
          <ag-menu slot="menu">
            <ag-menu-item value="edit">Edit</ag-menu-item>
            <ag-menu-item value="copy">Copy</ag-menu-item>
            <ag-menu-separator></ag-menu-separator>
            <ag-menu-item value="delete">Delete</ag-menu-item>
          </ag-menu>
        </ag-menu-button>
      </div>

      <!-- Section 2: Alignments -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Menu Alignment Matrix</h3>
        <div style="display: flex; gap: 16px; justify-content: space-between;">
          <ag-menu-button menu-align="left" menu-aria-label="Left menu">
            Left Aligned
            <ag-menu slot="menu">
              <ag-menu-item value="1">Option 1</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
          <ag-menu-button menu-align="right" menu-aria-label="Right menu">
            Right Aligned
            <ag-menu slot="menu">
              <ag-menu-item value="1">Option 1</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>
      </div>

      <!-- Section 3: Disabled Button and Item States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Disabled States Matrix</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <ag-menu-button disabled menu-aria-label="Disabled menu button">
            Disabled Trigger
          </ag-menu-button>
          <ag-menu-button menu-aria-label="Menu with disabled items">
            Mixed Item States
            <ag-menu slot="menu">
              <ag-menu-item value="enabled">Active Option</ag-menu-item>
              <ag-menu-item value="disabled" disabled>Disabled Option</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>
      </div>

      <!-- Section 4: Icon and Variant Overrides -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Icon & Variant Layouts</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <ag-menu-button menu-variant="icon" ghost menu-aria-label="Icon option menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <ag-menu slot="menu">
              <ag-menu-item value="settings">Settings</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
          <ag-menu-button button-variant="monochrome" menu-type="single-select" selected-value="active" menu-aria-label="Persisted selection menu">
            Selection Persisted
            <ag-menu slot="menu">
              <ag-menu-item value="active" variant="monochrome">Active Choice</ag-menu-item>
              <ag-menu-item value="other" variant="monochrome">Alternative</ag-menu-item>
            </ag-menu>
          </ag-menu-button>
        </div>
      </div>
    </div>
  `,
  MessageBubble: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Standard Conversational Layout Flows -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Basic Message Flows</h3>
        <div style="display: flex; flex-direction: column; gap: 16px; background: rgba(0,0,0,0.02); padding: 16px; border-radius: 8px;">
          <ag-message-bubble
            from="them"
            message="Hey, are we still on for lunch?"
            author="Sarah"
            time="11:30 AM"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="Yes! Where should we go?"
            author="Me"
            time="11:32 AM"
            footer="Delivered"
          ></ag-message-bubble>
        </div>
      </div>

      <!-- Section 2: Color Variations & Avatars -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Semantic Variants & Avatars</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <ag-message-bubble
            from="them"
            message="Payment completed successfully!"
            author="System"
            time="10:02 AM"
            variant="success"
            avatar-url="https://pravatar.cc"
          ></ag-message-bubble>
          <ag-message-bubble
            from="me"
            message="I'm using a custom Avatar component with text initials!"
            author="Jane Smith"
            time="10:00 AM"
            variant="info"
          >
            <ag-avatar slot="avatar" text="JS" variant="info" size="sm"></ag-avatar>
          </ag-message-bubble>
        </div>
      </div>
    </div>
  `,
  Pagination: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px; width: 100%;">
      <!-- Standard Layout and First/Last Opt-In -->
      <ag-pagination current="5" total-pages="20"></ag-pagination>
      <ag-pagination current="5" total-pages="20" first-last-navigation></ag-pagination>

      <!-- Bordered Style, Offsets, and Ellipsis Truncation -->
      <ag-pagination current="3" total-pages="15" bordered></ag-pagination>
      <ag-pagination current="25" total-pages="100" offset="1"></ag-pagination>

      <!-- Horizontal Alignment Multi-Stack (Justify Variations) -->
      <ag-pagination current="1" total-pages="10" justify="start"></ag-pagination>
      <ag-pagination current="1" total-pages="10" justify="center"></ag-pagination>
      <ag-pagination current="1" total-pages="10" justify="end"></ag-pagination>
    </div>
  `,
  Popover: () => html`
    <div style="padding: 24px; max-width: 800px;">
      <!-- A simplified, non-transient, statically open test block for Popover baseline checks -->
      <div style="margin-bottom: 16px;">
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Standard Popover Preview</h3>
        <ag-popover open>
          <ag-button slot="trigger" variant="primary">View Features</ag-button>
          <div slot="content" style="padding: 12px; font-family: sans-serif; font-size: 14px;">
            Popover dropdown layout baseline configuration.
          </div>
        </ag-popover>
      </div>
    </div>
  `,
  Progress: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Indeterminate Progress -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Indeterminate Progress</h3>
        <ag-progress label="Loading..."></ag-progress>
      </div>

      <!-- Section 2: Progress with Determinate Value -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Progress with Value & Max Bounds</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <ag-progress value="50" label="50% complete"></ag-progress>
          <ag-progress value="150" max="200" label="150 of 200"></ag-progress>
        </div>
      </div>

      <!-- Section 3: CSS Shadow Parts Customization -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">CSS Shadow Parts Customization</h3>
        <style>
          .custom-progress::part(ag-progress-bar) {
            background-color: #f3e8ff;
            height: 1.5rem;
          }
          .custom-progress::part(ag-progress-bar)::-webkit-progress-value { background-color: #a855f7; }
          .custom-progress::part(ag-progress-bar)::-moz-progress-bar { background-color: #a855f7; }
        </style>
        <ag-progress value="75" label="Customized progress" class="custom-progress"></ag-progress>
      </div>
    </div>
  `,
  ProgressRing: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Progress Values Spectrum -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Completion Levels</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-progress-ring value="0"></ag-progress-ring>
          <ag-progress-ring value="50"></ag-progress-ring>
          <ag-progress-ring value="100"></ag-progress-ring>
        </div>
      </div>

      <!-- Section 2: Size Scale Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Sizes Spectrum</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-progress-ring size="small" value="60"></ag-progress-ring>
          <ag-progress-ring size="medium" value="60"></ag-progress-ring>
          <ag-progress-ring size="large" value="60"></ag-progress-ring>
        </div>
      </div>

      <!-- Section 3: Color Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Contextual Colors</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-progress-ring variant="primary" value="70"></ag-progress-ring>
          <ag-progress-ring variant="success" value="70"></ag-progress-ring>
          <ag-progress-ring variant="danger" value="70"></ag-progress-ring>
        </div>
      </div>

      <!-- Section 4: Slotted Custom Content Labels -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Slotted Custom Content</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-progress-ring value="45"><span style="font-size: 14px; font-weight: bold;">45/100</span></ag-progress-ring>
          <ag-progress-ring value="80" variant="success"><span style="font-size: 18px;">✓</span></ag-progress-ring>
        </div>
      </div>
    </div>
  `,
  Radio: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px; font-family: system-ui, -apple-system, sans-serif;">
      <!-- Section 1: Default Layout & Grouping inside Fieldset -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Default Grouping</h3>
        <ag-fieldset legend="Choose your plan">
          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <ag-radio name="plan" value="free" .labelText=${"Free Plan"}></ag-radio>
            <ag-radio name="plan" value="pro" .labelText=${"Pro Plan"} .checked=${true}></ag-radio>
            <ag-radio name="plan" value="enterprise" .labelText=${"Enterprise Plan"}></ag-radio>
          </div>
        </ag-fieldset>
      </div>

      <!-- Section 2: Size Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Size Options</h3>
        <div style="display: flex; gap: 2rem; align-items: center;">
          <ag-radio name="size-demo" value="small" size="small" .labelText=${"Small"} .checked=${true}></ag-radio>
          <ag-radio name="size-demo" value="medium" size="medium" .labelText=${"Medium"} .checked=${true}></ag-radio>
          <ag-radio name="size-demo" value="large" size="large" .labelText=${"Large"} .checked=${true}></ag-radio>
        </div>
      </div>

      <!-- Section 3: Theme Variations -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Theme Variants</h3>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; gap: 1.5rem;">
            <ag-radio name="t-def" value="1" theme="default" .labelText=${"Default Theme"} .checked=${true}></ag-radio>
            <ag-radio name="t-prim" value="1" theme="primary" .labelText=${"Primary Theme"} .checked=${true}></ag-radio>
            <ag-radio name="t-succ" value="1" theme="success" .labelText=${"Success Theme"} .checked=${true}></ag-radio>
            <ag-radio name="t-mono" value="1" theme="monochrome" .labelText=${"Monochrome Theme"} .checked=${true}></ag-radio>
          </div>
        </div>
      </div>

      <!-- Section 4: States, Layout Positions & Constraints -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">States and Label Positions</h3>
        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          <div style="display: flex; gap: 1.5rem;">
            <ag-radio name="dis-demo" value="1" .labelText=${"Disabled Unchecked"} .disabled=${true}></ag-radio>
            <ag-radio name="dis-demo" value="2" .labelText=${"Disabled Checked"} .checked=${true} .disabled=${true}></ag-radio>
          </div>
          <div style="display: flex; gap: 1.5rem;">
            <ag-radio name="pos-demo" value="1" .labelText=${"Label Position End"} label-position="end" .checked=${true}></ag-radio>
            <ag-radio name="pos-demo" value="2" .labelText=${"Label Position Start"} label-position="start" .checked=${true}></ag-radio>
          </div>
        </div>
      </div>

      <!-- Section 5: External Label, Helper Text & Validation Error Controls -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">External Layout Utilities & Validation</h3>
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          <ag-radio name="shipping-method" value="standard" label="Shipping Method" .labelText=${"Standard Shipping (5-7 days)"} .checked=${true}></ag-radio>
          <ag-radio name="payment-method" value="credit" label="Payment Method" .labelText=${"Credit Card"} help-text="We accept all major credit cards" .checked=${true}></ag-radio>
          <ag-radio name="age-verify" value="confirmed" label="Age Verification" .labelText=${"I confirm I am 18 years or older"} .required=${true} .invalid=${true} error-message="You must confirm your age sequence to proceed"></ag-radio>
        </div>
      </div>
    </div>
  `,
  Rating: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
      <!-- Precision and Access Spectrum -->
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <ag-rating value="3"></ag-rating>
        <ag-rating value="2.5" precision="half"></ag-rating>
        <ag-rating value="4" readonly></ag-rating>
      </div>

      <!-- Sizing Scale Constraints -->
      <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
        <ag-rating size="sm" value="3"></ag-rating>
        <ag-rating size="md" value="3"></ag-rating>
        <ag-rating size="lg" value="3"></ag-rating>
      </div>

      <!-- Color Variant Typologies -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
        <ag-rating variant="primary" value="4"></ag-rating>
        <ag-rating variant="success" value="4"></ag-rating>
        <ag-rating variant="warning" value="4"></ag-rating>
        <ag-rating variant="danger" value="4"></ag-rating>
      </div>

      <!-- Form Integration Framework Fields -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ag-rating label="Standard Validation Field" help-text="Rate user context feedback" value="3"></ag-rating>
        <ag-rating label="Invalid Evaluation State" required invalid error-message="Rating allocation required" value="0"></ag-rating>
        <ag-rating label="Inline Start Orientation" label-position="start" value="4"></ag-rating>
      </div>
    </div>
  `,
  ScrollProgress: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Structural Display Modes -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Display Modes</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">Mode: Bar (Static)</p>
            <ag-scroll-progress mode="bar" style="position: static; display: block;"></ag-scroll-progress>
          </div>
          <div>
            <p style="margin: 0 0 4px 0; font-size: 12px; color: #666;">Mode: Dot Trail (Static)</p>
            <ag-scroll-progress mode="dot-trail" dots="5" badge-variant="success" style="position: static; display: block;"></ag-scroll-progress>
          </div>
        </div>
      </div>

      <!-- Section 2: Variant Indicators Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Badge & Ring Variants</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-scroll-progress mode="badge" badge-variant="primary" style="position: static;"></ag-scroll-progress>
          <ag-scroll-progress mode="badge" badge-variant="success" style="position: static;"></ag-scroll-progress>
          <ag-scroll-progress mode="ring" ring-variant="primary" ring-size="40" style="position: static;"></ag-scroll-progress>
          <ag-scroll-progress mode="ring" ring-variant="info" ring-size="40" style="position: static;"></ag-scroll-progress>
        </div>
      </div>
    </div>
  `,
  Select: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 500px;">
      <!-- Standard Dropdown Frame with Slotted Child Options -->
      <ag-select label="Greatest Tennis Player" name="tennis">
        <option value="">- Select a player -</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
      </ag-select>

      <!-- Sizing Constraints Spectrum Stack -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ag-select label="Small Size Layout" size="small" name="small">
          <option value="1">Option 1</option>
        </ag-select>
        <ag-select label="Large Size Layout" size="large" name="large">
          <option value="1">Option 1</option>
        </ag-select>
      </div>

      <!-- Operational State Modifiers: Disabled and Multiple List Box -->
      <ag-select label="Disabled Field" disabled name="disabled">
        <option value="">Cannot select</option>
      </ag-select>

      <ag-select label="Multiple Selection List Box" multiple multiple-size="4" name="multiple">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>

      <!-- Form Context Framework Fields -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ag-select label="Validation Failure State" required invalid error-message="Please select a valid payment method" name="payment">
          <option value="">Select payment method</option>
        </ag-select>
        <ag-select label="Label Position Start" label-position="start" name="pos-start">
          <option value="1">Option 1</option>
        </ag-select>
      </div>
    </div>
  `,
  SkeletonLoader: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Standard Text Lines & Sizing -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Text Placeholders</h3>
        <div style="width: 300px; display: flex; flex-direction: column; gap: 8px;">
          <ag-skeleton-loader></ag-skeleton-loader>
          <ag-skeleton-loader style="width: 60%;"></ag-skeleton-loader>
        </div>
      </div>

      <!-- Section 2: Core Shapes Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Shape Variants</h3>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <ag-skeleton-loader variant="circular" width="40px" height="40px"></ag-skeleton-loader>
          <ag-skeleton-loader variant="rectangular" width="150px" height="80px"></ag-skeleton-loader>
          <ag-skeleton-loader variant="rounded" width="150px" height="80px"></ag-skeleton-loader>
        </div>
      </div>

      <!-- Section 3: Intensity & Animation Variations -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Intensity & Effect Overrides</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <ag-skeleton-loader intensity="light" effect="none" width="150px" height="60px" variant="rounded"></ag-skeleton-loader>
          <ag-skeleton-loader intensity="medium" effect="none" width="150px" height="60px" variant="rounded"></ag-skeleton-loader>
        </div>
      </div>

      <!-- Section 4: Real-World Compound Card Component Blueprint -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Profile Card Compound Example</h3>
        <div style="display: flex; gap: 16px; padding: 20px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-md); max-width: 400px;">
          <ag-skeleton-loader variant="circular" width="60px" height="60px"></ag-skeleton-loader>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            <ag-skeleton-loader width="40%" height="16px"></ag-skeleton-loader>
            <ag-skeleton-loader width="80%" height="14px"></ag-skeleton-loader>
          </div>
        </div>
      </div>
    </div>
  `,
  Tabs: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Basic Horizontal Tabs -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Basic Horizontal Layout</h3>
        <ag-tabs aria-label="Basic tabs example">
          <ag-tab slot="tab" panel="panel-1">Tab 1</ag-tab>
          <ag-tab slot="tab" panel="panel-2">Tab 2</ag-tab>
          <ag-tab slot="tab" panel="panel-3">Tab 3</ag-tab>
          <ag-tab-panel slot="panel" panel="panel-1">
            <p style="margin: 12px 0 0 0;">Content for Tab 1</p>
          </ag-tab-panel>
          <ag-tab-panel slot="panel" panel="panel-2">
            <p style="margin: 12px 0 0 0;">Content for Tab 2</p>
          </ag-tab-panel>
          <ag-tab-panel slot="panel" panel="panel-3">
            <p style="margin: 12px 0 0 0;">Content for Tab 3</p>
          </ag-tab-panel>
        </ag-tabs>
      </div>

      <!-- Section 2: Vertical Orientation Layout -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Vertical Orientation Layout</h3>
        <ag-tabs orientation="vertical" aria-label="Vertical tabs">
          <ag-tab slot="tab" panel="vert-1">Profile</ag-tab>
          <ag-tab slot="tab" panel="vert-2">Settings</ag-tab>
          <ag-tab slot="tab" panel="vert-3">Notifications</ag-tab>
          <ag-tab-panel slot="panel" panel="vert-1"><div style="padding-left: 12px;">Profile content framework</div></ag-tab-panel>
          <ag-tab-panel slot="panel" panel="vert-2"><div style="padding-left: 12px;">Settings content engine</div></ag-tab-panel>
          <ag-tab-panel slot="panel" panel="vert-3"><div style="padding-left: 12px;">Notifications content wire</div></ag-tab-panel>
        </ag-tabs>
      </div>

      <!-- Section 3: Disabled Tab States Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Disabled Tab Elements</h3>
        <ag-tabs aria-label="Tabs with disabled tab">
          <ag-tab slot="tab" panel="avail-1">Available Tab</ag-tab>
          <ag-tab slot="tab" panel="disabled-2" disabled>Disabled Tab</ag-tab>
          <ag-tab slot="tab" panel="avail-3">Also Available</ag-tab>
          <ag-tab-panel slot="panel" panel="avail-1"><p style="margin: 12px 0 0 0;">Available rendering block</p></ag-tab-panel>
          <ag-tab-panel slot="panel" panel="disabled-2"><p style="margin: 12px 0 0 0;">Disabled hidden panel context</p></ag-tab-panel>
          <ag-tab-panel slot="panel" panel="avail-3"><p style="margin: 12px 0 0 0;">Alternative active block element</p></ag-tab-panel>
        </ag-tabs>
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
          <ag-tag .uppercase=${true} variant="warning">Uppercase Tag</ag-tag>
          <ag-tag .uppercase=${true} shape="pill">Pill Label</ag-tag>
        </div>
      </div>

      <!-- Section 4: Removable Close Slots -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Removable & Close Slots</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; align-items: center;">
          <ag-tag variant="error">Deletable <button slot="close" aria-label="close">✕</button></ag-tag>
          <ag-tag variant="success" shape="pill">Active <button slot="close" aria-label="close">✕</button></ag-tag>
          <ag-tag variant="warning" .uppercase=${true}>Pending <button slot="close" aria-label="close">✕</button></ag-tag>
          <ag-tag .removable=${true} variant="primary">Removable Prop</ag-tag>
        </div>
      </div>
    </div>
  `,
  Timeline: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Section 1: Horizontal Layout Stepper -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Horizontal Stepper Layout</h3>
        <ag-timeline orientation="horizontal" .responsive=${false}>
          <ag-timeline-item>
            <span slot="ag-start">Step 1</span>
            <div slot="ag-marker" style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-success); color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">1</div>
            <span slot="ag-end">Completed</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-start">Step 2</span>
            <div slot="ag-marker" style="width: 24px; height: 24px; border-radius: 50%; background: var(--ag-primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold;">2</div>
            <span slot="ag-end">In Progress</span>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-start">Step 3</span>
            <div slot="ag-marker" style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--ag-border); color: var(--ag-text-secondary); display: flex; align-items: center; justify-content: center; font-size: 12px;">3</div>
            <span slot="ag-end">Pending</span>
          </ag-timeline-item>
        </ag-timeline>
      </div>

      <!-- Section 2: Vertical Layout Thread -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Vertical Tracking Layout</h3>
        <ag-timeline orientation="vertical" variant="primary">
          <ag-timeline-item>
            <span slot="ag-start">09:00 AM</span>
            <div slot="ag-marker" style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
            <div slot="ag-end">
              <strong>Breakfast meeting</strong>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: var(--ag-text-secondary);">Oatmeal and coffee focus time</p>
            </div>
          </ag-timeline-item>
          <ag-timeline-item>
            <span slot="ag-start">10:00 AM</span>
            <div slot="ag-marker" style="width: 12px; height: 12px; border-radius: 50%; background: var(--ag-primary);"></div>
            <div slot="ag-end">
              <strong>Daily Standup</strong>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: var(--ag-text-secondary);">Team synchronization block</p>
            </div>
          </ag-timeline-item>
        </ag-timeline>
      </div>
    </div>
  `,
  Toggle: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 32px; max-width: 800px;">
      <!-- Default States & Sizes -->
      <ag-toggle label="Default toggle"></ag-toggle>
      <ag-toggle label="Checked by default" checked></ag-toggle>
      <ag-toggle label="Disabled" disabled></ag-toggle>
      <!-- Validation & Positioning options available in source reference -->
    </div>
  `,
  Toast: () => html`
    <div style="padding: 24px; max-width: 800px;">
      <!-- A single, simple test case to verify style, color token, and close button rendering -->
      <div style="margin-bottom: 16px;">
        <ag-toast open .autoDismiss=${false} type="success">
          Toast notification success verification.
        </ag-toast>
      </div>
    </div>
  `


};
