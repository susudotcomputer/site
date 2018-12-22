import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/RedBullSVG';
import image from './assets/16-redbull.jpg';

const RedBull = () => (
  <Snack
    title="RedBull"
    index="9"
    timeStamp="0:00:00"
    kind="Drink"
    kindList={['Red bull']}
    vesselList={['Can']}
    clip="https://s3.amazonaws.com/susuassets/16-redbull.mp4"
    clipPosition={'right'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default RedBull;
