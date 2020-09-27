import { render } from '@testing-library/vue';
import HeaderNav from './HeaderNav.vue';
import HeaderNavItem from './HeaderNavItem.vue';

test('HeaderNav renders', async () => {
  const { container, getByText } = render(HeaderNav, {
    components: {
      HeaderNavItem,
    },
    slots: {
      default: '<HeaderNavItem><a href="#">Home</a></HeaderNavItem><HeaderNavItem><a href="#">About</a></HeaderNavItem>',
    },
  });
  getByText('Home');
  getByText('About');
  expect(container).toMatchSnapshot();
});
