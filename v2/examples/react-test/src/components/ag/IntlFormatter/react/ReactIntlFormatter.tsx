import { createComponent } from "@lit/react";
import React from "react";
import {
  IntlFormatter,
  type IntlFormatterProps,
} from "../core/IntlFormatter";

export type { IntlFormatterProps };

export const ReactIntlFormatter = createComponent({
  tagName: "ag-intl-formatter",
  elementClass: IntlFormatter,
  react: React,
  events: {
    onFormatError: "format-error",
  },
});
