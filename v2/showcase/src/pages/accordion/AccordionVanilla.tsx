import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
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
  onToggle?: (event: CustomEvent) => void;
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

const AccordionVanilla = () => {
  return (
    <ComponentLayout
      componentName="Accordion"
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
                <code>{`import 'agnosticui-core/accordion';`}</code>
              </pre>
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
          code={`import "agnosticui-core/accordion";
import "agnosticui-core"; // For ag-accordion group

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
                  Andre Kirk Agassi is an American former world No. 1 tennis player.
                  He is an eight-time major champion and a 1996 Olympic gold medalist.
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
                  Design tokens are the visual design atoms of the design system —
                  specifically, they are named entities that store visual design
                  attributes like colors, spacing, and typography.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator background>
                <span slot="header">How does theming work?</span>
                <div slot="content">
                  AgnosticUI uses CSS custom properties (--ag-* tokens) that can be
                  overridden to create custom themes. Support for light and dark modes
                  is built-in.
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
                  You can use any content as a custom indicator - icons, emoji, or
                  custom SVGs. The indicator will automatically rotate 180 degrees when
                  the accordion opens.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator background>
                <span slot="header">Another Featured Item</span>
                <span slot="indicator">🎯</span>
                <div slot="content">
                  Custom indicators respect the prefers-reduced-motion media query for
                  accessibility.
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
  <ag-accordion-item indicator background>
    <span slot="header">Another Featured Item</span>
    <span slot="indicator">🎯</span>
    <div slot="content">
      Custom indicators respect prefers-reduced-motion...
    </div>
  </ag-accordion-item>
</ag-accordion>`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Prevent interaction with disabled accordion items."
          preview={
            <AccordionGroupWrapper>
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
            </AccordionGroupWrapper>
          }
          code={`<ag-accordion>
  <ag-accordion-item indicator>
    <span slot="header">Active Item</span>
    <div slot="content">This item can be toggled normally.</div>
  </ag-accordion-item>
  <ag-accordion-item indicator disabled>
    <span slot="header">Disabled Item</span>
    <div slot="content">
      This content won't be accessible...
    </div>
  </ag-accordion-item>
</ag-accordion>`}
        />

        {/* Heading Levels */}
        <CodeExample
          title="Semantic Heading Levels"
          description="Customize the heading level for proper document outline."
          preview={
            <AccordionGroupWrapper>
              <AccordionItemWrapper indicator headingLevel={2}>
                <span slot="header">Level 2 Heading</span>
                <div slot="content">
                  This accordion uses an h2 element for better document structure.
                </div>
              </AccordionItemWrapper>
              <AccordionItemWrapper indicator headingLevel={4}>
                <span slot="header">Level 4 Heading</span>
                <div slot="content">
                  This accordion uses an h4 element. Default is h3.
                </div>
              </AccordionItemWrapper>
            </AccordionGroupWrapper>
          }
          code={`<ag-accordion>
  <ag-accordion-item indicator heading-level="2">
    <span slot="header">Level 2 Heading</span>
    <div slot="content">
      This accordion uses an h2 element...
    </div>
  </ag-accordion-item>
  <ag-accordion-item indicator heading-level="4">
    <span slot="header">Level 4 Heading</span>
    <div slot="content">
      This accordion uses an h4 element. Default is h3.
    </div>
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
                  <li>
                    <kbd className="px-2 py-1 bg-muted rounded">↑</kbd> /{" "}
                    <kbd className="px-2 py-1 bg-muted rounded">↓</kbd> - Navigate
                    between items (when using AccordionGroup)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">ARIA Support</h3>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Proper button roles with aria-expanded state</li>
                  <li>aria-controls linking headers to content regions</li>
                  <li>Semantic heading levels (customizable with heading-level attribute)</li>
                  <li>aria-disabled for disabled items</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Motion Preferences</h3>
                <p className="text-sm">
                  Indicator animations respect{" "}
                  <code className="px-1 bg-muted rounded">
                    prefers-reduced-motion
                  </code>{" "}
                  for users who prefer reduced motion.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </ComponentLayout>
  );
};

export default AccordionVanilla;
