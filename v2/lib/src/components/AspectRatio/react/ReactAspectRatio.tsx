import * as React from 'react';
import { createComponent } from '@lit/react';
import { AgAspectRatio } from '../core/AspectRatio';

export interface ReactAspectRatioProps {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  width?: number;
  height?: number;
  maxWidth?: number;
}

export const ReactAspectRatio = createComponent({
  tagName: 'ag-aspect-ratio',
  elementClass: AgAspectRatio,
  react: React,
  events: {},
}) as React.ForwardRefExoticComponent<
  ReactAspectRatioProps & React.RefAttributes<AgAspectRatio>
>;
