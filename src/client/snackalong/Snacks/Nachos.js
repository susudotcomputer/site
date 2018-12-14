import React from 'react';
import Snack from './Snack';
import { NachosSVG, nachosColorMap } from './svg/NachosSVG';
import nachosImg from './assets/01-nachos.jpg';

const Nachos = () => (
  <Snack
    title="Cheese Nachos"
    index="1"
    timeStamp="0:05:12"
    kind="Food"
    kindList={['Shredded cheese', 'Tortilla chips']}
    vesselList={['Red paper tray']}
    clip="https://s3.amazonaws.com/susuassets/01-nachos.mp4"
    clipPosition={'left'}
    image={nachosImg}
    svgColorMap={nachosColorMap}
    svgGroups={NachosSVG}
  />
);

export default Nachos;
