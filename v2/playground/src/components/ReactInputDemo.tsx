import React, { useEffect, useState } from "react";
import { ReactInput } from "agnosticui-core/react";

// Import web components to ensure they're registered
import "agnosticui-core";

export default function ReactInputDemo() {
  const [isReady, setIsReady] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");

  useEffect(() => {
    // Wait for web components to be defined before rendering
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined("ag-input"),
        ]);
        console.log("Web components are ready for React wrappers!");
        setIsReady(true);
      } catch (error) {
        console.error("Error waiting for web components:", error);
        // Fall back to rendering anyway after a short delay
        setTimeout(() => setIsReady(true), 1000);
      }
    };

    waitForComponents();
  }, []);

  const handleInput = (event: Event) => {
    // Get value from the actual input element inside the web component
    const webComponent = event.target as any;
    const inputElement = webComponent.shadowRoot?.querySelector('input, textarea');
    const currentValue = inputElement?.value || webComponent.value || '(no value)';
    console.log("📝 Input changed:", currentValue);
  };

  const handleChange = (event: Event) => {
    const webComponent = event.target as any;
    const inputElement = webComponent.shadowRoot?.querySelector('input, textarea');
    const currentValue = inputElement?.value || webComponent.value || '(no value)';
    console.log("✅ Input change event:", currentValue);
  };

  const handleFocus = (event: Event) => {
    const webComponent = event.target as any;
    const inputElement = webComponent.shadowRoot?.querySelector('input, textarea');
    const currentValue = inputElement?.value || webComponent.value || '(empty)';
    console.log("🎯 Input focused - current value:", currentValue);
  };

  const handleBlur = (event: Event) => {
    const webComponent = event.target as any;
    const inputElement = webComponent.shadowRoot?.querySelector('input, textarea');
    const currentValue = inputElement?.value || webComponent.value || '(empty)';
    console.log("👋 Input blurred - final value:", currentValue);
  };

  if (!isReady) {
    return (
      <div style={{ padding: "1rem", color: "#666" }}>
        Loading React Input components...
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h3>React Input Wrapper Examples</h3>

      <div style={{ display: "grid", gap: "2rem", maxWidth: "600px" }}>

        <div>
          <h4>Basic Input Types <span style={{ fontSize: "0.75rem", color: "var(--ag-primary)", fontWeight: "normal" }}>⚡ Event Logging</span></h4>
          <p style={{ fontSize: "0.875rem", color: "var(--c-text-light)", margin: "0 0 1rem 0", padding: "0.5rem", backgroundColor: "var(--c-bg-secondary)", borderRadius: "4px", border: "1px solid var(--c-border)" }}>
            💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see input, change, focus, and blur events from these React wrapper examples.
            <button onClick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract input values from shadow DOM, handle different input types, and work with React event handlers for web components!')} style={{ color: "var(--ag-primary)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Click here</button> for event debugging tips!
          </p>
          <div style={{ display: "grid", gap: "1rem" }}>
            <ReactInput
              label="Text Input"
              type="text"
              value={inputValue}
              onInput={handleInput}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <ReactInput
              label="Email Input"
              type="email"
              value={emailValue}
              onInput={handleInput}
              placeholder="Enter your email"
            />

            <ReactInput
              label="Password Input"
              type="password"
              placeholder="Enter password"
              onInput={handleInput}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />

            <ReactInput
              label="Number Input"
              type="number"
              placeholder="Enter a number"
              onInput={handleInput}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
        </div>

        <div>
          <h4>Label Variations</h4>
          <div style={{ display: "grid", gap: "1rem" }}>
            <ReactInput
              label="Visible Label"
              type="text"
              placeholder="Standard label above"
            />

            <ReactInput
              label="Hidden Label"
              labelHidden={true}
              type="text"
              placeholder="Label is hidden but accessible"
            />

            <ReactInput
              noLabel={true}
              ariaLabel="Input with aria-label"
              type="text"
              placeholder="No visual label, aria-label only"
            />
          </div>
        </div>

        <div>
          <h4>Input States</h4>
          <div style={{ display: "grid", gap: "1rem" }}>
            <ReactInput
              label="Required Input"
              type="text"
              required={true}
              placeholder="This field is required"
            />

            <ReactInput
              label="Disabled Input"
              type="text"
              disabled={true}
              value="This input is disabled"
            />

            <ReactInput
              label="Readonly Input"
              type="text"
              readonly={true}
              value="This input is readonly"
            />

            <ReactInput
              label="Invalid Input"
              type="text"
              invalid={true}
              errorMessage="This field has an error"
              value="Invalid value"
            />
          </div>
        </div>

        <div>
          <h4>Size Variants</h4>
          <div style={{ display: "grid", gap: "1rem" }}>
            <ReactInput
              label="Small Input"
              type="text"
              size="small"
              placeholder="Small size"
            />

            <ReactInput
              label="Default Input"
              type="text"
              size="default"
              placeholder="Default size"
            />

            <ReactInput
              label="Large Input"
              type="text"
              size="large"
              placeholder="Large size"
            />
          </div>
        </div>

        <div>
          <h4>Textarea Mode</h4>
          <ReactInput
            label="Textarea Input"
            type="textarea"
            rows={4}
            value={textareaValue}
            onInput={handleInput}
            placeholder="Enter multiple lines of text..."
          />
        </div>

        <div>
          <h4>Help Text and Validation</h4>
          <div style={{ display: "grid", gap: "1rem" }}>
            <ReactInput
              label="Input with Help Text"
              type="text"
              helpText="This text provides additional context about the field"
              placeholder="Enter some text"
            />

            <ReactInput
              label="Input with Error"
              type="email"
              invalid={true}
              errorMessage="Please enter a valid email address"
              value="invalid-email"
            />
          </div>
        </div>

        <div>
          <h4>Styling Variants</h4>
          <div style={{ display: "grid", gap: "1rem" }}>
            <ReactInput
              label="Rounded Input"
              type="text"
              isRounded={true}
              placeholder="Rounded corners"
            />

            <ReactInput
              label="Underlined Input"
              type="text"
              isUnderlined={true}
              placeholder="Underlined style"
            />

            <ReactInput
              label="Inline Input"
              type="text"
              isInline={true}
              placeholder="Inline style"
            />
          </div>
        </div>

      </div>

    </div>
  );
}