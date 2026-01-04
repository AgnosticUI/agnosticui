import {
  ReactAccordion,
  AccordionItem,
  ItemHeader,
  ItemContent,
} from "agnosticui-core/accordion/react";

export default function AccordionReactExamples() {
  return (
    <section>
      <div className="mbe4">
        <h2>Basic Accordion (Default)</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          By default, the Accordion provides a chevron which points down when
          closed, then rotates 180° to point up when open. See below for how to
          opt out or use different indicators.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron>
            <ItemHeader>Chevron Section 1</ItemHeader>
            <ItemContent>
              <p>Default chevron indicator with smooth rotation</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Chevron Section 2</ItemHeader>
            <ItemContent>
              <p>Click to see the 180° rotation animation</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Chevron Section 3</ItemHeader>
            <ItemContent>
              <p>Classic accordion indicator style</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>X Indicator</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Plus rotated 180° (upside down) when closed, rotates to 45° forming
          an X when open.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useX>
            <ItemHeader>X Indicator Section 1</ItemHeader>
            <ItemContent>
              <p>Plus transforms into X when opened</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useX>
            <ItemHeader>X Indicator Section 2</ItemHeader>
            <ItemContent>
              <p>Smooth transition from plus to X</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useX>
            <ItemHeader>X Indicator Section 3</ItemHeader>
            <ItemContent>
              <p>Modern accordion indicator style</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Plus/Minus Indicator</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Plus transitions to minus when open with smooth animation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useMinus>
            <ItemHeader>Plus/Minus Section 1</ItemHeader>
            <ItemContent>
              <p>Plus changes to minus when opened</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useMinus>
            <ItemHeader>Plus/Minus Section 2</ItemHeader>
            <ItemContent>
              <p>Classic expand/collapse indicator</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useMinus>
            <ItemHeader>Plus/Minus Section 3</ItemHeader>
            <ItemContent>
              <p>Clear visual indication of state</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>No Indicator</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Accordion items without any visual indicator.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem noIndicator>
            <ItemHeader>No Indicator Section 1</ItemHeader>
            <ItemContent>
              <p>Clean header without indicator icon</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem noIndicator>
            <ItemHeader>No Indicator Section 2</ItemHeader>
            <ItemContent>
              <p>Minimal design focused on content</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem noIndicator>
            <ItemHeader>No Indicator Section 3</ItemHeader>
            <ItemContent>
              <p>Simple accordion without visual clutter</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Bordered</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem bordered useChevron>
            <ItemHeader>Bordered Item 1</ItemHeader>
            <ItemContent>
              <p>This accordion has borders on the headers</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem bordered useChevron>
            <ItemHeader>Bordered Item 2</ItemHeader>
            <ItemContent>
              <p>Another bordered item</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem bordered useChevron>
            <ItemHeader>Bordered Item 3</ItemHeader>
            <ItemContent>
              <p>Third bordered item</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>With Background</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem background useChevron>
            <ItemHeader>Background Item 1</ItemHeader>
            <ItemContent>
              <p>This accordion has background color on headers</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem background useChevron>
            <ItemHeader>Background Item 2</ItemHeader>
            <ItemContent>
              <p>Another item with background</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem background useChevron>
            <ItemHeader>Background Item 3</ItemHeader>
            <ItemContent>
              <p>Third item with background</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>One Item Open</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron>
            <ItemHeader>Closed Item</ItemHeader>
            <ItemContent>
              <p>This item starts closed</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron open>
            <ItemHeader>Open Item</ItemHeader>
            <ItemContent>
              <p>This item starts open</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Another Closed Item</ItemHeader>
            <ItemContent>
              <p>This item also starts closed</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Disabled State</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron>
            <ItemHeader>Enabled Item</ItemHeader>
            <ItemContent>
              <p>This item can be toggled</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron disabled>
            <ItemHeader>Disabled Item</ItemHeader>
            <ItemContent>
              <p>This item cannot be toggled</p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron>
            <ItemHeader>Another Enabled Item</ItemHeader>
            <ItemContent>
              <p>This item can also be toggled</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>Rich Content</h2>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem useChevron bordered>
            <ItemHeader>
              <div className="flex-inline items-center">
                <svg
                  className="mie2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ag-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
                Features
              </div>
            </ItemHeader>
            <ItemContent>
              <ul>
                <li>Accessible by default with ARIA attributes</li>
                <li>Keyboard navigation support</li>
                <li>Customizable heading levels</li>
                <li>Multiple styling options</li>
              </ul>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron bordered>
            <ItemHeader>
              <div className="flex-inline items-center">
                <svg
                  className="mie2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ag-secondary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                Code Example
              </div>
            </ItemHeader>
            <ItemContent>
              <pre
                style={{
                  background: "var(--ag-background-secondary)",
                  padding: "1rem",
                  borderRadius: "4px",
                  overflowX: "auto",
                }}
              >
                {`<AccordionItem useChevron>
  <ItemHeader>Title</ItemHeader>
  <ItemContent>Content</ItemContent>
</AccordionItem>`}
              </pre>
            </ItemContent>
          </AccordionItem>
          <AccordionItem useChevron bordered>
            <ItemHeader>
              <div className="flex-inline items-center">
                <svg
                  className="mie2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--ag-success)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                More Information
              </div>
            </ItemHeader>
            <ItemContent>
              <p>Accordions are great for:</p>
              <ul>
                <li>FAQ sections</li>
                <li>Feature lists</li>
                <li>Documentation</li>
                <li>Progressive disclosure</li>
              </ul>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      <div className="mbe4">
        <h2>CSS Parts Customization</h2>
        <p
          className="mbe2"
          style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}
        >
          Customize accordion appearance using CSS Shadow Parts without
          breaking encapsulation.
        </p>
      </div>
      <div className="stacked mbe4">
        <ReactAccordion>
          <AccordionItem className="custom-minimal-accordion" useChevron>
            <ItemHeader>Minimal Border Style</ItemHeader>
            <ItemContent>
              <p>
                This variant uses a minimal border-left design with subtle
                styling.
              </p>
            </ItemContent>
          </AccordionItem>
          <AccordionItem className="custom-minimal-accordion" useChevron>
            <ItemHeader>Another Minimal Item</ItemHeader>
            <ItemContent>
              <p>Clean and simple styling focused on content hierarchy.</p>
            </ItemContent>
          </AccordionItem>
        </ReactAccordion>
      </div>

      {/* CSS Parts customization styles */}
      <style>{`
        .custom-minimal-accordion::part(ag-accordion-header-wrapper) {
          border-left: 4px solid var(--ag-primary);
          padding-left: 12px;
        }

        .custom-minimal-accordion::part(ag-accordion-header) {
          font-weight: 500;
          color: var(--ag-text-primary);
        }

        .custom-minimal-accordion::part(ag-accordion-content) {
          padding-left: 16px;
          border-left: 2px solid #e5e7eb;
          margin-left: 2px;
        }

        .custom-minimal-accordion::part(ag-accordion-indicator) {
          color: var(--ag-primary);
        }
      `}</style>
    </section>
  );
}
