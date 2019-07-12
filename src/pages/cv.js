import { darken } from 'polished';
import React from 'react';
import styled from 'styled-components';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import { Logo } from '../components/logo';
import { Section } from '../components/section';
import { StyledDate } from '../components/styles';
import { education } from '../data/education';
import { positions } from '../data/positions';
import croppedBeachA from './cropped-beach-a.jpg';
import croppedBeachB from './cropped-beach-b.jpg';

const yellow = '#f2e205';
const darkYellow = darken(0.2, yellow);

const black = '#222222';

const Header = styled.header`
  display: inline-flex;
  flex-direction: column-reverse;
  margin-bottom: 2rem;

  h1 {
    span {
      display: block;
      font-size: 0.8em;
    }
  }
`;

const Subsection = styled.div`
  margin-bottom: 2rem;

  @media screen {
    margin-bottom: 3rem;
  }
`;

const Footer = styled(Subsection)`
  font-size: 0.8em;
`;

const StyledCV = styled(Section)`
  background-color: ${yellow};

  a {
    text-decoration-color: ${darkYellow};
    color: ${black};

    @media print {
      text-decoration: none;
    }
  }

  h2 {
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    @media screen {
      color: ${darkYellow};
    }
  }
`;

const Top = styled.div`
  height: 0.5rem;
  overflow: hidden;
  position: relative;
  user-select: none;

  @media print {
    display: none;
  }

  img {
    display: block;
    max-width: none;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Bottom = styled(Top)`
  height: 6rem;

  img {
    top: 0;
  }
`;

const StyledOl = styled.ol`
  list-style: disc;

  @media screen {
    list-style: none;
    padding-left: 0;
  }
`;

const StyledLi = styled.li`
  margin-bottom: 1rem;

  @media screen {
    position: relative;

    &:before {
      background-color: ${darkYellow};
      content: '';
      display: block;
      left: -1rem;
      position: absolute;
      height: 100%;
      width: 0.1rem;
    }
  }
`;

const Place = styled.p`
  font-size: 0.8em;
  margin-bottom: 0;
`;

const Title = styled.p`
  margin-bottom: 0;
`;

const Position = ({ id, title, company, link, start, end }) => (
  <StyledLi key={id}>
    <Title>{title}</Title>
    <Place>{link ? <a href={link}>{company}</a> : company}</Place>
    <StyledDate>
      {start} – {end ? end : 'Present'}
    </StyledDate>
  </StyledLi>
);

const Education = ({ id, title, place, start, end }) => (
  <StyledLi key={id}>
    <Title>{title}</Title>
    <Place>{place}</Place>
    <StyledDate>
      {start} – {end ? end : 'Present'}
    </StyledDate>
  </StyledLi>
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
        <Top>
          <img src={croppedBeachA} alt="Port Douglas, Queensland" />
        </Top>
        <StyledCV>
          <Header>
            <h1>
              Christian Hamburger Grøngaard<span>Front-End Developer</span>
            </h1>
            <h2>CV</h2>
          </Header>
          <Subsection>
            <h2>Introduction</h2>
            <p>
              Hi, I'm Christian! I’m a passionate programmer, highly interested
              in the craft of programming and creating simpler programs. I've
              been developing for the Web on and off since the early 2000s, got
              a good eye for design and UX and used to pursue a more
              design-oriented career.
            </p>
          </Subsection>
          <Subsection>
            <h2>On the job</h2>
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
          </Subsection>
          <Subsection>
            <h2>At home</h2>
            <p>
              In my spare time I enjoy singing and playing the guitar, hiking
              and skiing as well as spending time with my family in the
              wonderful city of Oslo, Norway.
            </p>
          </Subsection>
          <Subsection>
            <h2>Professional Experience</h2>
            <StyledOl>{positions.map(Position)}</StyledOl>
          </Subsection>
          <Subsection>
            <h2>Education</h2>
            <StyledOl>{education.map(Education)}</StyledOl>
          </Subsection>
          <Subsection>
            <Logo width="2rem" />
          </Subsection>
          <Footer>
            <p>
              Christian Hamburger Grøngaard
              <br />
              Glückstads Gate 5A, 0170 Oslo
              <br />
              <a href="tel:90090642">900 90 642</a>
              <br />
              <a href="mailto:christianhg@gmail.com">christianhg@gmail.com</a>
              <br />
              <a href="https://hamburger.cloud">hamburger.cloud</a>
            </p>
            <p>
              <a href="https://github.com/christianhg">GitHub</a>
              <br />
              <a href="https://linkedin.com/in/christianhg">LinkedIn</a>
              <br />
              <a href="https://twitter.com/christianhg">Twitter</a>
            </p>
          </Footer>
        </StyledCV>
        <Bottom>
          <img src={croppedBeachB} alt="Port Douglas, Queensland" />
        </Bottom>
      </GlobalStyles>
    </Frame>
  );
};
