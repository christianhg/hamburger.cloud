import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import React from 'react';
import { Header } from '../components/Header';
import About from '../components/about';
import Layout from '../components/layout';
import { Footer } from '../components/footer';
import { OtherWritings } from '../components/other-writings';

export default ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout
      config={{
        title: frontmatter.title,
        description: frontmatter.lead,
        image: frontmatter.image,
        path: frontmatter.path,
      }}
    >
      <Header />
      <main>
        <div className="inner">
          <h1>{frontmatter.title}</h1>
          <p>
            <span className="article-date">{frontmatter.date}</span>
          </p>
          {frontmatter.image && (
            <Img fluid={frontmatter.image.childImageSharp.fluid} />
          )}
          <p className="lead">{frontmatter.lead}</p>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
      <About />
      <Footer />
      <OtherWritings omit={frontmatter.path} />
    </Layout>
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
