import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/JellybeansSVG';
import image from './assets/18-jellybeans.jpg';

const Jellybeans = () => (
  <Snack
    title="Jelly beans"
    index="9"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Assorted jelly beans']}
    vesselList={['Glass bowl']}
    clip="https://s3.amazonaws.com/susuassets/18-jellybeans.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Jellybeans;
