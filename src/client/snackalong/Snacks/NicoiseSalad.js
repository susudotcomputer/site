import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/NicoiseSaladSVG';
import image from './assets/05-nicoisesalad.jpg';

const NicoiseSalad = () => (
  <Snack
    title="Niçoise Salad"
    index="5"
    timeStamp="0:00:00"
    kind="Food"
    kindList={['Cherry tomatoes', 'Lettuce', 'Red patatoes']}
    vesselList={['Plates']}
    clip="https://s3.amazonaws.com/susuassets/05-nicoisesalad.mp4"
    clipPosition={'right'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default NicoiseSalad;
