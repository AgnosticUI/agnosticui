import type { Meta, StoryObj } from '@storybook/react';
import { ReactCopyButton, type ReactCopyButtonProps } from 'agnosticui-core/copy-button/react';
import { useState } from 'react';

const meta: Meta<ReactCopyButtonProps> = {
  title: 'AgnosticUI React/CopyButton',
  component: ReactCopyButton,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: "text",
      description: "The text to copy to the clipboard",
    },
    label: {
      control: "text",
      description: "The label for the button (aria-label)",
    },
    successLabel: {
      control: "text",
      description: "The label to show when the text has been copied",
    },
    errorLabel: {
      control: "text",
      description: "The label to show when copy fails",
    },
    timeout: {
      control: "number",
      description: "Duration in milliseconds to show the success state",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of the button",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "ghost", "monochrome"],
      description: "Variant of the button",
    },
  },
  args: {
    text: "Hello, World!",
    label: "Copy to clipboard",
    successLabel: "Copied!",
    errorLabel: "Copy failed",
    timeout: 1000,
    size: "md",
    variant: "ghost",
  },
} satisfies Meta<ReactCopyButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args: ReactCopyButtonProps) => (
    <ReactCopyButton {...args} />
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactCopyButton text="Copy this text" size="xs" />
      <ReactCopyButton text="Copy this text" size="sm" />
      <ReactCopyButton text="Copy this text" size="md" />
      <ReactCopyButton text="Copy this text" size="lg" />
      <ReactCopyButton text="Copy this text" size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <ReactCopyButton text="Copy this text" variant="primary" />
      <ReactCopyButton text="Copy this text" variant="secondary" />
      <ReactCopyButton text="Copy this text" variant="success" />
      <ReactCopyButton text="Copy this text" variant="warning" />
      <ReactCopyButton text="Copy this text" variant="danger" />
      <ReactCopyButton text="Copy this text" variant="ghost" />
      <ReactCopyButton text="Copy this text" variant="monochrome" />
    </div>
  ),
};

export const CodeSnippet: Story = {
  render: () => {
    const codeSnippet = `function greet(name) {
  return \`Hello, \${name}!\`;
}`;

    return (
      <div style={{ position: 'relative', maxWidth: '600px' }}>
        <pre style={{
          background: 'var(--ag-background-subtle)',
          padding: '1rem',
          borderRadius: '8px',
          overflow: 'auto',
          paddingRight: '3rem',
        }}>
          <code>{codeSnippet}</code>
        </pre>
        <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
          <ReactCopyButton
            text={codeSnippet}
            label="Copy code"
            variant="ghost"
            size="sm"
          />
        </div>
      </div>
    );
  },
};

export const WithEventHandlers: Story = {
  render: () => {
    const [message, setMessage] = useState<string>('');

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
        <ReactCopyButton
          text="This is the text to copy!"
          onCopy={(e) => setMessage(`✓ Copied: "${e.detail.text}"`)}
          onCopyError={(e) => setMessage(`✗ Error: ${e.detail.error.message}`)}
        />
        {message && (
          <div style={{
            padding: '0.75rem 1rem',
            background: 'var(--ag-background-subtle)',
            borderRadius: '6px',
            fontSize: '0.9rem',
          }}>
            {message}
          </div>
        )}
      </div>
    );
  },
};

export const CustomTimeout: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <div>
        <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--ag-text-secondary)' }}>
          500ms timeout
        </div>
        <ReactCopyButton text="Quick feedback" timeout={500} />
      </div>
      <div>
        <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--ag-text-secondary)' }}>
          1000ms timeout (default)
        </div>
        <ReactCopyButton text="Default feedback" timeout={1000} />
      </div>
      <div>
        <div style={{ fontSize: '0.85rem', marginBottom: '0.5rem', color: 'var(--ag-text-secondary)' }}>
          3000ms timeout
        </div>
        <ReactCopyButton text="Longer feedback" timeout={3000} />
      </div>
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <ReactCopyButton
        text="https://example.com/share/abc123"
        label="Copy share link"
        successLabel="Link copied!"
      />
      <ReactCopyButton
        text="user@example.com"
        label="Copy email address"
        successLabel="Email copied to clipboard"
      />
    </div>
  ),
};

export const CustomIcons: Story = {
  render: () => {
    const customCopyIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
    );

    const customCheckIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    );

    const customErrorIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m15 9-6 6"/>
        <path d="m9 9 6 6"/>
      </svg>
    );

    return (
      <ReactCopyButton text="Custom icons example">
        <span slot="icon-copy">{customCopyIcon}</span>
        <span slot="icon-copied">{customCheckIcon}</span>
        <span slot="icon-error">{customErrorIcon}</span>
      </ReactCopyButton>
    );
  },
};

export const InlineWithText: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <p style={{ lineHeight: '1.6' }}>
        To install the package, run:{' '}
        <code style={{
          background: 'var(--ag-background-subtle)',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontFamily: 'monospace',
        }}>
          npm install agnosticui
        </code>
        {' '}
        <ReactCopyButton
          text="npm install agnosticui"
          label="Copy install command"
          size="sm"
          variant="ghost"
        />
      </p>
    </div>
  ),
};

export const CSSPartsCustomization: Story = {
  render: () => (
    <>
      <style>{`
        .custom-blue-copy::part(button) {
          background: #3b82f6;
          color: white;
          border-radius: 8px;
        }

        .custom-blue-copy::part(button):hover {
          background: #2563eb;
        }

        .custom-outline-copy::part(button) {
          background: transparent;
          border: 2px solid var(--ag-primary);
          color: var(--ag-primary);
          border-radius: 6px;
        }

        .custom-rounded-copy::part(button) {
          border-radius: 50%;
          padding: 0.75rem;
        }

        .custom-icon-color::part(icon-copy) {
          color: #f59e0b;
        }

        .custom-icon-color::part(icon-copied) {
          color: #10b981;
        }

        .custom-icon-color::part(icon-error) {
          color: #ef4444;
        }
      `}</style>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '1rem' }}>
        <ReactCopyButton className="custom-blue-copy" text="Blue button style" />
        <ReactCopyButton className="custom-outline-copy" text="Outline style" />
        <ReactCopyButton className="custom-rounded-copy" text="Rounded button" />
        <ReactCopyButton className="custom-icon-color" text="Custom icon colors" />
      </div>
    </>
  ),
};
