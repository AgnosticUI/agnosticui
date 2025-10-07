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

      </div>
    </ComponentLayout>
  );
};

export default TooltipSvelte;
