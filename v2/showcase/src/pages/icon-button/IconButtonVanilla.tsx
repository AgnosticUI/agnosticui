import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import javascriptIcon from "@/assets/icons/javascript.svg";
import { useEffect, useRef, useState, ReactNode } from "react";
import { Settings, X, Plus, Trash2, Edit, Heart, Star, Download } from "lucide-react";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

interface IconButtonWrapperProps {
  children?: ReactNode;
  label: string;
  icon?: string;
  unicode?: string;
  variant?: string;
  size?: string;
  type?: string;
  disabled?: boolean;
  pressed?: boolean;
  loading?: boolean;
  onClick?: (event: Event) => void;
}

// Helper component to render ag-icon-button in React
const IconButtonWrapper = ({ children, label, ...props }: IconButtonWrapperProps) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set label (required for accessibility)
    element.setAttribute('label', label);

    const listeners: Array<{ event: string; handler: EventListener }> = [];

    Object.entries(props).forEach(([key, value]) => {
      if (key.startsWith('on') && typeof value === 'function') {
        const eventName = key.toLowerCase().substring(2);
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
        element.setAttribute(key, String(value));
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      listeners.forEach(({ event, handler }) => {
        element.removeEventListener(event, handler);
      });
    };
  }, [label, props]);

  return <ag-icon-button ref={ref}>{children}</ag-icon-button>;
};

