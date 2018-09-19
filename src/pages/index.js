import { graphql, StaticQuery } from 'gatsby'
import React from 'react'
import { About } from '../components/About'
import { Accounts } from '../components/Accounts'
import { ArticlesList, nodeToArticle } from '../components/ArticlesList'
import { Header } from '../components/Header'
import Layout from '../components/layout'
import { Src } from '../components/Src'

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
      <Layout>
        <Header />
        <About />
        <ArticlesList
          articles={data.allMarkdownRemark.edges.map(nodeToArticle)}
        />
        <Accounts />
        <Src />
      </Layout>
    )}
  />
)
