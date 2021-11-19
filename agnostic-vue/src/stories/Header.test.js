import { render } from '@testing-library/vue';
import Header from './Header.vue';
import HeaderNav from './HeaderNav.vue';
import HeaderNavItem from './HeaderNavItem.vue';

//   template: '<agnostic-header v-bind="$props"><template v-slot:logoleft><a href="#">Logo on Left</a></template><template v-slot:headernav><agnostic-header-nav><ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul></agnostic-header-nav></template><template v-slot:logoright><a href="#">Logo on Right</a></template></agnostic-header>'
test('Header renders', async () => {
  const { container, getByText } = render(Header, {
    components: {
      HeaderNav,
      HeaderNavItem,
    },
    slots: {
      logoleft: '<a href="#">Logo Left</a>',
      logoright: '<a href="#">Logo Right</a>',
      headernav: '<HeaderNav><HeaderNavItem><a href="#">Home</a></HeaderNavItem><HeaderNavItem><a href="#">About</a></HeaderNavItem></HeaderNav>',
    },
  });
  getByText('Home');
  getByText('About');
  getByText('Logo Left');
  getByText('Logo Right');
  expect(container).toMatchSnapshot();
});
