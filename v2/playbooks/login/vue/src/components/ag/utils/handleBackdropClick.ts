/**
 * Determines if a click event occurred on the backdrop (outside content area).
 * Handles both Shadow DOM and Light DOM (slotted) content.
 *
 * @param event - The mouse click event
 * @param shadowRoot - The shadow root containing the content
 * @param contentSelector - CSS selector for the content container (e.g., '.dialog-container')
 * @returns true if click was on backdrop, false if on content
 */
export function isBackdropClick(
  event: MouseEvent,
  shadowRoot: ShadowRoot | null,
  contentSelector: string,
): boolean {
  if (!shadowRoot) return false;

  const contentContainer = shadowRoot.querySelector(contentSelector);
  if (!contentContainer) {
    // If we can't find the content container, we can't determine if the click
    // was on the backdrop. To be safe and prevent accidental closing, we'll
    // assume it was not a backdrop click. In a real scenario, this might
    // indicate a setup issue with the component.
    return false;
  }

  // composedPath gives an array of the elements the event bubbled through.
  // The first element is the actual click target, even inside a shadow DOM.
  const path = event.composedPath();

  // If the content container is in the path, the click was inside it or on it.
  // If it's not, the click was outside (on the backdrop).
  return !path.includes(contentContainer);
}
