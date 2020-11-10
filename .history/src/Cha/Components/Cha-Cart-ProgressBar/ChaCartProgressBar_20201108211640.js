import React from 'react';
// import RightArrowWhite from 'Cha/Components/Cha-Cart-ProgressBar/Images/right-arrow-white.svg'
import './ChaCartProgressBar.scss';
import { Link } from 'react-router-dom';

window.addEventListener('scroll', () => {
  moveBar('#f6bd60');
});

// main code
function moveBar(color = '#fff') {
  let bar = document.querySelector('.cha-progress-bar-yellow');
  let w = Math.ceil(
    (Math.round(window.pageYOffset) /
      (document.body.scrollHeight - window.innerHeight)) *
      100
  );
  if (bar) {
    bar.style.width = w + '%';
    bar.style.background = color;
    // console.log(bar);
  }
}
function ChaCartProgressBar(props) {
  return (
    <>
      <div className="cha-progress-bar"></div>

      <div className="cha-progress-bar-arrow-header">
        <Link to="/">
          <div
            className="cha-right-arrow"
            onClick={() => props.setShowBar(true)}
            onClick={() => {
              props.history.push('/chaCartTest');
              問健哲;
            }}
          ></div>
        </Link>
        <div className="cha-progress-bar-header">建立訂單</div>
      </div>
      <div className="cha-progress-bar-yellow">
        <div className="cha-progress-bar-arrow-header-white">
          <Link to="/">
            <div
              className="cha-right-arrow-fff"
              onClick={() => props.setShowBar(true)}
            ></div>
          </Link>
          <div className="cha-progress-bar-header-fff">建立訂單</div>
        </div>
      </div>
    </>
  );
}
export default ChaCartProgressBar;
