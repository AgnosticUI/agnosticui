import '../../../src/styles/ag-tokens.css';
import '../../../src/styles/ag-tokens-dark.css';
import '../../../src/index.ts';

import { render } from 'lit';
import { COMPONENT_REGISTRY } from './registry';

const root = document.getElementById('preview-root');

async function mountPreview() {
  if (!root) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const component = params.get('component');
  const theme = params.get('theme') || 'light';

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.style.backgroundColor = '#1a1a1a';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.body.style.backgroundColor = '#ffffff';
  }

  // MISSING:  BadgeFx, Breadcrumb, ButtonFx, Collapsible, Combobox, CopyButton, Dialog, Drawer, EmptyState, Fieldset, Flex, Header, IconButtonFx, Image, Loader, Pagination, Rating, ScrollToButton, Select, SelectionButtonGroup, SelectionCardGroup, Sidebar, Slider, Spinner, Table, TagFx, Tooltip, TooltipFx, VisuallyHidden

  if (component === 'Accordion') {
    render(COMPONENT_REGISTRY.Accordion(), root);
  } else if (component === 'Alert') {
    render(COMPONENT_REGISTRY.Alert(), root);
  } else if (component === 'Avatar') {
    render(COMPONENT_REGISTRY.Avatar(), root);
  } else if (component === 'AvatarFx') {
    render(COMPONENT_REGISTRY.AvatarFx(), root);
  } else if (component === 'Button') {
    render(COMPONENT_REGISTRY.Button(), root);
  } else if (component === 'Badge') {
    render(COMPONENT_REGISTRY.Badge(), root);
  } else if (component === 'Card') {
    render(COMPONENT_REGISTRY.Card(), root);
  } else if (component === 'Checkbox') {
    render(COMPONENT_REGISTRY.Checkbox(), root);
  } else if (component === 'Divider') {
    render(COMPONENT_REGISTRY.Divider(), root);
  } else if (component === 'Icon') {
    render(COMPONENT_REGISTRY.Icon(), root);
  } else if (component === 'IconButton') {
    render(COMPONENT_REGISTRY.IconButton(), root);
  } else if (component === 'Input') {
    render(COMPONENT_REGISTRY.Input(), root);
  } else if (component === 'IntlFormatter') {
    render(COMPONENT_REGISTRY.IntlFormatter(), root);
  } else if (component === 'Kbd') {
    render(COMPONENT_REGISTRY.Kbd(), root);
  } else if (component === 'Link') {
    render(COMPONENT_REGISTRY.Link(), root);
  } else if (component === 'Mark') {
    render(COMPONENT_REGISTRY.Mark(), root);
  } else if (component === 'Menu') {
    render(COMPONENT_REGISTRY.Menu(), root);
  } else if (component === 'MessageBubble') {
    render(COMPONENT_REGISTRY.MessageBubble(), root);
  } else if (component === 'Popover') {
    render(COMPONENT_REGISTRY.Popover(), root);
  } else if (component === 'Progress') {
    render(COMPONENT_REGISTRY.Progress(), root);
  } else if (component === 'ProgressRing') {
    render(COMPONENT_REGISTRY.ProgressRing(), root);
  } else if (component === 'Radio') {
    render(COMPONENT_REGISTRY.Radio(), root);
  } else if (component === 'ScrollProgress') {
    render(COMPONENT_REGISTRY.ScrollProgress(), root);
  } else if (component === 'SkeletonLoader') {
    render(COMPONENT_REGISTRY.SkeletonLoader(), root);
  } else if (component === 'Tag') {
    render(COMPONENT_REGISTRY.Tag(), root);
  } else if (component === 'Tabs') {
    render(COMPONENT_REGISTRY.Tabs(), root);
  } else if (component === 'Timeline') {
    render(COMPONENT_REGISTRY.Timeline(), root);
  } else if (component === 'Toast') {
    render(COMPONENT_REGISTRY.Toast(), root);
  } else if (component === 'Toggle') {
    render(COMPONENT_REGISTRY.Toggle(), root);
  }

  const customElements = root.querySelectorAll('ag-accordion, ag-alert, ag-avatar, ag-avatar-fx, ag-button, ag-badge, ag-card, ag-checkbox, ag-divider, ag-kbd, ag-link, ag-icon, ag-icon-button, ag-input, ag-intl-formatter, ag-mark, ag-menu, ag-message-bubble, ag-popover, ag-progress, ag-progress-ring, ag-radio, ag-scroll-progress, ag-skeleton-loader, ag-tabs, ag-tab, ag-tab-panel, ag-tag, ag-timeline, ag-toast, ag-toggle');
  const updates = Array.from(customElements).map((el) => {
    if ('updateComplete' in el && el.updateComplete instanceof Promise) {
      return el.updateComplete;
    }
    return Promise.resolve();
  });

  await Promise.all(updates);

  if (document.fonts && typeof document.fonts.ready === 'object') {
    await document.fonts.ready;
  }

  requestAnimationFrame(() => {
    window.__visualReady = true;
    window.dispatchEvent(new Event('render-complete'));
  });
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', mountPreview);
} else {
  mountPreview();
}
