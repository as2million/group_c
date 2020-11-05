// backup

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ReactComponent as WaveLine } from './Images/wave_line.svg';
import { ReactComponent as StarOrange } from './Images/star_orange.svg';
import { ReactComponent as StarGrey } from './Images/star_grey.svg';
import './IrisMyFavSect.scss';
import Card from './../../../Share/Components/Card/Card';
// import Star123 from './Images/star_orange.svg';

function IrisDataEditSect() {

  
  return (
    <>
      <div className="container col-9">
        <div className="row justify-content-center iris-content-title-container ">
          <h2 className="iris-profile-title">我的最愛</h2>
          <WaveLine />
        </div>
        <div className="iris-cards-container d-flex">
          <Card
            title="慢煮嫩雞胸-蒜味香草"
            comment="100"
            buy="280"
            price="$130"
            imgId="card-img-5"
            // cardMargin="card-margin"
          />
          <Card
            title="慢煮嫩雞胸-蒜味香草"
            comment="100"
            buy="280"
            price="$130"
            imgId="card-img-5"
          />
          <Card
            title="慢煮嫩雞胸-蒜味香草"
            comment="100"
            buy="280"
            price="$130"
            imgId="card-img-5"
          />
        </div>
      </div>
    </>
  );
}

export default IrisDataEditSect;
