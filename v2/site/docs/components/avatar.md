# Avatar

Avatar components are used to represent users or entities in your application. They can display profile images, initials, or icons, and support multiple sizes, shapes, and color variants.

<AvatarExamples />

<script setup>
import AvatarExamples from '../examples/AvatarExamples.vue'
</script>

## Usage

::: details Vue
```vue
<template>
  <div>
    <!-- Text initials -->
    <VueAvatar text="AB" />

    <!-- With image -->
    <VueAvatar
      img-src="https://testingbot.com/free-online-tools/random-avatar/100"
      img-alt="User name"
    />

    <!-- With icon -->
    <VueAvatar size="lg" variant="info">
      <UserIcon />
    </VueAvatar>

    <!-- Avatar Group -->
    <VueAvatarGroup>
      <VueAvatar text="AB" variant="info" size="lg" />
      <VueAvatar text="CD" variant="info" size="lg" />
      <VueAvatar text="EF" variant="info" size="lg" />
      <VueAvatar text="GH" variant="info" size="lg" />
    </VueAvatarGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { VueAvatar, VueAvatarGroup } from 'agnosticui-core/avatar/vue';

export default defineComponent({
  components: { VueAvatar, VueAvatarGroup }
});
</script>
```
:::

::: details React
```tsx
import { ReactAvatar, ReactAvatarGroup } from 'agnosticui-core/avatar/react';

export default function Example() {
  return (
    <div>
      {/* Text initials */}
      <ReactAvatar text="AB" />

      {/* With image */}
      <ReactAvatar
        imgSrc="https://testingbot.com/free-online-tools/random-avatar/100"
        imgAlt="User name"
      />

      {/* With icon */}
      <ReactAvatar size="lg" variant="info">
        <UserIcon />
      </ReactAvatar>

      {/* Avatar Group */}
      <ReactAvatarGroup>
        <ReactAvatar text="AB" variant="info" size="lg" />
        <ReactAvatar text="CD" variant="info" size="lg" />
        <ReactAvatar text="EF" variant="info" size="lg" />
        <ReactAvatar text="GH" variant="info" size="lg" />
      </ReactAvatarGroup>
    </div>
  );
}
```
:::

::: details Lit (Web Components)
```html
<script type="module">
  import 'agnosticui-core/avatar';
</script>

<!-- Text initials -->
<ag-avatar text="AB"></ag-avatar>

<!-- With image -->
<ag-avatar
  img-src="https://testingbot.com/free-online-tools/random-avatar/100"
  img-alt="User name"
></ag-avatar>

<!-- With icon -->
<ag-avatar size="lg" variant="info">
  <svg>...</svg>
</ag-avatar>

<!-- Avatar Group -->
<ag-avatar-group>
  <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="CD" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="EF" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="GH" variant="info" size="lg"></ag-avatar>
</ag-avatar-group>
```
:::

## Props

### Avatar

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `''` | Text content to display (typically initials like "AB") |
| `imgSrc` | `string` | `''` | Image source URL |
| `imgAlt` | `string` | `''` | Alt text for the image (required when imgSrc is provided for accessibility) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the avatar |
| `shape` | `'circle' \| 'square' \| 'rounded'` | `'circle'` | Shape of the avatar |
| `variant` | `'default' \| 'info' \| 'warning' \| 'success' \| 'error' \| 'transparent'` | `'default'` | Color variant |
| `ariaLabel` | `string` | `''` | ARIA label for accessibility (auto-generated from text/imgAlt if not provided) |

### Avatar Group

The Avatar Group component wraps multiple Avatar components and automatically handles their layout and overlap styling.

## Events

The Avatar component does not emit any events. It is a presentational component.

## CSS Shadow Parts

### Avatar

| Part | Description |
| --- | --- |
| `ag-avatar` | The main avatar container element |
| `ag-avatar-image` | The image element (when imgSrc is provided) |
| `ag-avatar-text` | The text/initials container (when text is provided) |

### Avatar Group

| Part | Description |
| --- | --- |
| `ag-avatar-group` | The main avatar group container element |

### Customization Example

```css
/* Individual Avatar styling */
.custom-avatar::part(ag-avatar) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: 3px solid #fff;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  font-weight: 700;
}

.custom-avatar-image::part(ag-avatar) {
  border: 4px solid #10b981;
  box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.2);
}

.custom-avatar-text::part(ag-avatar-text) {
  font-family: 'Courier New', monospace;
  letter-spacing: 2px;
}

/* Avatar Group styling */
ag-avatar-group ag-avatar::part(ag-avatar) {
  border: 2px solid white;
}

/* Custom spacing - no overlap */
.custom-avatar-group::part(ag-avatar-group) {
  gap: 0.5rem;
}

.custom-avatar-group ag-avatar::part(ag-avatar) {
  border: 3px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.custom-avatar-group ag-avatar:not(:first-child) {
  margin-inline-start: 0;
}

/* Enhanced hover effects */
.stacked-group ag-avatar::part(ag-avatar) {
  border: 3px solid #10b981;
}

.stacked-group ag-avatar {
  transition: all 0.3s ease;
}

.stacked-group ag-avatar:hover {
  transform: translateY(-8px) scale(1.1);
  z-index: 100 !important;
}
```

