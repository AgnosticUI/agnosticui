import { cloneElement, useCallback, useState, FC, ReactNode, ReactElement } from 'react';
import styles from './tabs.module.css';

export interface TabHeaderProps {
  isBorderless?: boolean;
  isSkinned?: boolean;
  children: ReactNode;
}

export const TabHeader: FC<TabHeaderProps> = ({ isBorderless = false, isSkinned, children }) => (
  <div
    className={`${isSkinned ? styles.tabList : styles.tabListBase} ${
      isBorderless ? styles.tabListBorderless : ''
    }`}
    role="tablist"
    aria-label="Tabs"
  >
    {children}
  </div>
);

export interface TabPanelProps {
  title: string;
  children: ReactNode;
}

export const TabPanel: FC<TabPanelProps> = ({ title, children }) => (
  <div aria-label={title} role="tabpanel">
    {children}
  </div>
);

export interface TabButtonProps {
  index?: number;
  isBorderless?: boolean;
  isSkinned?: boolean;
  disabledOptions?: number[];
  isDisabled?: boolean;
  size?: 'small' | 'large' | 'jumbo' | '';
  selectedTab?: number;
  children: ReactNode;
  // onClick calls Tabs component's selectTab which indicates
  // what corresponding panel should be revealed.
  onClick?: (activeIndex: number) => void;
}

export const TabButton: FC<TabButtonProps> = ({
  size = '',
  isBorderless = false,
  isSkinned,
  isDisabled = false,
  disabledOptions = [],
  index = 0,
  selectedTab = 0,
  onClick,
  children,
}) => {
  const tabButtonClasses = (isActive: boolean) => {
    const klasses = [
      styles.tabItem,
      isSkinned ? styles.tabButton : styles.tabButtonBase,
      isActive ? styles.active : '',
      isBorderless ? styles.tabButtonBorderless : '',
      size === 'large' ? styles.tabButtonLarge : '',
      size === 'jumbo' ? styles.tabButtonJumbo : '',
    ];
    return klasses.filter((klass) => klass.length).join(' ');
  };
  return (
    <button
      key={`${index}`}
      onClick={() => onClick && onClick(index)}
      className={tabButtonClasses(selectedTab === index)}
      disabled={isDisabled || disabledOptions.includes(index)}
      role="tab"
      aria-selected={selectedTab === index}
    >
      {children}
    </button>
  );
};

export interface TabProps {
  isBorderless?: boolean;
  isDisabled?: boolean;
  disabledOptions?: number[];
  isSkinned?: boolean;
  size?: 'small' | 'large' | 'jumbo' | '';
  tabButtons: ReactElement[];
  tabPanels: ReactElement[];
}

export const Tabs: FC<TabProps> = ({
  size = '',
  isBorderless = false,
  disabledOptions = [],
  isDisabled = false,
  isSkinned = true,
  tabButtons,
  tabPanels,
}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectTab = useCallback(
    (index) => {
      setSelectedTab(index);
    },
    [setSelectedTab],
  );

  return (
    <>
      <TabHeader isBorderless={isBorderless} isSkinned={isSkinned}>
        {tabButtons.map((btn, i) => cloneElement(
          btn,
          {
            key: i,
            title: btn.props.title,
            size,
            isBorderless,
            isDisabled,
            disabledOptions,
            isSkinned,
            index: i,
            selectedTab,
            onClick: selectTab,
            children: btn.props.children,
          },
          btn.props.children,
        ))}
      </TabHeader>
      {tabPanels[selectedTab]}
    </>
  );
};
