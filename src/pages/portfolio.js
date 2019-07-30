import React from 'react';
import styled from 'styled-components';
import { Footer } from '../components/footer';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import { Header } from '../components/header';
import { Inner, IntroBox, StyledSection } from '../components/styles';
import colfach from '../portfolio/colfach.png';
import detFynskB from '../portfolio/det-fynsk-b.jpg';
import djasLogo from '../portfolio/djas-logo.jpg';
import djas from '../portfolio/djas.jpg';
import easyTV from '../portfolio/easytv.png';
import fluxfestival2015 from '../portfolio/fluxfestival2015.jpg';
import lydiprovinsen1 from '../portfolio/lydiprovinsen-1.png';
import lydiprovinsen2a from '../portfolio/lydiprovinsen-2a.png';
import malffd from '../portfolio/malffd.jpg';
import museums from '../portfolio/museums.jpg';
import odenseVinterjazz from '../portfolio/odense-vinterjazz.png';
import poprevo from '../portfolio/poprevo2.jpg';
import snedkermesteren from '../portfolio/snedkermesteren2.jpg';
import tankestroem from '../portfolio/tankestroem.jpg';
import tschichold from '../portfolio/tschichold.jpg';

const pieces = [
  {
    images: [
      {
        src: tschichold,
        alt:
          'Abstract poster with the following quote from Jan Tschichold: "The real meaning of form is made clearer by its opposite. We could not recognize day as day if night did not exist."',
        orientation: 'portrait',
      },
    ],
    title: 'Tschichold',
    description: 'Tribute to Jan Tschichold (poster)',
  },
  {
    images: [
      { src: djas, alt: '', orientation: 'portrait' },
      { src: djasLogo, alt: '' },
    ],
    title: "['djas]",
    description: 'Logo and visual identity for a jazz community',
  },
  {
    images: [
      { src: malffd, alt: 'Skateboarder jumps over the "Malffd" logotype' },
    ],
    title: 'Malffd',
    description: 'Logotype for a streetwear brand',
  },
  {
    images: [{ src: poprevo, alt: 'Website for Pop Revo' }],
    title: 'Pop Revo',
    description: 'Website for a music festival',
  },
  {
    images: [{ src: snedkermesteren, alt: 'Website for Snedkermesteren' }],
    title: 'Snedkermesteren',
    description: 'Website for a carpenter',
  },
  {
    images: [{ src: fluxfestival2015, alt: 'Website for Flux Festival 2015' }],
    title: 'Flux Festival',
    description: 'Website for a music festival',
  },
  {
    images: [
      {
        src: museums,
        alt: 'Poster showing infographics',
        orientation: 'portrait',
      },
    ],
    title: 'Museums',
    description:
      "Infographics of the visiting numbers of Denmark's biggest museums",
  },
  {
    images: [
      {
        src: lydiprovinsen1,
        alt:
          'Lyd I Provinsen logo depicting Jutland on a vinyl with the turntable needle pointing at Aarhus',
        orientation: 'square',
      },
    ],
    title: 'Lyd I Provinsen (1)',
    description: 'Logo for a radio station',
  },
  {
    images: [{ src: lydiprovinsen2a, alt: 'Lyd I Provinsen logo' }],
    title: 'Lyd I Provinsen (2)',
    description: 'Refreshed logo for a radio station',
  },
  {
    images: [
      { src: tankestroem, alt: 'Two hands are holding miniature Christians' },
    ],
    title: 'Tankestrøm',
    description: 'Strung up',
    hidden: true,
  },
  {
    images: [
      { src: colfach, alt: 'Logo depicting mountains mirroring in a lake' },
    ],
    title: 'Colfach',
    description: 'Logo for a joint album release and charity campaign',
    hidden: true,
  },
  {
    images: [{ src: odenseVinterjazz, alt: '', orientation: 'square' }],
    title: 'Odense Vinterjazz',
    description: 'Logo for a jazz festival',
    hidden: true,
  },
  {
    images: [{ src: detFynskB, alt: '' }],
    title: "Det' Fynsk",
    description: 'Logo for a local distributer of food on Funen, Denmark',
    hidden: true,
  },
  {
    images: [{ src: easyTV, alt: '' }],
    title: 'easyTV',
    description: 'Logo for a TV package search engine',
    hidden: true,
  },
];

const StyledPiece = styled.section`
  margin-bottom: 5rem;
`;

const PieceImages = styled.div`
  margin-bottom: 0.5rem;
`;

const PieceImage = styled.div`
  text-align: center;

  img {
    max-width: ${props =>
      props.orientation === 'portrait' || props.orientation === 'square'
        ? '75%'
        : '100%'};
  }
`;

const PieceTitle = styled.h2`
  font-size: 1em;
  margin-bottom: 0;
`;

const PieceDescription = styled.p``;

const Piece = ({ images, title, description }) => (
  <StyledPiece key={`${title}-${description}`}>
    <PieceImages>
      {images.map(({ src, alt, orientation }, index) => (
        <PieceImage key={index} orientation={orientation}>
          <img src={src} alt={alt} />
        </PieceImage>
      ))}
    </PieceImages>
    <PieceTitle>{title}</PieceTitle>
    <PieceDescription>{description}</PieceDescription>
  </StyledPiece>
);

export default () => (
  <Frame
    config={{
      title: 'Portfolio of Christian Hamburger Grøngaard',
      description: 'Portfolio of Christian Hamburger Grøngaard',
      keywords: 'portfolio, christian, hamburger, grøngaard',
      path: '/portfolio',
    }}
  >
    <GlobalStyles>
      <Header />
      <IntroBox>
        <h1>Portfolio</h1>
        <p>
          Below you'll find a selection of Christian's work in graphic design.
        </p>
      </IntroBox>
      <StyledSection>
        <Inner>{pieces.filter(({ hidden }) => !hidden).map(Piece)}</Inner>
      </StyledSection>
      <Footer />
    </GlobalStyles>
  </Frame>
);
