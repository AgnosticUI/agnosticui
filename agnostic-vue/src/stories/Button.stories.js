import Button from './Button.vue';
import ButtonsDisabled from './ButtonsDisabledTests.vue';
import ButtonTests from './ButtonTests.vue';

export default {
  title: "AG—Vue (Beta)/Button",
  component: Button
};

// Storybook does not appear to render code snippets for Vue/Svelte automagically
// as well as it does for React. I've logged: https://github.com/storybookjs/storybook/issues/12495
// but it seems in React, the fact that we can have JSX within foo.stories.js helps
// that cause; but in Vue/Svelte, we don't have .vue or .svelte files and I don't see
// some sort of Storybook custom vue loader. So, my closest success has been to use the
// `docs.source.code` mechanism you see below. It's not ideal since it requires duplication
// of code which could likely diverge, but it's the best comprimise I've found so far.
export const Buttons = () => ({
  title: "Buttons",
  components: { ButtonTests },
  template: `<button-tests />`
});
Buttons.parameters = {
  docs: {
    source: {
      code: `
<Button @click="clickHandler">Go</Button>
<Button :isBordered="true">Go</Button>
<Button isBlank>Blank</Button>
<Button isLink>Link</Button>
<Button isLink :isSkinned="false">Link unskinned</Button>
<Button isBlock>Go</Button>
<Button isRounded>Go</Button>
<Button isRaised isRounded>Go</Button>
<Button isBordered isRounded>Go</Button>
<Button mode="primary">Go</Button>
<Button mode="primary" :isBordered="true">Go</Button>
<Button mode="primary" isBlank>Go</Button>
<Button mode="primary" isBlock>Go</Button>
<Button mode="primary" isRounded>Go</Button>
<Button mode="primary" isRaised isRounded>Go</Button>
<Button mode="primary" isBordered isRounded>Go</Button>
<Button mode="secondary">Go</Button>
<Button mode="secondary" :isBordered="true">Go</Button>
<Button mode="secondary" isBlank>Go</Button>
<Button mode="secondary" isBlock>Go</Button>
<Button mode="secondary" isRounded>Go</Button>
<Button mode="secondary" isRaised isRounded>Go</Button>
<Button mode="secondary" isBordered isRounded>Go</Button>
<Button :isDisabled="true">Go</Button>
<Button mode="primary" isDisabled>Go</Button>
<Button mode="secondary" isDisabled>Go</Button>
<Button size="small">Go</Button>
<Button size="large">Go</Button>
<Button :isSkinned="false">No Skin</Button>
<Button css="foo bar baz">Custom CSS Classes (inspect to see 'foo bar baz')</Button>
      `
    }
  }
};

export const ButtonTypesDisabled = () => ({
  title: 'Buttons Disabled',
  components: { ButtonsDisabled },
  template: `<buttons-disabled />`,
});
ButtonTypesDisabled.parameters = {
  docs: {
    source: {
      code: `
<Button isDisabled>Disabled</Button>
<Button mode="primary" isDisabled>Primary Disabled</Button>
<Button mode="secondary" isDisabled>Secondary Disabled</Button>
<Button mode="secondary" isBordered isDisabled>Secondary Bordered Disabled</Button>
        `
    }
  },
}

