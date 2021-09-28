import { Header, HeaderNav, HeaderNavItem } from '../Header';

export default {
  title: 'AG—React/Header',
  component: Header,
};

export const HeaderAndNav = () => (
  <Header css="custom-global-css-class">
    <div style={{ padding: 24 }}>LOGO</div>
    <HeaderNav>
      <HeaderNavItem>
        <a style={{ color: '#333333', textDecoration: 'none' }} href="www.google.com">
          Home
        </a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a style={{ color: '#333333', textDecoration: 'none' }} href="www.yahoo.com">
          Services
        </a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a style={{ color: '#333333', textDecoration: 'none' }} href="www.aol.com">
          About
        </a>
      </HeaderNavItem>
      <HeaderNavItem>
        <a style={{ color: '#333333', textDecoration: 'none' }} href="www.bing.com">
          Contact
        </a>
      </HeaderNavItem>
    </HeaderNav>
  </Header>
);

export const HeaderUnskinned = () => (
  <Header isSkinned>
    <>
      <div style={{ padding: 24 }}>NO-Skinz</div>
      <HeaderNav>
        <HeaderNavItem>
          <a style={{ color: '#333333', textDecoration: 'none' }} href="www.google.com">
            Not Skinned
          </a>
        </HeaderNavItem>
      </HeaderNav>
    </>
  </Header>
);

export const HeaderSticky = () => (
  <Header isSticky>
    <>
      <div style={{ padding: 24 }}>Logo</div>
      <HeaderNav>
        <HeaderNavItem>
          <a style={{ color: '#333333', textDecoration: 'none' }} href="www.google.com">
            Sticky
          </a>
        </HeaderNavItem>
      </HeaderNav>
    </>
  </Header>
);
