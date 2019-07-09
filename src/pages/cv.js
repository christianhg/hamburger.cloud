import React from 'react';
import styled from 'styled-components';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import { Section } from '../components/section';
import { positions } from '../data/positions';

const H1 = styled.h1`
  span {
    display: block;
    font-size: 0.8em;
  }
`;

const Subsection = ({ children, name }) => (
  <div className={`subsection=${name}`}>{children}</div>
);

const Position = ({ id, title, company, start, end }) => (
  <li key={id}>
    <strong>{title}</strong>
    <br />
    {company}
    <br />
    {start} – {end ? end : 'Present'}
  </li>
);

const age = Math.floor(
  (new Date().getTime() - new Date('September 5, 1987').getTime()) / 3.154e10
);

export default () => {
  return (
    <Frame
      config={{
        title: 'CV of Christian Hamburger Grøngaard',
        description: 'CV of Christian Hamburger Grøngaard',
        keywords: 'cv, christian, hamburger, grøngaard',
        path: '/cv',
      }}
    >
      <GlobalStyles>
        <Section name="cv">
          <H1>
            Christian Hamburger Grøngaard<span>Front-End Developer</span>
          </H1>
          <h2>CV</h2>
          <Subsection name="contact">
            <h2>Contact</h2>
            <p>
              Glückstads Gate 5A, 0170 Oslo
              <br />
              <a href="tel:90090642">900 90 642</a>
              <br />
              <a href="mailto:christianhg@gmail.com">christianhg@gmail.com</a>
              <br />
              <a href="https://hamburger.cloud">hamburger.cloud</a>
            </p>
          </Subsection>
          <Subsection name="intro">
            <h2>Hi, I'm Christian!</h2>
            <p>
              I’m a passionate programmer, highly interested in the craft of
              programming and creating simpler programs.
            </p>
            <p>
              I’m a {age}-year-old Dane working as a front-end developer at{' '}
              <a href="http://www.escenic.com/">Escenic AS</a> where I have a
              prominent role in planning out and developing{' '}
              <a href="http://www.escenic.com/solutions/cue">CUE</a>: a flexible
              and extendable CMS for newsrooms. Currently I’m involved in the
              development of a{' '}
              <a href="http://www.escenic.com/solutions/content-store">
                completely new content creation workflow
              </a>{' '}
              akin to the{' '}
              <a href="https://wordpress.org/gutenberg/">
                WordPress Gutenberg editor
              </a>
              .
            </p>
            <p>
              I want to believe that I’m being provided with autonomy and
              responsibility because I’m a person who deeply cares about the
              product and its creation. A person who isn’t afraid to ask why
              something works the way it works or why a particular feature is
              needed.
            </p>
            <p>
              When I’m not engaged in providing the best possible user
              experience both through APIs and user interfaces, I’m usually
              invested in our team of ~20 front-end developers. Endorsing
              knowledge-sharing, trying out new tools and techniques as well as
              improving our development environment comes naturally to me.
            </p>
            <p>
              I've been developing for the Web on and off since the early 2000s,
              got a good eye for design and UX and used to pursue a more
              design-oriented career.
            </p>
            <p>
              In my spare time I enjoy singing and playing the guitar, hiking
              and skiing as well as spending time with my family in the
              wonderful city of Oslo, Norway.
            </p>
          </Subsection>
          <Subsection name="pe">
            <h2>Professional Experience</h2>
            <ol>{positions.map(Position)}</ol>
          </Subsection>
        </Section>
      </GlobalStyles>
    </Frame>
  );
};
