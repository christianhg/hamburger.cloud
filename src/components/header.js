import { Link } from 'gatsby';
import React from 'react';
import { Logo } from './logo';
import { StyledHeader, Inner } from './styles';

export const Header = () => (
  <StyledHeader>
    <Inner>
      <Link to="/">
        <Logo />
      </Link>
    </Inner>
  </StyledHeader>
);
