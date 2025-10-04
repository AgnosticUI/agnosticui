import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, ReactNode } from "react";
import "agnosticui-core";

interface ToggleWrapperProps {
  children?: ReactNode;
  checked?: boolean;
  size?: string;
  variant?: string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  name?: string;
  value?: string;
  labelledBy?: string;
  describedBy?: string;
  onToggleChange?: (event: CustomEvent) => void;
}

// Helper component to render ag-toggle in React
const ToggleWrapper = ({ children, ...props }: ToggleWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const listeners: Array<{ event: string; handler: EventListener }> = [];

    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.toLowerCase().substring(2).replace(/([A-Z])/g, '-$1').toLowerCase();
        const handler = value as EventListener;
        element.addEventListener(eventName, handler);
        listeners.push({ event: eventName, handler });
      } else if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        } else {
          element.removeAttribute(key);
        }
      } else if (value !== undefined && value !== null) {
        const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        element.setAttribute(attrName, String(value));
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    };
  }, [props]);

  return <ag-toggle ref={ref}>{children}</ag-toggle>;
};

const ToggleVanilla = () => {
  return (
    <ComponentLayout
      componentName="Toggle"
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Installation */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>npm install agnosticui-core</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Import */}
        <section>
          <h2 className="text-3xl font-bold mb-4">Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A binary toggle switch implementing the WAI-ARIA Switch pattern."
          preview={
            <div className="flex items-center gap-2">
              <ToggleWrapper label="Toggle me" />
            </div>
          }
          code={`import "agnosticui-core";

<ag-toggle label="Toggle me"></ag-toggle>`}
        />

        {/* Size Variants */}
        <CodeExample
          title="Size Variants"
          description="Toggle switches in different sizes from extra small to extra large."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ToggleWrapper size="xs" label="Extra Small" />
                <span className="text-sm text-muted-foreground">Extra Small</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper size="sm" label="Small" />
                <span className="text-sm text-muted-foreground">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper size="md" label="Medium" />
                <span className="text-sm text-muted-foreground">Medium (default)</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper size="lg" label="Large" />
                <span className="text-sm text-muted-foreground">Large</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper size="xl" label="Extra Large" />
                <span className="text-sm text-muted-foreground">Extra Large</span>
              </div>
            </div>
          }
          code={`<ag-toggle size="xs" label="Extra Small"></ag-toggle>
<ag-toggle size="sm" label="Small"></ag-toggle>
<ag-toggle size="md" label="Medium"></ag-toggle>
<ag-toggle size="lg" label="Large"></ag-toggle>
<ag-toggle size="xl" label="Extra Large"></ag-toggle>`}
        />

        {/* Color Variants */}
        <CodeExample
          title="Color Variants"
          description="Toggle switches with different semantic colors for various use cases."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ToggleWrapper checked label="Default (Primary)" />
                <span className="text-sm text-muted-foreground">Default</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper checked variant="success" label="Success" />
                <span className="text-sm text-muted-foreground">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper checked variant="warning" label="Warning" />
                <span className="text-sm text-muted-foreground">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper checked variant="danger" label="Danger" />
                <span className="text-sm text-muted-foreground">Danger</span>
              </div>
            </div>
          }
          code={`<ag-toggle checked label="Default (Primary)"></ag-toggle>
<ag-toggle checked variant="success" label="Success"></ag-toggle>
<ag-toggle checked variant="warning" label="Warning"></ag-toggle>
<ag-toggle checked variant="danger" label="Danger"></ag-toggle>`}
        />

        {/* Checked State */}
        <CodeExample
          title="Checked State"
          description="Control the toggle state with the checked attribute."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ToggleWrapper label="Unchecked" />
                <span className="text-sm text-muted-foreground">Off</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper checked label="Checked" />
                <span className="text-sm text-muted-foreground">On</span>
              </div>
            </div>
          }
          code={`<ag-toggle label="Unchecked"></ag-toggle>
<ag-toggle checked label="Checked"></ag-toggle>`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Prevent interaction with disabled toggles."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ToggleWrapper disabled label="Disabled Off" />
                <span className="text-sm text-muted-foreground">Disabled (unchecked)</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper disabled checked label="Disabled On" />
                <span className="text-sm text-muted-foreground">Disabled (checked)</span>
              </div>
            </div>
          }
          code={`<ag-toggle disabled label="Disabled Off"></ag-toggle>
<ag-toggle disabled checked label="Disabled On"></ag-toggle>`}
        />

        {/* Readonly State */}
        <CodeExample
          title="Readonly State"
          description="Display the toggle in a readonly state - visually interactive but doesn't change."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ToggleWrapper readonly label="Readonly Off" />
                <span className="text-sm text-muted-foreground">Readonly (unchecked)</span>
              </div>
              <div className="flex items-center gap-2">
                <ToggleWrapper readonly checked label="Readonly On" />
                <span className="text-sm text-muted-foreground">Readonly (checked)</span>
              </div>
            </div>
          }
          code={`<ag-toggle readonly label="Readonly Off"></ag-toggle>
<ag-toggle readonly checked label="Readonly On"></ag-toggle>`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Toggle with event handling and state management."
          preview={
            <div className="flex items-center gap-2">
              <ToggleWrapper label="Interactive Toggle" />
              <span className="text-sm text-muted-foreground">Try clicking me</span>
            </div>
          }
          language="javascript"
          code={`<ag-toggle id="interactiveToggle" label="Interactive Toggle"></ag-toggle>
<p id="status">Current state: Disabled</p>

<script>
  const toggle = document.getElementById('interactiveToggle');
  const status = document.getElementById('status');

  toggle.addEventListener('toggle-change', (event) => {
    const isChecked = event.detail.checked;
    status.textContent = \`Current state: \${isChecked ? 'Enabled' : 'Disabled'}\`;
  });
</script>`}
        />

        {/* Practical Examples */}
        <CodeExample
          title="Practical Examples"
          description="Real-world toggle switch use cases with state management."
          preview={
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Enable Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about important updates
                    </p>
                  </div>
                  <ToggleWrapper
                    checked
                    label="Enable Notifications"
                    variant="success"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Dark Mode</p>
                    <p className="text-sm text-muted-foreground">
                      Switch between light and dark themes
                    </p>
                  </div>
                  <ToggleWrapper label="Dark Mode" />
                </div>
              </div>
            </div>
          }
          language="javascript"
          code={`<div class="flex items-center justify-between p-4 border rounded-lg">
  <div>
    <p class="font-medium">Enable Notifications</p>
    <p class="text-sm">Receive notifications about important updates</p>
  </div>
  <ag-toggle
    id="notifications"
    checked
    label="Enable Notifications"
    variant="success"
  ></ag-toggle>
</div>

<div class="flex items-center justify-between p-4 border rounded-lg">
  <div>
    <p class="font-medium">Dark Mode</p>
    <p class="text-sm">Switch between light and dark themes</p>
  </div>
  <ag-toggle id="darkMode" label="Dark Mode"></ag-toggle>
</div>

<script>
  const notificationsToggle = document.getElementById('notifications');
  const darkModeToggle = document.getElementById('darkMode');

  notificationsToggle.addEventListener('toggle-change', (event) => {
    console.log('Notifications:', event.detail.checked ? 'enabled' : 'disabled');
  });

  darkModeToggle.addEventListener('toggle-change', (event) => {
    console.log('Dark mode:', event.detail.checked ? 'enabled' : 'disabled');
    // Apply dark mode to document
    document.body.classList.toggle('dark', event.detail.checked);
  });
</script>`}
        />

        {/* Form Integration */}
        <CodeExample
          title="Form Integration"
          description="Use toggles in forms with name and value attributes."
          preview={
            <div className="space-y-4">
              <ToggleWrapper
                name="terms"
                value="accepted"
                label="I agree to the terms and conditions"
              />
              <ToggleWrapper
                name="newsletter"
                value="subscribed"
                label="Subscribe to newsletter"
              />
            </div>
          }
          language="javascript"
          code={`<form id="myForm">
  <ag-toggle
    name="terms"
    value="accepted"
    label="I agree to the terms and conditions"
  ></ag-toggle>

  <ag-toggle
    name="newsletter"
    value="subscribed"
    label="Subscribe to newsletter"
  ></ag-toggle>

  <button type="submit">Submit</button>
</form>

<script>
  const form = document.getElementById('myForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const toggles = form.querySelectorAll('ag-toggle');
    toggles.forEach(toggle => {
      if (toggle.checked) {
        console.log(\`\${toggle.name}: \${toggle.value}\`);
      }
    });
  });
</script>`}
        />

        {/* Programmatic Control */}
        <CodeExample
          title="Programmatic Control"
          description="Control toggle state programmatically via JavaScript."
          preview={
            <div className="flex items-center gap-2">
              <ToggleWrapper label="Programmatic Toggle" />
            </div>
          }
          language="javascript"
          code={`<ag-toggle id="myToggle" label="Programmatic Toggle"></ag-toggle>
<button id="toggleBtn">Toggle Programmatically</button>
<button id="enableBtn">Enable</button>
<button id="disableBtn">Disable</button>

<script>
  const toggle = document.getElementById('myToggle');

  document.getElementById('toggleBtn').addEventListener('click', () => {
    toggle.checked = !toggle.checked;
  });

  document.getElementById('enableBtn').addEventListener('click', () => {
    toggle.checked = true;
  });

  document.getElementById('disableBtn').addEventListener('click', () => {
    toggle.checked = false;
  });
</script>`}
        />

        {/* Accessibility */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Accessibility</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">WAI-ARIA Switch Pattern</h3>
                <p className="text-sm mb-2">
                  The Toggle component implements the{" "}
                  <a
                    href="https://www.w3.org/WAI/ARIA/apg/patterns/switch/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    WAI-ARIA Switch pattern
                  </a>{" "}
                  with full keyboard and screen reader support.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <kbd className="px-2 py-1 bg-muted rounded">Tab</kbd> - Move focus
                    to/from the toggle
                  </li>
                  <li>
                    <kbd className="px-2 py-1 bg-muted rounded">Space</kbd> or{" "}
                    <kbd className="px-2 py-1 bg-muted rounded">Enter</kbd> - Toggle
                    the switch
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ARIA Support</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <code className="px-1 bg-muted rounded">role="switch"</code> - Semantic
                    button with switch behavior
                  </li>
                  <li>
                    <code className="px-1 bg-muted rounded">aria-checked</code> -
                    Communicates current state to screen readers
                  </li>
                  <li>
                    <code className="px-1 bg-muted rounded">aria-label</code> or{" "}
                    <code className="px-1 bg-muted rounded">aria-labelledby</code> -
                    Required accessible name
                  </li>
                  <li>Screen reader announces state changes ("On" / "Off")</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Required Label</h3>
                <p className="text-sm">
                  The <code className="px-1 bg-muted rounded">label</code> attribute is
                  required for accessibility. Alternatively, use{" "}
                  <code className="px-1 bg-muted rounded">labelled-by</code> to
                  reference an external label element.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default ToggleVanilla;
