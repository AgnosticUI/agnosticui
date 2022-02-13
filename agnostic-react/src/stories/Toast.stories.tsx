import { Meta } from '@storybook/react';
import { Toast } from '../Toast';
import styles from '../alert.module.css';

export default {
  title: 'AG—React (Beta)/Toast',
  component: Toast,
} as Meta;

interface ExampleIconProps {
  type: string;
}
const ExampleIcon = ({ type }: ExampleIconProps) => {
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
  // You will probably want to customize this to your liking. However, to match the
  // colors used for various types, look at: https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/alert.css#L51
  // which will show you the proper color custom property e.g. --agnostic-warning-light for
  // a warning toast.
  const svgClasses = type
    ? [styles[`alert${typeCapitalized}Icon`], styles.alertIcon].join(' ')
    : styles.alertIcon;
  return (
    <svg
      className={svgClasses}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
};

export const ToastToasts = () => (
  <>
    <div className="mbe16">
      <Toast
        icon={<ExampleIcon type="dark" />}
        type="dark"
        verticalPosition="top"
        horizontalPosition="center"
      >
        Toast top center
      </Toast>
    </div>
    <div className="mbe16">
      <Toast type="dark" verticalPosition="top" horizontalPosition="start">
        Toast top left (with no icon)
      </Toast>
    </div>
    <div className="mbe16">
      <Toast type="dark" verticalPosition="top" horizontalPosition="start">
        Toast top left (second one)
      </Toast>
    </div>
    <div className="mbe16">
      <Toast type="dark" verticalPosition="top" horizontalPosition="end">
        Toast top right (with no icon)
      </Toast>
    </div>
    <div className="mbe16">
      <Toast
        icon={<ExampleIcon type="warning" />}
        type="warning"
        verticalPosition="bottom"
        horizontalPosition="center"
      >
        Toast bottom center
      </Toast>
    </div>
    <div className="mbe16">
      <Toast
        icon={<ExampleIcon type="error" />}
        type="error"
        verticalPosition="bottom"
        horizontalPosition="start"
      >
        Toast bottom left
      </Toast>
    </div>
    <div className="mbe16">
      <Toast
        icon={<ExampleIcon type="info" />}
        type="info"
        verticalPosition="bottom"
        horizontalPosition="end"
      >
        Toast bottom right
      </Toast>
    </div>
  </>
);
