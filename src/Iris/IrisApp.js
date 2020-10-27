// ------test-----  //

import React, { useState, useEffect } from "react";
import TempNavbar from "./Components/temp-navbar/TempNavbar";
import Test from "./Pages/Test";
import Test2 from "./Pages/Test2";
import UserProfile from "./Pages/UserProfile";
import "./IrisApp.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function IrisApp() {
  // test
  const [name, setName] = useState("iris");

  return (
    <Router>
      <>
        <TempNavbar />

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
      </>
    </Router>
  );
}

export default IrisApp;
