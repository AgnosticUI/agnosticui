import { render } from '@testing-library/vue';
import HeaderNav from './HeaderNav.vue';

test('HeaderNav renders', async () => {
  const { getByText } = render(HeaderNav, {
    slots: {
      default: '<ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul>',
    },
  });
  getByText('Home');
  getByText('About');
});

test('snapshot', () => {
  const rendered = render(HeaderNav, {
    slots: {
      default: '<ul><li><a href="#">Home</a></li><li><a href="#">About</a></li></ul>',
    },
  })
  expect(rendered).toMatchSnapshot();
})
