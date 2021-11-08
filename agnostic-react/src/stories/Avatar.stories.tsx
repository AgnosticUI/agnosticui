import { Meta } from '@storybook/react';
import { Avatar } from '../Avatar';

export default {
  title: 'AG—React (Beta)/Avatar',
  component: Avatar,
} as Meta;

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
    />
  </svg>
);

export const Default = () => (
  <>
    <div className="mbe16">
      <Avatar text="AB" />
      <Avatar text="RL" />
      <Avatar text="RL" size="small" />
      <Avatar text="RL" size="large" />
      <Avatar text="RL" size="xlarge" />
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar>
        <SvgIcon />
      </Avatar>
      <Avatar isTransparent>
        <SvgIcon />
      </Avatar>
      <Avatar isSquare imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar isRounded imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar isSquare>
        <SvgIcon />
      </Avatar>
      <Avatar isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar size="small" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar size="large" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar size="xlarge" isRounded>
        <SvgIcon />
      </Avatar>
    </div>
  </>
);

export const Success = () => (
  <>
    <div className="mbe16">
      <Avatar text="AB" type="success" />
      <Avatar text="RL" type="success" />
      <Avatar text="RL" size="small" type="success" />
      <Avatar text="RL" size="large" type="success" />
      <Avatar text="RL" size="xlarge" type="success" />
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random" type="success" />
      <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" type="success" />
      <Avatar type="success">
        <SvgIcon />
      </Avatar>
      <Avatar type="success" isTransparent>
        <SvgIcon />
      </Avatar>
      <Avatar type="success" isSquare imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="success" isRounded imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="success" isSquare>
        <SvgIcon />
      </Avatar>
      <Avatar type="success" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="success" size="small" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="success" size="large" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="success" size="xlarge" isRounded>
        <SvgIcon />
      </Avatar>
    </div>
  </>
);

export const Info = () => (
  <>
    <div className="mbe16">
      <Avatar text="AB" type="info" />
      <Avatar text="RL" type="info" />
      <Avatar text="RL" size="small" type="info" />
      <Avatar text="RL" size="large" type="info" />
      <Avatar text="RL" size="xlarge" type="info" />
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random" type="info" />
      <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" type="info" />
      <Avatar type="info">
        <SvgIcon />
      </Avatar>
      <Avatar type="info" isTransparent>
        <SvgIcon />
      </Avatar>
      <Avatar type="info" isSquare imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="info" isRounded imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="info" isSquare>
        <SvgIcon />
      </Avatar>
      <Avatar type="info" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="info" size="small" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="info" size="large" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="info" size="xlarge" isRounded>
        <SvgIcon />
      </Avatar>
    </div>
  </>
);

export const Warning = () => (
  <>
    <div className="mbe16">
      <Avatar text="AB" type="warning" />
      <Avatar text="RL" type="warning" />
      <Avatar text="RL" size="small" type="warning" />
      <Avatar text="RL" size="large" type="warning" />
      <Avatar text="RL" size="xlarge" type="warning" />
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random" type="warning" />
      <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" type="warning" />
      <Avatar type="warning">
        <SvgIcon />
      </Avatar>
      <Avatar type="warning" isTransparent>
        <SvgIcon />
      </Avatar>
      <Avatar type="warning" isSquare imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="warning" isRounded imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="warning" isSquare>
        <SvgIcon />
      </Avatar>
      <Avatar type="warning" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="warning" size="small" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="warning" size="large" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="warning" size="xlarge" isRounded>
        <SvgIcon />
      </Avatar>
    </div>
  </>
);

export const Error = () => (
  <>
    <div className="mbe16">
      <Avatar text="AB" type="error" />
      <Avatar text="RL" type="error" />
      <Avatar text="RL" size="small" type="error" />
      <Avatar text="RL" size="large" type="error" />
      <Avatar text="RL" size="xlarge" type="error" />
      <Avatar imgUrl="https://joeschmoe.io/api/v1/random" type="error" />
      <Avatar isTransparent imgUrl="https://joeschmoe.io/api/v1/random" type="error" />
      <Avatar type="error">
        <SvgIcon />
      </Avatar>
      <Avatar type="error" isTransparent>
        <SvgIcon />
      </Avatar>
      <Avatar type="error" isSquare imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="error" isRounded imgUrl="https://joeschmoe.io/api/v1/random" />
      <Avatar type="error" isSquare>
        <SvgIcon />
      </Avatar>
      <Avatar type="error" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="error" size="small" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="error" size="large" isRounded>
        <SvgIcon />
      </Avatar>
      <Avatar type="error" size="xlarge" isRounded>
        <SvgIcon />
      </Avatar>
    </div>
  </>
);
