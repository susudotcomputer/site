import React from 'react';
import Grid from '../components/Grid';
import ArchiveCard from '../components/archive-card/ArchiveCard';
import WhatIs from './WhatIs';
import Tabs from '../components/Tabs';
import Branding from './Branding';
import Poster from './Poster';
import SnacksGrid from './SnacksGrid';
import Snacks from './Snacks/';
import './styles.css';

const Tab = ({ children }) => {
  return children;
};

const Snackalong = () => {
  return (
    <>
      <Grid className="h100vh relative">
        <div className="w101p absolute t0 h50vh fade-white-transparent" />
        <ArchiveCard
          project="Snackalong: Ocean's Eleven"
          location="Brooklyn, NY"
          medium="Event"
          date="2018&#8209;06&#8209;30"
          budget="n/a"
          tactics={[
            'visualDesign',
            'webDevelopment',
            'cooking',
            'branding',
            'photography',
            'copyWriting',
            'video',
            'illustration',
            'print'
          ]}
        />
      </Grid>
      <Grid>
        <WhatIs />
        <Tabs className="mb20">
          <Tab title="Some of it">
            <div className="aspect-ratio aspect-ratio--16x9">
              <div className="aspect-ratio__object bg-black_10 inline-flex">
                <button className="circle h15 w15 fz20px p2 border border-black bg-transparent black m-auto">
                  Play
                </button>
              </div>
            </div>
          </Tab>
          <Tab title="All of it">
            <div className="aspect-ratio aspect-ratio--16x9">
              <div className="aspect-ratio__object bg-black_80 inline-flex">
                <button className="circle h15 w15 fz20px p2 border border-white bg-transparent white m-auto">
                  Play
                </button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Grid>
      <Branding className="pb10" />
      <Poster className="pb10" />
      <SnacksGrid className="pb40vh" />
      <Snacks />
    </>
  );
};

export default Snackalong;
