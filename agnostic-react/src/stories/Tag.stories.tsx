import { Meta } from '@storybook/react';
import { Tag } from '../Tag';

export default {
  title: 'AG—React (Beta)/Tag',
  component: Tag,
} as Meta;

export const Default = () => (
  <div className="flex-inline mie8">
    <Tag>unknown</Tag>
  </div>
);

export const Uppercase = () => (
  <div className="flex-inline mie8">
    <Tag isUppercase>badge</Tag>
  </div>
);

export const Rounded = () => (
  <div className="flex-inline mie8">
    <Tag shape="round">rounded</Tag>
  </div>
);
export const Pill = () => (
  <div className="flex-inline mie8">
    <Tag shape="pill">pill badge</Tag>
  </div>
);
export const Circle = () => (
  <div className="flex-inline mie8">
    <Tag shape="circle" type="error">
      2
    </Tag>
  </div>
);

export const Warn = () => (
  <div className="flex-inline mie8">
    <Tag type="warning">warn</Tag>
  </div>
);

export const Success = () => (
  <div className="flex-inline mie8">
    <Tag type="success">success</Tag>
  </div>
);

export const Info = () => (
  <div className="flex-inline mie8">
    <Tag type="info">info</Tag>
  </div>
);

export const Error = () => (
  <div className="flex-inline mie8">
    <Tag type="error">error</Tag>
  </div>
);

export const InfoPillUppercased = () => (
  <div className="flex-inline mie8">
    <Tag type="info" shape="pill" isUppercase>
      saved
    </Tag>
  </div>
);

export const ErrorRoundUppercased = () => (
  <div className="flex-inline mie8">
    <Tag type="error" shape="round" isUppercase>
      error
    </Tag>
  </div>
);

export const WarnUppercased = () => (
  <div className="flex-inline mie8">
    <Tag type="warning" isUppercase>
      sure?
    </Tag>
  </div>
);
