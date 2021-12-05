import AgnosticCard from "../components/Card.vue";

export default {
  title: "AG—Vue (Beta)/Card",
  component: AgnosticCard,
};

const Template = (args) => ({
  components: { AgnosticCard },
  setup() {
    return { args };
  },
  template:
    '<agnostic-card v-bind="args"><div style="padding: 24px;">First div</div><div style="padding: 24px;">Second div</div></agnostic-card>',
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
