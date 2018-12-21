import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/EspressoSVG';
import image from './assets/06-espresso.jpg';

const Espresso = () => (
  <Snack
    title="Espresso & Treat"
    index="6"
    timeStamp="0:00:00"
    kind="Combo"
    kindList={['Espresso', 'Slice of Banana Bread']}
    vesselList={['Espresso cup', 'Plate']}
    clip="https://s3.amazonaws.com/susuassets/06-espresso.mp4"
    clipPosition={'center'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Espresso;
