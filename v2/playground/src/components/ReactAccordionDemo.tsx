import React, { useEffect, useState } from "react";
import {
  ReactAccordion,
  AccordionItem,
  ItemHeader,
  ItemContent,
} from "agnosticui-core/react";

// Import web components to ensure they're registered
import "agnosticui-core";

export default function ReactAccordionDemo() {
  const [isReady, setIsReady] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  // Event handlers with detailed logging
  const handleToggle = (detail: { open: boolean }) => {
    console.log(`🎛️ Accordion toggled: ${detail.open ? 'EXPANDED' : 'COLLAPSED'}`, {
      expanded: detail.open,
      timestamp: new Date().toLocaleTimeString()
    });
  };


  useEffect(() => {
    // Wait for web components to be defined before rendering
    const waitForComponents = async () => {
      try {
        await Promise.all([
          customElements.whenDefined("ag-accordion"),
          customElements.whenDefined("ag-accordion-item"),
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

  if (!isReady) {
    return <div>Loading accordion...</div>;
  }

  if (!isReady) {
    return (
      <div style={{ padding: "1rem", color: "#666" }}>
        Loading React Accordion components...
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h3>React Accordion Wrapper Examples</h3>

      <p style={{ fontSize: "0.875rem", color: "var(--c-text-light)", margin: "0 0 1rem 0", padding: "0.5rem", backgroundColor: "var(--c-bg-secondary)", borderRadius: "4px", border: "1px solid var(--c-border)" }}>
        💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see expand/collapse events from these React wrapper examples.
        <button onClick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract detail.open, timestamps, and event properties from React event handlers!')} style={{ color: "var(--agnostic-primary)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Click here</button> for event debugging tips!
      </p>

      <ReactAccordion>
      <AccordionItem onToggle={handleToggle}>
        <ItemHeader>Section 1</ItemHeader>
        <ItemContent>
          <p>Content for section 1 with some detailed information.</p>
          <ul>
            <li>Feature A</li>
            <li>Feature B</li>
            <li>Feature C</li>
          </ul>
        </ItemContent>
      </AccordionItem>

      <AccordionItem onToggle={handleToggle}>
        <ItemHeader>Section 2</ItemHeader>
        <ItemContent>
          <p>This is the content for section 2.</p>
          <div>
            <h4>Subsection</h4>
            <p>
              More detailed information here with different content structure.
            </p>
          </div>
        </ItemContent>
      </AccordionItem>

      <AccordionItem onToggle={handleToggle}>
        <ItemHeader>Section 3</ItemHeader>
        <ItemContent>
          <p>Final section with its own unique content.</p>
          <blockquote>
            "This could be a quote or special content in the third accordion
            section."
          </blockquote>
        </ItemContent>
      </AccordionItem>
    </ReactAccordion>
    </div>
  );
}
