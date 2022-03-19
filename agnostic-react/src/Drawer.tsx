import { FC, ReactElement } from 'react';
import { Dialog } from './Dialog';

export interface DrawerProps {
  id: string;
  drawerRoot: string;
  drawerRef?: (instance: any) => void;
  placement: 'top' | 'bottom' | 'start' | 'end';
  title: string;
  role?: 'dialog' | 'alertdialog';
  closeButtonLabel?: string;
  closeButtonContent?: React.ReactNode;
  closeButtonPosition?: 'first' | 'last' | 'none';
  isAnimationFadeIn?: boolean;
}

export const Drawer: FC<DrawerProps> = (props): ReactElement => {
  const {
    id,
    drawerRoot,
    drawerRef,
    placement,
    title,
    role = 'dialog',
    isAnimationFadeIn = true,
    children,
  } = props;

  return (
    <Dialog
      id={id}
      dialogRoot={drawerRoot}
      drawerPlacement={placement}
      titleId={`${title.replaceAll(' ', '-').toLowerCase()}-id`}
      title={title}
      role={role}
      dialogRef={drawerRef}
      closeButtonLabel="Close drawer"
      isAnimationFadeIn={isAnimationFadeIn}
    >
      {children}
    </Dialog>
  );
};
