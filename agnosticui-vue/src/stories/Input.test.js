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

test('take input', () => {
  const utils = render(Input, {
    props: {
      uniqueId: "myUniqueId",
      label: "my label",
      value: "my initial value",
      type: "text"
    }
  })
  const input = utils.getByRole('textbox')
  fireEvent.change(input, { target: { value: '123' } })
  expect(input.value).toBe('123')
})

test('delete input', () => {
  const utils = render(Input, {
    props: {
      uniqueId: "myUniqueId",
      label: "my label",
      value: "my initial value",
      type: "text"
    }
  })
  const input = utils.getByRole('textbox')
  fireEvent.change(input, { target: { value: '123' } })
  expect(input.value).toBe('123')
  fireEvent.change(input, { target: { value: '12' } })
  expect(input.value).toBe('12')
  fireEvent.change(input, { target: { value: '' } })
  expect(input.value).toBe('')
})
