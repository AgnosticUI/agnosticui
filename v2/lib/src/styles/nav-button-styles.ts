// src/styles/nav-button-styles.ts
import { css } from 'lit';

export const NAV_BUTTON_STYLES = css`
  ::slotted(.nav-button) {
    width: 100%;
    padding: var(--ag-space-2);
    border: none;
    background: transparent;
    color: var(--ag-text-primary);
    font-size: var(--ag-font-size-sm);
    display: flex;
    align-items: center;
    gap: var(--ag-space-2);
    text-align: left;
    cursor: pointer;
    border-radius: var(--ag-border-radius-sm);
    transition: background 0.15s;
  }

  ::slotted(.nav-button:hover) {
    background: var(--ag-background-secondary);
  }

  ::slotted(.nav-button[aria-current="page"]),
  ::slotted(.nav-button.active) {
    background: var(--ag-primary-background);
    color: var(--ag-primary-text);
    font-weight: 600;
  }
`;
