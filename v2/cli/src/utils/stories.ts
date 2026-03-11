/**
 * Story file generation utilities for `ag storybook`
 *
 * Generates Storybook config files (.storybook/main.ts, .storybook/preview.ts)
 * and per-component story files (.stories.tsx) for React projects.
 */
import type { Framework } from '../types/index.js';

// ---------------------------------------------------------------------------
// Component classification sets
// ---------------------------------------------------------------------------

const TEXT_CHILD_COMPONENTS = new Set([
  'Alert', 'Badge', 'Button', 'Card',
  'Kbd', 'Link', 'Mark', 'MessageBubble', 'Tag',
]);

// Components with non-standard Vue file naming (exported via index.ts)
const VUE_INDEX_EXPORTS: Record<string, string> = {
  Timeline: 'VueTimeline',
};

// Components that have Fx animation props
const FX_COMPONENTS = new Set(['BadgeFx', 'ButtonFx', 'IconButtonFx']);

// Components with an `open` prop that are invisible until triggered
const OPEN_CONTROLLED_COMPONENTS = new Set([
  'Dialog', 'Drawer', 'Toast', 'Collapsible',
]);

// Components that need a sample data array above `meta`
const REQUIRED_ARRAY_COMPONENTS = new Set([
  'Combobox',
]);

// ---------------------------------------------------------------------------
// Storybook config generators
// ---------------------------------------------------------------------------

export function generateStorybookMain(framework: Framework): string {
  let frameworkPkg: string;
  let storybookImportType: string;

  if (framework === 'react') {
    frameworkPkg = '@storybook/react-vite';
    storybookImportType = '@storybook/react-vite';
  } else if (framework === 'vue') {
    frameworkPkg = '@storybook/vue3-vite';
    storybookImportType = '@storybook/vue3-vite';
  } else {
    frameworkPkg = '@storybook/web-components-vite';
    storybookImportType = '@storybook/web-components-vite';
  }

  return `import type { StorybookConfig } from '${storybookImportType}';
import type { InlineConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/components/ag/**/*.mdx',
    '../src/components/ag/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: '${frameworkPkg}',
  async viteFinal(config): Promise<InlineConfig> {
    // Remove noDiscovery so Storybook can pre-bundle its own dependencies.
    // The main app uses noDiscovery for performance, but Storybook needs discovery on.
    if (config.optimizeDeps) {
      config.optimizeDeps.noDiscovery = false;
    }
    return config;
  },
};
export default config;
`;
}

export function generateStorybookPreview(framework: Framework, componentsRelPath: string): string {
  let previewImportPkg: string;

  if (framework === 'react') {
    previewImportPkg = '@storybook/react';
  } else if (framework === 'vue') {
    previewImportPkg = '@storybook/vue3';
  } else {
    previewImportPkg = '@storybook/web-components';
  }

  // componentsRelPath is relative from .storybook/ to src/components/ag
  // The CSS imports in preview.ts are relative to .storybook/
  const cssPath = `${componentsRelPath}/styles`;

  return `import type { Preview } from '${previewImportPkg}';
import '${cssPath}/ag-tokens.css';
import '${cssPath}/ag-tokens-dark.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
`;
}

// ---------------------------------------------------------------------------
// argTypes registry
// ---------------------------------------------------------------------------

const ARGTYPES: Record<string, string> = {
  Alert: `  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'success', 'warning', 'danger', 'info'],
    },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
    borderedLeft: { control: 'boolean' },
    dismissible: { control: 'boolean' },
  },`,
  Avatar: `  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square', 'rounded'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger'],
    },
  },`,
  Badge: `  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'primary', 'info', 'neutral', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    dot: { control: 'boolean' },
    interactive: { control: 'boolean' },
  },`,
  BadgeFx: `  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
    },
    fxDisabled: { control: 'boolean' },
  },`,
  ButtonFx: `  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', 'shake', 'pulse-wobble'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxEase: {
      control: 'select',
      options: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'bounce', 'spring-sm', 'spring-md', 'spring-lg'],
    },
    fxDisabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
  },`,
  Button: `  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['', 'capsule', 'rounded', 'circle', 'square', 'rounded-square'],
    },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },`,
  Combobox: `  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    filterMode: {
      control: 'select',
      options: ['startsWith', 'contains', 'none'],
    },
    disabled: { control: 'boolean' },
    clearable: { control: 'boolean' },
    multiple: { control: 'boolean' },
    loading: { control: 'boolean' },
    invalid: { control: 'boolean' },
    errorMessage: { control: 'text' },
    helpText: { control: 'text' },
  },`,
  Dialog: `  argTypes: {
    open: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    noCloseOnEscape: { control: 'boolean' },
    noCloseOnBackdrop: { control: 'boolean' },
    heading: { control: 'text' },
    description: { control: 'text' },
    drawerPosition: {
      control: 'select',
      options: [undefined, 'start', 'end', 'top', 'bottom'],
    },
  },`,
  Drawer: `  argTypes: {
    open: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    heading: { control: 'text' },
    description: { control: 'text' },
    position: {
      control: 'select',
      options: ['start', 'end', 'top', 'bottom'],
    },
  },`,
  IconButton: `  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
  },`,
  Input: `  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    errorMessage: { control: 'text' },
    helpText: { control: 'text' },
  },`,
  Kbd: `  argTypes: {
    bordered: { control: 'boolean' },
    background: { control: 'boolean' },
  },`,
  Link: `  argTypes: {
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
  },`,
  Progress: `  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },`,
  ProgressRing: `  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info'],
    },
  },`,
  Rating: `  argTypes: {
    value: { control: { type: 'number', min: 0, max: 5 } },
    readonly: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },`,
  Select: `  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
  },`,
  Slider: `  argTypes: {
    min: { control: { type: 'number' } },
    max: { control: { type: 'number' } },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
  },`,
  SkeletonLoader: `  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'avatar', 'button', 'card', 'custom'],
    },
    effect: {
      control: 'select',
      options: ['shimmer', 'pulse', 'none'],
    },
  },`,
  Spinner: `  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },`,
  Tag: `  argTypes: {
    uppercase: { control: 'boolean' },
    removable: { control: 'boolean' },
  },`,
  Timeline: `  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    compact: { control: 'boolean' },
  },`,
  Toast: `  argTypes: {
    open: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger'],
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left', 'top-center', 'bottom-center'],
    },
    autoDismiss: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    bordered: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },`,
  Toggle: `  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'warning', 'danger', 'monochrome'],
    },
    disabled: { control: 'boolean' },
    readonly: { control: 'boolean' },
    invalid: { control: 'boolean' },
  },`,
};

// ---------------------------------------------------------------------------
// Default args registry
// ---------------------------------------------------------------------------

const DEFAULT_ARGS: Record<string, string> = {
  Button: `  args: {
    children: 'Button',
  },`,
  Dialog: `  args: {
    heading: 'Dialog title',
    description: 'Supporting description text goes here.',
    showCloseButton: true,
  },`,
  Drawer: `  args: {
    heading: 'Drawer',
    showCloseButton: true,
  },`,
  Combobox: `  args: {
    options: FRUITS,
    label: 'Fruit',
    placeholder: 'Select a fruit...',
    id: 'combobox-story',
  },`,
  Alert: `  args: {
    children: 'This is an alert message.',
  },`,
  Badge: `  args: {
    children: '5',
  },`,
  BadgeFx: `  args: {
    fx: 'bounce',
    children: 'BadgeFx',
  },`,
  ButtonFx: `  args: {
    fx: 'bounce',
    children: 'Click me',
  },`,
  Card: `  args: {
    children: 'Card content goes here.',
  },`,
  Kbd: `  args: {
    children: 'Ctrl',
  },`,
  Link: `  args: {
    children: 'Link text',
    href: '#',
  },`,
  Mark: `  args: {
    children: 'Highlighted text',
  },`,
  MessageBubble: `  args: {
    children: 'Hello there!',
  },`,
  Tag: `  args: {
    children: 'Tag label',
  },`,
  Toast: `  args: {
    children: <span>Toast notification message</span>,
  },`,
};

