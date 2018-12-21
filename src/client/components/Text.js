import React from 'react';
import styles from '../utils/css';

const TEXT_STYLES = {
  H100: styles('fz40px font-mono'), // deprecated
  H200: styles('fz28px font-mono ls-1px'), // deprecated
  H300: styles('fz16px font-mono ls0px'), // deprecated
  P100: styles('fz18px font-serif'), // deprecated
  P200: styles('fz16px font-serif'), // deprecated
  vulfpeck: styles('fz18px font-mono ls-1px'),
  dasracist: styles('fz28px font-mono ls-3px'),
  bigfreedia: styles(''),
  chromesparks: styles(''),
  sherwood: styles(''),
  bigredmachine: styles(''),
  mapsandatlases: styles(''),
  jonhopkins: styles(''),
  kishibashi: styles(''),
  kishibashi: styles(''),
  danny: styles(''),
  saul: styles(''),
  rusty: styles(''),
  reuben: styles(''),
  linus: styles('')
};

export const Text = ({ tag: Tag = 'span', style, children, className }) => {
  const classes = styles(TEXT_STYLES[style], className);
  return <Tag className={classes}>{children}</Tag>;
};

export const Paragraph = props => <Text tag="p" {...props} />;
export const Div = props => <Text tag="div" {...props} />;
export const Span = props => <Text tag="span" {...props} />;
export const Li = props => <Text tag="li" {...props} />;
export const Heading = props => {
  const level = props.level ? props.level : '2';
  return <Text tag={`h${level}`} {...props} />;
};
