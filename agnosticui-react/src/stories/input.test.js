import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import 'regenerator-runtime/runtime.js';
import Input from './Input.js';

test('snapshot', () => {
  const changeHandler = jest.fn();
  const rendered = render(
    <Input label="label is require prop haha" uniqueId="myUniqId" onChange={changeHandler} />
  );
  expect(rendered).toMatchSnapshot();
});

test('take input', () => {
  const changeHandler = jest.fn();
  const rendered = render(
    <Input label="label is require prop haha" uniqueId="myUniqId" onChange={changeHandler} />
  );
  const input = rendered.getByRole('textbox');
  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('123');
});

test('delete input', () => {
  const changeHandler = jest.fn();
  const utils = render(
    <Input label="label is require prop haha" uniqueId="myUniqId" onChange={changeHandler} />
  );
  const input = utils.getByRole('textbox');
  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('123');
  fireEvent.change(input, { target: { value: '12' } });
  expect(input.value).toBe('12');
  fireEvent.change(input, { target: { value: '' } });
  expect(input.value).toBe('');
});

test('onChange', async () => {
  const changeHandler = jest.fn();
  const { getByRole } = render(
    <Input label="label is require prop haha" uniqueId="myUniqId" onChange={changeHandler} />
  );
  const input = getByRole('textbox');
  const mockTypingEvent = {
    target: {
      value: 'changed-value',
    },
  };
  await fireEvent.change(input, mockTypingEvent);
  expect(changeHandler).toHaveBeenCalledTimes(1);
});

test('onFocus', async () => {
  const focusHandler = jest.fn();
  const { getByRole } = render(
    <Input label="label is require prop haha" uniqueId="myUniqId" onFocus={focusHandler} />
  );
  const input = getByRole('textbox');
  const mockTypingEvent = {
    target: {
      value: 'focus-value',
    },
  };
  await fireEvent.focus(input, mockTypingEvent);
  expect(focusHandler).toHaveBeenCalledTimes(1);
});

test('onBlur', async () => {
  const blurHandler = jest.fn();
  const { getByRole } = render(
    <Input label="label is require prop haha" uniqueId="myUniqId" onBlur={blurHandler} />
  );
  const input = getByRole('textbox');
  const mockTypingEvent = {
    target: {
      value: 'blur-value',
    },
  };
  await fireEvent.blur(input, mockTypingEvent);
  expect(blurHandler).toHaveBeenCalledTimes(1);
});
