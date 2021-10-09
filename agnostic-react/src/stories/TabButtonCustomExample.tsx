import { ReactNode, FC } from 'react';
import { Button } from '../Button';
// We can override some of the boilerplate button styles by passing the `css` prop.
import styles from './TabButtonCustom.module.css';

export interface TabButtonCustomProps {
  css?: string;
  index?: number;
  selectedTab?: number;
  children: ReactNode;
  // onClick calls Tabs component's selectTab which indicates
  // what corresponding panel should be revealed.
  // eslint-disable-next-line no-unused-vars
  onClick?: (activeIndex: number) => void;
}

export const TabButtonCustom: FC<TabButtonCustomProps> = ({
  css = '',
  index = 0,
  selectedTab = 0,
  onClick,
  children,
}) => (
  <Button
    isBordered
    key={`${index}`}
    onClick={() => onClick && onClick(index)}
    role="tab"
    aria-selected={selectedTab === index}
    css={`
      ${styles.customTabButton} ${styles.active} ${css || ''}
    `}
  >
    {children}
  </Button>
);
