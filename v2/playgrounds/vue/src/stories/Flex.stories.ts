import type { Meta, StoryObj } from '@storybook/vue3-vite';
import {
  VueFlexContainer,
  VueFlexRow,
  VueFlexCol,
  VueFlexInline,
} from '../../../../lib/src/components/Flex/vue';

const meta = {
  title: 'AgnosticUI Vue/Flex',
  component: VueFlexContainer,
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      description: 'Flex direction',
    },
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse'],
      description: 'Flex wrap behavior',
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      description: 'Justify content (main axis alignment)',
    },
    align: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      description: 'Align items (cross axis alignment)',
    },
    alignContent: {
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
      description: 'Align content (multi-line alignment)',
    },
    gap: {
      control: 'text',
      description: 'Gap between flex items (any valid CSS gap value)',
    },
    inline: {
      control: 'boolean',
      description: 'Use inline-flex instead of flex',
    },
    reverse: {
      control: 'boolean',
      description: 'Reverse the direction',
    },
    stretchChildren: {
      control: 'boolean',
      description: 'Apply flex: 1 1 auto to all children',
    },
  },
  args: {
    direction: 'row',
    wrap: 'nowrap',
    justify: 'flex-start',
    align: 'stretch',
    alignContent: 'stretch',
    gap: 'var(--ag-space-0, 0)',
    inline: false,
    reverse: false,
    stretchChildren: false,
  },
} satisfies Meta<typeof VueFlexContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FlexContainer: Story = {
  render: (args) => ({
    components: { VueFlexContainer },
    setup() {
      return { args };
    },
    template: `
      <VueFlexContainer v-bind="args">
        <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
        <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
        <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
      </VueFlexContainer>
    `,
  }),
};

export const FlexRow: Story = {
  render: () => ({
    components: { VueFlexRow },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Basic Row</h3>
          <VueFlexRow gap="1rem">
            <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Column 1</div>
            <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Column 2</div>
            <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">Column 3</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Centered Row</h3>
          <VueFlexRow gap="1rem" justify="center">
            <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Column 1</div>
            <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Column 2</div>
            <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">Column 3</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Space Between</h3>
          <VueFlexRow justify="space-between">
            <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Start</div>
            <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Middle</div>
            <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">End</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Reverse Row</h3>
          <VueFlexRow gap="1rem" :reverse="true">
            <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">1</div>
            <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">2</div>
            <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">3</div>
          </VueFlexRow>
        </div>
      </div>
    `,
  }),
};

export const FlexCol: Story = {
  render: () => ({
    components: { VueFlexCol },
    template: `
      <div style="display: flex; gap: 2rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Basic Column</h3>
          <VueFlexCol gap="1rem" style="min-height: 200px;">
            <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">Row 1</div>
            <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">Row 2</div>
            <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">Row 3</div>
          </VueFlexCol>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Centered Column</h3>
          <VueFlexCol gap="1rem" justify="center" style="min-height: 200px;">
            <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">Row 1</div>
            <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">Row 2</div>
            <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">Row 3</div>
          </VueFlexCol>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Reverse Column</h3>
          <VueFlexCol gap="1rem" :reverse="true" style="min-height: 200px;">
            <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">1</div>
            <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">2</div>
            <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">3</div>
          </VueFlexCol>
        </div>
      </div>
    `,
  }),
};

export const FlexInline: Story = {
  render: () => ({
    components: { VueFlexInline },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Inline Flex (doesn't take full width)</h3>
          <p style="margin: 0 0 0.5rem 0;">Notice how the container only takes as much width as needed:</p>
          <VueFlexInline gap="0.5rem" style="background: #f3f4f6; padding: 0.5rem;">
            <button style="padding: 0.5rem 1rem;">Button 1</button>
            <button style="padding: 0.5rem 1rem;">Button 2</button>
            <button style="padding: 0.5rem 1rem;">Button 3</button>
          </VueFlexInline>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Multiple Inline Flex Containers</h3>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <VueFlexInline gap="0.5rem" style="background: #e0e7ff; padding: 0.5rem;">
              <span style="padding: 0.25rem 0.5rem; background: white;">Tag 1</span>
              <span style="padding: 0.25rem 0.5rem; background: white;">Tag 2</span>
            </VueFlexInline>
            <VueFlexInline gap="0.5rem" style="background: #dbeafe; padding: 0.5rem;">
              <span style="padding: 0.25rem 0.5rem; background: white;">Tag 3</span>
              <span style="padding: 0.25rem 0.5rem; background: white;">Tag 4</span>
            </VueFlexInline>
            <VueFlexInline gap="0.5rem" style="background: #ddd6fe; padding: 0.5rem;">
              <span style="padding: 0.25rem 0.5rem; background: white;">Tag 5</span>
              <span style="padding: 0.25rem 0.5rem; background: white;">Tag 6</span>
            </VueFlexInline>
          </div>
        </div>
      </div>
    `,
  }),
};

