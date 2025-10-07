import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, ReactNode } from "react";
import { Info, HelpCircle } from "lucide-react";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

interface TooltipWrapperProps {
  children?: ReactNode;
  content?: string;
  placement?: string;
  distance?: number;
  skidding?: number;
  trigger?: string;
  disabled?: boolean;
}

// Helper component to render ag-tooltip in React
const TooltipWrapper = ({ children, ...props }: TooltipWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    Object.entries(props).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        } else {
          element.removeAttribute(key);
        }
      } else if (value !== undefined && value !== null) {
        element.setAttribute(key, String(value));
      }
    });
  }, [props]);

  return <ag-tooltip ref={ref}>{children}</ag-tooltip>;
};

const TooltipVanilla = () => {
  return (
    <ComponentLayout
      componentName="Tooltip"
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-lit</code>
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

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple tooltip with default top placement. Hover or focus the button to see the tooltip."
          preview={
            <TooltipWrapper content="This is a helpful tooltip!">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Hover me
              </button>
            </TooltipWrapper>
          }
          code={`import "agnosticui-core";

<ag-tooltip content="This is a helpful tooltip!">
  <button>Hover me</button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Tooltip Placements"
          description="Control where the tooltip appears relative to the trigger element."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <TooltipWrapper content="Left tooltip" placement="left">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Left
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Top tooltip" placement="top">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Top
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Bottom tooltip" placement="bottom">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Bottom
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Right tooltip" placement="right">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Right
                </button>
              </TooltipWrapper>
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

export default TooltipVanilla;
