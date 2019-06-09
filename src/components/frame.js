import React from 'react';
import Helmet from 'react-helmet';

export const Frame = ({ children, config }) => {
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
            content={`https://hamburger.cloud${config.image.childImageSharp.resize.src}`}
          />
        )}
        {config.keywords && (
          <meta property="keywords" content={config.keywords} />
        )}
        <meta
          property="og:url"
          content={`https://hamburger.cloud${config.path}`}
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@christianhg" />
        <meta name="twitter:title" content={config.title} />
        {config.description && (
          <meta name="twitter:description" content={config.description} />
        )}
        {config.image && (
          <meta
            property="twitter:image"
            content={`https://hamburger.cloud${config.image.childImageSharp.resize.src}`}
          />
        )}
      </Helmet>
      {children}
    </>
  );
};
