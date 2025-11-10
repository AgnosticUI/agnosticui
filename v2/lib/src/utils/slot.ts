/**
 * Checks if a slot has any meaningful content assigned to it.
 * "Meaningful" is defined as either an Element node or a Text node
 * that is not just whitespace.
 * @param slot - The HTMLSlotElement to check.
 * @returns True if the slot has content, false otherwise.
 */
export function hasSlotContent(slot: HTMLSlotElement | null): boolean {
  if (!slot) {
    return false;
  }
  const assignedNodes = slot.assignedNodes({ flatten: true });
  return assignedNodes.some((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      return true;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent?.trim() !== '';
    }
    return false;
  });
}
