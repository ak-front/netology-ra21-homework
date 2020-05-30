import { combineReducers } from 'redux';

import servicesReducer from './services/reducer';

const rootReducer = combineReducers({
  services: servicesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
