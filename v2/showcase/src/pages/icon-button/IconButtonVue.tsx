import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, X, Plus, Trash2, Edit, Heart, Star, Download } from "lucide-react";
import vueIcon from "@/assets/icons/vue.svg";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";
import { useEffect, useRef, useState, ReactNode } from "react";

interface IconButtonWrapperProps {
  children?: ReactNode;
  label: string;
  variant?: string;
  size?: string;
  onClick?: (event: Event) => void;
}

// Helper component to render ag-icon-button with event listeners in React
const IconButtonWrapper = ({ children, label, onClick, ...props }: IconButtonWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.setAttribute('label', label);

    const listeners: Array<{ event: string; handler: EventListener }> = [];

    if (onClick) {
      element.addEventListener('icon-button-click', onClick as EventListener);
      listeners.push({ event: 'icon-button-click', handler: onClick as EventListener });
    }

    Object.entries(props).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        }
      } else if (value !== undefined && value !== null) {
        element.setAttribute(key, String(value));
      }
    });

    return () => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    };
  }, [label, onClick, props]);

  return <ag-icon-button ref={ref}>{children}</ag-icon-button>;
};

const IconButtonVue = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event: Event) => {
    console.log("IconButton clicked:", event);
    setClickCount((prev) => prev + 1);
  };
  return (
    <ComponentLayout
      componentName="IconButton"
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
                <code>{`import VueIconButton from 'agnosticui-core/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> The VueIconButton component is a thin wrapper around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-icon-button</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrapper handles event forwarding and provides a native Vue developer experience.
              </p>
              <div className={styles.dividerSection}>
                <p className={styles.smallParagraphBlue}>
                  <strong>Try it live:</strong> See the VueIconButton component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/s/agnosticui-vue-iconbutton-demo"
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
          description="Icon-only buttons with required accessible labels. The label prop is critical for screen reader users."
          preview={
            <>
              <ag-icon-button label="Settings">
                <Settings size={16} />
              </ag-icon-button>
              <ag-icon-button label="Close">
                <X size={16} />
              </ag-icon-button>
              <ag-icon-button label="Add">
                <Plus size={16} />
              </ag-icon-button>
              <ag-icon-button label="Delete">
                <Trash2 size={16} />
              </ag-icon-button>
            </>
          }
          code={`<template>
  <VueIconButton label="Settings">
    <Settings :size="16" />
  </VueIconButton>
  <VueIconButton label="Close">
    <X :size="16" />
  </VueIconButton>
  <VueIconButton label="Add">
    <Plus :size="16" />
  </VueIconButton>
  <VueIconButton label="Delete">
    <Trash2 :size="16" />
  </VueIconButton>
</template>

<script setup lang="ts">
import VueIconButton from 'agnosticui-core/vue';
import { Settings, X, Plus, Trash2 } from 'lucide-vue-next';
</script>`}
        />

        <CodeExample
          title="Icon Button Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <ag-icon-button label="Edit" variant="ghost">
                <Edit size={16} />
              </ag-icon-button>
              <ag-icon-button label="Add" variant="primary">
                <Plus size={16} />
              </ag-icon-button>
              <ag-icon-button label="Settings" variant="secondary">
                <Settings size={16} />
              </ag-icon-button>
              <ag-icon-button label="Delete" variant="danger">
                <Trash2 size={16} />
              </ag-icon-button>
            </>
          }
          code={`<template>
  <VueIconButton label="Edit" variant="ghost">
    <Edit :size="16" />
  </VueIconButton>
  <VueIconButton label="Add" variant="primary">
    <Plus :size="16" />
  </VueIconButton>
  <VueIconButton label="Settings" variant="secondary">
    <Settings :size="16" />
  </VueIconButton>
  <VueIconButton label="Delete" variant="danger">
    <Trash2 :size="16" />
  </VueIconButton>
</template>

<script setup lang="ts">
import { Edit, Plus, Settings, Trash2 } from 'lucide-vue-next';
</script>`}
        />

        <CodeExample
          title="Icon Button Sizes"
          description="Five size options from extra small to extra large."
          preview={
            <>
              <ag-icon-button label="Settings" size="xs">
                <Settings size={12} />
              </ag-icon-button>
              <ag-icon-button label="Settings" size="sm">
                <Settings size={14} />
              </ag-icon-button>
              <ag-icon-button label="Settings" size="md">
                <Settings size={16} />
              </ag-icon-button>
              <ag-icon-button label="Settings" size="lg">
                <Settings size={20} />
              </ag-icon-button>
              <ag-icon-button label="Settings" size="xl">
                <Settings size={24} />
              </ag-icon-button>
            </>
          }
          code={`<template>
  <VueIconButton label="Settings" size="xs">
    <Settings :size="12" />
  </VueIconButton>
  <VueIconButton label="Settings" size="sm">
    <Settings :size="14" />
  </VueIconButton>
  <VueIconButton label="Settings" size="md">
    <Settings :size="16" />
  </VueIconButton>
  <VueIconButton label="Settings" size="lg">
    <Settings :size="20" />
  </VueIconButton>
  <VueIconButton label="Settings" size="xl">
    <Settings :size="24" />
  </VueIconButton>
</template>`}
        />

        <CodeExample
          title="Event Handling"
          description="Subscribe to click events using @click or @icon-button-click. The Vue wrapper forwards both native click events and the custom icon-button-click event."
          preview={
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <IconButtonWrapper label="Increment" onClick={handleClick}>
                <Plus size={16} />
              </IconButtonWrapper>
              <span>Clicked {clickCount} times</span>
            </div>
          }
          code={`<template>
  <div style="display: flex; align-items: center; gap: 0.5rem">
    <!-- Using standard @click event -->
    <VueIconButton label="Increment" @click="handleClick">
      <Plus :size="16" />
    </VueIconButton>
    <span>Clicked {{ clickCount }} times</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueIconButton from 'agnosticui-core/vue';
import { Plus } from 'lucide-vue-next';

const clickCount = ref(0);

const handleClick = (event: Event) => {
  console.log("IconButton clicked:", event);
  clickCount.value++;
};

// Alternative: Listen to custom icon-button-click event
// @icon-button-click="handleIconButtonClick"
// This provides additional context like label and pressed state
</script>`}
        />

        <CodeExample
          title="Button States"
          description="Disabled and loading states for user feedback."
          preview={
            <>
              <ag-icon-button label="Disabled" disabled>
                <Settings size={16} />
              </ag-icon-button>
              <ag-icon-button label="Download">
                <Download size={16} />
              </ag-icon-button>
            </>
          }
          code={`<template>
  <VueIconButton label="Disabled" :disabled="true">
    <Settings :size="16" />
  </VueIconButton>
  <VueIconButton label="Download" :loading="isLoading" @click="handleAsyncAction">
    <Download :size="16" />
  </VueIconButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Settings, Download } from 'lucide-vue-next';

const isLoading = ref(false);

const handleAsyncAction = async () => {
  isLoading.value = true;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  isLoading.value = false;
};
</script>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Icon button that maintains pressed state like a toggle. Perfect for favorite/like buttons."
          preview={
            <ag-icon-button label="Add to favorites" variant="ghost">
              <Heart size={16} />
            </ag-icon-button>
          }
          code={`<template>
  <VueIconButton
    :label="isFavorite ? 'Remove from favorites' : 'Add to favorites'"
    :pressed="isFavorite"
    :variant="isFavorite ? 'primary' : 'ghost'"
    @click="handleFavoriteToggle"
  >
    <Heart :size="16" :fill="isFavorite ? 'currentColor' : 'none'" />
  </VueIconButton>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Heart } from 'lucide-vue-next';

const isFavorite = ref(false);

const handleFavoriteToggle = () => {
  isFavorite.value = !isFavorite.value;
};
</script>`}
        />

        <CodeExample
          title="Unicode Icons"
          description="Use simple Unicode symbols for lightweight icons without external dependencies."
          preview={
            <>
              <ag-icon-button label="Close" unicode="×" />
              <ag-icon-button label="Add" unicode="+" />
              <ag-icon-button label="Menu" unicode="☰" />
              <ag-icon-button label="Star" unicode="★" variant="primary" />
            </>
          }
          code={`<template>
  <VueIconButton label="Close" unicode="×" />
  <VueIconButton label="Add" unicode="+" />
  <VueIconButton label="Menu" unicode="☰" />
  <VueIconButton label="Star" unicode="★" variant="primary" />
</template>`}
        />

        <CodeExample
          title="Button Types"
          description="Different HTML button types for form handling."
          preview={
            <>
              <ag-icon-button label="Submit" type="submit" variant="primary">
                <Plus size={16} />
              </ag-icon-button>
              <ag-icon-button label="Reset" type="reset" variant="secondary">
                <X size={16} />
              </ag-icon-button>
              <ag-icon-button label="Button" type="button">
                <Settings size={16} />
              </ag-icon-button>
            </>
          }
          code={`<template>
  <VueIconButton label="Submit" type="submit" variant="primary">
    <Plus :size="16" />
  </VueIconButton>
  <VueIconButton label="Reset" type="reset" variant="secondary">
    <X :size="16" />
  </VueIconButton>
  <VueIconButton label="Button" type="button">
    <Settings :size="16" />
  </VueIconButton>
</template>`}
        />

        <CodeExample
          title="Icon Button Group"
          description="Group icon buttons together for toolbar-like interfaces."
          preview={
            <div style={{ display: "inline-flex", gap: "0.25rem" }} role="group" aria-label="Text formatting">
              <ag-icon-button label="Bold" variant="secondary">
                <span style={{ fontWeight: "bold" }}>B</span>
              </ag-icon-button>
              <ag-icon-button label="Italic" variant="secondary">
                <span style={{ fontStyle: "italic" }}>I</span>
              </ag-icon-button>
              <ag-icon-button label="Underline" variant="secondary">
                <span style={{ textDecoration: "underline" }}>U</span>
              </ag-icon-button>
              <ag-icon-button label="Favorite" variant="secondary">
                <Star size={16} />
              </ag-icon-button>
            </div>
          }
          code={`<template>
  <div style="display: inline-flex; gap: 0.25rem" role="group" aria-label="Text formatting">
    <VueIconButton label="Bold" variant="secondary">
      <span style="font-weight: bold">B</span>
    </VueIconButton>
    <VueIconButton label="Italic" variant="secondary">
      <span style="font-style: italic">I</span>
    </VueIconButton>
    <VueIconButton label="Underline" variant="secondary">
      <span style="text-decoration: underline">U</span>
    </VueIconButton>
    <VueIconButton label="Favorite" variant="secondary">
      <Star :size="16" />
    </VueIconButton>
  </div>
</template>

<script setup lang="ts">
import { Star } from 'lucide-vue-next';
</script>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default IconButtonVue;
