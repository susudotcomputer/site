import React from 'react';
import { Heading, Span } from '../Text';
import styles from '../../utils/css';
import { camelToSentence } from '../../utils/text';

const TACTICS = [
  'visualDesign',
  'webDevelopment',
  'cooking',
  'branding',
  'photography',
  'hosting',
  'copyWriting',
  'video',
  'illustration',
  'carpentry',
  'print',
  'music'
];

const dotPositions = [
  styles('t1px l2px'),
  styles('b-1px r2px'),
  styles('b1px l1px'),
  styles('b2px l2px'),
  styles('t1px r0px'),
  styles('t1px l0px'),
  styles('t0px l2px')
];

const randomNumber = num => {
  return Math.round(Math.random() * num);
};

const TacticStamp = ({ stamped }) => {
  const wrapperClasses = styles(
    'circle w16px h16px border border-black_50 inline-flex mr2 relative'
  );
  const direction = dotPositions[randomNumber(dotPositions.length)];
  const dotClasses = styles(
    direction,
    'relative w12px h12px circle m-auto',
    stamped ? 'bg-archive-brown-400' : ''
  );
  return (
    <span className={wrapperClasses}>
      <span className={dotClasses} />
    </span>
  );
};

const TacticItem = ({ stamped, title }) => {
  return (
    <li>
      <TacticStamp stamped={stamped} />
      <Span style="chromesparks">{camelToSentence(title)}</Span>
    </li>
  );
};

const Tactics = ({ markedTactics }) => {
  const usedTactics = Object.entries(
    TACTICS.reduce((accum, tactic) => {
      accum[tactic] = markedTactics.includes(tactic);
      return accum;
    }, {})
  );

  return (
    <div className="archive-card__tactics">
      <Heading level="3" style="H300" className="text-uppercase black_50">
        Tactics used:
      </Heading>
      <ul className="archive-card__tactics-list">
        {usedTactics.map(([tactic, stamped], i) => (
          <TacticItem key={`${tactic}-${i}`} title={tactic} stamped={stamped} />
        ))}
      </ul>
    </div>
  );
};

export default Tactics;
