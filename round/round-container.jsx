import React, { Component } from 'react';
import RoundLine from './round-line.jsx';
import RoundGuesses from './round-guesses.jsx';

class RoundContainer extends React.Component {
  render() {
    return (
      <div className="round-container">
        <RoundLine number='1' />
        <RoundLine number='2' />
        <RoundLine number='3' />
        <RoundGuesses />
      </div>
    );
  }
}

export default RoundContainer;
