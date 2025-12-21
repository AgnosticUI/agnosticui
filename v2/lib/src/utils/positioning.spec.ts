import { describe, it, expect } from 'vitest';
import {
  isEdgePosition,
  isCornerPosition,
  isHorizontalPosition,
  isVerticalPosition,
  getPositionSelector,
  generatePositionCSS,
  DEFAULT_POSITION_CONFIG,
} from './positioning';

describe('positioning utilities', () => {
  describe('isEdgePosition', () => {
    it('returns true for edge positions', () => {
      expect(isEdgePosition('top')).toBe(true);
      expect(isEdgePosition('bottom')).toBe(true);
      expect(isEdgePosition('start')).toBe(true);
      expect(isEdgePosition('end')).toBe(true);
    });

    it('returns false for corner positions', () => {
      expect(isEdgePosition('top-start')).toBe(false);
      expect(isEdgePosition('top-end')).toBe(false);
      expect(isEdgePosition('bottom-start')).toBe(false);
      expect(isEdgePosition('bottom-end')).toBe(false);
    });

    it('returns false for undefined', () => {
      expect(isEdgePosition(undefined)).toBe(false);
    });
  });

  describe('isCornerPosition', () => {
    it('returns true for corner positions', () => {
      expect(isCornerPosition('top-start')).toBe(true);
      expect(isCornerPosition('top-end')).toBe(true);
      expect(isCornerPosition('bottom-start')).toBe(true);
      expect(isCornerPosition('bottom-end')).toBe(true);
    });

    it('returns false for edge positions', () => {
      expect(isCornerPosition('top')).toBe(false);
      expect(isCornerPosition('bottom')).toBe(false);
      expect(isCornerPosition('start')).toBe(false);
      expect(isCornerPosition('end')).toBe(false);
    });

    it('returns false for undefined', () => {
      expect(isCornerPosition(undefined)).toBe(false);
    });
  });

  describe('isHorizontalPosition', () => {
    it('returns true for horizontal edge positions', () => {
      expect(isHorizontalPosition('top')).toBe(true);
      expect(isHorizontalPosition('bottom')).toBe(true);
    });

    it('returns true for corner positions with top/bottom', () => {
      expect(isHorizontalPosition('top-start')).toBe(true);
      expect(isHorizontalPosition('top-end')).toBe(true);
      expect(isHorizontalPosition('bottom-start')).toBe(true);
      expect(isHorizontalPosition('bottom-end')).toBe(true);
    });

    it('returns false for vertical positions', () => {
      expect(isHorizontalPosition('start')).toBe(false);
      expect(isHorizontalPosition('end')).toBe(false);
    });

    it('returns false for undefined', () => {
      expect(isHorizontalPosition(undefined)).toBe(false);
    });
  });

  describe('isVerticalPosition', () => {
    it('returns true for vertical edge positions', () => {
      expect(isVerticalPosition('start')).toBe(true);
      expect(isVerticalPosition('end')).toBe(true);
    });

    it('returns false for horizontal positions', () => {
      expect(isVerticalPosition('top')).toBe(false);
      expect(isVerticalPosition('bottom')).toBe(false);
    });

    it('returns false for corner positions', () => {
      expect(isVerticalPosition('top-start')).toBe(false);
      expect(isVerticalPosition('top-end')).toBe(false);
      expect(isVerticalPosition('bottom-start')).toBe(false);
      expect(isVerticalPosition('bottom-end')).toBe(false);
    });

    it('returns false for undefined', () => {
      expect(isVerticalPosition(undefined)).toBe(false);
    });
  });

  describe('getPositionSelector', () => {
    it('generates correct selector with default attribute name', () => {
      expect(getPositionSelector('top')).toBe('[position="top"]');
      expect(getPositionSelector('bottom-start')).toBe('[position="bottom-start"]');
    });

    it('generates correct selector with custom attribute name', () => {
      expect(getPositionSelector('top', 'drawer-position')).toBe('[drawer-position="top"]');
      expect(getPositionSelector('end', 'placement')).toBe('[placement="end"]');
    });
  });

  describe('generatePositionCSS', () => {
    it('generates CSS with default config', () => {
      const css = generatePositionCSS(':host', '.container');

      expect(css).toContain(':host[position="top"]');
      expect(css).toContain(':host[position="bottom"]');
      expect(css).toContain(':host[position="start"]');
      expect(css).toContain(':host[position="end"]');
      expect(css).toContain(':host[position="top-start"]');
      expect(css).toContain(':host[position="top-end"]');
      expect(css).toContain(':host[position="bottom-start"]');
      expect(css).toContain(':host[position="bottom-end"]');
      expect(css).toContain('.container');
      expect(css).toContain('transform: translateY(-100%)');
      expect(css).toContain('transform: translateY(100%)');
      expect(css).toContain('transform: translateX(-100%)');
      expect(css).toContain('transform: translateX(100%)');
      expect(css).toContain('[open]');
      expect(css).toContain(DEFAULT_POSITION_CONFIG.edgeWidth);
      expect(css).toContain(DEFAULT_POSITION_CONFIG.edgeHeight);
    });

    it('generates CSS with custom config', () => {
      const css = generatePositionCSS(':host', '.container', 'position', {
        edgeWidth: '400px',
        edgeHeight: '300px',
        cornerMaxWidth: '500px',
        cornerMaxHeight: '400px',
      });

      expect(css).toContain('400px');
      expect(css).toContain('300px');
      expect(css).toContain('500px');
      expect(css).toContain('400px');
    });

    it('generates CSS with custom attribute name', () => {
      const css = generatePositionCSS(':host', '.container', 'drawer-position');

      expect(css).toContain('[drawer-position="top"]');
      expect(css).toContain('[drawer-position="start"]');
      expect(css).not.toContain('[position="top"]');
    });

    it('includes open state selectors', () => {
      const css = generatePositionCSS(':host', '.container');

      expect(css).toContain(':host[position="top"][open] .container');
      expect(css).toContain(':host[position="bottom"][open] .container');
      expect(css).toContain(':host[position="start"][open] .container');
      expect(css).toContain(':host[position="end"][open] .container');
      expect(css).toContain(':host[position="top-start"][open] .container');
      expect(css).toContain('transform: none');
    });
  });

  describe('DEFAULT_POSITION_CONFIG', () => {
    it('has expected default values', () => {
      expect(DEFAULT_POSITION_CONFIG.edgeWidth).toBe('var(--ag-drawer-width)');
      expect(DEFAULT_POSITION_CONFIG.edgeHeight).toBe('var(--ag-sheet-height)');
      expect(DEFAULT_POSITION_CONFIG.cornerMaxWidth).toBe('90vw');
      expect(DEFAULT_POSITION_CONFIG.cornerMaxHeight).toBe('90vh');
    });
  });
});
