import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import svelteIcon from "@/assets/icons/svelte.svg";
import { useEffect, useRef, ReactNode } from "react";
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
}

// Helper component to render ag-accordion-item in React
const AccordionItemWrapper = ({ children, ...props }: AccordionItemWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (ref.current) {
      Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'boolean') {
          if (value) {
            ref.current?.setAttribute(key, '');
          }
        } else if (value !== undefined && value !== null) {
          const attrName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
          ref.current?.setAttribute(attrName, String(value));
        }
      });
    }
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

        {/* With Indicator */}
        <CodeExample
          title="With Indicator"
          description="Add the indicator attribute to show a default chevron that rotates on open/close."
          preview={
            <AccordionGroupWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Roger Federer</span>
                <div slot="content">
                  Roger Federer is a Swiss professional tennis player. He has won 20
                  Grand Slam men's singles titles.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Serena Williams</span>
                <div slot="content">
                  Serena Jameka Williams is an American professional tennis player.
                  She has won 23 Grand Slam singles titles.
                </div>
              </AccordionItemWrapper>
            </AccordionGroupWrapper>
          }
          code={`<ag-accordion>
  <ag-accordion-item indicator>
    <span slot="header">Roger Federer</span>
    <div slot="content">
      Roger Federer is a Swiss professional tennis player...
    </div>
  </ag-accordion-item>
  <ag-accordion-item indicator>
    <span slot="header">Serena Williams</span>
    <div slot="content">
      Serena Jameka Williams is an American professional tennis player...
    </div>
  </ag-accordion-item>
</ag-accordion>`}
        />

        {/* With Background */}
        <CodeExample
          title="With Background"
          description="Add the background attribute to apply a subtle background color to accordion headers."
          preview={
            <AccordionGroupWrapper>
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
            </AccordionGroupWrapper>
          }
          code={`<ag-accordion>
  <ag-accordion-item indicator background>
    <span slot="header">What are design tokens?</span>
    <div slot="content">
      Design tokens are the visual design atoms...
    </div>
  </ag-accordion-item>
  <ag-accordion-item indicator background>
    <span slot="header">How does theming work?</span>
    <div slot="content">
      AgnosticUI uses CSS custom properties...
    </div>
  </ag-accordion-item>
</ag-accordion>`}
        />

        {/* Custom Indicator */}
        <CodeExample
          title="Custom Indicator"
          description="Override the default chevron with a custom indicator using the indicator slot."
          preview={
            <AccordionGroupWrapper>
              <AccordionItemWrapper indicator background>
                <span slot="header">Featured Item</span>
                <span slot="indicator">⭐</span>
                <div slot="content">
                  You can use any content as a custom indicator.
                </div>
              </AccordionItemWrapper>
            </AccordionGroupWrapper>
          }
          code={`<ag-accordion>
  <ag-accordion-item indicator background>
    <span slot="header">Featured Item</span>
    <span slot="indicator">⭐</span>
    <div slot="content">
      You can use any content as a custom indicator...
    </div>
  </ag-accordion-item>
</ag-accordion>`}
        />

        {/* Event Handling */}
        <CodeExample
          title="Event Handling"
          description="Listen to toggle events with Svelte's event syntax."
          preview={
            <AccordionGroupWrapper>
              <AccordionItemWrapper indicator>
                <span slot="header">Item 1</span>
                <div slot="content">Content for item 1</div>
              </AccordionItemWrapper>
            </AccordionGroupWrapper>
          }
          code={`<script>
  function handleToggle(event) {
    console.log('Accordion toggled:', event.detail);
  }
</script>

<ag-accordion>
  <ag-accordion-item indicator on:toggle={handleToggle}>
    <span slot="header">Item 1</span>
    <div slot="content">Content for item 1</div>
  </ag-accordion-item>
</ag-accordion>`}
        />

        {/* Accessibility */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Accessibility</h2>
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
