import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./Input.scss";

function SelectSm() {
  return (
    <>
      <Form.Control className="select-size-sm" as="select">
        <option>Small select</option>
        <option>Small select</option>
        <option>Small select</option>
        <option>Small select</option>
      </Form.Control>

      <select class="form-control selectpicker" id="exampleFormControlSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <select class="selectpicker">
        <option>Mustard</option>
        <option>Ketchup</option>
        <option>Relish</option>
      </select>
    </>
  );
}

export default SelectSm;
