import { Story, Meta } from '@storybook/angular/types-6-0';
import { action } from '@storybook/addon-actions';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

import Tabs from './tabs.component';
import Tab from './tab.component';

export default {
  title: 'AG/Tabs',
  component: Tabs,
  decorators: [
    moduleMetadata({
      declarations: [Tab],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Tabs> = (args: Tabs) => ({
  template: `
    <tabs>
      <tab [tabTitle]="'Tab 1'">
        Tab 1 content
      </tab>
      <tab tabTitle="Tab 2">
        Tab 2 content
      </tab>
    </tabs>
  `,
})

export const TabsExample = Template.bind({})