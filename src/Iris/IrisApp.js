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
import MainContent from './Components/MainContent';
import './IrisApp.scss';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function IrisApp() {
  // test
  const [name, setName] = useState('iris');

  return (
    <Router>
      <>
        <NavBar />
        <VNavbar />
        <MainContent>
          {/* ------------ route----------- */}
          <Switch>
            <Route path="/test">
              <Test setName={setName} />
            </Route>
            <Route path="/test2">
              <Test2 name={name} />
            </Route>
            <Route path="/memberUserprofile">
              <IrisProfilePage name={name} />
            </Route>
            <Route path="/orderComment">
              <IrisOrderComment />
            </Route>
            <Route path="/MyFav">
              <IrisMyFav />
            </Route>
          </Switch>
        </MainContent>
        <Footer />
      </>
    </Router>
  );
}

export default IrisApp;
