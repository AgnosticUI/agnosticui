import { FC } from 'react';
export interface ProgressProps {
    max: number;
    value?: number;
    css?: string;
}
export declare const Progress: FC<ProgressProps>;
