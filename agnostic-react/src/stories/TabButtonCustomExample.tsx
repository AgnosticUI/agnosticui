import { ReactNode, ForwardedRef, KeyboardEvent, forwardRef } from 'react';
// We can override some of the boilerplate button styles by passing the `css` prop.
import styles from './TabButtonCustom.module.css';
import buttonStyles from '../button.module.css';

export interface TabButtonCustomProps {
  css?: string;
  index?: number;
  selectedTab?: number;
  controlsPanelId: string;
  children: ReactNode;
  // onClick calls Tabs component's selectTab which indicates
  // what corresponding panel should be revealed.
  // eslint-disable-next-line no-unused-vars
  onClick?: (activeIndex: number) => void;
  onKeyDown?: (ev: KeyboardEvent<HTMLElement>) => void;
}

/* eslint-disable react/prop-types */
export const TabButtonCustom = forwardRef<HTMLButtonElement, TabButtonCustomProps>(
  (
    {
      css = '',
      index = 0,
      selectedTab = 0,
      onClick,
      onKeyDown,
      controlsPanelId,
      children,
    }: TabButtonCustomProps,
    tabRef: ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => (
    <>
      <button
        key={`${index}`}
        className={`${buttonStyles.btn} ${buttonStyles.bordered} ${styles.customTabButton} ${
          styles.active
        } ${css || ''}`}
        onClick={() => onClick && onClick(index)}
        onKeyDown={onKeyDown}
        ref={tabRef}
        role="tab"
        aria-controls={controlsPanelId}
        tabIndex={selectedTab === index ? 0 : -1}
        aria-selected={selectedTab === index}
      >
        {children}
      </button>
    </>
  ),
);
/* eslint-enable react/prop-types */
