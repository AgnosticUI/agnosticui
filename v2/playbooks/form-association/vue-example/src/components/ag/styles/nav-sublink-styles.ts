import { css } from 'lit';

export const NAV_SUBLINK_STYLES = css`
  ::slotted(.nav-sublink) {
    display: block;
    padding: var(--ag-space-2);
    border-radius: var(--ag-radius-sm);
    text-decoration: none;
    color: var(--ag-text-primary);
    font-size: var(--ag-font-size-sm);
    transition: background 0.15s;
        white-space: nowrap;
  }
  ::slotted(.nav-sublink:hover) {
    background: var(--ag-background-secondary);
  }
  ::slotted(.nav-sublink.active) {
    background: var(--ag-primary-background);
    color: var(--ag-primary-text);
    font-weight: 500;
  }
`;
