import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Logo } from './logo';

const HeaderInner = styled.header`
  border-top: 0.25rem solid #772873;
`;

export const Header = () => (
  <HeaderInner>
    <div className="inner">
      <Link to="/">
        <Logo />
      </Link>
    </div>
  </HeaderInner>
);
