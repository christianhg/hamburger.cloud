import React from 'react';

export const GlobalStyles = ({ children }) => {
  require('modern-normalize');
  require('./global-styles.css');

  return <>{children}</>;
};
