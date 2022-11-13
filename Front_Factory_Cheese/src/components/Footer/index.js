import React from 'react';
import styled from 'styled-components';

const StyleFooter = styled.footer`
  height: 100px;
  width: 100vw;
  background-color: #2f2c2b;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`

function Footer() {
  return (
    <StyleFooter>

      <h2>Footer</h2>

    </StyleFooter>
  );
}

export default Footer;