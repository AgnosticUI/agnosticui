import { LitElement, html, css } from 'lit';
import 'agnosticui-core/input';

export class InputLitExamples extends LitElement {
  static properties = {
    // Basic
    basicValue: { type: String },
    password: { type: String },
    search: { type: String },
    // Sizes
    sizeSmall: { type: String },
    sizeDefault: { type: String },
    sizeLarge: { type: String },
    // Shapes
    shapeDefault: { type: String },
    shapeRounded: { type: String },
    shapeCapsule: { type: String },
    shapeUnderlined: { type: String },
    shapeUnderlinedBg: { type: String },
    // States
    stateDefault: { type: String },
    stateRequired: { type: String },
    stateDisabled: { type: String },
    stateReadonly: { type: String },
    stateInvalid: { type: String },
    // Textarea
    textareaValue: { type: String },
    textareaLarge: { type: String },
    // Addons
    addonLeft: { type: String },
    addonRight: { type: String },
    addonBoth: { type: String },
    addonPercent: { type: String },
    // Addons with style variants
    addonRounded: { type: String },
    addonCapsule: { type: String },
    addonUnderlined: { type: String },
    addonUnderlinedBg: { type: String },
    // Custom styles
    customGradient: { type: String },
    customMaterial: { type: String },
    customTextarea: { type: String },
    // Label positioning
    labelTop: { type: String },
    labelStart: { type: String },
    labelEnd: { type: String },
    labelBottom: { type: String },
    // Interactive event handling
    interactiveEmail: { type: String },
    lastInputTime: { type: String },
    interactiveUsername: { type: String },
    confirmedUsername: { type: String },
    interactiveFocus: { type: String },
    isFocused: { type: Boolean },
    focusCount: { type: Number },
    interactiveReactive: { type: String },
    interactiveTextarea: { type: String },
    textareaStatus: { type: String },
  };

  static styles = css`
    /* Modern gradient input style */
    .custom-gradient-input::part(ag-input) {
      border: 2px solid transparent;
      background: linear-gradient(white, white) padding-box,
        linear-gradient(135deg, #667eea 0%, #764ba2 100%) border-box;
      border-radius: 12px;
      padding: 0.75rem 1rem;
      font-weight: 500;
      transition: all 0.3s ease;
    }

    .custom-gradient-input::part(ag-input):focus {
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
      transform: translateY(-1px);
    }

    .custom-gradient-input::part(ag-input-label) {
      font-weight: 700;
      color: var(--ag-text-secondary);
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.05em;
    }

    /* Material Design-inspired */
    .custom-material-input::part(ag-input) {
      border: none;
      border-bottom: 2px solid #e5e7eb;
      border-radius: 0;
      padding: 0.5rem 0;
      background: transparent;
      transition: border-color 0.2s ease;
    }

    .custom-material-input::part(ag-input):focus {
      border-bottom-color: #667eea;
      outline: none;
    }

    .custom-material-input::part(ag-input-label) {
      font-size: 0.875rem;
      color: var(--ag-text-secondary);
      margin-bottom: 0.25rem;
    }

    /* Textarea customization */
    .custom-textarea::part(ag-textarea) {
      border: 2px dashed #9ca3af;
      border-radius: 12px;
      background: #f9fafb;
      padding: 1rem;
      font-family: "Monaco", "Courier New", monospace;
      font-size: 0.875rem;
      line-height: 1.6;
      transition: all 0.3s ease;
    }

    .custom-textarea::part(ag-textarea):focus {
      border-style: solid;
      border-color: #667eea;
      background: white;
    }

    .custom-textarea::part(ag-input-label) {
      font-weight: 700;
      color: var(--ag-text-secondary);
    }
  `;

