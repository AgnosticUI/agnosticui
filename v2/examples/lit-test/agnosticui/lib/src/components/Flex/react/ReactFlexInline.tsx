import { createComponent } from '@lit/react';
import React from 'react';
import { FlexInline } from '../FlexInline';
import type { FlexInlineProps } from '../core/index';

export type ReactFlexInlineProps = FlexInlineProps;

export const ReactFlexInline = createComponent({
  tagName: 'ag-flex-inline',
  elementClass: FlexInline,
  react: React,
  events: {},
});
