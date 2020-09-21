import React from 'react';
import Button from './Button';
export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <>
    <Button mode="primary">Go</Button>
    <Button mode="primary" isBordered>Go</Button>
    <Button mode="primary" isRounded>Go</Button>
    <Button mode="primary" isBordered isRounded>Go</Button>
    <Button mode="primary" isRaised isRounded>Go</Button>
    <Button mode="primary" isCircle>Go</Button>
    <Button mode="primary" isCircle isBordered>Go</Button>
    <Button mode="primary" isBlock>Go</Button>
    <Button mode="primary" isBordered isBlock>Go</Button>
  </>
);

export const Secondary = () => (
  <>
    <Button mode="secondary">Go</Button>
    <Button mode="secondary" isBordered>Go</Button>
    <Button mode="secondary" isRounded>Go</Button>
    <Button mode="secondary" isBordered isRounded>Go</Button>
    <Button mode="secondary" isRaised isRounded>Go</Button>
    <Button mode="secondary" isCircle>Go</Button>
    <Button mode="secondary" isCircle isBordered>Go</Button>
    <Button mode="secondary" isBlock>Go</Button>
    <Button mode="secondary" isBordered isBlock>Go</Button>
  </>
);

export const Default = () => (
  <>
    <Button>Go</Button>
    <Button isBordered>Go</Button>
    <Button isRounded>Go</Button>
    <Button isBordered isRounded>Go</Button>
    <Button isRaised isRounded>Go</Button>
    <Button isCircle>Go</Button>
    <Button isCircle isBordered>Go</Button>
    <Button isBlock>Go</Button>
    <Button isBordered isBlock>Go</Button>
  </>
)

export const Sizes = () => (
  <>
    <Button size="small">Go</Button>
    <Button size="large">Go</Button>
  </>
);

export const DisabledAll = () => (
  <>
    <Button isDisabled>Go</Button>
    <Button mode="primary" isDisabled>Go</Button>
    <Button mode="secondary" isDisabled>Go</Button>
    <Button mode="secondary" isDisabled isBordered>Go</Button>
  </>
);

export const Types = () => (
  <>
    <Button type="reset">Go</Button>
    <Button type="submit">Go</Button>
  </>
);

export const Customizations = () => (
  <>
    <Button css="my-custom-css-klass">Go</Button>
    <Button isBlank>Go</Button>
    <Button isSkinned={false}>Go</Button>
  </>
);
