import { Header, HeaderNav, HeaderNavItem } from '../Header';

export default {
  title: 'AG—React (Beta)/Header',
  component: Header,
};

export const HeaderAndNav = () => (
  <Header css="custom-global-css-class">
    <div style={{ padding: 8 }}>LOGO</div>
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
      <div style={{ padding: 8 }}>NO-Skinz</div>
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
      <div style={{ padding: 8 }}>Logo</div>
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

/*

  <Header isHeaderContentStart>
    <>
      <a href="https://web.dev/">web.dev</a>
      <HeaderNav css="mis16 flex-fill">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </>
  </Header>
  <Header isHeaderContentEnd>
    <>
      <a class="flex-fill" href="https://web.dev/">web.dev</a>
      <HeaderNav css="mie16 flex-grow-0">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </>
  </Header>
  */
export const HeaderContentStart = () => (
  <Header isHeaderContentStart>
    <>
      <a href="https://web.dev/">web.dev</a>
      <HeaderNav css="mis16 flex-fill">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </>
  </Header>
);

export const HeaderContentEnd = () => (
  <Header isHeaderContentEnd>
    <>
      <a className="flex-fill" href="https://web.dev/">
        web.dev
      </a>
      <HeaderNav css="mie16 flex-grow-0">
        <HeaderNavItem>
          <a href="https://css-tricks.com/">CSS-Tricks</a>
        </HeaderNavItem>
        <HeaderNavItem>
          <a href="https://developer.mozilla.org/en-US/">MDN</a>
        </HeaderNavItem>
      </HeaderNav>
      <a href="https://www.freecodecamp.org/">freeCodeCamp</a>
    </>
  </Header>
);
