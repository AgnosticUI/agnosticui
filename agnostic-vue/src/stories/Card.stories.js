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

export const CardBorder = Template.bind({});
CardBorder.args = {
  isBorder: true,
};

export const CardBorderRounded = Template.bind({});
CardBorderRounded.args = {
  isBorder: true,
  isRounded: true,
};

export const CardStackedBorder = Template.bind({});
CardStackedBorder.args = {
  isBorder: true,
  isStacked: true,
};

export const CardStackedShadow = Template.bind({});
CardStackedShadow.args = {
  isShadow: true,
  isStacked: true,
};

export const CardStackedShadowAnimated = Template.bind({});
CardStackedShadowAnimated.args = {
  isStacked: true,
  isShadow: true,
  isAnimated: true,
};

export const CardSuccess = Template.bind({});
CardSuccess.args = {
  isStacked: true,
  type: "success",
};

export const CardInfo = Template.bind({});
CardInfo.args = {
  isStacked: true,
  type: "info",
};

export const CardWarning = Template.bind({});
CardWarning.args = {
  isStacked: true,
  type: "warning",
};

export const CardError = Template.bind({});
CardError.args = {
  isStacked: true,
  type: "error",
};

export const CardUnskinned = Template.bind({});
CardUnskinned.args = {
  isSkinned: false,
};

export const CardCustomCSS = Template.bind({});
CardCustomCSS.args = {
  css: "foo-bar",
};
