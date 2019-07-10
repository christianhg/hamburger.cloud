import React from 'react';
import { Inner, StyledSection } from './styles';

export const Section = ({ children, className }) => (
  <StyledSection className={className}>
    <Inner>{children}</Inner>
  </StyledSection>
);
