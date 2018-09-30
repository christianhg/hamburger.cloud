import { always, cond, dec, equals, T } from 'ramda'
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
  <a
    key={account.link}
    href={account.link}
    rel="me"
    title={`${account.name}/${account.username}`}
  >
    {account.name}
  </a>
)

export const Accounts = () => (
  <p>
    Find Christian elsewhere on{' '}
    {accounts
      .map(Account)
      .reduce(
        (result, account, index) =>
          cond([
            [equals(0), always([account])],
            [
              equals(dec(accounts.length)),
              always([...result, ' or ', account]),
            ],
            [T, always([...result, ', ', account])],
          ])(index),
        []
      )}
  </p>
)
