import React from 'react';
import { Accounts } from './Accounts';
import { Src } from './Src';
import christian from './christian.jpg';

export default () => (
  <footer>
    <div className="inner">
      <img src={christian} alt="Christian at Aurlandsfjellet" />
      <p>
        This is Christian on{' '}
        <a href="https://goo.gl/maps/KkKsVQ9nhNn">Aurlandsfjellet</a>. His full
        name is <strong>Christian Hamburger Grøngaard</strong>.
      </p>
      <p>
        Currently he works as a front-end developer at{' '}
        <a href="http://escenic.com">Escenic AS</a> where he fights complexity
        in large applications for newsrooms. He's been developing for the Web on
        and off since the early 2000s, got a good eye for design and UX and used
        to pursue a more design-oriented career.
      </p>
      <p>
        When Christian isn't glued to a screen he enjoys singing and playing the
        guitar, hiking and skiing as well as spending time with his family in
        the wonderful city of Oslo, Norway.
      </p>
      <Accounts />
      <Src />
    </div>
  </footer>
);
