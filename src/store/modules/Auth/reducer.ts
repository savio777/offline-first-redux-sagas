import {Reducer} from 'redux';
import {markActionsOffline} from 'redux-offline-queue';

import {AuthState, AuthTypes} from './types';

const initialState: AuthState = {
  user: null,
  logged: false,
  loading: false,
  error: '',
};

const Creators = {
  authSignin: (login: string) => ({
    type: AuthTypes.SINGN_LOAD,
    login,
  }),
};

markActionsOffline(Creators, ['authSignin']);

const authReducer: Reducer<AuthState> = (
  state: AuthState = initialState,
  action,
) => {
  switch (action.type) {
    case AuthTypes.SINGN_LOAD:
      return {...state, loading: true, error: ''};
    case AuthTypes.SINGN_IN_USER:
      return {
        user: action.payload.data,
        error: '',
        loading: false,
        logged: true,
      };
    case AuthTypes.SING_OUT_USER:
      return initialState;
    case AuthTypes.SIGNIN_ERROR:
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
