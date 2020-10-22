// ------Iris-app------  //

import React, { useState, useEffect } from "react";
import MyNavbar from "./Components/temp-navbar/MyNavbar";
import InputLg from "./../Share/Components/Input/InputLg";
import InputMd from "./../Share/Components/Input/InputMd";
import InputSm from "./../Share/Components/Input/InputSm";
import SelectSm from "./../Share/Components/Input/SelectSm";
import "./IrisApp.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function IrisApp() {
  return (
    <Router>
      <>
        <MyNavbar />
        <div className="container">
          <InputLg />
          <InputMd />
          <InputSm />
          <SelectSm />
          <br />
        </div>
      </>
    </Router>
  );
}

export default IrisApp;
