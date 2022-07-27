import React from 'react';

import {View, Text} from 'react-native';
import {Provider, useSelector} from 'react-redux';

import store, {ApplicationState} from './src/store';
import {AuthState} from './src/store/modules/Auth/types';

import Home from './src/screens/Home';

// example
const App = () => {
  const {
    user: {id},
  }: AuthState = useSelector<ApplicationState>(state => state.auth);

  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <Text>{id}</Text>
    </View>
  );
};

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);
