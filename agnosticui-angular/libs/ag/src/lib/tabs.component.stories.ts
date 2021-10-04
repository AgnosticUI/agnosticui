import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TabPanelModule } from './tab-panel.module';
import { TabsModule } from './tabs.module';
import { TabsComponent } from './tabs.component';
import { ButtonModule } from './button.module';

export default {
  title: 'AG—Angular/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule, TabPanelModule, TabsModule],
    }),
  ],
} as Meta;


export const Default = () => ({
  template: `<ag-tabs>
      <ag-tab-panel title="Tab 1">
        Tab 1 content
      </ag-tab-panel>
      <ag-tab-panel title="Tab 2">
        Tab 2 content
      </ag-tab-panel>
    </ag-tabs>
  `,
})

export const Large = () => ({
  template: `<ag-tabs size="large">
      <ag-tab-panel title="Tab 1">
        Tab 1 content
      </ag-tab-panel>
      <ag-tab-panel title="Tab 2">
        Tab 2 content
      </ag-tab-panel>
    </ag-tabs>
  `,
})

export const Jumbo = () => ({
  template: `<ag-tabs size="jumbo">
      <ag-tab-panel title="Tab 1">
        Tab 1 content
      </ag-tab-panel>
      <ag-tab-panel title="Tab 2">
        Tab 2 content
      </ag-tab-panel>
    </ag-tabs>
  `,
})

export const WithTabButtonTemplate = () => ({
  template: `<ag-tabs>
    <ng-template #tabButtonTemplate let-tab let-idx="index">
      <div style="{{idx > 0 ? 'margin-left: -1px' : undefined}}">
        <ag-button
          type="faux"
          [isBordered]="true"
          mode="primary"
          role="tab"
          [attr.aria-selected]="tab.isActive"
        >
          {{ tab.title }}
        </ag-button>
      </div>
    </ng-template>
      <ag-tab-panel title="Tab 1">
        <p>Custom tab buttons can be achieved by using your own button (which can be AgnosticUI Buttons) using
        <i>ngTemplateOutlet</i> of <i>#tabButtonTemplate</i> as we have done here.</p>
        <br />
        <p>Note, that it's important to pass the <i>type="faux"</i> prop if you use an AgnosticUI Button (or just use
        a <i>div</i> if you're making your own). Ultimately, we want a <i>div</i> that is styled like a button.
        This "tab button div" will get wrapped internally by <i>ag-tabs</i> with a button of its own. Doing this
        prevents an a11y violation of nesting focusable elements.</p>
        <br />
        <p>You will also want to give these buttons the role of <i>tab</i> and utilize the <i>aria-selected</i>
        attribute as we've done here (TODO -- link to GitHub source).</p>
      </ag-tab-panel>
      <ag-tab-panel title="Tab 2">
        Tab 2 content
      </ag-tab-panel>
    </ag-tabs>
  `,
});
