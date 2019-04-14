import React from 'react';
import { ArticlesList } from './articles-list';
import { Section } from './section';

export const OtherWritings = ({ omit }) => (
  <Section name="other-writings">
    <h3>Other Writings</h3>
    <ArticlesList omit={omit} />
  </Section>
);
