import React from 'react';
import styled from 'styled-components';
import { StyledFooter, Inner } from './styles';

const Misc = styled.span`
  text-align: right;

  a {
    margin-left: 1rem;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <Inner>
      <span>
        Copyright © {new Date().getFullYear()} Christian Hamburger Grøngaard
      </span>
      <Misc>
        <a href="https://github.com/christianhg/hamburger.cloud">
          {'{'}src{'}'}
        </a>
        <a href="/rss.xml">RSS</a>
      </Misc>
    </Inner>
  </StyledFooter>
);
