import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { About } from '../components/about';
import { Footer } from '../components/footer';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import { Header } from '../components/header';
import { OtherWritings } from '../components/other-writings';
import { Inner, StyledMain, StyledDate } from '../components/styles';

const Lead = styled.p`
  border-left: 0.25rem dotted #772873;
  font-size: 1.15rem;
  font-style: italic;
  margin-bottom: 2rem;
  padding-left: 0.75rem;
`;

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Frame
      config={{
        title: frontmatter.title,
        description: frontmatter.lead,
        image: frontmatter.image,
        path: frontmatter.path,
      }}
    >
      <GlobalStyles>
        <Header />
        <StyledMain>
          <Inner>
            <h1>{frontmatter.title}</h1>
            <StyledDate>{frontmatter.date}</StyledDate>
            {frontmatter.image && (
              <Img fluid={frontmatter.image.childImageSharp.fluid} />
            )}
            <Lead>{frontmatter.lead}</Lead>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Inner>
        </StyledMain>
        <About />
        <Footer />
        <OtherWritings omit={frontmatter.path} />
      </GlobalStyles>
    </Frame>
  );
};

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        lead
        image {
          childImageSharp {
            resize(width: 960) {
              src
            }
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        path
        title
      }
    }
  }
`;
