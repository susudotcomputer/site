import React from 'react';
import { Heading } from '../../components/Text';
import Neon from '../NeonIcon';

const NeonSnack = ({ svgColorMap, svgGroups: NeonSVG }) => {
  return (
    <div className="absolute t-100px r-100px w400px mr-100px">
      <Neon colorMap={svgColorMap}>
        <NeonSVG />
      </Neon>
    </div>
  );
};

const Details = ({ kind, kindList, vesselList }) => {
  return (
    <div className="snack__details archive-beige flex">
      <div className="basis50p border-right border-archive-brown-400 border-medium pt2">
        <Heading style="P100" className="text-bold">
          {kind}
        </Heading>
        <ul>
          {kindList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="basis50p border-right border-archive-brown-400 border-medium pl2 pt2">
        <Heading style="P100" className="text-bold">
          Vessel
        </Heading>
        <ul>
          {vesselList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Clip = ({ clip, clipPosition }) => {
  return (
    <div className="snack__clip pb2 pt2 pr2 border-right border-archive-brown-400 border-medium clip">
      <video
        muted
        autoPlay
        loop
        src={clip}
        className="w100p h100p"
        style={{ objectFit: 'cover', objectPosition: clipPosition }}
      />
    </div>
  );
};

const Snack = ({
  title,
  index,
  timeStamp,
  clip,
  clipPosition,
  image,
  svgColorMap,
  svgGroups,
  kind,
  kindList,
  vesselList
}) => {
  return (
    <div className="snack col-10 relative">
      <Heading
        style="H100"
        className="archive-beige snack__title border-bottom border-archive-brown-400 border-medium"
      >{`#${index} ${title}`}</Heading>
      <Clip clip={clip} clipPosition={clipPosition} />
      <div className="snack__timestamp border-y border-right border-archive-brown-400 border-medium">
        <Heading style="H200" level={3} className="archive-beige py2">
          {timeStamp}
        </Heading>
      </div>
      <Details vesselList={vesselList} kind={kind} kindList={kindList} />
      <div className="snack__photo pl2 pt2">
        <img className="max-w100p" src={image} className="max-w100p" />
      </div>
      <NeonSnack svgColorMap={svgColorMap} svgGroups={svgGroups} />
    </div>
  );
};

export default Snack;
