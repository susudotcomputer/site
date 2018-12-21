import React from 'react';
import Grid from '../../components/Grid';
import Nachos from './Nachos';
import BrownDrink from './BrownDrink';
import Tea from './Tea';
import NicoiseSalad from './NicoiseSalad';
import Espresso from './Espresso';
import Cigarette from './Cigarette';
import BigSoda from './BigSoda';

const Snacks = () => {
  return (
    <div className="bg-archive-brown-900 py40vh clip">
      <Grid lines={false}>
        <Nachos />
        <BrownDrink />
        <Tea />
        <NicoiseSalad />
        <Espresso />
        <Cigarette />
        <BigSoda />
      </Grid>
    </div>
  );
};

export default Snacks;
