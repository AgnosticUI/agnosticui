import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueMark } from 'agnosticui-core/mark/vue';
import { ref } from 'vue';

const meta = {
  title: 'AgnosticUI Vue/Mark',
  component: VueMark,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['warning', 'info', 'success', 'error', 'primary', 'secondary', 'monochrome'],
    },
    search: {
      control: 'text',
    },
    caseSensitive: {
      control: 'boolean',
    },
    matchAll: {
      control: 'boolean',
    }
  },
} satisfies Meta<typeof VueMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {
  args: {
    variant: 'warning',
  },
  render: (args) => ({
    components: { VueMark },
    setup() {
      return { args };
    },
    template: `
      <p>
        This is some text with a <VueMark v-bind="args">statically highlighted part</VueMark> inside it.
      </p>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    components: { VueMark },
    template: `
    <div style="display: flex; flex-direction: column; gap: 1rem;">
      <p>Warning: <VueMark variant="warning">Warning</VueMark></p>
      <p>Info: <VueMark variant="info">Info</VueMark></p>
      <p>Success: <VueMark variant="success">Success</VueMark></p>
      <p>Error: <VueMark variant="error">Error</VueMark></p>
      <p>Primary: <VueMark variant="primary">Primary</VueMark></p>
      <p>Secondary: <VueMark variant="secondary">Secondary</VueMark></p>
      <p>Monochrome: <VueMark variant="monochrome">Monochrome</VueMark></p>
    </div>
    `,
  }),
};

export const ReactiveHighlighting: Story = {
  render: () => ({
    components: { VueMark },
    setup() {
      const search = ref('fox');
      const caseSensitive = ref(false);
      const matchAll = ref(true);
      const textContent = 'The quick brown fox jumps over the lazy dog. The lazy fox was not the same as the other fox.';
      
      return { search, caseSensitive, matchAll, textContent };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <label>
            Search for:
            <input type="text" v-model="search" />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="caseSensitive" />
            Case Sensitive
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="matchAll" />
            Match All
          </label>
        </div>
        <p>
          <VueMark
            :search="search"
            :caseSensitive="caseSensitive"
            :matchAll="matchAll"
            variant="warning"
          >
            {{ textContent }}
          </VueMark>
        </p>
      </div>
    `,
  }),
};
