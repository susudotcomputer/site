import React from 'react';
import { Heading, Paragraph } from '../components/Text';
import Grid from '../components/Grid';
import styles from '../utils/css';
import speckles from '../assets/speckled_30.png';

const snacksArr = [
  'nachos',
  'brown-drink',
  'tea',
  'nicoise',
  'espresso',
  'cigarette',
  'big-soda',
  'cotton-cnady',
  'sorbet',
  'martini',
  'ceasar',
  'lollipop',
  'ginger-ale',
  'shrimp',
  'red-bull',
  'gelato',
  'jellybeans',
  'cheese-burger',
  '',
  ''
];

const SnacksGrid = ({ className }) => {
  const classes = styles(
    className,
    'bg-archive-beige bg-repeat pt15vh mt-15vh'
  );
  return (
    <div className={classes} style={{ backgroundImage: `url(${speckles})` }}>
      <Grid lines={false} className="mb10">
        <Heading style="H200" className="col-6 col-offset-2">
          Brad was a hungry boy, below are the 19 items Rusty oraly interacts
          with…
        </Heading>
        <Paragraph className="mb4 col-6 col-offset-2">
          That… is a weird way to say that right? Well, some of the items below
          aren't exactly "food"—sometimes he just puts them to his mouth.
        </Paragraph>
      </Grid>
      <ul className="max-w1200px mx-auto snackalong__snacks bg-archive-brown-400">
        {snacksArr.map((snack, i) => (
          <li
            key={i}
            className="aspect-ratio aspect-ratio--1x1 bg-archive-beige"
          >
            <div className="aspect-ratio__object flex items-center justify-center">
              {snack}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SnacksGrid;