export const GapVariations: Story = {
  render: () => ({
    components: { VueFlexRow },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">No Gap</h3>
          <VueFlexRow>
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Small Gap (0.5rem)</h3>
          <VueFlexRow gap="0.5rem">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Medium Gap (1rem)</h3>
          <VueFlexRow gap="1rem">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Large Gap (2rem)</h3>
          <VueFlexRow gap="2rem">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
          </VueFlexRow>
        </div>
      </div>
    `,
  }),
};

export const StretchChildren: Story = {
  render: () => ({
    components: { VueFlexRow },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Without Stretch (default)</h3>
          <VueFlexRow gap="1rem">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Short</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Medium text</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Longer text content</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">With Stretch Children</h3>
          <VueFlexRow gap="1rem" :stretch-children="true">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Short</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Medium text</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Longer text content</div>
          </VueFlexRow>
        </div>
      </div>
    `,
  }),
};

export const WrapBehavior: Story = {
  render: () => ({
    components: { VueFlexRow },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div>
          <h3 style="margin: 0 0 0.5rem 0;">No Wrap (default) - items overflow</h3>
          <VueFlexRow gap="1rem" style="max-width: 400px; background: #f3f4f6; padding: 1rem;">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1; min-width: 150px;">Item 1</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6; min-width: 150px;">Item 2</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6; min-width: 150px;">Item 3</div>
          </VueFlexRow>
        </div>

        <div>
          <h3 style="margin: 0 0 0.5rem 0;">Wrap - items wrap to next line</h3>
          <VueFlexRow gap="1rem" wrap="wrap" style="max-width: 400px; background: #f3f4f6; padding: 1rem;">
            <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1; min-width: 150px;">Item 1</div>
            <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6; min-width: 150px;">Item 2</div>
            <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6; min-width: 150px;">Item 3</div>
            <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b; min-width: 150px;">Item 4</div>
          </VueFlexRow>
        </div>
      </div>
    `,
  }),
};

export const NestedFlexContainers: Story = {
  render: () => ({
    components: { VueFlexCol, VueFlexRow, VueFlexInline },
    template: `
      <VueFlexCol gap="1rem" style="padding: 1rem; background: #f9fafb;">
        <VueFlexRow justify="space-between" style="background: #e0e7ff; padding: 1rem;">
          <div style="font-weight: bold;">Header Left</div>
          <div style="font-weight: bold;">Header Right</div>
        </VueFlexRow>

        <VueFlexRow gap="1rem" style="flex: 1;">
          <VueFlexCol gap="0.5rem" style="flex: 1; background: #dbeafe; padding: 1rem;">
            <div style="font-weight: bold;">Sidebar</div>
            <div>Link 1</div>
            <div>Link 2</div>
            <div>Link 3</div>
          </VueFlexCol>

          <VueFlexCol gap="1rem" style="flex: 3; background: white; padding: 1rem;">
            <h2 style="margin: 0;">Main Content</h2>
            <p style="margin: 0;">This demonstrates nested flex containers creating a layout.</p>
            <VueFlexInline gap="0.5rem">
              <button style="padding: 0.5rem 1rem;">Action 1</button>
              <button style="padding: 0.5rem 1rem;">Action 2</button>
              <button style="padding: 0.5rem 1rem;">Action 3</button>
            </VueFlexInline>
          </VueFlexCol>
        </VueFlexRow>

        <VueFlexRow justify="center" style="background: #e0e7ff; padding: 1rem;">
          <div>Footer Content - Centered</div>
        </VueFlexRow>
      </VueFlexCol>
    `,
  }),
};
