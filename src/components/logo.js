import styled from 'styled-components';
import React from 'react';

import logo from './logo.svg';

const StyledLogo = styled.div`
  margin-bottom: 1rem;
  max-width: ${props => props.width};
`;

export const Logo = ({ width }) => (
  <StyledLogo width={width}>
    <img src={logo} alt="Christians 'G' logo" />
  </StyledLogo>
);
