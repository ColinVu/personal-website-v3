import React, { useState, useEffect, useRef } from 'react';
import YearsPage from './YearsPage.js';
import WorldPage from './WorldPage.js';
import TimePage from './TimePage.js';
import LightPage from './LightPage.js';
import PeoplePage from './PeoplePage.js';
import MeaningPage from './MeaningPage.js';

const MediaManager = ({num}) => {
  if (num == 0) {
    return (
      <YearsPage/>
    );
  } else if (num == 1) {
    return (
      <WorldPage/>
    );
  } else if (num == 2) {
    return (
      <TimePage/>
    );
  } else if (num == 3) {
    return (
      <LightPage/>
    );
  } else if (num == 4) {
    return (
      <PeoplePage/>
    );
  } else if (num == 5) {
    return (
      <MeaningPage/>
    );
  }
};

export default MediaManager;