
import React from 'react';
import Header from './Header.js';

export default {
  title: 'Header',
  component: Header,
}
export const All = () => (
  <>
    <Header>
      <>
        <div style={{ padding: 24 }}>Default</div>
        <div style={{ padding: 24 }}>Card</div>
      </>
    </Header>
  </>
)
