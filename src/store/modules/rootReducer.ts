import {combineReducers} from 'redux';
import {reducer as offlineReducer} from 'redux-offline-queue';

import authReducer from './Auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  offline: offlineReducer,
});

export default rootReducer;
