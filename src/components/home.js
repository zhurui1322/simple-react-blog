import React from 'react';
import '../App.css';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import logo from '../logo.svg';
import SimpleMediaCard from './project_card';

const Home = () => (
  <div>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        Welcome to Raymond React World
      </p>
      <Button color="primary">
        Primary
      </Button>
      <Grid container spacing={24}>
        <Grid item sm={3}>
          <div className="App-card">
            <SimpleMediaCard />
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="App-card">
            <SimpleMediaCard />
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="App-card">
            <SimpleMediaCard />
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="App-card">
            <SimpleMediaCard />
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Home
