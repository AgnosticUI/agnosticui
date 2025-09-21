import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import type { Tooltip as TooltipWC } from '../core/_Tooltip';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ag-tooltip': React.DetailedHTMLProps<React.HTMLAttributes<TooltipWC> & {
        content?: string;
        placement?: 'top' | 'bottom' | 'left' | 'right';
        trigger?: string;
        distance?: number;
        skidding?: number;
        disabled?: boolean;
      }, TooltipWC>;
    }
  }
}

interface TooltipProps {
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  trigger?: string;
  children: React.ReactElement;
  onShow?: () => void;
  onHide?: () => void;
}

export interface TooltipHandle {
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

export const Tooltip = forwardRef<TooltipHandle, TooltipProps>((
  { children, content, placement, trigger, onShow, onHide },
  ref
) => {
  const tooltipRef = useRef<TooltipWC>(null);

  useImperativeHandle(ref, () => ({
    show: () => tooltipRef.current?.show(),
    hide: () => tooltipRef.current?.hide(),
    toggle: () => tooltipRef.current?.toggle(),
  }));

  useEffect(() => {
    // Dynamically import tooltip component only on client side
    const loadTooltip = async () => {
      try {
        await import('../core/_Tooltip');
      } catch (error) {
        // Tooltip component failed to load in test environment
        void error;
      }
    };

    loadTooltip();

    const handleShow = () => onShow?.();
    const handleHide = () => onHide?.();

    const currentTooltip = tooltipRef.current;
    currentTooltip?.addEventListener('show', handleShow);
    currentTooltip?.addEventListener('hide', handleHide);

    return () => {
      currentTooltip?.removeEventListener('show', handleShow);
      currentTooltip?.removeEventListener('hide', handleHide);
    };
  }, [onShow, onHide]);

  return (
    <ag-tooltip
      ref={tooltipRef}
      content={String(content)}
      placement={placement}
      trigger={trigger}
    >
      {children}
    </ag-tooltip>
  );
});

Tooltip.displayName = 'Tooltip';
