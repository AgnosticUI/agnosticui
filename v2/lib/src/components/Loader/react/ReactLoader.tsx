import { createComponent } from "@lit/react";
import React from "react";
import { Loader } from "../core/Loader.js";

export type ReactLoaderProps = React.ComponentProps<typeof ReactLoader>;

export const ReactLoader = createComponent({
  tagName: "ag-loader",
  elementClass: Loader,
  react: React,
  events: {},
});
