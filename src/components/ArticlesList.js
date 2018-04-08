import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { ArticleDate } from './ArticleDate'

const FlipVertically = styled.span`
  display: inline-flex;
  flex-direction: column-reverse;
`

const ArticleList = styled.ol`
  padding-left: 0;
`

const Article = styled.li`
  list-style: none;
  margin-bottom: 1em;
`

export const ArticlesList = ({ articles }) => (
  <section>
    <h2>Writings</h2>
    <ArticleList>
      {articles.map(article => (
        <Article key={article.id}>
          <FlipVertically>
            <Link to={article.path}>{article.title}</Link>
            <ArticleDate>{article.date}</ArticleDate>
          </FlipVertically>
        </Article>
      ))}
    </ArticleList>
  </section>
)

export const nodeToArticle = ({ node }) => ({
  date: node.frontmatter.date,
  id: node.id,
  path: node.frontmatter.path,
  title: node.frontmatter.title,
})
