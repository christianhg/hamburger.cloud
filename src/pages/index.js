import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { Intro } from '../components/intro';
import { ArticlesList, nodeToArticle } from '../components/ArticlesList';
import About from '../components/about';
import { Header } from '../components/Header';
import Layout from '../components/layout';
import { Footer } from '../components/footer';

export default () => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                path
              }
            }
          }
        }
      }
    `}
    render={data => (
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
        <ArticlesList
          articles={data.allMarkdownRemark.edges.map(nodeToArticle)}
        />
        <About />
        <Footer />
      </Layout>
    )}
  />
);
