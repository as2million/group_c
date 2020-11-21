import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IrisMemberMenuSect from '../Components/IrisMemberMenuSect/IrisMemberMenuSect';
import IrisOrderCommentSect from '../Components/IrisOrderCommentSect/IrisOrderCommentSect';
import './IrisMemberPage.scss';
import { Redirect } from 'react-router-dom';

function IrisOrderComment(props) {
  const { isLogin, currentUser, setShowLoginModal } = props;
  if (isLogin === false) {
    setShowLoginModal(true);
    return <Redirect to="/" />;
  }
  return (
    <>
      <div className="container iris-memberpage-container">
        <IrisMemberMenuSect currentUser={currentUser} />
        <IrisOrderCommentSect currentUser={currentUser} />
      </div>
    </>
  );
}

export default IrisOrderComment;
