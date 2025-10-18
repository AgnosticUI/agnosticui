
import { createComponent } from '@lit/react';
import React from 'react';
import { Avatar, type AvatarProps } from '../core/_Avatar';

export type ReactAvatarProps = AvatarProps;

export const ReactAvatar = createComponent({
  tagName: 'ag-avatar',
  elementClass: Avatar,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
