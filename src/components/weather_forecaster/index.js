import React, { Component } from 'react';
import ForecasterMain from './components/index';
import Home from '../home/index';
class Forecaster extends Component {
  render() {
    return (
      <div>
        <Home/>
        <ForecasterMain/>
      </div>
    );
  }
}

export default Forecaster;