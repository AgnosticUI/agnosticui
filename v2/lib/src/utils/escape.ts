/**
 * Sanitizes malicious HTML sequences inside property interpolations
 * to enforce the core Isomorphic Markup Injection Guardrail.
 */
export function escapeHtml(str: string = ''): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
