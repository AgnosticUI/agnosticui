import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactInput } from './components/ag/Input/react/ReactInput';
import { ReactLink } from './components/ag/Link/react/ReactLink';
import { ReactCheckbox } from './components/ag/Checkbox/react/ReactCheckbox';
import { ReactDivider } from './components/ag/Divider/react/ReactDivider';
import { SkinSwitcher } from './SkinSwitcher';

const sunIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);

const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [dark, setDark] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
    localStorage.setItem('ag-theme', next ? 'dark' : '');
  }

  return (
    <div className="login-page">
      {/* Header — dark mode toggle */}
      <header className="login-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {dark ? sunIcon : moonIcon}
        </button>
      </header>

      <span className="bg-shape bg-shape--1" aria-hidden="true" />
      <span className="bg-shape bg-shape--2" aria-hidden="true" />
      <span className="bg-shape bg-shape--3" aria-hidden="true" />
      <span className="bg-shape bg-shape--4" aria-hidden="true" />

      <div className="login-card">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="login-logo">
            <img src={dark ? '/logo-dark-mode.svg' : '/logo.svg'} alt="Logo" />
          </div>

          <h1 className="login-title">Welcome back!</h1>
          <p className="login-subtitle">Please enter your details to login.</p>

          {/* SSO Buttons — side-by-side, above credential fields */}
          <div className="sso-buttons">
            <ReactButton fullWidth bordered shape="rounded">
              <img src="/google-icon.svg" alt="" className="social-icon" />
              Google
            </ReactButton>
            <ReactButton fullWidth bordered shape="rounded">
              <img src="/facebook-icon.svg" alt="" className="social-icon" />
              Facebook
            </ReactButton>
          </div>

          <ReactDivider>or</ReactDivider>

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
              Log In
            </ReactButton>
          </div>

          <p className="login-footer">
            Don't have an account?{' '}
            <ReactLink href="#" variant="primary">Sign up</ReactLink>
          </p>
        </form>
      </div>

      <SkinSwitcher />
    </div>
  );
}

export default App;
