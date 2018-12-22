import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/MartiniSVG';
import image from './assets/11-martini.jpg';

const Martini = () => (
  <Snack
    title="Martini"
    index="11"
    timeStamp="0:00:00"
    kind="Drink"
    kindList={['Gin martini']}
    vesselList={['That glass']}
    clip="https://s3.amazonaws.com/susuassets/11-martini.mp4"
    clipPosition={'left'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Martini;
