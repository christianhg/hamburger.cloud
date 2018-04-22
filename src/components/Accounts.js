import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const accounts = [
  {
    link: 'https://flickr.com/photos/christianhg',
    name: 'flickr',
  },
  {
    link: 'https://github.com/christianhg',
    name: 'github',
  },
  {
    link: 'https://last.fm/user/christianhg',
    name: 'last.fm',
  },
  {
    link: 'https://www.linkedin.com/in/christianhg',
    name: 'linkedin',
  },
  {
    link: 'https://twitter.com/christianhg',
    name: 'twitter',
  },
]

const Ol = styled.ol`
  /* display: inline-flex; */
  padding-left: 0.5em;
  border-left: 1px solid #222222;
`

const Li = styled.li`
  list-style: none;
  position: relative;
  padding-left: 15px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 5px;
    height: 5px;
    top: 2px;
    left: -3px;
    background: #222222;
  }
  /* padding-right: 1em; */
`

const Account = account => (
  <Li key={account.link}>
    <a href={account.link} rel="me">
      {account.name}
    </a>
  </Li>
)

export const Accounts = () => (
  <section>
    <Ol>{accounts.map(Account)}</Ol>
  </section>
)
