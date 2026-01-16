import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { ReactButton } from './components/ag/Button/react/ReactButton';
import { ReactInput } from './components/ag/Input/react/ReactInput';
import { ReactCard } from './components/ag/Card/react/ReactCard';
import { ReactLink } from './components/ag/Link/react/ReactLink';
import { ReactCheckbox } from './components/ag/Checkbox/react/ReactCheckbox';
import { ReactDivider } from './components/ag/Divider/react/ReactDivider';
import './App.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password, rememberMe });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      {/* Logo */}
      <div className="login-logo">
        <img src="/logo.svg" alt="AgnosticUI" />
      </div>

      {/* Title */}
      <h1 className="login-title">Welcome back!</h1>

      {/* Email Field */}
      <div className="form-field">
        <ReactInput
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onInput={(e: Event) => setEmail((e.target as HTMLInputElement).value)}
        >
          <span slot="addon-left" className="input-icon">
            <Mail size={18} style={{ color: 'var(--ag-text-secondary)' }} />
          </span>
        </ReactInput>
      </div>

      {/* Password Field */}
      <div className="form-field">
        <ReactInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onInput={(e: Event) => setPassword((e.target as HTMLInputElement).value)}
        >
          <span slot="addon-left" className="input-icon">
            <Lock size={18} style={{ color: 'var(--ag-text-secondary)' }} />
          </span>
        </ReactInput>
      </div>

      {/* Auxiliary Row - Remember me & Forgot password */}
      <div className="auxiliary-row">
        <ReactCheckbox
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        >
          Remember me
        </ReactCheckbox>
        <ReactLink href="#" variant="monochrome">
          Forgot password?
        </ReactLink>
      </div>

      {/* Login Button */}
      <div className="login-button">
        <ReactButton
          type="submit"
          variant="monochrome"
          shape="rounded"
        >
          Login
        </ReactButton>
      </div>

      {/* Divider */}
      <ReactDivider>or</ReactDivider>

      {/* Social Login Buttons */}
      <div className="social-buttons">
        <div className="social-button">
          <ReactButton bordered shape="rounded">
            <img src="/facebook-icon.svg" alt="" className="social-icon" />
            Facebook
          </ReactButton>
        </div>
        <div className="social-button">
          <ReactButton bordered shape="rounded">
            <img src="/google-icon.svg" alt="" className="social-icon" />
            Google
          </ReactButton>
        </div>
      </div>

      {/* Footer */}
      <p className="login-footer">
        Don't have an account?{' '}
        <ReactLink href="#" variant="primary">
          Sign up
        </ReactLink>
      </p>
    </form>
  );
}

function App() {
  return (
    <div className="login-page">
      {/* Left Column - Form (visible on all breakpoints) */}
      <div className="login-column-left">
        {/* Card wrapper for tablet only */}
        <div className="login-card-wrapper">
          <ReactCard className="login-card">
            <LoginForm />
          </ReactCard>
        </div>
        {/* Direct form for mobile and desktop */}
        <div className="login-form-wrapper">
          <LoginForm />
        </div>
      </div>

      {/* Right Column - Background Image (desktop only) */}
      <div className="login-column-right">
        <picture>
          <source media="(min-width: 768px)" srcSet="/login-bg.jpg" />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
            alt=""
            className="login-bg-image"
          />
        </picture>
      </div>

      {/* Full-screen background for tablet */}
      <div className="tablet-background">
        <img src="/login-bg.jpg" alt="" />
      </div>
    </div>
  );
}

export default App;
