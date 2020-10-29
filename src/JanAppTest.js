import React, { useState, useEffect } from 'react';
// import VNavbar from './Share/Components/VNavbar/VNavbar.js';
import JanIndex from './Janice/Components/JanIndex/JanIndex';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Share/Components/NavBar/NavBar';
import Footer from './Share/Components/Footer/Footer';

function JanAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <JanIndex />
        <Footer />
      </>
    </Router>
  );
}

export default JanAppTest;
