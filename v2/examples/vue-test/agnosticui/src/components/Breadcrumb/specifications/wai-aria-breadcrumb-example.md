# WAI-ARIA Breadcrumb Example

## Overview
This is an example of an accessible breadcrumb navigation pattern from the W3C Web Accessibility Initiative (WAI) Authoring Practices Guide (APG).

## Accessibility Features
- Structured using an ordered list
- Uses `nav` element with `aria-label="Breadcrumb"`
- Visual separators added via CSS
- Last link marked with `aria-current="page"`

## HTML Structure
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="...">WAI-ARIA Authoring Practices Guide (APG)</a></li>
    <li><a href="...">Patterns</a></li>
    <li><a href="...">Breadcrumb Pattern</a></li>
    <li><a href="..." aria-current="page">Breadcrumb Example</a></li>
  </ol>
</nav>
```

## Keyboard Support
No specific keyboard interactions required.

## Key ARIA Attributes
- `nav`: `aria-label="Breadcrumb"`
- Last link: `aria-current="page"`

## Important Notes
> The code is not intended for production without thorough testing with assistive technologies.

## CSS Considerations
- Separators added via CSS
- Visual presentation uses `transform` for slash-like appearance
- Prevents redundant screen reader announcements

## Source
- [W3C Web Accessibility Initiative (WAI)](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/)