import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import ForecasterMain from './components/index';
import Home from '../home/index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

class Forecaster extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Home/>
          <ForecasterMain/>
        </div>
      </Provider>
    );
  }
}

export default Forecaster;