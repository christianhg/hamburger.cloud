import React from 'react';
import { Logo } from './logo';
import { Inner, StyledHeader } from './styles';

export const Header = () => (
  <StyledHeader>
    <Inner>
      <Logo width="3rem" />
    </Inner>
  </StyledHeader>
);
