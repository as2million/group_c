// ------test-----  //

import React, { useState, useEffect } from 'react';
import NavBar from './../Share/Components/NavBar/NavBar';
import VNavbar from './../Share/Components/VNavbar/VNavbar';
import Test from './Pages/Test';
import Test2 from './Pages/Test2';
import UserProfile from './Pages/UserProfile';
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
            <Route path="/Test2">
              <Test2 name={name} />
            </Route>
            <Route path="/UserProfile">
              <UserProfile name={name} />
            </Route>
          </Switch>
        </MainContent>
      </>
    </Router>
  );
}

export default IrisApp;
