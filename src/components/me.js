import React from 'react';
import { Christian } from './christian';
import { StyledFigcaption, StyledFigure } from './styles';

export const Me = () => (
  <StyledFigure>
    <Christian />
    <StyledFigcaption>
      This is Christian on{' '}
      <a href="https://goo.gl/maps/KkKsVQ9nhNn">Aurlandsfjellet</a>
    </StyledFigcaption>
  </StyledFigure>
);
