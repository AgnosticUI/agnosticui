import { render, fireEvent, screen } from '@testing-library/vue';
import Input from './Input.vue';

test('snapshot', () => {
  const rendered = render(Input, {
    props: {
      uniqueId: "myUniqueId",
      label: "my label",
      value: "my initial value",
      type: "text"
    }
  })
  expect(rendered).toMatchSnapshot();
})
