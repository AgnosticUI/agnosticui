import { css } from 'lit';

export const accordionStyles = css`
/* ⚠️ AI-generated vibe: review for accessibility + performance */
:host {
  --material-accordion-primary: #1976d2;
  --material-accordion-on-primary: #ffffff;
  --material-accordion-primary-container: #d1e4ff;
  --material-accordion-on-primary-container: #001d36;
  --material-accordion-surface: #ffffff;
  --material-accordion-on-surface: #1c1b1f;
  --material-accordion-surface-variant: #f5f5f5;
  --material-accordion-on-surface-variant: #49454f;
  --material-accordion-outline: #e0e0e0;
  --material-accordion-outline-variant: #c4c7c5;
  --material-accordion-background: #fefbff;
  --material-accordion-on-background: #1c1b1f;
  --material-accordion-hover-surface: #eeeeee;
  --material-accordion-focus-outline: #1976d2;
  --material-accordion-disabled: #1c1b1f61;
  --material-accordion-elevation-0: none;
  --material-accordion-elevation-1: 0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
  --material-accordion-elevation-2: 0 1px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
  --material-accordion-elevation-3: 0 2px 3px rgba(0, 0, 0, 0.3), 0 6px 10px 4px rgba(0, 0, 0, 0.15);
  --material-accordion-font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
  --material-accordion-header-font-size: 16px;
  --material-accordion-header-font-weight: 500;
  --material-accordion-header-line-height: 1.5;
  --material-accordion-header-letter-spacing: 0.1px;
  --material-accordion-body-font-size: 14px;
  --material-accordion-body-font-weight: 400;
  --material-accordion-body-line-height: 1.5;
  --material-accordion-body-letter-spacing: 0.25px;
  --material-accordion-container-max-width: 600px;
  --material-accordion-container-margin: 0 auto;
  --material-accordion-item-gap: 8px;
  --material-accordion-item-border-radius: 12px;
  --material-accordion-item-border-width: 1px;
  --material-accordion-header-padding: 16px 20px;
  --material-accordion-header-gap: 12px;
  --material-accordion-content-padding: 16px 20px 20px;
  --material-accordion-content-padding-collapsed: 0 20px;
  --material-accordion-icon-size: 24px;
  --material-accordion-motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --material-accordion-motion-duration-medium2: 300ms;
  --material-accordion-icon-transition: transform var(--material-accordion-motion-duration-medium2) var(--material-accordion-motion-easing-standard);
}

:host {
  border: var(--material-accordion-item-border-width) solid var(--material-accordion-outline);
  border-radius: var(--material-accordion-item-border-radius);
  margin-bottom: var(--material-accordion-item-gap);
  background: var(--material-accordion-surface);
  box-shadow: var(--material-accordion-elevation-1);
  transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  display: block;
}

:host(:hover) {
  box-shadow: var(--material-accordion-elevation-2);
}

:host([open]) {
  box-shadow: var(--material-accordion-elevation-3);
}

.header {
  background: var(--material-accordion-surface-variant);
  padding: var(--material-accordion-header-padding);
  font-size: var(--material-accordion-header-font-size);
  font-weight: var(--material-accordion-header-font-weight);
  line-height: var(--material-accordion-header-line-height);
  color: var(--material-accordion-on-surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.header:hover {
  background: var(--material-accordion-hover-surface);
}

.header:focus {
  outline: 2px solid var(--material-accordion-focus-outline);
  outline-offset: -2px;
}

.content {
  background: var(--material-accordion-surface);
  color: var(--material-accordion-on-surface-variant);
  font-size: var(--material-accordion-body-font-size);
  line-height: var(--material-accordion-body-line-height);
  padding: 0 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:host([open]) .content {
  padding: var(--material-accordion-content-padding);
  max-height: 500px;
}

::slotted([slot="header"]) {
  flex: 1;
}

.icon {
  width: var(--material-accordion-icon-size);
  height: var(--material-accordion-icon-size);
  transition: var(--material-accordion-icon-transition);
}

:host([open]) .icon {
  transform: rotate(180deg);
}
`;
