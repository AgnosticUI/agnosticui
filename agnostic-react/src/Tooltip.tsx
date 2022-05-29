import { FC, useRef, ReactElement } from 'react';
import { computePosition, flip, offset as fuOffset, shift, arrow } from '@floating-ui/dom';
import styles from './tooltip.module.css';

export interface TooltipProps {
  position?:
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end';
  offset?: number;
  contentChildren: JSX.Element;
}

export const Tooltip: FC<TooltipProps> = ({
  position = 'top',
  offset = 6,
  contentChildren,
  children,
}): ReactElement => {
  /* eslint-disable-next-line no-console */
  console.log('placement: ', position, 'offset: ', offset);
  const uid = () => `tip-${Date.now().toString(32)}-${Math.random().toString(16).replace(/\./g, '').toString()}`;

  const id = uid();
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipTargetRef = useRef<HTMLDivElement>(null);
  const tooltipArrowRef = useRef<HTMLDivElement>(null);

  const update = () => {
    const tip = tooltipRef?.current;
    const target = tooltipTargetRef?.current;
    const arrowEl = tooltipArrowRef?.current;

    if (tip && target && arrowEl) {
      computePosition(target, tip, {
        placement: position,
        middleware: [
          fuOffset(offset),
          flip(),
          shift({ padding: 4 }),
          arrow({
            element: arrowEl,
            // Offset from edge; fixes issue on left-start, left-end, right-start,
            // etc., where arrow oddly overlaps the rounded corner of content box
            padding: 10,
          }),
        ],
      }).then(({ x, y, placement, middlewareData }) => {
        const arrowX = middlewareData.arrow!.x;
        const arrowY = middlewareData.arrow!.y;
        const staticSide = {
          top: 'bottom',
          right: 'left',
          bottom: 'top',
          left: 'right',
        }[placement.split('-')[0]]!;

        Object.assign(tip.style, {
          left: `${x}px`,
          top: `${y}px`,
        });

        Object.assign(arrowEl.style, {
          left: typeof arrowX === 'number' ? `${arrowX}px` : '',
          top: typeof arrowY === 'number' ? `${arrowY}px` : '',
          right: '',
          bottom: '',
          [staticSide]: '-4px',
        });
      });
    }
  };
  const showTooltip = () => {
    if (tooltipRef?.current) {
      tooltipRef.current.style.display = 'block';
    }
    update();
  };

  const hideTooltip = () => {
    if (tooltipRef?.current) {
      tooltipRef.current.style.display = '';
    }
  };

  return (
    <>
      <div
        ref={tooltipTargetRef}
        aria-describedby={id}
        onFocus={showTooltip}
        onMouseEnter={showTooltip}
        onBlur={hideTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      <div id={id} ref={tooltipRef} role="tooltip" className={styles.tooltip}>
        {contentChildren}
        <div ref={tooltipArrowRef} className={styles.tooltipArrow} />
      </div>
    </>
  );
};
