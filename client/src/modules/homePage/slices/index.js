import { combineReducers } from 'redux';

import pageData from './pageData';
import searchBar from './searchBar';

const rootReducer = combineReducers({
  pageData,
  searchBar
});

export default rootReducer;
