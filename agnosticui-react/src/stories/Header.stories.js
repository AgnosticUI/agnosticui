
import React from 'react';
import Header, { HeaderNav } from './Header.js';

export default {
  title: 'Header',
  component: Header,
}

export const HeaderAndNav = () => (
  <>
    <Header css="custom-global-css-class">
      <>
        <div style={{ padding: 24 }}>LOGO</div>
        <HeaderNav>
          {/* Ignore these inline styles -- you can use css-in-js, css modules, or whatever you'd like here :) */}
          <ul style={{ listStyle: "none", display: "inline-flex" }}>
            <li style={{ marginRight: 8 }}><a style={{ color: "#333333", textDecoration: "none" }} href="#">Home</a></li>
            <li style={{ marginRight: 8 }}><a style={{ color: "#333333", textDecoration: "none" }} href="#">Services</a></li>
            <li style={{ marginRight: 8 }}><a style={{ color: "#333333", textDecoration: "none" }} href="#">About</a></li>
            <li style={{ marginRight: 8 }}><a style={{ color: "#333333", textDecoration: "none" }} href="#">Contact</a></li>
          </ul>
        </HeaderNav>
      </>
    </Header>
    <Header isSkinned={false}>
      <>
        <div style={{ padding: 24 }}>NO-Skinz</div>
        <HeaderNav>
          {/* Ignore these inline styles -- you can use css-in-js, css modules, or whatever you'd like here :) */}
          <ul>
            <li><a style={{ color: "#333333", textDecoration: "none" }} href="#">Not Skinned</a></li>
          </ul>
        </HeaderNav>
      </>
    </Header>
    <Header isSticky={true}>
      <>
        <div style={{ padding: 24 }}>Logo</div>
        <HeaderNav>
          {/* Ignore these inline styles -- you can use css-in-js, css modules, or whatever you'd like here :) */}
          <ul>
            <li><a style={{ color: "#333333", textDecoration: "none" }} href="#">Sticky</a></li>
          </ul>
        </HeaderNav>
      </>
    </Header>
  </>
)
