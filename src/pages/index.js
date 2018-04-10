import React from 'react'

import { About } from '../components/About'
import { Accounts } from '../components/Accounts'
import { ArticlesList, nodeToArticle } from '../components/ArticlesList'
import { Header } from '../components/Header'
import { Src } from '../components/Src'

const Index = ({ data }) => (
  <div>
    <Header />
    <About />
    <ArticlesList articles={data.allMarkdownRemark.edges.map(nodeToArticle)} />
    <Accounts />
    <Src />
  </div>
)

export default Index

export const pageQuery = graphql`
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
`
