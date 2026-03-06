/**
 * Shared FX (effects) types used across FX-enabled components
 *
 * This module exports the FxProps interface that can be used to:
 * 1. Add FX capabilities to custom components
 * 2. Extend existing FX components
 * 3. Maintain type consistency across your application
 *
 * @example
 * ```typescript
 * import type { FxProps } from 'agnosticui-core';
 *
 * // Add FX to your custom component
 * export interface MyCardFxProps extends CardProps, FxProps {}
 *
 * export class MyCardFx extends Card implements FxProps {
 *   // Use the same FX pattern as ButtonFx and IconButtonFx
 * }
 * ```
 */

/**
 * FX props interface - shared by ButtonFx, IconButtonFx, and other FX components
 *
 * @public
 */
export interface FxProps {
  /** Animation effect name (e.g., 'pulse', 'bounce', 'wobble', 'pulse-wobble') */
  fx?: string;
  /** Animation duration/speed variant */
  fxSpeed?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** Animation easing function */
  fxEase?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'bounce' | 'spring-sm' | 'spring-md' | 'spring-lg';
  /** Disable all FX animations */
  fxDisabled?: boolean;
}
