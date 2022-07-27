import {call, put} from 'redux-saga/effects';
import {AxiosError} from 'axios';

import api from '../../../services/api';

import {singninError, singninSucess} from './actions';

import {UserCredentialsSing, DTOLoadPayload} from './types';

export function* load(data: DTOLoadPayload) {
  try {
    const credentials: UserCredentialsSing = data.payload.data;

    const response = yield call(api.get, `/users/${credentials.login}`);

    yield put(singninSucess(response.data));
  } catch (err: AxiosError) {
    console.log('err load signin', err);

    yield put(singninError('user not found'));
  }
}
