import { createComponent, type EventName } from "@lit/react";
import React from "react";
import {
  AgTag,
  type TagVariant,
  type TagShape,
  type TagProps,
  type TagRemoveEvent
} from "../core/Tag";

export type ReactTagVariant = TagVariant;
export type ReactTagShape = TagShape;

/**
 * React-specific props interface derived from core TagProps
 * Extends core props including event handlers (onTagRemove)
 */
export interface ReactTagProps extends TagProps {
  children?: React.ReactNode;
}

// Create component with @lit/react
export const ReactTag = createComponent({
  tagName: "ag-tag",
  elementClass: AgTag,
  react: React,
  events: {
    onTagRemove: 'tag-remove' as EventName<TagRemoveEvent>,
  },
});

// Re-export event types
export type { TagRemoveEvent } from "../core/Tag";