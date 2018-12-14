import React from "react";
import { Paragraph, Heading } from "../components/Text";
import Filled from "../components/Filled";

const WhatIs = () => {
  return (
    <Filled className="col-6 col-offset-2 mb20">
      <Heading style="H200" className="mb4">
        What is a Snackalong?
      </Heading>
      <Paragraph style="P200" className="mb4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        dignissim odio ac ullamcorper auctor. Nulla a orci pulvinar, ultricies
        ante nec, finibus mauris. Morbi sit amet purus quam. Nulla velit nisl,
        vulputate non augue in, pulvinar lacinia ante. In auctor nisl eget
        gravida convallis.
      </Paragraph>
      <Paragraph style="P200">
        Nam sit amet ligula in erat condimentum iaculis. Sed consectetur metus
        cursus est consectetur, pharetra dignissim tellus consectetur. Aliquam
        dolor purus, ultricies ut nisi non, volutpat rutrum erat. Suspendisse
        bibendum et enim eget euismod. Donec nisl ipsum, bibendum nec erat et,
        fringilla commodo augue. Fusce aliquet nec felis quis iaculis.
      </Paragraph>
    </Filled>
  );
};

export default WhatIs;
