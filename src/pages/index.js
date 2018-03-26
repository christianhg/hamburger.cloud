import React from 'react'
import styled from 'styled-components'

import { About } from '../components/About'
import { Accounts } from '../components/Accounts'
import { ArticlesList, nodeToArticle } from '../components/ArticlesList'
import { HamburgerCloud } from '../components/HamburgerCloud'
import { Src } from '../components/Src'
import portrait from './christian.jpg'
import work from './work.jpg'

const sections = [
  {
    name: 'intro',
    content: `
    <h1>This is a headline</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean laoreet metus at nisl vestibulum, sed auctor eros elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum arcu et ipsum ultrices imperdiet. </p>
    `,
    image: portrait,
  },
  {
    name: 'work',
    content: `
    <h1>Something something</h1>
        <p>Vestibulum gravida nulla vel elit fermentum, vel scelerisque lectus dictum. Curabitur quis arcu ex. Aenean nisl massa, auctor ac scelerisque ut, mollis eget leo. Nunc accumsan vehicula leo, nec ullamcorper orci tempus quis. Praesent at risus mollis, vehicula metus mollis, tempus libero.</p>
    `,
    image: work,
  },
]

const Section = styled.section`
  @media (min-width: 768px) {
    display: grid;
  }

  grid-template-columns: 2fr 2fr;
  grid-template-areas: ${props =>
    props.reverse ? '"image content"' : '"content image"'};

  div {
    grid-area: content;
  }

  aside {
    grid-area: image;
    img {
      height: 100%;
      object-fit: cover;
      vertical-align: bottom;
      width: 100%;
    }
  }
`

const Aside = styled.aside``

const Index = ({ data }) => (
  <main>
    {sections.map((section, index) => (
      <Section key={section.name} {...index % 2 !== 0 && { reverse: true }}>
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
        <aside>
          <img src={section.image} />
        </aside>
      </Section>
    ))}
  </main>
  // {/* <HamburgerCloud /> */}
  // {/* <About /> */}
  // {/* <ArticlesList articles={data.allMarkdownRemark.edges.map(nodeToArticle)} /> */}
  // {/* <Accounts /> */}
  // {/* <Src /> */}
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
