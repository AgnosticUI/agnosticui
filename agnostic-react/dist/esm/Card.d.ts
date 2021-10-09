import { FC, HTMLAttributes, ReactNode } from 'react';
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    css?: string;
    isSkinned?: boolean;
    isAnimated?: boolean;
    isStacked?: boolean;
    children?: ReactNode;
}
export declare const Card: FC<CardProps>;
