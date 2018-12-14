import React from 'react';
import Grid from '../components/Grid';
import Nachos from './Snacks/Nachos';

const Snacks = () => {
  return (
    <div className="bg-archive-brown-900 py40vh clip">
      <Grid lines={false}>
        <Nachos />
      </Grid>
    </div>
  );
};

export default Snacks;
