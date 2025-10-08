Create MyComponent.stories.ts use the following pattern:

```ts
import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { fn } from "storybook/test";
import MyComponent from "agnosticui-core/component";

const meta = {
  title: "AgnosticUI/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "MyComponent",
  },
};
```
