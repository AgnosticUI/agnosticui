// v2/lib/src/components/Rating/core/_Rating.spec.ts
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { AgRating } from './Rating.js';

expect.extend(toHaveNoViolations);

describe('AgRating (core)', () => {
  let instance: AgRating;

  beforeEach(() => {
    instance = new AgRating();
    document.body.appendChild(instance);
    // Mock setPointerCapture for happy-dom
    if (typeof instance.setPointerCapture !== 'function') {
      instance.setPointerCapture = (_pointerId: number) => {};
    }
  });

  afterEach(() => {
    instance.remove();
  });

  it('constructs and has default properties', () => {
    expect(instance.value).toEqual(0);
    expect(instance.max).toEqual(5);
    expect(instance.precision).toEqual('whole');
    expect(instance.allowClear).toEqual(false);
  });

  it('renders correct number of stars', async () => {
    instance.max = 7;
    await instance.updateComplete;
    const stars = instance.shadowRoot!.querySelectorAll('.star');
    expect(stars.length).toEqual(7);
  });

  it('supports half precision and keyboard increments of 0.5', async () => {
    instance.precision = 'half';
    await instance.updateComplete;

    // set initial
    instance.value = 2;
    await instance.updateComplete;

    // simulate ArrowRight key
    const keydown = new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true });
    instance.dispatchEvent(keydown);
    await instance.updateComplete;
    expect(instance.value).toEqual(2.5);

    // ArrowLeft
    instance.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true }));
    await instance.updateComplete;
    expect(instance.value).toEqual(2);
  });

  it('supports allowClear clicking same value clears to 0', async () => {
    instance.allowClear = true;
    instance.precision = 'whole';
    await instance.updateComplete;

    // programmatically click the 3rd star button
    const starBtn = instance.shadowRoot!.querySelector<HTMLElement>('.star-button:nth-of-type(3)');
    expect(starBtn).toBeTruthy();
    // first click sets value
    starBtn!.click();
    await instance.updateComplete;
    expect(instance.value).toEqual(3);

    // second click clears
    starBtn!.click();
    await instance.updateComplete;
    expect(instance.value).toEqual(0);
  });

  it('emits rating-change on value commit', async () => {
    await instance.updateComplete;

    // listen for event
    let resolveEvent: (ev: CustomEvent) => void;
    const eventPromise = new Promise<CustomEvent>((resolve) => {
      resolveEvent = resolve;
    });
    const listener = (ev: Event) => {
      resolveEvent(ev as CustomEvent);
    };
    instance.addEventListener('rating-change', listener);

    // Simulate a click on the 4th star to trigger the change
    const starBtn = instance.shadowRoot!.querySelector<HTMLElement>('.star-button:nth-of-type(4)');
    starBtn!.click();
    const ev = await eventPromise;
    instance.removeEventListener('rating-change', listener);
    expect(ev.detail.oldValue).toEqual(0);
    expect(ev.detail.newValue).toEqual(4);
  });

  it('emits rating-hover phases during pointer interactions', async () => {
    await instance.updateComplete;

    // simulate pointerdown at middle of first star by computing clientX relative to element
    const rect = instance.shadowRoot!.querySelector('.rating')!.getBoundingClientRect();
    // simulate pointerdown event with clientX near left
    const down = new PointerEvent('pointerdown', { clientX: rect.left + rect.width * 0.2, bubbles: true });
    instance.shadowRoot!.querySelector('.rating')!.dispatchEvent(down);
    // assert that _isHovering changed
    expect((instance as any).isHovering).toBe(true);

    // finish
    const up = new PointerEvent('pointerup', { clientX: rect.left + rect.width * 0.2, bubbles: true });
    window.dispatchEvent(up);
    await instance.updateComplete;
    expect((instance as any).isHovering).toBe(false);
  });

  it('provides a fallback star svg when no custom icon provided', async () => {
    await instance.updateComplete;
    const svgPaths = instance.shadowRoot!.querySelectorAll('svg path');
    expect(svgPaths.length).toBeGreaterThan(0);
  });

  it('should have no accessibility violations', async () => {
    await instance.updateComplete;
    const results = await axe(instance);
    expect(results).toHaveNoViolations();
  });
});
