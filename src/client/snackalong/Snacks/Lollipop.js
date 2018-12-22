import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/LollipopSVG';
import image from './assets/13-lollipop.jpg';

const Lollipop = () => (
  <Snack
    title="Lollipop"
    index="13"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Cherry lollipop']}
    vesselList={['Stick']}
    clip="https://s3.amazonaws.com/susuassets/13-lollipop.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Lollipop;
