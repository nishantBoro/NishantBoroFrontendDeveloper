import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';

import reducers from './reducers';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    return nextState;
  } else {
    return reducers(state, action);
  }
}

const initStore = () => {
  return configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
  });
}

export const wrapper = createWrapper(initStore);