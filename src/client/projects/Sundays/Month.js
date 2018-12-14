import React from 'react';

const WeekHeading = props => (
  <h4 className="border-bottom border-white pb1 mb3 font-mono fz24px ls-2px">
    {props.children}
  </h4>
);

const Month = ({ month, susuDay, breakfast, week1, week3, week4 }) => {
  return (
    <>
      <h3 className="mb3 font-mono fz24px text-uppercase ls-2px">{month}</h3>
      <ol className="border border-white rounded-medium clip grid grid-1 grid-4-sm mb6 bg-sususunday-red">
        <li className="px3 pt3 pb4 text-center o50p">
          <WeekHeading>Week 1</WeekHeading>
          <p>{week1}</p>
        </li>
        <li className="px3 pt3 pb4 text-center">
          <h4 className="border-bottom border-white pb1 mb3 font-mono fz24px ls-2px">
            {`${month} ${susuDay}`}
          </h4>
          <p className="fz30px">{breakfast}</p>
        </li>
        <li className="px3 pt3 pb4 text-center o50p">
          <WeekHeading>Week 3</WeekHeading>
          <p>{week3}</p>
        </li>
        <li className="px3 pt3 pb4 text-center o50p">
          <WeekHeading>Week 4</WeekHeading>
          <p>{week4}</p>
        </li>
      </ol>
    </>
  );
};

export default Month;
