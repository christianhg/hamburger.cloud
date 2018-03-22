import React from 'react'
import styled, { css } from 'styled-components'
import christian from './christian.jpg'

export const media = {
  desktop: (...args) => css`
    @media (min-width: 992px) {
      ${ css(...args) }
    }
  `,
  mobile: (...args) => css`
  @media (min-width: 620px) {
    ${ css(...args) }
  }
`
}

const clearfix = css`
  content: "";
  display: table;
  clear: both;
`

const Section = styled.section`
  ${clearfix}
  /* ${media.mobile`
  border: 1px dashed rgb(160,160,160);
  /* background: rgb(235,235,235); */
  /* border-radius: 5px; */
  /* background-color: rgb(101, 93, 83);//#32946f; */
  /* color: #fff; */
  /* padding: 2.5%; */
  /* `} */
  /* display: flex; */
  /* flex-direction: column; */

`

const Img = styled.img`
  /* ${media.mobile` */
    float: left;
    margin-right: 2.55%;
    width: 30%;
  /* `} */
  /* order: -1; */
`

// const Div = styled.div`
//   orde
// `

const H1 = styled.h1`
/* float: left; */
/* clear: left; */
  font-size: 1.5em;
  /* ${media.mobile` */
    /* display: inline; */
  /* `} */
  /* order: 2; */
`

const P = styled.p`
/* font-size: 0.8em; */
  /* margin-top: 0; */
  /* order: 3; */
`

export const About = () => (
  <Section>
    <Img src={christian} alt="Christian on a mountain" />
    <H1>Christian Hamburger Grøngaard</H1>
    <P>Functional programming enthusiast. Highly interested in the craft of programming and creating simpler programs.</P>
  </Section>
)
