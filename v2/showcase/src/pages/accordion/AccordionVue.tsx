import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import vueIcon from "@/assets/icons/vue.svg";
import { useEffect, useRef, ReactNode } from "react";
import "agnosticui-core/accordion";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

// Helper component to render ag-accordion (group) in React
const VueAccordionWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const loadWebComponent = async () => {
      await customElements.whenDefined('ag-accordion');
    };
    loadWebComponent();
  }, []);

  return <ag-accordion ref={ref}>{children}</ag-accordion>;
};

interface AccordionItemWrapperProps {
  children?: ReactNode;
  open?: boolean;
  headingLevel?: number;
  disabled?: boolean;
  indicator?: boolean;
  background?: boolean;
  bordered?: boolean;
}

// Helper component to render ag-accordion-item in React
const AccordionItemWrapper = ({ children, ...props }: AccordionItemWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Object.entries(props).forEach(([key, value]) => {
        if (key.startsWith('on') && typeof value === 'function') {
          const eventName = key.toLowerCase().substring(2);
          ref.current?.addEventListener(eventName, value as EventListener);
        } else if (typeof value === 'boolean') {
          if (value) {
            ref.current?.setAttribute(key, '');
          }
        } else if (value !== undefined && value !== null) {
          const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          ref.current?.setAttribute(attrName, String(value));
        }
      });
    }

    return () => {
      if (ref.current) {
        Object.entries(props).forEach(([key, value]) => {
          if (key.startsWith('on') && typeof value === 'function') {
            const eventName = key.toLowerCase().substring(2);
            ref.current?.removeEventListener(eventName, value as EventListener);
          }
        });
      }
    };
  }, [props]);

  return <ag-accordion-item ref={ref}>{children}</ag-accordion-item>;
};

