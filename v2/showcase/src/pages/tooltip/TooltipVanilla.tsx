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

        <CodeExample
          title="Tooltip with Icons"
          description="Use tooltips to provide contextual help alongside icons."
          preview={
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <TooltipWrapper content="More information about this feature">
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
              </TooltipWrapper>
              <TooltipWrapper content="Click for help documentation">
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
              </TooltipWrapper>
            </div>
          }
          code={`<ag-tooltip content="More information about this feature">
  <button>
    <!-- Your icon here -->
  </button>
</ag-tooltip>
<ag-tooltip content="Click for help documentation">
  <button>
    <!-- Your icon here -->
  </button>
</ag-tooltip>`}
        />

        <CodeExample
          title="Trigger Methods"
          description="Control how the tooltip is triggered: hover, focus, or click."
          preview={
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <TooltipWrapper content="Hover trigger (default)" trigger="hover">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Hover
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Focus trigger" trigger="focus">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Focus
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Click trigger" trigger="click">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Click
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Hover and focus" trigger="hover focus">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Hover/Focus
                </button>
              </TooltipWrapper>
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
              <TooltipWrapper content="Default distance (8px)">
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Default
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Large distance" distance={20}>
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Far Away
                </button>
              </TooltipWrapper>
              <TooltipWrapper content="Skewed tooltip" skidding={20}>
                <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                  Skewed
                </button>
              </TooltipWrapper>
            </div>
          }
          language="javascript"
          code={`<ag-tooltip content="Default distance (8px)">
  <button>Default</button>
</ag-tooltip>
<ag-tooltip id="farTooltip" content="Large distance">
  <button>Far Away</button>
</ag-tooltip>
<ag-tooltip id="skewedTooltip" content="Skewed tooltip">
  <button>Skewed</button>
</ag-tooltip>

<script>
  const farTooltip = document.getElementById('farTooltip');
  farTooltip.distance = 20;

  const skewedTooltip = document.getElementById('skewedTooltip');
  skewedTooltip.skidding = 20;
</script>`}
        />

        <CodeExample
          title="Disabled Tooltip"
          description="Disable the tooltip from showing when needed."
          preview={
            <TooltipWrapper content="This tooltip can be disabled">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Hover me
              </button>
            </TooltipWrapper>
          }
          language="javascript"
          code={`<ag-tooltip id="myTooltip" content="This tooltip can be disabled">
  <button id="myButton">Hover me</button>
</ag-tooltip>

<script>
  const tooltip = document.getElementById('myTooltip');
  const button = document.getElementById('myButton');

  // Disable tooltip
  tooltip.disabled = true;
  button.textContent = 'Tooltip Disabled';

  // Enable tooltip
  tooltip.disabled = false;
  button.textContent = 'Hover me';
</script>`}
        />

        <CodeExample
          title="Tooltip with Complex Content"
          description="Use the content slot for rich HTML content inside tooltips."
          preview={
            <ag-tooltip>
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
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
  <button>Rich Content</button>
  <div slot="content">
    <strong>Feature Name</strong>
    <p>This is a more detailed description with multiple lines.</p>
  </div>
</ag-tooltip>`}
        />

        <CodeExample
          title="Event Handling"
          description="Listen to show and hide events for custom behavior."
          preview={
            <TooltipWrapper content="Tooltip with events" trigger="hover focus">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Hover or focus me
              </button>
            </TooltipWrapper>
          }
          language="javascript"
          code={`<ag-tooltip id="eventTooltip" content="Tooltip with events">
  <button>Hover or focus me</button>
</ag-tooltip>

<script>
  const tooltip = document.getElementById('eventTooltip');

  tooltip.addEventListener('show', (event) => {
    console.log('Tooltip shown');
  });

  tooltip.addEventListener('hide', (event) => {
    console.log('Tooltip hidden');
  });
</script>`}
        />

        <CodeExample
          title="Keyboard Navigation"
          description="Tooltips are accessible via keyboard. Press Escape to dismiss when using click or focus triggers."
          preview={
            <TooltipWrapper content="Press Escape to dismiss (when focused or clicked)" trigger="focus">
              <button style={{ padding: "0.5rem 1rem", borderRadius: "4px" }}>
                Tab to focus
              </button>
            </TooltipWrapper>
          }
          code={`<ag-tooltip content="Press Escape to dismiss" trigger="focus">
  <button>Tab to focus</button>
</ag-tooltip>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default TooltipVanilla;
