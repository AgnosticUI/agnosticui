import {
  componentWrapperDecorator,
  moduleMetadata,
  Story,
} from '@storybook/angular';
import { Meta } from '@storybook/angular/types-6-0';
import { AgModule } from './ag.module';
import { MenuComponent } from './menu.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'AG—Angular (Beta)/Menu',
  component: MenuComponent,
  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: var(--agnostic-font-family-body); line-height: 1.4; font-size: var(--agnostic-body);">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
    }),
  ],
} as Meta;

const actions = {
  onSelectionChange: action('onSelectionChange'),
  onTriggerClick: action('onTriggerClick'),
  onItemClick: action('onItemClick'),
  onItemKeydown: action('onItemKeydown'),
};

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  props: {
    action: {
      onSelectionChange: actions.onSelectionChange,
      onTriggerClick: actions.onTriggerClick,
      onItemClick: actions.onItemClick,
    },
    closeOnSelect: args.closeOnSelect == null ? true : args.closeOnSelect,
    closeOnClickOutside:
      args.closeOnClickOutside == null ? false : args.closeOnClickOutside,
    icon: args.icon || '▾',
    isBordered: args.isBordered == null ? false : args.isBordered,
    isRounded: args.isRounded == null ? false : args.isRounded,
    id: args.id || 'sup',
    menuTitle: args.menuTitle || 'Players',
    size: args.size || '',
    selectedMenuItem: null,
  },
  template: `
  <ag-menu
    class="my-menu"
    menuTitle="Default Menu"
    (triggerClick)="action.onTriggerClick($event)"
    (selectionChange)="action.onSelectionChange($event)"
  >
    <!-- Mark the Template for the menu components -->
    <ng-template agMenuContent>
      <button
        ag-menu-item
        *ngFor="let item of ['Item 1', 'Item 2', 'Item 3']; let idx = index"
        [isSelected]="selectedMenuItem === idx"
        [disabled]="false"
        (keydown)="action.onItemKeydown($event)"
        (click)="selectedMenuItem = idx; action.onItemClick($event)"
      >
        {{ item }} 😅😅
      </button>
    </ng-template>
  </ag-menu>
`,
});

// Should use default layout/config
export const All = Template.bind({});
All.args = {
  closeOnSelect: true,
  closeOnClickOutside: true,
  icon: '▾',
  id: 'agnosticUiToTheMoon',
  isBordered: false,
  isRounded: false,
  menuTitle: 'Default Menu Appearance',
  size: '',
};

export const noCloseOnOutsideClick = Template.bind({});
noCloseOnOutsideClick.args = {
  closeOnClickOutside: false,
  id: 'noClose',
  menuTitle: 'Players',
};

export const noCloseOnSelect = Template.bind({});
noCloseOnSelect.args = {
  closeOnSelect: false,
  id: 'noClose',
  menuTitle: 'Players',
};

export const noCloseOnSelectOrClickOutside = Template.bind({});
noCloseOnSelectOrClickOutside.args = {
  closeOnSelect: false,
  closeOnClickOutside: false,
  id: 'noClose',
  menuTitle: 'Players',
};

export const small = Template.bind({});
small.args = {
  size: 'small',
  id: 'noClose',
  menuTitle: 'Players',
};

export const large = Template.bind({});
large.args = {
  size: 'large',
  id: 'noClose',
  menuTitle: 'Players',
};

export const rounded = Template.bind({});
rounded.args = {
  id: 'noClose',
  isRounded: true,
  menuTitle: 'Players',
};

export const bordered = Template.bind({});
bordered.args = {
  id: 'noClose',
  isBordered: true,
  menuTitle: 'Players',
};

export const koala = Template.bind({});
koala.args = {
  id: 'eatMoreEucalyptus',
  isBordered: true,
  isRounded: true,
  menuTitle: 'Select Food',
  icon: '🐨',
};
