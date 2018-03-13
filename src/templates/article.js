import Img from 'gatsby-image'
import React from 'react'
import Helmet from 'react-helmet'

import { HamburgerCloud } from '../components/HamburgerCloud'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <Helmet>
        <title>{`🍔.☁️ ${frontmatter.title}`}</title>
        <meta property="og:title" content={`🍔.☁️ ${frontmatter.title}`} />
        {frontmatter.lead && (
          <meta name="description" content={frontmatter.lead} />
        )}
        {frontmatter.lead && (
          <meta name="og:description" content={frontmatter.lead} />
        )}
        {frontmatter.image && (
          <meta
            name="og:image"
            content={`https://hamburger.cloud${
              frontmatter.image.childImageSharp.resize.src
            }`}
          />
        )}
      </Helmet>
      <HamburgerCloud />
      <main>
        <h1>{frontmatter.title}</h1>
        <p className="date">{frontmatter.date}</p>
        {frontmatter.image && (
          <Img sizes={frontmatter.image.childImageSharp.sizes} />
        )}
        <p className="lead">{frontmatter.lead}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </div>
  )
}

export const pageQuery = graphql`
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
`
