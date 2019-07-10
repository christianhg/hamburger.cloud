import React from 'react';
import styled from 'styled-components';
import { Section } from './section';

const StyledIntro = styled(Section)`
  background-color: #f6f6f6;
`;

export const Intro = () => (
  <StyledIntro>
    <h1>Hi, I'm Christian!</h1>
    <p>
      I’m a passionate programmer, highly interested in the craft of programming
      and the challenges that arise when programming becomes collaborative.
    </p>
  </StyledIntro>
);
