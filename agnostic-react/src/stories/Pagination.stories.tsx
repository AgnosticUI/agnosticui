import { Meta } from '@storybook/react';
import { Pagination, PagingLink } from '../Pagination';

export default {
  title: 'AG—React (Beta)/Pagination',
  component: Pagination,
} as Meta;

const links: PagingLink[] = [
  {
    label: 'Previous',
    isDisabled: true,
    href: '#some-previous-href',
  },
  {
    label: '1',
    href: '#page-1',
  },
  {
    label: '2',
    href: '#page-2',
    isActive: true,
  },
  {
    label: '3',
    href: '#page-3',
  },
  {
    // when no href property this is assumed to be a link divider and
    // NOT placed within anchor <a> tags
    label: '...',
  },
  {
    label: '99',
    href: '#page-99',
  },
  {
    label: 'Next',
    href: '#page-4',
  },
];

export const Default = () => <Pagination pagingLinks={links} />;
export const CustomAriaLabel = () => (
  <>
    <p className="mbs48 mbe16">
      If you supply
      {' '}
      <i>ariaLabel</i>
      {' '}
      we will use that; otherwise we fallback to
      {' '}
      <i>aria-label=&ldquo;pagination&rdquo;</i>
    </p>
    <Pagination ariaLabel="Pagination to help navigate table" pagingLinks={links} />
  </>
);
export const CenterJustified = () => <Pagination justify="center" pagingLinks={links} />;
export const EndJustified = () => <Pagination justify="end" pagingLinks={links} />;
export const ExplicitStartJustified = () => (
  <>
    <p className="mbs48 mbe16">
      Start justify by adding the
      {' '}
      <i>pagination-start</i>
      {' '}
      class (or omitting altogether as we do in
      the Default example; because flexbox will default to
      {' '}
      <i>flex-start</i>
      {' '}
      anyway).
    </p>
    <Pagination justify="start" pagingLinks={links} />
  </>
);
