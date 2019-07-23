import React from 'react';
import styled from 'styled-components';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import malffd from '../portfolio/malffd.jpg';
import lydiprovinsen1 from '../portfolio/lydiprovinsen-1.png';
import lydiprovinsen2a from '../portfolio/lydiprovinsen-2a.png';
import tankestroem from '../portfolio/tankestroem.jpg';
import colfach from '../portfolio/colfach.png';
import odenseVinterjazz from '../portfolio/odense-vinterjazz.png';
import detFynsk from '../portfolio/det-fynsk.png';
import { StyledSection, Inner } from '../components/styles';

const pieces = [
  {
    images: [
      { src: malffd, alt: 'Skateboarder jumps over the "Malffd" logotype' },
    ],
    title: 'Malffd',
    description: 'Logotype for a streetwear brand',
  },
  {
    images: [
      {
        src: lydiprovinsen1,
        alt:
          'Lyd I Provinsen logo depicting Jutland on a vinyl with the turntable needle pointing at Aarhus',
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
    description: '...',
  },
  {
    images: [
      { src: colfach, alt: 'Logo depicting mountains mirroring in a lake' },
    ],
    title: 'Colfach',
    description: '...',
  },
  {
    images: [{ src: odenseVinterjazz, alt: '' }],
    title: 'Odense Vinterjazz',
    description: '...',
  },
  {
    images: [{ src: detFynsk, alt: '' }],
    title: "Det' Fynsk",
    description: '...',
  },
];

const StyledPiece = styled.section`
  margin-bottom: 5rem;
`;

const PieceImages = styled.div``;

const PieceTitle = styled.h2`
  font-size: 1em;
  margin-bottom: 0;
`;

const PieceDescription = styled.p``;

const Piece = ({ images, title, description }) => (
  <StyledPiece key={`${title}-${description}`}>
    <PieceImages>
      {images.map(({ src, alt }) => (
        <img key={alt} src={src} alt={alt} />
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
      <StyledSection>
        <Inner>{pieces.map(Piece)}</Inner>
      </StyledSection>
    </GlobalStyles>
  </Frame>
);
