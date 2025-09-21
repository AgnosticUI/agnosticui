function t(n = "id") {
  return `${n}-${Math.random().toString(36).substring(2, 11)}`;
}
export {
  t as generateUniqueId
};
