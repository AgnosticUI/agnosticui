import { ReactTooltip } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Info, HelpCircle } from "lucide-react";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const TooltipReact = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <ComponentLayout
      componentName="Tooltip"
      framework="React"
      frameworkIcon={reactIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-react</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Import */}
        <section>
          <h2 className={styles.heading2}>Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>{`import { ReactTooltip } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple tooltip with default top placement. Hover or focus the button to see the tooltip."
          preview={
            <ReactTooltip content="This is a helpful tooltip!">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Hover me
              </button>
            </ReactTooltip>
          }
          language="typescript"
          code={`import { ReactTooltip } from "agnosticui-core/react";
import "agnosticui-core";

<ReactTooltip content="This is a helpful tooltip!">
  <button>Hover me</button>
</ReactTooltip>`}
        />

        <CodeExample
          title="Tooltip Placements"
          description="Control where the tooltip appears relative to the trigger element."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ReactTooltip content="Top tooltip" placement="top">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Top
                </button>
              </ReactTooltip>
              <ReactTooltip content="Right tooltip" placement="right">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Right
                </button>
              </ReactTooltip>
              <ReactTooltip content="Bottom tooltip" placement="bottom">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Bottom
                </button>
              </ReactTooltip>
              <ReactTooltip content="Left tooltip" placement="left">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Left
                </button>
              </ReactTooltip>
            </div>
          }
          language="xml"
          code={`<ReactTooltip content="Top tooltip" placement="top">
  <button>Top</button>
</ReactTooltip>
<ReactTooltip content="Right tooltip" placement="right">
  <button>Right</button>
</ReactTooltip>
<ReactTooltip content="Bottom tooltip" placement="bottom">
  <button>Bottom</button>
</ReactTooltip>
<ReactTooltip content="Left tooltip" placement="left">
  <button>Left</button>
</ReactTooltip>`}
        />

        <CodeExample
          title="Tooltip with Icons"
          description="Use tooltips to provide contextual help alongside icons."
          preview={
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <ReactTooltip content="More information about this feature">
                <button
                  style={{
                    padding: "0.5rem",
                    borderRadius: "50%",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <Info size={20} />
                </button>
              </ReactTooltip>
              <ReactTooltip content="Click for help documentation">
                <button
                  style={{
                    padding: "0.5rem",
                    borderRadius: "50%",
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <HelpCircle size={20} />
                </button>
              </ReactTooltip>
            </div>
          }
          language="typescript"
          code={`import { Info, HelpCircle } from "lucide-react";

<ReactTooltip content="More information about this feature">
  <button><Info size={20} /></button>
</ReactTooltip>
<ReactTooltip content="Click for help documentation">
  <button><HelpCircle size={20} /></button>
</ReactTooltip>`}
        />

        <CodeExample
          title="Trigger Methods"
          description="Control how the tooltip is triggered: hover, focus, or click."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ReactTooltip content="Hover trigger (default)" trigger="hover">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Hover
                </button>
              </ReactTooltip>
              <ReactTooltip content="Focus trigger" trigger="focus">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Focus
                </button>
              </ReactTooltip>
              <ReactTooltip content="Click trigger" trigger="click">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Click
                </button>
              </ReactTooltip>
              <ReactTooltip content="Hover and focus" trigger="hover focus">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Hover/Focus
                </button>
              </ReactTooltip>
            </div>
          }
          language="xml"
          code={`<ReactTooltip content="Hover trigger (default)" trigger="hover">
  <button>Hover</button>
</ReactTooltip>
<ReactTooltip content="Focus trigger" trigger="focus">
  <button>Focus</button>
</ReactTooltip>
<ReactTooltip content="Click trigger" trigger="click">
  <button>Click</button>
</ReactTooltip>
<ReactTooltip content="Hover and focus" trigger="hover focus">
  <button>Hover/Focus</button>
</ReactTooltip>`}
        />

        <CodeExample
          title="Distance and Skidding"
          description="Adjust the distance and offset of the tooltip from its trigger."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ReactTooltip content="Default distance (8px)">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Default
                </button>
              </ReactTooltip>
              <ReactTooltip content="Large distance" distance={20}>
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Far Away
                </button>
              </ReactTooltip>
              <ReactTooltip content="Skewed tooltip" skidding={20}>
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Skewed
                </button>
              </ReactTooltip>
            </div>
          }
          language="xml"
          code={`<ReactTooltip content="Default distance (8px)">
  <button>Default</button>
</ReactTooltip>
<ReactTooltip content="Large distance" distance={20}>
  <button>Far Away</button>
</ReactTooltip>
<ReactTooltip content="Skewed tooltip" skidding={20}>
  <button>Skewed</button>
</ReactTooltip>`}
        />

        <CodeExample
          title="Disabled Tooltip"
          description="Disable the tooltip from showing when needed."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexDirection: "column", alignItems: "flex-start" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <input
                  type="checkbox"
                  checked={isDisabled}
                  onChange={(e) => setIsDisabled(e.target.checked)}
                />
                Disable tooltip
              </label>
              <ReactTooltip content="This tooltip can be disabled" disabled={isDisabled}>
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  {isDisabled ? "Tooltip Disabled" : "Hover me"}
                </button>
              </ReactTooltip>
            </div>
          }
          language="typescript"
          code={`const [isDisabled, setIsDisabled] = useState(false);

<ReactTooltip content="This tooltip can be disabled" disabled={isDisabled}>
  <button>
    {isDisabled ? "Tooltip Disabled" : "Hover me"}
  </button>
</ReactTooltip>`}
        />

        <CodeExample
          title="Tooltip with Complex Content"
          description="Use the content slot for more complex tooltip content."
          preview={
            <ReactTooltip>
              <button slot="trigger" style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Rich Content
              </button>
              <div slot="content" style={{ padding: "0.5rem" }}>
                <strong>Feature Name</strong>
                <p style={{ margin: "0.25rem 0", fontSize: "0.875rem" }}>
                  This is a more detailed description with multiple lines.
                </p>
              </div>
            </ReactTooltip>
          }
          language="typescript"
          code={`<ReactTooltip>
  <button slot="trigger">Rich Content</button>
  <div slot="content">
    <strong>Feature Name</strong>
    <p>This is a more detailed description with multiple lines.</p>
  </div>
</ReactTooltip>`}
        />

        <CodeExample
          title="Keyboard Navigation"
          description="Tooltips are accessible via keyboard. Press Escape to dismiss when using click or focus triggers."
          preview={
            <ReactTooltip content="Press Escape to dismiss (when focused or clicked)" trigger="focus">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Tab to focus
              </button>
            </ReactTooltip>
          }
          language="xml"
          code={`<ReactTooltip content="Press Escape to dismiss" trigger="focus">
  <button>Tab to focus</button>
</ReactTooltip>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default TooltipReact;
