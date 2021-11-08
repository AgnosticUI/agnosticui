import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { AgModule } from './ag.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'AG—Angular (Beta)/Header',
  component: HeaderComponent,
  decorators: [
    // Cannot get preview.js or global decorator solutions to work.
    // https://storybook.js.org/tutorials/intro-to-storybook/angular/en/composite-component/
    componentWrapperDecorator(
      (story) =>
        `<div style="font-family: var(--agnostic-font-family)">${story}</div>`
    ),
    moduleMetadata({
      imports: [AgModule],
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
  </ag-header>`,
});

export const HeaderExample = Template.bind({});
