import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './tabs.module.css';

export const Tab = ({ title, children }) => {
  return (
    <div className={styles.pane} aria-label={title} role="tabpanel">
      {children}
    </div>
  );
};
Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Tabs = ({ size, children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabButtonClasses = (active) => {
    let klasses = [
      styles[`tabItem`],
      styles[`tabButton`],
      active ? styles['active'] : '',
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
      <div className={styles.tabList} role="tablist" aria-label="Tabs">
        {children.map((tab, i) => (
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
      </div>
      {children[selectedTab]}
    </>
  );
};

Tabs.propTypes = {
  size: PropTypes.string,
  children: PropTypes.array.isRequired,
};

Tabs.defaultProps = {
  size: '',
};

export default Tabs;
