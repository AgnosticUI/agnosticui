import React from "react";
import { createComponent } from "@lit/react";
import { AgDivider, type DividerProps } from "../core/Divider.js";

export interface ReactDividerProps extends DividerProps {
  children?: React.ReactNode;
}

export const ReactDivider = createComponent({
  tagName: "ag-divider",
  elementClass: AgDivider,
  react: React,
  events: {},
});
