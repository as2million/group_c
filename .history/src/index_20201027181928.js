import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import JanAppTest from './JanAppTest';
import * as serviceWorker from './serviceWorker';
// import ClaudiaAppTest from './ClaudiaAppTest'
// import JessAppTest from './JessAppTest'
import IrisAppTest from './IrisAppTest';
ReactDOM.render(
  <React.StrictMode>
  <ChaAppTest />
    {/* <ClaudiaAppTest /> */}
    {/* <JanAppTest /> */}
    {/* <JessAppTest /> */}
    <IrisAppTest />
import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
// import App from './App'
import ChaAppTest from './ChaAppTest'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <ChaAppTest />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
