# WAI-ARIA Breadcrumb Pattern Documentation

## Overview
A breadcrumb trail is a navigation component that helps users understand their current location within a website or web application's hierarchy.

## Key Characteristics
- Typically placed horizontally before the main page content
- Consists of a list of links to parent pages in hierarchical order

## Accessibility Requirements

### ARIA Roles, States, and Properties
- Contained within a navigation landmark region
- Region should be labeled using:
  - `aria-label`
  - `aria-labelledby`
- Current page link should have `aria-current="page"`
  - If current page is not a link, `aria-current` is optional

## Keyboard Interaction
- "Not applicable" - No specific keyboard interactions required

## Implementation Guidelines
1. Create a list of links representing the page hierarchy
2. Ensure the current page link is marked with `aria-current="page"`
3. Wrap the breadcrumb trail in a navigation landmark with an appropriate label

## Example Structure
```html
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/parent1">Parent 1</a></li>
    <li><a href="/parent2">Parent 2</a></li>
    <li><a href="/current" aria-current="page">Current Page</a></li>
  </ol>
</nav>
```

## Contribution
Users can provide feedback or suggestions via:
- Email: public-aria-practices@w3.org
- GitHub: W3C ARIA Practices repository