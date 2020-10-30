import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Share/Components/NavBar/NavBar';
import VNavbar from './Share/Components/VNavbar/VNavbar';
// import JessBento from './Jess/Pages/JessBento';
import JessVegBox from './Jess/Pages/JessVegBox';
import Footer from './Share/Components/Footer/Footer';

function JessAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <VNavbar />
        {/* <JessBento /> */}
        <JessVegBox />
        <Footer />
      </>
    </Router>
  );
}

export default JessAppTest;
