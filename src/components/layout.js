import React from 'react'
import Helmet from 'react-helmet'

import 'modern-normalize'
import 'prismjs/themes/prism.css'
import './layout.css'

const Layout = ({ children, config }) => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{config.title}</title>
        <meta property="og:title" content={`${config.title}`} />
        {config.description && (
          <meta name="description" content={config.description} />
        )}
        {config.description && (
          <meta property="og:description" content={config.description} />
        )}
        {config.image && (
          <meta
            property="og:image"
            content={`https://hamburger.cloud${
              config.image.childImageSharp.resize.src
            }`}
          />
        )}
        {config.keywords && (
          <meta property="keywords" content={config.keywords} />
        )}
        <meta
          property="og:url"
          content={`https://hamburger.cloud${config.path}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {children}
    </>
  )
}

export default Layout
