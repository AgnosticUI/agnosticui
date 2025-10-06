import { ComponentLayout } from "@/components/ComponentLayout";
import { CodeExample } from "@/components/CodeExample";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, X, Plus, Trash2, Edit, Heart, Star, Download } from "lucide-react";
import svelteIcon from "@/assets/icons/svelte.svg";
import "agnosticui-core";
import styles from "@/shared/styles.module.css";

const IconButtonSvelte = () => {
  return (
    <ComponentLayout
      componentName="IconButton"
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
                <code>npm install agnostic-svelte</code>
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
                <code>{`import 'agnosticui-core';`}</code>
              </pre>
            </CardContent>
          </Card>
        </section>

        {/* Note about previews */}
        <section>
          <Card className="bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700">
            <CardContent className="p-4">
              <p className={styles.smallParagraphBlue}>
                <strong>Note:</strong> Svelte works directly with the <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">ag-icon-button</code> web component using standard HTML syntax.
                The previews below show the web component as it would appear in your Svelte application.
                Svelte's reactivity works seamlessly with web components through standard DOM properties and events.
              </p>
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
          code={`<script>
  import 'agnosticui-core';
  import { Settings, X, Plus, Trash2 } from 'lucide-svelte';
</script>

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
</ag-icon-button>`}
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
          code={`<script>
  import { Edit, Plus, Settings, Trash2 } from 'lucide-svelte';
</script>

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
</ag-icon-button>`}
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
          code={`<script>
  import { Settings } from 'lucide-svelte';
</script>

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
</ag-icon-button>`}
        />

        <CodeExample
          title="Interactive Example"
          description="Icon button with click event handling and state."
          preview={
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <ag-icon-button label="Increment">
                <Plus size={16} />
              </ag-icon-button>
              <span>Click the button</span>
            </div>
          }
          code={`<script>
  import { Plus } from 'lucide-svelte';

  let clickCount = 0;

  function handleClick(event) {
    clickCount++;
  }
</script>

<div style="display: flex; align-items: center; gap: 0.5rem">
  <ag-icon-button label="Increment" on:icon-button-click={handleClick}>
    <Plus size={16} />
  </ag-icon-button>
  <span>Clicked {clickCount} times</span>
</div>`}
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
          code={`<script>
  import { Settings, Download } from 'lucide-svelte';

  let isLoading = false;

  async function handleAsyncAction() {
    isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    isLoading = false;
  }
</script>

<ag-icon-button label="Disabled" disabled>
  <Settings size={16} />
</ag-icon-button>
<ag-icon-button label="Download" loading={isLoading} on:icon-button-click={handleAsyncAction}>
  <Download size={16} />
</ag-icon-button>`}
        />

        <CodeExample
          title="Toggle Functionality"
          description="Icon button that maintains pressed state like a toggle. Perfect for favorite/like buttons."
          preview={
            <ag-icon-button label="Add to favorites" variant="ghost">
              <Heart size={16} />
            </ag-icon-button>
          }
          code={`<script>
  import { Heart } from 'lucide-svelte';

  let isFavorite = false;

  function handleFavoriteToggle() {
    isFavorite = !isFavorite;
  }
</script>

<ag-icon-button
  label={isFavorite ? "Remove from favorites" : "Add to favorites"}
  pressed={isFavorite}
  variant={isFavorite ? "primary" : "ghost"}
  on:icon-button-click={handleFavoriteToggle}
>
  <Heart size={16} fill={isFavorite ? "currentColor" : "none"} />
</ag-icon-button>`}
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
          code={`<ag-icon-button label="Close" unicode="×" />
<ag-icon-button label="Add" unicode="+" />
<ag-icon-button label="Menu" unicode="☰" />
<ag-icon-button label="Star" unicode="★" variant="primary" />`}
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
          code={`<script>
  import { Plus, X, Settings } from 'lucide-svelte';
</script>

<ag-icon-button label="Submit" type="submit" variant="primary">
  <Plus size={16} />
</ag-icon-button>
<ag-icon-button label="Reset" type="reset" variant="secondary">
  <X size={16} />
</ag-icon-button>
<ag-icon-button label="Button" type="button">
  <Settings size={16} />
</ag-icon-button>`}
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
          code={`<script>
  import { Star } from 'lucide-svelte';
</script>

<div style="display: inline-flex; gap: 0.25rem" role="group" aria-label="Text formatting">
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
    <Star size={16} />
  </ag-icon-button>
</div>`}
        />
      </div>
    </ComponentLayout>
  );
};

export default IconButtonSvelte;
