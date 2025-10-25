import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "agnosticui-core/select";
import type { SelectProps } from "agnosticui-core/select";

const meta: Meta<SelectProps> = {
  title: "AgnosticUI Lit/Select",
  component: "ag-select",
  argTypes: {
    size: {
      control: "select",
      options: ["", "small", "large"],
      description: "Size variant of the select",
    },
    multiple: { control: "boolean", description: "Enable multiple selection" },
    disabled: { control: "boolean", description: "Disable the select" },
    name: { control: "text", description: "Form name attribute" },
    multipleSize: { control: "number", description: "Visible options for multiple select" },
  },
  args: {
    size: "",
    multiple: false,
    disabled: false,
    name: "tennis-players",
    multipleSize: undefined,
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

export const Default: Story = {
  render: ({ size, multiple, disabled, name }) => html`
    <div style="max-width: 400px;">
      <label for="tennis-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Greatest Tennis Player
      </label>
      <ag-select
        id="tennis-select"
        .size=${size}
        .multiple=${multiple}
        .disabled=${disabled}
        .name=${name}
      >
        <option value="">- Select a player -</option>
        <option value="andre">Andre Agassi</option>
        <option value="serena">Serena Williams</option>
        <option value="roger">Roger Federer</option>
        <option value="mac">John McEnroe</option>
        <option value="martina">Martina Navratilova</option>
        <option value="rafa">Rafael Nadal</option>
        <option value="borg">Bjorn Borg</option>
        <option value="althea">Althea Gibson</option>
      </ag-select>
    </div>
  `,
};

export const BasicSelect: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="basic-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Choose a fruit
      </label>
      <ag-select id="basic-select" name="fruit">
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
      </ag-select>
    </div>
  `,
};

export const SmallSize: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="small-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Small Select
      </label>
      <ag-select id="small-select" .size=${"small"} name="small">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
    </div>
  `,
};

export const LargeSize: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="large-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Large Select
      </label>
      <ag-select id="large-select" .size=${"large"} name="large">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="disabled-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Disabled Select
      </label>
      <ag-select id="disabled-select" .disabled=${true} name="disabled">
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
    </div>
  `,
};

export const MultipleSelect: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="multiple-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Multiple Select (Ctrl/Cmd + Click)
      </label>
      <ag-select
        id="multiple-select"
        .multiple=${true}
        .multipleSize=${4}
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
      </ag-select>
    </div>
  `,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem; max-width: 400px;">
      <div>
        <label for="small" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Small
        </label>
        <ag-select id="small" .size=${"small"}>
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>

      <div>
        <label for="default" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Default
        </label>
        <ag-select id="default">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>

      <div>
        <label for="large" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
          Large
        </label>
        <ag-select id="large" .size=${"large"}>
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </ag-select>
      </div>
    </div>
  `,
};

export const WithChangeHandler: Story = {
  render: () => html`
    <div style="max-width: 400px;">
      <label for="change-select" style="display: block; margin-bottom: 0.5rem; font-weight: 600;">
        Select with Change Handler
      </label>
      <ag-select
        id="change-select"
        name="change"
        @change=${(e: CustomEvent) => {
          const value = e.detail.value;
          alert(`Selected value: ${value}`);
        }}
      >
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </ag-select>
      <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--ag-text-secondary);">
        Select an option to see the change event
      </p>
    </div>
  `,
};
