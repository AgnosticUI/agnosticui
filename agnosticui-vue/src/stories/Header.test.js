import { render } from '@testing-library/vue';
import Header from './Header.vue';

//   template: '<agnostic-header v-bind="$props"><template v-slot:logoleft><a href="#">Logo on Left</a></template><template v-slot:headernav><agnostic-header-nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul></agnostic-header-nav></template><template v-slot:logoright><a href="#">Logo on Right</a></template></agnostic-header>'
test('Header renders', async () => {
  const { getByText } = render(Header, {
    slots: {
      logoleft: '<a href="#">Logo Left</a>',
      logoright: '<a href="#">Logo Right</a>',
      headernav: '<ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul>',
    },
  });
  getByText('Home');
  getByText('About');
  getByText('Logo Left');
  getByText('Logo Right');
});

test('snapshot', () => {
  const rendered = render(Header, {
    slots: {
      logoleft: '<a href="#">Logo Left</a>',
      logoright: '<a href="#">Logo Right</a>',
      headernav: '<ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul>',
    },
  })
  expect(rendered).toMatchSnapshot();
})
