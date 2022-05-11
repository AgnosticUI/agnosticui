export type DialogRoles = "dialog" | "alertdialog";
export type DialogCloseButtonPositions = "first" | "last" | "none";
/**
 * Only useful if this Dialog is being used as a Drawer. This is typically
 * only done internally to AgnosticUI. Use Drawer directly instead ;-)
 */
export type DialogDrawerPlacement = "start" | "end" | "top" | "bottom";

export interface DialogClassNames {
  container?: string;
  overlay?: string;
  document?: string;
  title?: string;
  closeButton?: string;
};
