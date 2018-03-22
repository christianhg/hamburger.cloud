import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  margin-bottom: 1em;
`

export const HamburgerCloud = ({ negative }) => (
  <Header>
  <Link to="/">
    🍔.
    {negative ? '⛈️' : '☁️'}
  </Link>
  </Header>
)
