import React from 'react';

export const Image = ({ src, alt, caption }) => (
  <figure>
    <img src={src} alt={alt} />
    <figcaption>{caption}</figcaption>
  </figure>
);
