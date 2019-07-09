import React from 'react';
import christian from './christian.jpg';
import { StyledFigcaption, StyledFigure } from './styles';

export const Me = () => (
  <StyledFigure>
    <img src={christian} alt="Christian at Aurlandsfjellet" />
    <StyledFigcaption>
      This is Christian on{' '}
      <a href="https://goo.gl/maps/KkKsVQ9nhNn">Aurlandsfjellet</a>
    </StyledFigcaption>
  </StyledFigure>
);
