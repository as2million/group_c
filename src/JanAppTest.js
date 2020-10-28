import React, { useState, useEffect } from 'react';
// import VNavbar from './Share/Components/VNavbar/VNavbar.js';
import JanIndex from './Janice/Components/JanIndex/JanIndex';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Share/Components/NavBar/NavBar';

function JanAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <JanIndex />
      </>
    </Router>
  );
}

export default JanAppTest;
