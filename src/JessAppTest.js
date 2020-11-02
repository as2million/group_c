import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavBar from './Share/Components/NavBar/NavBar';
import VNavbar from './Share/Components/VNavbar/VNavbar';
import JessBento from './Jess/Pages/JessBento';
import JessVegBox from './Jess/Pages/JessVegBox';
import JessMenu from './Jess/Pages/JessMenu';
import JessComment from './Jess/Pages/JessComment';
import JessCommentMsg from './Jess/Pages/JessCommentMsg';
import Footer from './Share/Components/Footer/Footer';
import testInput from './Jess/Components/JessCommentMsg/testInput';

function JessAppTest() {
  return (
    <Router>
      <>
        <NavBar />
        <VNavbar />
        <JessBento />
        {/* <testInput /> */}
        {/* <JessCommentMsg /> */}
        {/* <JessVegBox /> */}
        {/* <JessMenu /> */}

        <Footer />
      </>
    </Router>
  );
}

export default JessAppTest;
