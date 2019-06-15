import React from 'react';
import { Frame } from '../components/frame';
import { GlobalStyles } from '../components/global-styles';
import { Image } from '../components/image';
import { Section } from '../components/section';

import tromsoe1 from '../photos/tromsoe-1.jpg';
import tromsoe2 from '../photos/tromsoe-2.jpg';

const images = [
  {
    id: 'a',
    src: tromsoe1,
    alt: 'wow',
    caption: 'woo',
  },
  {
    id: 'b',
    src: tromsoe2,
    alt: 'wow',
    caption: 'woo',
  },
];

export default () => {
  return (
    <Frame
      config={{
        title: 'Photographs by Christian Hamburger Grøngaard',
        description: 'Photographs by Christian Hamburger Grøngaard',
        keywords: 'photography, christian, hamburger, grøngaard',
        path: '/photography',
      }}
    >
      <GlobalStyles>
        <Section name="photography">
          {images.map(image => (
            <Image key={image.id} {...image} />
          ))}
        </Section>
      </GlobalStyles>
    </Frame>
  );
};
