// v2/lib/tests/shared/component-registry.spec.ts
import { render } from 'lit';
import { describe, it, expect } from 'vitest';
import {
  COMPONENT_REGISTRY,
  COMPONENT_NAMES,
  hasComponentTemplate,
} from './component-registry';
import { COMPONENT_REGISTRY as VISUAL_REGISTRY } from '../visual/preview/registry';

describe('shared/component-registry', () => {
  it('exposes all 57 canonical component preview templates', () => {
    expect(COMPONENT_NAMES.length).toBe(57);
    expect(COMPONENT_NAMES).toContain('AspectRatio');
    expect(COMPONENT_NAMES).toContain('Button');
    expect(COMPONENT_NAMES).toContain('Dialog');
    expect(COMPONENT_NAMES).toContain('Kbd');
    expect(COMPONENT_NAMES).toContain('Loader');
    expect(COMPONENT_NAMES).toContain('ScrollToButton');
    expect(COMPONENT_NAMES).toContain('Sidebar');
    expect(COMPONENT_NAMES).toContain('Spinner');
    expect(COMPONENT_NAMES).toContain('Tabs');
    expect(COMPONENT_NAMES).toContain('Toggle');
    expect(COMPONENT_NAMES).toContain('Tooltip');
    expect(COMPONENT_NAMES).toContain('TooltipFx');
  });

  it('re-exports the exact same registry object from tests/visual/preview/registry.ts', () => {
    expect(VISUAL_REGISTRY).toBe(COMPONENT_REGISTRY);
  });

  it('validates known and unknown component names via hasComponentTemplate', () => {
    expect(hasComponentTemplate('AspectRatio')).toBe(true);
    expect(hasComponentTemplate('Button')).toBe(true);
    expect(hasComponentTemplate('Kbd')).toBe(true);
    expect(hasComponentTemplate('Loader')).toBe(true);
    expect(hasComponentTemplate('ScrollToButton')).toBe(true);
    expect(hasComponentTemplate('Sidebar')).toBe(true);
    expect(hasComponentTemplate('Spinner')).toBe(true);
    expect(hasComponentTemplate('Tooltip')).toBe(true);
    expect(hasComponentTemplate('TooltipFx')).toBe(true);
    expect(hasComponentTemplate('SelectionCardGroup')).toBe(true);
    expect(hasComponentTemplate('NonExistentComponent')).toBe(false);
    expect(hasComponentTemplate('toString')).toBe(false);
  });

  it('renders a valid Lit TemplateResult containing AgnosticUI custom elements for every registered component', () => {
    for (const name of COMPONENT_NAMES) {
      const container = document.createElement('div');
      render(COMPONENT_REGISTRY[name](), container);
      const customTags = Array.from(container.querySelectorAll('*'))
        .map((el) => el.tagName.toLowerCase())
        .filter((tag) => tag.startsWith('ag-'));
      expect(customTags.length, `Expected at least one <ag-*> tag for ${name}`).toBeGreaterThan(0);
    }
  });
});
