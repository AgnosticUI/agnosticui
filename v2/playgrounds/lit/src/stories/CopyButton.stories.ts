import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import { fn } from "storybook/test";
import "agnosticui-core/copy-button";

interface CopyButtonProps {
  text: string;
  label: string;
  successLabel: string;
  errorLabel: string;
  timeout: number;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'monochrome';
  onCopy?: (event: CustomEvent) => void;
  onCopyError?: (event: CustomEvent) => void;
}

const meta: Meta<CopyButtonProps> = {
  title: "AgnosticUI Lit/CopyButton",
  component: "ag-copy-button",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "The text to copy to the clipboard",
    },
    label: {
      control: "text",
      description: "Accessible label for the button (aria-label)",
    },
    successLabel: {
      control: "text",
      description: "Label to show when text has been copied",
    },
    errorLabel: {
      control: "text",
      description: "Label to show when copy fails",
    },
    timeout: {
      control: "number",
      description: "Duration in milliseconds to show success/error state",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size variant",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "success", "warning", "danger", "ghost", "monochrome"],
      description: "Visual variant",
    },
  },
  args: {
    text: "npm install agnosticui-core",
    label: "Copy to clipboard",
    successLabel: "Copied!",
    errorLabel: "Copy failed",
    timeout: 1000,
    size: "md",
    variant: "ghost",
    onCopy: fn(),
    onCopyError: fn(),
  },
  parameters: {
    actions: {
      handles: ["copy", "copy-error"],
    },
  },
};

export default meta;
type Story = StoryObj<CopyButtonProps>;

// Default story with all controls
export const Default: Story = {
  render: ({
    text,
    label,
    successLabel,
    errorLabel,
    timeout,
    size,
    variant,
    onCopy,
    onCopyError,
  }) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-copy-button
        .text=${text}
        .label=${label}
        .successLabel=${successLabel}
        .errorLabel=${errorLabel}
        .timeout=${timeout}
        .size=${size}
        .variant=${variant}
        @copy=${onCopy}
        @copy-error=${onCopyError}
      ></ag-copy-button>
    </div>
  `,
};

// Code snippet example
export const CodeSnippet: Story = {
  args: {
    text: "npm install agnosticui-core",
    label: "Copy install command",
    successLabel: "Command copied!",
    size: "sm",
    variant: "ghost",
  },
  render: (args) => html`
    <div style="position: relative; background: var(--ag-background-secondary); padding: var(--ag-space-4); border-radius: var(--ag-radius); max-width: 500px; margin: 50px auto;">
      <pre style="margin: 0; font-family: monospace;"><code>${args.text}</code></pre>
      <ag-copy-button
        .text=${args.text}
        .label=${args.label}
        .successLabel=${args.successLabel}
        .size=${args.size}
        .variant=${args.variant}
        style="position: absolute; top: var(--ag-space-2); right: var(--ag-space-2);"
      ></ag-copy-button>
    </div>
  `,
};

// Different sizes
export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: var(--ag-space-3); justify-content: center; padding: 50px;">
      <ag-copy-button
        text="Extra small button"
        label="Copy text"
        size="xs"
      ></ag-copy-button>
      <ag-copy-button
        text="Small button"
        label="Copy text"
        size="sm"
      ></ag-copy-button>
      <ag-copy-button
        text="Medium button"
        label="Copy text"
        size="md"
      ></ag-copy-button>
      <ag-copy-button
        text="Large button"
        label="Copy text"
        size="lg"
      ></ag-copy-button>
      <ag-copy-button
        text="Extra large button"
        label="Copy text"
        size="xl"
      ></ag-copy-button>
    </div>
  `,
};