  constructor() {
    super();
    this.basicValue = '';
    this.password = '';
    this.search = '';
    this.sizeSmall = '';
    this.sizeDefault = '';
    this.sizeLarge = '';
    this.shapeDefault = '';
    this.shapeRounded = '';
    this.shapeCapsule = '';
    this.shapeUnderlined = '';
    this.shapeUnderlinedBg = '';
    this.stateDefault = '';
    this.stateRequired = '';
    this.stateDisabled = 'Disabled value';
    this.stateReadonly = 'Read-only value';
    this.stateInvalid = '';
    this.textareaValue = '';
    this.textareaLarge = '';
    this.addonLeft = '';
    this.addonRight = '';
    this.addonBoth = '';
    this.addonPercent = '';
    this.addonRounded = '';
    this.addonCapsule = '';
    this.addonUnderlined = '';
    this.addonUnderlinedBg = '';
    this.customGradient = '';
    this.customMaterial = '';
    this.customTextarea = '';
    this.labelTop = '';
    this.labelStart = '';
    this.labelEnd = '';
    this.labelBottom = '';
    this.interactiveEmail = '';
    this.lastInputTime = '(none)';
    this.interactiveUsername = '';
    this.confirmedUsername = '';
    this.interactiveFocus = '';
    this.isFocused = false;
    this.focusCount = 0;
    this.interactiveReactive = '';
    this.interactiveTextarea = '';
    this.textareaStatus = 'Ready';
  }

  get wordCount() {
    if (!this.interactiveTextarea.trim()) return 0;
    return this.interactiveTextarea.trim().split(/\s+/).length;
  }

  handleInputEvent(e) {
    this.interactiveEmail = e.target.value;
    const now = new Date();
    this.lastInputTime = now.toLocaleTimeString();
  }

  handleChangeEvent(e) {
    this.interactiveUsername = e.target.value;
    this.confirmedUsername = e.target.value;
  }

  handleFocus() {
    this.isFocused = true;
    this.focusCount++;
  }

  handleBlur() {
    this.isFocused = false;
  }

  handleTextareaInput(e) {
    this.interactiveTextarea = e.target.value;
    this.textareaStatus = 'Typing...';
  }

  handleTextareaChange() {
    this.textareaStatus = 'Changes saved';
  }

  handleTextareaFocus() {
    this.textareaStatus = 'Focused';
  }

  handleTextareaBlur() {
    this.textareaStatus = 'Ready';
  }

