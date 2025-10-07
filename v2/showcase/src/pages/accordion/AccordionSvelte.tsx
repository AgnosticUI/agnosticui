import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import { useEffect, useRef, ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import styles from "@/shared/styles.module.css";
import "agnosticui-core/accordion";
import "agnosticui-core";

// Helper component to render ag-accordion (group) in React
const AccordionGroupWrapper = ({ children }: { children: ReactNode }) => {
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
  onToggle?: (event: Event) => void;
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

const AccordionSvelte = () => {
  return (
    <ComponentLayout
      componentName="Accordion"
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
                <code>{`import 'agnosticui-core/accordion';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about Svelte usage */}
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
          description="A simple accordion without any visual enhancements."
          preview={
            <AccordionGroupWrapper>
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
            </AccordionGroupWrapper>
          }
          code={`<script>
  import 'agnosticui-core/accordion';
</script>

<ag-accordion>
  <ag-accordion-item>
    <span slot="header">What is AgnosticUI?</span>
    <div slot="content">
      AgnosticUI is a minimalist and highly themeable component library
      built with Lit web components for maximum framework compatibility.
    </div>
  </ag-accordion-item>
  <ag-accordion-item>
    <span slot="header">Why use web components?</span>
    <div slot="content">
      Web components work across all frameworks (React, Vue, Svelte) and
      provide true encapsulation with Shadow DOM.
    </div>
  </ag-accordion-item>
</ag-accordion>`}
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
                  <li>Semantic heading levels (customizable with heading-level attribute)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default AccordionSvelte;
