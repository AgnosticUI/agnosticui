import { createComponent } from '@lit/react';
import React from 'react';
import { Loader, type LoaderProps } from '../core/Loader';

export type ReactLoaderProps = LoaderProps;

export const ReactLoader = createComponent({
  tagName: 'ag-loader',
  elementClass: Loader,
  react: React,
  events: {
    // onEventName: 'event-name',
  },
});
