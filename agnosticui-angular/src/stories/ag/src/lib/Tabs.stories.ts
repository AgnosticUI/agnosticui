import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TabModule } from './tab.module';
import { TabsModule } from './tabs.module';
import Tabs from './tabs.component';

export default {
  title: 'AG—Angular/Tabs',
  component: Tabs,
  decorators: [
    moduleMetadata({
      imports: [TabModule, TabsModule],
    }),
  ],
} as Meta;

const Template: Story<Tabs> = () => ({
  template: `
    <ag-tabs>
      <ag-tab [title]="'Tab 1'">
        Tab 1 content
      </ag-tab>
      <ag-tab title="Tab 2">
        Tab 2 content
      </ag-tab>
    </ag-tabs>
  `,
})

export const TabsExample = Template.bind({})
