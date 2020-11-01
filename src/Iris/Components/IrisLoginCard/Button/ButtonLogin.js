import React from 'react';
import './Button.scss';

function ButtonLogin(props) {
  const { setIsLogin } = props;
  const handleLogin = () => {
    setIsLogin(true);
  };

  // text 按鈕文字
  // className 橘色樣式為button-btn 綠色樣式為button-btn-g
  const { text, className, id } = props;
  return (
    <>
      <button
        className={className}
        id={id}
        onClick={() => {
          handleLogin();
        }}
      >
        {text}
      </button>
    </>
  );
}

export default ButtonLogin;
