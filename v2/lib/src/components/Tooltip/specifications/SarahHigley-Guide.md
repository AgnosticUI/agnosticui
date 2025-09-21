# Tooltip Accessibility and WCAG 2.1 Compliance Summary

This article discusses the long-standing accessibility issues with tooltips and provides recommendations for WCAG 2.1 compliance.

## Key Takeaways:

*   **Definition of a Tooltip:** A tooltip should be a non-modal, text-only overlay providing supplemental information for an existing UI control, appearing on hover or focus. It should not contain rich or interactive content.
*   **Accessibility Challenges:** Tooltips historically pose problems for keyboard users, non-mouse pointers (touchscreens, eye trackers), screen readers, and magnification software due to their transient nature and reliance on hover.
*   **Semantic Best Practices:**
    *   Associate the tooltip trigger with the tooltip content using `aria-describedby` (for descriptions) or `aria-labelledby` (for names).
    *   Ensure the tooltip is hidden from assistive technologies when not visible using `aria-hidden="true"`.
    *   Avoid `role="tooltip"`, `aria-haspopup`, and `aria-live` as they are often misused or ineffective for tooltips.
*   **Interaction Requirements (WCAG 2.1 - 1.4.13 Content on Hover or Focus):**
    *   **Dismissable:** Tooltips must be dismissable without moving pointer hover or keyboard focus (e.g., via the Escape key for keyboard users and a clear pointer method like a close button).
    *   **Hoverable:** Users must be able to move their mouse over the tooltip content without it being dismissed.
    *   **Persistent:** Tooltips should remain visible until the user actively dismisses them or they are no longer valid.
    *   Tooltips should open on focus or mouse over, and close on blur or mouse out.
*   **Content Guidelines:**
    *   Tooltips should *only* contain non-essential, supplemental information. Assume the content may never be read.
    *   Content should be concise and text-only; avoid rich formatting or interactive elements.
    *   Only interactive elements should trigger tooltips.
    *   Do not use the `title` attribute for tooltips due to its inherent accessibility flaws.
