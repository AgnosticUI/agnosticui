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
  template: `<ag-progress></ag-progress>`
})

export const ProgressExample = Template.bind({})
