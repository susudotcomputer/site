import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/GingerAleSVG';
import image from './assets/14-gingerale.jpg';

const GingerAle = () => (
  <Snack
    title="Ginger ale"
    index="14"
    timeStamp="0:00:00"
    kind="Drink"
    kindList={['Ginger ale']}
    vesselList={['Wine glass', 'Black straw']}
    clip="https://s3.amazonaws.com/susuassets/14-gingerale.mp4"
    clipPosition={'right'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default GingerAle;
