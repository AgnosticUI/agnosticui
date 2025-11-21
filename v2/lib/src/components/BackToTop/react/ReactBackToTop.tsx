import { createComponent } from '@lit/react';
import React from 'react';
import { BackToTop, type BackToTopProps } from '../core/_BackToTop';
import '../core/BackToTop'; // Ensures the custom element is defined

export interface ReactBackToTopProps extends BackToTopProps {
  children?: React.ReactNode;
  className?: string;
}

export const ReactBackToTop = createComponent({
  tagName: 'ag-back-to-top',
  elementClass: BackToTop,
  react: React,
  events: {
    // No custom events for BackToTop, so this remains empty
  },
});
