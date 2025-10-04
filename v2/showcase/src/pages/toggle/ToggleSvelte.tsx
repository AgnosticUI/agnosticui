import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";

const ToggleSvelte = () => {
  return (
    <ComponentLayout
      componentName="Toggle"
      framework="Svelte"
      frameworkIcon={svelteIcon}
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

        {/* Note about previews */}
        <section>
          <Card className="bg-purple-50 dark:bg-purple-900/30 border-purple-200 dark:border-purple-700">
            <CardContent className="p-4">
              <p className="text-sm text-purple-900 dark:text-purple-100">
                <strong>Svelte Usage:</strong> Svelte works directly with web components without requiring wrapper components.
                Simply import the web component and use it with native HTML syntax.
                All props are passed as attributes, and events are handled with Svelte's <code className="bg-purple-100 dark:bg-purple-800 px-1 rounded">on:eventname</code> syntax.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A binary toggle switch implementing the WAI-ARIA Switch pattern."
          preview={
            <div className="flex items-center gap-2">
              <ag-toggle label="Toggle me"></ag-toggle>
            </div>
          }
          code={`<script>
  import 'agnosticui-core';
</script>

<ag-toggle label="Toggle me" />`}
        />

        {/* Size Variants */}
        <CodeExample
          title="Size Variants"
          description="Toggle switches in different sizes from extra small to extra large."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ag-toggle size="xs" label="Extra Small"></ag-toggle>
                <span className="text-sm text-muted-foreground">Extra Small</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle size="sm" label="Small"></ag-toggle>
                <span className="text-sm text-muted-foreground">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle size="md" label="Medium"></ag-toggle>
                <span className="text-sm text-muted-foreground">Medium (default)</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle size="lg" label="Large"></ag-toggle>
                <span className="text-sm text-muted-foreground">Large</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle size="xl" label="Extra Large"></ag-toggle>
                <span className="text-sm text-muted-foreground">Extra Large</span>
              </div>
            </div>
          }
          code={`<ag-toggle size="xs" label="Extra Small" />
<ag-toggle size="sm" label="Small" />
<ag-toggle size="md" label="Medium" />
<ag-toggle size="lg" label="Large" />
<ag-toggle size="xl" label="Extra Large" />`}
        />

        {/* Color Variants */}
        <CodeExample
          title="Color Variants"
          description="Toggle switches with different semantic colors for various use cases."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ag-toggle checked label="Default (Primary)"></ag-toggle>
                <span className="text-sm text-muted-foreground">Default</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle checked variant="success" label="Success"></ag-toggle>
                <span className="text-sm text-muted-foreground">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle checked variant="warning" label="Warning"></ag-toggle>
                <span className="text-sm text-muted-foreground">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle checked variant="danger" label="Danger"></ag-toggle>
                <span className="text-sm text-muted-foreground">Danger</span>
              </div>
            </div>
          }
          code={`<ag-toggle checked label="Default (Primary)" />
<ag-toggle checked variant="success" label="Success" />
<ag-toggle checked variant="warning" label="Warning" />
<ag-toggle checked variant="danger" label="Danger" />`}
        />

        {/* Checked State */}
        <CodeExample
          title="Checked State"
          description="Control the toggle state with the checked attribute."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ag-toggle label="Unchecked"></ag-toggle>
                <span className="text-sm text-muted-foreground">Off</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle checked label="Checked"></ag-toggle>
                <span className="text-sm text-muted-foreground">On</span>
              </div>
            </div>
          }
          code={`<ag-toggle label="Unchecked" />
<ag-toggle checked label="Checked" />`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Prevent interaction with disabled toggles."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ag-toggle disabled label="Disabled Off"></ag-toggle>
                <span className="text-sm text-muted-foreground">Disabled (unchecked)</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle disabled checked label="Disabled On"></ag-toggle>
                <span className="text-sm text-muted-foreground">Disabled (checked)</span>
              </div>
            </div>
          }
          code={`<ag-toggle disabled label="Disabled Off" />
<ag-toggle disabled checked label="Disabled On" />`}
        />

        {/* Readonly State */}
        <CodeExample
          title="Readonly State"
          description="Display the toggle in a readonly state - visually interactive but doesn't change."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ag-toggle readonly label="Readonly Off"></ag-toggle>
                <span className="text-sm text-muted-foreground">Readonly (unchecked)</span>
              </div>
              <div className="flex items-center gap-2">
                <ag-toggle readonly checked label="Readonly On"></ag-toggle>
                <span className="text-sm text-muted-foreground">Readonly (checked)</span>
              </div>
            </div>
          }
          code={`<ag-toggle readonly label="Readonly Off" />
<ag-toggle readonly checked label="Readonly On" />`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Toggle with event handling and state management."
          preview={
            <div className="flex items-center gap-2">
              <ag-toggle label="Interactive Toggle"></ag-toggle>
              <span className="text-sm text-muted-foreground">Try clicking me</span>
            </div>
          }
          code={`<script>
  let isToggled = false;

  function handleToggle(event) {
    isToggled = event.detail.checked;
  }
</script>

<ag-toggle
  checked={isToggled}
  on:toggle-change={handleToggle}
  label="Interactive Toggle"
/>
<p>Current state: {isToggled ? 'Enabled' : 'Disabled'}</p>`}
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
                  <ag-toggle
                    checked
                    label="Enable Notifications"
                    variant="success"
                  ></ag-toggle>
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
                  <ag-toggle label="Dark Mode"></ag-toggle>
                </div>
              </div>
            </div>
          }
          code={`<script>
  let notificationsEnabled = true;
  let darkModeEnabled = false;

  function handleNotificationsToggle(event) {
    notificationsEnabled = event.detail.checked;
  }

  function handleDarkModeToggle(event) {
    darkModeEnabled = event.detail.checked;
  }
</script>

<div class="flex items-center justify-between p-4 border rounded-lg">
  <div>
    <p class="font-medium">Enable Notifications</p>
    <p class="text-sm text-muted-foreground">
      Receive notifications about important updates
    </p>
  </div>
  <ag-toggle
    checked={notificationsEnabled}
    on:toggle-change={handleNotificationsToggle}
    label="Enable Notifications"
    variant="success"
  />
</div>

<div class="flex items-center justify-between p-4 border rounded-lg">
  <div>
    <p class="font-medium">Dark Mode</p>
    <p class="text-sm text-muted-foreground">
      Switch between light and dark themes
    </p>
  </div>
  <ag-toggle
    checked={darkModeEnabled}
    on:toggle-change={handleDarkModeToggle}
    label="Dark Mode"
  />
</div>`}
        />

        {/* Form Integration */}
        <CodeExample
          title="Form Integration"
          description="Use toggles in forms with name and value attributes."
          preview={
            <div className="space-y-4">
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
            </div>
          }
          code={`<ag-toggle
  name="terms"
  value="accepted"
  label="I agree to the terms and conditions"
/>
<ag-toggle
  name="newsletter"
  value="subscribed"
  label="Subscribe to newsletter"
/>`}
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

export default ToggleSvelte;
