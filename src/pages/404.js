import React from 'react';
import styled from 'styled-components';
import { About } from '../components/about';
import { Footer } from '../components/footer';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import { Header } from '../components/header';
import { Section } from '../components/section';
import { Writings } from '../components/writings';

const StyledFourOFour = styled(Section)`
  background-color: #f6f6f6;
`;

const NotFoundPage = ({ path }) => (
  <Frame
    config={{
      title: 'Personal website of Christian Hamburger Grøngaard',
      description: 'Personal website of Christian Hamburger Grøngaard',
      keywords: 'hamburger, cloud, christian, grøngaard',
      path,
    }}
  >
    <GlobalStyles>
      <Header />
      <StyledFourOFour>
        <h1>Sorry, there's nothing here.</h1>
        <p>
          The page you are trying to access doesn't exist or might have been
          moved.
        </p>
        <p>Please have a look below to see if you find what you are seeking.</p>
      </StyledFourOFour>
      <Writings />
      <About />
      <Footer />
    </GlobalStyles>
  </Frame>
);

export default NotFoundPage;
