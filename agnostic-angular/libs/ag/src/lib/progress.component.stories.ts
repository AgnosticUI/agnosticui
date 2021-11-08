import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { AgModule } from './ag.module';
import { ProgressComponent } from './progress.component';

export default {
  title: 'AG—Angular (Beta)/Progress',
  component: ProgressComponent,

  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: var(--agnostic-font-family)">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  props: args,
});

export const Default = Template.bind({});

export const WithProps = Template.bind({});
WithProps.args = {
  value: 5,
  max: 10,
};

export const WithCSS = Template.bind({});
WithCSS.args = {
  css: 'foo bar baz',
  value: 33,
};
