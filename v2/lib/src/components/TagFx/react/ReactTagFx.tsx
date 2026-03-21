import * as React from "react";
import { createComponent, type EventName } from "@lit/react";
import { TagFx, type TagFxProps } from "../core/TagFx";
import type { TagRemoveEvent } from "../../Tag/core/Tag";

export interface ReactTagFxProps extends TagFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactTagFx = createComponent({
  tagName: "ag-tag-fx",
  elementClass: TagFx,
  react: React,
  events: {
    onTagRemove: 'tag-remove' as EventName<TagRemoveEvent>,
  },
});

export type { TagFxProps } from "../core/TagFx";
export type { FxProps } from "../../../types/fx";
