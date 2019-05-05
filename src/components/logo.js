import styled from 'styled-components';
import React from 'react';

import logo from './logo.svg';

const LogoInner = styled.div`
  margin-bottom: 1rem;
  max-width: 3rem;
`;

export const Logo = () => (
  <LogoInner>
    <img src={logo} alt="Christians 'G' logo" />
  </LogoInner>
);
