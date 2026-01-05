import { useState } from "react";
import { ReactFieldset } from "agnosticui-core/fieldset/react";
import { ReactInput } from "agnosticui-core/input/react";
import { ReactRadio } from "agnosticui-core/radio/react";
import { ReactCheckbox } from "agnosticui-core/checkbox/react";
import { ReactButton } from "agnosticui-core/button/react";
import {
  Search,
  CreditCard,
  Mail,
  Phone,
  MapPin,
  User,
  Building2,
  Calendar,
} from "lucide-react";

export default function FieldsetReactExamples() {
  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Shipping Address
  const [address, setAddress] = useState({
    street: "",
    city: "",
    zip: "",
    country: "",
  });

  // Contact Method
  const [contactMethod, setContactMethod] = useState("email");

  // Notifications
  const [notifications, setNotifications] = useState({
    productUpdates: true,
    newsletter: false,
    specialOffers: true,
    securityAlerts: true,
  });

  // Date of Birth
  const [dateOfBirth, setDateOfBirth] = useState({
    month: "",
    day: "",
    year: "",
  });

  // Search
  const [search, setSearch] = useState({
    query: "",
    caseSensitive: false,
    wholeWords: false,
  });

  // Account Settings
  const [account, setAccount] = useState({
    username: "",
    displayName: "",
    privacy: {
      profilePublic: true,
      activityVisible: true,
      searchable: false,
    },
  });

  // Payment Information
  const [payment, setPayment] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
    billingZip: "",
  });

  const [paymentErrors, setPaymentErrors] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  // Sizes
  const [sizes, setSizes] = useState({
    smallName: "",
    defaultName: "",
    largeName: "",
  });

  // Custom
  const [custom, setCustom] = useState({
    field1: "",
    field2: "",
    field3: "",
    field4: "",
  });

  const validateCardNumber = () => {
    const cleaned = payment.cardNumber.replace(/\s/g, "");
    if (cleaned && cleaned.length < 13) {
      setPaymentErrors((prev) => ({
        ...prev,
        cardNumber: "Card number must be at least 13 digits",
      }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, cardNumber: "" }));
    }
  };

  const validateExpiry = () => {
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (payment.expiry && !expiryPattern.test(payment.expiry)) {
      setPaymentErrors((prev) => ({ ...prev, expiry: "Format must be MM/YY" }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, expiry: "" }));
    }
  };

  const validateCVV = () => {
    if (payment.cvv && (payment.cvv.length < 3 || payment.cvv.length > 4)) {
      setPaymentErrors((prev) => ({ ...prev, cvv: "CVV must be 3 or 4 digits" }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, cvv: "" }));
    }
  };

  const validateNameOnCard = () => {
    if (payment.nameOnCard && payment.nameOnCard.length < 2) {
      setPaymentErrors((prev) => ({
        ...prev,
        nameOnCard: "Please enter the name on your card",
      }));
    } else {
      setPaymentErrors((prev) => ({ ...prev, nameOnCard: "" }));
    }
  };

  return (
    <section>
      <style>{`
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
      `}</style>

      <div className="mbe4">
        <h2>Basic Fieldset</h2>
        <p className="mbs2 mbe3">Group related form controls with a descriptive legend</p>
      </div>
      <ReactFieldset legend="Personal Information" className="mbe6">
        <ReactInput
          value={personalInfo.firstName}
          onInput={(e) => setPersonalInfo({ ...personalInfo, firstName: e.target.value })}
          label="First Name"
          placeholder="John"
          className="mbe3"
        >
          <User size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <ReactInput
          value={personalInfo.lastName}
          onInput={(e) => setPersonalInfo({ ...personalInfo, lastName: e.target.value })}
          label="Last Name"
          placeholder="Doe"
          className="mbe3"
        >
          <User size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <ReactInput
          value={personalInfo.email}
          onInput={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
          label="Email"
          type="email"
          placeholder="john.doe@example.com"
          className="mbe3"
        >
          <Mail size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <ReactInput
          value={personalInfo.phone}
          onInput={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
          label="Phone Number"
          type="tel"
          placeholder="(555) 123-4567"
        >
          <Phone size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Bordered Fieldset</h2>
        <p className="mbs2 mbe3">Add visual borders and padding for better content grouping</p>
      </div>
      <ReactFieldset legend="Shipping Address" bordered className="mbe6">
        <ReactInput
          value={address.street}
          onInput={(e) => setAddress({ ...address, street: e.target.value })}
          label="Street Address"
          placeholder="123 Main St"
          className="mbe3"
        >
          <MapPin size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <div
          className="mbe3"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--ag-space-3)" }}
        >
          <ReactInput
            value={address.city}
            onInput={(e) => setAddress({ ...address, city: e.target.value })}
            label="City"
            placeholder="San Francisco"
          >
            <Building2 size={18} color="var(--ag-secondary)" slot="addon-left" />
          </ReactInput>
          <ReactInput
            value={address.zip}
            onInput={(e) => setAddress({ ...address, zip: e.target.value })}
            label="ZIP Code"
            placeholder="94102"
          />
        </div>
        <ReactInput
          value={address.country}
          onInput={(e) => setAddress({ ...address, country: e.target.value })}
          label="Country"
          placeholder="United States"
        >
          <MapPin size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Radio Button Group</h2>
        <p className="mbs2 mbe3">Use fieldset to group related radio button choices</p>
      </div>
      <ReactFieldset legend="Preferred Contact Method" bordered className="mbe6">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ag-space-3)" }}>
          <ReactRadio
            name="contact-method"
            value="email"
            labelText="Email"
            checked={contactMethod === "email"}
            onChange={() => setContactMethod("email")}
          />
          <ReactRadio
            name="contact-method"
            value="phone"
            labelText="Phone"
            checked={contactMethod === "phone"}
            onChange={() => setContactMethod("phone")}
          />
          <ReactRadio
            name="contact-method"
            value="sms"
            labelText="Text Message (SMS)"
            checked={contactMethod === "sms"}
            onChange={() => setContactMethod("sms")}
          />
          <ReactRadio
            name="contact-method"
            value="mail"
            labelText="Postal Mail"
            checked={contactMethod === "mail"}
            onChange={() => setContactMethod("mail")}
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Checkbox Group</h2>
        <p className="mbs2 mbe3">Group multiple checkboxes for selecting multiple options</p>
      </div>
      <ReactFieldset legend="Notification Preferences" bordered className="mbe6">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ag-space-3)" }}>
          <ReactCheckbox
            name="notifications"
            value="product-updates"
            labelText="Product Updates"
            checked={notifications.productUpdates}
            onChange={() =>
              setNotifications({ ...notifications, productUpdates: !notifications.productUpdates })
            }
          />
          <ReactCheckbox
            name="notifications"
            value="newsletter"
            labelText="Weekly Newsletter"
            checked={notifications.newsletter}
            onChange={() =>
              setNotifications({ ...notifications, newsletter: !notifications.newsletter })
            }
          />
          <ReactCheckbox
            name="notifications"
            value="special-offers"
            labelText="Special Offers & Promotions"
            checked={notifications.specialOffers}
            onChange={() =>
              setNotifications({ ...notifications, specialOffers: !notifications.specialOffers })
            }
          />
          <ReactCheckbox
            name="notifications"
            value="security-alerts"
            labelText="Security Alerts"
            checked={notifications.securityAlerts}
            onChange={() =>
              setNotifications({ ...notifications, securityAlerts: !notifications.securityAlerts })
            }
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Horizontal Layout</h2>
        <p className="mbs2 mbe3">Arrange form controls horizontally with flexible wrapping</p>
      </div>
      <ReactFieldset legend="Date of Birth" bordered layout="horizontal" className="mbe6">
        <ReactInput
          value={dateOfBirth.month}
          onInput={(e) => setDateOfBirth({ ...dateOfBirth, month: e.target.value })}
          label="Month"
          placeholder="MM"
          size="small"
          style={{ width: "80px" }}
        />
        <ReactInput
          value={dateOfBirth.day}
          onInput={(e) => setDateOfBirth({ ...dateOfBirth, day: e.target.value })}
          label="Day"
          placeholder="DD"
          size="small"
          style={{ width: "80px" }}
        />
        <ReactInput
          value={dateOfBirth.year}
          onInput={(e) => setDateOfBirth({ ...dateOfBirth, year: e.target.value })}
          label="Year"
          placeholder="YYYY"
          size="small"
          style={{ width: "100px" }}
        />
      </ReactFieldset>

      <div className="mbe4">
        <h2>Visually Hidden Legend</h2>
        <p className="mbs2 mbe3">Hide legend visually while keeping it accessible to screen readers</p>
      </div>
      <ReactFieldset legend="Search Options" bordered legendHidden className="mbe6">
        <ReactInput
          value={search.query}
          onInput={(e) => setSearch({ ...search, query: e.target.value })}
          label="Search Query"
          placeholder="Enter search terms..."
          className="mbe3"
        >
          <Search size={18} color="var(--ag-secondary)" slot="addon-left" />
        </ReactInput>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--ag-space-2)" }}>
          <ReactCheckbox
            name="search-options"
            value="case-sensitive"
            labelText="Case Sensitive"
            size="small"
            checked={search.caseSensitive}
            onChange={() => setSearch({ ...search, caseSensitive: !search.caseSensitive })}
          />
          <ReactCheckbox
            name="search-options"
            value="whole-words"
            labelText="Match Whole Words Only"
            size="small"
            checked={search.wholeWords}
            onChange={() => setSearch({ ...search, wholeWords: !search.wholeWords })}
          />
        </div>
      </ReactFieldset>

      <div className="mbe4">
        <h2>Complete Checkout Form</h2>
        <p className="mbs2 mbe3">Realistic payment form with validation and action buttons</p>
      </div>
      <div className="mbe6">
        <ReactFieldset legend="Payment Information" bordered className="mbe4">
          <ReactInput
            value={payment.cardNumber}
            onInput={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            required
            invalid={!!paymentErrors.cardNumber}
            errorMessage={paymentErrors.cardNumber}
            onBlur={validateCardNumber}
            className="mbe3"
          >
            <CreditCard
              size={18}
              color={paymentErrors.cardNumber ? "var(--ag-error)" : "var(--ag-secondary)"}
              slot="addon-left"
            />
          </ReactInput>
          <div
            className="mbe3"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--ag-space-3)" }}
          >
            <ReactInput
              value={payment.expiry}
              onInput={(e) => setPayment({ ...payment, expiry: e.target.value })}
              label="Expiry Date"
              placeholder="MM/YY"
              required
              invalid={!!paymentErrors.expiry}
              errorMessage={paymentErrors.expiry}
              onBlur={validateExpiry}
            >
              <Calendar size={18} color="var(--ag-secondary)" slot="addon-left" />
            </ReactInput>
            <ReactInput
              value={payment.cvv}
              onInput={(e) => setPayment({ ...payment, cvv: e.target.value })}
              label="CVV"
              type="password"
              placeholder="123"
              required
              invalid={!!paymentErrors.cvv}
              errorMessage={paymentErrors.cvv}
              onBlur={validateCVV}
            />
          </div>
          <ReactInput
            value={payment.nameOnCard}
            onInput={(e) => setPayment({ ...payment, nameOnCard: e.target.value })}
            label="Name on Card"
            placeholder="John Doe"
            required
            invalid={!!paymentErrors.nameOnCard}
            errorMessage={paymentErrors.nameOnCard}
            onBlur={validateNameOnCard}
            className="mbe3"
          >
            <User size={18} color="var(--ag-secondary)" slot="addon-left" />
          </ReactInput>
          <ReactInput
            value={payment.billingZip}
            onInput={(e) => setPayment({ ...payment, billingZip: e.target.value })}
            label="Billing ZIP Code"
            placeholder="94102"
            required
          >
            <MapPin size={18} color="var(--ag-secondary)" slot="addon-left" />
          </ReactInput>
        </ReactFieldset>

        <div style={{ display: "flex", gap: "var(--ag-space-3)", justifyContent: "flex-end" }}>
          <ReactButton bordered shape="rounded">
            ← Back to Cart
          </ReactButton>
          <ReactButton variant="primary" shape="rounded">
            Complete Purchase
          </ReactButton>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the component's appearance:
          <code>::part(ag-fieldset)</code>,
          <code>::part(ag-legend)</code>,
          <code>::part(ag-content)</code>
        </p>
      </div>
      <div className="mbe6">
        <ReactFieldset legend="Minimal Accent Border" bordered className="custom-fieldset-1 mbe4">
          <ReactInput
            value={custom.field1}
            onInput={(e) => setCustom({ ...custom, field1: e.target.value })}
            label="Email Address"
            type="email"
            placeholder="you@company.com"
            className="mbe3"
          />
          <ReactInput
            value={custom.field2}
            onInput={(e) => setCustom({ ...custom, field2: e.target.value })}
            label="Department"
            placeholder="Engineering"
          />
        </ReactFieldset>

        <ReactFieldset legend="Subtle Card Style" bordered className="custom-fieldset-2">
          <ReactInput
            value={custom.field3}
            onInput={(e) => setCustom({ ...custom, field3: e.target.value })}
            label="Project Name"
            placeholder="Q4 Marketing Campaign"
            className="mbe3"
          />
          <ReactInput
            value={custom.field4}
            onInput={(e) => setCustom({ ...custom, field4: e.target.value })}
            label="Budget"
            placeholder="$50,000"
          />
        </ReactFieldset>
      </div>
    </section>
  );
}
