<template>
  <section>
    <div class="mbe4">
      <h3>Basic Fieldset</h3>
      <p class="mbs2 mbe3">Group related form controls with a descriptive legend</p>
    </div>
    <VueFieldset
      legend="Personal Information"
      class="mbe6"
    >
      <VueInput
        v-model:value="personalInfo.firstName"
        label="First Name"
        placeholder="John"
        class="mbe3"
      >
        <template #addon-left>
          <User
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <VueInput
        v-model:value="personalInfo.lastName"
        label="Last Name"
        placeholder="Doe"
        class="mbe3"
      >
        <template #addon-left>
          <User
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <VueInput
        v-model:value="personalInfo.email"
        label="Email"
        type="email"
        placeholder="john.doe@example.com"
        class="mbe3"
      >
        <template #addon-left>
          <Mail
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <VueInput
        v-model:value="personalInfo.phone"
        label="Phone Number"
        type="tel"
        placeholder="(555) 123-4567"
      >
        <template #addon-left>
          <Phone
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
    </VueFieldset>

    <div class="mbe4">
      <h3>Bordered Fieldset</h3>
      <p class="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
    </div>
    <VueFieldset
      legend="Shipping Address"
      :bordered="true"
      class="mbe6"
    >
      <VueInput
        v-model:value="address.street"
        label="Street Address"
        placeholder="123 Main St"
        class="mbe3"
      >
        <template #addon-left>
          <MapPin
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <div
        class="mbe3"
        style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--ag-space-3);"
      >
        <VueInput
          v-model:value="address.city"
          label="City"
          placeholder="San Francisco"
        >
          <template #addon-left>
            <Building2
              :size="18"
              color="var(--ag-secondary)"
            />
          </template>
        </VueInput>
        <VueInput
          v-model:value="address.zip"
          label="ZIP Code"
          placeholder="94102"
        />
      </div>
      <VueInput
        v-model:value="address.country"
        label="Country"
        placeholder="United States"
      >
        <template #addon-left>
          <MapPin
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
    </VueFieldset>

    <div class="mbe4">
      <h3>Radio Button Group</h3>
      <p class="mbs2 mbe3">Use fieldset to group related radio button choices</p>
    </div>
    <VueFieldset
      legend="Preferred Contact Method"
      :bordered="true"
      class="mbe6"
    >
      <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
        <VueRadio
          name="contact-method"
          value="email"
          label-text="Email"
          :checked="contactMethod === 'email'"
          @change="contactMethod = 'email'"
        />
        <VueRadio
          name="contact-method"
          value="phone"
          label-text="Phone"
          :checked="contactMethod === 'phone'"
          @change="contactMethod = 'phone'"
        />
        <VueRadio
          name="contact-method"
          value="sms"
          label-text="Text Message (SMS)"
          :checked="contactMethod === 'sms'"
          @change="contactMethod = 'sms'"
        />
        <VueRadio
          name="contact-method"
          value="mail"
          label-text="Postal Mail"
          :checked="contactMethod === 'mail'"
          @change="contactMethod = 'mail'"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h3>Checkbox Group</h3>
      <p class="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
    </div>
    <VueFieldset
      legend="Notification Preferences"
      :bordered="true"
      class="mbe6"
    >
      <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
        <VueCheckbox
          name="notifications"
          value="product-updates"
          label-text="Product Updates"
          :checked="notifications.productUpdates"
          @change="notifications.productUpdates = !notifications.productUpdates"
        />
        <VueCheckbox
          name="notifications"
          value="newsletter"
          label-text="Weekly Newsletter"
          :checked="notifications.newsletter"
          @change="notifications.newsletter = !notifications.newsletter"
        />
        <VueCheckbox
          name="notifications"
          value="special-offers"
          label-text="Special Offers & Promotions"
          :checked="notifications.specialOffers"
          @change="notifications.specialOffers = !notifications.specialOffers"
        />
        <VueCheckbox
          name="notifications"
          value="security-alerts"
          label-text="Security Alerts"
          :checked="notifications.securityAlerts"
          @change="notifications.securityAlerts = !notifications.securityAlerts"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h3>Horizontal Layout</h3>
      <p class="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
    </div>
    <VueFieldset
      legend="Date of Birth"
      :bordered="true"
      layout="horizontal"
      class="mbe6"
    >
      <VueInput
        v-model:value="dateOfBirth.month"
        label="Month"
        placeholder="MM"
        size="small"
        style="width: 80px;"
      />
      <VueInput
        v-model:value="dateOfBirth.day"
        label="Day"
        placeholder="DD"
        size="small"
        style="width: 80px;"
      />
      <VueInput
        v-model:value="dateOfBirth.year"
        label="Year"
        placeholder="YYYY"
        size="small"
        style="width: 100px;"
      />
    </VueFieldset>

    <div class="mbe4">
      <h3>Visually Hidden Legend</h3>
      <p class="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
    </div>
    <VueFieldset
      legend="Search Options"
      :bordered="true"
      :legend-hidden="true"
      class="mbe6"
    >
      <VueInput
        v-model:value="search.query"
        label="Search Query"
        placeholder="Enter search terms..."
        class="mbe3"
      >
        <template #addon-left>
          <Search
            :size="18"
            color="var(--ag-secondary)"
          />
        </template>
      </VueInput>
      <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
        <VueCheckbox
          name="search-options"
          value="case-sensitive"
          label-text="Case Sensitive"
          size="small"
          :checked="search.caseSensitive"
          @change="search.caseSensitive = !search.caseSensitive"
        />
        <VueCheckbox
          name="search-options"
          value="whole-words"
          label-text="Match Whole Words Only"
          size="small"
          :checked="search.wholeWords"
          @change="search.wholeWords = !search.wholeWords"
        />
      </div>
    </VueFieldset>

    <div class="mbe4">
      <h3>Nested Fieldsets</h3>
      <p class="mbs2 mbe3">Organize complex forms with nested groupings and action buttons</p>
    </div>
    <div class="mbe6">
      <VueFieldset
        legend="Account Settings"
        :bordered="true"
        class="mbe4"
      >
        <VueFieldset
          legend="Profile"
          class="mbe4"
        >
          <VueInput
            v-model:value="account.username"
            label="Username"
            placeholder="johndoe"
            class="mbe3"
          >
            <template #addon-left>
              <User
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueInput
            v-model:value="account.displayName"
            label="Display Name"
            placeholder="John Doe"
          >
            <template #addon-left>
              <User
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
        </VueFieldset>

        <VueFieldset
          legend="Privacy Settings"
          class="mbe4"
        >
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-3);">
            <VueCheckbox
              name="privacy"
              value="profile-public"
              label-text="Make Profile Public"
              :checked="account.privacy.profilePublic"
              @change="account.privacy.profilePublic = !account.privacy.profilePublic"
            />
            <VueCheckbox
              name="privacy"
              value="activity-visible"
              label-text="Show Activity to Followers"
              :checked="account.privacy.activityVisible"
              @change="account.privacy.activityVisible = !account.privacy.activityVisible"
            />
            <VueCheckbox
              name="privacy"
              value="searchable"
              label-text="Allow Search Engines to Index Profile"
              :checked="account.privacy.searchable"
              @change="account.privacy.searchable = !account.privacy.searchable"
            />
          </div>
        </VueFieldset>

        <VueFieldset
          legend="Danger Zone"
          class="mbe4"
        >
          <p style="color: var(--ag-text-secondary); font-size: 0.875rem; margin-bottom: var(--ag-space-3);">
            Permanently delete your account and all associated data. This action cannot be undone.
          </p>
          <VueButton
            :bordered="true"
            variant="danger"
            shape="rounded"
            size="sm"
          >
            Delete Account
          </VueButton>
        </VueFieldset>
      </VueFieldset>

      <div style="display: flex; gap: var(--ag-space-3); justify-content: space-between;">
        <VueButton
          :bordered="true"
          shape="rounded"
        >
          Cancel
        </VueButton>
        <div style="display: flex; gap: var(--ag-space-3);">
          <VueButton
            :bordered="true"
            shape="rounded"
            class="monochrome-button"
          >
            Reset to Default
          </VueButton>
          <VueButton
            shape="rounded"
            class="monochrome-button-filled"
          >
            Save Changes
          </VueButton>
        </div>
      </div>
    </div>

    <div class="mbe4">
      <h3>Complete Checkout Form</h3>
      <p class="mbs2 mbe3">Realistic payment form with validation and action buttons</p>
    </div>
    <div class="mbe6">
      <VueFieldset
        legend="Payment Information"
        :bordered="true"
        class="mbe4"
      >
        <VueInput
          v-model:value="payment.cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          :required="true"
          :invalid="!!paymentErrors.cardNumber"
          :error-message="paymentErrors.cardNumber"
          @blur="validateCardNumber"
          class="mbe3"
        >
          <template #addon-left>
            <CreditCard
              :size="18"
              :color="paymentErrors.cardNumber ? 'var(--ag-error)' : 'var(--ag-secondary)'"
            />
          </template>
        </VueInput>
        <div
          class="mbe3"
          style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--ag-space-3);"
        >
          <VueInput
            v-model:value="payment.expiry"
            label="Expiry Date"
            placeholder="MM/YY"
            :required="true"
            :invalid="!!paymentErrors.expiry"
            :error-message="paymentErrors.expiry"
            @blur="validateExpiry"
          >
            <template #addon-left>
              <Calendar
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueInput
            v-model:value="payment.cvv"
            label="CVV"
            type="password"
            placeholder="123"
            :required="true"
            :invalid="!!paymentErrors.cvv"
            :error-message="paymentErrors.cvv"
            @blur="validateCVV"
          />
        </div>
        <VueInput
          v-model:value="payment.nameOnCard"
          label="Name on Card"
          placeholder="John Doe"
          :required="true"
          :invalid="!!paymentErrors.nameOnCard"
          :error-message="paymentErrors.nameOnCard"
          @blur="validateNameOnCard"
          class="mbe3"
        >
          <template #addon-left>
            <User
              :size="18"
              color="var(--ag-secondary)"
            />
          </template>
        </VueInput>
        <VueInput
          v-model:value="payment.billingZip"
          label="Billing ZIP Code"
          placeholder="94102"
          :required="true"
        >
          <template #addon-left>
            <MapPin
              :size="18"
              color="var(--ag-secondary)"
            />
          </template>
        </VueInput>
      </VueFieldset>

      <div style="display: flex; gap: var(--ag-space-3); justify-content: flex-end;">
        <VueButton
          :bordered="true"
          shape="rounded"
        >
          ← Back to Cart
        </VueButton>
        <VueButton
          variant="primary"
          shape="rounded"
        >
          Complete Purchase
        </VueButton>
      </div>
    </div>

    <div class="mbe4">
      <h3>Compact Forms with Small Components</h3>
      <p class="mbs2 mbe3">Create compact UIs with small inputs, buttons, and fieldsets</p>
    </div>
    <div
      style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--ag-space-4);"
      class="mbe6"
    >
      <div>
        <VueFieldset
          legend="Quick Filter"
          :bordered="true"
          class="mbe3"
        >
          <VueInput
            v-model:value="sizes.smallName"
            label="Search"
            size="small"
            placeholder="Type to search..."
            class="mbe2"
          >
            <template #addon-left>
              <Search
                :size="16"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <div style="display: flex; flex-direction: column; gap: var(--ag-space-2);">
            <VueCheckbox
              name="small-filter"
              value="active"
              label-text="Active only"
              size="small"
            />
            <VueCheckbox
              name="small-filter"
              value="recent"
              label-text="Recent"
              size="small"
              :checked="true"
            />
          </div>
        </VueFieldset>
        <div style="display: flex; gap: var(--ag-space-2); justify-content: flex-end;">
          <VueButton
            :bordered="true"
            size="sm"
            shape="rounded"
          >
            Clear
          </VueButton>
          <VueButton
            size="sm"
            shape="rounded"
          >
            Apply
          </VueButton>
        </div>
      </div>

      <div>
        <VueFieldset
          legend="Email Preferences"
          :bordered="true"
          class="mbe3"
        >
          <VueInput
            v-model:value="sizes.defaultName"
            label="Email Address"
            placeholder="you@example.com"
            class="mbe3"
          >
            <template #addon-left>
              <Mail
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueCheckbox
            name="default-agree"
            value="agree"
            label-text="Send me product updates"
          />
        </VueFieldset>
        <div style="display: flex; gap: var(--ag-space-2); justify-content: flex-end;">
          <VueButton
            :bordered="true"
            shape="rounded"
          >
            Unsubscribe
          </VueButton>
          <VueButton
            variant="success"
            shape="rounded"
          >
            Subscribe
          </VueButton>
        </div>
      </div>

      <div>
        <VueFieldset
          legend="Confirmation"
          :bordered="true"
          class="mbe3"
        >
          <VueInput
            v-model:value="sizes.largeName"
            label="Full Name"
            size="default"
            placeholder="Enter your name"
            class="mbe3"
          >
            <template #addon-left>
              <User
                :size="18"
                color="var(--ag-secondary)"
              />
            </template>
          </VueInput>
          <VueCheckbox
            name="large-agree"
            value="agree"
            label-text="I understand and agree to the terms"
            size="medium"
          />
        </VueFieldset>
        <VueButton
          size="md"
          shape="rounded"
          class="monochrome-button-filled"
        >
          Confirm & Continue
        </VueButton>
      </div>
    </div>

    <div class="mbe4">
      <h3>CSS Shadow Parts Customization</h3>
      <p class="mbs2 mbe3">
        Use CSS Shadow Parts to customize the component's appearance:
        <code>::part(ag-fieldset)</code>,
        <code>::part(ag-legend)</code>,
        <code>::part(ag-content)</code>
      </p>
    </div>
    <div class="mbe6">
      <VueFieldset
        legend="Minimal Accent Border"
        :bordered="true"
        class="custom-fieldset-1 mbe4"
      >
        <VueInput
          v-model:value="custom.field1"
          label="Email Address"
          type="email"
          placeholder="you@company.com"
          class="mbe3"
        />
        <VueInput
          v-model:value="custom.field2"
          label="Department"
          placeholder="Engineering"
        />
      </VueFieldset>

      <VueFieldset
        legend="Subtle Card Style"
        :bordered="true"
        class="custom-fieldset-2"
      >
        <VueInput
          v-model:value="custom.field3"
          label="Project Name"
          placeholder="Q4 Marketing Campaign"
          class="mbe3"
        />
        <VueInput
          v-model:value="custom.field4"
          label="Budget"
          placeholder="$50,000"
        />
      </VueFieldset>
    </div>
  </section>
