import React from 'react';
import { ArticlesList } from './articles-list';

export const OtherWritings = ({ omit }) => (
  <section id="other-writings">
    <div className="inner">
      <h3>Other Writings</h3>
      <ArticlesList omit={omit} />
    </div>
  </section>
);
