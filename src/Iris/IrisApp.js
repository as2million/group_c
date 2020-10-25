// ------test-----  //

import React, { useState, useEffect } from "react";
import TempNavbar from "./Components/temp-navbar/TempNavbar";
// import InputH50 from "./../Share/Components/Input/InputH50";
// import InputH44 from "./../Share/Components/Input/InputH44";
// import InputH40 from "./../Share/Components/Input/InputH40";
// import TextArea from "./../Share/Components/Input/TextArea";
// import SearchBar from "../Share/Components/Input/SearchBar";
import Test from "./Pages/Test";
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
        {/* <div className="container">
          <SearchBar />
          <br />
          <InputH50 />
          <br />
          <InputH44 />
          <br />
          <InputH40 />
          <br />
          <TextArea />
        </div> */}
        {/* ------------ route----------- */}
        <Switch>
          {/* 新寫法 */}
          {/* <Route exact path="/">
              <Home />
            </Route> */}
          <Route exact path="/test">
            <Test setName={setName}/>
          </Route>
          <Route exact path="/userprofile">
            <UserProfile name={name}/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default IrisApp;
