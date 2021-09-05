import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HeaderModule } from './header.module';
import HeaderComponent from './header.component';

export default {
  title: 'AG/Header',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      imports: [HeaderModule],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
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