// ---------------------------------------------------------------------------
// Extra named stories per component
// ---------------------------------------------------------------------------

function getExtraStories(name: string): string {
  if (name === 'Button') {
    return `
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <ReactButton>Default</ReactButton>
      <ReactButton variant="primary">Primary</ReactButton>
      <ReactButton variant="secondary">Secondary</ReactButton>
      <ReactButton variant="success">Success</ReactButton>
      <ReactButton variant="warning">Warning</ReactButton>
      <ReactButton variant="danger">Danger</ReactButton>
      <ReactButton variant="monochrome">Monochrome</ReactButton>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
      <ReactButton size="x-sm">x-sm</ReactButton>
      <ReactButton size="sm">sm</ReactButton>
      <ReactButton size="md">md</ReactButton>
      <ReactButton size="lg">lg</ReactButton>
      <ReactButton size="xl">xl</ReactButton>
    </div>
  ),
};

export const Bordered: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <ReactButton bordered>Default</ReactButton>
      <ReactButton variant="primary" bordered>Primary</ReactButton>
      <ReactButton variant="success" bordered>Success</ReactButton>
      <ReactButton variant="danger" bordered>Danger</ReactButton>
    </div>
  ),
};

export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
export const Loading: Story = { args: { variant: 'primary', loading: true } };
`;
  }

  if (name === 'Dialog') {
    return `
export const OpenByDefault: Story = {
  args: { open: true },
  render: (args) => <DialogDemo {...args} />,
};

export const DrawerEnd: Story = {
  args: { heading: 'Drawer (end)', drawerPosition: 'end' },
  render: (args) => <DialogDemo {...args} />,
};

export const DrawerStart: Story = {
  args: { heading: 'Drawer (start)', drawerPosition: 'start' },
  render: (args) => <DialogDemo {...args} />,
};
`;
  }

  if (name === 'Combobox') {
    return `
export const WithContainsFilter: Story = {
  args: { filterMode: 'contains', placeholder: 'Type to filter...' },
};

export const Clearable: Story = {
  args: { clearable: true, defaultValue: 'apple' },
};

export const Multiple: Story = {
  args: {
    multiple: true,
    placeholder: 'Select multiple fruits...',
    clearable: true,
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: 'Please select a valid option.',
  },
};

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 'banana' },
};
`;
  }

  return '';
}

// ---------------------------------------------------------------------------
// Per-component story generator (React only)
// ---------------------------------------------------------------------------

export function generateReactStory(name: string): string {
  const lines: string[] = [];

  // Imports
  lines.push(`import type { Meta, StoryObj } from '@storybook/react';`);

  if (OPEN_CONTROLLED_COMPONENTS.has(name) && name !== 'Collapsible') {
    lines.push(`import { useState } from 'react';`);
  }

  if (name === 'Dialog') {
    lines.push(`import { ReactDialog, DialogHeader, DialogFooter } from './ReactDialog';`);
    lines.push(`import { ReactButton } from '../../Button/react/ReactButton';`);
  } else if (name === 'Drawer') {
    lines.push(`import { ReactDrawer } from './ReactDrawer';`);
    lines.push(`import { ReactButton } from '../../Button/react/ReactButton';`);
  } else if (name === 'Toast') {
    lines.push(`import { ReactToast } from './ReactToast';`);
    lines.push(`import { ReactButton } from '../../Button/react/ReactButton';`);
  } else if (REQUIRED_ARRAY_COMPONENTS.has(name)) {
    lines.push(`import { React${name} } from './React${name}';`);
    lines.push(`import type { ComboboxOption } from './React${name}';`);
  } else {
    lines.push(`import { React${name} } from './React${name}';`);
  }

  lines.push('');

  // Sample data for Combobox
  if (name === 'Combobox') {
    lines.push(`const FRUITS: ComboboxOption[] = [`);
    lines.push(`  { value: 'apple', label: 'Apple' },`);
    lines.push(`  { value: 'banana', label: 'Banana' },`);
    lines.push(`  { value: 'cherry', label: 'Cherry' },`);
    lines.push(`  { value: 'grape', label: 'Grape' },`);
    lines.push(`  { value: 'mango', label: 'Mango' },`);
    lines.push(`  { value: 'orange', label: 'Orange' },`);
    lines.push(`];`);
    lines.push('');
  }

  // Meta object
  const argTypes = ARGTYPES[name] ?? '';
  const defaultArgs = DEFAULT_ARGS[name] ?? '';

  const metaParts: string[] = [];
  metaParts.push(`  title: 'AgnosticUI/${name}',`);
  metaParts.push(`  component: React${name},`);
  metaParts.push(`  tags: ['autodocs'],`);
  if (argTypes) {
    metaParts.push(argTypes);
  }
  if (defaultArgs) {
    metaParts.push(defaultArgs);
  }

  lines.push(`const meta = {`);
  lines.push(metaParts.join('\n'));
  lines.push(`} satisfies Meta<typeof React${name}>;`);
  lines.push('');
  lines.push(`export default meta;`);
  lines.push(`type Story = StoryObj<typeof meta>;`);
  lines.push('');

  // Open-controlled component wrappers
  if (name === 'Dialog') {
    lines.push(`// Dialog needs open state - wrap in a controller so the story is interactive.`);
    lines.push(`function DialogDemo(props: React.ComponentProps<typeof ReactDialog>) {`);
    lines.push(`  const [open, setOpen] = useState(props.open ?? false);`);
    lines.push(`  return (`);
    lines.push(`    <>`);
    lines.push(`      <ReactButton variant="primary" onClick={() => setOpen(true)}>`);
    lines.push(`        Open Dialog`);
    lines.push(`      </ReactButton>`);
    lines.push(`      <ReactDialog`);
    lines.push(`        {...props}`);
    lines.push(`        open={open}`);
    lines.push(`        onDialogClose={() => setOpen(false)}`);
    lines.push(`        onDialogCancel={() => setOpen(false)}`);
    lines.push(`      >`);
    lines.push(`        <DialogHeader>`);
    lines.push(`          <p>Dialog body content goes here. You can put any React content inside.</p>`);
    lines.push(`        </DialogHeader>`);
    lines.push(`        <DialogFooter>`);
    lines.push(`          <ReactButton onClick={() => setOpen(false)}>Cancel</ReactButton>`);
    lines.push(`          <ReactButton variant="primary" onClick={() => setOpen(false)}>`);
    lines.push(`            Confirm`);
    lines.push(`          </ReactButton>`);
    lines.push(`        </DialogFooter>`);
    lines.push(`      </ReactDialog>`);
    lines.push(`    </>`);
    lines.push(`  );`);
    lines.push(`}`);
    lines.push('');
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args) => <DialogDemo {...args} />,`);
    lines.push(`};`);
  } else if (name === 'Drawer') {
    lines.push(`// Drawer needs open state - wrap in a controller so the story is interactive.`);
    lines.push(`function DrawerDemo(props: React.ComponentProps<typeof ReactDrawer>) {`);
    lines.push(`  const [open, setOpen] = useState(props.open ?? false);`);
    lines.push(`  return (`);
    lines.push(`    <>`);
    lines.push(`      <ReactButton variant="primary" onClick={() => setOpen(true)}>`);
    lines.push(`        Open Drawer`);
    lines.push(`      </ReactButton>`);
    lines.push(`      <ReactDrawer`);
    lines.push(`        {...props}`);
    lines.push(`        open={open}`);
    lines.push(`        onDrawerClose={() => setOpen(false)}`);
    lines.push(`        onDrawerCancel={() => setOpen(false)}`);
    lines.push(`      >`);
    lines.push(`        <div style={{ padding: '1rem' }}>Drawer content goes here.</div>`);
    lines.push(`      </ReactDrawer>`);
    lines.push(`    </>`);
    lines.push(`  );`);
    lines.push(`}`);
    lines.push('');
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args) => <DrawerDemo {...args} />,`);
    lines.push(`};`);
  } else if (name === 'Toast') {
    lines.push(`// Toast needs open state - wrap in a controller so the story is interactive.`);
    lines.push(`function ToastDemo(props: React.ComponentProps<typeof ReactToast>) {`);
    lines.push(`  const [open, setOpen] = useState(props.open ?? false);`);
    lines.push(`  return (`);
    lines.push(`    <>`);
    lines.push(`      <ReactButton variant="primary" onClick={() => setOpen(true)}>`);
    lines.push(`        Show Toast`);
    lines.push(`      </ReactButton>`);
    lines.push(`      <ReactToast`);
    lines.push(`        {...props}`);
    lines.push(`        open={open}`);
    lines.push(`        onToastClose={() => setOpen(false)}`);
    lines.push(`      >`);
    lines.push(`        <span>Toast notification message</span>`);
    lines.push(`      </ReactToast>`);
    lines.push(`    </>`);
    lines.push(`  );`);
    lines.push(`}`);
    lines.push('');
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args) => <ToastDemo {...args} />,`);
    lines.push(`};`);
  } else if (name === 'Collapsible') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: () => (`);
    lines.push(`    <React${name}>`);
    lines.push(`      <span slot="summary">Toggle details</span>`);
    lines.push(`      <div>Collapsible content goes here.</div>`);
    lines.push(`    </React${name}>`);
    lines.push(`  ),`);
    lines.push(`};`);
  } else if (TEXT_CHILD_COMPONENTS.has(name)) {
    lines.push(`export const Default: Story = {};`);
  } else {
    lines.push(`export const Default: Story = {`);
    lines.push(`  args: {},`);
    lines.push(`};`);
  }

  // Extra stories
  const extras = getExtraStories(name);
  if (extras) {
    lines.push(extras);
  }

  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Vue story overrides — full story content for components needing special handling
