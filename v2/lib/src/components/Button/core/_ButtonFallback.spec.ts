/// <reference path="../../../types/css.d.ts" />
import { describe, it, expect } from 'vitest';
import { _ButtonFallback } from './_ButtonFallback';
import styles from './button-structure.module.css';

describe('_ButtonFallback Engine', () => {
  it('should render default fallback layout configurations', () => {
    const html = _ButtonFallback({ slotContent: 'Click Me' });
    expect(html).toContain('<button');
    expect(html).toContain('Click Me');
    expect(html).toContain(styles.baseButton);
    expect(html).toContain('ag-button');
    expect(html).not.toContain(' disabled ');
    expect(html).not.toContain('disabled=""');
  });

  it('should apply variant tokens correctly side-by-side', () => {
    const primaryHtml = _ButtonFallback({ variant: 'primary', slotContent: 'Primary' });
    const dangerHtml = _ButtonFallback({ variant: 'danger', slotContent: 'Danger' });

    expect(primaryHtml).toContain(styles.variantPrimary);
    expect(primaryHtml).toContain('ag-button--primary');
    expect(dangerHtml).toContain(styles.variantDanger);
    expect(dangerHtml).toContain('ag-button--danger');
  });

  it('should apply sizing layout modifier variables correctly', () => {
    const xsmHtml = _ButtonFallback({ size: 'x-sm' });
    const xlHtml = _ButtonFallback({ size: 'xl' });

    expect(xsmHtml).toContain(styles.sizeXSm);
    expect(xsmHtml).toContain('ag-button--x-sm');
    expect(xlHtml).toContain(styles.sizeXl);
    expect(xlHtml).toContain('ag-button--xl');
  });

  it('should process shape options accurately', () => {
    const capsuleHtml = _ButtonFallback({ shape: 'capsule' });
    const circleHtml = _ButtonFallback({ shape: 'circle' });

    expect(capsuleHtml).toContain(styles.shapeCapsule);
    expect(capsuleHtml).toContain('ag-button--capsule');
    expect(circleHtml).toContain(styles.shapeCircle);
    expect(circleHtml).toContain('ag-button--circle');
  });

  it('should append boolean state attributes safely when active', () => {
    const disabledHtml = _ButtonFallback({ disabled: true });
    expect(disabledHtml).toContain('disabled');
    expect(disabledHtml).toContain('aria-disabled="true"');
    expect(disabledHtml).toContain(styles.isDisabled);
    expect(disabledHtml).toContain('ag-button--disabled');
  });

  it('should handle toggle configurations and assign appropriate pressed states', () => {
    const pressedHtml = _ButtonFallback({ toggle: true, pressed: true });
    expect(pressedHtml).toContain('aria-pressed="true"');

    const unpressedHtml = _ButtonFallback({ toggle: true, pressed: false });
    expect(unpressedHtml).toContain('aria-pressed="false"');
  });

  it('should wrap elements cleanly for full-width layout parameters', () => {
    const html = _ButtonFallback({ fullWidth: true, slotContent: 'Full Width' });
    expect(html).toContain(styles.fullWidth);
    expect(html).toContain('ag-button--full-width');
    expect(html).toContain('<div');
  });
});
