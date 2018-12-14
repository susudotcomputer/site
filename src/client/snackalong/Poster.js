import React from 'react';
import Filled from '../components/Filled';
import { Paragraph, Heading } from '../components/Text';
import Grid from '../components/Grid';

const Poster = ({ className }) => {
  return (
    <Grid className={className}>
      <Filled className="col-4">
        <Heading style="H200" className="mb4">
          A new movie poster
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
      </Filled>
      <div className="col-offset-5 col-5 px10">
        <div className="aspect-ratio aspect-ratio--2x3">
          <div className="aspect-ratio__object bg-black_05 flex">
            <span className="m-auto">SNACKALONG LOGO CAROUSEL</span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default Poster;
