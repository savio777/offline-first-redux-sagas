import {all, spawn, takeLatest} from 'redux-saga/effects';

import {AuthTypes} from './Auth/types';
import {load} from './Auth/sagas';
import {startWatchingNetworkConnectivity} from './Offline/sagas';

export default function* rootSaga() {
  return yield all([
    spawn(startWatchingNetworkConnectivity),
    takeLatest(AuthTypes.SINGN_LOAD, load),
  ]);
}
