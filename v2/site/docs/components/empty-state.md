# Empty State

A versatile component for displaying empty states, placeholder content, and messaging when no data is available. Helps guide users toward meaningful actions and provides clear context about why content is missing.

## Examples

<EmptyStateExamples />

<script setup>
import EmptyStateExamples from '../examples/EmptyStateExamples.vue'
</script>

## Usage

::: details Vue

```vue
<template>
  <section>
    <!-- Basic empty state -->
    <VueEmptyState
      title="No items found"
      subtitle="Get started by creating your first item"
    />

    <!-- With action button -->
    <VueEmptyState
      title="No projects yet"
      subtitle="Create your first project to get started"
      buttonText="New Project"
    />

    <!-- Different sizes -->
    <VueEmptyState
      title="No notifications"
      subtitle="You're all caught up!"
      size="sm"
    />

    <VueEmptyState
      title="Welcome to Your Dashboard"
      subtitle="Start by adding some content"
      buttonText="Get Started"
      size="lg"
    />

    <!-- Bordered and rounded -->
    <VueEmptyState
      title="No messages"
      subtitle="Send your first message to start a conversation"
      buttonText="New Message"
      :bordered="true"
      :rounded="true"
    />

    <!-- Custom icon -->
    <VueEmptyState
      title="No files"
      subtitle="Drag and drop files here to upload"
      :bordered="true"
    >
      <template #icon>
        <VueIcon size="56" :noFill="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="#999"
          >
            <path
              d="M3 6a2 2 0 012-2h4l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
            ></path>
          </svg>
        </VueIcon>
      </template>
    </VueEmptyState>

    <!-- Custom actions -->
    <VueEmptyState
      title="No team members"
      subtitle="Invite people to collaborate on this project"
    >
      <template #actions>
        <div style="display: flex; gap: 0.5rem; justify-content: center;">
          <VueButton variant="primary" size="sm" shape="rounded">
            Invite Members
          </VueButton>
          <VueButton variant="secondary" size="sm" shape="rounded">
            Learn More
          </VueButton>
        </div>
      </template>
    </VueEmptyState>
  </section>
</template>

<script>
import { VueEmptyState } from "agnosticui-core/empty-state/vue";
import VueIcon from "agnosticui-core/icon/vue";
import VueButton from "agnosticui-core/button/vue";

export default {
  components: {
    VueEmptyState,
    VueIcon,
    VueButton,
  },
};
</script>
```

:::

::: details React

```tsx
import { ReactEmptyState } from "agnosticui-core/react";
import { ReactIcon } from "agnosticui-core/react";
import { ReactButton } from "agnosticui-core/react";

export default function EmptyStateExample() {
  return (
    <section>
      {/* Basic empty state */}
      <ReactEmptyState
        title="No items found"
        subtitle="Get started by creating your first item"
      />

      {/* With action button */}
      <ReactEmptyState
        title="No projects yet"
        subtitle="Create your first project to get started"
        buttonText="New Project"
      />

      {/* Different sizes */}
      <ReactEmptyState
        title="No notifications"
        subtitle="You're all caught up!"
        size="sm"
      />

      <ReactEmptyState
        title="Welcome to Your Dashboard"
        subtitle="Start by adding some content"
        buttonText="Get Started"
        size="lg"
      />

      {/* Bordered and rounded */}
      <ReactEmptyState
        title="No messages"
        subtitle="Send your first message to start a conversation"
        buttonText="New Message"
        bordered
        rounded
      />

      {/* Custom icon */}
      <ReactEmptyState
        title="No files"
        subtitle="Drag and drop files here to upload"
        bordered
      >
        <ReactIcon size="56" noFill slot="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 24 24"
            fill="#999"
          >
            <path d="M3 6a2 2 0 012-2h4l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"></path>
          </svg>
        </ReactIcon>
      </ReactEmptyState>

      {/* Custom actions */}
      <ReactEmptyState
        title="No team members"
        subtitle="Invite people to collaborate on this project"
      >
        <div
          slot="actions"
          style={{ display: "flex", gap: "0.5rem", justifyContent: "center" }}
        >
          <ReactButton variant="primary" size="sm" shape="rounded">
            Invite Members
          </ReactButton>
          <ReactButton variant="secondary" size="sm" shape="rounded">
            Learn More
          </ReactButton>
        </div>
      </ReactEmptyState>
    </section>
  );
}
```

