/**
 * Checks if an element is within a container, handling both Shadow DOM and Light DOM.
 *
 * @param element - The element to check
 * @param shadowRoot - The shadow root to check within
 * @param lightDomContainer - The light DOM container (for slotted elements)
 * @returns true if element is in shadow DOM or light DOM container
 */
export function isElementInContainer(
  element: Element | null,
  shadowRoot: ShadowRoot | null,
  lightDomContainer?: HTMLElement
): boolean {
  if (!element || !shadowRoot) return false;

  // Check if element is in shadow DOM
  if (shadowRoot.contains(element)) return true;

  // Check if element is slotted content (light DOM)
  if (lightDomContainer && lightDomContainer.contains(element)) return true;

  return false;
}
