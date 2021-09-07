import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ProgressModule } from './progress.module';
import { ProgressComponent } from './progress.component';

export default {
  title: 'AG/Progress',
  component: ProgressComponent,

  decorators: [
    moduleMetadata({
      imports: [ProgressModule],
    }),
  ],
} as Meta;

const Template: Story<ProgressComponent> = (args: ProgressComponent) => ({
  props: args,
})

export const Default = Template.bind({})


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
