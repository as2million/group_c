import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisMyFavSect from '../Components/IrisMyFavSect/IrisMyFavSect';
import './IrisMemberPage.scss';

function IrirsMyFav(props) {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisMyFavSect />
      </div>
    </>
  );
}

export default IrirsMyFav;
