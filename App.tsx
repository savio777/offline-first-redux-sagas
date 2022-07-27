import React from 'react';

import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/store';

import Home from './src/screens/Home';

export default () => (
  <Provider store={store}>
    <Home />
    <StatusBar backgroundColor="white" barStyle="dark-content" />
  </Provider>
);
