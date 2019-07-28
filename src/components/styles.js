import styled from 'styled-components';
import { Section } from './section';

export const FlipHorizontal = styled.div`
  display: inline-flex;
  flex-direction: column-reverse;
`;

export const IntroBox = styled(Section)`
  background-color: #f6f6f6;
`;

export const Small = styled.p`
  font-size: 0.8em;
`;

export const StyledDate = styled(Small)`
  text-transform: uppercase;
`;

export const StyledFigure = styled.figure`
  margin-top: 0;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

export const StyledFigcaption = styled.figcaption`
  font-size: 0.8em;
  font-style: italic;
`;

export const StyledHeader = styled.header`
  border-top: 0.25rem solid #772873;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-top: 3rem;
`;

export const StyledMain = styled.main`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-top: 3rem;

  h2 {
    margin-top: 3rem;
  }
`;

export const StyledSection = styled.section`
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-top: 3rem;
`;

export const StyledFooter = styled.footer`
  background-color: #eee;
  font-size: 0.7rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;

  > div {
    display: grid;
    grid-template-areas: 'a a';
  }
`;

export const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
