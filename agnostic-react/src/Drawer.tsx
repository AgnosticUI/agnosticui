import { FC, ReactElement } from 'react';
import { Dialog } from './Dialog';

export interface DrawerProps {
  id: string;
  drawerRoot: string;
  placement: 'top' | 'bottom' | 'start' | 'end';
  title: string;
  role?: 'dialog' | 'alertdialog';
  drawerRef?: (instance: any) => void;
  isAnimationFadeIn?: boolean;
}

export const Drawer: FC<DrawerProps> = (props): ReactElement => {
  const {
    id,
    drawerRef,
    drawerRoot,
    placement,
    title,
    role = 'dialog',
    isAnimationFadeIn = true,
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
    />
  );
};
