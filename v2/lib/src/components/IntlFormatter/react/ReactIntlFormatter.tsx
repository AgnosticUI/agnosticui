import React from "react";
import { createComponent } from "@lit/react";
import { IntlFormatter as IntlFormatterLit } from "../core/_IntlFormatter.js";

export interface IntlFormatterProps {
  type?: "date" | "number" | "percent" | "currency";
  value?: number | string | Date;
  lang?: string;

  // Date-specific props
  date?: Date | string;
  weekday?: "narrow" | "short" | "long";
  era?: "narrow" | "short" | "long";
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "narrow" | "short" | "long";
  day?: "numeric" | "2-digit";
  hour?: "numeric" | "2-digit";
  minute?: "numeric" | "2-digit";
  second?: "numeric" | "2-digit";
  timeZoneName?: "short" | "long";
  timeZone?: string;
  hourFormat?: "auto" | "12" | "24";
  dateStyle?: "full" | "long" | "medium" | "short";
  timeStyle?: "full" | "long" | "medium" | "short";

  // Number-specific props
  noGrouping?: boolean;
  currency?: string;
  currencyDisplay?: "symbol" | "narrowSymbol" | "code" | "name";
  minimumIntegerDigits?: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  minimumSignificantDigits?: number;
  maximumSignificantDigits?: number;

  // Event handlers
  onFormatError?: (
    event: CustomEvent<{ type: "date" | "number"; error: string }>
  ) => void;
}

/**
 * React wrapper for the IntlFormatter web component
 *
 * @example
 * ```tsx
 * import { ReactIntlFormatter } from '@your-org/intl-formatter/react';
 *
 * function App() {
 *   const handleError = (e) => {
 *     console.error('Formatting error:', e.detail);
 *   };
 *
 *   return (
 *     <div>
 *       <ReactIntlFormatter
 *         type="currency"
 *         value={1234.56}
 *         currency="USD"
 *         onFormatError={handleError}
 *       />
 *     </div>
 *   );
 * }
 * ```
 */
export const ReactIntlFormatter = createComponent({
  tagName: "ag-intl-formatter",
  elementClass: IntlFormatterLit,
  react: React,
  events: {
    onFormatError: "format-error",
  },
});

export default ReactIntlFormatter;
