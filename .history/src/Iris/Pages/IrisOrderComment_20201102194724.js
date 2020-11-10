import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenu from '../Components/IrisMemberMenu/IrisMemberMenu';
import IrisUserComment from '../Components/IrisUserComment/IrisUserComment';
import './IrisMemberPage.scss';

function IrisOrderComment() {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenu />
        <IrisUserComment />
      </div>
    </>
  );
}

export default IrisOrderComment;
