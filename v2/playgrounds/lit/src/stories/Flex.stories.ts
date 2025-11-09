import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/flex";
import type { FlexContainerProps } from "agnosticui-core/flex";

const meta: Meta<FlexContainerProps> = {
  title: "AgnosticUI Lit/Flex",
  component: "ag-flex-container",
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
      description: "Flex direction",
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
      description: "Flex wrap behavior",
    },
    justify: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"],
      description: "Justify content (main axis alignment)",
    },
    align: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      description: "Align items (cross axis alignment)",
    },
    alignContent: {
      control: "select",
      options: ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "stretch"],
      description: "Align content (multi-line alignment)",
    },
    gap: {
      control: "text",
      description: "Gap between flex items (any valid CSS gap value)",
    },
    inline: {
      control: "boolean",
      description: "Use inline-flex instead of flex",
    },
    reverse: {
      control: "boolean",
      description: "Reverse the direction",
    },
    stretchChildren: {
      control: "boolean",
      description: "Apply flex: 1 1 auto to all children",
    },
  },
  args: {
    direction: "row",
    wrap: "nowrap",
    justify: "flex-start",
    align: "stretch",
    alignContent: "stretch",
    gap: "var(--ag-space-0, 0)",
    inline: false,
    reverse: false,
    stretchChildren: false,
  },
};

export default meta;
type Story = StoryObj<FlexContainerProps>;

export const FlexContainer: Story = {
  render: ({ direction, wrap, justify, align, alignContent, gap, inline, reverse, stretchChildren }) => html`
    <ag-flex-container
      direction=${direction}
      wrap=${wrap}
      justify=${justify}
      align=${align}
      align-content=${alignContent}
      gap=${gap}
      ?inline=${inline}
      ?reverse=${reverse}
      ?stretch-children=${stretchChildren}
    >
      <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
      <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
      <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
    </ag-flex-container>
  `,
};

export const FlexRow: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Basic Row</h3>
        <ag-flex-row gap="1rem">
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Column 1</div>
          <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Column 2</div>
          <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">Column 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Centered Row</h3>
        <ag-flex-row gap="1rem" justify="center">
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Column 1</div>
          <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Column 2</div>
          <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">Column 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Space Between</h3>
        <ag-flex-row justify="space-between">
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Start</div>
          <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Middle</div>
          <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">End</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Reverse Row</h3>
        <ag-flex-row gap="1rem" reverse>
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">1</div>
          <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">2</div>
          <div style="padding: 1rem; background: #fecaca; border: 1px solid #ef4444;">3</div>
        </ag-flex-row>
      </div>
    </div>
  `,
};

export const FlexCol: Story = {
  render: () => html`
    <div style="display: flex; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Basic Column</h3>
        <ag-flex-col gap="1rem" style="min-height: 200px;">
          <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">Row 1</div>
          <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">Row 2</div>
          <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">Row 3</div>
        </ag-flex-col>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Centered Column</h3>
        <ag-flex-col gap="1rem" justify="center" style="min-height: 200px;">
          <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">Row 1</div>
          <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">Row 2</div>
          <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">Row 3</div>
        </ag-flex-col>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Reverse Column</h3>
        <ag-flex-col gap="1rem" reverse style="min-height: 200px;">
          <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">1</div>
          <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">2</div>
          <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">3</div>
        </ag-flex-col>
      </div>
    </div>
  `,
};

export const FlexInline: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Inline Flex (doesn't take full width)</h3>
        <p style="margin: 0 0 0.5rem 0;">Notice how the container only takes as much width as needed:</p>
        <ag-flex-inline gap="0.5rem" style="background: #f3f4f6; padding: 0.5rem;">
          <button style="padding: 0.5rem 1rem;">Button 1</button>
          <button style="padding: 0.5rem 1rem;">Button 2</button>
          <button style="padding: 0.5rem 1rem;">Button 3</button>
        </ag-flex-inline>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Multiple Inline Flex Containers</h3>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <ag-flex-inline gap="0.5rem" style="background: #e0e7ff; padding: 0.5rem;">
            <span style="padding: 0.25rem 0.5rem; background: white;">Tag 1</span>
            <span style="padding: 0.25rem 0.5rem; background: white;">Tag 2</span>
          </ag-flex-inline>
          <ag-flex-inline gap="0.5rem" style="background: #dbeafe; padding: 0.5rem;">
            <span style="padding: 0.25rem 0.5rem; background: white;">Tag 3</span>
            <span style="padding: 0.25rem 0.5rem; background: white;">Tag 4</span>
          </ag-flex-inline>
          <ag-flex-inline gap="0.5rem" style="background: #ddd6fe; padding: 0.5rem;">
            <span style="padding: 0.25rem 0.5rem; background: white;">Tag 5</span>
            <span style="padding: 0.25rem 0.5rem; background: white;">Tag 6</span>
          </ag-flex-inline>
        </div>
      </div>
    </div>
  `,
};

