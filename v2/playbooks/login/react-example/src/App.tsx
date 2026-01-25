import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactInput } from './components/ag/Input/react/ReactInput';
import { ReactCard } from './components/ag/Card/react/ReactCard';
import { ReactLink } from './components/ag/Link/react/ReactLink';
import { ReactCheckbox } from './components/ag/Checkbox/react/ReactCheckbox';
import { ReactDivider } from './components/ag/Divider/react/ReactDivider';
import { ReactImage } from './components/ag/Image/react/ReactImage';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Responsive background image sources - only load on tablet and desktop
  const bgImageSources = [
    {
      srcset: '/login-bg.jpg',
      media: '(min-width: 768px)',
    },
  ];

  const LoginForm = () => (
    <form className="login-form" onSubmit={(e) => e.preventDefault()}>
      <div className="login-logo">
        <img src="/logo.svg" alt="Logo" />
      </div>

      <h1 className="login-title">Welcome back!</h1>

      <div className="form-field">
        <ReactInput
          label="Email"
          type="email"
          rounded
          placeholder="Enter your email"
          value={email}
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        >
          <span slot="addon-left" className="input-icon">
            <Mail size={18} />
          </span>
        </ReactInput>
      </div>

      <div className="form-field">
        <ReactInput
          label="Password"
          type="password"
          rounded
          placeholder="Enter your password"
          value={password}
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
        >
          <span slot="addon-left" className="input-icon">
            <Lock size={18} />
          </span>
        </ReactInput>
      </div>

      <div className="auxiliary-row">
        <ReactCheckbox
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        >
          Remember me
        </ReactCheckbox>
        <ReactLink href="#" variant="monochrome">Forgot password?</ReactLink>
      </div>

      <div className="login-button">
        <ReactButton fullWidth type="submit" variant="monochrome" shape="rounded">
          Login
        </ReactButton>
      </div>

      <ReactDivider>or</ReactDivider>

      <div className="social-buttons">
        <div className="social-button">
          <ReactButton fullWidth bordered shape="rounded">
            <img src="/facebook-icon.svg" alt="" className="social-icon" />
            Facebook
          </ReactButton>
        </div>
        <div className="social-button">
          <ReactButton fullWidth bordered shape="rounded">
            <img src="/google-icon.svg" alt="" className="social-icon" />
            Google
          </ReactButton>
        </div>
      </div>

      <p className="login-footer">
        Don't have an account? <ReactLink href="#" variant="primary">Sign up</ReactLink>
      </p>
    </form>
  );

  return (
    <div className="login-page">
      {/* Mobile: Form only on white background */}
      <div className="login-form-wrapper">
        <div className="login-column-left">
          <LoginForm />
        </div>
      </div>

      {/* Tablet: Card floating on background image */}
      <div className="login-card-wrapper">
        <div className="login-card">
          <ReactCard rounded="md">
            <LoginForm />
          </ReactCard>
        </div>
      </div>

      {/* Right Column - Background Image (desktop only) */}
      <div className="login-column-right">
        <ReactImage
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          alt=""
          sources={bgImageSources}
          fit="cover"
        />
      </div>

      {/* Full-screen background for tablet */}
      <div className="tablet-background">
        <ReactImage
          src="/login-bg.jpg"
          alt=""
          fit="cover"
        />
      </div>
    </div>
  );
}

export default App;
