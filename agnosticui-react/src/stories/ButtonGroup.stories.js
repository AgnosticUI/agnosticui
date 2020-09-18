import React from 'react';
import Button, { ButtonGroup } from './Button';

export default {
  title: 'Button Groups',
  component: ButtonGroup,
};

export const All = () => (
  <>
    <ButtonGroup>
      <Button ariaLabel="Button One">One</Button>
      <Button ariaLabel="Button Two">Two</Button>
      <Button ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button isRaised ariaLabel="Button One">One</Button>
      <Button isRaised ariaLabel="Button Two">Two</Button>
      <Button isRaised ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button isBordered ariaLabel="Button One">One</Button>
      <Button isBordered ariaLabel="Button Two">Two</Button>
      <Button isBordered ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" ariaLabel="Button One">One</Button>
      <Button mode="secondary" ariaLabel="Button Two">Two</Button>
      <Button mode="secondary" ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" isRaised ariaLabel="Button One">One</Button>
      <Button mode="secondary" isRaised ariaLabel="Button Two">Two</Button>
      <Button mode="secondary" isRaised ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="secondary" isBordered ariaLabel="Button One">One</Button>
      <Button mode="secondary" isBordered ariaLabel="Button Two">Two</Button>
      <Button mode="secondary" isBordered ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" ariaLabel="Button One">One</Button>
      <Button mode="primary" ariaLabel="Button Two">Two</Button>
      <Button mode="primary" ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isRaised ariaLabel="Button One">One</Button>
      <Button mode="primary" isRaised ariaLabel="Button Two">Two</Button>
      <Button mode="primary" isRaised ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isBordered ariaLabel="Button One">One</Button>
      <Button mode="primary" isBordered ariaLabel="Button Two">Two</Button>
      <Button mode="primary" isBordered ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isDisabled ariaLabel="Button One">One</Button>
      <Button mode="primary" ariaLabel="Button Two">Two</Button>
      <Button mode="primary" ariaLabel="Button Three">Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isDisabled ariaLabel="Button One">One</Button>
      <Button mode="primary" ariaLabel="Button Two">Two</Button>
      <Button mode="primary" isDisabled>Three</Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button mode="primary" isDisabled ariaLabel="Button One">One</Button>
      <Button mode="primary" isDisabled ariaLabel="Button Two">Two</Button>
      <Button mode="primary" isDisabled>Three</Button>
    </ButtonGroup>
  </>
)
