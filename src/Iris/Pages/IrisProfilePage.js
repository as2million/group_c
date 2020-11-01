import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisDataEditSect from '../Components/IrisDataEditSect/IrisDataEditSect';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';

function IrisProfilePage(props) {
  const { isLogin } = props;
  if (isLogin === false) return <Redirect to="/" />;
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisDataEditSect />
      </div>
    </>
  );
}

export default IrisProfilePage;
