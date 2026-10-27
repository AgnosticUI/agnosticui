import { createComponent } from "@lit/react";
import React from "react";
import { AgSpinner } from "../core/Spinner.js";

export type ReactSpinnerProps = React.ComponentProps<typeof ReactSpinner>;

export const ReactSpinner = createComponent({
  tagName: "ag-spinner",
  elementClass: AgSpinner,
  react: React,
  events: {},
});
