import { Link } from 'gatsby'
import React from 'react'

export const ArticlesList = ({ articles }) => (
  <section>
    <h2>Writings</h2>
    <ol className="article-list">
      {articles.map(article => (
        <li className="article-list-item" key={article.id}>
          <span className="flip-vertically">
            <Link to={article.path}>{article.title}</Link>
            <span className="article-date">{article.date}</span>
          </span>
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
