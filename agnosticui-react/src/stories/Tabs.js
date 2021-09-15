import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css';

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

export const TabButton = ({ size, isBorderless, index, selectedTab, onClick, children }) => {
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
  return (
    <button
      key={`${index}`}
      onClick={() => onClick(index)}
      className={tabButtonClasses(selectedTab === index)}
      role="tab"
      aria-selected={selectedTab === index}
    >
      {children}
    </button>
  );
};

TabButton.propTypes = {
  children: PropTypes.node.isRequired,
  // The tab manager (aka Tabs below) mixes these in via cloneElement
  index: PropTypes.number,
  isBorderless: PropTypes.bool,
  size: PropTypes.string,
  selectedTab: PropTypes.number,
  onClick: PropTypes.func,
};
TabButton.defaultProps = {
  size: '',
  isBorderless: false,
};

const Tabs = ({ size, isBorderless, tabButtons, tabPanels }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectTab = useCallback(
    (index) => {
      setSelectedTab(index);
    },
    [setSelectedTab]
  );

  return (
    <>
      <TabHeader isBorderless={isBorderless}>
        {tabButtons.map((btn, i) =>
          React.cloneElement(
            btn,
            {
              key: i,
              title: btn.props.title,
              size: size,
              isBorderless: isBorderless,
              index: i,
              selectedTab: selectedTab,
              onClick: selectTab,
              children: btn.children,
            },
            btn.props.children
          )
        )}
      </TabHeader>
      {tabPanels[selectedTab]}
    </>
  );
};
Tabs.propTypes = {
  size: PropTypes.string,
  isBorderless: PropTypes.bool,
  tabButtons: PropTypes.array.isRequired,
  tabPanels: PropTypes.array.isRequired,
};

Tabs.defaultProps = {
  size: '',
  isBorderless: false,
};

export default Tabs;
