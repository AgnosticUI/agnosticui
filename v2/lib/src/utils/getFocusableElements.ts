/**
 * Gets all keyboard-accessible focusable elements within a container.
 * Handles both Shadow DOM and Light DOM elements.
 *
 * @param shadowRoot - The shadow root to search within
 * @param lightDomContainer - The light DOM container (for slotted elements)
 * @returns Array of focusable HTML elements
 */
export function getFocusableElements(
  shadowRoot: ShadowRoot | null,
  lightDomContainer?: HTMLElement
): HTMLElement[] {
  if (!shadowRoot) return [];

  // Comprehensive selector for all potentially focusable elements
  const selectors = [
    'a[href]',
    'button',
    'input',
    'textarea',
    'select',
    'details',
    'summary',
    'iframe',
    'embed',
    'object',
    'dialog',
    'audio[controls]',
    'video[controls]',
    '[contenteditable]',
    '[tabindex]',
    // Custom AgnosticUI components
    'ag-button'
  ].join(', ');

  const shadowElements = Array.from(shadowRoot.querySelectorAll(selectors)) as HTMLElement[];
  const slottedElements = lightDomContainer
    ? Array.from(lightDomContainer.querySelectorAll(selectors)) as HTMLElement[]
    : [];

  const allElements = [...shadowElements, ...slottedElements];

  // Filter to only keyboard-accessible elements
  return allElements.filter(el => {
    // Exclude disabled elements
    if (el.hasAttribute('disabled')) return false;

    // Exclude hidden elements
    if (el.hasAttribute('hidden')) return false;

    // Exclude elements with display: none
    if (window.getComputedStyle(el).display === 'none') return false;

    // Exclude elements with visibility: hidden
    if (window.getComputedStyle(el).visibility === 'hidden') return false;

    // Exclude elements with negative tabindex (not keyboard accessible)
    const tabIndex = el.getAttribute('tabindex');
    if (tabIndex && parseInt(tabIndex, 10) < 0) return false;

    // Exclude elements that are not visible (offsetParent === null indicates element is not rendered)
    // Note: This check can have false positives with position: fixed elements
    if (el.offsetParent === null && window.getComputedStyle(el).position !== 'fixed') {
      return false;
    }

    return true;
  });
}
