# Accessible Tooltips and Supplementary Information on Mobile Devices

This document summarizes key principles and guidelines for creating accessible tooltips and supplementary information on mobile devices, based on the provided content.

## Core Principles

*   **Avoid Redundancy:** Tooltips and supplementary information must not repeat link text or other existing alternatives.
*   **Essential Information:** Do not include essential information solely within tooltips, as not all users will see them. Tooltips should provide *additional explanatory content* rather than repeating primary alternatives.
*   **Screen Reader Experience:** The goal is to prevent duplication of information for screen reader users.

## Platform-Specific Guidelines

### iOS

Key recommendations for iOS hints:

*   **Assignment:** Assign a ‘hint’ to an element with the expanded text via xCode.
*   **Content:** Hints must start with a verb, omit the subject, begin with a capitalized word, and not end in a full stop.
*   **Avoid Control/Gesture Names:** Hints must not contain the name of the control type (e.g., "button") or the action/gesture, as these are conveyed by trait attributes and can become outdated.

**Example (Objective-C):**
```objective-c
UIButton *addButton = [UIButton buttonWithType:UIButtonTypeCustom];
[addButton setTitle: NSLocalizedString("Weekend planner", @"Title for button")]
[addButton setAccessibilityHint:NSLocalizedString("Places item in queue", @"Accessibility hint for button")];
```

### Android

*   Android does not natively provide tooltips or additional hint text other than `aria: contentDescription`.
*   Tooltips *can* be shown when long-pressing on icons in the Action Bar.

### HTML

Key recommendations for HTML:

*   **`title` attribute:** Do not use the `title` attribute, except on a form input, as it is not well supported on links on mobile.
*   **ARIA tooltips:** Do not rely on ARIA tooltips due to inconsistent support across devices and platforms (some support on iOS, but limited elsewhere).
*   **Form Fields:** Do not use `title` attributes and explicit labels together on form fields.

**HTML Pass Example:**
```html
<a href="..."><img src="listenicon.jpg" alt="" />Listen to today's weather</a>
<a href="...">Listen to today's weather</a>
<a href="…"> Related articles </a>
<input type="text" id="search" title="Search">
```

## Testing Procedures

1.  **Activate Screen Reader:** Turn on a screen reader.
2.  **Gain Focus:** Navigate and gain focus on individual objects, elements, or controls.
3.  **Verify Uniqueness:** Ensure that identity and information are not announced twice for each individual item (e.g., "Next Next button").

**Outcome:**
The information provided via a screen reader for an object, element, or control should not be announced more than once, including accessibility properties conveyed via speech.
