import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Form extends Component {
  state = {
    text: '',
    gender: 'male',
    like: {
      male: 'false',
      female: 'false',
    },
  };

  onChangeGender = (e) => {
    setGender(e.target.value);
  };
  onChangeLike = (e) => {
    const key = e.target.value;
    this.setState((state) => ({
      like: {
        ...state.like,
        [key]: !state.like[key],
      },
    }));
  };
  render() {
    const { gender } = this.state;
    return (
      <div>
        <h3>Gender:</h3>
        <label>Male</label>
        <input
          type="radio"
          value="male"
          onChange={this.onChangeGender}
          checked={gender === 'male'}
        />
        <label>Female</label>
        <input
          type="radio"
          value="female"
          onChange={this.onChangeGender}
          checked={gender === 'female'}
        />
      </div>
    );
  }
}
