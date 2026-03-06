/**
 * Checks if a slot has any meaningful content assigned to it.
 * "Meaningful" is defined as either an Element node or a Text node
 * that is not just whitespace.
 *
 * Special handling for Vue wrappers: If the only element is a wrapper
 * element (like <span>) with no meaningful content inside, treat it as empty.
 *
 * @param slot - The HTMLSlotElement to check.
 * @returns True if the slot has content, false otherwise.
 */
export function hasSlotContent(slot: HTMLSlotElement | null): boolean {
  if (!slot) {
    return false;
  }
  const assignedNodes = slot.assignedNodes({ flatten: true });

  // Helper to check if an element has meaningful content
  const hasElementContent = (element: Element): boolean => {
    // Check if element has any child elements
    if (element.children.length > 0) {
      return true;
    }
    // Check if element has non-whitespace text content
    if (element.textContent?.trim() !== '') {
      return true;
    }
    return false;
  };

  return assignedNodes.some((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      // Check if this element actually has content
      return hasElementContent(element);
    }
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent?.trim() !== '';
    }
    return false;
  });
}
