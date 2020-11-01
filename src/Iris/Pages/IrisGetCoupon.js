import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisGetCouponSect from '../Components/IrisGetCouponSect/IrisGetCouponSect';
import './IrisMemberPage.scss';

function IrisGetCoupon(props) {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisGetCouponSect />
      </div>
    </>
  );
}

export default IrisGetCoupon;
