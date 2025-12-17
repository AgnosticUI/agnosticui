# BBC GEL Tabs Component Guide

Source: https://bbc.github.io/gel/components/tabs/

**Note**: This guide differs from WAI-ARIA APG patterns in several ways. WAI-ARIA APG patterns take precedence for our implementation.

## Key Design Principles

- **Use tabs for content with 4-5 sections maximum**
- **Tab labels should be concise**
- **Tab content should be self-sufficient**
- **Avoid forcing users to switch between tabs to complete tasks**

## Markup Structure

### Initial Markup (Progressive Enhancement)
1. Start with standard HTML links and sections
2. Content remains accessible without JavaScript

### Enhanced Markup (with JavaScript)
- `role="tablist"` on container
- `role="tab"` on tab links
- `role="tabpanel"` on content sections
- `aria-labelledby` connects tabs to panels

## Accessibility Considerations

- Diverges from ARIA Authoring Practices to address usability issues
- Supports keyboard navigation
- Preserves screen reader compatibility
- Provides focus management between tabs and panels

## Key Behavioral Differences from WAI-ARIA APG

⚠️ **Important**: These BBC patterns differ from APG and should NOT be used in our implementation:

| Aspect | BBC GEL Approach | WAI-ARIA APG Approach | **Our Choice** |
|--------|------------------|----------------------|----------------|
| **Tab Navigation** | Tab key moves between tabs | Arrow keys move between tabs | **APG (Arrow keys)** |
| **Focus Target** | Focus moves to panel content | Focus stays on tab | **APG (Focus on tab)** |
| **URL Hash** | Uses hash changes | No URL manipulation | **APG (No hash)** |
| **Back Button** | Supports browser back | Not applicable | **APG approach** |

## BBC Implementation Details (Reference Only)

- First tab panel shown by default on page load
- Hash in URL determines initial tab selection
- Tabs remain focusable and activatable with Enter/Space
- Preserves same-page link behavior

## Responsive Design Considerations

- Supports collapsing tabs to single column on narrow viewports
- Handles high contrast mode with transparent borders
- Prevents text wrapping with ellipsis

## Progressive Enhancement Strategy

- Content works without JavaScript
- Enhanced behavior adds ARIA roles and keyboard navigation
- Graceful degradation to simple navigation

## Design Guidelines

### Content Organization
- Maximum 4-5 tabs for usability
- Each tab should contain complete, standalone content
- Avoid cross-tab dependencies

### Label Design
- Keep tab labels concise and descriptive
- Use clear, action-oriented language
- Consider truncation on narrow screens

## Implementation Decision

**For AgnosticUI v2**: We will follow **WAI-ARIA APG patterns** as the authoritative source, using BBC GEL guidance only for design and content organization principles, not for keyboard interaction or focus management patterns.