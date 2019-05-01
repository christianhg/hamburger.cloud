import React from 'react';

export const GlobalStyles = ({ children }) => {
  require('./global-styles.css');

  return <>{children}</>;
};
