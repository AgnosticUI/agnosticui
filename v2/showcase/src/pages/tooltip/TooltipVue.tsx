import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Info, HelpCircle } from "lucide-react";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

const TooltipVue = () => {
  return (
    <ComponentLayout
      componentName="Tooltip"
      framework="Vue"
      frameworkIcon={vueIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-vue</code>
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
                <strong>Note:</strong> Vue works directly with the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-tooltip</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                Vue's reactivity works seamlessly with web components through standard DOM properties and events.
              </p>
              <div className={styles.dividerSection}>
                <p className={styles.smallParagraphBlue}>
                  <strong>Try it live:</strong> See the ag-tooltip component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-tooltip-demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" />
                  </svg>
                  Open in CodeSandbox
                </a>
              </div>
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
          code={`<template>
  <ag-tooltip content="This is a helpful tooltip!">
    <button>Hover me</button>
  </ag-tooltip>
</template>

<script setup lang="ts">
import 'agnosticui-core';
</script>`}
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
          code={`<template>
  <ag-tooltip content="Left tooltip" placement="left">
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
  </ag-tooltip>
</template>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default TooltipVue;
