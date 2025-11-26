/**
 * Svelte TypeScript definitions for ag-icon-button web component
 */

declare global {
  namespace svelteHTML {
    interface IntrinsicElements {
      'ag-icon-button': {
        /** Required accessible name for the button */
        label: string;

        /** Icon identifier or name (for icon systems) */
        icon?: string;

        /** Unicode symbol for simple icons (×, ☰, etc.) */
        unicode?: string;

        /** Button size variant */
        size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

        /** Visual variant */
        variant?: 'primary' | 'secondary' | 'ghost' | 'danger';

        /** Button type */
        type?: 'button' | 'submit' | 'reset';

        /** Disabled state */
        disabled?: boolean;

        /** Pressed state for toggle buttons */
        pressed?: boolean;

        /** Loading state */
        loading?: boolean;

        /** Additional HTML attributes */
        [key: `data-${string}`]: string;
        class?: string;
        id?: string;
        style?: string;
        tabindex?: number;

        /** Custom event handlers */
        'on:icon-button-click'?: (event: CustomEvent<{
          label: string;
          pressed: boolean;
          originalEvent: MouseEvent | TouchEvent;
        }>) => void;

        'on:icon-button-activate'?: (event: CustomEvent<{
          label: string;
          pressed: boolean;
          originalEvent: KeyboardEvent;
        }>) => void;

        /** Standard DOM event handlers */
        'on:blur'?: (event: FocusEvent) => void;
        'on:focus'?: (event: FocusEvent) => void;
        'on:keydown'?: (event: KeyboardEvent) => void;
        'on:keyup'?: (event: KeyboardEvent) => void;
        'on:mousedown'?: (event: MouseEvent) => void;
        'on:mouseup'?: (event: MouseEvent) => void;
        'on:touchstart'?: (event: TouchEvent) => void;
        'on:touchend'?: (event: TouchEvent) => void;
      };
    }
  }
}

export {};