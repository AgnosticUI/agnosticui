import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import styles from "@/shared/styles.module.css";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown } from "lucide-react";
import reactIcon from "@/assets/icons/react.svg";

const AccordionReactDemo = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (itemId: string, detail: { open: boolean }) => {
    setOpenItems((prev) =>
      detail.open ? [...prev, itemId] : prev.filter((id) => id !== itemId)
    );
    console.log(`Accordion item ${itemId} is now:`, detail.open ? "open" : "closed");
  };

  return (
    <ComponentLayout
      componentName="Accordion"
      framework="React"
      frameworkIcon={reactIcon}
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
                <code>{`import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from 'agnosticui-core/react';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="A simple accordion without any visual enhancements."
          preview={
            <ReactAccordion>
              <AccordionItem>
                <ItemHeader>What is AgnosticUI?</ItemHeader>
                <ItemContent>
                  AgnosticUI is a minimalist and highly themeable component library
                  built with Lit web components for maximum framework compatibility.
                </ItemContent>
              </AccordionItem>
              <AccordionItem>
                <ItemHeader>Why use web components?</ItemHeader>
                <ItemContent>
                  Web components work across all frameworks (React, Vue, Svelte) and
                  provide true encapsulation with Shadow DOM.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`import { ReactAccordion, AccordionItem, ItemHeader, ItemContent } from 'agnosticui-core/react';

<ReactAccordion>
  <AccordionItem>
    <ItemHeader>What is AgnosticUI?</ItemHeader>
    <ItemContent>
      AgnosticUI is a minimalist and highly themeable component library
      built with Lit web components for maximum framework compatibility.
    </ItemContent>
  </AccordionItem>
  <AccordionItem>
    <ItemHeader>Why use web components?</ItemHeader>
    <ItemContent>
      Web components work across all frameworks (React, Vue, Svelte) and
      provide true encapsulation with Shadow DOM.
    </ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* With Indicator */}
        <CodeExample
          title="With Indicator"
          description="Add the indicator prop to show a default chevron that rotates on open/close."
          preview={
            <ReactAccordion>
              <AccordionItem indicator>
                <ItemHeader>Roger Federer</ItemHeader>
                <ItemContent>
                  Roger Federer is a Swiss professional tennis player. He has won 20
                  Grand Slam men's singles titles, an all-time record shared with
                  Rafael Nadal and Novak Djokovic.
                </ItemContent>
              </AccordionItem>
              <AccordionItem indicator>
                <ItemHeader>Serena Williams</ItemHeader>
                <ItemContent>
                  Serena Jameka Williams is an American professional tennis player.
                  She has won 23 Grand Slam singles titles, the most by any player in
                  the Open Era.
                </ItemContent>
              </AccordionItem>
              <AccordionItem indicator>
                <ItemHeader>Andre Agassi</ItemHeader>
                <ItemContent>
                  Andre Kirk Agassi is an American former world No. 1 tennis player.
                  He is an eight-time major champion and a 1996 Olympic gold medalist.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`<ReactAccordion>
  <AccordionItem indicator>
    <ItemHeader>Roger Federer</ItemHeader>
    <ItemContent>
      Roger Federer is a Swiss professional tennis player...
    </ItemContent>
  </AccordionItem>
  <AccordionItem indicator>
    <ItemHeader>Serena Williams</ItemHeader>
    <ItemContent>
      Serena Jameka Williams is an American professional tennis player...
    </ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* With Border */}
        <CodeExample
          title="With Border"
          description="Add the bordered prop to show a border around each accordion item."
          preview={
            <ReactAccordion>
              <AccordionItem indicator bordered>
                <ItemHeader>First Item</ItemHeader>
                <ItemContent>
                  This accordion item has a border.
                </ItemContent>
              </AccordionItem>
              <AccordionItem indicator bordered>
                <ItemHeader>Second Item</ItemHeader>
                <ItemContent>
                  This accordion item also has a border.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`<ReactAccordion>
  <AccordionItem indicator bordered>
    <ItemHeader>First Item</ItemHeader>
    <ItemContent>...</ItemContent>
  </AccordionItem>
  <AccordionItem indicator bordered>
    <ItemHeader>Second Item</ItemHeader>
    <ItemContent>...</ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* With Background */}
        <CodeExample
          title="With Background"
          description="Add the background prop to apply a subtle background color to accordion headers."
          preview={
            <ReactAccordion>
              <AccordionItem indicator background>
                <ItemHeader>What are design tokens?</ItemHeader>
                <ItemContent>
                  Design tokens are the visual design atoms of the design system —
                  specifically, they are named entities that store visual design
                  attributes like colors, spacing, and typography.
                </ItemContent>
              </AccordionItem>
              <AccordionItem indicator background>
                <ItemHeader>How does theming work?</ItemHeader>
                <ItemContent>
                  AgnosticUI uses CSS custom properties (--ag-* tokens) that can be
                  overridden to create custom themes. Support for light and dark modes
                  is built-in.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`<ReactAccordion>
  <AccordionItem indicator background>
    <ItemHeader>What are design tokens?</ItemHeader>
    <ItemContent>
      Design tokens are the visual design atoms...
    </ItemContent>
  </AccordionItem>
  <AccordionItem indicator background>
    <ItemHeader>How does theming work?</ItemHeader>
    <ItemContent>
      AgnosticUI uses CSS custom properties...
    </ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* Custom Indicator */}
        <CodeExample
          title="Custom Indicator"
          description="Override the default chevron with a custom indicator using the indicator slot."
          preview={
            <ReactAccordion>
              <AccordionItem indicator background>
                <ItemHeader>Featured Item</ItemHeader>
                <span slot="indicator">
                  <ArrowDown size={16} />
                </span>
                <ItemContent>
                  You can use any content as a custom indicator - icons, emoji, or
                  custom SVGs. The indicator will automatically rotate 180 degrees when
                  the accordion opens.
                </ItemContent>
              </AccordionItem>
              <AccordionItem indicator background>
                <ItemHeader>Another Featured Item</ItemHeader>
                <span slot="indicator"><ArrowDown size={"16"} /></span>
                <ItemContent>
                  Custom indicators respect the prefers-reduced-motion media query for
                  accessibility.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`import { Star } from "lucide-react";

<ReactAccordion>
  <AccordionItem indicator background>
    <ItemHeader>Featured Item</ItemHeader>
      <span slot="indicator">
        <Star size={16} />
      </span>
    <ItemContent>
      You can use any content as a custom indicator...
    </ItemContent>
  </AccordionItem>
  <AccordionItem indicator background>
    <ItemHeader>Another Featured Item</ItemHeader>
    <span slot="indicator"><Star size={"16"} /></span>
    <ItemContent>
      Custom indicators respect prefers-reduced-motion...
    </ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* Disabled State */}
        <CodeExample
          title="Disabled State"
          description="Prevent interaction with disabled accordion items."
          preview={
            <ReactAccordion>
              <AccordionItem indicator>
                <ItemHeader>Active Item</ItemHeader>
                <ItemContent>This item can be toggled normally.</ItemContent>
              </AccordionItem>
              <AccordionItem indicator disabled>
                <ItemHeader>Disabled Item</ItemHeader>
                <ItemContent>
                  This content won't be accessible because the item is disabled.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`<ReactAccordion>
  <AccordionItem indicator>
    <ItemHeader>Active Item</ItemHeader>
    <ItemContent>This item can be toggled normally.</ItemContent>
  </AccordionItem>
  <AccordionItem indicator disabled>
    <ItemHeader>Disabled Item</ItemHeader>
    <ItemContent>
      This content won't be accessible...
    </ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* Event Handling */}
        <CodeExample
          title="Event Handling"
          description="Listen to toggle events to track accordion state."
          preview={
            <div className="space-y-4">
              <ReactAccordion>
                <AccordionItem
                  indicator
                  onToggle={(detail) => handleToggle("item1", detail)}
                >
                  <ItemHeader>Item 1</ItemHeader>
                  <ItemContent>Content for item 1</ItemContent>
                </AccordionItem>
                <AccordionItem
                  indicator
                  onToggle={(detail) => handleToggle("item2", detail)}
                >
                  <ItemHeader>Item 2</ItemHeader>
                  <ItemContent>Content for item 2</ItemContent>
                </AccordionItem>
              </ReactAccordion>
              <Card className="bg-muted">
                <CardContent className="p-4">
                  <p className="text-sm">
                    Open items: {openItems.length > 0 ? openItems.join(", ") : "None"}
                  </p>
                </CardContent>
              </Card>
            </div>
          }
          code={`const [openItems, setOpenItems] = useState<string[]>([]);

const handleToggle = (itemId: string, detail: { open: boolean }) => {
  setOpenItems(prev =>
    detail.open ? [...prev, itemId] : prev.filter(id => id !== itemId)
  );
};

<ReactAccordion>
  <AccordionItem
    indicator
    onToggle={(detail) => handleToggle("item1", detail)}
  >
    <ItemHeader>Item 1</ItemHeader>
    <ItemContent>Content for item 1</ItemContent>
  </AccordionItem>
</ReactAccordion>`}
        />

        {/* Heading Levels */}
        <CodeExample
          title="Semantic Heading Levels"
          description="Customize the heading level for proper document outline."
          preview={
            <ReactAccordion>
              <AccordionItem indicator headingLevel={2}>
                <ItemHeader>Level 2 Heading</ItemHeader>
                <ItemContent>
                  This accordion uses an h2 element for better document structure.
                </ItemContent>
              </AccordionItem>
              <AccordionItem indicator headingLevel={4}>
                <ItemHeader>Level 4 Heading</ItemHeader>
                <ItemContent>
                  This accordion uses an h4 element. Default is h3.
                </ItemContent>
              </AccordionItem>
            </ReactAccordion>
          }
          code={`<ReactAccordion>
  <AccordionItem indicator headingLevel={2}>
    <ItemHeader>Level 2 Heading</ItemHeader>
    <ItemContent>
      This accordion uses an h2 element...
    </ItemContent>
  </AccordionItem>
  <AccordionItem indicator headingLevel={4}>
    <ItemHeader>Level 4 Heading</ItemHeader>
    <ItemContent>
      This accordion uses an h4 element. Default is h3.
    </ItemContent>
  </AccordionItem>
</ReactAccordion>`}
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
                  <li>Semantic heading levels (customizable with headingLevel prop)</li>
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

export default AccordionReactDemo;
