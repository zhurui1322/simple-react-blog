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
          <Link to='/' style={{ textDecoration: 'none' }}><Button color="primary">Home</Button></Link>
          <Link to='/simple-youtube' style={{ textDecoration: 'none' }}><Button color="primary">Youtube</Button></Link>
          <Link to='/weather_forecaster' style={{ textDecoration: 'none' }}><Button color="primary">Forecaster</Button></Link>
        </div>
      </div>
    );
  }
}

export default Home;