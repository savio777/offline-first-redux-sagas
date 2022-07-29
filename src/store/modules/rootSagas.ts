import {all, spawn, takeEvery, takeLatest} from 'redux-saga/effects';

import {AuthTypes} from './Auth/types';
import {load} from './Auth/sagas';
import {startWatchingNetworkConnectivity} from './Offline/sagas';

export default function* rootSaga() {
  yield all([
    spawn(startWatchingNetworkConnectivity),
    takeEvery(AuthTypes.SINGN_LOAD, load),
  ]);
}
