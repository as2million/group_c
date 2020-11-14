import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
// import IrisBeastiePointSect from '../Components/IrisBeastiePointSect/IrisBeastiePointSect';
import ChaOrderManagement from './../../Cha/Components/Cha-Order-Management/ChaOrderManagement';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';

function IrisOrderManagement(props) {
  const { isLogin, currentUser, setShowLoginModal, handleCartNumber } = props;
  // if (isLogin === false) {
  //   setShowLoginModal(true)
  //   return <Redirect to="/" />
  // }
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <ChaOrderManagement {...props} />
      </div>
    </>
  );
}

export default IrisOrderManagement;
