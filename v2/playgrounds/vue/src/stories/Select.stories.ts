import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VueSelect } from '../../../../lib/src/components/Select/vue';

const meta = {
  title: 'AgnosticUI Vue/Select',
  component: VueSelect,
  argTypes: {
    size: {
      control: 'select',
      options: ['', 'small', 'large'],
      description: 'Size variant of the select',
    },
    multiple: { control: 'boolean', description: 'Enable multiple selection' },
    disabled: { control: 'boolean', description: 'Disable the select' },
    name: { control: 'text', description: 'Form name attribute' },
    multipleSize: { control: 'number', description: 'Visible options for multiple select' },
  },
  args: {
    size: '',
    multiple: false,
    disabled: false,
    name: 'tennis-players',
    multipleSize: undefined,
  },
} satisfies Meta<typeof VueSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { VueSelect },
    setup() {
      return { args };
    },
    template: `
      <div style="max-width: 400px;">
        <label for="tennis-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Greatest Tennis Player
        </label>
        <VueSelect id="tennis-select" v-bind="args">
          <option value="">- Select a player -</option>
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const BasicSelect: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="basic-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Choose a fruit
        </label>
        <VueSelect id="basic-select" name="fruit">
          <option value="">Select a fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="grape">Grape</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const SmallSize: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="small-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Small Select
        </label>
        <VueSelect id="small-select" size="small" name="small">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const LargeSize: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="large-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Large Select
        </label>
        <VueSelect id="large-select" size="large" name="large">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="disabled-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Disabled Select
        </label>
        <VueSelect id="disabled-select" :disabled="true" name="disabled">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const MultipleSelect: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="max-width: 400px;">
        <label for="multiple-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Multiple Select (Ctrl/Cmd + Click)
        </label>
        <VueSelect
          id="multiple-select"
          :multiple="true"
          :multiple-size="4"
          name="multiple"
        >
          <option value="andre">Andre Agassi</option>
          <option value="serena">Serena Williams</option>
          <option value="roger">Roger Federer</option>
          <option value="mac">John McEnroe</option>
          <option value="martina">Martina Navratilova</option>
          <option value="rafa">Rafael Nadal</option>
          <option value="borg">Bjorn Borg</option>
          <option value="althea">Althea Gibson</option>
        </VueSelect>
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { VueSelect },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
        <div>
          <label for="small" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
            Small
          </label>
          <VueSelect id="small" size="small">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </VueSelect>
        </div>

        <div>
          <label for="default" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
            Default
          </label>
          <VueSelect id="default">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </VueSelect>
        </div>

        <div>
          <label for="large" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
            Large
          </label>
          <VueSelect id="large" size="large">
            <option value="">Select an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </VueSelect>
        </div>
      </div>
    `,
  }),
};

export const WithChangeHandler: Story = {
  render: () => ({
    components: { VueSelect },
    setup() {
      const handleChange = (e: CustomEvent) => {
        const value = e.detail.value;
        alert(`Selected value: ${value}`);
      };
      return { handleChange };
    },
    template: `
      <div style="max-width: 400px;">
        <label for="change-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Select with Change Handler
        </label>
        <VueSelect
          id="change-select"
          name="change"
          @change="handleChange"
        >
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </VueSelect>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
          Select an option to see the change event
        </p>
      </div>
    `,
  }),
};
