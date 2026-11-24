// v2/lib/tests/uirig/harness/query-params.ts
import {
  COMPONENT_NAMES,
  hasComponentTemplate,
  type ComponentName,
} from '../../shared/component-registry';

export type HarnessTheme = 'light' | 'dark';

export interface HarnessParams {
  component: ComponentName | null;
  theme: HarnessTheme;
  error: string | null;
}

export function parseHarnessParams(search: string): HarnessParams {
  const params = new URLSearchParams(search);
  const rawTheme = params.get('theme');
  const theme: HarnessTheme = rawTheme === 'dark' ? 'dark' : 'light';
  const rawComponent = params.get('component')?.trim() ?? '';

  if (!rawComponent) {
    return {
      component: null,
      theme,
      error: `Missing required ?component=<Name> parameter. Available (${COMPONENT_NAMES.length}): ${COMPONENT_NAMES.join(', ')}`,
    };
  }

  if (!hasComponentTemplate(rawComponent)) {
    return {
      component: null,
      theme,
      error: `Unknown component "${rawComponent}". Available (${COMPONENT_NAMES.length}): ${COMPONENT_NAMES.join(', ')}`,
    };
  }

  return {
    component: rawComponent,
    theme,
    error: null,
  };
}
