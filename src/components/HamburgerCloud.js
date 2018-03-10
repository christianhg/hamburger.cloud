import Link from 'gatsby-link'
import React from 'react'

export const HamburgerCloud = ({ negative }) => (
  <Link to="/">
    🍔.
    {negative ? '⛈️' : '☁️'}
  </Link>
)
