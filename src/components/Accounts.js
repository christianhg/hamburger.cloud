import React from 'react'

const accounts = [
  {
    link: 'https://flickr.com/photos/christianhg',
    name: 'flickr',
    username: 'christianhg',
  },
  {
    link: 'https://github.com/christianhg',
    name: 'github',
    username: 'christianhg',
  },
  {
    link: 'https://last.fm/user/christianhg',
    name: 'last.fm',
    username: 'christianhg',
  },
  {
    link: 'https://www.linkedin.com/in/christianhg',
    name: 'linkedin',
    username: 'christianhg',
  },
  {
    link: 'https://twitter.com/christianhg',
    name: 'twitter',
    username: 'christianhg',
  },
]

const Account = account => (
  <li key={account.link}>
    <a href={account.link} rel="me">
      {account.name}/<strong>{account.username}</strong>
    </a>
  </li>
)

export const Accounts = () => (
  <section>
    <h2>Elsewhere</h2>
    <ol>{accounts.map(Account)}</ol>
  </section>
)