// ---------------------------------------------------------------------------

const VUE_STORY_OVERRIDES: Record<string, string> = {
  Breadcrumb: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueBreadcrumb from './VueBreadcrumb.vue';

const ITEMS = [
  { label: 'Home', href: '#', isCurrent: false },
  { label: 'Category', href: '#', isCurrent: false },
  { label: 'Current Page', href: '#', isCurrent: true },
];

const meta = {
  title: 'AgnosticUI/Breadcrumb',
  component: VueBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'slash', 'bullet', 'arrow'],
    },
  },
  args: { items: ITEMS, type: 'default' },
  render: (args: any) => ({
    components: { VueBreadcrumb },
    setup() { return { args }; },
    template: '<VueBreadcrumb v-bind="args" />',
  }),
} satisfies Meta<typeof VueBreadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Slash: Story = { args: { type: 'slash' } };
export const Arrow: Story = { args: { type: 'arrow' } };
`,

  Flex: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueFlexRow from './VueFlexRow.vue';

const meta = {
  title: 'AgnosticUI/Flex',
  component: VueFlexRow,
  tags: ['autodocs'],
  argTypes: {
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    },
  },
  render: (args: any) => ({
    components: { VueFlexRow },
    setup() { return { args }; },
    template: \`
      <VueFlexRow v-bind="args" style="--flex-gap: 1rem">
        <div style="padding:1rem;background:#e0e7ff;border:1px solid #6366f1">Item 1</div>
        <div style="padding:1rem;background:#dbeafe;border:1px solid #3b82f6">Item 2</div>
        <div style="padding:1rem;background:#ddd6fe;border:1px solid #8b5cf6">Item 3</div>
      </VueFlexRow>
    \`,
  }),
} satisfies Meta<typeof VueFlexRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Centered: Story = { args: { justify: 'center' } };
export const SpaceBetween: Story = { args: { justify: 'space-between' } };
`,

  Header: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueHeader from './VueHeader.vue';

