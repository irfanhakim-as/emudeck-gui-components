import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from 'context/globalContext';

import Footer from 'components/organisms/Footer/Footer.js';
import Header from 'components/organisms/Header/Header.js';
import Aside from 'components/organisms/Aside/Aside.js';
import Main from 'components/organisms/Main/Main.js';

import {
  BtnSimple,
  ProgressBar,
  FormInputSimple,
  LinkSimple,
} from 'getbasecore/Atoms';
import { Form } from 'getbasecore/Molecules';

import Card from 'components/molecules/Card/Card.js';

import CHDToolImg from 'assets/powertools.png';

const CHDTool = ({
  disabledNext,
  disabledBack,
  downloadComplete,
  onChange,
  onClick,
  next,
  back,
  hasSudo,
  nextText,
}) => {
  const { state, setState } = useContext(GlobalContext);
  const { sudoPass, CHDTool } = state;

  return (
    <div className="app">
      <Aside />
      <div className="wrapper">
        <Header title="EmuDeck" bold="Compression Tool" />
        <Main>
          <p className="lead">
            Our Compression Tool is a script that looks through your roms and
            compress them up to 70% of it's original disk size using CHD and RVZ
            formats.
          </p>
          <p>
            The tool will find all your .iso, .gdi, etc roms and will convert
            them to either CHD or RVZ files.
          </p>

          <p>
            <strong>CHD format;</strong>
            <br />
            Used to compress PSX, PS2, SegaCD and Dreamcast games.
          </p>

          <p>
            <strong>RVZ format:</strong>
            <br />
            Used to compress GameCube and Wii Games.
          </p>

          <BtnSimple
            css="btn-simple--1"
            type="button"
            aria="Install CHDTool"
            onClick={() => onClick()}
            disabled={disabledNext && 'true'}
          >
            Run Compression Tool
          </BtnSimple>
        </Main>
        <Footer
          next={false}
          nextText={nextText}
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </div>
    </div>
  );
};

export default CHDTool;
