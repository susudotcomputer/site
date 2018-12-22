import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/IceCreamSVG';
import image from './assets/17-icecream.jpg';

const IceCream = () => (
  <Snack
    title="IceCream"
    index="17"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Vanilla gelato']}
    vesselList={['Small plastic cup', 'Plastic spoon']}
    clip="https://s3.amazonaws.com/susuassets/17-icecream.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default IceCream;
