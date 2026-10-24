// v2/lib/src/components/Button/react/index.ts
export { ReactButton } from './ReactButton';
export type { ReactButtonProps } from './ReactButton';

// Re-export event types from core for convenience
export type { ButtonToggleEvent, ButtonToggleEventDetail } from '../core/Button';

// Pull cleanly from core instead of routing through the component wrapper
export { _ButtonFallback } from '../core/Button.js';
export type { ButtonFallbackProps } from '../core/Button.js';
