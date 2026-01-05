import { useState } from "react";
import { ReactCollapsible } from "agnosticui-core/collapsible/react";
import { Info } from "lucide-react";

export default function CollapsibleReactExamples() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = (event) => {
    setIsExpanded(event.target.open);
    console.log("Collapsible toggled. New state:", event.target.open);
  };

  return (
    <section>
      {/* Basic Collapsible (Default) */}
      <div className="mbe4">
        <h2>Basic Collapsible (Default)</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          By default, the Collapsible provides a chevron which points down when closed, then rotates 180° to point up when open. See below for how to opt out or use different indicators.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible useChevron>
          <span slot="summary">Click to expand</span>
          <p>This is the collapsible content that can be shown or hidden. The default chevron indicator rotates smoothly when toggled.</p>
        </ReactCollapsible>
      </div>

      {/* X Indicator */}
      <div className="mbe4">
        <h2>X Indicator</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Plus rotated 180° (upside down) when closed, rotates to 45° forming an X when open.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible useX>
          <span slot="summary">X Indicator</span>
          <p>Plus transforms into X when opened. This provides a modern, dynamic visual indicator.</p>
        </ReactCollapsible>
      </div>

      {/* Plus/Minus Indicator */}
      <div className="mbe4">
        <h2>Plus/Minus Indicator</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Plus transitions to minus when open with smooth animation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible useMinus>
          <span slot="summary">Plus/Minus Indicator</span>
          <p>Plus changes to minus when opened. Classic expand/collapse indicator style.</p>
        </ReactCollapsible>
      </div>

      {/* No Indicator */}
      <div className="mbe4">
        <h2>No Indicator</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Collapsible without any visual indicator.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible noIndicator>
          <span slot="summary">No Indicator</span>
          <p>Clean header without indicator icon. Minimal design focused on content.</p>
        </ReactCollapsible>
      </div>

      {/* Indicator Comparison */}
      <div className="mbe4">
        <h2>Indicator Comparison</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Toggle each collapsible to see how the different indicators behave.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered useChevron>
          <span slot="summary">Chevron (default) - Rotates 180°</span>
          <p>The chevron points down when closed and up when open via rotation.</p>
        </ReactCollapsible>

        <ReactCollapsible bordered useX>
          <span slot="summary">X Indicator - Rotates from upside-down plus to X</span>
          <p>Starts as an upside-down plus sign and rotates 45° to form an X when open.</p>
        </ReactCollapsible>

        <ReactCollapsible bordered useMinus>
          <span slot="summary">Plus/Minus - Swaps icons</span>
          <p>Shows a plus icon when closed and swaps to a minus icon when open.</p>
        </ReactCollapsible>

        <ReactCollapsible bordered noIndicator>
          <span slot="summary">No Indicator - Completely hidden</span>
          <p>No indicator is shown at all.</p>
        </ReactCollapsible>
      </div>

      {/* Bordered */}
      <div className="mbe4">
        <h2>Bordered</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered>
          <span slot="summary">Bordered collapsible</span>
          <p>This collapsible has a border around it for visual separation.</p>
        </ReactCollapsible>
      </div>

      {/* With Shadow */}
      <div className="mbe4">
        <h2>With Shadow</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible shadow>
          <span slot="summary">Collapsible with shadow</span>
          <p>This collapsible has a box-shadow applied for depth.</p>
        </ReactCollapsible>
      </div>

      {/* Combined Features */}
      <div className="mbe4">
        <h2>Combined Features</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered shadow>
          <span slot="summary">Bordered with shadow</span>
          <p>This collapsible combines both border and shadow styling for maximum visual impact.</p>
        </ReactCollapsible>
      </div>

      {/* Open by Default */}
      <div className="mbe4">
        <h2>Open by Default</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered open>
          <span slot="summary">Already expanded</span>
          <p>This collapsible starts in an open state using the <code>open</code> prop.</p>
        </ReactCollapsible>
      </div>

      {/* Rich Content */}
      <div className="mbe4">
        <h2>Rich Content</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered shadow>
          <div slot="summary" className="flex-inline items-center">
            <Info color="var(--ag-primary)" size={18} className="mie2" />
            <strong>Product Details</strong>
          </div>
          <div>
            <h4 style={{ marginTop: 0 }}>Technical Specifications</h4>
            <ul>
              <li>Processor: Octa-core 2.8 GHz</li>
              <li>Memory: 8GB RAM</li>
              <li>Storage: 256GB SSD</li>
              <li>Display: 15.6" Full HD</li>
            </ul>
            <p>
              <strong>Warranty:</strong> 2 years manufacturer warranty with optional
              extended coverage available.
            </p>
          </div>
        </ReactCollapsible>
      </div>

      {/* FAQ Example */}
      <div className="mbe4">
        <h2>FAQ Example</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered>
          <span slot="summary">What is AgnosticUI?</span>
          <p>
            AgnosticUI is a framework-agnostic component library built with web
            components. It works seamlessly with React, Vue, Svelte, Angular, and
            vanilla JavaScript.
          </p>
        </ReactCollapsible>

        <ReactCollapsible bordered>
          <span slot="summary">How do I install it?</span>
          <p>You can install AgnosticUI via npm:</p>
          <pre style={{ background: "var(--ag-background-secondary)", padding: "1rem", borderRadius: "4px", overflowX: "auto" }}>npm install agnosticui-core</pre>
        </ReactCollapsible>

        <ReactCollapsible bordered>
          <span slot="summary">Is it accessible?</span>
          <p>
            Yes! All AgnosticUI components are built with accessibility in mind,
            following WAI-ARIA best practices and ensuring keyboard navigation and
            screen reader support.
          </p>
        </ReactCollapsible>

        <ReactCollapsible bordered>
          <span slot="summary">Can I customize the styling?</span>
          <p>
            Absolutely! AgnosticUI uses CSS Shadow Parts to allow deep customization
            of component internals while maintaining encapsulation. You can also use
            design tokens for consistent theming across your application.
          </p>
        </ReactCollapsible>
      </div>

      {/* Nested Collapsibles */}
      <div className="mbe4">
        <h2>Nested Collapsibles</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered>
          <span slot="summary">Level 1 - Main Topic</span>
          <div>
            <p>This is the main content area.</p>

            <ReactCollapsible bordered useMinus style={{ marginTop: "1rem" }}>
              <span slot="summary">Level 2 - Subtopic A</span>
              <p>Nested collapsible content for subtopic A. Note the different indicator style.</p>
            </ReactCollapsible>

            <ReactCollapsible bordered useMinus style={{ marginTop: "0.5rem" }}>
              <span slot="summary">Level 2 - Subtopic B</span>
              <p>Nested collapsible content for subtopic B.</p>
            </ReactCollapsible>
          </div>
        </ReactCollapsible>
      </div>

      {/* Interactive with Event Handling */}
      <div className="mbe4">
        <h2>Interactive with Event Handling</h2>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible bordered shadow onToggle={handleToggle}>
          <span slot="summary">Click to toggle (watch console)</span>
          <div>
            <p>The collapsible dispatches a <code>toggle</code> event when opened or closed.</p>
          </div>
        </ReactCollapsible>
        <p style={{ marginTop: "1rem" }}>
          Current state: <strong>{isExpanded ? 'Expanded' : 'Collapsed'}</strong>
        </p>
      </div>

      {/* CSS Parts Customization */}
      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Customize collapsible appearance using CSS Shadow Parts without breaking encapsulation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactCollapsible className="custom-gradient">
          <span slot="summary">Gaudy Gradient</span>
          <p>This collapsible uses a gradient background with white text and custom styling.</p>
        </ReactCollapsible>
      </div>
    </section>
  );
}
