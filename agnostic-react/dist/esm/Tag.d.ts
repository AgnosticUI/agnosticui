import { FC } from 'react';
export interface TagProps {
    isUppercase?: boolean;
    type?: 'warning' | 'error' | 'info' | 'success' | '';
    shape?: 'pill' | 'round' | 'circle' | '';
}
export declare const Tag: FC<TagProps>;
