import type { Meta, StoryObj } from '@storybook/vue3';
import { VueCopyButton, type VueCopyButtonProps } from 'agnosticui-core/copy-button/vue';
import { ref } from 'vue';

const meta = {
  title: 'AgnosticUI Vue/CopyButton',
  component: VueCopyButton,
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
} satisfies Meta<typeof VueCopyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args: VueCopyButtonProps) => ({
    components: { VueCopyButton },
    setup() {
      return { args };
    },
    template: `
      <VueCopyButton v-bind="args" />
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const text = 'Copy this text';
      return { text };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueCopyButton :text="text" size="xs" />
        <VueCopyButton :text="text" size="sm" />
        <VueCopyButton :text="text" size="md" />
        <VueCopyButton :text="text" size="lg" />
        <VueCopyButton :text="text" size="xl" />
      </div>
    `,
  }),
};

export const Variants: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const text = 'Copy this text';
      return { text };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <VueCopyButton :text="text" variant="primary" />
        <VueCopyButton :text="text" variant="secondary" />
        <VueCopyButton :text="text" variant="success" />
        <VueCopyButton :text="text" variant="warning" />
        <VueCopyButton :text="text" variant="danger" />
        <VueCopyButton :text="text" variant="ghost" />
        <VueCopyButton :text="text" variant="monochrome" />
      </div>
    `,
  }),
};

export const CodeSnippet: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const codeSnippet = `function greet(name) {
  return \`Hello, \${name}!\`;
}`;
      return { codeSnippet };
    },
    template: `
      <div style="position: relative; max-width: 600px;">
        <pre style="background: var(--ag-background-subtle); padding: 1rem; border-radius: 8px; overflow: auto; padding-right: 3rem;"><code>{{ codeSnippet }}</code></pre>
        <div style="position: absolute; top: 0.5rem; right: 0.5rem;">
          <VueCopyButton
            :text="codeSnippet"
            label="Copy code"
            variant="ghost"
            size="sm"
          />
        </div>
      </div>
    `,
  }),
};

export const WithEventHandlers: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const text = 'This is the text to copy!';
      const message = ref<string>('');

      const handleCopy = (e: CustomEvent<{ text: string }>) => {
        message.value = `✓ Copied: "${e.detail.text}"`;
      };

      const handleCopyError = (e: CustomEvent<{ error: Error }>) => {
        message.value = `✗ Error: ${e.detail.error.message}`;
      };

      return { text, message, handleCopy, handleCopyError };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
        <VueCopyButton
          :text="text"
          @copy="handleCopy"
          @copy-error="handleCopyError"
        />
        <div 
          v-if="message"
          style="padding: 0.75rem 1rem; background: var(--ag-background-subtle); border-radius: 6px; font-size: 0.9rem;"
        >
          {{ message }}
        </div>
      </div>
    `,
  }),
};

export const CustomTimeout: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const text1 = 'Quick feedback';
      const text2 = 'Default feedback';
      const text3 = 'Longer feedback';
      return { text1, text2, text3 };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
        <div>
          <div style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--ag-text-secondary);">
            500ms timeout
          </div>
          <VueCopyButton :text="text1" :timeout="500" />
        </div>
        <div>
          <div style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--ag-text-secondary);">
            1000ms timeout (default)
          </div>
          <VueCopyButton :text="text2" :timeout="1000" />
        </div>
        <div>
          <div style="font-size: 0.85rem; margin-bottom: 0.5rem; color: var(--ag-text-secondary);">
            3000ms timeout
          </div>
          <VueCopyButton :text="text3" :timeout="3000" />
        </div>
      </div>
    `,
  }),
};

export const CustomLabels: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const shareLink = 'https://example.com/share/abc123';
      const email = 'user@example.com';
      return { shareLink, email };
    },
    template: `
      <div style="display: flex; gap: 1rem; align-items: center;">
        <VueCopyButton
          :text="shareLink"
          label="Copy share link"
          success-label="Link copied!"
        />
        <VueCopyButton
          :text="email"
          label="Copy email address"
          success-label="Email copied to clipboard"
        />
      </div>
    `,
  }),
};

export const CustomIcons: Story = {
  render: () => {
    const customCopyIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
      </svg>
    `;

    const customCheckIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </svg>
    `;

    const customErrorIcon = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="m15 9-6 6"/>
        <path d="m9 9 6 6"/>
      </svg>
    `;

    const template = `
      <VueCopyButton :text="text">
        <template #icon-copy>
          ${customCopyIcon}
        </template>
        <template #icon-copied>
          ${customCheckIcon}
        </template>
        <template #icon-error>
          ${customErrorIcon}
        </template>
      </VueCopyButton>
    `;

    return {
      components: { VueCopyButton },
      setup() {
        const text = 'Custom icons example';
        return { text };
      },
      template,
    };
  },
};

export const InlineWithText: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const installCommand = 'npm install agnosticui';
      return { installCommand };
    },
    template: `
      <div style="max-width: 600px;">
        <p style="line-height: 1.6;">
          To install the package, run:
          <code style="background: var(--ag-background-subtle); padding: 0.25rem 0.5rem; border-radius: 4px; font-family: monospace;">
            {{ installCommand }}
          </code>
          <VueCopyButton
            :text="installCommand"
            label="Copy install command"
            size="sm"
            variant="ghost"
          />
        </p>
      </div>
    `,
  }),
};

export const CSSPartsCustomization: Story = {
  render: () => ({
    components: { VueCopyButton },
    setup() {
      const text1 = 'Blue button style';
      const text2 = 'Outline style';
      const text3 = 'Rounded button';
      const text4 = 'Custom icon colors';
      const styles = `
        <style>
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
        </style>
      `;
      return { text1, text2, text3, text4, styles };
    },
    template: `
      <div>
        <div v-html="styles"></div>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap; padding: 1rem;">
          <VueCopyButton class="custom-blue-copy" :text="text1" />
          <VueCopyButton class="custom-outline-copy" :text="text2" />
          <VueCopyButton class="custom-rounded-copy" :text="text3" />
          <VueCopyButton class="custom-icon-color" :text="text4" />
        </div>
      </div>
    `,
  }),
};
