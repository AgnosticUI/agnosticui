/**
 * Determines if a click event occurred on the backdrop (outside content area).
 * Handles both Shadow DOM and Light DOM (slotted) content.
 *
 * @param event - The mouse click event
 * @param shadowRoot - The shadow root containing the content
 * @param contentSelector - CSS selector for the content container (e.g., '.dialog-container')
 * @param lightDomContainer - The light DOM container element (for slotted content)
 * @returns true if click was on backdrop, false if on content
 */
export function isBackdropClick(
  event: MouseEvent,
  shadowRoot: ShadowRoot | null,
  contentSelector: string,
  lightDomContainer?: HTMLElement
): boolean {
  if (!shadowRoot) return false;

  const target = event.target as Element;
  const contentContainer = shadowRoot.querySelector(contentSelector);

  // Check if click is on shadow DOM content (content container or its children)
  const isOnShadowContent = contentContainer && contentContainer.contains(target);

  // Check if click is on slotted content (light DOM elements inside the container)
  const isOnSlottedContent = lightDomContainer && lightDomContainer.contains(target);

  // Click is on backdrop only if it's neither on shadow content nor slotted content
  return !isOnShadowContent && !isOnSlottedContent;
}
