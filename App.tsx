import React from 'react';

import {StatusBar} from 'react-native';
import {Provider, useSelector} from 'react-redux';

import store, {ApplicationState} from './src/store';
import {AuthState} from './src/store/modules/Auth/types';

import {Home, SignIn} from './src/screens';

const Navigation = () => {
  const {logged}: AuthState = useSelector<ApplicationState>(
    state => state.auth,
  );

  return logged ? <Home /> : <SignIn />;
};

export default () => {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
    </Provider>
  );
};
