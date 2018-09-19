import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'

const Logo = styled(Link)`
  display: block;
  width: 50px;
`

export const Header = () => (
  <header>
    <Logo to="/">
      <img src={logo} alt="Christians 'G' logo" />
    </Logo>
  </header>
)
