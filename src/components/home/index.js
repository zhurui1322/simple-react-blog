import React, { Component } from 'react';
import Button from 'material-ui/Button';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom'
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Raymond React World</h2>
          <Button color="primary">
            <Link to='/'>Home</Link>
          </Button>
          <Button color="primary">
            <Link to='/simple-youtube'>Youtube</Link>
          </Button>
          <Button color="primary">
            <Link to='/weather_forecaster'>Forecaster</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Home;