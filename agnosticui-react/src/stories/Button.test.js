import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import "regenerator-runtime/runtime.js";
import Button from './Button.js'

test('onClick fires', async () => {
  let state = 'original'
  const clickHandler = () => {
    state = 'click event fired'
  }
  const { getByRole } = render(<Button onClick={clickHandler} />);
  const button = getByRole('button')

  await fireEvent.click(button)

  expect(state).toEqual('click event fired')
})