export const GapVariations: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">No Gap</h3>
        <ag-flex-row>
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Small Gap (0.5rem)</h3>
        <ag-flex-row gap="0.5rem">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Medium Gap (1rem)</h3>
        <ag-flex-row gap="1rem">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Large Gap (2rem)</h3>
        <ag-flex-row gap="2rem">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Two-Value Gap (row-gap column-gap)</h3>
        <ag-flex-row gap="2rem 0.5rem" wrap="wrap" style="max-width: 500px;">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Item 3</div>
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b;">Item 4</div>
          <div style="padding: 1rem; background: #fed7aa; border: 1px solid #ea580c;">Item 5</div>
        </ag-flex-row>
      </div>
    </div>
  `,
};

export const StretchChildren: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Without Stretch (default)</h3>
        <ag-flex-row gap="1rem">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Short</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Medium text</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Longer text content</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">With Stretch Children</h3>
        <ag-flex-row gap="1rem" stretch-children>
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1;">Short</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6;">Medium text</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6;">Longer text content</div>
        </ag-flex-row>
      </div>
    </div>
  `,
};

export const WrapBehavior: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">No Wrap (default) - items overflow</h3>
        <ag-flex-row gap="1rem" style="max-width: 400px; background: #f3f4f6; padding: 1rem;">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1; min-width: 150px;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6; min-width: 150px;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6; min-width: 150px;">Item 3</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Wrap - items wrap to next line</h3>
        <ag-flex-row gap="1rem" wrap="wrap" style="max-width: 400px; background: #f3f4f6; padding: 1rem;">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1; min-width: 150px;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6; min-width: 150px;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6; min-width: 150px;">Item 3</div>
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b; min-width: 150px;">Item 4</div>
        </ag-flex-row>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Wrap Reverse</h3>
        <ag-flex-row gap="1rem" wrap="wrap-reverse" style="max-width: 400px; background: #f3f4f6; padding: 1rem;">
          <div style="padding: 1rem; background: #e0e7ff; border: 1px solid #6366f1; min-width: 150px;">Item 1</div>
          <div style="padding: 1rem; background: #dbeafe; border: 1px solid #3b82f6; min-width: 150px;">Item 2</div>
          <div style="padding: 1rem; background: #ddd6fe; border: 1px solid #8b5cf6; min-width: 150px;">Item 3</div>
          <div style="padding: 1rem; background: #fef3c7; border: 1px solid #f59e0b; min-width: 150px;">Item 4</div>
        </ag-flex-row>
      </div>
    </div>
  `,
};

export const NestedFlexContainers: Story = {
  render: () => html`
    <ag-flex-col gap="1rem" style="padding: 1rem; background: #f9fafb;">
      <ag-flex-row justify="space-between" style="background: #e0e7ff; padding: 1rem;">
        <div style="font-weight: bold;">Header Left</div>
        <div style="font-weight: bold;">Header Right</div>
      </ag-flex-row>

      <ag-flex-row gap="1rem" style="flex: 1;">
        <ag-flex-col gap="0.5rem" style="flex: 1; background: #dbeafe; padding: 1rem;">
          <div style="font-weight: bold;">Sidebar</div>
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </ag-flex-col>

        <ag-flex-col gap="1rem" style="flex: 3; background: white; padding: 1rem;">
          <h2 style="margin: 0;">Main Content</h2>
          <p style="margin: 0;">This demonstrates nested flex containers creating a layout.</p>
          <ag-flex-inline gap="0.5rem">
            <button style="padding: 0.5rem 1rem;">Action 1</button>
            <button style="padding: 0.5rem 1rem;">Action 2</button>
            <button style="padding: 0.5rem 1rem;">Action 3</button>
          </ag-flex-inline>
        </ag-flex-col>
      </ag-flex-row>

      <ag-flex-row justify="center" style="background: #e0e7ff; padding: 1rem;">
        <div>Footer Content - Centered</div>
      </ag-flex-row>
    </ag-flex-col>
  `,
};

export const AliasesStackAndGroup: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Stack (alias for FlexCol)</h3>
        <p style="margin: 0 0 0.5rem 0; color: #6b7280;">Familiar to Mantine/Chakra users</p>
        <ag-flex-col gap="1rem" style="max-width: 300px;">
          <div style="padding: 1rem; background: #dcfce7; border: 1px solid #22c55e;">Stacked Item 1</div>
          <div style="padding: 1rem; background: #d1fae5; border: 1px solid #10b981;">Stacked Item 2</div>
          <div style="padding: 1rem; background: #ccfbf1; border: 1px solid #14b8a6;">Stacked Item 3</div>
        </ag-flex-col>
      </div>

      <div>
        <h3 style="margin: 0 0 0.5rem 0;">Group (alias for FlexRow)</h3>
        <p style="margin: 0 0 0.5rem 0; color: #6b7280;">Familiar to Mantine users</p>
        <ag-flex-row gap="1rem">
          <button style="padding: 0.5rem 1rem;">Primary</button>
          <button style="padding: 0.5rem 1rem;">Secondary</button>
          <button style="padding: 0.5rem 1rem;">Tertiary</button>
        </ag-flex-row>
      </div>
    </div>
  `,
};
