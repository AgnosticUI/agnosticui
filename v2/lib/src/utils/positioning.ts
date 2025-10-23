/**
 * Shared positioning utilities for components that need viewport edge/corner positioning.
 * Used by Dialog, Drawer, Toast, and potentially other overlay components.
 */

/**
 * Edge positions (used by Dialog, Drawer)
 */
export type EdgePosition = 'top' | 'bottom' | 'start' | 'end';

/**
 * Corner positions (used by Toast and other non-modal overlays)
 */
export type CornerPosition =
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end';

/**
 * All supported positions
 */
export type Position = EdgePosition | CornerPosition;

/**
 * Configuration for positioned elements
 */
export interface PositionConfig {
  /** Width for vertical edge positions (start/end) */
  edgeWidth?: string;
  /** Height for horizontal edge positions (top/bottom) */
  edgeHeight?: string;
  /** Max width for corner positions */
  cornerMaxWidth?: string;
  /** Max height for corner positions */
  cornerMaxHeight?: string;
}

/**
 * Default position configuration
 */
export const DEFAULT_POSITION_CONFIG: Required<PositionConfig> = {
  edgeWidth: 'var(--ag-drawer-width)',
  edgeHeight: 'var(--ag-sheet-height)',
  cornerMaxWidth: '90vw',
  cornerMaxHeight: '90vh',
};

/**
 * Check if position is an edge position
 */
export function isEdgePosition(position: Position | undefined): position is EdgePosition {
  return position === 'top' || position === 'bottom' || position === 'start' || position === 'end';
}

/**
 * Check if position is a corner position
 */
export function isCornerPosition(position: Position | undefined): position is CornerPosition {
  return (
    position === 'top-start' ||
    position === 'top-end' ||
    position === 'bottom-start' ||
    position === 'bottom-end'
  );
}

/**
 * Check if position is horizontal (top/bottom or corner with top/bottom)
 */
export function isHorizontalPosition(position: Position | undefined): boolean {
  if (!position) return false;
  return (
    position === 'top' ||
    position === 'bottom' ||
    position.startsWith('top-') ||
    position.startsWith('bottom-')
  );
}

/**
 * Check if position is vertical (start/end)
 */
export function isVerticalPosition(position: Position | undefined): boolean {
  return position === 'start' || position === 'end';
}

/**
 * Get the CSS attribute selector for a position
 * Used to create selectors like :host([position="top"])
 */
export function getPositionSelector(position: Position, attributeName = 'position'): string {
  return `[${attributeName}="${position}"]`;
}

/**
 * Generate CSS for positioning logic
 * Returns CSS that can be included in component styles
 */
export function generatePositionCSS(
  hostSelector: string,
  containerClass: string,
  attributeName = 'position',
  config: PositionConfig = DEFAULT_POSITION_CONFIG
): string {
  const mergedConfig = { ...DEFAULT_POSITION_CONFIG, ...config };

  return `
    /* Edge position host sizing */
    ${hostSelector}${getPositionSelector('start', attributeName)},
    ${hostSelector}${getPositionSelector('end', attributeName)} {
      height: 100%;
    }

    ${hostSelector}${getPositionSelector('top', attributeName)},
    ${hostSelector}${getPositionSelector('bottom', attributeName)} {
      width: 100%;
    }

    /* Base positioning for all positioned containers */
    ${hostSelector}${getPositionSelector('start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('end', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('top', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('top-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('top-end', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-end', attributeName)} ${containerClass} {
      box-sizing: border-box;
      position: fixed;
      margin: initial;
      border-radius: 0;
    }

    /* Vertical edge positions (start/end) setup */
    ${hostSelector}${getPositionSelector('start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('end', attributeName)} ${containerClass} {
      height: 100%;
      width: ${mergedConfig.edgeWidth};
      max-height: initial;
    }

    /* Horizontal edge positions (top/bottom) setup */
    ${hostSelector}${getPositionSelector('top', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom', attributeName)} ${containerClass} {
      height: ${mergedConfig.edgeHeight};
      width: 100%;
      max-width: initial;
    }

    /* Corner positions setup */
    ${hostSelector}${getPositionSelector('top-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('top-end', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-end', attributeName)} ${containerClass} {
      max-width: ${mergedConfig.cornerMaxWidth};
      max-height: ${mergedConfig.cornerMaxHeight};
      border-radius: var(--ag-radius-lg);
    }

    /* Top positioning (closed state with transforms) */
    ${hostSelector}${getPositionSelector('top', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('top-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('top-end', attributeName)} ${containerClass} {
      top: 0;
      transform: translateY(-100%);
    }

    /* Bottom positioning (closed state with transforms) */
    ${hostSelector}${getPositionSelector('bottom', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-end', attributeName)} ${containerClass} {
      bottom: 0;
      transform: translateY(100%);
    }

    /* Start positioning (closed state with transform) */
    ${hostSelector}${getPositionSelector('start', attributeName)} ${containerClass} {
      left: 0;
      transform: translateX(-100%);
    }

    /* End positioning (closed state with transform) */
    ${hostSelector}${getPositionSelector('end', attributeName)} ${containerClass} {
      right: 0;
      transform: translateX(100%);
    }

    /* Corner start (left) side positioning */
    ${hostSelector}${getPositionSelector('top-start', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-start', attributeName)} ${containerClass} {
      left: 0;
    }

    /* Corner end (right) side positioning */
    ${hostSelector}${getPositionSelector('top-end', attributeName)} ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-end', attributeName)} ${containerClass} {
      right: 0;
    }

    /* Open state - remove transforms to slide into view */
    ${hostSelector}${getPositionSelector('top', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('bottom', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('start', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('end', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('top-start', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('top-end', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-start', attributeName)}[open] ${containerClass},
    ${hostSelector}${getPositionSelector('bottom-end', attributeName)}[open] ${containerClass} {
      transform: none;
    }
  `;
}
