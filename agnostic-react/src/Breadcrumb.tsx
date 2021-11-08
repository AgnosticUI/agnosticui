import { FC, ReactElement } from 'react';
import styles from './breadcrumb.module.css';

export interface BreadcrumbRoute {
  label: string;
  url?: string;
}

export interface BreadcrumbProps {
  routes: BreadcrumbRoute[];
  type?: 'arrow' | 'slash' | 'bullet';
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ type = 'slash', routes }): ReactElement => {
  // Type might be empty string so we only capitalize if it's truthy
  const typeCapitalized = type ? `${type.slice(0, 1).toUpperCase()}${type.slice(1)}` : '';

  const breadcrumbClasses = [styles.breadcrumb, type ? styles[`breadcrumb${typeCapitalized}`] : '']
    .filter((cls) => cls)
    .join(' ');

  const isLast = (crRoutes: BreadcrumbRoute[], idx: number): boolean => idx === crRoutes.length - 1;

  const crumbClasses = (isLastCrumb?: boolean): string => [styles.breadcrumbItem, isLastCrumb ? styles.active : ''].filter((c) => c).join(' ');

  return (
    <nav aria-label="breadcrumbs">
      <ol className={breadcrumbClasses}>
        {routes.map((route, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i} className={crumbClasses(isLast(routes, i))}>
            {i !== routes.length - 1 && route.url ? (
              <a href={route.url}>{route.label}</a>
            ) : (
              <>{route.label}</>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
