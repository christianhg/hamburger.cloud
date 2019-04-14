import React from 'react';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import { Footer } from '../components/footer';
import { Section } from '../components/section';
import { Timeline } from '../components/timeline';
import { events } from '../data/events';

export default () => (
  <Layout
    config={{
      title: 'CV of Christian Hamburger Grøngaard',
      description: 'CV of Christian Hamburger Grøngaard',
      keywords: 'cv,christian, hamburger, grøngaard',
      path: '/cv',
    }}
  >
    <Header />
    <Section name="cv">
      <h1>CV</h1>
      <Timeline events={events} />
    </Section>
    <Footer />
  </Layout>
);
