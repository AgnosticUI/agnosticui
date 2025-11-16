import { createComponent } from "@lit/react";
import React from "react";
import { AgKbd, type KbdProps, type KbdVariant, type KbdSize } from "../core/Kbd";

export type { KbdProps, KbdVariant, KbdSize };

export const ReactKbd = createComponent({
  tagName: "ag-kbd",
  elementClass: AgKbd,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
