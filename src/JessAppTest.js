import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Share/Components/NavBar/NavBar';
import JessBento from './Jess/Pages/JessBento';
import VNavbar from './Share/Components/VNavbar/VNavbar.js';

function JessAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <VNavbar />
        <JessBento />
        {/* <Footer /> */}
      </>
    </Router>
  );
}

export default JessAppTest;
