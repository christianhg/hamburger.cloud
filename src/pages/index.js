import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { About } from '../components/About';
import { ArticlesList, nodeToArticle } from '../components/ArticlesList';
import Footer from '../components/footer';
import { Header } from '../components/Header';
import Layout from '../components/layout';

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
        <main>
          <div className="inner">
            <About />
            <ArticlesList
              articles={data.allMarkdownRemark.edges.map(nodeToArticle)}
            />
          </div>
        </main>
        <Footer />
      </Layout>
    )}
  />
);
