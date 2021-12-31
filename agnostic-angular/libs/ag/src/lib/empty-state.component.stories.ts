import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { AgModule, EmptyStateComponent } from 'agnostic-angular';

export default {
  title: 'AG—Angular (Beta)/EmptyState',
  component: EmptyStateComponent,
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

export const All = () => ({
  template: `<ag-empty-state>
    <ag-empty-state-header>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
        <path
          fillRule="evenodd"
          d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
        />
      </svg>
    </ag-empty-state-header>
    <ag-empty-state-body>
      <div class="h4">No connections yet</div>
      <p class="mbe16">Click below to add some friends</p> 
    </ag-empty-state-body>
    <ag-empty-state-footer>
      <ag-button mode="primary">Invite friends</ag-button>
    </ag-empty-state-footer>
  </ag-empty-state>`
});
