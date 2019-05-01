import React from 'react';
import { Intro } from '../components/intro';
import { Writings } from '../components/writings';
import { About } from '../components/about';
import { Header } from '../components/header';
import { Frame } from '../components/frame';
import { Footer } from '../components/footer';
import { GlobalStyles } from '../components/global-styles';

export default () => (
  <Frame
    config={{
      title: 'Personal website of Christian Hamburger Grøngaard',
      description: 'Personal website of Christian Hamburger Grøngaard',
      keywords: 'hamburger, cloud, christian, grøngaard',
      path: '/',
    }}
  >
    <GlobalStyles>
      <Header />
      <Intro />
      <Writings />
      <About />
      <Footer />
    </GlobalStyles>
  </Frame>
);