</template>

<script>
import { VueFieldset } from "agnosticui-core/fieldset/vue";
import VueInput from "agnosticui-core/input/vue";
import { VueRadio } from "agnosticui-core/radio/vue";
import { VueCheckbox } from "agnosticui-core/checkbox/vue";
import VueButton from "agnosticui-core/button/vue";
import {
  Search,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Calendar,
} from "lucide-vue-next";

export default {
  name: "FieldsetExamples",
  components: {
    VueFieldset,
    VueInput,
    VueRadio,
    VueCheckbox,
    VueButton,
    Search,
    CreditCard,
    Mail,
    Phone,
    MapPin,
    User,
    Building2,
    Calendar,
  },
  data() {
    return {
      // Personal Information
      personalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },

      // Shipping Address
      address: {
        street: "",
        city: "",
        zip: "",
        country: "",
      },

      // Contact Method
      contactMethod: "email",

      // Notifications
      notifications: {
        productUpdates: true,
        newsletter: false,
        specialOffers: true,
        securityAlerts: true,
      },

      // Date of Birth
      dateOfBirth: {
        month: "",
        day: "",
        year: "",
      },

      // Search
      search: {
        query: "",
        caseSensitive: false,
        wholeWords: false,
      },

      // Account Settings
      account: {
        username: "",
        displayName: "",
        privacy: {
          profilePublic: true,
          activityVisible: true,
          searchable: false,
        },
      },

      // Payment Information
      payment: {
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: "",
        billingZip: "",
      },
      paymentErrors: {
        cardNumber: "",
        expiry: "",
        cvv: "",
        nameOnCard: "",
      },

      // Sizes
      sizes: {
        smallName: "",
        defaultName: "",
        largeName: "",
      },

      // Custom
      custom: {
        field1: "",
        field2: "",
        field3: "",
        field4: "",
      },
    };
  },
  methods: {
    validateCardNumber() {
      // Simple validation - just check length (real validation would be more complex)
      const cleaned = this.payment.cardNumber.replace(/\s/g, "");
      if (cleaned && cleaned.length < 13) {
        this.paymentErrors.cardNumber =
          "Card number must be at least 13 digits";
      } else {
        this.paymentErrors.cardNumber = "";
      }
    },
    validateExpiry() {
      // Simple MM/YY validation
      const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (this.payment.expiry && !expiryPattern.test(this.payment.expiry)) {
        this.paymentErrors.expiry = "Format must be MM/YY";
      } else {
        this.paymentErrors.expiry = "";
      }
    },
    validateCVV() {
      if (
        this.payment.cvv &&
        (this.payment.cvv.length < 3 || this.payment.cvv.length > 4)
      ) {
        this.paymentErrors.cvv = "CVV must be 3 or 4 digits";
      } else {
        this.paymentErrors.cvv = "";
      }
    },
    validateNameOnCard() {
      if (this.payment.nameOnCard && this.payment.nameOnCard.length < 2) {
        this.paymentErrors.nameOnCard = "Please enter the name on your card";
      } else {
        this.paymentErrors.nameOnCard = "";
      }
    },
  },
};
</script>

<style scoped>
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
  color: var(--ag-primary);
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
