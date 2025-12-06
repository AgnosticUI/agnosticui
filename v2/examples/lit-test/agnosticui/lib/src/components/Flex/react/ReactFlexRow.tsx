import { createComponent } from '@lit/react';
import React from 'react';
import { FlexRow } from '../FlexRow';
import type { FlexRowProps } from '../core/index';

export type ReactFlexRowProps = FlexRowProps;

export const ReactFlexRow = createComponent({
  tagName: 'ag-flex-row',
  elementClass: FlexRow,
  react: React,
  events: {},
});
