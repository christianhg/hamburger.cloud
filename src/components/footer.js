import React from 'react'
import { Accounts } from './Accounts'
import { Src } from './Src'

export default () => (
  <footer>
    <p>Copyright © {new Date().getFullYear()} Christian Hamburger Grøngaard</p>
    <Accounts />
    <Src />
  </footer>
)
