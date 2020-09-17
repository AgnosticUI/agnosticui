import React from 'react';
import Button from './Button';
export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <>
    <Button mode="primary" label="Primary" />
    <Button mode="primary" label="Primary Bordered" isBordered />
    <Button mode="primary" label="Primary Rounded" isRounded />
    <Button mode="primary" label="Primary Bordered Rounded" isBordered isRounded />
    <Button mode="primary" label="Primary Rounded Raised" isRaised isRounded />
    <Button mode="primary" label="Primary Block (aka Stacked)" isBlock />
    <Button mode="primary" label="Primary Block Bordered (aka Stacked)" isBordered isBlock />
  </>
);

export const Secondary = () => (
  <>
    <Button mode="secondary" label="Secondary" />
    <Button mode="secondary" label="Secondary Bordered" isBordered />
    <Button mode="secondary" label="Secondary Rounded" isRounded />
    <Button mode="secondary" label="Secondary Bordered Rounded" isBordered isRounded />
    <Button mode="secondary" label="Secondary Rounded Raised" isRaised isRounded />
    <Button mode="secondary" label="Secondary Block (aka Stacked)" isBlock />
    <Button mode="secondary" label="Secondary Block Bordered (aka Stacked)" isBordered isBlock />
  </>
);

export const Default = () => (
  <>
    <Button label="Default" />
    <Button label="Default Bordered" isBordered />
    <Button label="Default Rounded" isRounded />
    <Button label="Default Bordered Rounded" isBordered isRounded />
    <Button label="Default Rounded Raised" isRaised isRounded />
    <Button label="Default Block (aka Stacked)" isBlock />
    <Button label="Default Block Bordered (aka Stacked)" isBordered isBlock />
  </>
);

export const Sizes = () => (
  <>
    <Button label="Size Default" />
    <Button label="Size Small" size="small" />
    <Button label="Size Large" size="large" />
  </>
);

export const DisabledAll = () => (
  <>
    <Button label="Default Disabled" isDisabled />
    <Button mode="primary" label="Primary Disabled" isDisabled />
    <Button mode="secondary" label="Secondary Disabled" isDisabled />
    <Button mode="secondary" label="Secondary Bordered Disabled" isBordered isDisabled />
  </>
);

export const Types = () => (
  <>
    <Button label="Type Default (Button)" />
    <Button label="Type Reset" type="reset" />
    <Button label="Type Submit" type="submit" />
  </>
);


export const Customizations = () => (
  <>
    <Button label="Custom CSS Override" css="my-custom-css-klass" />
    <Button label="Blank Button" isBlank />
    <Button label="Button Base (no skin)" isSkinned={false} />
  </>
);