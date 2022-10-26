import request from 'superagent';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { updateMetaData, updateSearchResults } from './pageData';

import { fieldNames, SEARCH_API_URL } from '../constants/searchBar';

import getAPIHost from '../../../utils/getAPIHost';

const searchBar = createSlice({
  name: 'searchBar',
  initialState: {
    fields: {
      values: {
        [fieldNames.type]: '',
        [fieldNames.status]: '',
        [fieldNames.serial]: ''
      },
      errors: {
        [fieldNames.serial]: ''
      }
    }
  },
  reducers: {
    updateField(state, { payload } = {}) {
      const { id, value } = payload;

      state.fields.values[id] = value;
    }
  }
});

export const selectSearchBarFieldValues = (state) => state.homePage.searchBar.fields.values;
export const selectSearchBarFieldErrors = (state) => state.homePage.searchBar.fields.errors;

export const postSearch = createAsyncThunk(
  'searchBar/postSearch',
  async (payload = {}, { dispatch, getState }) => {
    const state = getState();

    const { pageNo = 1 } = payload;

    dispatch(updateMetaData({ isSectionEnabled: true, isSectionLoading: true }));

    const fieldValues = selectSearchBarFieldValues(state) || {};
    const API_URL = getAPIHost() + SEARCH_API_URL;
    const reqPayload = {
      query: fieldValues,
      page: pageNo
    }

    request
      .post(API_URL)
      .send(reqPayload)
      .accept('application/json')
      .then((res) => {
        dispatch(updateSearchResults(res.body));
        dispatch(updateMetaData({ isSectionLoading: false }));
      })
      .catch((error) =>
        console.log('---Error searching', error)
      );
  }
);

export const {
  updateField
} = searchBar.actions;
export default searchBar.reducer;
