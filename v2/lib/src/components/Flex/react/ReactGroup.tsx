import { createComponent } from '@lit/react';
import React from 'react';
import { Group, type GroupProps } from '../core/index';

export type ReactGroupProps = GroupProps;

export const ReactGroup = createComponent({
  tagName: 'ag-flex-row',
  elementClass: Group,
  react: React,
  events: {},
});