// Different variants
export const Variants: Story = {
  render: () => html`
    <div style="display: flex; align-items: center; gap: var(--ag-space-3); justify-content: center; padding: 50px;">
      <ag-copy-button
        text="Primary variant"
        label="Copy"
        variant="primary"
      ></ag-copy-button>
      <ag-copy-button
        text="Secondary variant"
        label="Copy"
        variant="secondary"
      ></ag-copy-button>
      <ag-copy-button
        text="Success variant"
        label="Copy"
        variant="success"
      ></ag-copy-button>
      <ag-copy-button
        text="Warning variant"
        label="Copy"
        variant="warning"
      ></ag-copy-button>
      <ag-copy-button
        text="Danger variant"
        label="Copy"
        variant="danger"
      ></ag-copy-button>
      <ag-copy-button
        text="Ghost variant"
        label="Copy"
        variant="ghost"
      ></ag-copy-button>
      <ag-copy-button
        text="Monochrome variant"
        label="Copy"
        variant="monochrome"
      ></ag-copy-button>
    </div>
  `,
};

// Custom timeout durations
export const CustomTimeouts: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: var(--ag-space-4); align-items: center; padding: 50px;">
      <div style="text-align: center;">
        <ag-copy-button
          text="Quick feedback (500ms)"
          label="Copy"
          timeout="500"
          variant="primary"
        ></ag-copy-button>
        <p style="margin-top: var(--ag-space-2); color: var(--ag-text-secondary); font-size: 0.875rem;">500ms timeout</p>
      </div>
      <div style="text-align: center;">
        <ag-copy-button
          text="Standard feedback (1000ms)"
          label="Copy"
          timeout="1000"
          variant="success"
        ></ag-copy-button>
        <p style="margin-top: var(--ag-space-2); color: var(--ag-text-secondary); font-size: 0.875rem;">1000ms timeout (default)</p>
      </div>
      <div style="text-align: center;">
        <ag-copy-button
          text="Extended feedback (3000ms)"
          label="Copy"
          timeout="3000"
          variant="warning"
        ></ag-copy-button>
        <p style="margin-top: var(--ag-space-2); color: var(--ag-text-secondary); font-size: 0.875rem;">3000ms timeout</p>
      </div>
    </div>
  `,
};

// Error state simulation
export const ErrorState: Story = {
  render: () => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const button = e.currentTarget as HTMLElement;
      const copyButton = button.querySelector('ag-copy-button') as any;
      
      // Temporarily override clipboard to simulate failure
      const originalClipboard = navigator.clipboard;
      Object.defineProperty(navigator, 'clipboard', {
        value: {
          writeText: () => Promise.reject(new Error('Simulated error')),
        },
        configurable: true,
      });

      // Trigger the copy button
      const iconButton = copyButton.shadowRoot?.querySelector('ag-icon-button');
      iconButton?.click();

      // Restore after a moment
      setTimeout(() => {
        Object.defineProperty(navigator, 'clipboard', {
          value: originalClipboard,
          configurable: true,
        });
      }, 100);
    };

    return html`
      <div style="text-align: center; padding: 50px;">
        <div @click=${handleClick}>
          <ag-copy-button
            text="This will simulate an error"
            label="Copy (will fail)"
            error-label="Copy failed!"
            variant="danger"
          ></ag-copy-button>
        </div>
        <p style="margin-top: var(--ag-space-4); color: var(--ag-text-secondary); max-width: 400px; margin-left: auto; margin-right: auto;">
          Click the button to simulate a copy failure and see the error state with error icon.
        </p>
      </div>
    `;
  },
};

// Custom icons - Heroicons style (BOTH slots required)
export const CustomIconsHeroicons: Story = {
  args: {
    text: "Custom Heroicons example",
    label: "Copy with Heroicons",
    successLabel: "Copied with style!",
  },
  render: (args) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-copy-button
        .text=${args.text}
        .label=${args.label}
        .successLabel=${args.successLabel}
      >
        <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="100%" height="100%">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
        </svg>
        <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="100%" height="100%">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </ag-copy-button>
    </div>
  `,
};

// Custom icons - Feather style (BOTH slots required)
export const CustomIconsFeather: Story = {
  args: {
    text: "Custom Feather Icons example",
    label: "Copy with Feather",
    successLabel: "Copied!",
  },
  render: (args) => html`
    <div style="display: flex; justify-content: center; padding: 50px;">
      <ag-copy-button
        .text=${args.text}
        .label=${args.label}
        .successLabel=${args.successLabel}
        variant="primary"
      >
        <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </ag-copy-button>
    </div>
  `,
};

