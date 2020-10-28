import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenu from '../Components/IrisMemberMenu/IrisMemberMenu';
import IrisDataEdit from '../Components/IrisDataEdit/IrisDataEdit';
import './IrisProfilePage.scss';

function IrisProfilePage() {
  return (
    <>
      <div class="container iris-userprofile-container">
        <IrisMemberMenu />
        <IrisDataEdit />
      </div>
    </>
  );
}

export default IrisProfilePage;
