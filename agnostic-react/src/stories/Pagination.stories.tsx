import { Meta } from '@storybook/react';
import { Pagination, PagingLink } from '../Pagination';

export default {
  title: 'AG—React (Beta)/Pagination',
  component: Pagination,
} as Meta;

const log = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  const anchor: HTMLAnchorElement = event.currentTarget;
  const hash = anchor.href.split('#')[1];
  if (hash) {
    // eslint-disable-next-line no-console
    console.log('URL hash: ', hash);
  }
};

const links: PagingLink[] = [
  {
    label: 'Previous',
    isDisabled: true,
    href: '#some-previous-href',
  },
  {
    label: '1',
    href: '#page-1',
    onClick: log,
  },
  {
    label: '2',
    href: '#page-2',
    isActive: true,
    onClick: log,
  },
  {
    label: '3',
    href: '#page-3',
    onClick: log,
  },
  {
    // when no href property this is assumed to be a "gap" or "offset"
    // and NOT placed within anchor <a> tags
    label: '...',
  },
  {
    label: '99',
    href: '#page-99',
    onClick: log,
  },
  {
    label: 'Next',
    href: '#page-4',
    onClick: log,
  },
];

export const Default = () => <Pagination pagingLinks={links} />;
export const Bordered = () => <Pagination isBordered pagingLinks={links} />;
export const CenterJustified = () => <Pagination justify="center" pagingLinks={links} />;
export const EndJustified = () => <Pagination justify="end" pagingLinks={links} />;
export const ExplicitStartJustified = () => (
  <>
    <p className="mbe16">
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

export const CustomAriaLabel = () => (
  <>
    <p className="mbe16">
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

export const AngleQuotes = () => {
  const fancyLinks = links;
  /**
   * How? Google for the character like 'left single angle quote' to find site like
   * https://www.compart.com/en/unicode/U+2039 and take the character code.
   */
  fancyLinks[0].label = `${String.fromCharCode(8249)} Previous`;
  fancyLinks[0].isDisabled = false;
  fancyLinks[links.length - 1].label = `Next ${String.fromCharCode(8250)}`;
  const evenMoreLinks = [
    { label: `${String.fromCharCode(171)} First`, href: '#link-to-first' },
    ...fancyLinks,
    { label: `Last ${String.fromCharCode(187)}`, href: '#link-to-very-last' },
  ];
  return (
    <>
      <p className="mbe16">
        If you&apos;d like to use angle quotes or similar, you can just place theme inside the label
        using
        {' '}
        <i>String.fromCharCode</i>
      </p>
      <Pagination isBordered pagingLinks={evenMoreLinks} />
    </>
  );
};

export const Simple = () => {
  const simpleLinks = [
    {
      label: `${String.fromCharCode(8249)} Previous`,
      href: '#link-to-previousj',
      isDisabled: true,
    },
    { label: `Next ${String.fromCharCode(8250)}`, href: '#link-to-next' },
  ];
  return (
    <>
      <p className="mbe16">
        Simple cursor pagination works too. Just pass whatever you want displayed in the
        {' '}
        <i>pagingLinks</i>
        {' '}
        prop!
      </p>
      <Pagination isBordered pagingLinks={simpleLinks} />
    </>
  );
};
