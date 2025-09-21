# WAI-ARIA Modal Dialog Example Documentation

**Source:** https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/
**Downloaded:** September 19, 2025
**APG Version:** Current as of download date

## Overview
This is an example implementation of a Modal Dialog Pattern from the W3C Web Accessibility Initiative (WAI) demonstrating accessible dialog design.

## Key Accessibility Features

### Dialog Characteristics
- Fills 100% of screen on small screens
- Covers background to prevent distracting movement
- Focuses on maintaining user's point of regard when opening/closing dialogs

### Keyboard Interaction

| Key | Function |
|-----|----------|
| Tab | Cycles through focusable elements within dialog |
| Shift + Tab | Reverse cycle through focusable elements |
| Escape | Closes the dialog |

## ARIA Attributes

### Required Attributes
- `role="dialog"`
- `aria-labelledby`: Provides accessible name
- `aria-describedby`: Provides dialog description
- `aria-modal="true"`: Indicates dialog blocks background interaction

## Accessibility Considerations
- "No ARIA is better than Bad ARIA"
- Test with multiple browser and assistive technology combinations
- Maximize use of semantic HTML
- Carefully manage focus placement
- Ensure keyboard and screen reader compatibility

## Implementation Recommendations
- Place first interactive element strategically
- Make static elements focusable if needed
- Avoid making entire dialog focusable
- Maintain clear visual focus indicators

## Assistive Technology Support
- Support may vary across different browser/AT combinations
- Ongoing measurements through ARIA and Assistive Technologies Project

## Code References
- CSS: `dialog.css`
- JavaScript: `dialog.js`, `utils.js`