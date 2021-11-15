import { FC } from 'react';
export declare const AvatarGroup: FC;
export interface AvatarProps {
    isRounded?: boolean;
    isSquare?: boolean;
    isTransparent?: boolean;
    type?: 'warning' | 'error' | 'info' | 'success' | '';
    size?: 'small' | 'large' | 'xlarge' | '';
    text?: string;
    imgUrl?: string;
}
export declare const Avatar: FC<AvatarProps>;
