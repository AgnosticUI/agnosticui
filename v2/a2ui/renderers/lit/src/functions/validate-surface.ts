import { z } from 'zod';
import type { FunctionImplementation } from '@a2ui/web_core/v1_0';

/**
 * CSS selector matching all AgnosticUI Form-Associated Custom Elements (FACE)
 * that expose standard `reportValidity()` / `checkValidity()` methods.
 */
export const AG_FACE_SELECTOR = 'ag-input, ag-select, ag-checkbox, ag-radio';

export interface FaceValidatableElement extends HTMLElement {
  reportValidity?: () => boolean;
  checkValidity?: () => boolean;
}

export const ValidateSurfaceSchema = z
  .object({
    surfaceId: z
      .string()
      .optional()
      .describe('Optional target surface ID. Defaults to the current surface from DataContext.'),
    report: z
      .boolean()
      .optional()
      .describe('When true (default), calls reportValidity() to display validation messages; when false, calls checkValidity().'),
  })
  .strict();

/**
 * Evaluates native HTML5 / FACE form validity across all AgnosticUI form controls
 * inside the active `<a2ui-surface>` Light DOM root.
 */
export function runSurfaceValidation(root: ParentNode = document, report = true): boolean {
  const controls = Array.from(root.querySelectorAll<FaceValidatableElement>(AG_FACE_SELECTOR));
  let allValid = true;

  for (const control of controls) {
    const isValid = report
      ? (control.reportValidity?.() ?? true)
      : (control.checkValidity?.() ?? true);

    if (!isValid) {
      allValid = false;
    }
  }

  return allValid;
}

export const ValidateSurfaceImplementation: FunctionImplementation = {
  name: 'validateSurface',
  returnType: 'boolean',
  description:
    'Validates all AgnosticUI Form-Associated Custom Elements (ag-input, ag-select, ag-checkbox, ag-radio) within the surface and returns true if all fields are valid.',
  schema: ValidateSurfaceSchema,
  execute(args, context) {
    const surfaceId =
      typeof args.surfaceId === 'string' && args.surfaceId.length > 0
        ? args.surfaceId
        : context.surface?.id;
    const report = typeof args.report === 'boolean' ? args.report : true;

    const surfaceRoot =
      typeof document !== 'undefined' && surfaceId
        ? (document.querySelector(`a2ui-surface[data-surface-id="${surfaceId}"]`) ?? document)
        : typeof document !== 'undefined'
          ? document
          : null;

    if (!surfaceRoot) {
      return true;
    }

    return runSurfaceValidation(surfaceRoot, report);
  },
};
