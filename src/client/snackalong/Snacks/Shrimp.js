import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/ShrimpSVG';
import image from './assets/15-shrimp.jpg';

const Shrimp = () => (
  <Snack
    title="Shrimp cocktail"
    index="15"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Shrimp', 'Cocktail sauce']}
    vesselList={['Coupe glass']}
    clip="https://s3.amazonaws.com/susuassets/15-shrimp.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Shrimp;
