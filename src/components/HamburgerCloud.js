import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const AnonymousLink = styled(Link)`
  text-decoration: none;
`

export const HamburgerCloud = ({ negative }) => (
  <AnonymousLink to="/">
    🍔.
    {negative ? '⛈️' : '☁️'}
  </AnonymousLink>
)
