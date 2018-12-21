import React from 'react';
import Snack from './Snack';
import { SVG, colorMap } from './svg/TeaSVG';
import image from './assets/04-tea.jpg';

const Tea = () => (
  <Snack
    title="Tea"
    index="4"
    timeStamp="0:00:00"
    kind="Drink"
    kindList={['English Breakfast Tea']}
    vesselList={['Strawberry Hill, Syracuse cup']}
    clip="https://s3.amazonaws.com/susuassets/04-tea.mp4"
    clipPosition={'right'}
    image={image}
    svgColorMap={colorMap}
    svgGroups={SVG}
  />
);

export default Tea;
