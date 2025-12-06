import { createComponent } from '@lit/react';
import React from 'react';
import { FlexCol } from '../FlexCol';
import type { FlexColProps } from '../core/index';

export type ReactFlexColProps = FlexColProps;

export const ReactFlexCol = createComponent({
  tagName: 'ag-flex-col',
  elementClass: FlexCol,
  react: React,
  events: {},
});
