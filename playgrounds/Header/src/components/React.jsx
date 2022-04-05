import "agnostic-react/dist/esm/index.css";
import { Header, HeaderNav, HeaderNavItem } from "agnostic-react";

export default function ReactAlert() {
  return (
    <section className="mbe40">
      <div className="h4 mbe32 flex items-center">
        <img width="24" height="24" src="/assets/React-icon.svg" alt="React logo" className="mie12" />React Header
      </div>
      <Header>
      <>
        <a href="https://web.dev/">web.dev</a>
        <HeaderNav>
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
    </section>
  );
}
