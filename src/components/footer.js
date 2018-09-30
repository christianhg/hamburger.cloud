import React from 'react'
import styled from 'styled-components'
import { Accounts } from './Accounts'
import { Src } from './Src'

const Footer = styled.footer`
  font-size: 0.9em;
  padding-top: 2em;
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 2.5em;
    height: 0.125em;
    background-color: rgb(30, 30, 30);
    position: absolute;
    top: 0;
  }
`

export default () => (
  <Footer>
    <p>Copyright © {new Date().getFullYear()} Christian Hamburger Grøngaard</p>
    <Accounts />
    <Src />
  </Footer>
)
