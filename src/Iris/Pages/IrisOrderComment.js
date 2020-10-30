import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisUserCommentSect from '../Components/IrisUserCommentSect/IrisUserCommentSect';
import './IrisMemberPage.scss';

function IrisOrderComment() {
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect />
        <IrisUserCommentSect />
      </div>
    </>
  );
}

export default IrisOrderComment;
