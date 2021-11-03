import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { TabsComponent } from './tabs.component';
import { AgModule } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/Tabs',
  component: TabsComponent,
  decorators: [
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

export const Default = () => ({
  template: `<ag-tabs>
      <ag-tab-panel panelId="panel1" tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel2" tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  `,
});

export const Vertical = () => ({
  template: `<ag-tabs [isVerticalOrientation]="true">
      <ag-tab-panel panelId="panel3" tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel4" tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters) (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  `,
});

export const Disabled = () => ({
  template: `<ag-tabs [isDisabled]="true">
      <ag-tab-panel panelId="panel5" tabButtonTitle="Tab 1">
        Tab 1 disabled
      </ag-tab-panel>
      <ag-tab-panel panelId="panel6" tabButtonTitle="Tab 2">
        Tab 2 disabled
      </ag-tab-panel>
    </ag-tabs>
  `,
});

export const Large = () => ({
  template: `<ag-tabs size="large">
      <ag-tab-panel panelId="panel7" tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel8" tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  `,
});

export const Jumbo = () => ({
  template: `<ag-tabs size="jumbo">
      <ag-tab-panel panelId="panel9" tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel10" tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
    </ag-tabs>
  `,
});

export const DisabledOptions = () => ({
  template: `<ag-tabs size="jumbo" [disabledOptions]="['Tab 2', 'Tab 4']">
      <ag-tab-panel panelId="panel11" tabButtonTitle="Tab 1">
        Tab 1 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel12" tabButtonTitle="Tab 2">
        Tab 2 content (no padding or margins so consumer can control desired gutters)
      </ag-tab-panel>
      <ag-tab-panel panelId="panel13" tabButtonTitle="Tab 3">
        Tab 3 content
      </ag-tab-panel>
      <ag-tab-panel panelId="panel14" tabButtonTitle="Tab 4">
        Tab 4 content
      </ag-tab-panel>
      <ag-tab-panel panelId="panel15" tabButtonTitle="Tab 5">
        Tab 5 content
      </ag-tab-panel>
    </ag-tabs>
  `,
});
export const WithTabButtonTemplate = () => ({
  template: `<ag-tabs>
    <ng-template #tabButtonTemplate let-panel let-idx="index">
      <button #tabButton
        role="tab"
        [attr.disabled]="
          isDisabled || disabledOptions?.includes(panel.tabButtonTitle)
            ? true
            : null
        "
        [class.active]="panel.isActive"
        [attr.aria-controls]="panel.panelId"
        [attr.aria-selected]="panel.isActive"
        [attr.tab-index]="panel.isActive ? 0 : -1"
        style="{{idx > 0 ? 'background: none; border: none; margin-left: -1px' : 'background: none; border: none;'}}"
      >
        <ag-button
          type="faux"
          [isBordered]="true"
          mode="primary"

        >
          {{ panel.tabButtonTitle }}
        </ag-button>
      </button>
    </ng-template>
    <ag-tab-panel panelId="panel16" tabButtonTitle="Tab 1">
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
    <ag-tab-panel panelId="panel17" tabButtonTitle="Tab 2">
      Tab 2 content (no padding or margins so consumer can control desired gutters)
    </ag-tab-panel>
  </ag-tabs>
  `,
});
