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

  const allElements = getAllPotentiallyFocusableElements(shadowRoot, lightDomContainer);
  const radioGroups = groupRadioButtons(allElements);
  return filterFocusableElements(allElements, radioGroups, lightDomContainer);
}

/**
 * Retrieves all potentially focusable elements from Shadow DOM and Light DOM.
 */
function getAllPotentiallyFocusableElements(
  shadowRoot: ShadowRoot,
  lightDomContainer?: HTMLElement
): HTMLElement[] {
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
    'ag-button'
  ].join(', ');

  const shadowElements = Array.from(shadowRoot.querySelectorAll(selectors)) as HTMLElement[];
  const slottedElements = lightDomContainer
    ? Array.from(lightDomContainer.querySelectorAll(selectors)) as HTMLElement[]
    : [];

  return [...shadowElements, ...slottedElements];
}

/**
 * Groups radio buttons by their name attribute, excluding disabled ones.
 */
function groupRadioButtons(elements: HTMLElement[]): { [key: string]: HTMLElement[] } {
  const radioGroups: { [key: string]: HTMLElement[] } = {};
  elements.forEach(el => {
    if (
      el.tagName.toLowerCase() === 'input' &&
      el.getAttribute('type') === 'radio' &&
      !el.hasAttribute('disabled')
    ) {
      const name = el.getAttribute('name') || '';
      if (!radioGroups[name]) {
        radioGroups[name] = [];
      }
      radioGroups[name].push(el);
    }
  });
  return radioGroups;
}

/**
 * Filters elements to include only those that are keyboard-accessible.
 */
function filterFocusableElements(
  elements: HTMLElement[],
  radioGroups: { [key: string]: HTMLElement[] },
  lightDomContainer?: HTMLElement
): HTMLElement[] {
  return elements.filter(el => {
    // Exclude disabled elements
    if (el.hasAttribute('disabled')) return false;

    // Exclude hidden elements
    if (el.hasAttribute('hidden')) return false;

    // Exclude elements with display: none or visibility: hidden
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden') return false;

    // Exclude elements with negative tabindex
    const tabIndex = el.getAttribute('tabindex');
    if (tabIndex && parseInt(tabIndex, 10) < 0) return false;

    // Skip offsetParent check for slotted elements and custom elements
    const isCustomElement = el.tagName.includes('-');
    const isSlottedElement = lightDomContainer
      ? Array.from(lightDomContainer.querySelectorAll('*')).includes(el)
      : false;
    if (!isCustomElement && !isSlottedElement && el.offsetParent === null && style.position !== 'fixed') {
      return false;
    }

    // Handle radio buttons: include only the first non-disabled or checked radio button per group
    if (el.tagName.toLowerCase() === 'input' && el.getAttribute('type') === 'radio') {
      const name = el.getAttribute('name') || '';
      const group = radioGroups[name];
      if (!group) return false; // Element is disabled or not in a group
      const checkedRadio = group.find(radio => (radio as HTMLInputElement).checked);
      return checkedRadio ? el === checkedRadio : el === group[0];
    }

    return true;
  });
}
