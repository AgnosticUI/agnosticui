
import { ReactSelect } from "agnosticui-core/select/react";
import { useState } from "react";

export default function SelectReactExamples() {
  // Basic example
  const [selectedFruit, setSelectedFruit] = useState("");

  // Multiple example
  const [selectedSports, setSelectedSports] = useState([]);

  // Event logging
  const [eventLog, setEventLog] = useState([]);

  const logEvent = (message) => {
    setEventLog((prev) => [message, ...prev].slice(0, 8));
  };

  const handleEventChange = (e) => {
    logEvent(`onChange - value: ${e.detail.value}`);
  };

  const handleMultipleChange = (e) => {
    setSelectedSports(e.detail.value);
  };

  return (
    <section>
      <div className="mbe4">
        <h2>Basic Select</h2>
        <p className="mbs2 mbe3">
          A standard select dropdown with custom styling.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Greatest Tennis Player"
          name="tennis"
        >
          <option value="">- Select a player -</option>
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </ReactSelect>
      </div>

      <div className="mbe4">
        <h2>Size Variants</h2>
        <p className="mbs2 mbe3">
          The Select component comes in three sizes: small, default, and large.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <div className="mbe3">
          <ReactSelect
            label="Small Select"
            size="small"
            name="small"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Default Select"
            name="default"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Large Select"
            size="large"
            name="large"
          >
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>
      </div>

      <div className="mbe4">
        <h2>Disabled State</h2>
        <p className="mbs2 mbe3">
          Selects can be disabled to prevent user interaction.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Disabled Select"
          disabled
          name="disabled"
        >
          <option value="">Cannot select</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ReactSelect>
      </div>

      <div className="mbe4">
        <h2>Multiple Selection</h2>
        <p className="mbs2 mbe3">
          Enable multiple selection mode with the <code>multiple</code> prop. Use Ctrl/Cmd + Click to select multiple options.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Favorite Tennis Players (Select Multiple)"
          multiple
          multipleSize={6}
          name="multiple"
          onChange={handleMultipleChange}
        >
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </ReactSelect>
        {selectedSports.length > 0 && (
          <p style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)" }}>
            You selected <strong>{selectedSports.length}</strong> sport(s): {selectedSports.join(', ')}
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>With Change Handler</h2>
        <p className="mbs2 mbe3">
          Listen to selection changes with the <code>onChange</code> event.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <ReactSelect
          label="Select a Fruit"
          name="fruit"
          onChange={(e) => setSelectedFruit(e.detail.value)}
        >
          <option value="">Choose a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </ReactSelect>
        {selectedFruit && (
          <p style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)" }}>
            You selected: <strong>{selectedFruit}</strong>
          </p>
        )}
      </div>

      <div className="mbe4">
        <h2>Event Handling</h2>
        <p className="mbs2 mbe3">
          The Select component fires multiple events: <code>onChange</code>, <code>onFocus</code>, <code>onBlur</code>, and <code>onClick</code>.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <ReactSelect
          label="Interact with this select to see events"
          name="events"
          onChange={handleEventChange}
          onFocus={() => logEvent("onFocus")}
          onBlur={() => logEvent("onBlur")}
          onClick={() => logEvent("onClick")}
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </ReactSelect>
        {eventLog.length > 0 && (
          <div style={{ marginTop: "0.75rem", padding: "0.75rem", background: "var(--ag-background-secondary)", borderRadius: "var(--ag-radius-md)" }}>
            <strong>Event Log (most recent first):</strong>
            <div style={{ marginTop: "0.5rem", fontFamily: "monospace", fontSize: "0.875rem", lineHeight: "1.6" }}>
              {eventLog.map((event, index) => (
                <div key={index}>{event}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mbe4">
        <h2>External Label Support</h2>
        <p className="mbs2 mbe3">
          The Select component supports external labels with helper text, required fields, and validation states.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <div className="mbe3">
          <ReactSelect
            label="Favorite Framework"
            name="framework"
          >
            <option value="">Choose a framework</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
            <option value="svelte">Svelte</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Country"
            helpText="Select your country of residence"
            name="country"
          >
            <option value="">Select a country</option>
            <option value="us">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="ca">Canada</option>
            <option value="au">Australia</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Preferred Language"
            required
            helpText="This field is required"
            name="language"
          >
            <option value="">Select a language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Payment Method"
            required
            invalid
            errorMessage="Please select a payment method to continue"
            name="payment"
          >
            <option value="">Select payment method</option>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </ReactSelect>
        </div>
      </div>

      <div className="mbe4">
        <h2>Label Positioning</h2>
        <p className="mbs2 mbe3">
          Control label position with <code>labelPosition</code>: 'top' (default), 'start', 'end', or 'bottom'.
          <strong>Note:</strong> 'bottom' is not recommended as the dropdown will cover the label.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "600px" }}>
        <div className="mbe3">
          <ReactSelect
            label="Top Label (Default)"
            labelPosition="top"
            name="pos-top"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Start Position"
            labelPosition="start"
            name="pos-start"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="End Position"
            labelPosition="end"
            name="pos-end"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>

        <div className="mbe3">
          <ReactSelect
            label="Bottom Position (Not Recommended)"
            labelPosition="bottom"
            name="pos-bottom"
            helpText="The dropdown will cover this label when opened"
          >
            <option value="">Select option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </ReactSelect>
        </div>
      </div>

      <div className="mbe4">
        <h2>CSS Shadow Parts Customization</h2>
        <p className="mbs2 mbe3">
          Use CSS Shadow Parts to customize the select's appearance.
        </p>
      </div>
      <div className="mbe4" style={{ maxWidth: "400px" }}>
        <style dangerouslySetInnerHTML={{__html: `
          .custom-select::part(ag-select) {
            border: 2px solid var(--ag-primary);
            border-radius: var(--ag-radius-lg);
            font-weight: 500;
            background-color: var(--ag-background-secondary);
          }
          .custom-select::part(ag-select):focus {
            border-color: var(--ag-primary-dark);
            box-shadow: 0 0 0 3px var(--ag-blue-100);
          }
        `}} />
        <ReactSelect
          label="Custom Styled Select"
          name="custom"
          className="custom-select"
        >
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
        </ReactSelect>
      </div>
    </section>
  );
}
