import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueHeader } from '../../../../lib/src/components/Header/vue';

const meta = {
  title: 'AgnosticUI Vue/Header',
  component: VueHeader,
  argTypes: {
    sticky: { control: 'boolean', description: 'Makes header sticky at viewport top' },
    contentJustify: {
      control: 'select',
      options: ['start', 'end', 'between', 'around', 'center'],
      description: 'Controls content alignment in flex container',
    },
  },
  args: {
    sticky: false,
    contentJustify: 'between',
  },
} satisfies Meta<typeof VueHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueHeader },
    setup() {
      return { args };
    },
    template: `
      <VueHeader v-bind="args">
        <template #logo>
          <a href="#" style="text-decoration: none; color: inherit; font-weight: 600; font-size: 1.25rem;">
            AgnosticUI
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
};

export const BasicHeader: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <div>
        <VueHeader>
          <template #logo>
            <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.5rem;">
              Logo
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0;">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
            </ul>
          </nav>
        </VueHeader>
        <div style="padding: 2rem;">
          <h1>Page Content</h1>
          <p>The header sits above this content.</p>
        </div>
      </div>
    `,
  }),
};

export const StickyHeader: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <div>
        <VueHeader :sticky="true">
          <template #logo>
            <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.5rem;">
              Sticky Header
            </a>
          </template>
          <nav>
            <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
              <li><a href="#section1">Section 1</a></li>
              <li><a href="#section2">Section 2</a></li>
              <li><a href="#section3">Section 3</a></li>
            </ul>
          </nav>
        </VueHeader>
        <div style="padding: 2rem;">
          <h1 id="section1">Section 1</h1>
          <p style="margin-bottom: 600px;">Scroll down to see the sticky header in action. The header will stay at the top of the viewport.</p>
          <h1 id="section2">Section 2</h1>
          <p style="margin-bottom: 600px;">More scrollable content to demonstrate sticky positioning.</p>
          <h1 id="section3">Section 3</h1>
          <p>Final section content.</p>
        </div>
      </div>
    `,
  }),
};

export const ContentJustifyStart: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <VueHeader contentJustify="start">
        <template #logo>
          <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            Brand
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
};

export const ContentJustifyEnd: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <VueHeader contentJustify="end">
        <template #logo>
          <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            Brand
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
};

export const ContentJustifyCenter: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <VueHeader contentJustify="center">
        <template #logo>
          <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            Brand
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
};

export const ContentJustifyAround: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <VueHeader contentJustify="around">
        <template #logo>
          <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            Brand
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
};

export const WithLogo: Story = {
  render: () => ({
    components: { VueHeader },
    template: `
      <VueHeader>
        <template #logo>
          <a href="#" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" style="color: var(--ag-primary);">
              <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
              <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">A</text>
            </svg>
            <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
          </a>
        </template>
        <nav>
          <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
            <li><a href="#home">Home</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </nav>
      </VueHeader>
    `,
  }),
};

export const CustomizedWithCSSParts: Story = {
  render: () => ({
    components: { VueHeader },
    setup() {
      const styles = `
        <style>
          .custom-header-1::part(ag-header) {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-bottom: none;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          }

          .custom-header-2::part(ag-header) {
            background: var(--ag-background-secondary);
            border-bottom: 3px solid var(--ag-primary);
            box-shadow: none;
          }

          .custom-header-3::part(ag-header-content) {
            max-width: 1200px;
            padding: 1.5rem 2rem;
          }
        </style>
      `;
      return { styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; flex-direction: column; gap: 3rem;">
          <div>
            <h3 style="margin-bottom: 1rem;">Gradient Background</h3>
            <VueHeader class="custom-header-1">
              <template #logo>
                <a href="#" style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;">
                  Gradient Header
                </a>
              </template>
              <nav>
                <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
                  <li><a href="#home" style="color: white;">Home</a></li>
                  <li><a href="#about" style="color: white;">About</a></li>
                </ul>
              </nav>
            </VueHeader>
          </div>

          <div>
            <h3 style="margin-bottom: 1rem;">Custom Border</h3>
            <VueHeader class="custom-header-2">
              <template #logo>
                <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
                  Bordered Header
                </a>
              </template>
              <nav>
                <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </nav>
            </VueHeader>
          </div>

          <div>
            <h3 style="margin-bottom: 1rem;">Custom Content Width & Padding</h3>
            <VueHeader class="custom-header-3">
              <template #logo>
                <a href="#" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
                  Wide Header
                </a>
              </template>
              <nav>
                <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                </ul>
              </nav>
            </VueHeader>
          </div>
        </div>
      </div>
    `,
  }),
};
