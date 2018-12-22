import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/MysterySaladSVG';
import image from './assets/12-salad.jpg';

const MysterySalad = () => (
  <Snack
    title="MysterySalad"
    index="12"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Cotton candy']}
    vesselList={['Plastic bag']}
    clip="https://s3.amazonaws.com/susuassets/12-mystery-salad.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default MysterySalad;
