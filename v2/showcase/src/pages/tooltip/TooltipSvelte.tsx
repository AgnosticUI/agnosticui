import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Info, HelpCircle } from "lucide-react";
import styles from "@/shared/styles.module.css";

import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";

const TooltipSvelte = () => {
  return (
    <ComponentLayout
      componentName="Tooltip"
      framework="Svelte"
      frameworkIcon={svelteIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-svelte</code>
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
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> Svelte works directly with the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-tooltip</code> web component using standard HTML syntax.
                The previews below show the web component as it would appear in your Svelte application.
                Svelte's reactivity works seamlessly with web components through standard DOM properties and events.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple tooltip with default top placement. Hover or focus the button to see the tooltip."
          preview={
            <ag-tooltip content="This is a helpful tooltip!">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Hover me
              </button>
            </ag-tooltip>
          }
          code={`<script>
  import 'agnosticui-core';
</script>

<ag-tooltip content="This is a helpful tooltip!">
  <button>Hover me</button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Tooltip Placements"
          description="Control where the tooltip appears relative to the trigger element."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ag-tooltip content="Left tooltip" placement="left">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Left
                </button>
              </ag-tooltip>
              <ag-tooltip content="Top tooltip" placement="top">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Top
                </button>
              </ag-tooltip>
              <ag-tooltip content="Bottom tooltip" placement="bottom">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Bottom
                </button>
              </ag-tooltip>
              <ag-tooltip content="Right tooltip" placement="right">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Right
                </button>
              </ag-tooltip>
            </div>
          }
          code={`<ag-tooltip content="Left tooltip" placement="left">
  <button>Left</button>
</ag-tooltip>
<ag-tooltip content="Top tooltip" placement="top">
  <button>Top</button>
</ag-tooltip>
<ag-tooltip content="Bottom tooltip" placement="bottom">
  <button>Bottom</button>
</ag-tooltip>
<ag-tooltip content="Right tooltip" placement="right">
  <button>Right</button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Tooltip with Icons"
          description="Use tooltips to provide contextual help alongside icons."
          preview={
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <ag-tooltip content="More information about this feature">
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
              </ag-tooltip>
              <ag-tooltip content="Click for help documentation">
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
              </ag-tooltip>
            </div>
          }
          code={`<ag-tooltip content="More information about this feature">
  <button><InfoIcon /></button>
</ag-tooltip>
<ag-tooltip content="Click for help documentation">
  <button><HelpCircleIcon /></button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Trigger Methods"
          description="Control how the tooltip is triggered: hover, focus, or click."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ag-tooltip content="Hover trigger (default)" trigger="hover">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Hover
                </button>
              </ag-tooltip>
              <ag-tooltip content="Focus trigger" trigger="focus">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Focus
                </button>
              </ag-tooltip>
              <ag-tooltip content="Click trigger" trigger="click">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Click
                </button>
              </ag-tooltip>
              <ag-tooltip content="Hover and focus" trigger="hover focus">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Hover/Focus
                </button>
              </ag-tooltip>
            </div>
          }
          code={`<ag-tooltip content="Hover trigger (default)" trigger="hover">
  <button>Hover</button>
</ag-tooltip>
<ag-tooltip content="Focus trigger" trigger="focus">
  <button>Focus</button>
</ag-tooltip>
<ag-tooltip content="Click trigger" trigger="click">
  <button>Click</button>
</ag-tooltip>
<ag-tooltip content="Hover and focus" trigger="hover focus">
  <button>Hover/Focus</button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Distance and Skidding"
          description="Adjust the distance and offset of the tooltip from its trigger."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <ag-tooltip content="Default distance (8px)">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Default
                </button>
              </ag-tooltip>
              <ag-tooltip content="Large distance" distance="20">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Far Away
                </button>
              </ag-tooltip>
              <ag-tooltip content="Skewed tooltip" skidding="20">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Skewed
                </button>
              </ag-tooltip>
            </div>
          }
          code={`<ag-tooltip content="Default distance (8px)">
  <button>Default</button>
</ag-tooltip>
<ag-tooltip content="Large distance" distance={20}>
  <button>Far Away</button>
</ag-tooltip>
<ag-tooltip content="Skewed tooltip" skidding={20}>
  <button>Skewed</button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Disabled Tooltip"
          description="Disable the tooltip from showing when needed."
          preview={
            <ag-tooltip content="This tooltip can be disabled">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Hover me
              </button>
            </ag-tooltip>
          }
          code={`<script>
  let isDisabled = false;
</script>

<label>
  <input type="checkbox" bind:checked={isDisabled} />
  Disable tooltip
</label>
<ag-tooltip content="This tooltip can be disabled" disabled={isDisabled}>
  <button>
    {isDisabled ? "Tooltip Disabled" : "Hover me"}
  </button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Tooltip with Complex Content"
          description="Use the content slot for more complex tooltip content."
          preview={
            <ag-tooltip>
              <button slot="trigger" style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Rich Content
              </button>
              <div slot="content" style={{ padding: "0.5rem" }}>
                <strong>Feature Name</strong>
                <p style={{ margin: "0.25rem 0", fontSize: "0.875rem" }}>
                  This is a more detailed description with multiple lines.
                </p>
              </div>
            </ag-tooltip>
          }
          code={`<ag-tooltip>
  <button slot="trigger">Rich Content</button>
  <div slot="content">
    <strong>Feature Name</strong>
    <p>This is a more detailed description with multiple lines.</p>
  </div>
</ag-tooltip>`}
        />

        <CodeExample
          title="Keyboard Navigation"
          description="Tooltips are accessible via keyboard. Press Escape to dismiss when using click or focus triggers."
          preview={
            <ag-tooltip content="Press Escape to dismiss (when focused or clicked)" trigger="focus">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Tab to focus
              </button>
            </ag-tooltip>
          }
          code={`<ag-tooltip content="Press Escape to dismiss" trigger="focus">
  <button>Tab to focus</button>
</ag-tooltip>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default TooltipSvelte;
