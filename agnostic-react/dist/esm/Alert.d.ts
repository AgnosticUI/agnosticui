import { FC } from 'react';
export interface AlertProps {
    isRounded?: boolean;
    isBorderAll?: boolean;
    isBorderLeft?: boolean;
    isBorderRight?: boolean;
    isBorderTop?: boolean;
    isBorderBottom?: boolean;
    isBlockEnd?: boolean;
    type?: 'warning' | 'error' | 'info' | 'success' | '';
}
export declare const Alert: FC<AlertProps>;
