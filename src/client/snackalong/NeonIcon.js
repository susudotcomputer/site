import React from 'react';

const addIntensity = num => {
  const arr = [];
  while (num) {
    arr.push(<feMergeNode in="blurred" key={num} />);
    num--;
  }

  return arr;
};

const RenderedNeon = ({ colorMap }) => {
  const groups = Object.keys(colorMap);
  return groups.map((group, i) => {
    const [color1, color2] = colorMap[group].split(' ');
    return (
      <React.Fragment key={`${i}-main`}>
        <use xlinkHref={`#${group}`} className={color1} />
        <use
          xlinkHref={`#${group}`}
          className={color2 ? color2 : color1}
          filter="url(#glow)"
        />
      </React.Fragment>
    );
  });
};

const Neon = ({ children, colorMap }) => {
  const intensity = 2;
  const blur = 40;
  return (
    <svg className="w100p" viewBox="-100 -100 1000 1000">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation={blur}
            result="blurred"
          />
          <feMerge>{addIntensity(intensity)}</feMerge>
        </filter>
        {children}
      </defs>
      <RenderedNeon colorMap={colorMap} />
    </svg>
  );
};

export default Neon;
