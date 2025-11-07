
import { createComponent } from '@lit/react';
import React from 'react';
import { Link } from '../core/Link';
import type { LinkProps } from '../core/_Link';

export type ReactLinkProps = LinkProps;

export const ReactLink = createComponent({
  tagName: 'ag-link',
  elementClass: Link,
  react: React,
  events: {
    // Native events (click, focus, blur) work automatically
  },
});
