import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/home';
import Main from './components/main';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Home/>
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
