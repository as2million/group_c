import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './IrisBeastiePointSect.scss';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as BesatieBook } from './Images/beastie_book.svg';
import { ReactComponent as BesatieCoin } from './Images/beastie_coin.svg';
import { ReactComponent as BesatieQ } from './Images/beastie_q.svg';

function IrisBeastiePointSect() {
  return (
    <>
      <div className="container col-9">
        {/* <div className="row justify-content-center"> */}
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">怪獸幣</h2>
          <WaveLine />
          <BesatieBook />
          <BesatieQ />
          <BesatieCoin />
        </div>
      </div>
    </>
  );
}

export default IrisBeastiePointSect;
