import AgSwitch from "./Switch.vue";

const wrapper = () => {
  return {
    template: '<div style="padding: 2rem;"><story/></div>',
  };
};

export default {
  title: "Switch",
  decorators: [wrapper],
  components: [AgSwitch],
};

export const SwitchSmall = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="1" label="Switch small label" size="small" />`,
});

export const SwitchDefault = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="2" label="Switch default label" />`,
});

export const SwitchLarge = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="3" label="Switch large label" size="large" />`,
});
