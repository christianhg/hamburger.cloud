import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { About } from '../components/About'
import { ArticlesList, nodeToArticle } from '../components/ArticlesList'
import Footer from '../components/footer'
import { Header } from '../components/Header'

import 'modern-normalize'
import 'prismjs/themes/prism.css'
import '../assets/layout.css'

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
      <>
        <Helmet
          title="Personal website of Christian Hamburger Grøngaard"
          meta={[
            {
              name: 'description',
              content: 'Personal website of Christian Hamburger Grøngaard',
            },
            {
              name: 'keywords',
              content: 'hamburger, cloud, christian, grøngaard',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header />
        <main>
          <About />
          <ArticlesList
            articles={data.allMarkdownRemark.edges.map(nodeToArticle)}
          />
        </main>
        <Footer />
      </>
    )}
  />
)
