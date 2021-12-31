import React from 'react';
import { Meta } from '@storybook/react';
import { EmptyStateHeader, EmptyStateBody, EmptyStateFooter, EmptyState } from '../EmptyState';
import { Button } from '../Button';

export default {
  title: 'AG—React (Beta)/EmptyState',
  component: EmptyState,
} as Meta;

const Header = () => (
  <EmptyStateHeader>
    <svg xmlns="http://www.w3.org/2000/svg" fill="#999" width="40" height="40" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 2.5a5.5 5.5 0 00-3.096 10.047 9.005 9.005 0 00-5.9 8.18.75.75 0 001.5.045 7.5 7.5 0 0114.993 0 .75.75 0 101.499-.044 9.005 9.005 0 00-5.9-8.181A5.5 5.5 0 0012 2.5zM8 8a4 4 0 118 0 4 4 0 01-8 0z"
      />
    </svg>
  </EmptyStateHeader>
);
const Body = () => (
  <EmptyStateBody>
    <div className="h4">No connections yet</div>
    <p className="mbe16">Click below to add some friends</p>
  </EmptyStateBody>
);
const Footer = () => (
  <EmptyStateFooter>
    <Button mode="primary">Invite friends</Button>
  </EmptyStateFooter>
);

export const Default = () => (
  <>
    <EmptyState>
      <Header />
      <Body />
      <Footer />
    </EmptyState>
  </>
);

export const Bordered = () => (
  <>
    <EmptyState isBordered>
      <Header />
      <Body />
      <Footer />
    </EmptyState>
  </>
);

export const Rounded = () => (
  <>
    <EmptyState isRounded>
      <Header />
      <Body />
      <Footer />
    </EmptyState>
  </>
);

export const RoundedAndBordered = () => (
  <>
    <EmptyState isRounded isBordered>
      <Header />
      <Body />
      <Footer />
    </EmptyState>
  </>
);
