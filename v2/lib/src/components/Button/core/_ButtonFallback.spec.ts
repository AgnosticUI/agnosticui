// v2/lib/src/components/Button/core/_ButtonFallback.spec.ts
import { describe, it, expect } from 'vitest';
import { _ButtonFallback } from './_ButtonFallback';

describe('_ButtonFallback Engine', () => {
  it('should render default fallback layout configurations', () => {
    const html = _ButtonFallback({ slotContent: 'Click Me' });
    expect(html).toContain('<button');
    expect(html).toContain('Click Me');
    expect(html).not.toContain(' disabled ');
    expect(html).not.toContain('disabled=""');
  });

  it('should apply variant tokens correctly', () => {
    const primaryHtml = _ButtonFallback({ variant: 'primary', slotContent: 'Primary' });
    const dangerHtml = _ButtonFallback({ variant: 'danger', slotContent: 'Danger' });

    expect(primaryHtml).toContain('variantPrimary');
    expect(dangerHtml).toContain('variantDanger');
  });

  it('should apply sizing layout modifier variables correctly', () => {
    const xsmHtml = _ButtonFallback({ size: 'x-sm' });
    const xlHtml = _ButtonFallback({ size: 'xl' });

    expect(xsmHtml).toContain('sizeXSm');
    expect(xlHtml).toContain('sizeXl');
  });

  it('should process shape options accurately', () => {
    const capsuleHtml = _ButtonFallback({ shape: 'capsule' });
    const circleHtml = _ButtonFallback({ shape: 'circle' });

    expect(capsuleHtml).toContain('shapeCapsule');
    expect(circleHtml).toContain('shapeCircle');
  });

  it('should append boolean state attributes safely when active', () => {
    const disabledHtml = _ButtonFallback({ disabled: true });
    expect(disabledHtml).toContain('disabled');
    expect(disabledHtml).toContain('aria-disabled="true"');
  });

  it('should handle toggle configurations and assign appropriate pressed states', () => {
    const pressedHtml = _ButtonFallback({ toggle: true, pressed: true });
    expect(pressedHtml).toContain('aria-pressed="true"');

    const unpressedHtml = _ButtonFallback({ toggle: true, pressed: false });
    expect(unpressedHtml).toContain('aria-pressed="false"');
  });

  it('should wrap elements cleanly for full-width layout parameters', () => {
    const html = _ButtonFallback({ fullWidth: true, slotContent: 'Full Width' });
    expect(html).toContain('fullWidth');
    expect(html).toContain('<div');
  });
});
