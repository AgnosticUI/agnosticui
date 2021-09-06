import React from 'react';
import Header, { HeaderNav, HeaderNavItem } from './Header.js';

export default {
  title: 'Header',
  component: Header,
};

export const HeaderAndNav = () => (
  <>
    <Header css="custom-global-css-class">
      <>
        <div style={{ padding: 24 }}>LOGO</div>
        <HeaderNav>
          <HeaderNavItem style={{ marginRight: 8 }}>
            <a style={{ color: '#333333', textDecoration: 'none' }} href="#">
              Home
            </a>
          </HeaderNavItem>
          <HeaderNavItem style={{ marginRight: 8 }}>
            <a style={{ color: '#333333', textDecoration: 'none' }} href="#">
              Services
            </a>
          </HeaderNavItem>
          <HeaderNavItem style={{ marginRight: 8 }}>
            <a style={{ color: '#333333', textDecoration: 'none' }} href="#">
              About
            </a>
          </HeaderNavItem>
          <HeaderNavItem style={{ marginRight: 8 }}>
            <a style={{ color: '#333333', textDecoration: 'none' }} href="#">
              Contact
            </a>
          </HeaderNavItem>
        </HeaderNav>
      </>
    </Header>
  </>
);

export const HeaderUnskinned = () => (
  <Header isSkinned={false}>
    <>
      <div style={{ padding: 24 }}>NO-Skinz</div>
      <HeaderNav>
        <HeaderNavItem>
          <a style={{ color: '#333333', textDecoration: 'none' }} href="#">
            Not Skinned
          </a>
        </HeaderNavItem>
      </HeaderNav>
    </>
  </Header>
);

export const HeaderSticky = () => (
  <Header isSticky={true}>
    <>
      <div style={{ padding: 24 }}>Logo</div>
      <HeaderNav>
        <HeaderNavItem>
          <a style={{ color: '#333333', textDecoration: 'none' }} href="#">
            Sticky
          </a>
        </HeaderNavItem>
      </HeaderNav>
    </>
  </Header>
);
