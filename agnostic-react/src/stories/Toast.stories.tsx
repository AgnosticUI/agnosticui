import { Meta } from '@storybook/react';
import { useState } from 'react';
import { Toast, Toasts } from '../Toast';
import { Close } from '../Close';
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
const ExampleIcon2 = () => (
  // const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
  // You will probably want to customize this to your liking. However, to match the
  // colors used for various types, look at: https://github.com/AgnosticUI/agnosticui/blob/master/agnostic-react/src/alert.css#L51
  // which will show you the proper color custom property e.g. --agnostic-warning-light for
  // a warning toast.
  // const svgClasses = type
  //   ? [styles[`alert${typeCapitalized}Icon`], styles.alertIcon].join(' ')
  //   : styles.alertIcon;
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    className="iconify iconify--mdi-light"
    style={{ marginRight: '0.5rem' }}
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
      <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
        <p>
          <h1>Toasts</h1>
          <ol>
            <li>
              Use
              {' '}
              <code>Toasts</code>
              {' '}
              as the main container. It does portal teleporting and fixed
              positioning. It&apos;s children are 1 to many
              {' '}
              <code>Toast</code>
              elements.
            </li>
            <li>
              <code>Toast</code>
              {' '}
              components are specialized wrappers of
              <code>Alert</code>
              {' '}
              components.
            </li>
            <li>
              <code>Toast</code>
              {' '}
              should be provided a
              <code>type</code>
              {' '}
              and optionally an
              {' '}
              <code>icon</code>
              {' '}
              render prop component.
            </li>
          </ol>
        </p>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="top" horizontalPosition="center">
          <Toast icon={<ExampleIcon type="dark" />} type="dark">
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
          <Toast icon={<ExampleIcon type="warning" />} type="warning">
            Toast 1 bottom center (warning)
          </Toast>
          <div className="mbe14" />
          <Toast isOpen={toastIsOpen} icon={<ExampleIcon type="dark" />} type="dark">
            <div className="flex-fill">Toast 2 bottom center. Dark. Closable.</div>
            {/* Close SVG uses fill="currentColor" so we can set as follows */}
            <Close style={{ color: 'var(--light)' }} onClick={() => setToastIsOpen(false)} />
          </Toast>
        </Toasts>
      </div>
      <div className="mbe16">
        <Toasts verticalPosition="bottom" horizontalPosition="start">
          <Toast icon={<ExampleIcon type="error" />} type="error">
            Toast bottom left
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon type="error" />} type="error">
            Toast 2 bottom left
          </Toast>
          <div className="mbe14" />
          <Toast icon={<ExampleIcon type="error" />} type="error">
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
          <Toast icon={<ExampleIcon type="info" />} type="info">
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
