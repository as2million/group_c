import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisGetCouponSect from '../Components/IrisGetCouponSect/IrisGetCouponSect';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';

function IrisGetCoupon(props) {
  const { isLogin } = props;
  if (isLogin === false) return <Redirect to="/" />;
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
