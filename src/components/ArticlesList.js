import React from 'react'
import Link from 'gatsby-link'

export const ArticlesList = ({ articles }) => (
  <section>
    <h2>Articles</h2>
    <ol>
      {articles.map(article => (
        <li key={article.id}>
          <Link to={article.path}>
            {article.title} ({article.date})
          </Link>
        </li>
      ))}
    </ol>
  </section>
)

export const nodeToArticle = ({ node }) => ({
  date: node.frontmatter.date,
  id: node.id,
  path: node.frontmatter.path,
  title: node.frontmatter.title,
})
