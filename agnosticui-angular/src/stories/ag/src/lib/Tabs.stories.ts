import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TabModule } from './tab-panel.module';
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

export const Default = () => ({
  template: `<ag-tabs>
      <ag-tab title="Tab 1">
        Tab 1 content
      </ag-tab>
      <ag-tab title="Tab 2">
        Tab 2 content
      </ag-tab>
    </ag-tabs>
  `,
})

export const Large = () => ({
  template: `<ag-tabs size="large">
      <ag-tab title="Tab 1">
        Tab 1 content
      </ag-tab>
      <ag-tab title="Tab 2">
        Tab 2 content
      </ag-tab>
    </ag-tabs>
  `,
})

export const Jumbo = () => ({
  template: `<ag-tabs size="jumbo">
      <ag-tab title="Tab 1">
        Tab 1 content
      </ag-tab>
      <ag-tab title="Tab 2">
        Tab 2 content
      </ag-tab>
    </ag-tabs>
  `,
})
