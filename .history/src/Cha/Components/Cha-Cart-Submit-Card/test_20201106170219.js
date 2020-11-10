import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Form extends Component {
  const [gender,setGender]=useState({
    text: '',
    : 'male',})

  render() {
    const { gender } = this.state;
    return (
      <div>
        <h3>Gender:</h3>
        <label>Male</label>
        <input
          type="radio"
          value="male"
          onChange = {(e) => {
    setGender(e.target.value);
  }}
          checked={gender === 'male'}
        />
        <label>Female</label>
        <input
          type="radio"
          value="female"
          onChange = {(e) => {
    setGender(e.target.value);
  }}
          checked={gender === 'female'}
        />
      </div>
    );
  }
}
