import { Link } from 'gatsby'
import React from 'react'
import logo from './logo.svg'

export const Header = () => (
  <header>
    <Link className="logo" to="/">
      <img src={logo} alt="Christians 'G' logo" />
    </Link>
  </header>
)