:::

::: details Lit (Web Components)

```html
<script type="module">
  import "agnosticui-core/empty-state";
  import "agnosticui-core/icon";
  import "agnosticui-core/button";
</script>

<section>
  <!-- Basic empty state -->
  <ag-empty-state
    title="No items found"
    subtitle="Get started by creating your first item"
  ></ag-empty-state>

  <!-- With action button -->
  <ag-empty-state
    title="No projects yet"
    subtitle="Create your first project to get started"
    button-text="New Project"
  ></ag-empty-state>

  <!-- Different sizes -->
  <ag-empty-state
    title="No notifications"
    subtitle="You're all caught up!"
    size="sm"
  ></ag-empty-state>

  <ag-empty-state
    title="Welcome to Your Dashboard"
    subtitle="Start by adding some content"
    button-text="Get Started"
    size="lg"
  ></ag-empty-state>

  <!-- Bordered and rounded -->
  <ag-empty-state
    title="No messages"
    subtitle="Send your first message to start a conversation"
    button-text="New Message"
    bordered
    rounded
  ></ag-empty-state>

  <!-- Custom icon -->
  <ag-empty-state
    title="No files"
    subtitle="Drag and drop files here to upload"
    bordered
  >
    <ag-icon slot="icon" size="56" no-fill>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="56"
        viewBox="0 0 24 24"
        fill="#999"
      >
        <path
          d="M3 6a2 2 0 012-2h4l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
        ></path>
      </svg>
    </ag-icon>
  </ag-empty-state>

  <!-- Custom actions -->
  <ag-empty-state
    title="No team members"
    subtitle="Invite people to collaborate on this project"
  >
    <div
      slot="actions"
      style="display: flex; gap: 0.5rem; justify-content: center;"
    >
      <ag-button variant="primary" size="sm" shape="rounded">
        Invite Members
      </ag-button>
      <ag-button variant="secondary" size="sm" shape="rounded">
        Learn More
      </ag-button>
    </div>
  </ag-empty-state>
</section>
```

:::

## Props

| Prop         | Type                   | Default | Description                                                                  |
| ------------ | ---------------------- | ------- | ---------------------------------------------------------------------------- |
| `title`      | `string`               | `''`    | Primary heading text for the empty state. Should be concise and descriptive. |
| `subtitle`   | `string`               | `''`    | Supporting text that provides additional context or guidance.                |
| `buttonText` | `string`               | `''`    | Text for the default action button. If provided, a button will be rendered.  |
| `size`       | `'sm' \| 'md' \| 'lg'` | `'md'`  | Size variant that controls spacing and text sizing.                          |
| `bordered`   | `boolean`              | `false` | Adds a border around the empty state for visual separation.                  |
| `rounded`    | `boolean`              | `false` | Applies rounded corners to the empty state container.                        |

## Slots

| Slot      | Description                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------- |
| `icon`    | Custom icon or illustration to display above the title. Typically used with the Icon component. |
| `actions` | Custom action buttons or interactive elements. Overrides the default `buttonText` button.       |

## Size Variants

The EmptyState component supports three size variants:

- **Small (`sm`)**: Compact layout with smaller text and spacing. Ideal for sidebars, cards, or inline empty states.
- **Medium (`md`)**: Default size with balanced spacing. Suitable for most use cases.
- **Large (`lg`)**: Spacious layout with larger text. Perfect for full-page empty states or prominent sections.

