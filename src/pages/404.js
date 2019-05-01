import React from 'react';
import { About } from '../components/about';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Frame } from '../components/frame';
import { Writings } from '../components/writings';

const NotFoundPage = ({ path }) => (
  <Frame
    config={{
      title: 'Personal website of Christian Hamburger Grøngaard',
      description: 'Personal website of Christian Hamburger Grøngaard',
      keywords: 'hamburger, cloud, christian, grøngaard',
      path,
    }}
  >
    <Header />
    <section id="fourofour">
      <div className="inner">
        <h1>Sorry, there's nothing here.</h1>
        <p>
          The page you are trying to access doesn't exist or might have been
          moved.
        </p>
        <p>Please have a look below to see if you find what you are seeking.</p>
      </div>
    </section>
    <Writings />
    <About />
    <Footer />
  </Frame>
);

export default NotFoundPage;
