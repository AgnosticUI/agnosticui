import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import Button from './Button.svelte'

test('onClick fires', async () => {
  let state = 'original'
  const clickHandler = () => {
    state = 'click event fired'
  }
  const { getByText } = render(Button, { onClick: clickHandler, label: 'Go' })
  const button = getByText('Go')

  // Note that using await when firing events unique to svelte--have to
  // wait for next `tick` so Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(state).toEqual('click event fired')
})
