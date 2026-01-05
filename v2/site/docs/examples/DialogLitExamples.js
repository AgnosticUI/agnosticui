import { LitElement, html, css } from 'lit';
import 'agnosticui-core/dialog';
import 'agnosticui-core/button';

export class DialogLitExamples extends LitElement {
  static styles = css`
    .custom-parts-dialog::part(ag-dialog-backdrop) {
      background: linear-gradient(
        135deg,
        rgba(102, 126, 234, 0.8) 0%,
        rgba(118, 75, 162, 0.8) 100%
      );
    }

    .custom-parts-dialog::part(ag-dialog-container) {
      border: 3px solid #667eea;
      box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
    }

    .custom-parts-dialog::part(ag-dialog-header) {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 1.5rem;
      margin: -1.5rem -1.5rem 1rem -1.5rem;
      border-radius: 0.5rem 0.5rem 0 0;
    }

    .custom-parts-dialog::part(ag-dialog-heading) {
      font-size: 1.5rem;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .custom-parts-dialog::part(ag-dialog-content) {
      padding: 0 0.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-footer) {
      padding: 1rem;
      margin: 1rem -1.5rem -1.5rem -1.5rem;
      border-radius: 0 0 0.5rem 0.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-close-button) {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border-radius: 50%;
      width: 2rem;
      height: 2rem;
      font-size: 1.5rem;
    }

    .custom-parts-dialog::part(ag-dialog-close-button):hover {
      background: rgba(255, 255, 255, 0.3);
    }
  `;

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.isBasicDialogOpen = false;
    this.isHeaderFooterDialogOpen = false;
    this.isCloseButtonDialogOpen = false;
    this.isNoEscapeDialogOpen = false;
    this.isNoBackdropDialogOpen = false;
    this.isEventDialogOpen = false;
    this.isCustomDialogOpen = false;
    this.lastEvent = null;
  }

  firstUpdated() {
    // Set up event listeners for dialogs
    const eventDialog = this.querySelector('#event-dialog');
    if (eventDialog) {
      eventDialog.addEventListener('dialog-open', () => {
        this.lastEvent = 'dialog-open';
        this.requestUpdate();
      });
      eventDialog.addEventListener('dialog-close', () => {
        this.lastEvent = 'dialog-close';
        this.requestUpdate();
      });
      eventDialog.addEventListener('dialog-cancel', () => {
        this.lastEvent = 'dialog-cancel';
        this.requestUpdate();
      });
    }

    // Add close event listeners to sync state
    this.querySelectorAll('ag-dialog').forEach((dialog) => {
      dialog.addEventListener('dialog-close', (e) => {
        const dialogId = e.target.id;
        this.handleDialogClose(dialogId);
      });
      dialog.addEventListener('dialog-cancel', (e) => {
        const dialogId = e.target.id;
        this.handleDialogClose(dialogId);
      });
    });
  }

  handleDialogClose(dialogId) {
    switch (dialogId) {
      case 'basic-dialog':
        this.isBasicDialogOpen = false;
        break;
      case 'header-footer-dialog':
        this.isHeaderFooterDialogOpen = false;
        break;
      case 'close-button-dialog':
        this.isCloseButtonDialogOpen = false;
        break;
      case 'no-escape-dialog':
        this.isNoEscapeDialogOpen = false;
        break;
      case 'no-backdrop-dialog':
        this.isNoBackdropDialogOpen = false;
        break;
      case 'event-dialog':
        this.isEventDialogOpen = false;
        break;
      case 'custom-dialog':
        this.isCustomDialogOpen = false;
        break;
    }
    this.requestUpdate();
  }

  showBasicDialog() {
    this.isBasicDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#basic-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showHeaderFooterDialog() {
    this.isHeaderFooterDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#header-footer-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showCloseButtonDialog() {
    this.isCloseButtonDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#close-button-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showNoEscapeDialog() {
    this.isNoEscapeDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#no-escape-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showNoBackdropDialog() {
    this.isNoBackdropDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#no-backdrop-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showEventDialog() {
    this.isEventDialogOpen = true;
    this.lastEvent = null;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#event-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  showCustomDialog() {
    this.isCustomDialogOpen = true;
    this.requestUpdate();
    setTimeout(() => {
      const dialog = this.querySelector('#custom-dialog');
      if (dialog) dialog.open = true;
    }, 0);
  }

  render() {
    return html`
      <style>
        .custom-parts-dialog::part(ag-dialog-backdrop) {
          background: linear-gradient(
            135deg,
            rgba(102, 126, 234, 0.8) 0%,
            rgba(118, 75, 162, 0.8) 100%
          );
        }

        .custom-parts-dialog::part(ag-dialog-container) {
          border: 3px solid #667eea;
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.4);
        }

        .custom-parts-dialog::part(ag-dialog-header) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 1.5rem;
          margin: -1.5rem -1.5rem 1rem -1.5rem;
          border-radius: 0.5rem 0.5rem 0 0;
        }

        .custom-parts-dialog::part(ag-dialog-heading) {
          font-size: 1.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .custom-parts-dialog::part(ag-dialog-content) {
          padding: 0 0.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-footer) {
          padding: 1rem;
          margin: 1rem -1.5rem -1.5rem -1.5rem;
          border-radius: 0 0 0.5rem 0.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-close-button) {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          font-size: 1.5rem;
        }

        .custom-parts-dialog::part(ag-dialog-close-button):hover {
          background: rgba(255, 255, 255, 0.3);
        }
      </style>

      <section>
        <!-- Basic Dialog -->
        <div class="mbe4">
          <h2>Basic Dialog</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showBasicDialog}>Open Basic Dialog</ag-button>
          <ag-dialog
            id="basic-dialog"
            heading="Basic Dialog"
            description="This is a basic dialog with heading and description."
          >
            <p>This is the basic dialog content.</p>
          </ag-dialog>
        </div>

        <!-- With Header and Footer -->
        <div class="mbe4">
          <h2>With Header and Footer</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showHeaderFooterDialog}>Open Dialog with Header/Footer</ag-button>
          <ag-dialog id="header-footer-dialog">
            <ag-dialog-header>
              <h2 class="m0 p0 b0">My Header</h2>
            </ag-dialog-header>
            <p>This dialog uses dialog header and footer components.</p>
            <ag-dialog-footer>
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${() => {
                  const dialog = this.querySelector('#header-footer-dialog');
                  if (dialog) dialog.open = false;
                }}>Cancel</ag-button>
                <ag-button
                  variant="primary"
                  @click=${() => {
                    const dialog = this.querySelector('#header-footer-dialog');
                    if (dialog) dialog.open = false;
                  }}
                >Confirm</ag-button>
              </div>
            </ag-dialog-footer>
          </ag-dialog>
        </div>

        <!-- With Close Button -->
        <div class="mbe4">
          <h2>With Close Button</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showCloseButtonDialog}>Open Dialog with Close Button</ag-button>
          <ag-dialog
            id="close-button-dialog"
            heading="Dialog with Close Button"
            description="Click the X button to close this dialog."
            show-close-button
          >
            <p>This dialog includes a close button in the top-right corner.</p>
          </ag-dialog>
        </div>

        <!-- No Close on Escape -->
        <div class="mbe4">
          <h2>No Close on Escape</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showNoEscapeDialog}>Open No Escape Dialog</ag-button>
          <ag-dialog
            id="no-escape-dialog"
            heading="No Close on Escape"
            description="Pressing Escape will not close this dialog."
            no-close-on-escape
            show-close-button
          >
            <p>Try pressing the Escape key - the dialog will not close.</p>
            <p>Use the close button instead.</p>
          </ag-dialog>
        </div>

        <!-- No Close on Backdrop -->
        <div class="mbe4">
          <h2>No Close on Backdrop</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showNoBackdropDialog}>Open No Backdrop Close Dialog</ag-button>
          <ag-dialog
            id="no-backdrop-dialog"
            heading="No Close on Backdrop"
            description="Clicking the backdrop will not close this dialog."
            no-close-on-backdrop
            show-close-button
          >
            <p>Try clicking outside the dialog - it will not close.</p>
            <p>Use the close button instead.</p>
          </ag-dialog>
        </div>

        <!-- Event Handling -->
        <div class="mbe4">
          <h2>Event Handling</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showEventDialog}>Open Event Dialog</ag-button>
          <ag-dialog
            id="event-dialog"
            heading="Event Testing"
            description="This dialog demonstrates event handling."
            show-close-button
          >
            <p>Try closing this dialog in different ways:</p>
            <ul>
              <li>Click the X button (triggers dialog-close)</li>
              <li>Press Escape (triggers dialog-cancel)</li>
              <li>Click the backdrop (triggers dialog-cancel)</li>
            </ul>
            ${this.lastEvent ? html`
              <p style="margin-top: 1rem; padding: 0.5rem; background: var(--ag-background-secondary); border-radius: 4px;">
                Last event: <strong>${this.lastEvent}</strong>
              </p>
            ` : ''}
          </ag-dialog>
        </div>

        <!-- Customized with CSS Shadow Parts -->
        <div class="mbe4">
          <h2>Customized with CSS Shadow Parts</h2>
        </div>
        <div class="stacked-mobile mbe4">
          <ag-button @click=${this.showCustomDialog}>Open Customized Dialog</ag-button>
          <ag-dialog
            id="custom-dialog"
            class="custom-parts-dialog"
            heading="Styled Dialog"
            description="This dialog is customized using CSS Shadow Parts."
            show-close-button
          >
            <p>This dialog demonstrates CSS Shadow Parts customization with styled backdrop, container, header, heading, content, footer, and close button.</p>
            <ag-dialog-footer>
              <div style="display: flex; gap: 0.5rem; justify-content: flex-end;">
                <ag-button @click=${() => {
                  const dialog = this.querySelector('#custom-dialog');
                  if (dialog) dialog.open = false;
                }}>Close</ag-button>
              </div>
            </ag-dialog-footer>
          </ag-dialog>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('dialog-lit-examples', DialogLitExamples);
