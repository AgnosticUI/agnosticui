# AgnosticUI Breadcrumb CSS Component

## Base Styles

```css
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  white-space: nowrap;
  list-style: none;
}
```

## Item Spacing and Separator

```css
.breadcrumb-item + .breadcrumb-item {
  padding-inline-start: var(--fluid-6);
}

.breadcrumb-item + .breadcrumb-item::before {
  padding-inline-end: var(--fluid-6);
  color: var(--agnostic-gray-mid-dark);
  content: "›";
}
```

## Active State

```css
.breadcrumb-item.active {
  color: var(--agnostic-dark);
}
```

## Separator Variations

### Slash Separator
```css
.breadcrumb-slash .breadcrumb-item + .breadcrumb-item::before {
  content: "/";
}
```

### Arrow Separator
```css
.breadcrumb-arrow .breadcrumb-item + .breadcrumb-item::before {
  content: "→";
}
```

### Bullet Separator
```css
.breadcrumb-bullet .breadcrumb-item + .breadcrumb-item::before {
  content: "•";
}
```

This CSS provides a flexible and customizable breadcrumb component with multiple separator styles and responsive layout.