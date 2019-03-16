import React from 'react';
import { Intro } from '../components/intro';
import { Writings } from '../components/writings';
import { About } from '../components/about';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Footer } from '../components/footer';

export default () => (
  <Layout
    config={{
      title: 'Personal website of Christian Hamburger Grøngaard',
      description: 'Personal website of Christian Hamburger Grøngaard',
      keywords: 'hamburger, cloud, christian, grøngaard',
      path: '/',
    }}
  >
    <Header />
    <Intro />
    <Writings />
    <About />
    <Footer />
  </Layout>
);
