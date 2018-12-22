import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/CottonCandySVG';
import image from './assets/09-cottoncandy.jpg';

const CottonCandy = () => (
  <Snack
    title="CottonCandy"
    index="9"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Cotton candy']}
    vesselList={['Plastic bag']}
    clip="https://s3.amazonaws.com/susuassets/09-cottoncandy.mp4"
    clipPosition={'right'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default CottonCandy;