const IconButtonVanilla = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event: Event) => {
    console.log("Icon button clicked:", event);
    setClickCount((prev) => prev + 1);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
  };

  const handleAsyncAction = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <ComponentLayout
      componentName="IconButton"
      framework="Vanilla (Web Components)"
      frameworkIcon={javascriptIcon}
    >
      <div className={styles.componentLayout}>
        {/* Installation */}
        <section>
          <h2 className={styles.heading2}>Installation</h2>
          <Card className="bg-muted">
            <CardContent className="p-4">
              <pre className={styles.preSmall}>
                <code>npm install agnostic-lit</code>
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
                <code>{`import 'agnostic-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Basic Usage */}
        <CodeExample
          title="Basic Usage"
          description="Icon-only buttons with required accessible labels. The label prop is critical for screen reader users."
          preview={
            <>
              <IconButtonWrapper label="Settings">
                <Settings size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Close">
                <X size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Add">
                <Plus size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Delete">
                <Trash2 size={16} />
              </IconButtonWrapper>
            </>
          }
          code={`import "agnosticui-core";

<ag-icon-button label="Settings">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Close">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Add">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Delete">
  <svg>...</svg>
</ag-icon-button>`}
        />

        <CodeExample
          title="Icon Button Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <IconButtonWrapper label="Edit" variant="ghost">
                <Edit size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Add" variant="primary">
                <Plus size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Settings" variant="secondary">
                <Settings size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Delete" variant="danger">
                <Trash2 size={16} />
              </IconButtonWrapper>
            </>
          }
          code={`<ag-icon-button label="Edit" variant="ghost">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Add" variant="primary">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Settings" variant="secondary">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Delete" variant="danger">
  <svg>...</svg>
</ag-icon-button>`}
        />

        <CodeExample
          title="Icon Button Sizes"
          description="Five size options from extra small to extra large."
          preview={
            <>
              <IconButtonWrapper label="Settings" size="xs">
                <Settings size={12} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Settings" size="sm">
                <Settings size={14} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Settings" size="md">
                <Settings size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Settings" size="lg">
                <Settings size={20} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Settings" size="xl">
                <Settings size={24} />
              </IconButtonWrapper>
            </>
          }
          code={`<ag-icon-button label="Settings" size="xs">
  <svg width="12" height="12">...</svg>
</ag-icon-button>
<ag-icon-button label="Settings" size="sm">
  <svg width="14" height="14">...</svg>
</ag-icon-button>
<ag-icon-button label="Settings" size="md">
  <svg width="16" height="16">...</svg>
</ag-icon-button>
<ag-icon-button label="Settings" size="lg">
  <svg width="20" height="20">...</svg>
</ag-icon-button>
<ag-icon-button label="Settings" size="xl">
  <svg width="24" height="24">...</svg>
</ag-icon-button>`}
        />

        <CodeExample
          title="Event Handling"
          description="Subscribe to click events using addEventListener with the 'icon-button-click' event. The event detail includes the original event, label, and pressed state."
          preview={
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <IconButtonWrapper label="Increment" onClick={handleClick}>
                <Plus size={16} />
              </IconButtonWrapper>
              <span>Clicked {clickCount} times</span>
            </div>
          }
          language="javascript"
          code={`import "agnosticui-core";

<ag-icon-button id="incrementBtn" label="Increment">
  <svg>...</svg>
</ag-icon-button>
<span id="counter">Clicked 0 times</span>

<script>
  let clickCount = 0;
  const button = document.getElementById('incrementBtn');
  const counter = document.getElementById('counter');

  button.addEventListener('icon-button-click', (event) => {
    console.log("IconButton clicked:", event.detail);
    // event.detail contains: { originalEvent, label, pressed }

    clickCount++;
    counter.textContent = \`Clicked \${clickCount} times\`;
  });
</script>`}
        />

        <CodeExample
          title="Button States"
          description="Disabled and loading states for user feedback."
          preview={
            <>
              <IconButtonWrapper label="Disabled" disabled>
                <Settings size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Download" loading={isLoading} onClick={handleAsyncAction}>
                <Download size={16} />
              </IconButtonWrapper>
            </>
          }
          language="javascript"
          code={`<ag-icon-button label="Disabled" disabled>
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button id="downloadBtn" label="Download">
  <svg>...</svg>
</ag-icon-button>

<script>
  const downloadBtn = document.getElementById('downloadBtn');

  downloadBtn.addEventListener('icon-button-click', async () => {
    downloadBtn.loading = true;

    await new Promise((resolve) => setTimeout(resolve, 2000));

    downloadBtn.loading = false;
  });
</script>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Icon button that maintains pressed state like a toggle. Perfect for favorite/like buttons."
          preview={
            <IconButtonWrapper
              label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              pressed={isFavorite}
              variant={isFavorite ? "primary" : "ghost"}
              onClick={handleFavoriteToggle}
            >
              <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
            </IconButtonWrapper>
          }
          language="javascript"
          code={`<ag-icon-button id="favoriteBtn" label="Add to favorites">
  <svg id="heartIcon">...</svg>
</ag-icon-button>

<script>
  let isFavorite = false;
  const favoriteBtn = document.getElementById('favoriteBtn');
  const heartIcon = document.getElementById('heartIcon');

  favoriteBtn.addEventListener('icon-button-click', () => {
    isFavorite = !isFavorite;
    favoriteBtn.pressed = isFavorite;
    favoriteBtn.variant = isFavorite ? 'primary' : 'ghost';
    favoriteBtn.label = isFavorite ? 'Remove from favorites' : 'Add to favorites';
    heartIcon.setAttribute('fill', isFavorite ? 'currentColor' : 'none');
  });
</script>`}
        />

        <CodeExample
          title="Unicode Icons"
          description="Use simple Unicode symbols for lightweight icons without external dependencies."
          preview={
            <>
              <IconButtonWrapper label="Close" unicode="×" />
              <IconButtonWrapper label="Add" unicode="+" />
              <IconButtonWrapper label="Menu" unicode="☰" />
              <IconButtonWrapper label="Star" unicode="★" variant="primary" />
            </>
          }
          code={`<ag-icon-button label="Close" unicode="×"></ag-icon-button>
<ag-icon-button label="Add" unicode="+"></ag-icon-button>
<ag-icon-button label="Menu" unicode="☰"></ag-icon-button>
<ag-icon-button label="Star" unicode="★" variant="primary"></ag-icon-button>`}
        />

        <CodeExample
          title="Button Types"
          description="Different HTML button types for form handling."
          preview={
            <>
              <IconButtonWrapper label="Submit" type="submit" variant="primary">
                <Plus size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Reset" type="reset" variant="secondary">
                <X size={16} />
              </IconButtonWrapper>
              <IconButtonWrapper label="Button" type="button">
                <Settings size={16} />
              </IconButtonWrapper>
            </>
          }
          code={`<ag-icon-button label="Submit" type="submit" variant="primary">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Reset" type="reset" variant="secondary">
  <svg>...</svg>
</ag-icon-button>
<ag-icon-button label="Button" type="button">
  <svg>...</svg>
</ag-icon-button>`}
        />

        <CodeExample
          title="Icon Button Group"
          description="Group icon buttons together for toolbar-like interfaces."
          preview={
            <div style={{ display: "inline-flex", gap: "0.25rem" }} role="group" aria-label="Text formatting">
              <IconButtonWrapper label="Bold" variant="secondary">
                <span style={{ fontWeight: "bold" }}>B</span>
              </IconButtonWrapper>
              <IconButtonWrapper label="Italic" variant="secondary">
                <span style={{ fontStyle: "italic" }}>I</span>
              </IconButtonWrapper>
              <IconButtonWrapper label="Underline" variant="secondary">
                <span style={{ textDecoration: "underline" }}>U</span>
              </IconButtonWrapper>
              <IconButtonWrapper label="Favorite" variant="secondary">
                <Star size={16} />
              </IconButtonWrapper>
            </div>
          }
          code={`<div style="display: inline-flex; gap: 0.25rem" role="group" aria-label="Text formatting">
  <ag-icon-button label="Bold" variant="secondary">
    <span style="font-weight: bold">B</span>
  </ag-icon-button>
  <ag-icon-button label="Italic" variant="secondary">
    <span style="font-style: italic">I</span>
  </ag-icon-button>
  <ag-icon-button label="Underline" variant="secondary">
    <span style="text-decoration: underline">U</span>
  </ag-icon-button>
  <ag-icon-button label="Favorite" variant="secondary">
    <svg>...</svg>
  </ag-icon-button>
</div>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default IconButtonVanilla;
