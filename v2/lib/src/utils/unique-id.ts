export function generateUniqueId(prefix = 'id') {
  return `${prefix}-${Math.random().toString(36).substring(2, 11)}`;
}
