import { createComponent } from '@lit/react';
import React from 'react';
import { Stack, type StackProps } from '../core/index';

export type ReactStackProps = StackProps;

export const ReactStack = createComponent({
  tagName: 'ag-flex-col',
  elementClass: Stack,
  react: React,
  events: {},
});
