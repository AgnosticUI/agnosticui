/**
 * AgnosticUI SDUI Schema - Zod definitions (Standard Schema compatible)
 *
 * Zod 3.23+ implements the Standard Schema Specification (standardschema.dev),
 * so every schema exported here is Standard Schema-compatible. Consumers using
 * Valibot or ArkType can use the TypeScript types from ./types.ts with their
 * own validator of choice.
 */

import { z } from 'zod';

export const AgButtonSchema = z.object({
  id: z.string(),
  component: z.literal('AgButton'),
  label: z.string().optional(),
  variant: z.enum(['success', 'primary', 'secondary', 'warning', 'danger', 'monochrome']).optional(),
  size: z.enum(['x-sm', 'sm', 'md', 'lg', 'xl']).optional(),
  shape: z.enum(['capsule', 'rounded', 'circle', 'square', 'rounded-square']).optional(),
  disabled: z.boolean().optional(),
  loading: z.boolean().optional(),
  type: z.enum(['button', 'submit', 'reset']).optional(),
  children: z.array(z.string()).optional(),
  on_click: z.string().optional(),
});

export const AgCardSchema = z.object({
  id: z.string(),
  component: z.literal('AgCard'),
  shadow: z.boolean().optional(),
  animated: z.boolean().optional(),
  stacked: z.boolean().optional(),
  rounded: z.enum(['sm', 'md', 'lg']).optional(),
  variant: z.enum(['success', 'info', 'error', 'warning', 'monochrome']).optional(),
  children: z.array(z.string()).optional(),
  on_click: z.string().optional(),
});

export const AgInputSchema = z.object({
  id: z.string(),
  component: z.literal('AgInput'),
  name: z.string().optional(),
  label: z.string().optional(),
  type: z.enum(['text', 'password', 'email', 'number', 'search', 'tel', 'url', 'date', 'datetime-local', 'month', 'time', 'week']).optional(),
  value: z.string().optional(),
  placeholder: z.string().optional(),
  required: z.boolean().optional(),
  disabled: z.boolean().optional(),
  readonly: z.boolean().optional(),
  invalid: z.boolean().optional(),
  errorMessage: z.string().optional(),
  helpText: z.string().optional(),
  children: z.array(z.string()).optional(),
  on_change: z.string().optional(),
});

export const AgSelectSchema = z.object({
  id: z.string(),
  component: z.literal('AgSelect'),
  name: z.string().optional(),
  label: z.string().optional(),
  disabled: z.boolean().optional(),
  required: z.boolean().optional(),
  invalid: z.boolean().optional(),
  errorMessage: z.string().optional(),
  helpText: z.string().optional(),
  size: z.enum(['small', 'large']).optional(),
  children: z.array(z.string()).optional(),
  on_change: z.string().optional(),
});

export const AgCheckboxSchema = z.object({
  id: z.string(),
  component: z.literal('AgCheckbox'),
  name: z.string().optional(),
  labelText: z.string().optional(),
  value: z.string().optional(),
  checked: z.boolean().optional(),
  disabled: z.boolean().optional(),
  required: z.boolean().optional(),
  invalid: z.boolean().optional(),
  errorMessage: z.string().optional(),
  helpText: z.string().optional(),
  children: z.array(z.string()).optional(),
  on_change: z.string().optional(),
});

export const AgToggleSchema = z.object({
  id: z.string(),
  component: z.literal('AgToggle'),
  name: z.string().optional(),
  label: z.string().optional(),
  checked: z.boolean().optional(),
  disabled: z.boolean().optional(),
  variant: z.enum(['default', 'success', 'warning', 'danger', 'monochrome']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  required: z.boolean().optional(),
  invalid: z.boolean().optional(),
  errorMessage: z.string().optional(),
  helpText: z.string().optional(),
  children: z.array(z.string()).optional(),
  on_change: z.string().optional(),
});

export const AgNodeSchema = z.discriminatedUnion('component', [
  AgButtonSchema,
  AgCardSchema,
  AgInputSchema,
  AgSelectSchema,
  AgCheckboxSchema,
  AgToggleSchema,
]);
