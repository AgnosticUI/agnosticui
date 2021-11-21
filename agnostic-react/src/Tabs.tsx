import React, {
  cloneElement,
  useCallback,
  useRef,
  KeyboardEvent,
  useState,
  FC,
  ReactNode,
  MutableRefObject,
  RefObject,
  ReactElement,
  createRef,
} from 'react';
import styles from './tabs.module.css';

export interface TabListProps {
  size?: 'small' | 'large' | 'xlarge' | '';
  disabledOptions?: number[];
  isDisabled?: boolean;
  isBorderless?: boolean;
  isSkinned?: boolean;
  selectedTab?: number;
  selectTab: (index: number) => void;
  isVerticalOrientation?: boolean;
  tabButtons: ReactElement[];
}

export const TabList: FC<TabListProps> = ({
  size = '',
  selectedTab = 0,
  disabledOptions = [],
  isDisabled = false,
  isBorderless = false,
  isVerticalOrientation = false,
  selectTab,
  isSkinned,
  tabButtons,
}) => {
  const tabRefs: MutableRefObject<RefObject<HTMLButtonElement>[]> = useRef(
    tabButtons.map(() => createRef()),
  );

  const focusTab = useCallback(
    (index: number, direction?: string) => {
      /**
       * direction is optional because we only need that when we're arrow navigating.
       * If they've hit ENTER|SPACE we're focusing the current item. If HOME focus(0).
       * If END focus(tabButtons.length - 1)...and so on.
       */
      let i: number = index;
      if (direction === 'asc') {
        i += 1;
      } else if (direction === 'desc') {
        i -= 1;
      }

      // Circular navigation
      //
      // If we've went beyond "start" circle around to last
      if (i < 0) {
        i = tabButtons.length - 1;
      } else if (i >= tabButtons.length) {
        // We've went beyond "last" so circle around to first
        i = 0;
      }

      const nextTab = tabRefs.current[i].current;

      if (nextTab) {
        // Edge case: We hit a tab button that's been disabled. If so, we recurse, but
        // only if we've been supplied a `direction`. Otherwise, nothing left to do.
        if (nextTab.disabled && direction) {
          // Retry with new `i` index going in same direction
          focusTab(i, direction);
        } else {
          // Nominal case is to just focs next tab :)
          nextTab.focus();
        }
      }
    },
    [tabButtons],
  );

  const handleKeyDown = (ev: KeyboardEvent<HTMLElement>, index: number) => {
    switch (ev.key) {
      case 'Up': // These first cases are IEEdge :(
      case 'ArrowUp':
        if (isVerticalOrientation) {
          focusTab(index, 'desc');
        }
        break;
      case 'Down':
      case 'ArrowDown':
        if (isVerticalOrientation) {
          focusTab(index, 'asc');
        }
        break;
      case 'Left':
      case 'ArrowLeft':
        if (!isVerticalOrientation) {
          focusTab(index, 'desc');
        }
        break;
      case 'Right':
      case 'ArrowRight':
        if (!isVerticalOrientation) {
          focusTab(index, 'asc');
        }
        break;
      case 'Home':
      case 'ArrowHome':
        focusTab(0);
        break;
      case 'End':
      case 'ArrowEnd':
        focusTab(tabButtons.length - 1);
        break;
      case 'Enter':
      case 'Space':
        focusTab(index);
        selectTab(index);
        break;
      default:
        return;
    }
    ev.preventDefault();
  };
  return (
    <div
      className={`${isSkinned ? styles.tabList : styles.tabListBase} ${
        isBorderless ? styles.tabListBorderless : ''
      }`}
      role="tablist"
      aria-orientation={isVerticalOrientation ? 'vertical' : 'horizontal'}
    >
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
          role: 'tab',
          selectedTab,
          ref: tabRefs.current[i],
          onClick: selectTab,
          onKeyDown: (ev: KeyboardEvent<HTMLElement>) => handleKeyDown(ev, i),
          children: btn.props.children,
        },
        btn.props.children,
      ))}
    </div>
  );
};

