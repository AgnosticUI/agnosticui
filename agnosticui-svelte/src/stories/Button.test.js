import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/svelte";
import SlotTest from "./SlotTest.svelte";
import Button from "./Button.svelte";

// https://svelte-recipes.netlify.app/testing/#testing-slots
test("it should render slotted content", () => {
  const { getByTestId, getByText } = render(SlotTest, {
    props: { Component: Button },
  });
  const slotz = getByTestId("slot");
  expect(slotz.innerHTML).toBe("Go");
  const button = getByText("Go");
  expect(button.innerHTML).toBe("Go");
});
