import React from 'react';

export const Section = ({ children, name }) => (
  <section id={name}>
    <div className="inner">{children}</div>
  </section>
);
