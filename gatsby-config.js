module.exports = {
  siteMetadata: {
    title: 'hamburger.cloud',
  },
  pathPrefix: `/hamburger.cloud`,
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'UA-35381607-10',
        includeInDevelopment: false,
      },
    },
  ],
}
