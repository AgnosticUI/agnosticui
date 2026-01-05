import { LitElement, html } from 'lit';
import 'agnosticui-core/fieldset';
import 'agnosticui-core/input';
import 'agnosticui-core/radio';
import 'agnosticui-core/checkbox';
import 'agnosticui-core/button';
import 'agnosticui-core/icon';

export class FieldsetLitExamples extends LitElement {
  constructor() {
    super();
    // Personal Information
    this.personalInfo = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    };
    // Shipping Address
    this.address = {
      street: '',
      city: '',
      zip: '',
      country: '',
    };
    // Contact Method
    this.contactMethod = 'email';
    // Notifications
    this.notifications = {
      productUpdates: true,
      newsletter: false,
      specialOffers: true,
      securityAlerts: true,
    };
    // Date of Birth
    this.dateOfBirth = {
      month: '',
      day: '',
      year: '',
    };
    // Search
    this.search = {
      query: '',
      caseSensitive: false,
      wholeWords: false,
    };
    // Account Settings
    this.account = {
      username: '',
      displayName: '',
      privacy: {
        profilePublic: true,
        activityVisible: true,
        searchable: false,
      },
    };
    // Payment Information
    this.payment = {
      cardNumber: '',
      expiry: '',
      cvv: '',
      nameOnCard: '',
      billingZip: '',
    };
    this.paymentErrors = {
      cardNumber: '',
      expiry: '',
      cvv: '',
      nameOnCard: '',
    };
    // Sizes
    this.sizes = {
      smallName: '',
      defaultName: '',
      largeName: '',
    };
    // Custom
    this.custom = {
      field1: '',
      field2: '',
      field3: '',
      field4: '',
    };
  }

  // Render in light DOM to access global utility classes
  createRenderRoot() {
    return this;
  }

  validateCardNumber() {
    const cleaned = this.payment.cardNumber.replace(/\s/g, '');
    if (cleaned && cleaned.length < 13) {
      this.paymentErrors.cardNumber = 'Card number must be at least 13 digits';
    } else {
      this.paymentErrors.cardNumber = '';
    }
    this.requestUpdate();
  }

  validateExpiry() {
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (this.payment.expiry && !expiryPattern.test(this.payment.expiry)) {
      this.paymentErrors.expiry = 'Format must be MM/YY';
    } else {
      this.paymentErrors.expiry = '';
    }
    this.requestUpdate();
  }

  validateCVV() {
    if (this.payment.cvv && (this.payment.cvv.length < 3 || this.payment.cvv.length > 4)) {
      this.paymentErrors.cvv = 'CVV must be 3 or 4 digits';
    } else {
      this.paymentErrors.cvv = '';
    }
    this.requestUpdate();
  }

  validateNameOnCard() {
    if (this.payment.nameOnCard && this.payment.nameOnCard.length < 2) {
      this.paymentErrors.nameOnCard = 'Please enter the name on your card';
    } else {
      this.paymentErrors.nameOnCard = '';
    }
    this.requestUpdate();
  }

  render() {
    return html`
      <style>
        /* Custom Fieldset 1 - Minimal with accent border */
        .custom-fieldset-1::part(ag-fieldset) {
          border-left: 3px solid var(--ag-primary);
          border-top: var(--ag-border-width-1) solid var(--ag-border);
          border-right: var(--ag-border-width-1) solid var(--ag-border);
          border-bottom: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-md);
          padding: var(--ag-space-5);
        }

        .custom-fieldset-1::part(ag-legend) {
          font-weight: 600;
          color: var(--ag-text-primary);
        }

        /* Custom Fieldset 2 - Subtle card with shadow */
        .custom-fieldset-2::part(ag-fieldset) {
          border: var(--ag-border-width-1) solid var(--ag-border);
          border-radius: var(--ag-radius-lg);
          padding: var(--ag-space-5);
          background: var(--ag-background-secondary);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }

        .custom-fieldset-2::part(ag-legend) {
          font-weight: 600;
          font-size: 1.125rem;
        }

        /* Monochrome button styling using CSS parts */
        .monochrome-button::part(ag-button) {
          background: transparent;
          color: var(--ag-text-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button::part(ag-button):hover {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
        }

        .monochrome-button-filled::part(ag-button) {
          background: var(--ag-text-primary);
          color: var(--ag-background-primary);
          border: 2px solid var(--ag-text-primary);
        }

        .monochrome-button-filled::part(ag-button):hover {
          background: var(--ag-text-secondary);
          border-color: var(--ag-text-secondary);
        }
      </style>
      <section>
        <div class="mbe4">
          <h2>Basic Fieldset</h2>
          <p class="mbs2 mbe3">Group related form controls with a descriptive legend</p>
        </div>
        <ag-fieldset
          legend="Personal Information"
          class="mbe6"
        >
          <ag-input
            .value=${this.personalInfo.firstName}
            @input=${(e) => { this.personalInfo.firstName = e.target.value; this.requestUpdate(); }}
            label="First Name"
            placeholder="John"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=${this.personalInfo.lastName}
            @input=${(e) => { this.personalInfo.lastName = e.target.value; this.requestUpdate(); }}
            label="Last Name"
            placeholder="Doe"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=${this.personalInfo.email}
            @input=${(e) => { this.personalInfo.email = e.target.value; this.requestUpdate(); }}
            label="Email"
            type="email"
            placeholder="john.doe@example.com"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </ag-icon>
          </ag-input>
          <ag-input
            .value=${this.personalInfo.phone}
            @input=${(e) => { this.personalInfo.phone = e.target.value; this.requestUpdate(); }}
            label="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </ag-icon>
          </ag-input>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Bordered Fieldset</h2>
          <p class="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
        </div>
        <ag-fieldset
          legend="Shipping Address"
          bordered
          class="mbe6"
        >
          <ag-input
            .value=${this.address.street}
            @input=${(e) => { this.address.street = e.target.value; this.requestUpdate(); }}
            label="Street Address"
            placeholder="123 Main St"
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </ag-icon>
          </ag-input>
          <div
            class="mbe3"
            style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--ag-space-3);"
          >
            <ag-input
              .value=${this.address.city}
              @input=${(e) => { this.address.city = e.target.value; this.requestUpdate(); }}
              label="City"
              placeholder="San Francisco"
            >
              <ag-icon slot="addon-left" size="18">
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                  <path d="M9 22v-4h6v4"/>
                  <path d="M8 6h.01"/>
                  <path d="M16 6h.01"/>
                  <path d="M12 6h.01"/>
                  <path d="M12 10h.01"/>
                  <path d="M12 14h.01"/>
                  <path d="M16 10h.01"/>
                  <path d="M16 14h.01"/>
                  <path d="M8 10h.01"/>
                  <path d="M8 14h.01"/>
                </svg>
              </ag-icon>
            </ag-input>
            <ag-input
              .value=${this.address.zip}
              @input=${(e) => { this.address.zip = e.target.value; this.requestUpdate(); }}
              label="ZIP Code"
              placeholder="94102"
            />
          </div>
          <ag-input
            .value=${this.address.country}
            @input=${(e) => { this.address.country = e.target.value; this.requestUpdate(); }}
            label="Country"
            placeholder="United States"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </ag-icon>
          </ag-input>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Radio Button Group</h2>
          <p class="mbs2 mbe3">Use fieldset to group related radio button choices</p>
        </div>
        <ag-fieldset
          legend="Preferred Contact Method"
          bordered
          class="mbe6"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <ag-radio
              name="contact-method"
              value="email"
              label-text="Email"
              ?checked=${this.contactMethod === 'email'}
              @change=${() => { this.contactMethod = 'email'; this.requestUpdate(); }}
            />
            <ag-radio
              name="contact-method"
              value="phone"
              label-text="Phone"
              ?checked=${this.contactMethod === 'phone'}
              @change=${() => { this.contactMethod = 'phone'; this.requestUpdate(); }}
            />
            <ag-radio
              name="contact-method"
              value="sms"
              label-text="Text Message (SMS)"
              ?checked=${this.contactMethod === 'sms'}
              @change=${() => { this.contactMethod = 'sms'; this.requestUpdate(); }}
            />
            <ag-radio
              name="contact-method"
              value="mail"
              label-text="Postal Mail"
              ?checked=${this.contactMethod === 'mail'}
              @change=${() => { this.contactMethod = 'mail'; this.requestUpdate(); }}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Checkbox Group</h2>
          <p class="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
        </div>
        <ag-fieldset
          legend="Notification Preferences"
          bordered
          class="mbe6"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <ag-checkbox
              name="notifications"
              value="product-updates"
              label-text="Product Updates"
              ?checked=${this.notifications.productUpdates}
              @change=${() => { this.notifications.productUpdates = !this.notifications.productUpdates; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="notifications"
              value="newsletter"
              label-text="Weekly Newsletter"
              ?checked=${this.notifications.newsletter}
              @change=${() => { this.notifications.newsletter = !this.notifications.newsletter; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="notifications"
              value="special-offers"
              label-text="Special Offers & Promotions"
              ?checked=${this.notifications.specialOffers}
              @change=${() => { this.notifications.specialOffers = !this.notifications.specialOffers; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="notifications"
              value="security-alerts"
              label-text="Security Alerts"
              ?checked=${this.notifications.securityAlerts}
              @change=${() => { this.notifications.securityAlerts = !this.notifications.securityAlerts; this.requestUpdate(); }}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>Horizontal Layout</h2>
          <p class="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
        </div>
        <ag-fieldset
          legend="Date of Birth"
          bordered
          layout="horizontal"
          class="mbe6"
        >
          <ag-input
            .value=${this.dateOfBirth.month}
            @input=${(e) => { this.dateOfBirth.month = e.target.value; this.requestUpdate(); }}
            label="Month"
            placeholder="MM"
            size="small"
            style="width: 80px;"
          />
          <ag-input
            .value=${this.dateOfBirth.day}
            @input=${(e) => { this.dateOfBirth.day = e.target.value; this.requestUpdate(); }}
            label="Day"
            placeholder="DD"
            size="small"
            style="width: 80px;"
          />
          <ag-input
            .value=${this.dateOfBirth.year}
            @input=${(e) => { this.dateOfBirth.year = e.target.value; this.requestUpdate(); }}
            label="Year"
            placeholder="YYYY"
            size="small"
            style="width: 100px;"
          />
        </ag-fieldset>

        <div class="mbe4">
          <h2>Visually Hidden Legend</h2>
          <p class="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
        </div>
        <ag-fieldset
          legend="Search Options"
          bordered
          legend-hidden
          class="mbe6"
        >
          <ag-input
            .value=${this.search.query}
            @input=${(e) => { this.search.query = e.target.value; this.requestUpdate(); }}
            label="Search Query"
            placeholder="Enter search terms..."
            class="mbe3"
          >
            <ag-icon slot="addon-left" size="18">
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--ag-secondary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </ag-icon>
          </ag-input>
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
            <ag-checkbox
              name="search-options"
              value="case-sensitive"
              label-text="Case Sensitive"
              size="small"
              ?checked=${this.search.caseSensitive}
              @change=${() => { this.search.caseSensitive = !this.search.caseSensitive; this.requestUpdate(); }}
            />
            <ag-checkbox
              name="search-options"
              value="whole-words"
              label-text="Match Whole Words Only"
              size="small"
              ?checked=${this.search.wholeWords}
              @change=${() => { this.search.wholeWords = !this.search.wholeWords; this.requestUpdate(); }}
            />
          </div>
        </ag-fieldset>

        <div class="mbe4">
          <h2>CSS Shadow Parts Customization</h2>
          <p class="mbs2 mbe3">
            Use CSS Shadow Parts to customize the component's appearance:
            <code>::part(ag-fieldset)</code>,
            <code>::part(ag-legend)</code>,
            <code>::part(ag-content)</code>
          </p>
        </div>
        <div class="mbe6">
          <ag-fieldset
            legend="Minimal Accent Border"
            bordered
            class="custom-fieldset-1 mbe4"
          >
            <ag-input
              .value=${this.custom.field1}
              @input=${(e) => { this.custom.field1 = e.target.value; this.requestUpdate(); }}
              label="Email Address"
              type="email"
              placeholder="you@company.com"
              class="mbe3"
            />
            <ag-input
              .value=${this.custom.field2}
              @input=${(e) => { this.custom.field2 = e.target.value; this.requestUpdate(); }}
              label="Department"
              placeholder="Engineering"
            />
          </ag-fieldset>

          <ag-fieldset
            legend="Subtle Card Style"
            bordered
            class="custom-fieldset-2"
          >
            <ag-input
              .value=${this.custom.field3}
              @input=${(e) => { this.custom.field3 = e.target.value; this.requestUpdate(); }}
              label="Project Name"
              placeholder="Q4 Marketing Campaign"
              class="mbe3"
            />
            <ag-input
              .value=${this.custom.field4}
              @input=${(e) => { this.custom.field4 = e.target.value; this.requestUpdate(); }}
              label="Budget"
              placeholder="$50,000"
            />
          </ag-fieldset>
        </div>
      </section>
    `;
  }
}

// Register the custom element
customElements.define('fieldset-lit-examples', FieldsetLitExamples);
