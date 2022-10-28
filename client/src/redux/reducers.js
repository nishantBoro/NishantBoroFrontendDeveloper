import { combineReducers } from 'redux';

import { authReducer } from '../modules/auth';
import { homePageReducer } from '../modules/homePage';

const rootReducer = combineReducers({
  homePage: homePageReducer,
  auth: authReducer
});

export default rootReducer;
