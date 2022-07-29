import {createStore, applyMiddleware, Store, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  offlineMiddleware,
  suspendSaga,
  consumeActionMiddleware,
} from 'redux-offline-queue';

import Reactotron from '../config/reactotron';
import {AuthState} from './modules/Auth/types';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSagas';

export interface ApplicationState {
  auth: AuthState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'offline'],
};

// redux config
const middleware = [];
const enhancers = [];

// saga middleware
const sagaMiddleware = createSagaMiddleware();

middleware.push(offlineMiddleware(null));
middleware.push(suspendSaga(sagaMiddleware));
middleware.push(consumeActionMiddleware());

// assemble middleware
enhancers.push(applyMiddleware(...middleware));

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<ApplicationState> = createStore(
  persistedReducer,
  compose(...enhancers, Reactotron.createEnhancer()),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export {store, persistor};
