module.exports = {
  siteMetadata: {
    title: 'hamburger.cloud',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'UA-35381607-10',
        includeInDevelopment: false,
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
  ],
}
