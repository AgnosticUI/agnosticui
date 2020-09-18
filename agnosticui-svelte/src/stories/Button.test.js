import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/svelte'
import SlotTest from "./SlotTest.svelte";
import Button from './Button.svelte'

// https://svelte-recipes.netlify.app/testing/#testing-slots
test("it should render slotted content", () => {
  const { getByTestId, getByText } = render(SlotTest, {
    props: { Component: Button },
  });
  const slotz = getByTestId("slot");
  expect(slotz.innerHTML).toBe("Go");
  const button = getByText('Go')
  expect(button.innerHTML).toBe("Go");
});

test('onClick fires', async () => {
  let state = 'original'
  const clickHandler = () => {
    state = 'click event fired'
  }

  const { getByRole } = render(Button, {
    onClick: clickHandler,
  })
  const button = getByRole("button");

  // Note that using await when firing events unique to svelte--have to
  // wait for next `tick` so Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(state).toEqual('click event fired')
})
