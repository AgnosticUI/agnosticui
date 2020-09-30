import React from 'react';
import Button, { ButtonGroup } from './Button';

export default {
  title: 'Button Groups',
  component: ButtonGroup,
};

export const All = () => (
  <>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isRaised>One</Button>
      <Button isRaised>Two</Button>
      <Button isRaised>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button isBordered>One</Button>
      <Button isBordered>Two</Button>
      <Button isBordered>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary">One</Button>
      <Button mode="secondary">Two</Button>
      <Button mode="secondary">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" isRaised>One</Button>
      <Button mode="secondary" isRaised>Two</Button>
      <Button mode="secondary" isRaised>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="secondary" isBordered>One</Button>
      <Button mode="secondary" isBordered>Two</Button>
      <Button mode="secondary" isBordered>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary">One</Button>
      <Button mode="primary">Two</Button>
      <Button mode="primary">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isRaised>One</Button>
      <Button mode="primary" isRaised>Two</Button>
      <Button mode="primary" isRaised>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isBordered>One</Button>
      <Button mode="primary" isBordered>Two</Button>
      <Button mode="primary" isBordered>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isDisabled>One</Button>
      <Button mode="primary">Two</Button>
      <Button mode="primary">Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isDisabled>One</Button>
      <Button mode="primary">Two</Button>
      <Button mode="primary" isDisabled>Three</Button>
    </ButtonGroup>
    <ButtonGroup ariaLabel="Appropriate label for your button group">
      <Button mode="primary" isDisabled>One</Button>
      <Button mode="primary" isDisabled>Two</Button>
      <Button mode="primary" isDisabled>Three</Button>
    </ButtonGroup>
  </>
)
