import AgnosticCard from "../components/Card.vue";

export default {
  title: "AG—Vue (Beta)/Card",
  component: AgnosticCard,
  argTypes: {
    isSkinned: { control: "boolean" },
    isStacked: { control: "boolean" },
    css: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { AgnosticCard },
  template:
    '<agnostic-card v-bind="$props"><div style="padding: 24px;">First div</div><div style="padding: 24px;">Second div</div></agnostic-card>',
});

export const CardDefault = Template.bind({});
CardDefault.args = {};

export const CardStacked = Template.bind({});
CardStacked.args = {
  isStacked: true,
};

export const CardAnimated = Template.bind({});
CardAnimated.args = {
  isAnimated: true,
};

export const CardUnskinned = Template.bind({});
CardUnskinned.args = {
  isSkinned: false,
};
