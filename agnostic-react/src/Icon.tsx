import { useEffect, useRef, FC, ReactElement } from 'react';

// We receive SVG as children. But, we need width CSS applied to the SVG itself
// in Safari; so we have to use global CSS like: `.icon-24 > :global(svg) { width: 24px }`
import styles from './icon.module.css';
import stylesIconSvg from './iconsvg.module.css';

export interface IconProps {
  isSkinned?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | '';
  size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64;
}

export const Icon: FC<IconProps> = ({
  isSkinned = true,
  type = '',
  size = '18',
  children,
}): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const iconClasses = [
    // We're initially visually hiding the icon until we've had a
    // chance to add the icon-svg-* classes (otherwise we get FOUC)
    'screenreader-only',
    isSkinned ? styles.icon : styles['icon-base'],
    type ? styles[`icon-${type}`] : '',
    size ? styles[`icon-${size}`] : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  useEffect(() => {
    const svg = ref.current?.querySelector('svg');
    svg?.classList.add(stylesIconSvg['icon-svg']);
    if (size) svg?.classList.add(stylesIconSvg[`icon-svg-${size}`]);
    if (type) svg?.classList.add(stylesIconSvg[`icon-svg-${type}`]);

    // Now that we've setup our SVG classes we can visually unhide the icon
    ref.current?.classList.remove('screenreader-only');
  }, []);

  return (
    <span ref={ref} className={iconClasses}>
      {children}
    </span>
  );
};
