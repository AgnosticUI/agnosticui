import { createComponent } from "@lit/react";
import React from "react";
import { AgTag, type TagVariant, type TagShape } from "../core/Tag";

export type ReactTagVariant = TagVariant;
export type ReactTagShape = TagShape;

export const ReactTag = createComponent({
  tagName: "ag-tag",
  elementClass: AgTag,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});