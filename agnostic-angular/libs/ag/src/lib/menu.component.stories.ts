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
};

const Template: Story<MenuComponent> = (args: MenuComponent) => ({
  props: {
    action: {
      onSelectionChange: actions.onSelectionChange,
      onTriggerClick: actions.onTriggerClick,
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
    menuItems: args.menuItems || [
      { label: 'Menu Item 1', isDisabled: false },
      { label: 'Menu Item 2', isDisabled: true },
      { label: 'Menu Item 3' },
      { label: 'Menu Item 4' },
    ],
  },
  template: `
  <ag-menu
    (triggerClick)="action.onTriggerClick($event)"
    (selectionChange)="action.onSelectionChange($event)"
  ></ag-menu>`,
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
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const noCloseOnOutsideClick = Template.bind({});
noCloseOnOutsideClick.args = {
  closeOnClickOutside: false,
  id: 'noClose',
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const noCloseOnSelect = Template.bind({});
noCloseOnSelect.args = {
  closeOnSelect: false,
  id: 'noClose',
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const noCloseOnSelectOrClickOutside = Template.bind({});
noCloseOnSelectOrClickOutside.args = {
  closeOnSelect: false,
  closeOnClickOutside: false,
  id: 'noClose',
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const small = Template.bind({});
small.args = {
  size: 'small',
  id: 'noClose',
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const large = Template.bind({});
large.args = {
  size: 'large',
  id: 'noClose',
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const rounded = Template.bind({});
rounded.args = {
  id: 'noClose',
  isRounded: true,
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const bordered = Template.bind({});
bordered.args = {
  id: 'noClose',
  isBordered: true,
  menuTitle: 'Players',
  menuItems: [
    { label: 'Menu Item 1', isDisabled: false },
    { label: 'Menu Item 2', isDisabled: true },
    { label: 'Menu Item 3' },
    { label: 'Menu Item 4' },
  ],
};

export const koala = Template.bind({});
koala.args = {
  id: 'eatMoreEucalyptus',
  isBordered: true,
  isRounded: true,
  menuTitle: 'Select Food',
  icon: '🐨',
  menuItems: [
    { label: 'Eucalyptus 1' },
    { label: 'Eucalyptus 2' },
    { label: 'Eucalyptus 3' },
    { label: 'Eucalyptus 4' },
  ],
};