```vue
<!-- Small - compact for cards or sidebars -->
<VueEmptyState
  title="No notifications"
  subtitle="You're all caught up!"
  size="sm"
/>

<!-- Medium - default, balanced spacing -->
<VueEmptyState
  title="No projects yet"
  subtitle="Create your first project"
  buttonText="New Project"
  size="md"
/>

<!-- Large - prominent, full-page contexts -->
<VueEmptyState
  title="Welcome!"
  subtitle="Start your journey here"
  buttonText="Get Started"
  size="lg"
/>
```

## Visual Styling

### Bordered

Add a border for better visual separation from surrounding content:

```vue
<VueEmptyState
  title="No data available"
  subtitle="Upload a file to see your data"
  buttonText="Upload File"
  :bordered="true"
/>
```

### Rounded

Apply rounded corners for a softer, more modern appearance:

```vue
<VueEmptyState
  title="Empty folder"
  subtitle="This folder contains no files yet"
  buttonText="Add Files"
  :rounded="true"
/>
```

### Combined

Use both bordered and rounded for a card-like appearance:

```vue
<VueEmptyState
  title="No messages"
  subtitle="Send your first message"
  buttonText="New Message"
  :bordered="true"
  :rounded="true"
/>
```

## Custom Icons

Use the `icon` slot to provide custom illustrations or icons that match your empty state context:

```vue
<VueEmptyState
  title="No search results"
  subtitle="Try different keywords or remove filters"
>
  <template #icon>
    <VueIcon size="40" :noFill="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="m13.5 8.5-5 5"/>
        <path d="m8.5 8.5 5 5"/>
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.3-4.3"/>
      </svg>
    </VueIcon>
  </template>
</VueEmptyState>
```

**Icon Guidelines:**

- Use simple, recognizable icons that clearly represent the empty state
- Keep icons appropriately sized (40-56px for medium/large empty states)
- Use neutral colors like gray unless you need to convey state (success, warning, error)
- Consider using SVG for crisp rendering at any size

## Custom Actions

The `actions` slot allows complete control over interactive elements:

```vue
<VueEmptyState
  title="Start your journey"
  subtitle="Choose how you want to begin"
>
  <template #actions>
    <div style="display: flex; gap: 0.5rem; justify-content: center;">
      <VueButton variant="primary" size="md" shape="rounded">
        Create New
      </VueButton>
      <VueButton variant="primary" :isBordered="true" size="md" shape="rounded">
        Import Data
      </VueButton>
      <VueButton variant="primary" :isBordered="true" size="md" shape="rounded">
        Use Template
      </VueButton>
    </div>
  </template>
</VueEmptyState>
```

**Actions Best Practices:**

- Prioritize actions - put the primary action first and make it most prominent
- Limit actions to 1-3 options to avoid overwhelming users
- Use clear, action-oriented labels ("Create Project" not just "Create")
- Consider button variants to establish visual hierarchy

## Use Cases

### No Search Results

```vue
<VueEmptyState
  title="No search results"
  subtitle="Try different keywords or remove filters"
  size="md"
>
  <template #icon>
    <VueIcon size="40" :noFill="true" v-html="searchIcon" />
  </template>
</VueEmptyState>
```

### Shopping Cart

```vue
<VueEmptyState
  title="Your cart is empty"
  subtitle="Add items to your cart to see them here"
  :bordered="true"
  :rounded="true"
>
  <template #icon>
    <VueIcon size="48" :noFill="true" v-html="cartIcon" />
  </template>
  <template #actions>
    <VueButton variant="primary" shape="rounded">
      Continue Shopping
    </VueButton>
  </template>
</VueEmptyState>
```

### Inbox Zero

```vue
<VueEmptyState
  title="Inbox Zero! 🎉"
  subtitle="All caught up. No new messages."
  size="md"
>
  <template #icon>
    <VueIcon size="40" type="info" v-html="inboxIcon" />
  </template>
</VueEmptyState>
```

