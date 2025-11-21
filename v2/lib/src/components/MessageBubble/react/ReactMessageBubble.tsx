import { createComponent } from '@lit/react';
import React from 'react';
import { MessageBubble, type MessageBubbleProps } from '../core/_MessageBubble';

export interface ReactMessageBubbleProps extends MessageBubbleProps {
  children?: React.ReactNode;
  className?: string;
}

export const ReactMessageBubble = createComponent({
  tagName: 'ag-message-bubble',
  elementClass: MessageBubble,
  react: React,
  events: {
    // No custom events for MessageBubble, so this remains empty
  },
});