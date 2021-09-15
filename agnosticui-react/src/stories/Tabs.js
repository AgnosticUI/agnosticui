import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css';

export const TabPanel = ({ title, children }) => {
  return (
    <div className={styles.pane} aria-label={title} role="tabpanel">
      {children}
    </div>
  );
};
TabPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const TabHeader = ({ isBorderless, children }) => {
  return (
    <div
      className={`${styles.tabList} ${isBorderless ? styles.tabListBorderless : ''}`}
      role="tablist"
      aria-label="Tabs"
    >
      {children}
    </div>
  );
};

TabHeader.propTypes = {
  isBorderless: PropTypes.bool,
  children: PropTypes.array.isRequired,
};

const Tabs = ({ size, isBorderless, tabPanels }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabButtonClasses = (active) => {
    let klasses = [
      styles[`tabItem`],
      styles[`tabButton`],
      active ? styles['active'] : '',
      isBorderless ? styles.tabButtonBorderless : '',
      size === 'large' ? styles['tabButtonLarge'] : '',
      size === 'jumbo' ? styles['tabButtonJumbo'] : '',
    ];
    return klasses.filter((klass) => klass.length).join(' ');
  };

  const selectTab = useCallback(
    (index) => {
      setSelectedTab(index);
    },
    [setSelectedTab]
  );

  return (
    <>
      <TabHeader isBorderless={isBorderless}>
        {tabPanels.map((tab, i) => (
          <button
            key={`${tab.props.title}-${i}`}
            onClick={() => selectTab(i)}
            className={tabButtonClasses(selectedTab === i)}
            role="tab"
            aria-selected={selectedTab === i}
          >
            {tab.props.title}
          </button>
        ))}
      </TabHeader>
      {tabPanels[selectedTab]}
    </>
  );
};

Tabs.propTypes = {
  size: PropTypes.string,
  additionalButtonCss: PropTypes.string,
  isBorderless: PropTypes.bool,
  tabPanels: PropTypes.array.isRequired,
};

Tabs.defaultProps = {
  size: '',
  isBorderless: false,
};

export default Tabs;
