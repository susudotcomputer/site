import React from 'react';
import Snack from './Snack';
import { NachosSVG, nachosColorMap } from './svg/NachosSVG';
import nachosImg from './assets/01-nachos.jpg';

const Nachos = () => (
  <Snack
    title="Cheese Nachos"
    index="1"
    timeStamp="0:06:20 & 0:08:01"
    kind="Drink"
    kindList={['Whiskey (or Rum?)']}
    vesselList={['Tumbler glass']}
    clip="https://s3.amazonaws.com/susuassets/01-browndrink.mp4"
    clipPosition={'left'}
    image={nachosImg}
    svgColorMap={nachosColorMap}
    svgGroups={NachosSVG}
  />
);

export default Nachos;
