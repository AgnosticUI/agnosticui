import { createComponent } from '@lit/react';
import React from 'react';
import { FlexContainer } from '../core/FlexContainer';
import type { FlexContainerProps } from '../core/index';

export type ReactFlexContainerProps = FlexContainerProps;

export const ReactFlexContainer = createComponent({
  tagName: 'ag-flex-container',
  elementClass: FlexContainer,
  react: React,
  events: {},
});
