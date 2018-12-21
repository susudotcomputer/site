import React from 'react';
import styles from '../../utils/css';
import logoSrc from './assets/susu-logo.svg';
import { Heading, Span } from '../Text';
import Tactics from './Tactics';
import speckles from '../../assets/speckled_30.png';

const InfoItem = ({ label, text, className }) => {
  return (
    <Heading
      level="2"
      className={styles(
        'archive-brown-400 border-bottom border-black_50',
        `archive-card__${label.toLowerCase()}`,
        className
      )}
    >
      <Span className="black_50 text-uppercase mr1" style="vulfpeck">
        {label}:
      </Span>
      <Span style="dasracist">{text}</Span>
    </Heading>
  );
};

const ArchiveCard = ({ project, location, medium, date, budget, tactics }) => {
  return (
    <div
      className="archive-card bg-archive-beige p5 col-10 col-8-sm col-6-md col-offset-2-md col-offset-1-sm self-center z1"
      style={{ backgroundImage: `url(${speckles})` }}
    >
      <div className="archive-card__logo flex">
        <img src={logoSrc} className="o10p h100p m-auto" alt="SuSu Logo" />
      </div>
      <div className="archive-card__primary-info mb4">
        <InfoItem label="Project" text={project} />
        <InfoItem label="Location" text={location} />
        <InfoItem label="Medium" text={medium} />
        <InfoItem label="Date" text={date} className="word-keep" />
        <InfoItem label="Budget" text={budget} className="" />
      </div>
      <Tactics markedTactics={tactics} />
    </div>
  );
};

export default ArchiveCard;
