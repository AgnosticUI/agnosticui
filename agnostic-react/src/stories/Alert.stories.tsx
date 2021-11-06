import { Meta } from '@storybook/react';
import { Alert } from '../Alert';

export default {
  title: 'AG—React (Beta)/Alert',
  component: Alert,
} as Meta;

const message = 'Alerts should be used for timely information.';

export const Default = () => (
  <>
    <div className="mbe16">
      <Alert>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderAll>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded isBorderAll>
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderLeft>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderRight>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderTop>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderBottom>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd>{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd isBorderRight>
        {message}
      </Alert>
    </div>
  </>
);

export const Info = () => (
  <>
    <div className="mbe16">
      <Alert type="info">{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderAll type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded isBorderAll type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderLeft type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderRight type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderTop type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderBottom type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd type="info">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd isBorderRight type="info">
        {message}
      </Alert>
    </div>
  </>
);

export const Success = () => (
  <>
    <div className="mbe16">
      <Alert type="success">{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderAll type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded isBorderAll type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderLeft type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderRight type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderTop type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderBottom type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd type="success">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd isBorderRight type="success">
        {message}
      </Alert>
    </div>
  </>
);

export const Warning = () => (
  <>
    <div className="mbe16">
      <Alert type="warning">{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderAll type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded isBorderAll type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderLeft type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderRight type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderTop type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderBottom type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd type="warning">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd isBorderRight type="warning">
        {message}
      </Alert>
    </div>
  </>
);

export const Error = () => (
  <>
    <div className="mbe16">
      <Alert type="error">{message}</Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderAll type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isRounded isBorderAll type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderLeft type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderRight type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderTop type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBorderBottom type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd type="error">
        {message}
      </Alert>
    </div>
    <div className="mbe16">
      <Alert isBlockEnd isBorderRight type="error">
        {message}
      </Alert>
    </div>
  </>
);
