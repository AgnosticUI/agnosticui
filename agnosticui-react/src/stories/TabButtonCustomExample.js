import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';
// We can override some of the boilerplate button styles by passing the `css` prop.
import styles from './TabButtonCustom.module.css';

const TabButtonCustom = ({ index, selectedTab, onClick, children }) => {
  return (
    <Button
      isBordered={selectedTab === index ? false : true}
      mode="primary"
      key={`${index}`}
      onClick={() => onClick(index)}
      role="tab"
      aria-selected={selectedTab === index}
      css={`
        ${styles.customHoverFocus} ${styles.active}
      `}
    >
      {children}
    </Button>
  );
};

TabButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
  // The tab manager mixes these in via cloneElement
  index: PropTypes.number,
  selectedTab: PropTypes.number,
  onClick: PropTypes.func,
  isBorderless: PropTypes.bool, // ignored in this example
  size: PropTypes.string, // ignored in this example
};
TabButtonCustom.defaultProps = {
  size: '',
  isBorderless: false,
};

export default TabButtonCustom;
