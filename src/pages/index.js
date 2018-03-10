import React from 'react'

import { About } from '../components/About'
import { Accounts } from '../components/Accounts'
import { ArticlesList, nodeToArticle } from '../components/ArticlesList'
import { HamburgerCloud } from '../components/HamburgerCloud'

const Index = ({ data }) => (
  <div>
    <HamburgerCloud />
    <About />
    <ArticlesList articles={data.allMarkdownRemark.edges.map(nodeToArticle)} />
    <Accounts />
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
