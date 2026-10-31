// v2/lib/tests/visual/preview/registry.ts
import { html } from 'lit';

/**
 * Pure JavaScript component layout mapping matching the verified baseline setup.
 * Includes comprehensive test templates for Button and Alert components covering variants, sizes, shapes, and styles.
 */
export const COMPONENT_REGISTRY = {
  
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
          <ag-badge ?dot=${true} variant="success" statusLabel="Online"></ag-badge>
        </div>
      </div>

      <!-- Section 3: Value Truncation & Interactive States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Value, Max & Interactive</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <ag-badge variant="danger" .value=${105} .max=${99}></ag-badge>
          <ag-badge variant="primary" ?interactive=${true}>Interactive</ag-badge>
        </div>
      </div>
    </div>
  `,
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
  Card: () => html`
    <div style="padding: 24px; display: flex; flex-direction: column; gap: 24px; max-width: 800px;>
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
        <ag-card ?shadow=${true}>
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
        <ag-card ?shadow=${true}>
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
          <ag-checkbox name="example" value="2" label-text="Default Checked" ?checked=${true}></ag-checkbox>
        </div>
      </div>

      <!-- Section 2: Indeterminate Matrix -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Indeterminate State</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="select-all" value="all" ?indeterminate=${true} label-text="Select All (Mixed Mode)"></ag-checkbox>
        </div>
      </div>

      <!-- Section 3: Size Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Size Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="size" value="small" size="small" label-text="Small" ?checked=${true}></ag-checkbox>
          <ag-checkbox name="size" value="medium" size="medium" label-text="Medium (Default)" ?checked=${true}></ag-checkbox>
          <ag-checkbox name="size" value="large" size="large" label-text="Large" ?checked=${true}></ag-checkbox>
        </div>
      </div>

      <!-- Section 4: Theme Variants -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Theme Variants</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="theme-primary" value="1" theme="primary" label-text="Primary (Blue)" ?checked=${true}></ag-checkbox>
          <ag-checkbox name="theme-success" value="2" theme="success" label-text="Success (Green)" ?checked=${true}></ag-checkbox>
          <ag-checkbox name="theme-mono" value="3" theme="monochrome" label-text="Monochrome" ?checked=${true}></ag-checkbox>
        </div>
      </div>

      <!-- Section 5: Disabled States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Disabled State</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="disabled" value="1" label-text="Disabled Unchecked" ?disabled=${true}></ag-checkbox>
          <ag-checkbox name="disabled" value="2" label-text="Disabled Checked" ?checked=${true} ?disabled=${true}></ag-checkbox>
          <ag-checkbox name="disabled" value="3" label-text="Disabled Indeterminate" ?indeterminate=${true} ?disabled=${true}></ag-checkbox>
        </div>
      </div>

      <!-- Section 6: Label Positions -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-family: sans-serif; font-size: 14px; color: #888;">Label Position</h3>
        <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
          <ag-checkbox name="position" value="1" label-text="Label on End (Default)" label-position="end" ?checked=${true}></ag-checkbox>
          <ag-checkbox name="position" value="2" label-text="Label on Start" label-position="start" ?checked=${true}></ag-checkbox>
        </div>
      </div>
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
          <ag-icon-button label="Bordered" variant="primary" ?bordered=${true}>
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </ag-icon-button>
          <ag-icon-button label="Disabled" variant="primary" ?disabled=${true}>
            <svg style="width: 24px; height: 24px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </ag-icon-button>
        </div>
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
          <ag-input label="Rounded" ?rounded=${true} placeholder="Rounded corners"></ag-input>
          <ag-input label="Capsule" ?capsule=${true} placeholder="Capsule shape"></ag-input>
          <ag-input label="Underlined" ?underlined=${true} placeholder="Underlined only"></ag-input>
          <ag-input label="Underlined with Background" ?underlinedWithBackground=${true} placeholder="Underlined with background"></ag-input>
        </div>
      </div>

      <!-- Section 3: Validation, Addons & Field States -->
      <div>
        <h3 style="margin: 0 0 12px 0; font-size: 14px; color: #888;">Validation & States</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <ag-input label="Disabled Field" ?disabled=${true} placeholder="Cannot type here"></ag-input>
          <ag-input label="Invalid Entry" ?invalid=${true} error-message="This field entry layout is invalid" placeholder="Error state border"></ag-input>
          <ag-input label="Helper Description" help-text="Please ensure your layout input values match criteria" placeholder="With helper text"></ag-input>
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
  `,

};