```html
<!-- Vue -->
<VueAvatar class="custom-avatar" text="AB" />
<VueAvatar class="custom-avatar-image" img-src="..." img-alt="User" />

<VueAvatarGroup class="custom-avatar-group">
  <VueAvatar img-src="..." img-alt="User 1" size="lg" />
  <VueAvatar img-src="..." img-alt="User 2" size="lg" />
</VueAvatarGroup>

<!-- React -->
<ReactAvatar className="custom-avatar" text="AB" />
<ReactAvatar className="custom-avatar-image" imgSrc="..." imgAlt="User" />

<ReactAvatarGroup className="custom-avatar-group">
  <ReactAvatar imgSrc="..." imgAlt="User 1" size="lg" />
  <ReactAvatar imgSrc="..." imgAlt="User 2" size="lg" />
</ReactAvatarGroup>

<!-- Lit (Web Components) -->
<ag-avatar class="custom-avatar" text="AB"></ag-avatar>
<ag-avatar class="custom-avatar-image" img-src="..." img-alt="User"></ag-avatar>

<ag-avatar-group class="custom-avatar-group">
  <ag-avatar img-src="..." img-alt="User 1" size="lg"></ag-avatar>
  <ag-avatar img-src="..." img-alt="User 2" size="lg"></ag-avatar>
</ag-avatar-group>
```

## Accessibility

The Avatar component is designed to be accessible by default:

- **Role**: Uses `role="img"` when content is meaningful, or `role="presentation"` for decorative images without alt text
- **ARIA Label**: Automatically sets appropriate `aria-label` from:
  1. `ariaLabel` prop if provided
  2. `imgAlt` if using an image
  3. `text` if using initials
  4. Falls back to "Avatar" if none provided
- **Images**: Always provide `imgAlt` for images that convey user identity
- **Decorative**: Omit `imgAlt` for purely decorative images (e.g., placeholder avatars)

### Best Practices

- **Meaningful Images**: Always include descriptive `imgAlt` text for user profile images
- **Initials**: When using `text` for initials, ensure they represent the user's actual name
- **Icons**: For icon-only avatars, provide an appropriate `ariaLabel` describing what the icon represents
- **Decorative**: If the avatar is purely decorative and adjacent text provides context, you can omit alt text

### Examples

```html
<!-- Good: Meaningful image with alt text -->
<ag-avatar img-src="user.jpg" img-alt="Jane Doe"></ag-avatar>

<!-- Good: Initials with custom aria-label -->
<ag-avatar text="JD" aria-label="Jane Doe"></ag-avatar>

<!-- Good: Icon with descriptive label -->
<ag-avatar aria-label="Administrator account">
  <UserIcon />
</ag-avatar>

<!-- Acceptable: Decorative avatar (adjacent to name) -->
<div>
  <ag-avatar img-src="user.jpg"></ag-avatar>
  <span>Jane Doe</span>
</div>
```

## Common Patterns

### Avatar Group

Display multiple avatars together (e.g., for collaborators, team members, or participants):

```html
<!-- Simple text avatars -->
<ag-avatar-group>
  <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="CD" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="EF" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="GH" variant="info" size="lg"></ag-avatar>
</ag-avatar-group>

<!-- Image avatars -->
<ag-avatar-group>
  <ag-avatar img-src="user1.jpg" img-alt="User 1" size="lg"></ag-avatar>
  <ag-avatar img-src="user2.jpg" img-alt="User 2" size="lg"></ag-avatar>
  <ag-avatar img-src="user3.jpg" img-alt="User 3" size="lg"></ag-avatar>
</ag-avatar-group>

<!-- Mixed content -->
<ag-avatar-group>
  <ag-avatar text="AB" variant="info" size="lg"></ag-avatar>
  <ag-avatar text="RL" variant="info" size="lg"></ag-avatar>
  <ag-avatar size="lg">
    <UserIcon />
  </ag-avatar>
  <ag-avatar img-src="user1.jpg" img-alt="User 1" size="lg"></ag-avatar>
</ag-avatar-group>
```

### Avatar Group with Count Indicator

Show remaining count when there are many users:

```html
<ag-avatar-group>
  <ag-avatar img-src="user1.jpg" img-alt="User 1" size="sm"></ag-avatar>
  <ag-avatar img-src="user2.jpg" img-alt="User 2" size="sm"></ag-avatar>
  <ag-avatar text="+5" size="sm" variant="info" aria-label="5 more users"></ag-avatar>
</ag-avatar-group>
```

### Status Indicator

Combine with custom CSS for status indicators:

```css
.avatar-online::part(ag-avatar)::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid white;
  border-radius: 50%;
}
```

### Fallback Pattern

Handle missing images gracefully:

```vue
<template>
  <VueAvatar
    :img-src="user.avatar || ''"
    :text="user.avatar ? '' : user.initials"
    :img-alt="user.name"
  />
</template>
```
