import { render, fireEvent } from '@testing-library/vue'
import Button from './Button.vue'

test('onClick fires', async () => {
  const { getByText, emitted } = render(Button, {
    props: {
      label: 'Go'
    }
  });
  const button = getByText('Go')
  await fireEvent(button, new Event('click'))
  expect(emitted()).toHaveProperty('click')
});
