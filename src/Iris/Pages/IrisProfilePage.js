import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenu from '../Components/IrisMemberMenu/IrisMemberMenu';
import IrisDataEdit from '../Components/IrisDataEdit/IrisDataEdit';
import './IrisMemberPage.scss';

function IrisProfilePage() {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenu />
        <IrisDataEdit />
      </div>
    </>
  );
}

export default IrisProfilePage;
