import React, { useEffect, useState } from "react";
import { ReactButton } from "agnosticui-core/react";

// Import web components to ensure they're registered
import "agnosticui-core";

export default function ReactButtonDemo() {
  const [isReady, setIsReady] = useState(false);
  const [togglePressed, setTogglePressed] = useState(false);

  useEffect(() => {
    // Wait for web components to be defined before rendering
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined("ag-button"),
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

  const handleClick = (event: Event) => {
    const target = event.target as any;
    const buttonText = target.textContent?.trim() || 'Unknown Button';
    console.log(`Button clicked: "${buttonText}"`, {
      type: target.type || target.getAttribute('type') || 'button',
      disabled: target.disabled,
      variant: target.className || target.getAttribute('variant') || 'default'
    });
  };

  const handleToggle = (detail: { pressed: boolean }) => {
    console.log(`Toggle state changed: ${detail.pressed ? 'PRESSED' : 'NOT PRESSED'}`, detail);
    setTogglePressed(detail.pressed);
  };

  if (!isReady) {
    return (
      <div style={{ padding: "1rem", color: "#666" }}>
        Loading React Button components...
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h3>React Button Wrapper Examples</h3>

      <p style={{ fontSize: "0.875rem", color: "var(--c-text-light)", margin: "0 0 1rem 0", padding: "0.5rem", backgroundColor: "var(--c-bg-secondary)", borderRadius: "4px", border: "1px solid var(--c-border)" }}>
        💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see click and toggle events from all React wrapper examples below.
        <button onClick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract button text, type, disabled state, and other properties from React event handlers!')} style={{ color: "var(--agnostic-primary)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Click here</button> for event debugging tips!
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "1rem 0" }}>
        <ReactButton onClick={handleClick}>
          Default Button
        </ReactButton>

        <ReactButton onClick={handleClick} className="primary">
          Primary Button
        </ReactButton>

        <ReactButton onClick={handleClick} className="secondary">
          Secondary Button
        </ReactButton>

        <ReactButton onClick={handleClick} className="danger">
          Danger Button
        </ReactButton>
      </div>

      <h4>Button Types</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "1rem 0" }}>
        <ReactButton type="button" onClick={handleClick}>
          Button Type
        </ReactButton>

        <ReactButton type="submit" onClick={handleClick} className="primary">
          Submit Type
        </ReactButton>

        <ReactButton type="reset" onClick={handleClick} className="secondary">
          Reset Type
        </ReactButton>
      </div>

      <h4>Button States</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "1rem 0" }}>
        <ReactButton disabled onClick={handleClick}>
          Disabled Button
        </ReactButton>

        <ReactButton loading onClick={handleClick} className="primary">
          Loading Button
        </ReactButton>
      </div>

      <h4>Toggle Functionality</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "1rem 0" }}>
        <ReactButton
          toggle
          pressed={togglePressed}
          onToggle={handleToggle}
        >
          Toggle Button {togglePressed ? "(Pressed)" : "(Not Pressed)"}
        </ReactButton>
      </div>

      <h4>With Icons</h4>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", margin: "1rem 0" }}>
        <ReactButton onClick={handleClick} className="primary">
          <span style={{ marginRight: "0.5rem" }}>📥</span>
          Download
        </ReactButton>

        <ReactButton onClick={handleClick} className="secondary">
          ⚙️
        </ReactButton>
      </div>

    </div>
  );
}