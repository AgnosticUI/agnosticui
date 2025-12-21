import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/header";
import type { HeaderProps } from "agnosticui-core/header";

const meta: Meta<HeaderProps> = {
  title: "AgnosticUI Lit/Header",
  component: "ag-header",
  argTypes: {
    sticky: { control: "boolean", description: "Makes header sticky at viewport top" },
    contentJustify: {
      control: "select",
      options: ["start", "end", "between", "around", "center"],
      description: "Controls content alignment in flex container",
    },
  },
  args: {
    sticky: false,
    contentJustify: "between",
  },
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  render: ({ sticky, contentJustify }) => html`
    <ag-header
      .sticky=${sticky}
      .contentJustify=${contentJustify}
    >
      <a href="#" slot="logo" style="text-decoration: none; color: inherit; font-weight: 600; font-size: 1.25rem;">
        AgnosticUI
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
          <li><a href="#products" style="text-decoration: none; color: inherit;">Products</a></li>
          <li><a href="#contact" style="text-decoration: none; color: inherit;">Contact</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};

export const BasicHeader: Story = {
  render: () => html`
    <ag-header>
      <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.5rem;">
        Logo
      </a>
      <nav>
        <ul style="display: flex; gap: 1.5rem; list-style: none; margin: 0; padding: 0; align-items: center;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#features" style="text-decoration: none; color: inherit;">Features</a></li>
          <li><a href="#pricing" style="text-decoration: none; color: inherit;">Pricing</a></li>
        </ul>
      </nav>
    </ag-header>
    <div style="padding: 2rem;">
      <h1>Page Content</h1>
      <p>The header sits above this content.</p>
    </div>
  `,
};

export const StickyHeader: Story = {
  render: () => html`
    <ag-header .sticky=${true}>
      <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.5rem;">
        Sticky Header
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#section1" style="text-decoration: none; color: inherit;">Section 1</a></li>
          <li><a href="#section2" style="text-decoration: none; color: inherit;">Section 2</a></li>
          <li><a href="#section3" style="text-decoration: none; color: inherit;">Section 3</a></li>
        </ul>
      </nav>
    </ag-header>
    <div style="padding: 2rem;">
      <h1 id="section1">Section 1</h1>
      <p style="margin-bottom: 600px;">Scroll down to see the sticky header in action. The header will stay at the top of the viewport.</p>
      <h1 id="section2">Section 2</h1>
      <p style="margin-bottom: 600px;">More scrollable content to demonstrate sticky positioning.</p>
      <h1 id="section3">Section 3</h1>
      <p>Final section content.</p>
    </div>
  `,
};

export const ContentJustifyStart: Story = {
  render: () => html`
    <ag-header .contentJustify=${"start"}>
      <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
        Brand
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};

export const ContentJustifyEnd: Story = {
  render: () => html`
    <ag-header .contentJustify=${"end"}>
      <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
        Brand
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};

export const ContentJustifyCenter: Story = {
  render: () => html`
    <ag-header .contentJustify=${"center"}>
      <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
        Brand
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};

export const ContentJustifyAround: Story = {
  render: () => html`
    <ag-header .contentJustify=${"around"}>
      <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
        Brand
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};

export const WithLogo: Story = {
  render: () => html`
    <ag-header>
      <a href="#" slot="logo" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: inherit;">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" style="color: var(--ag-primary);">
          <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
          <text x="16" y="22" text-anchor="middle" fill="white" font-size="16" font-weight="bold">A</text>
        </svg>
        <span style="font-weight: 700; font-size: 1.25rem;">MyApp</span>
      </a>
      <nav>
        <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
          <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
          <li><a href="#dashboard" style="text-decoration: none; color: inherit;">Dashboard</a></li>
          <li><a href="#settings" style="text-decoration: none; color: inherit;">Settings</a></li>
        </ul>
      </nav>
    </ag-header>
  `,
};

export const CustomizedWithCSSParts: Story = {
  render: () => html`
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
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <h3 style="margin-bottom: 1rem;">Gradient Background</h3>
        <ag-header class="custom-header-1">
          <a href="#" slot="logo" style="text-decoration: none; color: white; font-weight: 700; font-size: 1.25rem;">
            Gradient Header
          </a>
          <nav>
            <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
              <li><a href="#home" style="text-decoration: none; color: white;">Home</a></li>
              <li><a href="#about" style="text-decoration: none; color: white;">About</a></li>
            </ul>
          </nav>
        </ag-header>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Custom Border</h3>
        <ag-header class="custom-header-2">
          <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            Bordered Header
          </a>
          <nav>
            <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
              <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
              <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
            </ul>
          </nav>
        </ag-header>
      </div>

      <div>
        <h3 style="margin-bottom: 1rem;">Custom Content Width & Padding</h3>
        <ag-header class="custom-header-3">
          <a href="#" slot="logo" style="text-decoration: none; color: var(--ag-primary); font-weight: 700; font-size: 1.25rem;">
            Wide Header
          </a>
          <nav>
            <ul style="display: flex; gap: 2rem; list-style: none; margin: 0; padding: 0;">
              <li><a href="#home" style="text-decoration: none; color: inherit;">Home</a></li>
              <li><a href="#about" style="text-decoration: none; color: inherit;">About</a></li>
            </ul>
          </nav>
        </ag-header>
      </div>
    </div>
  `,
};
