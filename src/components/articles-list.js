import { graphql, StaticQuery } from 'gatsby';
import { Link } from 'gatsby';
import React from 'react';

const nodeToArticle = ({ node }) => ({
  date: node.frontmatter.date,
  id: node.id,
  path: node.frontmatter.path,
  title: node.frontmatter.title,
});

export const ArticlesList = ({ omit }) => (
  <StaticQuery
    query={graphql`
      query ArticlesListQuery {
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
    render={data => {
      const articles = data.allMarkdownRemark.edges.map(nodeToArticle);

      return (
        <ol className="article-list">
          {articles.map(article => (
            <li className="article-list-item" key={article.id}>
              <span className="flip-vertically">
                {article.path === omit ? (
                  article.title
                ) : (
                  <Link to={article.path}>{article.title}</Link>
                )}
                <span className="article-date">{article.date}</span>
              </span>
            </li>
          ))}
        </ol>
      );
    }}
  />
);