const AccordionVue = () => {
  return (
    <ComponentLayout
      componentName="Accordion"
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
                <code>{`import { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent } from 'agnosticui-core/accordion/vue';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> The Vue Accordion components are thin wrappers around the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-accordion-item</code> web component.
                The previews below show the underlying web component, while the code examples demonstrate the proper Vue syntax.
                The Vue wrappers handle prop forwarding and provide a native Vue developer experience.
              </p>
              <div className={styles.dividerSection}>
                <p className={styles.smallParagraphBlue}>
                  <strong>Try it live:</strong> See the Vue Accordion component in action in CodeSandbox
                </p>
                <a
                  href="https://codesandbox.io/p/sandbox/github/AgnosticUI/agnosticui/tree/main/playgrounds/AccordionVue?file=/src/App.vue"
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
          description="A simple accordion without any visual enhancements."
          preview={
            <VueAccordionWrapper>
              <AccordionItemWrapper>
                <span slot="header">What is AgnosticUI?</span>
                <div slot="content">
                  AgnosticUI is a minimalist and highly themeable component library
                  built with Lit web components for maximum framework compatibility.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper>
                <span slot="header">Why use web components?</span>
                <div slot="content">
                  Web components work across all frameworks (React, Vue, Svelte) and
                  provide true encapsulation with Shadow DOM.
                </div>
              </AccordionItemWrapper>
            </VueAccordionWrapper>
          }
          code={`<template>
  <VueAccordion>
    <VueAccordionItem>
      <VueAccordionHeader>What is AgnosticUI?</VueAccordionHeader>
      <VueAccordionContent>
        AgnosticUI is a minimalist and highly themeable component library
        built with Lit web components for maximum framework compatibility.
      </VueAccordionContent>
    </VueAccordionItem>
    <VueAccordionItem>
      <VueAccordionHeader>Why use web components?</VueAccordionHeader>
      <VueAccordionContent>
        Web components work across all frameworks (React, Vue, Svelte) and
        provide true encapsulation with Shadow DOM.
      </VueAccordionContent>
    </VueAccordionItem>
  </VueAccordion>
</template>

<script setup lang="ts">
import { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent } from 'agnosticui-core/accordion/vue';
</script>`}
        />

        {/* With Indicator */}
        <CodeExample
          title="With Indicator"
          description="Add the indicator prop to show a default chevron that rotates on open/close."
          preview={
            <VueAccordionWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Roger Federer</span>
                <div slot="content">
                  Roger Federer is a Swiss professional tennis player. He has won 20
                  Grand Slam men's singles titles, an all-time record shared with
                  Rafael Nadal and Novak Djokovic.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Serena Williams</span>
                <div slot="content">
                  Serena Jameka Williams is an American professional tennis player.
                  She has won 23 Grand Slam singles titles, the most by any player in
                  the Open Era.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Andre Agassi</span>
                <div slot="content">
                  Andre Kirk Agassi is an American former world No. 1 tennis
                  player. He is an eight-time major champion and a 1996 Olympic
                  gold medalist.
                </div>
              </AccordionItemWrapper>
            </VueAccordionWrapper>
          }
          code={`<template>
  <VueAccordion>
    <VueAccordionItem indicator>
      <VueAccordionHeader>Roger Federer</VueAccordionHeader>
      <VueAccordionContent>
        Roger Federer is a Swiss professional tennis player...
      </VueAccordionContent>
    </VueAccordionItem>
    <VueAccordionItem indicator>
      <VueAccordionHeader>Serena Williams</VueAccordionHeader>
      <VueAccordionContent>
        Serena Jameka Williams is an American professional tennis player...
      </VueAccordionContent>
    </VueAccordionItem>
  </VueAccordion>
</template>`}
        />

        {/* With Border */}
        <CodeExample
          title="With Border"
          description="Add the bordered prop to show a border around each accordion item."
          preview={
            <VueAccordionWrapper>
              <AccordionItemWrapper indicator bordered>
                <span slot="header">First Item</span>
                <div slot="content">
                  This accordion item has a border.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator bordered>
                <span slot="header">Second Item</span>
                <div slot="content">
                  This accordion item also has a border.
                </div>
              </AccordionItemWrapper>
            </VueAccordionWrapper>
          }
          code={`<template>
  <VueAccordion>
    <VueAccordionItem indicator bordered>
      <VueAccordionHeader>First Item</VueAccordionHeader>
      <VueAccordionContent>...</VueAccordionContent>
    </VueAccordionItem>
    <VueAccordionItem indicator bordered>
      <VueAccordionHeader>Second Item</VueAccordionHeader>
      <VueAccordionContent>...</VueAccordionContent>
    </VueAccordionItem>
  </VueAccordion>
</template>`}
        />

        {/* With Background */}
        <CodeExample
          title="With Background"
          description="Add the background prop to apply a subtle background color to accordion headers."
          preview={
            <VueAccordionWrapper>
              <AccordionItemWrapper indicator background>
                <span slot="header">What are design tokens?</span>
                <div slot="content">
                  Design tokens are the visual design atoms of the design system.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator background>
                <span slot="header">How does theming work?</span>
                <div slot="content">
                  AgnosticUI uses CSS custom properties (--ag-* tokens) for theming.
                </div>
              </AccordionItemWrapper>
            </VueAccordionWrapper>
          }
          code={`<template>
  <VueAccordion>
    <VueAccordionItem indicator background>
      <VueAccordionHeader>What are design tokens?</VueAccordionHeader>
      <VueAccordionContent>
        Design tokens are the visual design atoms...
      </VueAccordionContent>
    </VueAccordionItem>
    <VueAccordionItem indicator background>
      <VueAccordionHeader>How does theming work?</VueAccordionHeader>
      <VueAccordionContent>
        AgnosticUI uses CSS custom properties...
      </VueAccordionContent>
    </VueAccordionItem>
  </VueAccordion>
</template>`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Prevent interaction with disabled accordion items."
          preview={
            <VueAccordionWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Active Item</span>
                <div slot="content">This item can be toggled normally.</div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator disabled>
                <span slot="header">Disabled Item</span>
                <div slot="content">
                  This content won't be accessible because the item is disabled.
                </div>
              </AccordionItemWrapper>
            </VueAccordionWrapper>
          }
          code={`<template>
  <VueAccordion>
    <VueAccordionItem indicator>
      <VueAccordionHeader>Active Item</VueAccordionHeader>
      <VueAccordionContent>This item can be toggled normally.</VueAccordionContent>
    </VueAccordionItem>
    <VueAccordionItem indicator disabled>
      <VueAccordionHeader>Disabled Item</VueAccordionHeader>
      <VueAccordionContent>
        This content won't be accessible...
      </VueAccordionContent>
    </VueAccordionItem>
  </VueAccordion>
</template>`}
        />

        {/* Accessibility */}
        <section className="space-y-4">
          <h2 className={styles.heading2Alt}>Accessibility</h2>
          <Card>
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <kbd className="px-2 py-1 bg-muted rounded">Tab</kbd> - Move focus
                    between accordion headers
                  </li>
                  <li>
                    <kbd className="px-2 py-1 bg-muted rounded">Enter</kbd> or{" "}
                    <kbd className="px-2 py-1 bg-muted rounded">Space</kbd> - Toggle
                    accordion item
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ARIA Support</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Proper button roles with aria-expanded state</li>
                  <li>aria-controls linking headers to content regions</li>
                  <li>Semantic heading levels (customizable with headingLevel prop)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default AccordionVue;
