import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect';
import './IrisMemberPage.scss';

function IrisOrderComment() {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisOrderCommentSect />
      </div>
    </>
  );
}

export default IrisOrderComment;
