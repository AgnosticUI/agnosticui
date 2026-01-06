
import { ReactScrollToButton } from "agnosticui-core/scroll-to-button/react";

export default function ScrollToButtonReactExamples() {
  return (
    <section>
      <style>{`
        .react-example-section {
          margin-top: 3rem;
        }
        .react-example-section h3 {
          margin-bottom: 0.5rem;
        }
        .react-example-section p {
          margin-bottom: 1rem;
        }
        .react-example-container {
          min-height: 120vh;
          padding: 1.5rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
          position: relative;
        }
        .react-example-paragraph {
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: var(--vp-c-text-2);
        }
        .react-inline-examples {
          display: flex;
          gap: 2rem;
          align-items: flex-end;
          flex-wrap: wrap;
          padding: 2rem;
          background: var(--vp-c-bg-soft);
          border: 1px solid var(--vp-c-divider);
          border-radius: 8px;
        }
        .react-inline-example {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .react-inline-example span {
          font-size: 0.875rem;
          font-family: var(--vp-font-family-mono);
          color: var(--vp-c-text-2);
        }
        /* Custom gradient styling example */
        ag-scroll-to-button.custom-gradient::part(ag-button) {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        ag-scroll-to-button.custom-gradient::part(ag-button):hover {
          box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
      `}</style>
      
      <h2>Default (Icon Only)</h2>
      <p>The most common use case - a circular button with just an icon that appears when scrolling down.</p>
      <div className="react-example-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="react-example-paragraph">
            Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        ))}
        <ReactScrollToButton style={{ bottom: "100px" }} />
      </div>

      <section className="react-example-section">
        <h2>With Visible Label</h2>
        <p>Show both icon and text label for better clarity. The button becomes pill-shaped automatically.</p>
        <ReactScrollToButton
          label="Back to Top"
          scrollThreshold={200}
          showLabel={true}
        />
      </section>

      <section className="react-example-section">
        <h2>Low Scroll Threshold</h2>
        <p>Control when the button appears by adjusting <code>scrollThreshold</code>. This one appears after just 100px.</p>
        <ReactScrollToButton
          label="Quick Access"
          showLabel={true}
          scrollThreshold={100}
          style={{ right: "180px" }}
          shape="rounded"
        />
      </section>

      <section className="react-example-section">
        <h2>Scroll to Bottom</h2>
        <p>Navigate to the end of content. The arrow automatically points down based on the target.</p>
        <ReactScrollToButton
          style={{ bottom: "160px" }}
          label="Go to Bottom"
          target="bottom"
          scrollThreshold={400}
        />
      </section>

      <section className="react-example-section">
        <h2>Custom Icon with Slot</h2>
        <p>Replace the default arrow with any icon using slots.</p>
        <ReactScrollToButton
          label="Launch to Top!"
          style={{ bottom: "220px" }}
          scrollThreshold={600}
        >
          <svg
            slot="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
          </svg>
        </ReactScrollToButton>
      </section>

      <section className="react-example-section">
        <h2>Different Sizes</h2>
        <p>Available sizes: <code>x-sm</code>, <code>sm</code>, <code>md</code> (default), <code>lg</code>, <code>xl</code></p>
        <div className="react-inline-examples">
          <div className="react-inline-example">
            <ReactScrollToButton size="x-sm" style={{ position: "static" }} />
            <span>x-sm</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="sm" style={{ position: "static" }} />
            <span>sm</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="md" style={{ position: "static" }} />
            <span>md</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="lg" style={{ position: "static" }} />
            <span>lg</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton size="xl" style={{ position: "static" }} />
            <span>xl</span>
          </div>
        </div>
      </section>

      <section className="react-example-section">
        <h2>Different Shapes</h2>
        <p>Available shapes: <code>circle</code> (default), <code>square</code>, <code>rounded</code>, <code>rounded-square</code>, <code>capsule</code></p>
        <div className="react-inline-examples">
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="circle"
              style={{ bottom: "280px" }}
              scrollThreshold={800}
            />
            <span>circle</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="square"
              style={{ bottom: "340px" }}
              scrollThreshold={1000}
            />
            <span>square</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="rounded"
              style={{ bottom: "400px" }}
              scrollThreshold={1200}
            />
            <span>rounded</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="rounded-square"
              style={{ bottom: "460px" }}
              scrollThreshold={1400}
            />
            <span>rounded-square</span>
          </div>
          <div className="react-inline-example">
            <ReactScrollToButton
              shape="capsule"
              showLabel={true}
              label="Top"
              style={{ bottom: "580px" }}
              scrollThreshold={1800}
            />
            <span>capsule</span>
          </div>
        </div>
      </section>

      <section className="react-example-section">
        <h2>Custom Styling with CSS Shadow Parts</h2>
        <p>Style internal parts without breaking encapsulation using CSS Shadow Parts.</p>
        <ReactScrollToButton
          className="custom-gradient"
          label="Styled Button"
          style={{ bottom: "520px" }}
          scrollThreshold={1600}
          showLabel={true}
        />
      </section>
    </section>
  );
}
