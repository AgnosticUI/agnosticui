import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';
// We can override some of the boilerplate button styles by passing the `css` prop.
import styles from './TabButtonCustom.module.css';

const TabButtonCustom = ({ index, selectedTab, onClick, css, children }) => {
  return (
    <Button
      isBordered={true}
      key={`${index}`}
      onClick={() => onClick(index)}
      role="tab"
      aria-selected={selectedTab === index}
      css={`
        ${styles.customTabButton} ${styles.active} ${css ? css : ''}
      `}
    >
      {children}
    </Button>
  );
};

TabButtonCustom.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.string,
  // The tab manager mixes these in via cloneElement
  index: PropTypes.number,
  selectedTab: PropTypes.number,
  // Custom tab button must call this with the current index
  onClick: PropTypes.func,
  // isBorderless: PropTypes.bool, // ignored in this example
  // size: PropTypes.string, // ignored in this example
};
TabButtonCustom.defaultProps = {
  styles: '',
};

export default TabButtonCustom;
