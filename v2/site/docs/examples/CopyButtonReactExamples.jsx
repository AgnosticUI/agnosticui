import { useState } from "react";
import { ReactCopyButton } from "agnosticui-core/copy-button/react";

export default function CopyButtonReactExamples() {
  const [inputValue, setInputValue] = useState("https://agnosticui.com/components/copybutton");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <section>
      {/* Basic Copy Button */}
      <div className="mbe4">
        <h2>Basic Copy Button</h2>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactCopyButton
          text="https://agnosticui.com"
          label="Copy URL"
        />
      </div>

      {/* Projected Icons */}
      <div className="mbe4">
        <h2>Projected Icons</h2>
      </div>

      <div className="stacked-mobile mbe4">
        <ReactCopyButton
          text="Projected Icons Example"
          label="Projected Icons"
          iconCopy={
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 3H14.6C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V16.5M6.2 21H14.3C15.4201 21 15.9802 21 16.408 20.782C16.7843 20.5903 17.0903 20.2843 17.282 19.908C17.5 19.4802 17.5 18.9201 17.5 17.8V9.7C17.5 8.57989 17.5 8.01984 17.282 7.59202C17.0903 7.21569 16.7843 6.90973 16.408 6.71799C15.9802 6.5 15.4201 6.5 14.3 6.5H6.2C5.0799 6.5 4.51984 6.5 4.09202 6.71799C3.71569 6.90973 3.40973 7.21569 3.21799 7.59202C3 8.01984 3 8.57989 3 9.7V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.0799 21 6.2 21Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          iconCopied={
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>

      {/* Sizes & Variants */}
      <div className="mbe4">
        <h2>Sizes & Variants</h2>
      </div>
      <div className="stacked-mobile mbe4">
        <ReactCopyButton text="Copy this" size="xs" />
        <ReactCopyButton text="Copy this" size="sm" />
        <ReactCopyButton text="Copy this" size="md" />
        <ReactCopyButton text="Copy this" size="lg" />
        <ReactCopyButton text="Copy this" size="xl" />
      </div>

      <div className="stacked-mobile mbe4">
        <ReactCopyButton text="Copy primary" variant="primary" />
        <ReactCopyButton text="Copy success" variant="success" />
        <ReactCopyButton text="Copy warning" variant="warning" />
        <ReactCopyButton text="Copy danger" variant="danger" />
        <ReactCopyButton text="Copy ghost" variant="ghost" />
      </div>

      {/* Inline Code Example */}
      <div className="mbe4">
        <h2>Inline Code Example</h2>
      </div>
      <div className="code-example mbe4">
        <pre><code>npm install agnosticui-core</code></pre>
        <ReactCopyButton
          className="code-copy"
          text="npm install agnosticui-core"
          label="Copy install command"
          size="sm"
          variant="ghost"
        />
      </div>

      {/* Copy From Input */}
      <div className="mbe4">
        <h2>Copy From Input</h2>
        <p className="mbe2" style={{ color: "var(--ag-text-secondary)", fontSize: "0.875rem" }}>
          Copy the value from the input using reactive binding.
        </p>
      </div>
      <div className="stacked-mobile mbe4">
        <div style={{ display: "flex", gap: "12px", alignItems: "center", flex: 1 }}>
          <input
            value={inputValue}
            onChange={handleInputChange}
            aria-label="Copy input"
            style={{
              padding: "8px",
              flex: 1,
              borderRadius: "6px",
              border: "1px solid var(--ag-border)"
            }}
          />
          <ReactCopyButton
            text={inputValue}
            label="Copy input"
          />
        </div>
      </div>
    </section>
  );
}
