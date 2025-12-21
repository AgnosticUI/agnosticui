import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { Popover } from './_Popover.js';
import './Popover.js';

// Mock Floating UI to avoid positioning complexity in tests
vi.mock('@floating-ui/dom', async () => {
  const actual = await vi.importActual('@floating-ui/dom');
  return {
    ...actual,
    computePosition: vi.fn().mockResolvedValue({
      x: 100,
      y: 200,
      placement: 'bottom',
      middlewareData: {}
    }),
    autoUpdate: vi.fn().mockReturnValue(() => { })
  };
});

describe('Popover', () => {
  let popover: Popover;
  let trigger: HTMLButtonElement;

  beforeEach(async () => {
    popover = document.createElement('ag-popover') as Popover;
    trigger = document.createElement('button');
    trigger.setAttribute('slot', 'trigger');
    trigger.textContent = 'Open';

    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = 'Content';

    popover.appendChild(trigger);
    popover.appendChild(content);
    document.body.appendChild(popover);
    await popover.updateComplete;
  });

  afterEach(() => {
    popover?.remove();
    vi.clearAllMocks();
  });

  it('should initialize with correct default properties', () => {
    expect(popover.placement).toBe('bottom');
    expect(popover.distance).toBe(8);
    expect(popover.disabled).toBe(false);
    expect(popover.isOpen).toBe(false);
  });

  it('should open via show() method', async () => {
    popover.show();
    await popover.updateComplete;
    expect(popover.isOpen).toBe(true);
  });

  it('should close via hide() method', async () => {
    popover.show();
    await popover.updateComplete;
    popover.hide();
    await popover.updateComplete;
    expect(popover.isOpen).toBe(false);
  });

  it('should toggle via toggle() method', async () => {
    popover.toggle();
    await popover.updateComplete;
    expect(popover.isOpen).toBe(true);

    popover.toggle();
    await popover.updateComplete;
    expect(popover.isOpen).toBe(false);
  });

  it('should open on click', async () => {
    trigger.click();
    await popover.updateComplete;
    expect(popover.isOpen).toBe(true);
  });

  it('should not open when disabled', async () => {
    popover.disabled = true;
    await popover.updateComplete;

    trigger.click();
    await popover.updateComplete;
    expect(popover.isOpen).toBe(false);
  });

  it('should close on Escape key', async () => {
    popover.show();
    await popover.updateComplete;

    popover.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await popover.updateComplete;
    expect(popover.isOpen).toBe(false);
  });

  it('should detect content slot', () => {
    expect(popover.hasContentSlot).toBe(true);
  });
});
