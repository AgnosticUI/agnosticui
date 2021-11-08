import { FC, ReactElement } from 'react';
import styles from './avatar.module.css';

export const AvatarGroupComponent: FC = ({ children }): ReactElement => (
  <div className="avatar-group">{children}</div>
);

export interface AvatarProps {
  isRounded?: boolean;
  isSquare?: boolean;
  isTransparent?: boolean;
  type?: 'warning' | 'error' | 'info' | 'success' | '';
  size?: 'small' | 'large' | 'xlarge' | '';
  text?: string;
  imgUrl?: string;
}

export const Avatar: FC<AvatarProps> = ({
  isRounded = false,
  isSquare = false,
  isTransparent = false,
  type = '',
  size = '',
  text,
  imgUrl,
  children,
}): ReactElement => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';
  const sizeCapitalized = size ? `${size.slice(0, 1).toUpperCase()}${size.slice(1)}` : '';

  const avatarClasses = [
    styles.avatar,
    isRounded ? styles.avatarRounded : '',
    isTransparent ? styles.avatarTransparent : '',
    isSquare ? styles.avatarSquare : '',
    type ? styles[`avatar${typeCapitalized}`] : '',
    size ? styles[`avatar${sizeCapitalized}`] : '',
  ]
    .filter((cls) => cls)
    .join(' ');

  // Use an empty alt attribute for any image that is decorative or not necessary
  // for understanding the content of the page.
  return (
    <span className={avatarClasses} data-text={text || null}>
      {imgUrl && <img src={imgUrl} className={styles.avatarImage} alt="" />}
      {children}
    </span>
  );
};
