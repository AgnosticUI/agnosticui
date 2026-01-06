import { LitElement, html } from 'lit';
import 'agnosticui-core/popover';
import 'agnosticui-core/button';

export class PopoverLitExamples extends LitElement {
  static properties = {
    showCount: { type: Number },
    hideCount: { type: Number }
  };

  constructor() {
    super();
    this.showCount = 0;
    this.hideCount = 0;
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  handleShow() {
    this.showCount++;
  }

  handleHide() {
    this.hideCount++;
  }

  render() {
    return html`
      <section>
        <div class="mbe4">
          <h2>Basic Popover</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover>
            <button slot="trigger">Open Popover</button>
            <span slot="title">Popover Title</span>
            <div slot="content">
              <p>This is the popover content. You can put any content here including text, links, buttons, and more.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <ag-button slot="trigger" variant="primary">Button Trigger</ag-button>
            <span slot="title">User Information</span>
            <div slot="content">
              <p>Popovers can contain rich content and interactive elements.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <a
              href="#"
              slot="trigger"
              style="text-decoration: underline; cursor: pointer;"
              @click=${(e) => e.preventDefault()}
            >
              Link Trigger
            </a>
            <span slot="title">Link Popover</span>
            <div slot="content">
              <p>Popovers can be triggered from links too.</p>
            </div>
          </ag-popover>
          <ag-popover>
            <button
              slot="trigger"
              style="background: none; border: none; cursor: pointer; padding: 8px; display: flex; align-items: center; gap: 4px;"
              aria-label="More options"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="12" cy="5" r="1"></circle>
                <circle cx="12" cy="19" r="1"></circle>
              </svg>
            </button>
            <span slot="title">More Options</span>
            <div slot="content">
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
                  Edit
                </button>
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; border-radius: var(--ag-radius-sm);">
                  Share
                </button>
                <button style="text-align: left; padding: 8px; background: none; border: none; cursor: pointer; color: var(--ag-error); border-radius: var(--ag-radius-sm);">
                  Delete
                </button>
              </div>
            </div>
          </ag-popover>
          <ag-popover>
            <button
              slot="trigger"
              style="background: none; border: none; cursor: pointer; padding: 8px;"
              aria-label="Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <span slot="title">Navigation Menu</span>
            <div slot="content">
              <nav style="display: flex; flex-direction: column; gap: 4px;">
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >Home</a>
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >About</a>
                <a
                  href="#"
                  style="padding: 8px; text-decoration: none; color: var(--ag-text-primary); border-radius: var(--ag-radius-sm);"
                >Contact</a>
              </nav>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Trigger Types</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover trigger-type="click">
            <ag-button slot="trigger">Click Trigger</ag-button>
            <span slot="title">Click Popover</span>
            <div slot="content">
              <p>This popover opens when you click the button.</p>
            </div>
          </ag-popover>
          <ag-popover trigger-type="hover">
            <ag-button slot="trigger" variant="secondary">Hover Trigger</ag-button>
            <span slot="title">Hover Popover</span>
            <div slot="content">
              <p>This popover opens when you hover over the button.</p>
            </div>
          </ag-popover>
          <ag-popover trigger-type="focus">
            <ag-button slot="trigger" variant="success">Focus Trigger</ag-button>
            <span slot="title">Focus Popover</span>
            <div slot="content">
              <p>This popover opens when the button receives focus (keyboard navigation).</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Placement Options</h2>
        </div>
        <div
          class="mbe4"
          style="display: grid; grid-template-columns: 1fr 1fr 1fr; grid-template-rows: auto auto auto; gap: 1rem; place-items: center; max-width: 275px; margin: 0 auto;"
        >
          <div style="grid-column: 2; grid-row: 1;">
            <ag-popover placement="top">
              <ag-button slot="trigger">Top</ag-button>
              <span slot="title">Top Placement</span>
              <div slot="content">
                <p>Popover positioned above</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 3; grid-row: 2;">
            <ag-popover placement="right">
              <ag-button slot="trigger">Right</ag-button>
              <span slot="title">Right Placement</span>
              <div slot="content">
                <p>Popover positioned to the right</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 2; grid-row: 3;">
            <ag-popover placement="bottom">
              <ag-button slot="trigger">Bottom</ag-button>
              <span slot="title">Bottom Placement</span>
              <div slot="content">
                <p>Popover positioned below</p>
              </div>
            </ag-popover>
          </div>
          <div style="grid-column: 1; grid-row: 2;">
            <ag-popover placement="left">
              <ag-button slot="trigger">Left</ag-button>
              <span slot="title">Left Placement</span>
              <div slot="content">
                <p>Popover positioned to the left</p>
              </div>
            </ag-popover>
          </div>
        </div>

        <div class="mbe4">
          <h2>Rich Content</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover>
            <ag-button slot="trigger" variant="primary">User Profile</ag-button>
            <span slot="title">John Doe</span>
            <div slot="content">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                  <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--ag-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
                    JD
                  </div>
                  <div>
                    <div style="font-weight: 600;">John Doe</div>
                    <div style="font-size: 14px; color: var(--ag-text-secondary);">john@example.com</div>
                  </div>
                </div>
                <div style="padding-top: 8px; border-top: 1px solid var(--ag-border);">
                  <ag-button variant="primary" style="width: 100%;">View Profile</ag-button>
                </div>
              </div>
            </div>
          </ag-popover>
          <ag-popover>
            <ag-button slot="trigger" variant="secondary">Add Comment</ag-button>
            <span slot="title">New Comment</span>
            <div slot="content">
              <form
                style="display: flex; flex-direction: column; gap: 12px; min-width: 250px;"
                @submit=${(e) => e.preventDefault()}
              >
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); box-sizing: border-box;"
                  >
                </div>
                <div>
                  <label style="display: block; margin-bottom: 4px; font-size: 14px;">Comment</label>
                  <textarea
                    placeholder="Your comment"
                    rows="3"
                    style="width: 100%; padding: 8px; border: 1px solid var(--ag-border); border-radius: var(--ag-radius-sm); resize: vertical; box-sizing: border-box;"
                  ></textarea>
                </div>
                <ag-button variant="primary" type="submit">Submit</ag-button>
              </form>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Without Close Button</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover show-close-button="false">
            <ag-button slot="trigger">No Close Button</ag-button>
            <span slot="title">Title Only</span>
            <div slot="content">
              <p>This popover has no close button. Click outside to close.</p>
            </div>
          </ag-popover>
          <ag-popover arrow="false">
            <ag-button slot="trigger" variant="secondary">No Arrow</ag-button>
            <span slot="title">Popover Without Arrow</span>
            <div slot="content">
              <p>This popover doesn't have an arrow pointing to the trigger.</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>Event Handling</h2>
          <p class="mbs2 mbe3">
            Listen to show and hide events to track when the popover opens and closes.
          </p>
          <div style="margin-bottom: 16px; padding: 12px; background: var(--ag-background-secondary); border-radius: var(--ag-radius-md); border: 1px solid var(--ag-border);">
            <p style="margin: 4px 0; font-size: 14px;">
              <strong>Show events:</strong> ${this.showCount}
            </p>
            <p style="margin: 4px 0; font-size: 14px;">
              <strong>Hide events:</strong> ${this.hideCount}
            </p>
          </div>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover
            @show=${this.handleShow}
            @hide=${this.handleHide}
          >
            <ag-button slot="trigger" variant="primary">Toggle Popover</ag-button>
            <span slot="title">Event Tracking</span>
            <div slot="content">
              <p>Open and close this popover to see the event counts above.</p>
            </div>
          </ag-popover>
        </div>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the popover's appearance without affecting the component's internal styling. One drawback is that the arrow part can be tricky to style due to its border-based implementation so we hide it in these examples.
          </p>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-popover class="custom-popover-gradient">
            <ag-button slot="trigger" variant="primary">Gradient Popover</ag-button>
            <span slot="title" style="color: white;">Customized Style</span>
            <div slot="content" style="color: white;">
              <p style="color: white;">This popover has been customized with CSS Shadow Parts for a gradient background!</p>
            </div>
          </ag-popover>
          <ag-popover class="custom-popover-success">
            <ag-button slot="trigger" variant="success">Success Popover</ag-button>
            <span slot="title" style="color: white;">Success Theme</span>
            <div slot="content" style="color: white;">
              <p style="color: white;">A success-themed popover with custom styling.</p>
            </div>
          </ag-popover>
        </div>
      </section>

      <style>
        /* CSS Shadow Parts customization examples */
        .custom-popover-gradient::part(ag-popover) {
          background: linear-gradient(135deg, #4338ca 0%, #6b21a8 100%);
          color: white;
          border: none;
          box-shadow: 0 20px 40px rgba(67, 56, 202, 0.5);
        }

        /* How to match a custom gradient? Just hide ¯\\_(ツ)_/¯  */
        .custom-popover-gradient::part(ag-popover-arrow) {
          display: none;
        }

        .custom-popover-success::part(ag-popover) {
          background: #059669;
          color: white;
          border: 2px solid #047857;
          box-shadow: 0 10px 25px rgba(5, 150, 105, 0.3);
        }

        /* The border-based arrow, floating-ui's flip, and other complexities makes
        the ROI on having an arrow questionable. So, we just hide ¯\\_(ツ)_/¯  */
        .custom-popover-success::part(ag-popover-arrow) {
          display: none;
        }
      </style>
    `;
  }
}

// Register the custom element
customElements.define('popover-lit-examples', PopoverLitExamples);
