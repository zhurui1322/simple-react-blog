import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => <h1>Home</h1>;

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={Home} />
    </div>
  </BrowserRouter>
)

export default App;
