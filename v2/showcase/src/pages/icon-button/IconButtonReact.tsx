import { ReactIconButton } from "agnosticui-core/react";
import { useState } from "react";
import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, X, Plus, Trash2, Edit, Heart, Star, Download } from "lucide-react";
import reactIcon from "@/assets/icons/react.svg";
import styles from "@/shared/styles.module.css";

const IconButtonReact = () => {
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
                <code>npm install agnostic-react</code>
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
                <code>{`import { ReactIconButton } from 'agnostic-core/react';`}</code>
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
              <ReactIconButton label="Settings">
                <Settings size={16} />
              </ReactIconButton>
              <ReactIconButton label="Close">
                <X size={16} />
              </ReactIconButton>
              <ReactIconButton label="Add">
                <Plus size={16} />
              </ReactIconButton>
              <ReactIconButton label="Delete">
                <Trash2 size={16} />
              </ReactIconButton>
            </>
          }
          language="typescript"
          code={`import { ReactIconButton } from "agnosticui-core/react";
import { Settings, X, Plus, Trash2 } from "lucide-react";

<ReactIconButton label="Settings">
  <Settings size={16} />
</ReactIconButton>
<ReactIconButton label="Close">
  <X size={16} />
</ReactIconButton>
<ReactIconButton label="Add">
  <Plus size={16} />
</ReactIconButton>
<ReactIconButton label="Delete">
  <Trash2 size={16} />
</ReactIconButton>`}
        />

        <CodeExample
          title="Icon Button Variants"
          description="Different visual styles for various use cases."
          preview={
            <>
              <ReactIconButton label="Edit" variant="ghost">
                <Edit size={16} />
              </ReactIconButton>
              <ReactIconButton label="Add" variant="primary">
                <Plus size={16} />
              </ReactIconButton>
              <ReactIconButton label="Settings" variant="secondary">
                <Settings size={16} />
              </ReactIconButton>
              <ReactIconButton label="Delete" variant="danger">
                <Trash2 size={16} />
              </ReactIconButton>
            </>
          }
          language="typescript"
          code={`import { Edit, Plus, Settings, Trash2 } from "lucide-react";

<ReactIconButton label="Edit" variant="ghost">
  <Edit size={16} />
</ReactIconButton>
<ReactIconButton label="Add" variant="primary">
  <Plus size={16} />
</ReactIconButton>
<ReactIconButton label="Settings" variant="secondary">
  <Settings size={16} />
</ReactIconButton>
<ReactIconButton label="Delete" variant="danger">
  <Trash2 size={16} />
</ReactIconButton>`}
        />

        <CodeExample
          title="Icon Button Sizes"
          description="Five size options from extra small to extra large."
          preview={
            <>
              <ReactIconButton label="Settings" size="xs">
                <Settings size={12} />
              </ReactIconButton>
              <ReactIconButton label="Settings" size="sm">
                <Settings size={14} />
              </ReactIconButton>
              <ReactIconButton label="Settings" size="md">
                <Settings size={16} />
              </ReactIconButton>
              <ReactIconButton label="Settings" size="lg">
                <Settings size={20} />
              </ReactIconButton>
              <ReactIconButton label="Settings" size="xl">
                <Settings size={24} />
              </ReactIconButton>
            </>
          }
          language="typescript"
          code={`<ReactIconButton label="Settings" size="xs">
  <Settings size={12} />
</ReactIconButton>
<ReactIconButton label="Settings" size="sm">
  <Settings size={14} />
</ReactIconButton>
<ReactIconButton label="Settings" size="md">
  <Settings size={16} />
</ReactIconButton>
<ReactIconButton label="Settings" size="lg">
  <Settings size={20} />
</ReactIconButton>
<ReactIconButton label="Settings" size="xl">
  <Settings size={24} />
</ReactIconButton>`}
        />

        <CodeExample
          title="Event Handling"
          description="Subscribe to click events using the onClick prop. The component forwards the native click event."
          preview={
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ReactIconButton label="Increment" onClick={handleClick}>
                <Plus size={16} />
              </ReactIconButton>
              <span>Clicked {clickCount} times</span>
            </div>
          }
          language="typescript"
          code={`import { ReactIconButton } from "agnosticui-core/react";
import { useState } from "react";
import { Plus } from "lucide-react";

const MyComponent = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = (event: Event) => {
    console.log("IconButton clicked:", event);
    setClickCount((prev) => prev + 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <ReactIconButton label="Increment" onClick={handleClick}>
        <Plus size={16} />
      </ReactIconButton>
      <span>Clicked {clickCount} times</span>
    </div>
  );
};`}
        />

        <CodeExample
          title="Button States"
          description="Disabled and loading states for user feedback."
          preview={
            <>
              <ReactIconButton label="Disabled" disabled>
                <Settings size={16} />
              </ReactIconButton>
              <ReactIconButton label="Download" loading={isLoading} onClick={handleAsyncAction}>
                <Download size={16} />
              </ReactIconButton>
            </>
          }
          language="typescript"
          code={`const [isLoading, setIsLoading] = useState(false);

const handleAsyncAction = async () => {
  setIsLoading(true);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  setIsLoading(false);
};

<ReactIconButton label="Disabled" disabled>
  <Settings size={16} />
</ReactIconButton>
<ReactIconButton label="Download" loading={isLoading} onClick={handleAsyncAction}>
  <Download size={16} />
</ReactIconButton>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Icon button that maintains pressed state like a toggle. Perfect for favorite/like buttons."
          preview={
            <ReactIconButton
              label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              pressed={isFavorite}
              onClick={handleFavoriteToggle}
              variant={isFavorite ? "primary" : "ghost"}
            >
              <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
            </ReactIconButton>
          }
          language="typescript"
          code={`const [isFavorite, setIsFavorite] = useState(false);

const handleFavoriteToggle = () => {
  setIsFavorite((prev) => !prev);
};

<ReactIconButton
  label={isFavorite ? "Remove from favorites" : "Add to favorites"}
  pressed={isFavorite}
  onClick={handleFavoriteToggle}
  variant={isFavorite ? "primary" : "ghost"}
>
  <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
</ReactIconButton>`}
        />

        <CodeExample
          title="Unicode Icons"
          description="Use simple Unicode symbols for lightweight icons without external dependencies."
          preview={
            <>
              <ReactIconButton label="Close" unicode="×" />
              <ReactIconButton label="Add" unicode="+" />
              <ReactIconButton label="Menu" unicode="☰" />
              <ReactIconButton label="Star" unicode="★" variant="primary" />
            </>
          }
          language="typescript"
          code={`<ReactIconButton label="Close" unicode="×" />
<ReactIconButton label="Add" unicode="+" />
<ReactIconButton label="Menu" unicode="☰" />
<ReactIconButton label="Star" unicode="★" variant="primary" />`}
        />

        <CodeExample
          title="Button Types"
          description="Different HTML button types for form handling."
          preview={
            <>
              <ReactIconButton label="Submit" type="submit" variant="primary">
                <Plus size={16} />
              </ReactIconButton>
              <ReactIconButton label="Reset" type="reset" variant="secondary">
                <X size={16} />
              </ReactIconButton>
              <ReactIconButton label="Button" type="button">
                <Settings size={16} />
              </ReactIconButton>
            </>
          }
          language="typescript"
          code={`<ReactIconButton label="Submit" type="submit" variant="primary">
  <Plus size={16} />
</ReactIconButton>
<ReactIconButton label="Reset" type="reset" variant="secondary">
  <X size={16} />
</ReactIconButton>
<ReactIconButton label="Button" type="button">
  <Settings size={16} />
</ReactIconButton>`}
        />

        <CodeExample
          title="Icon Button Group"
          description="Group icon buttons together for toolbar-like interfaces."
          preview={
            <div style={{ display: "inline-flex", gap: "0.25rem" }} role="group" aria-label="Text formatting">
              <ReactIconButton label="Bold" variant="secondary">
                <span style={{ fontWeight: "bold" }}>B</span>
              </ReactIconButton>
              <ReactIconButton label="Italic" variant="secondary">
                <span style={{ fontStyle: "italic" }}>I</span>
              </ReactIconButton>
              <ReactIconButton label="Underline" variant="secondary">
                <span style={{ textDecoration: "underline" }}>U</span>
              </ReactIconButton>
              <ReactIconButton label="Favorite" variant="secondary">
                <Star size={16} />
              </ReactIconButton>
            </div>
          }
          language="typescript"
          code={`import { Star } from "lucide-react";

<div style={{ display: "inline-flex", gap: "0.25rem" }} role="group" aria-label="Text formatting">
  <ReactIconButton label="Bold" variant="secondary">
    <span style={{ fontWeight: "bold" }}>B</span>
  </ReactIconButton>
  <ReactIconButton label="Italic" variant="secondary">
    <span style={{ fontStyle: "italic" }}>I</span>
  </ReactIconButton>
  <ReactIconButton label="Underline" variant="secondary">
    <span style={{ textDecoration: "underline" }}>U</span>
  </ReactIconButton>
  <ReactIconButton label="Favorite" variant="secondary">
    <Star size={16} />
  </ReactIconButton>
</div>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default IconButtonReact;
