import { always, cond, dec, equals, T } from 'ramda'
import React from 'react'

const accounts = [
  {
    link: 'https://flickr.com/photos/christianhg',
    name: 'Flickr',
    username: 'christianhg',
  },
  {
    link: 'https://github.com/christianhg',
    name: 'GitHub',
    username: 'christianhg',
  },
  {
    link: 'https://last.fm/user/christianhg',
    name: 'Last.fm',
    username: 'christianhg',
  },
  {
    link: 'https://www.linkedin.com/in/christianhg',
    name: 'LinkedIn',
    username: 'christianhg',
  },
  {
    link: 'https://twitter.com/christianhg',
    name: 'Twitter',
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
    {account.name} profile
  </a>
)

export const Accounts = () => (
  <p>
    Christian's only presence includes{' '}
    {accounts
      .map(Account)
      .reduce(
        (result, account, index) =>
          cond([
            [equals(0), always(['a ', account])],
            [
              equals(dec(accounts.length)),
              always([...result, ' and a ', account]),
            ],
            [T, always([...result, ', a ', account])],
          ])(index),
        []
      )}
    .
  </p>
)
