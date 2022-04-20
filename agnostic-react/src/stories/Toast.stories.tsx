import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Toast, Toasts } from '../Toast';
import { Close } from '../Close';

export default {
  title: 'AG—React (Beta)/Toast',
  component: Toast,
} as Meta;

const getColor = (type) => {
  switch (type) {
    case 'warning':
      return 'var(--agnostic-warning-border-accent)';
    case 'info':
      return 'var(--agnostic-primary-dark)';
    case 'success':
      return 'var(--agnostic-action-dark)';
    case 'error':
      return 'var(--agnostic-error-dark)';
    default:
      return 'var(--agnostic-gray-mid-dark)';
  }
};

interface ExampleIconProps {
  type: string;
  utilityClasses: string;
}
const ExampleIcon = ({ type, utilityClasses }: ExampleIconProps) => (
  <svg
    className={utilityClasses}
    style={{ color: getColor(type) }}
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
);
const ExampleIcon2 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    className="iconify iconify--mdi-light mie8"
    width="1.5rem"
    height="1.5rem"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
  >
    <path
      d="M11.5 14c4.142 0 7.5 1.567 7.5 3.5V20H4v-2.5c0-1.933 3.358-3.5 7.5-3.5zm6.5 3.5c0-1.38-2.91-2.5-6.5-2.5S5 16.12 5 17.5V19h13v-1.5zM11.5 5a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7zm0 1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5z"
      fill="currentColor"
    />
  </svg>
);
export const ToastToasts = () => {
  const [toastIsOpen, setToastIsOpen] = useState(true);
  return (
    <>
      <div className="mbe16">
        <Toasts verticalPosition="top" horizontalPosition="center">
          <Toast icon={<ExampleIcon type="dark" utilityClasses="mie8" />} type="dark">
            Toast top center
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon2 />} type="dark">
            Project whichever icon you prefer!
          </Toast>
        </Toasts>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="top" horizontalPosition="start">
          <Toast type="dark">Toast top left (with no icon)</Toast>
          <div className="mbe14" />
          <Toast type="dark">Toast 2 top left (with no icon)</Toast>
          <div className="mbe14" />
          <Toast type="dark">Toast 3 top left (with no icon)</Toast>
        </Toasts>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="top" horizontalPosition="end">
          <Toast type="dark">Toast top right (with no icon)</Toast>
          <div className="mbe14" />
          <Toast type="dark">Toast 2 top right (with no icon)</Toast>
          <div className="mbe14" />
          <Toast type="dark">Toast 3 top right (with no icon)</Toast>
        </Toasts>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="bottom" horizontalPosition="center">
          <Toast icon={<ExampleIcon type="warning" utilityClasses="mie8" />} type="warning">
            Toast 1 bottom center (warning)
          </Toast>
          <div className="mbe14" />
          <Toast
            isOpen={toastIsOpen}
            icon={<ExampleIcon type="dark" utilityClasses="mie8" />}
            type="dark"
          >
            <div className="flex-fill">Toast 2 bottom center. Dark. Closable.</div>
            {/* Close SVG uses fill="currentColor" so we can set as follows */}
            <Close style={{ color: 'var(--light)' }} onClick={() => setToastIsOpen(false)} />
          </Toast>
        </Toasts>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="bottom" horizontalPosition="start">
          <Toast icon={<ExampleIcon type="error" utilityClasses="mie8" />} type="error">
            Toast bottom left
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon type="error" utilityClasses="mie8" />} type="error">
            Toast 2 bottom left
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon type="error" utilityClasses="mie8" />} type="error">
            Toast 3 bottom left
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon2 />} type="error">
            Big brother is watching
          </Toast>
        </Toasts>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="bottom" horizontalPosition="end">
          <Toast icon={<ExampleIcon type="info" utilityClasses="mie8" />} type="info">
            Toast bottom right
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon2 />} type="success">
            The universe will deliver all that you desire!
          </Toast>
        </Toasts>
      </div>
    </>
  );
};
