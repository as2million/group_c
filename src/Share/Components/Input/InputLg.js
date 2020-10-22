import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function InputLg() {
  return (
    <>
      <input
        class="form-control input-size-lg"
        type="text"
        placeholder="20px 圓角"
      />
    </>
  );
}

export default InputLg;
