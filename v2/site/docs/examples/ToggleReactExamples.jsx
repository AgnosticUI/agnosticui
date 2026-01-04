import { useState } from "react";
import { ReactToggle } from "agnosticui-core/toggle/react";
import { ReactButton } from "agnosticui-core/button/react";

export default function ToggleReactExamples() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [formData, setFormData] = useState({
    newsletter: false,
    name: "",
    value: "",
  });

  const handleToggleChange = (event) => {
    setNotificationsEnabled(event.checked);
    console.log("Toggle changed:", event);
  };

  const handleFormToggle = (event) => {
    setFormData({
      newsletter: event.checked,
      name: event.name,
      value: event.value,
    });
    console.log("Form toggle changed:", event);
  };
  
  const customToggleStyles = `
    <style>
      .custom-toggle::part(ag-toggle-button) {
        border: 2px solid var(--ag-coral-50);
        border-radius: 9999px;
        padding: var(--ag-space-2) var(--ag-space-3);
      }
      .custom-toggle::part(ag-toggle-track) {
        background-color: #f0f0f0;
      }
      .custom-toggle::part(ag-toggle-handle) {
        background-color: var(--ag-coral-200);
        border: 2px solid #fff;
        box-shadow: 0 0 5px var(--ag-coral-200);
      }
      .custom-toggle[checked]::part(ag-toggle-track) {
        background-color:var(--ag-coral-300);
      }
      .custom-toggle[checked]::part(ag-toggle-handle) {
        background-color: #fff;
      }
    </style>
  `;

  return (
    <section>
      <div className="mbe2">
        <h2>Default Toggles</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactToggle label="Default toggle" />
        <ReactToggle
          label="Checked by default"
          checked={true}
        />
        <ReactToggle
          label="Disabled"
          disabled
        />
        <ReactToggle
          label="Disabled and checked"
          checked={true}
          disabled
        />
      </div>

      <div className="mbe2">
        <h2>Sizes</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactToggle
          label="Extra small"
          size="xs"
        />
        <ReactToggle
          label="Small"
          size="sm"
        />
        <ReactToggle
          label="Medium (default)"
          size="md"
        />
        <ReactToggle
          label="Large"
          size="lg"
        />
        <ReactToggle
          label="Extra large"
          size="xl"
        />
      </div>

      <div className="mbe2">
        <h2>Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactToggle
          label="Default variant"
          checked={true}
        />
        <ReactToggle
          label="Success"
          variant="success"
          checked={true}
        />
        <ReactToggle
          label="Warning"
          variant="warning"
          checked={true}
        />
        <ReactToggle
          label="Danger"
          variant="danger"
          checked={true}
        />
        <ReactToggle
          label="Monochrome"
          variant="monochrome"
          checked={true}
        />
      </div>

      <div className="mbe2">
        <h2>Interactive Examples</h2>
        <p className="mbs2 mbe3">
          Demonstrates event handling with onToggleChange.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <div>
          <ReactToggle
            label="Notifications (onToggleChange)"
            checked={notificationsEnabled}
            onToggleChange={handleToggleChange}
          />
          <p style={{ marginTop: "0.5rem" }}>
            Notifications: <strong>{notificationsEnabled ? 'Enabled' : 'Disabled'}</strong>
          </p>
        </div>
        <div>
          <ReactToggle
            label="Dark Mode"
            checked={darkModeEnabled}
            onToggleChange={(e) => setDarkModeEnabled(e.checked)}
          />
          <p style={{ marginTop: "0.5rem" }}>
            Dark mode: <strong>{darkModeEnabled ? 'On' : 'Off'}</strong>
          </p>
        </div>
        <div>
          <ReactToggle
            label="Newsletter Subscription"
            name="newsletter"
            value="subscribed"
            checked={formData.newsletter}
            onToggleChange={handleFormToggle}
          />
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "var(--ag-text-secondary)" }}>
            Form data: name="{formData.name}", value="{formData.value}", checked={String(formData.newsletter)}
          </p>
        </div>
      </div>
      <div className="mbe4 flex justify-center">
        <ReactButton
          onClick={() => setDarkModeEnabled(!darkModeEnabled)}
          mode="primary"
          size="small"
        >
          Toggle above programmatically
        </ReactButton>
      </div>

      <div className="mbe4">
        <h2>Labels, Helper Text, and Validation</h2>
        <p className="mbs2 mbe3">
          The Toggle component supports labels, helper text, required fields, and validation states.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: "600px" }}
      >
        <div className="mbe3">
          <ReactToggle label="Enable notifications" />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Dark mode"
            helpText="Reduces eye strain in low-light environments"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Two-factor authentication"
            required={true}
            helpText="This setting is required for account security"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Email notifications"
            required={true}
            invalid={true}
            errorMessage="You must enable email notifications to continue"
          />
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>labelPosition</code>: 'top' (default), 'start', 'end', or 'bottom'.
        </p>
      </div>
      <div
        className="mbe4"
        style={{ maxWidth: "600px" }}
      >
        <div className="mbe3">
          <ReactToggle
            label="Top Label (Default)"
            labelPosition="top"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Start Position"
            labelPosition="start"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="End Position"
            labelPosition="end"
          />
        </div>

        <div className="mbe3">
          <ReactToggle
            label="Bottom Position"
            labelPosition="bottom"
            helpText="Bottom label position for alternative layouts"
          />
        </div>
      </div>

      <div className="mbe2">
        <h2>CSS Shadow Parts Customization</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <div dangerouslySetInnerHTML={{ __html: customToggleStyles }}></div>
        <ReactToggle
          className="custom-toggle"
          label="Customized Toggle"
          checked={true}
        />
      </div>
    </section>
  );
}
