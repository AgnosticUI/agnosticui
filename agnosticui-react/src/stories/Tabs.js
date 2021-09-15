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

export const TabButton = ({ title, size, isBorderless, index, selectedTab, selectTab }) => {
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
      key={`${title}-${index}`}
      onClick={() => selectTab(index)}
      className={tabButtonClasses(selectedTab === index)}
      role="tab"
      aria-selected={selectedTab === index}
    >
      {title}
    </button>
  );
};
TabButton.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  isBorderless: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  selectedTab: PropTypes.number.isRequired,
  selectTab: PropTypes.func.isRequired,
};

const Tabs = ({ size, isBorderless, tabPanels }) => {
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
        {tabPanels.map((tab, i) => (
          <TabButton
            key={i}
            title={tab.props.title}
            size={size}
            isBorderless={isBorderless}
            index={i}
            selectedTab={selectedTab}
            selectTab={selectTab}
          />
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
