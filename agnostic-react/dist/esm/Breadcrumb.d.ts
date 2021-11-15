import { FC } from 'react';
export interface BreadcrumbRoute {
    label: string;
    url?: string;
}
export interface BreadcrumbProps {
    routes: BreadcrumbRoute[];
    type?: 'arrow' | 'slash' | 'bullet';
}
export declare const Breadcrumb: FC<BreadcrumbProps>;
