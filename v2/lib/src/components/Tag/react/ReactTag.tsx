import { createComponent, type EventName } from "@lit/react";
import React from "react";
import {
  AgTag,
  type TagVariant,
  type TagShape,
  type TagProps,
  type TagRemoveEvent,
} from "../core/Tag";

export type ReactTagVariant = TagVariant;
export type ReactTagShape = TagShape;

export interface ReactTagProps extends TagProps {
  children?: React.ReactNode;
}

export const ReactTag = createComponent({
  tagName: "ag-tag",
  elementClass: AgTag,
  react: React,
  events: {
    onTagRemove: "tag-remove" as EventName<TagRemoveEvent>,
  },
});

export type { TagRemoveEvent } from "../core/Tag";
