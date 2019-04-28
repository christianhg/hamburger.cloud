import React from 'react';
import christian from './christian.jpg';

export const Me = () => (
  <figure>
    <img src={christian} alt="Christian at Aurlandsfjellet" />
    <figcaption>
      This is Christian on{' '}
      <a href="https://goo.gl/maps/KkKsVQ9nhNn">Aurlandsfjellet</a>
    </figcaption>
  </figure>
);
