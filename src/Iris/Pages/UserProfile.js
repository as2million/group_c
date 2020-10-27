import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import IrisMemberMenu from "./../Components/IrisMemberMenu/IrisMemberMenu";

function UserProfile() {
  return (
    <>
      <div class="container iris-container"></div>
      <IrisMemberMenu />
    </>
  );
}

export default UserProfile;
