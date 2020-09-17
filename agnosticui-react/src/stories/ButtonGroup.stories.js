import React from 'react';
import Button, { ButtonGroup } from './Button';

export default {
  title: 'Button Groups',
  component: ButtonGroup,
};

export const All = () => (
  <>
    <ButtonGroup>
      <Button label="One" ariaLabel="Button One" />
      <Button label="Two" ariaLabel="Button Two" />
      <Button label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button isRaised label="One" ariaLabel="Button One" />
      <Button isRaised label="Two" ariaLabel="Button Two" />
      <Button isRaised label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button isBordered label="One" ariaLabel="Button One" />
      <Button isBordered label="Two" ariaLabel="Button Two" />
      <Button isBordered label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" label="One" ariaLabel="Button One" />
      <Button mode="secondary" label="Two" ariaLabel="Button Two" />
      <Button mode="secondary" label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" isRaised label="One" ariaLabel="Button One" />
      <Button mode="secondary" isRaised label="Two" ariaLabel="Button Two" />
      <Button mode="secondary" isRaised label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" isBordered label="One" ariaLabel="Button One" />
      <Button mode="secondary" isBordered label="Two" ariaLabel="Button Two" />
      <Button mode="secondary" isBordered label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" label="One" ariaLabel="Button One" />
      <Button mode="primary" label="Two" ariaLabel="Button Two" />
      <Button mode="primary" label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isRaised label="One" ariaLabel="Button One" />
      <Button mode="primary" isRaised label="Two" ariaLabel="Button Two" />
      <Button mode="primary" isRaised label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isBordered label="One" ariaLabel="Button One" />
      <Button mode="primary" isBordered label="Two" ariaLabel="Button Two" />
      <Button mode="primary" isBordered label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isDisabled label="One" ariaLabel="Button One" />
      <Button mode="primary" label="Two" ariaLabel="Button Two" />
      <Button mode="primary" label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isDisabled label="One" ariaLabel="Button One" />
      <Button mode="primary" label="Two" ariaLabel="Button Two" />
      <Button mode="primary" isDisabled label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isDisabled label="One" ariaLabel="Button One" />
      <Button mode="primary" isDisabled label="Two" ariaLabel="Button Two" />
      <Button mode="primary" isDisabled label="Three" ariaLabel="Button Three" />
    </ButtonGroup>
  </>
)
