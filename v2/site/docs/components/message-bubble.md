# MessageBubble

A versatile message bubble component for building chat interfaces and messaging UIs. MessageBubble supports different sender types, delivery statuses, avatars, color variants, and custom styling through CSS Shadow Parts.

<MessageBubbleExamples />

<script setup>
import MessageBubbleExamples from '../examples/MessageBubbleExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <div>
    <!-- Basic message -->
    <VueMessageBubble
      from="them"
      message="Hello, how are you?"
      author="John Doe"
      time="10:00 AM"
    />
    
    <!-- Reply message -->
    <VueMessageBubble
      from="me"
      message="I'm doing great, thanks!"
      author="Me"
      time="10:01 AM"
    />
    
    <!-- With avatar -->
    <VueMessageBubble
      from="them"
      message="Check out this feature!"
      author="Jane"
      time="10:05 AM"
      avatar-url="https://i.pravatar.cc/150?img=1"
    />
    
    <!-- With delivery status -->
    <VueMessageBubble
      from="me"
      message="Message with status"
      author="Me"
      time="10:10 AM"
      footer="Delivered ✓"
    />
    
    <!-- With color variant -->
    <VueMessageBubble
      from="them"
      message="Payment successful!"
      author="System"
      time="10:15 AM"
      variant="success"
    />
    
    <!-- Custom avatar slot -->
    <VueMessageBubble
      from="them"
      message="Using custom avatar component"
      author="Alex"
      time="10:20 AM"
    >
      <template #avatar>
        <VueAvatar text="AC" variant="info" size="sm" />
      </template>
    </VueMessageBubble>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueMessageBubble } from 'agnosticui-core/message-bubble/vue';
import { VueAvatar } from 'agnosticui-core/avatar/vue';

export default defineComponent({
  components: { VueMessageBubble, VueAvatar }
});
</script>
```
:::

::: details React
```tsx
import { ReactMessageBubble } from 'agnosticui-core/message-bubble/react';
import { ReactAvatar } from 'agnosticui-core/avatar/react';

