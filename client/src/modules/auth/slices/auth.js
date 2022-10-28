import request from 'superagent';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { LOGIN_URL } from '../constants';

import getAPIHost from '../../../utils/getAPIHost';

const auth = createSlice({
  name: 'auth',
  initialState: {
    fields: {
      username: '',
      password: ''
    },
    loginModal: {
      isOpen: false
    }
  },
  reducers: {
    updateField(state, { payload } = {}) {
      const { id, value } = payload;

      state.fields[id] = value;
    },
    toggleLoginModalVisibility(state) {
      state.loginModal.isOpen = !state.loginModal.isOpen;
    }
  }
});

export const selectIsLoginModalOpen = (state) => state.auth.loginModal.isOpen;
export const selectUserFieldValues = (state) => state.auth.fields;

export const initLogin = createAsyncThunk(
  'auth/postSearch',
  async (payload = {}, { dispatch, getState }) => {
    const state = getState();

    const { username, password } = selectUserFieldValues(state);
    const API_URL = getAPIHost() + LOGIN_URL;
    const reqQuery = {
      username,
      password
    };

    request
      .post(API_URL)
      .send(reqQuery)
      .accept('application/json')
      .then((res) => {
        const { token } = res.body;

        localStorage.setItem('jwtToken', token);
        dispatch(toggleLoginModalVisibility());
        alert(
          'Successfull login!. You can now proceed to searching for rockets!'
        );
      })
      .catch((error) => {
        dispatch(toggleLoginModalVisibility());
        alert(
          'There was an error while trying to log you in. Please try again later!'
        );
        console.log('---Error Loggin IN user', error);
      });
  }
);

export const { updateField, toggleLoginModalVisibility } = auth.actions;
export default auth.reducer;