// Custom error icon
export const CustomErrorIcon: Story = {
  render: () => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const button = e.currentTarget as HTMLElement;
      const copyButton = button.querySelector('ag-copy-button') as any;
      
      // Temporarily override clipboard to simulate failure
      const originalClipboard = navigator.clipboard;
      Object.defineProperty(navigator, 'clipboard', {
        value: {
          writeText: () => Promise.reject(new Error('Simulated error')),
        },
        configurable: true,
      });

      // Trigger the copy button
      const iconButton = copyButton.shadowRoot?.querySelector('ag-icon-button');
      iconButton?.click();

      // Restore after a moment
      setTimeout(() => {
        Object.defineProperty(navigator, 'clipboard', {
          value: originalClipboard,
          configurable: true,
        });
      }, 100);
    };

    return html`
      <div style="text-align: center; padding: 50px;">
        <div @click=${handleClick}>
          <ag-copy-button
            text="Custom error icon"
            label="Copy"
            error-label="Failed!"
            variant="danger"
          >
            <svg slot="icon-error" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </ag-copy-button>
        </div>
        <p style="margin-top: var(--ag-space-4); color: var(--ag-text-secondary); max-width: 400px; margin-left: auto; margin-right: auto;">
          Click to see custom error icon (Feather alert circle)
        </p>
      </div>
    `;
  },
};

// All three custom icons
export const AllCustomIcons: Story = {
  render: () => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const button = e.currentTarget as HTMLElement;
      const copyButton = button.querySelector('ag-copy-button') as any;
      
      if (button.dataset.mode === 'error') {
        // Temporarily override clipboard to simulate failure
        const originalClipboard = navigator.clipboard;
        Object.defineProperty(navigator, 'clipboard', {
          value: {
            writeText: () => Promise.reject(new Error('Simulated error')),
          },
          configurable: true,
        });

        // Trigger the copy button
        const iconButton = copyButton.shadowRoot?.querySelector('ag-icon-button');
        iconButton?.click();

        // Restore after a moment
        setTimeout(() => {
          Object.defineProperty(navigator, 'clipboard', {
            value: originalClipboard,
            configurable: true,
          });
        }, 100);
      }
    };

    return html`
      <div style="display: flex; gap: var(--ag-space-4); justify-content: center; padding: 50px;">
        <div style="text-align: center;">
          <ag-copy-button
            text="Success state"
            label="Copy"
            variant="success"
          >
            <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </ag-copy-button>
          <p style="margin-top: var(--ag-space-2); font-size: 0.875rem;">Click to see success</p>
        </div>

        <div style="text-align: center;" @click=${handleClick} data-mode="error">
          <ag-copy-button
            text="Error state"
            label="Copy"
            error-label="Error!"
            variant="danger"
          >
            <svg slot="icon-copy" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            <svg slot="icon-copied" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <svg slot="icon-error" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </ag-copy-button>
          <p style="margin-top: var(--ag-space-2); font-size: 0.875rem;">Click to see error</p>
        </div>
      </div>
    `;
  },
};

// Real-world example: API key display
export const APIKeyExample: Story = {
  render: () => html`
    <div style="max-width: 600px; margin: 50px auto; padding: var(--ag-space-4); border: 1px solid var(--ag-border); border-radius: var(--ag-radius);">
      <h3 style="margin-top: 0;">API Key</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Use this API key to authenticate your requests. Keep it secure and don't share it publicly.
      </p>
      <div style="display: flex; align-items: center; gap: var(--ag-space-2); background: var(--ag-background-secondary); padding: var(--ag-space-3); border-radius: var(--ag-radius); margin-top: var(--ag-space-3);">
        <code style="flex: 1; font-family: monospace; font-size: 0.875rem;">sk_test_abc123xyz789def456ghi</code>
        <ag-copy-button
          text="sk_test_abc123xyz789def456ghi"
          label="Copy API key"
          success-label="API key copied!"
          variant="monochrome"
          size="sm"
        ></ag-copy-button>
      </div>
    </div>
  `,
};

