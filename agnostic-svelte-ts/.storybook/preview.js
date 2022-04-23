import '../src/app.css';
import yourTheme from './yourTheme';
import FontDecorator from '../src/lib/storybook-helpers/FontDecorator';

export const parameters = {
	docs: {
		theme: yourTheme
	},
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	}
};

export const decorators = [() => FontDecorator];

require('!style-loader!css-loader!../src/lib/css/common.resets.min.css');
require('!style-loader!css-loader!../src/lib/css/common.properties.min.css');
require('!style-loader!css-loader!../src/lib/css/common.utilities.min.css');
