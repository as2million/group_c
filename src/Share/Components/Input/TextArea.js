// textarea   font-size:15px

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function TextArea() {
  return (
    <>
      <div class="form-group">
        <textarea
          class="form-control iris-textarea"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="textarea  font-size:15px"
        ></textarea>
      </div>
    </>
  );
}

export default TextArea;