### Error State

```vue
<VueEmptyState
  title="Something went wrong"
  subtitle="Please try again or contact support"
  :bordered="true"
>
  <template #icon>
    <VueIcon size="48" type="error" v-html="alertIcon" />
  </template>
  <template #actions>
    <div style="display: flex; gap: 0.5rem; justify-content: center;">
      <VueButton variant="danger" shape="rounded">
        Try Again
      </VueButton>
      <VueButton variant="secondary" shape="rounded">
        Contact Support
      </VueButton>
    </div>
  </template>
</VueEmptyState>
```

### Onboarding / Welcome

```vue
<VueEmptyState
  title="Welcome to Your Dashboard"
  subtitle="Start by adding some content to see it appear here"
  buttonText="Get Started"
  size="lg"
  :bordered="true"
  :rounded="true"
/>
```

## Accessibility

The EmptyState component follows accessibility best practices:

- **Semantic Structure**: Uses appropriate heading hierarchy for title and subtitle
- **Color Contrast**: Default text colors meet WCAG AA contrast requirements
- **Keyboard Navigation**: All interactive elements (buttons) are keyboard accessible
- **Focus Management**: Buttons receive proper focus indicators
- **Screen Readers**: Content is announced in logical order (icon → title → subtitle → actions)

### Writing Accessible Content

**Titles should be:**

- Clear and concise (3-5 words ideal)
- Descriptive of the empty state
- Written in sentence case

**Subtitles should be:**

- Provide helpful context or guidance
- Suggest next steps when appropriate
- Keep to 1-2 sentences

**Button text should be:**

- Action-oriented ("Create Project" not "Click Here")
- Specific about what will happen
- Brief but descriptive

```vue
<!-- Good: Clear, actionable -->
<VueEmptyState
  title="No projects yet"
  subtitle="Create your first project to get started"
  buttonText="Create Project"
/>

<!-- Avoid: Vague, unhelpful -->
<VueEmptyState
  title="Nothing here"
  subtitle="There's nothing to show"
  buttonText="Click here"
/>
```

## CSS Shadow Parts

The EmptyState component exposes CSS Shadow Parts for custom styling:

| Part             | Description                                       |
| ---------------- | ------------------------------------------------- |
| `ag-empty-state` | The main container element                        |
| `icon`           | The icon slot wrapper                             |
| `title`          | The title/heading element                         |
| `subtitle`       | The subtitle/description element                  |
| `actions`        | The actions slot wrapper                          |
| `actions-button` | The default button (when using `buttonText` prop) |

### Customization Examples

```css
/* Gradient border style */
ag-empty-state::part(ag-empty-state) {
  border: 2px solid transparent;
  background: linear-gradient(white, white) padding-box, linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 100%
      ) border-box;
  border-radius: 16px;
  padding: 2rem;
}

ag-empty-state::part(title) {
  color: #667eea;
  font-weight: 700;
}

/* Dark theme with glow */
ag-empty-state::part(ag-empty-state) {
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border: 2px solid #475569;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

ag-empty-state::part(icon) {
  color: #60a5fa;
  filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.5));
}

ag-empty-state::part(title) {
  color: #f1f5f9;
  font-weight: 700;
}

ag-empty-state::part(subtitle) {
  color: #cbd5e1;
}

/* Colorful icon accent */
ag-empty-state::part(icon) {
  color: #f59e0b;
  background: rgba(245, 158, 11, 0.1);
  border-radius: 50%;
  padding: 1rem;
}

/* Custom button styling */
ag-empty-state::part(actions-button) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.2s;
}

ag-empty-state::part(actions-button):hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}
```

## Best Practices

### Do's

✅ **Be empathetic and helpful** - Acknowledge the empty state and guide users toward action

```vue
<VueEmptyState
  title="No tasks yet"
  subtitle="Create your first task to get organized"
  buttonText="Create Task"
/>
```

