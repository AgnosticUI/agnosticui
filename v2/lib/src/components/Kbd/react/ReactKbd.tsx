import { createComponent } from "@lit/react";
import React from "react";
import { AgKbd } from "../core/Kbd.js";

export const ReactKbd = createComponent({
  tagName: "ag-kbd",
  elementClass: AgKbd,
  react: React,
  events: {},
});
