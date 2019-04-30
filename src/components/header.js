import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const HeaderInner = styled.header`
  border-top: 0.25rem solid #772873;
`;

export const Header = () => (
  <HeaderInner>
    <div className="inner">
      <Link className="logo" to="/">
        <img src={logo} alt="Christians 'G' logo" />
      </Link>
    </div>
  </HeaderInner>
);
