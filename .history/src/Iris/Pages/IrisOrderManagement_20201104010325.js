import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/';
// import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect';
import ChaOrderManagement from './../../Cha/Components/Cha-Order-Management/ChaOrderManagement';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';

function IrisOrderManagement(props) {
  const { isLogin } = props;
  if (isLogin === false) return <Redirect to="/" />;
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <ChaOrderManagement />
      </div>
    </>
  );
}

export default IrisOrderManagement;