export default function Example() {
  return (
    <div>
      {/* Basic message */}
      <ReactMessageBubble
        from="them"
        message="Hello, how are you?"
        author="John Doe"
        time="10:00 AM"
      />
      
      {/* Reply message */}
      <ReactMessageBubble
        from="me"
        message="I'm doing great, thanks!"
        author="Me"
        time="10:01 AM"
      />
      
      {/* With avatar */}
      <ReactMessageBubble
        from="them"
        message="Check out this feature!"
        author="Jane"
        time="10:05 AM"
        avatarUrl="https://i.pravatar.cc/150?img=1"
      />
      
      {/* With delivery status */}
      <ReactMessageBubble
        from="me"
        message="Message with status"
        author="Me"
        time="10:10 AM"
        footer="Delivered ✓"
      />
      
      {/* With color variant */}
      <ReactMessageBubble
        from="them"
        message="Payment successful!"
        author="System"
        time="10:15 AM"
        variant="success"
      />
    </div>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/message-bubble';
</script>

<!-- Basic message -->
<ag-message-bubble
  from="them"
  message="Hello, how are you?"
  author="John Doe"
  time="10:00 AM"
></ag-message-bubble>

<!-- Reply message -->
<ag-message-bubble
  from="me"
  message="I'm doing great, thanks!"
  author="Me"
  time="10:01 AM"
></ag-message-bubble>

<!-- With avatar -->
<ag-message-bubble
  from="them"
  message="Check out this feature!"
  author="Jane"
  time="10:05 AM"
  avatar-url="https://i.pravatar.cc/150?img=1"
></ag-message-bubble>

<!-- With delivery status -->
<ag-message-bubble
  from="me"
  message="Message with status"
  author="Me"
  time="10:10 AM"
  footer="Delivered ✓"
></ag-message-bubble>

<!-- With color variant -->
<ag-message-bubble
  from="them"
  message="Payment successful!"
  author="System"
  time="10:15 AM"
  variant="success"
></ag-message-bubble>
```
:::

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `from` | `'me' \| 'them'` | `'them'` | Indicates the sender of the message. Affects bubble alignment and styling. |
| `message` | `string` | `''` | The text content of the message. |
| `time` | `string` | `''` | Timestamp to display with the message. |
| `author` | `string` | `''` | Name of the message sender. |
| `avatarUrl` | `string` | `''` | URL for the sender's avatar image. |
| `footer` | `string` | `''` | Footer text, typically used for delivery status (e.g., "Delivered", "Seen"). |
| `variant` | `'default' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'neutral' \| 'monochrome'` | `'default'` | Color variant for semantic styling. |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Main content slot for the message text (alternative to `message` prop). |
| `header` | Optional header content above the message. |
| `footer` | Optional footer content below the message (alternative to `footer` prop). |
| `avatar` | Custom avatar content, allowing use of Avatar components or custom elements. |

## CSS Custom Properties

The MessageBubble component can be styled using CSS custom properties (variables):

```css
/* Example custom styling */
ag-message-bubble {
  --ag-message-bubble-bg: #f0f0f0;
  --ag-message-bubble-color: #333;
  --ag-message-bubble-padding: 12px 16px;
  --ag-message-bubble-border-radius: 18px;
  --ag-message-bubble-max-width: 70%;
}
```

## CSS Shadow Parts

For advanced customization, MessageBubble exposes CSS Shadow Parts that allow you to style internal elements:

::: details Vue Example
```vue
<template>
  <div>
    <VueMessageBubble
      class="custom-bubble"
      from="them"
      message="This message bubble is custom styled using CSS Shadow Parts!"
      author="CSS Wizard"
      time="10:00 AM"
    />
    <VueMessageBubble
      from="me"
      message="This is a normal message bubble from me."
      author="Me"
      time="10:05 AM"
    />
  </div>
</template>

<style>
.custom-bubble::part(ag-message-bubble) {
  background-color: #4a90e2;
  color: white;
  border-radius: 20px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  padding: 16px 20px;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}
</style>
```
:::

::: details Available Shadow Parts
```css
/* Main bubble container */
::part(ag-message-bubble) {
  /* Customize the entire bubble */
}

/* Avatar container */
::part(ag-message-bubble-avatar) {
  /* Customize avatar wrapper */
}

/* Message content area */
::part(ag-message-bubble-content) {
  /* Customize message content */
}

/* Author name */
::part(ag-message-bubble-author) {
  /* Customize author text */
}

/* Timestamp */
::part(ag-message-bubble-time) {
  /* Customize timestamp */
}

/* Footer/status */
::part(ag-message-bubble-footer) {
  /* Customize footer text */
}
```
:::

## Color Variants

MessageBubble includes semantic color variants for different message types:

- **default** - Standard message styling
- **success** - For positive notifications (green)
- **warning** - For cautionary messages (yellow/orange)
- **danger** - For errors or critical alerts (red)
- **info** - For informational messages (blue)
- **neutral** - For neutral system messages (gray)
- **monochrome** - Minimal, monochrome styling

## Accessibility

The MessageBubble component is built with accessibility in mind:

- Uses semantic HTML structure for proper screen reader support
- Supports keyboard navigation when interactive elements are included
- Maintains appropriate color contrast ratios across all variants
- Author and timestamp information is properly associated with messages
- Avatar images include alt text support when using the `avatarUrl` prop

### Best Practices

- Always provide meaningful `author` information for screen reader users
- Use `time` prop to give context about when messages were sent
- Ensure custom avatar content includes appropriate alt text
- Use semantic `variant` props to convey message importance visually and contextually
- For delivery status, use clear text in the `footer` prop (e.g., "Delivered", "Read")

## Examples

### Complete Chat Interface

::: details Full Example
```vue
<template>
  <div class="chat-container">
    <VueMessageBubble
      from="them"
      message="Hey! How's the project going?"
      author="Sarah Johnson"
      time="2:30 PM"
      avatar-url="https://i.pravatar.cc/150?img=5"
    />
    
    <VueMessageBubble
      from="me"
      message="Great! Just finished the API integration."
      author="Me"
      time="2:32 PM"
      footer="Delivered ✓"
      avatar-url="https://i.pravatar.cc/150?img=8"
    />
    
    <VueMessageBubble
      from="them"
      message="That's awesome! Can you send me the documentation?"
      author="Sarah Johnson"
      time="2:33 PM"
      avatar-url="https://i.pravatar.cc/150?img=5"
    />
    
    <VueMessageBubble
      from="me"
      message="Sure, I'll email it right now."
      author="Me"
      time="2:35 PM"
      footer="Seen ✓✓"
      avatar-url="https://i.pravatar.cc/150?img=8"
    />
    
    <VueMessageBubble
      from="them"
      message="Perfect! Thanks so much! 🎉"
      author="Sarah Johnson"
      time="2:36 PM"
      avatar-url="https://i.pravatar.cc/150?img=5"
    />
  </div>
</template>

<style>
.chat-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
}
</style>
```
:::

### System Notifications

::: details Example
```vue
<template>
  <div class="notifications">
    <VueMessageBubble
      from="them"
      message="Your file has been uploaded successfully!"
      author="System"
      time="3:00 PM"
      variant="success"
    />
    
    <VueMessageBubble
      from="them"
      message="Warning: Your storage is almost full (90% used)"
      author="System"
      time="3:05 PM"
      variant="warning"
    />
    
    <VueMessageBubble
      from="them"
      message="Error: Failed to sync with cloud storage"
      author="System"
      time="3:10 PM"
      variant="danger"
    />
    
    <VueMessageBubble
      from="them"
      message="New feature: Dark mode is now available!"
      author="System"
      time="3:15 PM"
      variant="info"
    />
  </div>
</template>
```
:::
