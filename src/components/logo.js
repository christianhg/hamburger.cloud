import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledLogo = styled.div`
  margin-bottom: 1rem;
  max-width: ${props => props.width};
  user-select: none;
`;

export const Logo = ({ width }) => (
  <StyledLogo width={width}>
    <Link to="/">
      <img src={logo} alt="Christians 'G' logo" />
    </Link>
  </StyledLogo>
);
