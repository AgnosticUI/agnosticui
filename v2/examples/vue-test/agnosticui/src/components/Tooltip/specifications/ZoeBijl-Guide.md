# APG Tooltips: Key Findings and Recommendations

This document summarizes the key findings and recommendations from the experiment of building a tooltip that follows the ARIA Authoring Practices Guide (APG) pattern, as presented on zoebijl.github.io/apg-tooltip/.

## Key Findings

*   **WCAG Compliance:** Both presented tooltip implementations comply with WCAG 2.1 SC 1.4.13 (Content on Hover or Focus) and follow ARIA APG guidance.
*   **Invalid ARIA 1.2 Pattern:** Using a "Tooltip as main label" where `aria-labelledby` points to the tooltip text is explicitly stated as *not* a valid or supported use case in ARIA 1.2.
*   **Redundancy for Screen Readers:** If a tooltip merely repeats information already conveyed by the control's accessible name, it offers little value to screen reader users and can lead to redundant announcements.
*   **ARIA's First Rule:** The principle "the first rule of ARIA is to not use it if you can do without" is emphasized.

## Recommendations

*   **Avoid Redundant `role="tooltip"`:** If a tooltip's content is primarily for sighted users and redundant for screen readers, it is recommended *not* to use `role="tooltip"`.
*   **Alternative Accessible Naming:** For accessible names, consider using `aria-labelledby` or a visually hidden `<span>` element inside the control, especially when `role="tooltip"` is deemed unnecessary.
*   **Interaction Models:**
    *   **Keyboard:** Tooltips should appear on focus and hide on blur. Pressing `Escape` should close the tooltip.
    *   **Mouse:** Tooltips should appear on `pointerover` and hide on `pointerout` (unless the pointer moves onto the tooltip itself).
    *   **Touch:** Tapping anywhere outside the tooltip or its trigger should close it.
*   **Thorough Testing:** The document highlights the importance of testing across various browsers and assistive technologies (e.g., VoiceOver, JAWS, NVDA) to ensure broad accessibility.
