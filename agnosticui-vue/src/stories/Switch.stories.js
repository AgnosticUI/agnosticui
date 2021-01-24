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

export const SwitchPrechecked = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="4" isChecked="true" label="Switch prechecked" size="large" />`,
});

export const SwitchDisabled = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="5" label="Switch disabled" disabled="true" />`,
});

export const SwitchAction = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="99" label="Switch action" isAction="true" />`,
});

export const SwitchBorder = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="6" label="Switch bordered" isBordered="true" />`,
});

export const SwitchBorderAction = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="7" label="Switch bordered action" isBordered="true" isAction="true" />`,
});

export const SwitchLabelRight = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="8" labelPosition="right" label="Switch with label on right" />`,
});

export const SwitchLabelRightBorder = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="9" isBordered="true" labelPosition="right" label="Switch with label on right" />`,
});

export const SwitchLabelRightAction = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="10" isAction="true" labelPosition="right" label="Switch with label right action" />`,
});

export const SwitchLabelRightActionBorder = () => ({
  components: { AgSwitch },
  template: `<AgSwitch id="11" isAction="true" isBordered="true" labelPosition="right" label="Switch with label right action" />`,
});

export const SwitchLabelRightActionBorderDisabled = () => ({
  components: { AgSwitch },
  template: `<AgSwitch disabled="true" id="12" isAction="true" isBordered="true" labelPosition="right" label="Switch with label right action" />`,
});
