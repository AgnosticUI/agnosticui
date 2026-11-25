// v2/lib/tests/uirig/token-scale.spec.ts
import { describe, it, expect } from 'vitest';
import {
  buildCombinedTokenCss,
  extractDarkRgbTokens,
  hexToRgbString,
} from './token-scale';

describe('uirig/token-scale', () => {
  it('converts 3-digit and 6-digit hex colors to canonical rgb() strings', () => {
    expect(hexToRgbString('#F0F6FC')).toBe('rgb(240, 246, 252)');
    expect(hexToRgbString('#010409')).toBe('rgb(1, 4, 9)');
    expect(hexToRgbString('#fff')).toBe('rgb(255, 255, 255)');
    expect(hexToRgbString('not-a-hex')).toBeNull();
  });

  it('extracts normalized rgb() values from dark theme CSS tokens', () => {
    const sampleDarkCss = `
      [data-theme="dark"] {
        --ag-text-primary: #F0F6FC;
        --ag-background-primary: #010409;
      }
    `;
    const rgbSet = extractDarkRgbTokens(sampleDarkCss);
    expect(rgbSet.has('rgb(240, 246, 252)')).toBe(true);
    expect(rgbSet.has('rgb(1, 4, 9)')).toBe(true);
  });

  it('combines light and dark CSS token sheets cleanly', () => {
    const result = buildCombinedTokenCss(
      ':root { --ag-bg: #ffffff; }',
      '[data-theme="dark"] { --ag-bg: #010409; }'
    );
    expect(result.combinedCss).toContain('--ag-bg: #ffffff;');
    expect(result.combinedCss).toContain('--ag-bg: #010409;');
    expect(result.darkRgbValues.has('rgb(1, 4, 9)')).toBe(true);
  });
});
