// ------test-----  //

import React, { useState, useEffect } from 'react';
import NavBar from './../Share/Components/NavBar/NavBar';
import VNavbar from './../Share/Components/VNavbar/VNavbar';
import Footer from './../Share/Components/Footer/Footer';
import Test from './Pages/Test';
import Test2 from './Pages/Test2';
import IrisProfilePage from './Pages/IrisProfilePage';
import IrisOrderComment from './Pages/IrisOrderComment';
import IrisMyFav from './Pages/IrisMyFav';
import IrisBeastiePoint from './Pages/IrisBeastiePoint';
import MainContent from './Components/MainContent';
import IrisLoginModal from './Components/IrisLoginModal/IrisLoginModal';
import './IrisApp.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function IrisApp() {
  // test
  const [name, setName] = useState('iris');

  // login modal
  const [isLogin, setIsLogin] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <Router>
      <>
        <NavBar
          setShowLoginModal={setShowLoginModal}
          showLoginModal={showLoginModal}
        />
        <VNavbar />
        <MainContent>
          {/* ------------ route----------- */}
          <Switch>
            <Route path="/test">
              <Test setName={setName} />
            </Route>
            {/* <Route path="/login">
              <Test2 name={name} />
            </Route> */}
            <Route path="/memberUserprofile">
              <IrisProfilePage isLogin={isLogin} />
            </Route>
            <Route path="/orderComment">
              <IrisOrderComment />
            </Route>
            <Route path="/MyFav">
              <IrisMyFav />
            </Route>
            <Route path="/beastiePoint">
              <IrisBeastiePoint />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </>
      {/* login modal每頁都用到，放外面 */}
      <IrisLoginModal
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      />
    </Router>
  );
}

export default IrisApp;
