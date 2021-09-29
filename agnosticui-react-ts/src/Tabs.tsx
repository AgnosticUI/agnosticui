import { cloneElement, useCallback, useState, FC, ReactNode, ReactElement } from 'react';
import styles from './tabs.module.css';

export interface TabHeaderProps {
  isBorderless?: boolean;
  children: ReactNode;
}

export const TabHeader: FC<TabHeaderProps> = ({ isBorderless = false, children }) => (
  <div
    className={`${styles.tabList} ${isBorderless ? styles.tabListBorderless : ''}`}
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
  <div className={styles.pane} aria-label={title} role="tabpanel">
    {children}
  </div>
);

export interface TabButtonProps {
  index?: number;
  isBorderless?: boolean;
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
  index = 0,
  selectedTab = 0,
  onClick,
  children,
}) => {
  const tabButtonClasses = (isActive: boolean) => {
    const klasses = [
      styles.tabItem,
      styles.tabButton,
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
      role="tab"
      aria-selected={selectedTab === index}
    >
      {children}
    </button>
  );
};

export interface TabProps {
  isBorderless?: boolean;
  size?: 'small' | 'large' | 'jumbo' | '';
  tabButtons: ReactElement[];
  tabPanels: ReactElement[];
}

export const Tabs: FC<TabProps> = ({ size = '', isBorderless = false, tabButtons, tabPanels }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectTab = useCallback(
    (index) => {
      setSelectedTab(index);
    },
    [setSelectedTab],
  );

  return (
    <>
      <TabHeader isBorderless={isBorderless}>
        {tabButtons.map((btn, i) => cloneElement(
          btn,
          {
            key: i,
            title: btn.props.title,
            size,
            isBorderless,
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
