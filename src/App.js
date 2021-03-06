import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/home/index';
import SimpleYoutube from './components/youtube/index';
import WeatherForeCaster from './components/weather_forecaster/index';
import BlogPost from './components/blogPost/index';
import CompassLexBot from './components/compass_lex_bot/index';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/simple-youtube" component={SimpleYoutube} />
      <Route path="/weather_forecaster" component={WeatherForeCaster} />
      <Route path="/blog_post" component={BlogPost} />
      <Route path="/compass_lex_bot" component={CompassLexBot} />
    </div>
  </BrowserRouter>
);

export default App;
