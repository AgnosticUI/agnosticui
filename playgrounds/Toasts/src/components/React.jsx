import { useEffect, useState } from 'react';
import "agnostic-react/dist/esm/index.css";
import { Close, Toasts, Toast } from "agnostic-react";

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
const ToastDemoIcon = ({ type, utilityClasses }) => {
  return (
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
};

export default function React() {
  const [timedToastOpen, setTimedToastOpen] = useState(true);
  const [toastIsOpen1, setToastIsOpen1] = useState(true);
  const [toastIsOpen2, setToastIsOpen2] = useState(true);
  const [toastIsOpen3, setToastIsOpen3] = useState(true);

  useEffect(() => {
    const tout = setTimeout(() => setTimedToastOpen(false), 5000)
    return () => {
      clearTimeout(tout)
    }
  }, [timedToastOpen, setTimedToastOpen]);

  // See https://docs.astro.build/en/reference/api-reference/#importmeta
  return import.meta.env.SSR ? <></> : <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Toast
      </div>
      <Toasts verticalPosition="top" horizontalPosition="end">
        <Toast type="dark">React: Top End. Sticky.</Toast>
      </Toasts>
      <Toasts verticalPosition="top" horizontalPosition="center">
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="dark" utilityClasses="mie8" />} type="dark">
          React: Toast custom icon dark (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="success" utilityClasses="mie8" />} type="success">
          React: Toast custom icon success (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="warning" utilityClasses="mie8" />} type="warning">
          React: Toast custom icon warning (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="info" utilityClasses="mie8" />} type="info">
          React: Toast custom icon info (5 seconds)
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={timedToastOpen} icon={<ToastDemoIcon type="error" utilityClasses="mie8" />} type="error">
          React: Toast custom icon error (5 seconds)
        </Toast>
        <div className="mbe14" />
      </Toasts>
      <Toasts verticalPosition="bottom" horizontalPosition="center">
        <Toast isOpen={toastIsOpen1} isAnimationSlideUp icon={<ToastDemoIcon type="dark" utilityClasses="mie8" />} type="dark">
          <div className="flex-fill">React: Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-light)' }} onClick={() => setToastIsOpen1(false)} />
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen2} isAnimationSlideUp icon={<ToastDemoIcon type="success" utilityClasses="mie8" />} type="success">
          <div className="flex-fill">React: Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-action-from)' }} onClick={() => setToastIsOpen2(false)} />
        </Toast>
        <div className="mbe14" />
        <Toast isOpen={toastIsOpen3} isAnimationSlideUp icon={<ToastDemoIcon type="info" utilityClasses="mie8" />} type="info">
          <div className="flex-fill">React: Closable via close button.</div>
          <Close style={{ color: 'var(--agnostic-primary-dark)' }} onClick={() => setToastIsOpen3(false)} />
        </Toast>
      </Toasts>
  </section>
}
