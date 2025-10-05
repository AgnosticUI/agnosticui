import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

const ToggleVue = () => {
  return (
    <ComponentLayout
      componentName="Toggle"
      framework="Vue"
      frameworkIcon={vueIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
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
          <h2 className={styles.heading2}>Import</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { VueToggle } from 'agnosticui-core/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">
                <strong>Note:</strong> The VueToggle component is a thin wrapper around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-toggle</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrapper handles event forwarding and provides a native Vue developer experience.
              </p>
              <div className="mt-3 pt-3 border-t border-blue-200 dark:border-blue-700">
                <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                  <strong>Try it live:</strong> See the VueToggle component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-toggle-demo"
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
          description="A binary toggle switch implementing the WAI-ARIA Switch pattern."
          preview={
            <div className="flex items-center gap-2">
              <ag-toggle label="Toggle me"></ag-toggle>
            </div>
          }
          code={`<template>
  <VueToggle label="Toggle me" />
</template>

<script setup lang="ts">
import { VueToggle } from 'agnosticui-core/vue';
import 'agnosticui-core';
</script>`}
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
          code={`<template>
  <VueToggle size="xs" label="Extra Small" />
  <VueToggle size="sm" label="Small" />
  <VueToggle size="md" label="Medium" />
  <VueToggle size="lg" label="Large" />
  <VueToggle size="xl" label="Extra Large" />
</template>`}
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
          code={`<template>
  <VueToggle :checked="true" label="Default (Primary)" />
  <VueToggle :checked="true" variant="success" label="Success" />
  <VueToggle :checked="true" variant="warning" label="Warning" />
  <VueToggle :checked="true" variant="danger" label="Danger" />
</template>`}
        />

        {/* Checked State */}
        <CodeExample
          title="Checked State"
          description="Control the toggle state with the checked prop."
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
          code={`<template>
  <VueToggle :checked="false" label="Unchecked" />
  <VueToggle :checked="true" label="Checked" />
</template>`}
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
          code={`<template>
  <VueToggle :disabled="true" label="Disabled Off" />
  <VueToggle :disabled="true" :checked="true" label="Disabled On" />
</template>`}
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
          code={`<template>
  <VueToggle :readonly="true" label="Readonly Off" />
  <VueToggle :readonly="true" :checked="true" label="Readonly On" />
</template>`}
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
          code={`<template>
  <VueToggle
    :checked="isToggled"
    @toggle-change="handleToggle"
    label="Interactive Toggle"
  />
  <p>Current state: {{ isToggled ? 'Enabled' : 'Disabled' }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isToggled = ref(false);

const handleToggle = (event: CustomEvent) => {
  isToggled.value = event.detail.checked;
};
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
          code={`<template>
  <div class="flex items-center justify-between p-4 border rounded-lg">
    <div>
      <p class="font-medium">Enable Notifications</p>
      <p class="text-sm text-muted-foreground">
        Receive notifications about important updates
      </p>
    </div>
    <VueToggle
      :checked="notificationsEnabled"
      @toggle-change="handleNotificationsToggle"
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
    <VueToggle
      :checked="darkModeEnabled"
      @toggle-change="handleDarkModeToggle"
      label="Dark Mode"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const notificationsEnabled = ref(true);
const darkModeEnabled = ref(false);

const handleNotificationsToggle = (event: CustomEvent) => {
  notificationsEnabled.value = event.detail.checked;
};

const handleDarkModeToggle = (event: CustomEvent) => {
  darkModeEnabled.value = event.detail.checked;
};
</script>`}
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
          code={`<template>
  <VueToggle
    name="terms"
    value="accepted"
    label="I agree to the terms and conditions"
  />
  <VueToggle
    name="newsletter"
    value="subscribed"
    label="Subscribe to newsletter"
  />
</template>`}
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
                  The <code className="px-1 bg-muted rounded">label</code> prop is
                  required for accessibility. Alternatively, use{" "}
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

export default ToggleVue;
