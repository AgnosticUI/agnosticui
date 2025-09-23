import React, { useRef, useEffect, useState } from "react";
import { ReactTooltip } from "agnosticui-core/react";

export default function ReactTooltipDemo() {
  const tooltipRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Load web components only on client side to avoid SSR issues
    const loadComponents = async () => {
      try {
        await import("agnosticui-core");
        setIsReady(true);
      } catch (error) {
        console.error("Error loading tooltip components:", error);
        setIsReady(true); // Continue anyway
      }
    };

    loadComponents();
  }, []);

  // Enhanced event handlers with detailed logging
  const handleShow = (event?: Event) => {
    const target = event?.target as any;
    const triggerText = target?.textContent?.trim() || 'Unknown Trigger';
    console.log(`🌟 Tooltip shown: "${triggerText}"`, {
      trigger: triggerText,
      timestamp: new Date().toLocaleTimeString()
    });
  };

  const handleHide = (event?: Event) => {
    const target = event?.target as any;
    const triggerText = target?.textContent?.trim() || 'Unknown Trigger';
    console.log(`🔲 Tooltip hidden: "${triggerText}"`, {
      trigger: triggerText,
      timestamp: new Date().toLocaleTimeString()
    });
  };

  const handleProgrammaticAction = (action: string) => {
    console.log(`🤖 Programmatic tooltip control: ${action.toUpperCase()}`);
  };

  if (!isReady) {
    return <div>Loading tooltips...</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h3>React Tooltip Wrapper Examples</h3>

      <p style={{ fontSize: "0.875rem", color: "var(--c-text-light)", margin: "0 0 1rem 0", padding: "0.5rem", backgroundColor: "var(--c-bg-secondary)", borderRadius: "4px", border: "1px solid var(--c-border)" }}>
        💡 <strong>Console Logging:</strong> Open your browser console (<kbd>F12</kbd> → Console tab) to see show/hide events from these React wrapper examples.
        <button onClick={() => console.log('🎯 TIP: Expand the logged objects to see how we extract trigger text, timestamps, and event properties from React tooltip event handlers!')} style={{ color: "var(--ag-primary)", textDecoration: "underline", background: "none", border: "none", cursor: "pointer", padding: 0, font: "inherit" }}>Click here</button> for event debugging tips!
      </p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
      <ReactTooltip
        ref={tooltipRef}
        content="This is a React tooltip component!"
        placement="top"
        onShow={handleShow}
        onHide={handleHide}
      >
        <button>React Tooltip</button>
      </ReactTooltip>

      <ReactTooltip
        content="React tooltips support all placements"
        placement="bottom"
      >
        <button>Bottom Placement</button>
      </ReactTooltip>

      <ReactTooltip
        content="Click to trigger tooltip"
        trigger="click"
      >
        <button>Click Trigger</button>
      </ReactTooltip>

      <div>
        <button onClick={() => { handleProgrammaticAction('show'); tooltipRef.current?.show(); }}>
          Show First Tooltip
        </button>
        <button onClick={() => { handleProgrammaticAction('hide'); tooltipRef.current?.hide(); }}>
          Hide First Tooltip
        </button>
        <button onClick={() => { handleProgrammaticAction('toggle'); tooltipRef.current?.toggle(); }}>
          Toggle First Tooltip
        </button>
      </div>
      </div>
    </div>
  );
}