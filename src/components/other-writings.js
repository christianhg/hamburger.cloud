import React from 'react';
import styled from 'styled-components';
import { ArticlesList } from './articles-list';
import { Section } from './section';

const StyledOtherWritings = styled(Section)`
  background-color: #e5e5e5;
  font-size: 0.7rem;
  padding-bottom: 1rem;
  padding-top: 2rem;
`;

export const OtherWritings = ({ omit }) => (
  <StyledOtherWritings>
    <h3>Other Writings</h3>
    <ArticlesList omit={omit} />
  </StyledOtherWritings>
);
