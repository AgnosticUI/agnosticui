import type { Meta, StoryObj } from '@storybook/react';
import { ReactHeader, type ReactHeaderProps } from 'agnosticui-core/header/react';

const meta: Meta<ReactHeaderProps> = {
  title: 'AgnosticUI React/Header',
  component: ReactHeader,
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
} satisfies Meta<ReactHeaderProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: ReactHeaderProps) => (
    <ReactHeader {...args}>
      <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600, fontSize: '1.25rem' }}>
        AgnosticUI
      </a>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
          <li><a href="#products" style={{ textDecoration: 'none', color: 'inherit' }}>Products</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: 'inherit' }}>Contact</a></li>
        </ul>
      </nav>
    </ReactHeader>
  ),
};

export const BasicHeader: Story = {
  render: () => (
    <>
      <ReactHeader>
        <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.5rem' }}>
          Logo
        </a>
        <nav>
          <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
            <li><a href="#features" style={{ textDecoration: 'none', color: 'inherit' }}>Features</a></li>
            <li><a href="#pricing" style={{ textDecoration: 'none', color: 'inherit' }}>Pricing</a></li>
          </ul>
        </nav>
      </ReactHeader>
      <div style={{ padding: '2rem' }}>
        <h1>Page Content</h1>
        <p>The header sits above this content.</p>
      </div>
    </>
  ),
};

export const StickyHeader: Story = {
  render: () => (
    <>
      <ReactHeader sticky>
        <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.5rem' }}>
          Sticky Header
        </a>
        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#section1" style={{ textDecoration: 'none', color: 'inherit' }}>Section 1</a></li>
            <li><a href="#section2" style={{ textDecoration: 'none', color: 'inherit' }}>Section 2</a></li>
            <li><a href="#section3" style={{ textDecoration: 'none', color: 'inherit' }}>Section 3</a></li>
          </ul>
        </nav>
      </ReactHeader>
      <div style={{ padding: '2rem' }}>
        <h1 id="section1">Section 1</h1>
        <p style={{ marginBottom: '600px' }}>Scroll down to see the sticky header in action. The header will stay at the top of the viewport.</p>
        <h1 id="section2">Section 2</h1>
        <p style={{ marginBottom: '600px' }}>More scrollable content to demonstrate sticky positioning.</p>
        <h1 id="section3">Section 3</h1>
        <p>Final section content.</p>
      </div>
    </>
  ),
};

export const ContentJustifyStart: Story = {
  render: () => (
    <ReactHeader contentJustify="start">
      <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
        Brand
      </a>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
        </ul>
      </nav>
    </ReactHeader>
  ),
};

export const ContentJustifyEnd: Story = {
  render: () => (
    <ReactHeader contentJustify="end">
      <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
        Brand
      </a>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
        </ul>
      </nav>
    </ReactHeader>
  ),
};

export const ContentJustifyCenter: Story = {
  render: () => (
    <ReactHeader contentJustify="center">
      <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
        Brand
      </a>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
        </ul>
      </nav>
    </ReactHeader>
  ),
};

export const ContentJustifyAround: Story = {
  render: () => (
    <ReactHeader contentJustify="around">
      <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
        Brand
      </a>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
        </ul>
      </nav>
    </ReactHeader>
  ),
};

export const WithLogo: Story = {
  render: () => (
    <ReactHeader>
      <a href="#" slot="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'inherit' }}>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" style={{ color: 'var(--ag-primary)' }}>
          <circle cx="16" cy="16" r="14" fill="var(--ag-primary)" />
          <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">A</text>
        </svg>
        <span style={{ fontWeight: 700, fontSize: '1.25rem' }}>MyApp</span>
      </a>
      <nav>
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
          <li><a href="#dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</a></li>
          <li><a href="#settings" style={{ textDecoration: 'none', color: 'inherit' }}>Settings</a></li>
        </ul>
      </nav>
    </ReactHeader>
  ),
};

export const CustomizedWithCSSParts: Story = {
  render: () => (
    <>
      <style>
        {`
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
        `}
      </style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>Gradient Background</h3>
          <ReactHeader className="custom-header-1">
            <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>
              Gradient Header
            </a>
            <nav>
              <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><a href="#home" style={{ textDecoration: 'none', color: 'white' }}>Home</a></li>
                <li><a href="#about" style={{ textDecoration: 'none', color: 'white' }}>About</a></li>
              </ul>
            </nav>
          </ReactHeader>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem' }}>Custom Border</h3>
          <ReactHeader className="custom-header-2">
            <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
              Bordered Header
            </a>
            <nav>
              <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
                <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
              </ul>
            </nav>
          </ReactHeader>
        </div>

        <div>
          <h3 style={{ marginBottom: '1rem' }}>Custom Content Width & Padding</h3>
          <ReactHeader className="custom-header-3">
            <a href="#" slot="logo" style={{ textDecoration: 'none', color: 'var(--ag-primary)', fontWeight: 700, fontSize: '1.25rem' }}>
              Wide Header
            </a>
            <nav>
              <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                <li><a href="#home" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a></li>
                <li><a href="#about" style={{ textDecoration: 'none', color: 'inherit' }}>About</a></li>
              </ul>
            </nav>
          </ReactHeader>
        </div>
      </div>
    </>
  ),
};
