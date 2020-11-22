// ------test-----  //

import React, { useState, useEffect } from 'react';
import NavBar from './../Share/Components/NavBar/NavBar';
import VNavbar from './../Share/Components/VNavbar/VNavbar';
import Footer from './../Share/Components/Footer/Footer';
import Test from './Pages/Test';
import Test2 from './Pages/Test2';
import IrisUserprofile from './Pages/IrisUserprofile';
import IrisOrderComment from './Pages/IrisOrderComment';
import IrisMyFav from './Pages/IrisMyFav';
import IrisBeastiePoint from './Pages/IrisBeastiePoint';
import IrisGetCoupon from './Pages/IrisGetCoupon';
import MainContent from './Components/MainContent';
import IrisLoginModal from './Components/IrisLoginModal/IrisLoginModal';
import IrisMemberMenuSect from './Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisDataEditSect from './Components/IrisDataEditSect/IrisDataEditSect';
import IrisBeastiePointSect from './Components/IrisBeastiePointSect/IrisBeastiePointSect';
import IrisMyFavSect from './Components/IrisMyFavSect/IrisMyFavSect';
import IrisGetCouponSect from './Components/IrisGetCouponSect/IrisGetCouponSect';
import IrisOrderCommentSect from './Components/IrisOrderCommentSect/IrisOrderCommentSect';
import './IrisApp.scss';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function IrisApp(props) {
  const [userFavDelete, setUserFavDelete] = useState('');

  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect {...props} />
        <Switch>
          <Route exact path="/member/userprofile">
            <IrisDataEditSect {...props} />
          </Route>
          <Route exact path="/member/beastiePoint">
            <IrisBeastiePointSect {...props} />
          </Route>
          <Route exact path="/member/myFav">
            <IrisMyFavSect
              {...props}
              userFavDelete={userFavDelete}
              setUserFavDelete={setUserFavDelete}
            />
          </Route>
          <Route exact path="/member/getCoupon">
            <IrisGetCouponSect {...props} />
          </Route>
          <Route exact path="/member/orderComment">
            <IrisOrderCommentSect {...props} />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default withRouter(IrisApp);
