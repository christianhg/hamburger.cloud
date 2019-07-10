import React from 'react';
import styled from 'styled-components';
import { Accounts } from './accounts';
import { Me } from './me';
import { Section } from './section';

const AboutSection = styled(Section)`
  background-color: #f6f6f6;
  font-size: 0.9rem;
  font-style: italic;
`;

export const About = () => (
  <AboutSection>
    <p>
      This website is authored by Christian. His full name is{' '}
      <strong>Christian Hamburger Grøngaard</strong> (that's right - Hamburger.)
    </p>
    <Me />
    <p>
      Currently he works as a front-end developer at{' '}
      <a href="http://escenic.com">Escenic AS</a> where he fights complexity in
      large applications for newsrooms. He's been developing for the Web on and
      off since the early 2000s, got a good eye for design and UX and used to
      pursue a more design-oriented career.
    </p>
    <p>
      When Christian isn't glued to a screen he enjoys singing and playing the
      guitar, hiking and skiing as well as spending time with his family in the
      wonderful city of Oslo, Norway.
    </p>
    <Accounts />
  </AboutSection>
);
