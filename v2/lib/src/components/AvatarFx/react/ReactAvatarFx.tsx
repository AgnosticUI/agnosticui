import * as React from "react";
import { createComponent } from "@lit/react";
import { AvatarFx, type AvatarFxProps } from "../core/AvatarFx";

export interface ReactAvatarFxProps extends AvatarFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactAvatarFx = createComponent({
  tagName: "ag-avatar-fx",
  elementClass: AvatarFx,
  react: React,
  events: {},
});

export type { AvatarFxProps } from "../core/AvatarFx";
export type { FxProps } from "../../../types/fx";