✅ **Match the tone to context** - Celebratory for achievements, helpful for empty lists

```vue
<!-- Achievement -->
<VueEmptyState
  title="Inbox Zero! 🎉"
  subtitle="Great job! You've cleared all your messages"
/>

<!-- Empty list -->
<VueEmptyState
  title="No contacts yet"
  subtitle="Add contacts to start connecting"
  buttonText="Add Contact"
/>
```

✅ **Provide clear next steps** - Always suggest what users can do

```vue
<VueEmptyState
  title="No analytics data"
  subtitle="Data will appear once you start tracking events"
  buttonText="View Documentation"
/>
```

✅ **Use appropriate icons** - Choose icons that clearly represent the context

```vue
<!-- Good: Search icon for no results -->
<template #icon>
  <VueIcon size="40" v-html="searchIcon" />
</template>
```

### Don'ts

❌ **Don't be vague or unhelpful**

```vue
<!-- Avoid -->
<VueEmptyState title="Nothing here" subtitle="There's nothing to show" />
```

❌ **Don't overwhelm with too many actions**

```vue
<!-- Avoid: Too many choices -->
<template #actions>
  <VueButton>Action 1</VueButton>
  <VueButton>Action 2</VueButton>
  <VueButton>Action 3</VueButton>
  <VueButton>Action 4</VueButton>
  <VueButton>Action 5</VueButton>
</template>
```

❌ **Don't use negative or discouraging language**

```vue
<!-- Avoid -->
<VueEmptyState
  title="Oops! Nothing found"
  subtitle="You haven't done anything yet"
/>
```

❌ **Don't forget the icon for prominent empty states**

```vue
<!-- For large, prominent empty states, include an icon -->
<VueEmptyState title="Welcome!" subtitle="Get started now" size="lg">
  <template #icon>
    <VueIcon size="56" v-html="welcomeIcon" />
  </template>
</VueEmptyState>
```

## Common Patterns

### Filtered List with No Results

```vue
<VueEmptyState
  title="No matches found"
  subtitle="Try adjusting your filters or search terms"
>
  <template #actions>
    <VueButton variant="secondary" @click="clearFilters">
      Clear Filters
    </VueButton>
  </template>
</VueEmptyState>
```

### Loading State Alternative

While not a loading indicator, empty states can acknowledge that content is coming:

```vue
<VueEmptyState
  title="Getting things ready"
  subtitle="Your content will appear here once it's loaded"
  size="sm"
/>
```

### Permission/Access Denied

```vue
<VueEmptyState
  title="Access Required"
  subtitle="You don't have permission to view this content"
  :bordered="true"
>
  <template #icon>
    <VueIcon size="48" type="warning" v-html="lockIcon" />
  </template>
  <template #actions>
    <VueButton variant="primary">
      Request Access
    </VueButton>
  </template>
</VueEmptyState>
```

## Integration with Data Loading

Empty states work well within conditional rendering based on data state:

```vue
<template>
  <div>
    <div v-if="loading">
      <LoadingSpinner />
    </div>
    <div v-else-if="error">
      <VueEmptyState
        title="Failed to load data"
        subtitle="Please try again or contact support"
      >
        <template #actions>
          <VueButton variant="primary" @click="retry"> Try Again </VueButton>
        </template>
      </VueEmptyState>
    </div>
    <div v-else-if="items.length === 0">
      <VueEmptyState
        title="No items yet"
        subtitle="Create your first item to get started"
        buttonText="Create Item"
      />
    </div>
    <div v-else>
      <!-- Render items -->
      <ItemList :items="items" />
    </div>
  </div>
</template>
```

## Resources

- [Empty States: Material Design](https://material.io/design/communication/empty-states.html)
- [Empty State Best Practices - UX Collective](https://uxdesign.cc/empty-state-best-practices-3d3f3f3f3f3f)
- [Designing Better Empty States](https://www.smashingmagazine.com/2020/03/designing-better-empty-states/)
