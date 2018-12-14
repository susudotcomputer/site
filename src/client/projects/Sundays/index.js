import React from 'react';
import { Helmet } from 'react-helmet';

// Assets
import './styles.css';
import speckled from './assets/speckled.png';
import susuLogo from './assets/susu-logo.svg';
import susuSundaysLogo from './assets/sususundays-white--red-dot.svg';
import imgLoop from './assets/sususundays-loop.gif';
import videoLoop from './assets/sususundays-loop.mp4';
import pinImage from './assets/sususundays-pin.png';
import mapImage from './assets/sususundays-map.png';

// Components
import Month from './Month';

const Sundays = () => {
  return (
    <>
      <Helmet>
        <title>s u s u s u n d a y s</title>
      </Helmet>
      <div
        className="m0 font-serif p3 pt10vh-md bg-sususunday-red bgi-speckles bgz150p bgz75p-sm white"
        style={{ backgroundImage: `url(${speckled})` }}
      >
        <div className="max-w980px mx-auto">
          <header className="aspect-ratio aspect-ratio--16x9 mb4 mb10-md">
            <video
              className="max-w100p aspect-ratio__object hide block-sm"
              src={videoLoop}
              type="video/mp4"
              autoPlay
              loop
              muted
            />
            <div>
              <img
                className="hide-sm max-w100p"
                src={imgLoop}
                alt="Nathan and Kilian spinning around the studio with red lights in the background"
              />
            </div>
            <div className="aspect-ratio__object flex">
              <img
                className="w20p m-auto"
                src={susuSundaysLogo}
                alt="SuSu Sundays"
              />
            </div>
          </header>
          <main className="mb10">
            <section className="max-w640px mx-auto mb8 mb12-md bg-sususunday-red">
              <p className="fz20px lh1_4 fz34px-sm mb5 border-left border-white pl2 pl4-sm">
                <span className="weight-300">
                  Your roommates are too loud. The library is too quiet. Your
                  trusted cafe is... tired. All of this creative energy, with
                  nowhere to put it. And worst of all, you’re hungry.{' '}
                </span>
                <strong className="weight-400">
                  How about you join us for SuSuSundays?
                </strong>
              </p>
              <p className="fz14px lh1_5 fz22px-sm mb5">
                Whether it is coding, painting, editing, designing, or writing—
                come do what you do, at SuSu. It’s time set aside to work on
                that thing you’ve always wanted to work on. And best of all,
                we’re gonna make breakfast for you. (Nathan can’t really cook,
                but Kilian really can!) Make sure you’re dressed comfy to best
                channel the c~r~e~a~t~i~v~e~v~i~b~e~s.
              </p>
              <p className="fz14px lh1_5 fz22px-sm mb5">
                Sometimes we stop to chat, or get opinions when we’re stuck. The
                idea is to respect the silence and indulge in the distraction.
                Maybe you'll get feedback from someone outside of your
                discipline which could lead to a brand new insight? Also, you
                know... there will be breakfast waiting for you. And wifi.
              </p>
              <p className="fz14px lh1_5 fz22px-sm mb5">
                Come to our studio on the second Sunday of each month, from 11am
                to 4pm. You deserve it.
              </p>
            </section>

            <section className="flex flex-column max-w600px flex-row-sm max-w-none-sm mx-auto mb10 bg-sususunday-red">
              <div className="border border-white rounded-medium clip mb4 mb0-sm">
                <a
                  href="https://goo.gl/maps/NkU6U72daX12"
                  className="border-bottom border-white block lh0"
                >
                  <img
                    src={mapImage}
                    alt="map of Long Island City area near the studio for reference"
                  />
                </a>

                <p className="text-center p2 lh1_5">
                  <a
                    className="weight-900 white"
                    href="https://goo.gl/maps/NkU6U72daX12"
                  >
                    803 43rd Ave, Long Island City, NY 11101
                  </a>
                  <span className="block">
                    There is good street parking. Subway lines walkable:
                    G&nbsp;/&nbsp;E&nbsp;/&nbsp;M&nbsp;/&nbsp;7
                  </span>
                </p>
              </div>

              <div className="ml4-sm border border-white rounded-medium clip">
                <a className="border-bottom border-white block lh0">
                  <img
                    src={pinImage}
                    alt="A circular enamel pin in silver and red with the susu logo at the center"
                  />
                </a>

                <p className="text-center p2 lh1_5">
                  <strong>YES! The rumors are true.</strong> If you show up to a
                  SuSuSunday, you receive a limited edition enamel pin to honor
                  the special occasion.
                </p>
              </div>
            </section>

            <section>
              <Month
                month="December"
                susuDay="9th"
                breakfast="🍳 🥔 🥑🍞"
                week1="Call your Mom"
                week3="Go for a long walk (wrap up warm)"
                week4="Grab dinner somewhere new"
              />

              <Month
                month="January"
                susuDay="13th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />

              <Month
                month="February"
                susuDay="10th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />

              <Month
                month="March"
                susuDay="10th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />

              <Month
                month="April"
                susuDay="14th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />

              <Month
                month="May"
                susuDay="12th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />

              <Month
                month="June"
                susuDay="9th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />

              <Month
                month="July"
                susuDay="14th"
                breakfast="TBD"
                week1="-"
                week3="-"
                week4="-"
              />
            </section>
          </main>
          <footer className="flex flex-column items-center mb10">
            <a href="/">
              <img
                src={susuLogo}
                alt="SuSu Logo of two smoke stacks over a factory roof"
                className="w10 mb4"
              />
            </a>
            <p className="text-center">
              <span>SuSuSundays is another great idea from </span>
              <a className="white" href="http://twitter.com/kilmc">
                Kilian
              </a>
              &nbsp;&&nbsp;
              <a className="white" href="http://twitter.com/natemaggio">
                Nathan
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Sundays;
