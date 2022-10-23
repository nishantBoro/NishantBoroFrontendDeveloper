import { combineReducers } from 'redux';

import { homePageReducer } from '../modules/homePage';

const rootReducer = combineReducers({
  homePage: homePageReducer
});

export default rootReducer;
