import React from 'react';

import {StatusBar, Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import './src/config/reactotron';
import {ApplicationState, persistor, store} from './src/store';
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
      <PersistGate loading={<Text>carregando</Text>} persistor={persistor}>
        <Navigation />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
      </PersistGate>
    </Provider>
  );
};
