import React from 'react';
import Input from './Input';
export default {
  title: 'Input',
  component: Input,
};

export const DefaultInputs = () => (
  <>
    <Input uniqueId="myUniqueId" label="Default input" />
    <Input uniqueId="myUniqueId2" label="Rounded input" isRounded={true} />
    <Input uniqueId="myUniqueId3" label="Underlined input" isUnderlined={true} />
    <Input uniqueId="myUniqueId4" label="Underlined with background input" isUnderlined={true} isUnderlinedWithBackground={true} />
    <Input uniqueId="myUniqueId5" label="Large input" size="large" />
    <Input uniqueId="myUniqueId5" label="Small input" size="small" />
  </>
);
