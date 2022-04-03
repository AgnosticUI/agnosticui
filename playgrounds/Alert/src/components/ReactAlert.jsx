import "agnostic-react/dist/esm/index.css";
import { Alert } from "agnostic-react";

const alertMessage = 'Alerts should be used for timely information.';

const getColor = (type) => {
  switch (type) {
    case 'warning':
      return 'var(--agnostic-warning-border-accent)';
    case 'info':
      return 'var(--agnostic-primary-dark)';
    case 'success':
      return 'var(--agnostic-action-from)';
    case 'error':
      return 'var(--agnostic-error-dark)';
    default:
      return 'var(--agnostic-gray-mid-dark)';
  }
};

const DemoIcon = ({ type, utilityClasses }) => {
  return (
    <svg className={utilityClasses} style={{ color: getColor(type) }} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" >
      <path d="M0 0h24v24H0z" fill="none" />
      <path fill="currentColor" d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
};

export default function ReactAlert() {
  return (
    <>
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" class="mie12" />React Alerts
      </div>
      <div style={{ color: 'var(--agnostic-dark)' }}>
        <Alert>Default</Alert>
        <div class="mbe16" />
        <Alert isRounded>Rounded</Alert>
        <div class="mbe16" />
        <Alert isBorderAll>Border all</Alert>
        <div class="mbe16" />
        <Alert isBorderLeft>Border left</Alert>
        <div class="mbe16" />
      </div>
      <Alert type="dark">
        <DemoIcon type="dark" utilityClasses="mie8" />
        <p className='flex-fill'>{ alertMessage }</p>
      </Alert>
      <div class="mbe16" />
      <Alert type="success">
        <DemoIcon type="success" utilityClasses="mie8" />
        <p className='flex-fill'>{ alertMessage }</p>
      </Alert>
      <div class="mbe16" />
      <Alert type="info">
        <DemoIcon type="info" utilityClasses="mie8" />
        <p className='flex-fill'>{ alertMessage }</p>
      </Alert>
      <div class="mbe16" />
      <Alert type="warning">
        <DemoIcon type="warning" utilityClasses="mie8" />
        <p className='flex-fill'>{ alertMessage }</p>
      </Alert>
      <div class="mbe16" />
      <Alert type="error">
        <DemoIcon type="error" utilityClasses="mie8" />
        <p className='flex-fill'>{ alertMessage }</p>
      </Alert>
    </>
  );
}
