import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import Header, { HeaderNav, HeaderNavItem } from './header.component';

export default {
  title: 'AG/Header',
  component: Header,
  decorators: [
    moduleMetadata({
      declarations: [HeaderNav, HeaderNavItem],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Header> = (args: Header) => ({
  template: `<ag-header isSticky="true">
    <ag-header-nav>
      <ag-header-nav-item style="margin-right: 8px;">
        <a style="color: '#333333'; textDecoration: 'none';" href="#">
          Home
        </a>
      </ag-header-nav-item>
      <ag-header-nav-item>
        <a style="color: '#333333'; textDecoration: 'none';" href="#">
          Services
        </a>
      </ag-header-nav-item>
    </ag-header-nav>
  </ag-header>`
})

export const HeaderExample = Template.bind({})
