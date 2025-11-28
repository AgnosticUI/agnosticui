import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import {
  IconButtonFx,
  type IconButtonFxProps,
  type IconButtonClickEvent,
  type IconButtonActivateEvent,
} from '../core/IconButtonFx';

export interface ReactIconButtonFxProps extends IconButtonFxProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
}

export const ReactIconButtonFx = createComponent({
  tagName: 'ag-icon-button-fx',
  elementClass: IconButtonFx,
  react: React,
  events: {
    onIconButtonClick: 'icon-button-click' as EventName<IconButtonClickEvent>,
    onIconButtonActivate: 'icon-button-activate' as EventName<IconButtonActivateEvent>,
  },
});

export type { IconButtonClickEvent, IconButtonActivateEvent } from '../core/_IconButtonFx';
