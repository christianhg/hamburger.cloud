import React from 'react';
import { Inner, StyledSection } from './styles';

export const Section = ({ children, name }) => (
  <StyledSection id={name}>
    <Inner>{children}</Inner>
  </StyledSection>
);
