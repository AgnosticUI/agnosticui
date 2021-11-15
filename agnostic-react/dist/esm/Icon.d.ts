import { FC } from 'react';
export interface IconProps {
    isSkinned?: boolean;
    type?: 'warning' | 'error' | 'info' | 'success' | '';
    size?: 14 | 16 | 18 | 20 | 24 | 32 | 36 | 40 | 48 | 56 | 64;
}
export declare const Icon: FC<IconProps>;
