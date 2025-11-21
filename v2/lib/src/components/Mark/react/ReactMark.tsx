import { createComponent } from '@lit/react';
import React from 'react';
import { Mark, type MarkProps } from '../core/_Mark';

export interface ReactMarkProps extends MarkProps {
  children?: React.ReactNode;
  className?: string;
}

export const ReactMark = createComponent({
  tagName: 'ag-mark',
  elementClass: Mark,
  react: React,
  events: {
    // No custom events for Mark, so this remains empty
  },
});