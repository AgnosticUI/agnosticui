import { FC, ReactElement } from 'react';
import { A11yDialog, A11yDialogProps } from 'react-a11y-dialog';
import { closeButtonContainerClasses, CloseButtonIcon } from './Close';
import styles from './dialog.module.css';

/**
 * Extends A11yDialogProps
 * See https://github.com/KittyGiraudel/react-a11y-dialog/blob/main/index.d.ts
 */
export interface DialogProps extends A11yDialogProps {
  /**
   * Animates the dialog content by fading in. Set to false to disable.
   */
  isAnimationFadeIn?: boolean;
  /**
   * Animates the dialog content by sliding up. Set to false to disable.
   */
  isAnimationSlideUp?: boolean;
}

export const Dialog: FC<DialogProps> = (props): ReactElement => {
  const {
    classNames,
    closeButtonContent,
    isAnimationFadeIn = true,
    isAnimationSlideUp = false,
  } = props;

  // Our default close button sets up an upper right 'X' close button
  const closeButtonContainerKlasses = closeButtonContainerClasses({ size: 'large' });
  let closeButtonClasses = `${closeButtonContainerKlasses} ${styles.dialogCloseUpperRight}`;

  // If `classNames.closeButton` passed in we have to respect and override
  if (classNames?.closeButton) {
    closeButtonClasses = classNames?.closeButton;
  }

  const dialogContentClasses = [
    styles.dialogContent,
    isAnimationFadeIn ? styles.dialogFadeIn : '',
    isAnimationSlideUp ? styles.dialogSlideUp : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  const defaults = {
    container: styles.dialog,
    overlay: styles.dialogOverlay,
    dialog: dialogContentClasses,
    // react-a11y-dialog creates a low-level <p> with role: 'heading', 'aria-level': 1
    // Use any of AgnosticUI's global heading utility classes to visually style `.h1-.h6`.
    // All string classes provided are used; so `mbe16` gets applied as well.
    title: 'h3 mbe16',
    closeButton: closeButtonClasses,
  };

  const closeButton = closeButtonContent || <CloseButtonIcon />;

  // If consumer defines any classNames prop it will override the defaults prop
  const resolvedClassNames = classNames ? { ...defaults, ...classNames } : defaults;

  return <A11yDialog {...props} closeButtonContent={closeButton} classNames={resolvedClassNames} />;
};
