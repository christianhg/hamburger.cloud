module.exports = {
  siteMetadata: {
    author: `Christian Hamburger Grøngaard`,
    description: `Personal website of Christian Hamburger Grøngaard`,
    siteUrl: `https://hamburger.cloud`,
    title: `hamburger.cloud`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://hamburger.cloud`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                author
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) =>
              allMarkdownRemark.edges.map(edge => ({
                date: edge.node.frontmatter.date,
                description: edge.node.frontmatter.lead,
                title: edge.node.frontmatter.title,
                url: `${site.siteMetadata.siteUrl}${
                  edge.node.frontmatter.path
                }`,
                custom_elements: [{ 'content:encoded': edge.node.html }],
              })),
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      html
                      frontmatter {
                        date
                        path
                        lead
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-35381607-10',
        head: false,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-plugin-sharp`,
          'gatsby-remark-copy-linked-files',
          `gatsby-remark-images`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    'gatsby-transformer-sharp',
  ],
}