  setProgrammatically() {
    this.interactiveReactive = 'Programmatically set!';
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Input</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.basicValue}
            @input=${(e) => this.basicValue = e.target.value}
            label="Email"
            type="email"
            placeholder="you@example.com"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.password}
            @input=${(e) => this.password = e.target.value}
            label="Password"
            type="password"
            placeholder="Enter password"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.search}
            @input=${(e) => this.search = e.target.value}
            label="Search"
            type="search"
            placeholder="Search..."
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Sizes</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.sizeSmall}
            @input=${(e) => this.sizeSmall = e.target.value}
            label="Small Input"
            size="small"
            placeholder="Small size"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.sizeDefault}
            @input=${(e) => this.sizeDefault = e.target.value}
            label="Default Input"
            size="default"
            placeholder="Default size"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.sizeLarge}
            @input=${(e) => this.sizeLarge = e.target.value}
            label="Large Input"
            size="large"
            placeholder="Large size"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Shape Variants</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.shapeDefault}
            @input=${(e) => this.shapeDefault = e.target.value}
            label="Default (rectangular)"
            placeholder="Default rectangular"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeRounded}
            @input=${(e) => this.shapeRounded = e.target.value}
            label="Rounded"
            rounded
            placeholder="Rounded corners"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeCapsule}
            @input=${(e) => this.shapeCapsule = e.target.value}
            label="Capsule"
            capsule
            placeholder="Capsule shape"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeUnderlined}
            @input=${(e) => this.shapeUnderlined = e.target.value}
            label="Underlined"
            underlined
            placeholder="Underlined only"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.shapeUnderlinedBg}
            @input=${(e) => this.shapeUnderlinedBg = e.target.value}
            label="Underlined with Background"
            underlined-with-background
            placeholder="Underlined with background"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>States</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.stateDefault}
            @input=${(e) => this.stateDefault = e.target.value}
            label="Normal"
            placeholder="Normal state"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateRequired}
            @input=${(e) => this.stateRequired = e.target.value}
            label="Required"
            required
            placeholder="Required field"
            help-text="This field is required"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateDisabled}
            label="Disabled"
            disabled
            placeholder="Disabled input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateReadonly}
            label="Readonly"
            readonly
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.stateInvalid}
            @input=${(e) => this.stateInvalid = e.target.value}
            label="Invalid"
            invalid
            placeholder="Invalid input"
            error-message="This field has an error"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>Textarea</h2>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.textareaValue}
            @input=${(e) => this.textareaValue = e.target.value}
            label="Comments"
            type="textarea"
            placeholder="Enter your comments..."
            .rows=${4}
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.textareaLarge}
            @input=${(e) => this.textareaLarge = e.target.value}
            label="Description"
            type="textarea"
            placeholder="Enter description..."
            .rows=${6}
            size="large"
            help-text="Provide a detailed description"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>With Addons (Automatic Detection)</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Addons are automatically detected when you provide slot content - no props needed!
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.addonLeft}
            @input=${(e) => this.addonLeft = e.target.value}
            label="Website URL"
            placeholder="example.com"
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonRight}
            @input=${(e) => this.addonRight = e.target.value}
            label="Price"
            placeholder="0.00"
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonBoth}
            @input=${(e) => this.addonBoth = e.target.value}
            label="Amount"
            placeholder="100"
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-success)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span slot="addon-right">.00</span>
          </ag-input>

          <ag-input
            .value=${this.addonPercent}
            @input=${(e) => this.addonPercent = e.target.value}
            label="Discount"
            type="number"
            placeholder="10"
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </ag-input>
        </div>

        <div class="mbe4">
          <h2>Addons with Style Variants</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Addons work seamlessly with all input styling variants
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.addonRounded}
            @input=${(e) => this.addonRounded = e.target.value}
            label="Rounded with Addons"
            type="number"
            placeholder="0.00"
            rounded
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="1" x2="12" y2="23"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span slot="addon-right" style="font-weight: 600;">USD</span>
          </ag-input>

          <ag-input
            .value=${this.addonCapsule}
            @input=${(e) => this.addonCapsule = e.target.value}
            label="Capsule with Addon"
            type="search"
            placeholder="Find products..."
            capsule
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonUnderlined}
            @input=${(e) => this.addonUnderlined = e.target.value}
            label="Underlined with Addon"
            type="number"
            placeholder="10"
            underlined
            class="mbe2"
          >
            <svg slot="addon-right" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </ag-input>

          <ag-input
            .value=${this.addonUnderlinedBg}
            @input=${(e) => this.addonUnderlinedBg = e.target.value}
            label="Underlined with Background"
            type="text"
            placeholder="Enter username"
            underlined-with-background
            class="mbe2"
          >
            <svg slot="addon-left" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </ag-input>
        </div>

        <div class="mbe4">
          <h2>Interactive Event Handling</h2>
          <p class="mbe2" style="color: var(--ag-text-secondary); font-size: 0.875rem;">
            Demonstrates event handling with @input, @change, @focus, @blur
          </p>
        </div>
        <div class="stacked mbe4">
          <div>
            <ag-input
              .value=${this.interactiveEmail}
              @input=${this.handleInputEvent}
              label="Email (@input event)"
              type="email"
              placeholder="you@example.com"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Character count: <strong>${this.interactiveEmail.length}</strong> | Last input: <strong>${this.lastInputTime}</strong>
            </p>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveUsername}
              @change=${this.handleChangeEvent}
              label="Username (@change event)"
              placeholder="Enter username"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Last confirmed value: <strong>${this.confirmedUsername || '(none)'}</strong>
            </p>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveFocus}
              @input=${(e) => this.interactiveFocus = e.target.value}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
              label="Focus Tracking (@focus/@blur)"
              placeholder="Click to focus"
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem;">
              Status: <strong style="color: ${this.isFocused ? 'var(--ag-success)' : 'var(--ag-text-secondary)'}">
                ${this.isFocused ? 'Focused' : 'Not focused'}
              </strong>
              ${this.focusCount > 0 ? `(focused ${this.focusCount} time${this.focusCount > 1 ? 's' : ''})` : ''}
            </p>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveReactive}
              @input=${(e) => this.interactiveReactive = e.target.value}
              label="Two-way Binding"
              placeholder="Type here..."
              class="mbe2"
            ></ag-input>
            <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
              Current value: <strong>${this.interactiveReactive || '(empty)'}</strong>
            </p>
            <button
              @click=${this.setProgrammatically}
              style="margin-top: 0.5rem; padding: 0.25rem 0.75rem; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); cursor: pointer;"
            >
              Set value programmatically
            </button>
          </div>

          <div>
            <ag-input
              .value=${this.interactiveTextarea}
              @input=${this.handleTextareaInput}
              @change=${this.handleTextareaChange}
              @focus=${this.handleTextareaFocus}
              @blur=${this.handleTextareaBlur}
              label="Textarea with Events"
              type="textarea"
              .rows=${3}
              placeholder="Try typing, then click outside..."
              class="mbe2"
            ></ag-input>
            <div style="margin-top: 0.5rem; font-size: 0.875rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
              <div>Words: <strong>${this.wordCount}</strong></div>
              <div>Characters: <strong>${this.interactiveTextarea.length}</strong></div>
              <div>Status: <strong>${this.textareaStatus}</strong></div>
            </div>
          </div>
        </div>

        <div class="mbe4">
          <h2>Label Positioning</h2>
          <p style="margin-top: 0.5rem; color: var(--ag-text-secondary); font-size: 0.875rem;">
            Control label placement with the <code>labelPosition</code> attribute: <code>top</code> (default), <code>start</code>, <code>end</code>, or <code>bottom</code>
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.labelTop}
            @input=${(e) => this.labelTop = e.target.value}
            label="Top Position (Default)"
            label-position="top"
            placeholder="Label above input"
            help-text="Default vertical layout - best for mobile"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.labelStart}
            @input=${(e) => this.labelStart = e.target.value}
            label="Name:"
            label-position="start"
            placeholder="Enter name"
            help-text="Horizontal layout - label before input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.labelEnd}
            @input=${(e) => this.labelEnd = e.target.value}
            label="Email:"
            label-position="end"
            placeholder="you@example.com"
            help-text="Horizontal layout - label after input"
            class="mbe2"
          ></ag-input>
          <ag-input
            .value=${this.labelBottom}
            @input=${(e) => this.labelBottom = e.target.value}
            label="Bottom Position"
            label-position="bottom"
            placeholder="Enter value"
            help-text="Vertical layout - label below input"
            class="mbe2"
          ></ag-input>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p style="margin-top: 0.5rem; margin-bottom: 1rem; color: var(--vp-c-text-2);">
            Input can be customized using CSS Shadow Parts:
            <code>::part(ag-input)</code>,
            <code>::part(ag-textarea)</code>,
            <code>::part(ag-input-label)</code>,
            <code>::part(ag-input-error)</code>,
            <code>::part(ag-input-help)</code>
          </p>
        </div>
        <div class="stacked mbe4">
          <ag-input
            .value=${this.customGradient}
            @input=${(e) => this.customGradient = e.target.value}
            class="custom-gradient-input mbe2"
            label="Modern Gradient Border"
            placeholder="you@example.com"
            type="email"
          ></ag-input>

          <ag-input
            .value=${this.customMaterial}
            @input=${(e) => this.customMaterial = e.target.value}
            class="custom-material-input mbe2"
            label="Material Design Style"
            placeholder="John Doe"
          ></ag-input>

          <ag-input
            .value=${this.customTextarea}
            @input=${(e) => this.customTextarea = e.target.value}
            class="custom-textarea mbe2"
            label="Styled Textarea"
            type="textarea"
            .rows=${4}
            placeholder="Paste your code here..."
            help-text="Monospace font with dashed border"
          ></ag-input>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('input-lit-examples', InputLitExamples);
