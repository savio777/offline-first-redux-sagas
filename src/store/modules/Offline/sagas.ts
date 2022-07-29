import {put, take} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga';
import NetInfo from '@react-native-community/netinfo';
import {ONLINE, OFFLINE} from 'redux-offline-queue';

export function* startWatchingNetworkConnectivity() {
  const channel = eventChannel(emitter => {
    NetInfo.addEventListener(state => emitter(state.isConnected));
    return () => NetInfo.addEventListener(state => emitter(state.isConnected));
  });

  try {
    while (true) {
      const isConnected = yield take(channel);

      if (isConnected) {
        yield put({type: ONLINE});
      } else {
        yield put({type: OFFLINE});
      }
    }
  } catch (error) {
    channel.close();
  }
}
