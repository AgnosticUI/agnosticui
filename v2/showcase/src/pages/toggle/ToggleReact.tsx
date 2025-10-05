import { ReactToggle } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const ToggleReact = () => {
  const [basicToggle, setBasicToggle] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleBasicToggle = (detail: {
    checked: boolean;
    name: string;
    value: string;
  }) => {
    console.log("Toggle changed:", detail);
    setBasicToggle(detail.checked);
  };

  const handleNotificationsToggle = (detail: { checked: boolean }) => {
    setNotificationsEnabled(detail.checked);
  };

  const handleDarkModeToggle = (detail: { checked: boolean }) => {
    setDarkModeEnabled(detail.checked);
  };

  return (
    <ComponentLayout
      componentName="Toggle"
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
                <code>npm install agnosticui-core</code>
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
                <code>{`import { ReactToggle } from 'agnosticui-core/react';`}</code>
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
              <ReactToggle label="Toggle me" />
            </div>
          }
          language="typescript"
          code={`import { ReactToggle } from "agnosticui-core/react";

<ReactToggle label="Toggle me" />`}
        />

        {/* Size Variants */}
        <CodeExample
          title="Size Variants"
          description="Toggle switches in different sizes from extra small to extra large."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ReactToggle size="xs" label="Extra Small" />
                <span className="text-sm text-muted-foreground">
                  Extra Small
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle size="sm" label="Small" />
                <span className="text-sm text-muted-foreground">Small</span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle size="md" label="Medium" />
                <span className="text-sm text-muted-foreground">
                  Medium (default)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle size="lg" label="Large" />
                <span className="text-sm text-muted-foreground">Large</span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle size="xl" label="Extra Large" />
                <span className="text-sm text-muted-foreground">
                  Extra Large
                </span>
              </div>
            </div>
          }
          language="xml"
          code={`<ReactToggle size="xs" label="Extra Small" />
<ReactToggle size="sm" label="Small" />
<ReactToggle size="md" label="Medium" />
<ReactToggle size="lg" label="Large" />
<ReactToggle size="xl" label="Extra Large" />`}
        />

        {/* Color Variants */}
        <CodeExample
          title="Color Variants"
          description="Toggle switches with different semantic colors for various use cases."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ReactToggle checked label="Default (Primary)" />
                <span className="text-sm text-muted-foreground">Default</span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle checked variant="success" label="Success" />
                <span className="text-sm text-muted-foreground">Success</span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle checked variant="warning" label="Warning" />
                <span className="text-sm text-muted-foreground">Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle checked variant="danger" label="Danger" />
                <span className="text-sm text-muted-foreground">Danger</span>
              </div>
            </div>
          }
          language="xml"
          code={`<ReactToggle checked label="Default (Primary)" />
<ReactToggle checked variant="success" label="Success" />
<ReactToggle checked variant="warning" label="Warning" />
<ReactToggle checked variant="danger" label="Danger" />`}
        />

        {/* Checked State */}
        <CodeExample
          title="Checked State"
          description="Control the toggle state with the checked prop."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ReactToggle checked={false} label="Unchecked" />
                <span className="text-sm text-muted-foreground">Off</span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle checked={true} label="Checked" />
                <span className="text-sm text-muted-foreground">On</span>
              </div>
            </div>
          }
          language="xml"
          code={`<ReactToggle checked={false} label="Unchecked" />
<ReactToggle checked={true} label="Checked" />`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Prevent interaction with disabled toggles."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ReactToggle disabled label="Disabled Off" />
                <span className="text-sm text-muted-foreground">
                  Disabled (unchecked)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle disabled checked label="Disabled On" />
                <span className="text-sm text-muted-foreground">
                  Disabled (checked)
                </span>
              </div>
            </div>
          }
          language="xml"
          code={`<ReactToggle disabled label="Disabled Off" />
<ReactToggle disabled checked label="Disabled On" />`}
        />

        {/* Readonly State */}
        <CodeExample
          title="Readonly State"
          description="Display the toggle in a readonly state - visually interactive but doesn't change."
          preview={
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <ReactToggle readonly label="Readonly Off" />
                <span className="text-sm text-muted-foreground">
                  Readonly (unchecked)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <ReactToggle readonly checked label="Readonly On" />
                <span className="text-sm text-muted-foreground">
                  Readonly (checked)
                </span>
              </div>
            </div>
          }
          language="xml"
          code={`<ReactToggle readonly label="Readonly Off" />
<ReactToggle readonly checked label="Readonly On" />`}
        />

        {/* Interactive Example */}
        <CodeExample
          title="Interactive Example"
          description="Toggle with event handling and state management."
          preview={
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ReactToggle
                  checked={basicToggle}
                  onChange={handleBasicToggle}
                  label="Interactive Toggle"
                />
                <span className="text-sm text-muted-foreground">
                  {basicToggle ? "On" : "Off"}
                </span>
              </div>
              <Card className="bg-muted">
                <CardContent className="p-4">
                  <p className="text-sm">
                    Current state:{" "}
                    <strong>{basicToggle ? "Enabled" : "Disabled"}</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          }
          language="typescript"
          code={`const [basicToggle, setBasicToggle] = useState(false);

const handleBasicToggle = (detail: { checked: boolean }) => {
  setBasicToggle(detail.checked);
};

<ReactToggle
  checked={basicToggle}
  onChange={handleBasicToggle}
  label="Interactive Toggle"
/>

<p>Current state: {basicToggle ? "Enabled" : "Disabled"}</p>`}
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
                  <ReactToggle
                    checked={notificationsEnabled}
                    onChange={handleNotificationsToggle}
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
                  <ReactToggle
                    checked={darkModeEnabled}
                    onChange={handleDarkModeToggle}
                    label="Dark Mode"
                  />
                </div>
              </div>
            </div>
          }
          language="typescript"
          code={`const [notificationsEnabled, setNotificationsEnabled] = useState(true);
const [darkModeEnabled, setDarkModeEnabled] = useState(false);

const handleNotificationsToggle = (detail: { checked: boolean }) => {
  setNotificationsEnabled(detail.checked);
};

const handleDarkModeToggle = (detail: { checked: boolean }) => {
  setDarkModeEnabled(detail.checked);
};

<div className="flex items-center justify-between p-4 border rounded-lg">
  <div>
    <p className="font-medium">Enable Notifications</p>
    <p className="text-sm text-muted-foreground">
      Receive notifications about important updates
    </p>
  </div>
  <ReactToggle
    checked={notificationsEnabled}
    onChange={handleNotificationsToggle}
    label="Enable Notifications"
    variant="success"
  />
</div>

<div className="flex items-center justify-between p-4 border rounded-lg">
  <div>
    <p className="font-medium">Dark Mode</p>
    <p className="text-sm text-muted-foreground">
      Switch between light and dark themes
    </p>
  </div>
  <ReactToggle
    checked={darkModeEnabled}
    onChange={handleDarkModeToggle}
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
              <ReactToggle
                name="terms"
                value="accepted"
                label="I agree to the terms and conditions"
              />
              <ReactToggle
                name="newsletter"
                value="subscribed"
                label="Subscribe to newsletter"
              />
            </div>
          }
          language="xml"
          code={`<ReactToggle
  name="terms"
  value="accepted"
  label="I agree to the terms and conditions"
/>
<ReactToggle
  name="newsletter"
  value="subscribed"
  label="Subscribe to newsletter"
/>`}
        />

        {/* Accessibility */}
        <section className="space-y-4">
          <h2 className={styles.heading2Alt}>Accessibility</h2>
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
                    <kbd className="px-2 py-1 bg-muted rounded">Tab</kbd> - Move
                    focus to/from the toggle
                  </li>
                  <li>
                    <kbd className="px-2 py-1 bg-muted rounded">Space</kbd> or{" "}
                    <kbd className="px-2 py-1 bg-muted rounded">Enter</kbd> -
                    Toggle the switch
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ARIA Support</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <code className="px-1 bg-muted rounded">role="switch"</code>{" "}
                    - Semantic button with switch behavior
                  </li>
                  <li>
                    <code className="px-1 bg-muted rounded">aria-checked</code>{" "}
                    - Communicates current state to screen readers
                  </li>
                  <li>
                    <code className="px-1 bg-muted rounded">aria-label</code> or{" "}
                    <code className="px-1 bg-muted rounded">
                      aria-labelledby
                    </code>{" "}
                    - Required accessible name
                  </li>
                  <li>Screen reader announces state changes ("On" / "Off")</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Required Label</h3>
                <p className="text-sm">
                  The <code className="px-1 bg-muted rounded">label</code> prop
                  is required for accessibility. Alternatively, use{" "}
                  <code className="px-1 bg-muted rounded">labelledBy</code> to
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

export default ToggleReact;
