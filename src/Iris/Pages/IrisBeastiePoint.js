import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect';

import './IrisMemberPage.scss';

function IrisBeastiePoint() {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisBeastiePointSect />
      </div>
    </>
  );
}

export default IrisBeastiePoint;