// Real-world example: Share link
export const ShareLinkExample: Story = {
  render: () => html`
    <div style="max-width: 600px; margin: 50px auto; padding: var(--ag-space-4); border: 1px solid var(--ag-border); border-radius: var(--ag-radius);">
      <h3 style="margin-top: 0;">Share this page</h3>
      <p style="color: var(--ag-text-secondary); font-size: 0.875rem;">
        Copy the link below to share this page with others.
      </p>
      <div style="display: flex; align-items: center; gap: var(--ag-space-2); margin-top: var(--ag-space-3);">
        <input
          type="text"
          readonly
          value="https://agnosticui.com/components/copybutton"
          style="flex: 1; padding: var(--ag-space-2); border: 1px solid var(--ag-border); border-radius: var(--ag-radius); font-size: 0.875rem;"
        />
        <ag-copy-button
          text="https://agnosticui.com/components/copybutton"
          label="Copy share link"
          success-label="Link copied!"
          variant="primary"
        ></ag-copy-button>
      </div>
    </div>
  `,
};

// Event handling example
export const WithEventHandling: Story = {
  render: () => {
    const handleCopy = (e: CustomEvent) => {
      console.log('Copied to clipboard:', e.detail.text);
      const output = document.querySelector('#copy-output') as HTMLElement;
      if (output) {
        output.textContent = `✓ Copied: "${e.detail.text}"`;
        output.style.color = 'var(--ag-success)';
        setTimeout(() => {
          output.textContent = 'Click the button to copy...';
          output.style.color = 'var(--ag-text-secondary)';
        }, 3000);
      }
    };

    const handleCopyError = (e: CustomEvent) => {
      console.error('Copy failed:', e.detail.error);
      const output = document.querySelector('#copy-output') as HTMLElement;
      if (output) {
        output.textContent = `✗ Error: ${e.detail.error.message}`;
        output.style.color = 'var(--ag-danger)';
        setTimeout(() => {
          output.textContent = 'Click the button to copy...';
          output.style.color = 'var(--ag-text-secondary)';
        }, 3000);
      }
    };

    return html`
      <div style="text-align: center; padding: 50px;">
        <ag-copy-button
          text="Event handling example"
          label="Copy with event"
          success-label="Copied!"
          @copy=${handleCopy}
          @copy-error=${handleCopyError}
        ></ag-copy-button>
        <p id="copy-output" style="margin-top: var(--ag-space-4); color: var(--ag-text-secondary);">
          Click the button to copy...
        </p>
      </div>
    `;
  },
};

// Accessibility demonstration
export const AccessibilityDemo: Story = {
  render: () => html`
    <div style="max-width: 600px; margin: 50px auto; padding: var(--ag-space-4);">
      <h3 style="margin-top: 0;">Accessibility Features</h3>
      <ul style="color: var(--ag-text-secondary); line-height: 1.6;">
        <li><strong>Screen reader support:</strong> Uses aria-live region to announce copy success/failure</li>
        <li><strong>Keyboard accessible:</strong> Fully operable via keyboard</li>
        <li><strong>Dynamic labels:</strong> Button label changes based on state</li>
        <li><strong>Visual feedback:</strong> Icons change to indicate state</li>
      </ul>
      <div style="margin-top: var(--ag-space-4); padding: var(--ag-space-3); background: var(--ag-background-secondary); border-radius: var(--ag-radius); display: flex; align-items: center; gap: var(--ag-space-2);">
        <code style="flex: 1;">Try using Tab + Enter</code>
        <ag-copy-button
          text="Keyboard accessible copy button"
          label="Copy text"
          success-label="Copied!"
          variant="primary"
        ></ag-copy-button>
      </div>
      <p style="margin-top: var(--ag-space-3); font-size: 0.875rem; color: var(--ag-text-secondary);">
        <em>Tip: Enable a screen reader to hear the announcements when copying.</em>
      </p>
    </div>
  `,
};
