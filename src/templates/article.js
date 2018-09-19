import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'
import { ArticleDate } from '../components/ArticleDate'
import { Header } from '../components/Header'
import { Src } from '../components/Src'

export default () => (
  <StaticQuery
    query={graphql`
      query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            lead
            image {
              childImageSharp {
                resize(width: 960) {
                  src
                }
                sizes(maxWidth: 960) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            path
            title
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      const { markdownRemark } = data
      const { frontmatter, html } = markdownRemark

      return (
        <>
          <Helmet>
            <title>{`${frontmatter.title}`}</title>
            <meta property="og:title" content={`🍔.☁️ ${frontmatter.title}`} />
            {frontmatter.lead && (
              <meta name="description" content={frontmatter.lead} />
            )}
            {frontmatter.lead && (
              <meta property="og:description" content={frontmatter.lead} />
            )}
            {frontmatter.image && (
              <meta
                property="og:image"
                content={`https://hamburger.cloud${
                  frontmatter.image.childImageSharp.resize.src
                }`}
              />
            )}
            <meta
              property="og:url"
              content={`https://hamburger.cloud${frontmatter.path}`}
            />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
          <Header />
          <main>
            <h1>{frontmatter.title}</h1>
            <p>
              <ArticleDate>{frontmatter.date}</ArticleDate>
            </p>
            {frontmatter.image && (
              <Img sizes={frontmatter.image.childImageSharp.sizes} />
            )}
            <p className="lead">{frontmatter.lead}</p>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </main>
          <Src />
        </>
      )
    }}
  />
)
