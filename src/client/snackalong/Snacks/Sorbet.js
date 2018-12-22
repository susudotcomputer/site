import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/SorbetSVG';
import image from './assets/10-sorbet.jpg';

const Sorbet = () => (
  <Snack
    title="Sorbet"
    index="10"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Raspberry sorbet', 'Mango sorbet']}
    vesselList={['Plastic cup', 'Plastic spoon']}
    clip="https://s3.amazonaws.com/susuassets/10-sorbet.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Sorbet;
