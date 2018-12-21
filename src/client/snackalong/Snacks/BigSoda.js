import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/BigSodaSVG';
import image from './assets/08-bigsoda.jpg';

const BigSoda = () => (
  <Snack
    title="Big Soda"
    index="8"
    timeStamp="0:00:00"
    kind="Drink"
    kindList={['Coke']}
    vesselList={['Custom cup']}
    clip="https://s3.amazonaws.com/susuassets/08-bigsoda.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default BigSoda;
