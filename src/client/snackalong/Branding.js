import React from "react";
import { Heading, Paragraph } from "../components/Text";
import Filled from "../components/Filled";
import Grid from "../components/Grid";

const Branding = ({ className }) => {
  return (
    <Grid className={className}>
      <div className="col-6">
        <div className="aspect-ratio aspect-ratio--4x3">
          <div className="aspect-ratio__object bg-black_05 flex">
            <span className="m-auto">SNACKALONG LOGO CAROUSEL</span>
          </div>
        </div>
      </div>
      <Filled className="col-4">
        <Heading style="H200" className="mb4">
          Flexible event branding
        </Heading>
        <Paragraph style="P200" className="mb4">
          Nullam ac velit consectetur, laoreet elit eu, euismod ex. Curabitur
          vitae nisi porta, feugiat nisl id, luctus ante. Pellentesque commodo
          convallis nulla dapibus maximus.
        </Paragraph>
        <Paragraph style="P200" className="mb4">
          Sed maximus cursus mi, et dictum magna venenatis et. Orci varius
          natoque penatibus et magnis dis parturient montes, nascetur ridiculus
          mus. Duis sed velit mi. Nam sagittis ullamcorper augue. Nunc quis
          felis eget leo venenatis accumsan a eu lectus. Duis ullamcorper
          tincidunt venenatis.
        </Paragraph>
        <Paragraph style="P200" className="mb4">
          Donec accumsan mauris id sapien luctus, sed suscipit nulla fermentum.
          Suspendisse ultricies nisi ut.
        </Paragraph>
      </Filled>
    </Grid>
  );
};

export default Branding;
