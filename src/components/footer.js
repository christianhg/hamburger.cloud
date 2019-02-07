import React from 'react'
import { Accounts } from './Accounts'
import { Src } from './Src'

export default () => (
  <footer>
    <div class="inner">
      <p>
        Copyright © {new Date().getFullYear()} Christian Hamburger Grøngaard
      </p>
      <Accounts />
      <Src />
    </div>
  </footer>
)