const meta = {
  title: 'AgnosticUI/Header',
  component: VueHeader,
  tags: ['autodocs'],
  argTypes: {
    sticky: { control: 'boolean' },
    contentJustify: {
      control: 'select',
      options: ['start', 'end', 'between', 'around', 'center'],
    },
  },
  args: { sticky: false, contentJustify: 'between' },
  render: (args: any) => ({
    components: { VueHeader },
    setup() { return { args }; },
    template: \`
      <VueHeader v-bind="args">
        <template #logo>
          <a href="#" style="text-decoration:none;font-weight:700;font-size:1.25rem">AgnosticUI</a>
        </template>
        <nav>
          <ul style="display:flex;gap:1.5rem;list-style:none;margin:0;padding:0">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    \`,
  }),
} satisfies Meta<typeof VueHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`,

  Icon: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueIcon from './VueIcon.vue';
import { Star } from 'lucide-vue-next';

const meta = {
  title: 'AgnosticUI/Icon',
  component: VueIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['14', '16', '18', '20', '24', '32', '36', '48'],
    },
    type: {
      control: 'select',
      options: ['', 'info', 'action', 'success', 'warning', 'error'],
    },
    noFill: { control: 'boolean' },
  },
  args: { size: '24', type: '' },
  render: (args: any) => ({
    components: { VueIcon, Star },
    setup() { return { args }; },
    template: '<VueIcon v-bind="args" no-fill><Star /></VueIcon>',
  }),
} satisfies Meta<typeof VueIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Types: Story = {
  render: () => ({
    components: { VueIcon, Star },
    template: \`
      <div style="display:flex;gap:1rem;align-items:center">
        <VueIcon no-fill><Star /></VueIcon>
        <VueIcon type="info" no-fill><Star /></VueIcon>
        <VueIcon type="success" no-fill><Star /></VueIcon>
        <VueIcon type="warning" no-fill><Star /></VueIcon>
        <VueIcon type="error" no-fill><Star /></VueIcon>
      </div>
    \`,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { VueIcon, Star },
    template: \`
      <div style="display:flex;gap:1rem;align-items:center">
        <VueIcon size="16" no-fill><Star /></VueIcon>
        <VueIcon size="20" no-fill><Star /></VueIcon>
        <VueIcon size="24" no-fill><Star /></VueIcon>
        <VueIcon size="32" no-fill><Star /></VueIcon>
        <VueIcon size="48" no-fill><Star /></VueIcon>
      </div>
    \`,
  }),
};
`,

  IconButton: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueIconButton from './VueIconButton.vue';

const meta = {
  title: 'AgnosticUI/IconButton',
  component: VueIconButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    label: { control: 'text' },
    unicode: { control: 'text' },
  },
  args: { label: 'Action', unicode: '★', size: 'md', variant: 'primary' },
  render: (args: any) => ({
    components: { VueIconButton },
    setup() { return { args }; },
    template: '<VueIconButton v-bind="args" />',
  }),
} satisfies Meta<typeof VueIconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { VueIconButton },
    template: \`
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <VueIconButton label="Primary" unicode="★" variant="primary" />
        <VueIconButton label="Secondary" unicode="★" variant="secondary" />
        <VueIconButton label="Success" unicode="★" variant="success" />
        <VueIconButton label="Danger" unicode="★" variant="danger" />
        <VueIconButton label="Ghost" unicode="★" variant="ghost" />
      </div>
    \`,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { VueIconButton },
    template: \`
      <div style="display:flex;gap:8px;align-items:center">
        <VueIconButton label="XS" unicode="★" size="xs" variant="primary" />
        <VueIconButton label="SM" unicode="★" size="sm" variant="primary" />
        <VueIconButton label="MD" unicode="★" size="md" variant="primary" />
        <VueIconButton label="LG" unicode="★" size="lg" variant="primary" />
        <VueIconButton label="XL" unicode="★" size="xl" variant="primary" />
      </div>
    \`,
  }),
};
`,

  IconButtonFx: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueIconButtonFx from './VueIconButtonFx.vue';
import { Heart } from 'lucide-vue-next';

const meta = {
  title: 'AgnosticUI/IconButtonFx',
  component: VueIconButtonFx,
  tags: ['autodocs'],
  argTypes: {
    fx: {
      control: 'select',
      options: ['bounce', 'pulse', 'jelly', 'shake', 'pulse-wobble'],
    },
    fxSpeed: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    fxDisabled: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { fx: 'bounce', label: 'Like', size: 'md', variant: 'primary' },
  render: (args: any) => ({
    components: { VueIconButtonFx, Heart },
    setup() { return { args }; },
    template: '<VueIconButtonFx v-bind="args"><Heart /></VueIconButtonFx>',
  }),
} satisfies Meta<typeof VueIconButtonFx>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { VueIconButtonFx, Heart },
    template: \`
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <VueIconButtonFx fx="bounce" label="Primary" variant="primary"><Heart /></VueIconButtonFx>
        <VueIconButtonFx fx="pulse" label="Secondary" variant="secondary"><Heart /></VueIconButtonFx>
        <VueIconButtonFx fx="jelly" label="Ghost" variant="ghost"><Heart /></VueIconButtonFx>
      </div>
    \`,
  }),
};
`,

  Image: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueImage from './VueImage.vue';

const meta = {
  title: 'AgnosticUI/Image',
  component: VueImage,
  tags: ['autodocs'],
  argTypes: {
    fit: {
      control: 'select',
      options: ['cover', 'contain', 'fill', 'none', 'scale-down'],
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
    },
    fade: { control: 'boolean' },
  },
  args: {
    src: 'https://picsum.photos/400/300',
    alt: 'Sample landscape photo',
    width: 400,
    height: 300,
  },
  render: (args: any) => ({
    components: { VueImage },
    setup() { return { args }; },
    template: '<VueImage v-bind="args" />',
  }),
} satisfies Meta<typeof VueImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const WithFade: Story = { args: { fade: true } };
export const ContainFit: Story = {
  args: {
    src: 'https://picsum.photos/400/300?grayscale',
    alt: 'Contained image',
    fit: 'contain',
    aspectRatio: '16/9',
  },
};
`,

  IntlFormatter: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueIntlFormatter from './VueIntlFormatter.vue';

const meta = {
  title: 'AgnosticUI/IntlFormatter',
  component: VueIntlFormatter,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['date', 'number', 'percent', 'currency'],
    },
    lang: { control: 'text' },
  },
  args: { type: 'number', value: 1234567.89, lang: 'en-US' },
  render: (args: any) => ({
    components: { VueIntlFormatter },
    setup() { return { args }; },
    template: '<VueIntlFormatter v-bind="args" />',
  }),
} satisfies Meta<typeof VueIntlFormatter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Currency: Story = {
  args: { type: 'currency', value: 9999.99, currency: 'USD', lang: 'en-US' },
};
export const Date: Story = {
  args: { type: 'date', date: '2024-06-15', dateStyle: 'long', lang: 'en-US' },
};
export const Percent: Story = {
  args: { type: 'percent', value: 0.754, lang: 'en-US' },
};
`,

  Menu: `import type { Meta, StoryObj } from '@storybook/vue3';
import { VueMenu, VueMenuItem, VueMenuSeparator } from './index';

const meta = {
  title: 'AgnosticUI/Menu',
  component: VueMenu,
  tags: ['autodocs'],
  argTypes: {
    buttonVariant: {
      control: 'select',
      options: ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'monochrome'],
    },
    size: {
      control: 'select',
      options: ['x-sm', 'sm', 'md', 'lg', 'xl'],
    },
    disabled: { control: 'boolean' },
  },
  args: { size: 'md' },
  render: (args: any) => ({
    components: { VueMenu, VueMenuItem, VueMenuSeparator },
    setup() { return { args }; },
    template: \`
      <VueMenu v-bind="args">
        <template #menu>
          <VueMenuItem value="edit">Edit</VueMenuItem>
          <VueMenuItem value="duplicate">Duplicate</VueMenuItem>
          <VueMenuSeparator />
          <VueMenuItem value="delete">Delete</VueMenuItem>
        </template>
      </VueMenu>
    \`,
  }),
} satisfies Meta<typeof VueMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
`,

  Popover: `import type { Meta, StoryObj } from '@storybook/vue3';
import VuePopover from './VuePopover.vue';

const meta = {
  title: 'AgnosticUI/Popover',
  component: VuePopover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'right', 'bottom', 'bottom-start', 'bottom-end', 'left'],
    },
    triggerType: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
    arrow: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { placement: 'bottom', arrow: true, triggerType: 'click', showCloseButton: true },
  render: (args: any) => ({
    components: { VuePopover },
    setup() { return { args }; },
    template: \`
      <VuePopover v-bind="args">
        <button slot="trigger">Open Popover</button>
        <span slot="title">Popover Title</span>
        <div slot="content">
          <p>Popover content goes here.</p>
        </div>
      </VuePopover>
    \`,
  }),
} satisfies Meta<typeof VuePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HoverTrigger: Story = {
  args: { triggerType: 'hover' },
  render: (args: any) => ({
    components: { VuePopover },
    setup() { return { args }; },
    template: \`
      <VuePopover v-bind="args">
        <button slot="trigger">Hover Me</button>
        <span slot="title">Hover Popover</span>
        <div slot="content"><p>Opens on hover.</p></div>
      </VuePopover>
    \`,
  }),
};
`,

  Sidebar: `import type { Meta, StoryObj } from '@storybook/vue3';
import { onMounted } from 'vue';
import VueSidebar from './VueSidebar.vue';
import { VueSidebarNav, VueSidebarNavItem, VueSidebarNavSubmenu } from '../../SidebarNav/vue/index';
import VuePopover from '../../Popover/vue/VuePopover.vue';
import { VueSidebarNavPopoverSubmenu } from '../../SidebarNav/vue/index';

const NAV_STYLES = \`
  .ag-nav-btn {
    display: flex; align-items: center; gap: var(--ag-space-3);
    width: 100%; background: none; border: none; padding: 0.5rem 1rem;
    cursor: pointer; color: inherit; font-size: inherit;
    border-radius: var(--ag-border-radius-sm);
    text-align: left; position: relative;
  }
  .ag-nav-btn:hover { background: var(--ag-background-secondary); }
  .ag-nav-btn .ag-nav-label { flex-grow: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .ag-nav-btn .ag-nav-chevron { margin-left: auto; transition: transform 200ms; }
  .ag-nav-btn[aria-expanded="true"] .ag-nav-chevron { transform: rotate(90deg); }
  ag-sidebar[collapsed] .ag-nav-btn .ag-nav-label,
  ag-sidebar[collapsed] .ag-nav-btn .ag-nav-chevron { opacity: 0; pointer-events: none; display: none; }
  ag-sidebar[collapsed] .ag-nav-btn { padding-inline: var(--ag-space-2); justify-content: center; }
  ag-sidebar:not([collapsed]) .ag-popover-submenu-trigger,
  ag-sidebar[collapsed] .ag-inline-submenu { display: none !important; }
\`;

const meta = {
  title: 'AgnosticUI/Sidebar',
  component: VueSidebar,
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    collapsed: { control: 'boolean' },
    position: { control: 'select', options: ['left', 'right'] },
    variant: { control: 'select', options: ['default', 'bordered', 'elevated'] },
    showMobileToggle: { control: 'boolean' },
  },
  args: { open: false, collapsed: false, position: 'left', variant: 'default', showMobileToggle: true },
} satisfies Meta<typeof VueSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: { VueSidebar, VueSidebarNav, VueSidebarNavItem, VueSidebarNavSubmenu, VueSidebarNavPopoverSubmenu, VuePopover },
    setup() {
      onMounted(() => {
        const id = 'ag-sidebar-story-styles';
        if (!document.getElementById(id)) {
          const el = document.createElement('style');
          el.id = id;
          el.textContent = NAV_STYLES;
          document.head.appendChild(el);
        }
      });
      const toggle = (e: Event) => {
        const btn = e.currentTarget as HTMLElement;
        const item = btn.closest('ag-sidebar-nav-item');
        const sub = item?.querySelector('ag-sidebar-nav-submenu') as any;
        if (!sub) return;
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        if (open) sub.removeAttribute('open'); else sub.setAttribute('open', '');
      };
      return { args, toggle };
    },
    template: \`
      <div style="display:flex;height:420px;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:hidden">
        <VueSidebar v-bind="args" @update:open="args.onToggle" @update:collapsed="args.onCollapse">
          <h2 slot="ag-header-start" style="margin:0;font-size:1.125rem;font-weight:600;padding:0 1rem">Dashboard</h2>
          <VueSidebarNav>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn" aria-current="page">
                <span>🏠</span><span class="ag-nav-label">Home</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn ag-inline-submenu" aria-expanded="false" @click="toggle">
                <span>📁</span><span class="ag-nav-label">Projects</span>
                <span class="ag-nav-chevron">›</span>
              </button>
              <VuePopover class="ag-popover-submenu-trigger" placement="right-start" trigger-type="click" :distance="8">
                <button slot="trigger" type="button" class="ag-nav-btn"><span>📁</span></button>
                <VueSidebarNavPopoverSubmenu slot="content">
                  <a href="#">Alpha</a><a href="#">Beta</a>
                </VueSidebarNavPopoverSubmenu>
              </VuePopover>
              <VueSidebarNavSubmenu class="ag-inline-submenu">
                <a href="#" style="display:block;padding:0.375rem 1rem 0.375rem 2.5rem">Alpha</a>
                <a href="#" style="display:block;padding:0.375rem 1rem 0.375rem 2.5rem">Beta</a>
              </VueSidebarNavSubmenu>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn">
                <span>👤</span><span class="ag-nav-label">Profile</span>
              </button>
            </VueSidebarNavItem>
            <VueSidebarNavItem>
              <button type="button" class="ag-nav-btn">
                <span>⚙️</span><span class="ag-nav-label">Settings</span>
              </button>
            </VueSidebarNavItem>
          </VueSidebarNav>
        </VueSidebar>
        <main style="flex:1;padding:1.5rem;overflow:auto">
          <h1 style="margin:0 0 1rem">Main content</h1>
          <p>The sidebar is to the left. Use the toggle button to collapse it to rail mode on desktop.</p>
        </main>
      </div>
    \`,
  }),
};
`,

  Accordion: `import type { Meta, StoryObj } from '@storybook/vue3';
import { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent } from './index';

const meta = {
  title: 'AgnosticUI/Accordion',
  component: VueAccordionItem,
  tags: ['autodocs'],
  argTypes: {
    useChevron: { control: 'boolean' },
    useX: { control: 'boolean' },
    useMinus: { control: 'boolean' },
    noIndicator: { control: 'boolean' },
    bordered: { control: 'boolean' },
    background: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { useChevron: true },
  render: (args: any) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() { return { args }; },
    template: \`
      <VueAccordion>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>What is AgnosticUI?</VueAccordionHeader>
          <VueAccordionContent>
            AgnosticUI is a framework-agnostic UI component library that works with React, Vue, and Lit.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>How do I install it?</VueAccordionHeader>
          <VueAccordionContent>
            Run <code>npx agnosticui-cli init</code> to set up your project, then use <code>npx agnosticui-cli add Button</code> to add components.
          </VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Is it accessible?</VueAccordionHeader>
          <VueAccordionContent>
            Yes — all components are built with accessibility in mind, following WAI-ARIA patterns.
          </VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    \`,
  }),
} satisfies Meta<typeof VueAccordionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const OpenByDefault: Story = {
  render: (args: any) => ({
    components: { VueAccordion, VueAccordionItem, VueAccordionHeader, VueAccordionContent },
    setup() { return { args }; },
    template: \`
      <VueAccordion>
        <VueAccordionItem v-bind="args" :open="true">
          <VueAccordionHeader>Open by default</VueAccordionHeader>
          <VueAccordionContent>This item starts open.</VueAccordionContent>
        </VueAccordionItem>
        <VueAccordionItem v-bind="args">
          <VueAccordionHeader>Closed by default</VueAccordionHeader>
          <VueAccordionContent>Click to expand.</VueAccordionContent>
        </VueAccordionItem>
      </VueAccordion>
    \`,
  }),
};
export const Bordered: Story = { args: { bordered: true } };
export const PlusMinusIndicator: Story = { args: { useMinus: true, useChevron: false } };
`,

  Fieldset: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueFieldset from './VueFieldset.vue';
import VueInput from '../../Input/vue/VueInput.vue';
import VueCheckbox from '../../Checkbox/vue/VueCheckbox.vue';

const meta = {
  title: 'AgnosticUI/Fieldset',
  component: VueFieldset,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    layout: { control: 'select', options: ['vertical', 'horizontal'] },
    legendHidden: { control: 'boolean' },
    legend: { control: 'text' },
  },
  args: { legend: 'Personal Information', bordered: false, layout: 'vertical' },
  render: (args: any) => ({
    components: { VueFieldset, VueInput },
    setup() { return { args }; },
    template: \`
      <VueFieldset v-bind="args">
        <VueInput label="First Name" type="text" />
        <VueInput label="Last Name" type="text" />
        <VueInput label="Email" type="email" />
      </VueFieldset>
    \`,
  }),
} satisfies Meta<typeof VueFieldset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Bordered: Story = { args: { legend: 'Contact Preferences', bordered: true } };
export const Horizontal: Story = { args: { legend: 'Options', layout: 'horizontal' } };
`,

  Progress: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueProgress from './VueProgress.vue';

const meta = {
  title: 'AgnosticUI/Progress',
  component: VueProgress,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'number', min: 0, max: 100 } },
    max: { control: { type: 'number' } },
    label: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: { value: 60, max: 100, label: 'Loading progress' },
  render: (args: any) => ({
    components: { VueProgress },
    setup() { return { args }; },
    template: '<VueProgress v-bind="args" />',
  }),
} satisfies Meta<typeof VueProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const HalfComplete: Story = { args: { value: 50, label: '50% complete' } };
export const NearlyDone: Story = { args: { value: 85, label: 'Almost there' } };
export const Indeterminate: Story = { args: { value: undefined, label: 'Loading...' } };
`,

  ProgressRing: `import type { Meta, StoryObj } from '@storybook/vue3';
import VueProgressRing from './VueProgressRing.vue';

const meta = {
  title: 'AgnosticUI/ProgressRing',
  component: VueProgressRing,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    variant: { control: 'select', options: ['primary', 'success', 'warning', 'danger', 'info'] },
    label: { control: 'text' },
  },
  args: { value: 65, size: 'medium', variant: 'primary', label: 'Progress' },
  render: (args: any) => ({
    components: { VueProgressRing },
    setup() { return { args }; },
    template: '<VueProgressRing v-bind="args" />',
  }),
} satisfies Meta<typeof VueProgressRing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Variants: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: \`
      <div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
        <VueProgressRing :value="65" variant="primary" label="Primary" />
        <VueProgressRing :value="80" variant="success" label="Success" />
        <VueProgressRing :value="45" variant="warning" label="Warning" />
        <VueProgressRing :value="30" variant="danger" label="Danger" />
        <VueProgressRing :value="55" variant="info" label="Info" />
      </div>
    \`,
  }),
};
export const Sizes: Story = {
  render: () => ({
    components: { VueProgressRing },
    template: \`
      <div style="display:flex;gap:1.5rem;align-items:center;flex-wrap:wrap">
        <VueProgressRing :value="65" size="small" label="Small" />
        <VueProgressRing :value="65" size="medium" label="Medium" />
        <VueProgressRing :value="65" size="large" label="Large" />
      </div>
    \`,
  }),
};
`,

  Tabs: `import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTabs, VueTab, VueTabPanel } from './index';

const meta = {
  title: 'AgnosticUI/Tabs',
  component: VueTabs,
  tags: ['autodocs'],
  argTypes: {
    activation: {
      control: 'select',
      options: ['manual', 'automatic'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
  args: { activation: 'manual', ariaLabel: 'Example tabs' },
  render: (args: any) => ({
    components: { VueTabs, VueTab, VueTabPanel },
    setup() { return { args }; },
    template: \`
      <VueTabs v-bind="args">
        <VueTab panel="panel-1">Tab 1</VueTab>
        <VueTab panel="panel-2">Tab 2</VueTab>
        <VueTab panel="panel-3">Tab 3</VueTab>
        <VueTabPanel panel="panel-1">Content for Tab 1</VueTabPanel>
        <VueTabPanel panel="panel-2">Content for Tab 2</VueTabPanel>
        <VueTabPanel panel="panel-3">Content for Tab 3</VueTabPanel>
      </VueTabs>
    \`,
  }),
} satisfies Meta<typeof VueTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical', ariaLabel: 'Vertical tabs' } };
`,

  Timeline: `import type { Meta, StoryObj } from '@storybook/vue3';
import { VueTimeline, VueTimelineItem } from './index';

const meta = {
  title: 'AgnosticUI/Timeline',
  component: VueTimeline,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
    variant: {
      control: 'select',
      options: ['', 'primary', 'success', 'warning', 'danger', 'monochrome'],
    },
    compact: { control: 'boolean' },
  },
  args: { orientation: 'horizontal', variant: '' },
  render: (args: any) => ({
    components: { VueTimeline, VueTimelineItem },
    setup() { return { args }; },
    template: \`
      <VueTimeline v-bind="args">
        <VueTimelineItem>
          <template #ag-start>Jan 2024</template>
          <template #ag-end>Project kickoff</template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>Mar 2024</template>
          <template #ag-end>Design phase</template>
        </VueTimelineItem>
        <VueTimelineItem>
          <template #ag-start>Jun 2024</template>
          <template #ag-end>Development complete</template>
        </VueTimelineItem>
      </VueTimeline>
    \`,
  }),
} satisfies Meta<typeof VueTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Vertical: Story = { args: { orientation: 'vertical' } };
export const Primary: Story = { args: { variant: 'primary' } };
`,
};

// ---------------------------------------------------------------------------
// Vue story generator
// ---------------------------------------------------------------------------

export function generateVueStory(name: string): string {
  // Return full override if one exists for this component
  if (VUE_STORY_OVERRIDES[name]) {
    return VUE_STORY_OVERRIDES[name];
  }

  // Flex override: Vue component is VueFlexRow in VueFlexRow.vue
  const vueComponentName = name === 'Flex' ? 'VueFlexRow' : `Vue${name}`;
  const vueFileName = name === 'Flex' ? 'VueFlexRow' : `Vue${name}`;

  const lines: string[] = [];

  // Imports
  lines.push(`import type { Meta, StoryObj } from '@storybook/vue3';`);

  if (OPEN_CONTROLLED_COMPONENTS.has(name)) {
    lines.push(`import { ref } from 'vue';`);
  }

  if (name === 'Dialog') {
    lines.push(`import Vue${name} from './Vue${name}.vue';`);
    lines.push(`import VueButton from '../../Button/vue/VueButton.vue';`);
  } else if (name === 'Drawer') {
    lines.push(`import Vue${name} from './Vue${name}.vue';`);
    lines.push(`import VueButton from '../../Button/vue/VueButton.vue';`);
  } else if (name === 'Toast') {
    lines.push(`import Vue${name} from './Vue${name}.vue';`);
    lines.push(`import VueButton from '../../Button/vue/VueButton.vue';`);
  } else if (name === 'Collapsible') {
    lines.push(`import Vue${name} from './Vue${name}.vue';`);
  } else if (REQUIRED_ARRAY_COMPONENTS.has(name)) {
    lines.push(`import ${vueComponentName} from './${vueFileName}.vue';`);
    lines.push(`import type { ComboboxOption } from '../core/${name}';`);
  } else if (VUE_INDEX_EXPORTS[name]) {
    // Component uses non-standard file name — import via named export from index
    lines.push(`import { ${VUE_INDEX_EXPORTS[name]} } from './index';`);
  } else {
    lines.push(`import ${vueComponentName} from './${vueFileName}.vue';`);
  }

  lines.push('');

  // Sample data for Combobox
  if (name === 'Combobox') {
    lines.push(`const FRUITS: ComboboxOption[] = [`);
    lines.push(`  { value: 'apple', label: 'Apple' },`);
    lines.push(`  { value: 'banana', label: 'Banana' },`);
    lines.push(`  { value: 'cherry', label: 'Cherry' },`);
    lines.push(`  { value: 'grape', label: 'Grape' },`);
    lines.push(`  { value: 'mango', label: 'Mango' },`);
    lines.push(`  { value: 'orange', label: 'Orange' },`);
    lines.push(`];`);
    lines.push('');
  }

  const argTypes = ARGTYPES[name] ?? '';

  // Build meta args for Vue
  let metaArgs = '';
  if (name === 'Dialog') {
    metaArgs = `  args: {
    heading: 'Dialog title',
    description: 'Supporting description text goes here.',
    showCloseButton: true,
  },`;
  } else if (name === 'Drawer') {
    metaArgs = `  args: {
    heading: 'Drawer',
    showCloseButton: true,
  },`;
  } else if (name === 'Combobox') {
    metaArgs = `  args: {
    options: FRUITS,
    label: 'Select a fruit',
    placeholder: 'Choose...',
    id: 'combobox-default',
  },`;
  } else if (FX_COMPONENTS.has(name)) {
    const defaultLabel = name === 'BadgeFx' ? 'BadgeFx' : name === 'ButtonFx' ? 'Click me' : name;
    metaArgs = `  args: {
    fx: 'bounce',
    default: '${defaultLabel}',
  },`;
  } else if (TEXT_CHILD_COMPONENTS.has(name)) {
    // Use args.default for slot text
    metaArgs = `  args: {
    default: '${name}',
  },`;
  }

  // Build render for meta (only for non-open-controlled, non-collapsible)
  let metaRender = '';
  if (!OPEN_CONTROLLED_COMPONENTS.has(name)) {
    if (TEXT_CHILD_COMPONENTS.has(name) || FX_COMPONENTS.has(name)) {
      metaRender = `  render: (args: any) => ({
    components: { ${vueComponentName} },
    setup() { return { args }; },
    template: '<${vueComponentName} v-bind="args">{{ args.default }}</${vueComponentName}>',
  }),`;
    } else {
      metaRender = `  render: (args: any) => ({
    components: { ${vueComponentName} },
    setup() { return { args }; },
    template: '<${vueComponentName} v-bind="args" />',
  }),`;
    }
  }

  const metaParts: string[] = [];
  metaParts.push(`  title: 'AgnosticUI/${name}',`);
  metaParts.push(`  component: ${vueComponentName},`);
  metaParts.push(`  tags: ['autodocs'],`);
  if (argTypes) {
    metaParts.push(argTypes);
  }
  if (metaArgs) {
    metaParts.push(metaArgs);
  }
  if (metaRender) {
    metaParts.push(metaRender);
  }

  lines.push(`const meta = {`);
  lines.push(metaParts.join('\n'));
  lines.push(`} satisfies Meta<typeof ${vueComponentName}>;`);
  lines.push('');
  lines.push(`export default meta;`);
  lines.push(`type Story = StoryObj<typeof meta>;`);
  lines.push('');

  // Default story
  if (name === 'Dialog') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args: any) => ({`);
    lines.push(`    components: { VueDialog, VueButton },`);
    lines.push(`    setup() {`);
    lines.push(`      const open = ref(false);`);
    lines.push(`      return { args, open };`);
    lines.push(`    },`);
    lines.push(`    template: \``);
    lines.push(`      <div>`);
    lines.push(`        <VueButton variant="primary" @click="open = true">Open Dialog</VueButton>`);
    lines.push(`        <VueDialog v-bind="args" v-model:open="open">`);
    lines.push(`          <p>Dialog content goes here.</p>`);
    lines.push(`        </VueDialog>`);
    lines.push(`      </div>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
  } else if (name === 'Drawer') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args: any) => ({`);
    lines.push(`    components: { VueDrawer, VueButton },`);
    lines.push(`    setup() {`);
    lines.push(`      const open = ref(false);`);
    lines.push(`      return { args, open };`);
    lines.push(`    },`);
    lines.push(`    template: \``);
    lines.push(`      <div>`);
    lines.push(`        <VueButton variant="primary" @click="open = true">Open Drawer</VueButton>`);
    lines.push(`        <VueDrawer v-bind="args" v-model:open="open">`);
    lines.push(`          <div style="padding: 1rem">Drawer content goes here.</div>`);
    lines.push(`        </VueDrawer>`);
    lines.push(`      </div>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
  } else if (name === 'Toast') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args: any) => ({`);
    lines.push(`    components: { VueToast, VueButton },`);
    lines.push(`    setup() {`);
    lines.push(`      const open = ref(false);`);
    lines.push(`      return { args, open };`);
    lines.push(`    },`);
    lines.push(`    template: \``);
    lines.push(`      <div>`);
    lines.push(`        <VueButton variant="primary" @click="open = true">Show Toast</VueButton>`);
    lines.push(`        <VueToast v-bind="args" v-model:open="open">`);
    lines.push(`          <span>Toast notification message</span>`);
    lines.push(`        </VueToast>`);
    lines.push(`      </div>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
  } else if (name === 'Collapsible') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: () => ({`);
    lines.push(`    components: { VueCollapsible },`);
    lines.push(`    template: \``);
    lines.push(`      <VueCollapsible>`);
    lines.push(`        <template #summary>Toggle details</template>`);
    lines.push(`        <div>Collapsible content goes here.</div>`);
    lines.push(`      </VueCollapsible>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
  } else if (name === 'Button') {
    lines.push(`export const Default: Story = {};`);
    lines.push('');
    lines.push(`export const Variants: Story = {`);
    lines.push(`  render: () => ({`);
    lines.push(`    components: { VueButton },`);
    lines.push(`    template: \``);
    lines.push(`      <div style="display:flex;gap:8px;flex-wrap:wrap">`);
    lines.push(`        <VueButton>Default</VueButton>`);
    lines.push(`        <VueButton variant="primary">Primary</VueButton>`);
    lines.push(`        <VueButton variant="secondary">Secondary</VueButton>`);
    lines.push(`        <VueButton variant="success">Success</VueButton>`);
    lines.push(`        <VueButton variant="warning">Warning</VueButton>`);
    lines.push(`        <VueButton variant="danger">Danger</VueButton>`);
    lines.push(`        <VueButton variant="monochrome">Monochrome</VueButton>`);
    lines.push(`      </div>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
    lines.push('');
    lines.push(`export const Sizes: Story = {`);
    lines.push(`  render: () => ({`);
    lines.push(`    components: { VueButton },`);
    lines.push(`    template: \``);
    lines.push(`      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">`);
    lines.push(`        <VueButton size="x-sm">x-sm</VueButton>`);
    lines.push(`        <VueButton size="sm">sm</VueButton>`);
    lines.push(`        <VueButton size="md">md</VueButton>`);
    lines.push(`        <VueButton size="lg">lg</VueButton>`);
    lines.push(`        <VueButton size="xl">xl</VueButton>`);
    lines.push(`      </div>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
    lines.push('');
    lines.push(`export const Bordered: Story = {`);
    lines.push(`  render: () => ({`);
    lines.push(`    components: { VueButton },`);
    lines.push(`    template: \``);
    lines.push(`      <div style="display:flex;gap:8px;flex-wrap:wrap">`);
    lines.push(`        <VueButton bordered>Default</VueButton>`);
    lines.push(`        <VueButton variant="primary" bordered>Primary</VueButton>`);
    lines.push(`        <VueButton variant="success" bordered>Success</VueButton>`);
    lines.push(`        <VueButton variant="danger" bordered>Danger</VueButton>`);
    lines.push(`      </div>`);
    lines.push(`    \`,`);
    lines.push(`  }),`);
    lines.push(`};`);
    lines.push('');
    lines.push(`export const Disabled: Story = { args: { variant: 'primary', disabled: true } };`);
    lines.push(`export const Loading: Story = { args: { variant: 'primary', loading: true } };`);
  } else {
    lines.push(`export const Default: Story = {};`);
  }

  return lines.join('\n') + '\n';
}

// ---------------------------------------------------------------------------
// Lit (web-components) story generator
// ---------------------------------------------------------------------------

function toKebabCase(str: string): string {
  return str.replace(/([A-Z])/g, (m, p1, offset) => (offset > 0 ? '-' : '') + p1.toLowerCase());
}

function getAgTagName(name: string): string {
  // Special overrides
  if (name === 'Flex') return 'ag-flex-row';
  return `ag-${toKebabCase(name)}`;
}

export function generateLitStory(name: string): string {
  const tag = getAgTagName(name);
  // For import path, the side-effect import uses the PascalCase name
  // e.g. import './Button' or import './SkeletonLoader'
  const lines: string[] = [];

  // Imports
  lines.push(`import type { Meta, StoryObj } from '@storybook/web-components';`);
  lines.push(`import { html } from 'lit';`);

  // Side-effect import to register custom element
  if (OPEN_CONTROLLED_COMPONENTS.has(name) && name !== 'Collapsible') {
    lines.push(`import './${name}';`);
    lines.push(`import '../../Button/core/Button';`);
  } else {
    lines.push(`import './${name}';`);
  }

  lines.push('');

  // Sample data for Combobox
  if (name === 'Combobox') {
    lines.push(`const FRUITS = [`);
    lines.push(`  { value: 'apple', label: 'Apple' },`);
    lines.push(`  { value: 'banana', label: 'Banana' },`);
    lines.push(`  { value: 'cherry', label: 'Cherry' },`);
    lines.push(`  { value: 'grape', label: 'Grape' },`);
    lines.push(`  { value: 'mango', label: 'Mango' },`);
    lines.push(`  { value: 'orange', label: 'Orange' },`);
    lines.push(`];`);
    lines.push('');
  }

  const argTypes = ARGTYPES[name] ?? '';

  // Build default args for Lit
  let litArgs = '';
  if (name === 'Button') {
    litArgs = `  args: {
    variant: '',
    size: 'md',
    shape: '',
    bordered: false,
    ghost: false,
    disabled: false,
    loading: false,
    label: 'Button',
  },`;
  } else if (name === 'Dialog') {
    litArgs = `  args: {
    open: false,
    heading: 'Dialog title',
    description: 'Supporting description text goes here.',
    showCloseButton: true,
  },`;
  } else if (name === 'Drawer') {
    litArgs = `  args: {
    open: false,
    heading: 'Drawer',
    showCloseButton: true,
  },`;
  } else if (name === 'Toast') {
    litArgs = `  args: {
    open: false,
    type: 'info',
    position: 'top-right',
    showCloseButton: true,
  },`;
  } else if (name === 'Combobox') {
    litArgs = `  args: {
    options: FRUITS,
    label: 'Select a fruit',
    placeholder: 'Choose...',
  },`;
  } else if (FX_COMPONENTS.has(name)) {
    const defaultLabel = name === 'BadgeFx' ? 'BadgeFx' : name === 'ButtonFx' ? 'Click me' : name;
    litArgs = `  args: {
    fx: 'bounce',
    label: '${defaultLabel}',
  },`;
  } else if (TEXT_CHILD_COMPONENTS.has(name)) {
    litArgs = `  args: {
    label: '${name}',
  },`;
  }

  // Build render for meta level (only simple/text-child components, not open-controlled)
  let litRender = '';
  if (!OPEN_CONTROLLED_COMPONENTS.has(name) && name !== 'Button' && name !== 'Combobox') {
    if (TEXT_CHILD_COMPONENTS.has(name)) {
      litRender = `  render: (args: any) => html\`<${tag}>\${args.label}</${tag}>\`,`;
    } else if (FX_COMPONENTS.has(name)) {
      litRender = `  render: (args: any) => html\`<${tag} fx=\${args.fx}>\${args.label}</${tag}>\`,`;
    } else {
      litRender = `  render: (args: any) => html\`<${tag}></${tag}>\`,`;
    }
  } else if (name === 'Combobox') {
    litRender = `  render: (args: any) => html\`
    <${tag}
      .options=\${args.options}
      label=\${args.label}
      placeholder=\${args.placeholder}
      ?clearable=\${args.clearable}
      ?disabled=\${args.disabled}
      ?multiple=\${args.multiple}
      ?invalid=\${args.invalid}
    ></${tag}>
  \`,`;
  } else if (name === 'Button') {
    litRender = `  render: (args: any) => html\`
    <ag-button
      variant=\${args.variant}
      size=\${args.size}
      shape=\${args.shape}
      ?bordered=\${args.bordered}
      ?ghost=\${args.ghost}
      ?disabled=\${args.disabled}
      ?loading=\${args.loading}
    >\${args.label}</ag-button>
  \`,`;
  }

  const metaParts: string[] = [];
  metaParts.push(`  title: 'AgnosticUI/${name}',`);
  metaParts.push(`  component: '${tag}',`);
  metaParts.push(`  tags: ['autodocs'],`);
  const needsLabelArgType = TEXT_CHILD_COMPONENTS.has(name) || FX_COMPONENTS.has(name);
  if (argTypes) {
    // For Lit, add a label argType for TEXT_CHILD and FX components
    if (needsLabelArgType) {
      // Insert label control before the closing '  },' of the argTypes block
      const closingIdx = argTypes.lastIndexOf('\n  },');
      if (closingIdx !== -1) {
        const modified = argTypes.slice(0, closingIdx) + '\n    label: { control: \'text\' },' + argTypes.slice(closingIdx);
        metaParts.push(modified);
      } else {
        metaParts.push(argTypes);
      }
    } else {
      metaParts.push(argTypes);
    }
  } else if (needsLabelArgType) {
    metaParts.push(`  argTypes: {\n    label: { control: 'text' },\n  },`);
  }
  if (litArgs) {
    metaParts.push(litArgs);
  }
  if (litRender) {
    metaParts.push(litRender);
  }

  lines.push(`const meta: Meta = {`);
  lines.push(metaParts.join('\n'));
  lines.push(`} satisfies Meta;`);
  lines.push('');
  lines.push(`export default meta;`);
  lines.push(`type Story = StoryObj;`);
  lines.push('');

  // Default story
  if (name === 'Dialog') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args: any) => html\``);
    lines.push(`    <div>`);
    lines.push(`      <ag-button`);
    lines.push(`        @click=\${(e: Event) => {`);
    lines.push(`          const dialog = (e.target as HTMLElement).parentElement?.querySelector('${tag}') as any;`);
    lines.push(`          if (dialog) dialog.open = true;`);
    lines.push(`        }}`);
    lines.push(`      >Open Dialog</ag-button>`);
    lines.push(`      <${tag}`);
    lines.push(`        .open=\${args.open}`);
    lines.push(`        .heading=\${args.heading}`);
    lines.push(`        .showCloseButton=\${args.showCloseButton}`);
    lines.push(`        @dialog-close=\${(e: Event) => { (e.target as any).open = false; }}`);
    lines.push(`        @dialog-cancel=\${(e: Event) => { (e.target as any).open = false; }}`);
    lines.push(`      >`);
    lines.push(`        <p>Dialog content goes here.</p>`);
    lines.push(`      </${tag}>`);
    lines.push(`    </div>`);
    lines.push(`  \`,`);
    lines.push(`};`);
  } else if (name === 'Drawer') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args: any) => html\``);
    lines.push(`    <div>`);
    lines.push(`      <ag-button`);
    lines.push(`        @click=\${(e: Event) => {`);
    lines.push(`          const drawer = (e.target as HTMLElement).parentElement?.querySelector('${tag}') as any;`);
    lines.push(`          if (drawer) drawer.open = true;`);
    lines.push(`        }}`);
    lines.push(`      >Open Drawer</ag-button>`);
    lines.push(`      <${tag}`);
    lines.push(`        .open=\${args.open}`);
    lines.push(`        .heading=\${args.heading}`);
    lines.push(`        .showCloseButton=\${args.showCloseButton}`);
    lines.push(`        @drawer-close=\${(e: Event) => { (e.target as any).open = false; }}`);
    lines.push(`        @drawer-cancel=\${(e: Event) => { (e.target as any).open = false; }}`);
    lines.push(`      >`);
    lines.push(`        <div style="padding: 1rem">Drawer content goes here.</div>`);
    lines.push(`      </${tag}>`);
    lines.push(`    </div>`);
    lines.push(`  \`,`);
    lines.push(`};`);
  } else if (name === 'Toast') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: (args: any) => html\``);
    lines.push(`    <div>`);
    lines.push(`      <ag-button`);
    lines.push(`        @click=\${(e: Event) => {`);
    lines.push(`          const toast = (e.target as HTMLElement).parentElement?.querySelector('${tag}') as any;`);
    lines.push(`          if (toast) toast.open = true;`);
    lines.push(`        }}`);
    lines.push(`      >Show Toast</ag-button>`);
    lines.push(`      <${tag}`);
    lines.push(`        .open=\${args.open}`);
    lines.push(`        type=\${args.type}`);
    lines.push(`        position=\${args.position}`);
    lines.push(`        ?showCloseButton=\${args.showCloseButton}`);
    lines.push(`        @toast-close=\${(e: Event) => { (e.target as any).open = false; }}`);
    lines.push(`      >`);
    lines.push(`        <span>Toast notification message</span>`);
    lines.push(`      </${tag}>`);
    lines.push(`    </div>`);
    lines.push(`  \`,`);
    lines.push(`};`);
  } else if (name === 'Collapsible') {
    lines.push(`export const Default: Story = {`);
    lines.push(`  render: () => html\``);
    lines.push(`    <${tag}>`);
    lines.push(`      <span slot="summary">Toggle details</span>`);
    lines.push(`      <div>Collapsible content goes here.</div>`);
    lines.push(`    </${tag}>`);
    lines.push(`  \`,`);
    lines.push(`};`);
  } else if (name === 'Button') {
    lines.push(`export const Default: Story = {};`);
    lines.push('');
    lines.push(`export const Variants: Story = {`);
    lines.push(`  render: () => html\``);
    lines.push(`    <div style="display:flex;gap:8px;flex-wrap:wrap">`);
    lines.push(`      <ag-button>Default</ag-button>`);
    lines.push(`      <ag-button variant="primary">Primary</ag-button>`);
    lines.push(`      <ag-button variant="secondary">Secondary</ag-button>`);
    lines.push(`      <ag-button variant="success">Success</ag-button>`);
    lines.push(`      <ag-button variant="warning">Warning</ag-button>`);
    lines.push(`      <ag-button variant="danger">Danger</ag-button>`);
    lines.push(`      <ag-button variant="monochrome">Monochrome</ag-button>`);
    lines.push(`    </div>`);
    lines.push(`  \`,`);
    lines.push(`};`);
    lines.push('');
    lines.push(`export const Sizes: Story = {`);
    lines.push(`  render: () => html\``);
    lines.push(`    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">`);
    lines.push(`      <ag-button size="x-sm">x-sm</ag-button>`);
    lines.push(`      <ag-button size="sm">sm</ag-button>`);
    lines.push(`      <ag-button size="md">md</ag-button>`);
    lines.push(`      <ag-button size="lg">lg</ag-button>`);
    lines.push(`      <ag-button size="xl">xl</ag-button>`);
    lines.push(`    </div>`);
    lines.push(`  \`,`);
    lines.push(`};`);
    lines.push('');
    lines.push(`export const Bordered: Story = {`);
    lines.push(`  render: () => html\``);
    lines.push(`    <div style="display:flex;gap:8px;flex-wrap:wrap">`);
    lines.push(`      <ag-button bordered>Default</ag-button>`);
    lines.push(`      <ag-button variant="primary" bordered>Primary</ag-button>`);
    lines.push(`      <ag-button variant="success" bordered>Success</ag-button>`);
    lines.push(`      <ag-button variant="danger" bordered>Danger</ag-button>`);
    lines.push(`    </div>`);
    lines.push(`  \`,`);
    lines.push(`};`);
    lines.push('');
    lines.push(`export const Disabled: Story = { args: { variant: 'primary', disabled: true } };`);
    lines.push(`export const Loading: Story = { args: { variant: 'primary', loading: true } };`);
  } else {
    lines.push(`export const Default: Story = {};`);
  }

  return lines.join('\n') + '\n';
}
