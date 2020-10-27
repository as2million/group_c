// ------Iris-app------  //

import React, { useState, useEffect } from "react";
import TempNavbar from "./Components/temp-navbar/TempNavbar";
// import InputLg from "./../Share/Components/Input/InputLg";
// import InputMd from "./../Share/Components/Input/InputMd";
// import InputSm from "./../Share/Components/Input/InputSm";
// import SelectSm from "./../Share/Components/Input/SelectSm";
import "./IrisApp.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function IrisApp() {
  return (
    <Router>
      <>
        <TempNavbar />
      </>
    </Router>
  );
}

export default IrisApp;