export interface TabButtonProps {
  index?: number;
  isBorderless?: boolean;
  isSkinned?: boolean;
  disabledOptions?: number[];
  isDisabled?: boolean;
  size?: 'small' | 'large' | 'xlarge' | '';
  selectedTab?: number;
  controlsPanelId: string;
  children: ReactNode;
  // onClick calls Tabs component's selectTab which indicates
  // what corresponding panel should be revealed.
  onClick?: (activeIndex: number) => void;
  onKeyDown: (ev: KeyboardEvent<HTMLElement>) => void;
}

/**
 * Note that a TabButton must be a direct descendent of TabList to comply with aria role
 * rules as it is required for them to be structured as: tablist (parent) > tab (child).
 */

/* eslint-disable react/prop-types */
export const TabButton = React.forwardRef<HTMLButtonElement, TabButtonProps>(
  (
    {
      size = '',
      isBorderless = false,
      isSkinned,
      isDisabled = false,
      disabledOptions = [],
      index = 0,
      selectedTab = 0,
      onClick,
      onKeyDown,
      controlsPanelId,
      children,
    }: TabButtonProps,
    tabRef: React.ForwardedRef<HTMLButtonElement>,
  ): ReactElement => {
    const tabButtonClasses = (isActive: boolean) => {
      const klasses = [
        styles.tabItem,
        isSkinned ? styles.tabButton : styles.tabButtonBase,
        isActive ? styles.active : '',
        isBorderless ? styles.tabButtonBorderless : '',
        size === 'large' ? styles.tabButtonLarge : '',
        size === 'xlarge' ? styles.tabButtonxlarge : '',
      ];
      return klasses.filter((klass) => klass.length).join(' ');
    };
    return (
      <button
        key={`${index}`}
        onClick={() => onClick && onClick(index)}
        ref={tabRef}
        onKeyDown={onKeyDown}
        className={tabButtonClasses(selectedTab === index)}
        disabled={isDisabled || disabledOptions.includes(index)}
        role="tab"
        aria-controls={controlsPanelId}
        tabIndex={selectedTab === index ? 0 : -1}
        aria-selected={selectedTab === index}
      >
        {children}
      </button>
    );
  },
);
/* eslint-enable react/prop-types */

export interface TabPanelProps {
  id: string;
  isSelected?: boolean;
  children: ReactNode;
}

export const TabPanel: FC<TabPanelProps> = ({ id, isSelected = false, children }) => (
  <div id={id} role="tabpanel" hidden={!isSelected} tabIndex={0}>
    {children}
  </div>
);
export interface TabProps {
  isBorderless?: boolean;
  isDisabled?: boolean;
  disabledOptions?: number[];
  isSkinned?: boolean;
  isVerticalOrientation?: boolean;
  size?: 'small' | 'large' | 'xlarge' | '';
  tabButtons: ReactElement[];
  tabPanels: ReactElement[];
}

export const Tabs: FC<TabProps> = ({
  size = '',
  isBorderless = false,
  disabledOptions = [],
  isDisabled = false,
  isSkinned = true,
  isVerticalOrientation = false,
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

  const baseStyles = () => `${styles.tabs} ${isVerticalOrientation ? styles.tabsVertical : ''}`;

  return (
    <div className={baseStyles()}>
      <TabList
        isVerticalOrientation={isVerticalOrientation}
        isBorderless={isBorderless}
        isSkinned={isSkinned}
        size={size}
        isDisabled={isDisabled}
        disabledOptions={disabledOptions}
        tabButtons={tabButtons}
        selectedTab={selectedTab}
        selectTab={selectTab}
      />
      {cloneElement(tabPanels[selectedTab], {
        isSelected: true,
      })}
    </div>
  );
};
