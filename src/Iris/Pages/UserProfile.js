import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenu from './../Components/IrisMemberMenu/IrisMemberMenu';
import IrisDataEdit from './../Components/IrisDataEdit/IrisDataEdit';

function UserProfile() {
  return (
    <>
      <div class="container"></div>
      <IrisMemberMenu />
      <IrisDataEdit />
    </>
  );
}

export default UserProfile;
