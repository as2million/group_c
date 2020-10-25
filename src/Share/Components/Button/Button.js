import React from "react";
import "./Button.scss";

function Button(props) {
  const { text } = props;
  return (
    <>
      <button className="button-btn button-btn-n">{text}</button>
    </>
  );
}

export default Button;
